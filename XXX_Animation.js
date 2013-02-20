
/*

Instead of animating frame by frame with a timeout, the animations work by a set length. Otherwise on slow computers the animation would take longer than on a fast one. This method allows a slow computer to "drop" frames.

multiple properties

{
	ID: 
	element:
	
	propertyTransitions
	[
		property
		startValue || default to getStyle
		endValue
		unit
	]
	
	ease
	
	timing:
	{
		duration
		delay
	}
	
	callbacks:
	{
		start
		frame
		end
	}
}

TODO maximum items animated at the same time, if unable delay them

*/

var XXX_Animation =
{
	animationCounter: 0,
	
	isAnimating: false,
	// 30 FPS = 1000 / 30 = 33.3 = 34
	frameDuration: 34,
	
	tweenTypes: [],
	
	animations: [],
	
	initialize: function ()
	{
		for (var tweenType in XXX_Animation_Tweens)
		{
			if (XXX_Animation_Tweens[tweenType])
			{
				this.tweenTypes.push(tweenType);	
			}
		}
	},
	
	animateSimpleFadeIn: function (ID, element, timing, callbacks)
	{		
		return this.animate(ID, element, [{property: 'opacity', startValue: 0, endValue: 1}], false, false, 'easeInOutQuintic', timing, callbacks);
	},
	
	animateSimpleFadeOut: function (ID, element, timing, callbacks)
	{		
		return this.animate(ID, element, [{property: 'opacity', startValue: 1, endValue: 0}], false, false, 'easeInOutQuintic', timing, callbacks);
	},
	
	animateCustom: function (animationID, customFunction, ease, timing, callbacks)
	{
		// High values 5000, 6000 in case of tweens with overshoots outside the range, some don't handle < 0 values well, so 0 - 100 is not a good thing.
		return this.animate(animationID, customFunction, [{property: 'custom', startValue: 5000, endValue: 6000}], false, false, ease, timing, callbacks);
	},
	
	animate: function (animationID, element, propertyTransitions, propertyStartSettings, propertyEndSettings, ease, timing, callbacks)
	{
		var i, iEnd;
		var j, jEnd;
		
		var now = XXX_TimestampHelpers.getCurrentMillisecondTimestamp();
		
		ease = this.processEase(ease);
				
		if (XXX_Type.isNumber(timing))
		{
			timing = XXX_Type.makeInteger(timing);
			timing = XXX_Number.round(timing);
			
			timing =
			{
				duration: timing,
				delay: 0
			};
		}
		
		if (!XXX_Type.isAssociativeArray(timing))
		{
			timing =
			{
				duration: 1000,
				delay: 0
			};
		}
				
		timing.previousProgress = 0;
		timing.duration = XXX_Default.toPositiveInteger(timing.duration, 0);
		timing.delay = XXX_Default.toPositiveInteger(timing.delay, 0);
		timing.now = now;
		timing.start = now + timing.delay;
		timing.frames = XXX_Number.ceil(timing.duration / this.frameDuration);
		
		if (!XXX_Type.isAssociativeArray(callbacks))
		{
			callbacks = {};
		}
		
		this.removeAnimation(animationID);
		
		var animation = {};
				
		animation.animationID = animationID;
		animation.element = element;
		
		animation.propertyTransitions = XXX_Animation_PropertyTransitions.prepare(element, propertyTransitions, timing.frames);
		
		
		animation.timing = timing;
		animation.ease = ease;
		animation.callbacks = callbacks;
				
		if (!XXX_Type.isFilledArray(propertyStartSettings))
		{
			propertyStartSettings = false;
		}
		
		animation.propertyStartSettings = propertyStartSettings;
		
		
		if (!XXX_Type.isFilledArray(propertyEndSettings))
		{
			propertyEndSettings = false;
		}
		
		animation.propertyEndSettings = propertyEndSettings;	
				
		
		this.animations.push(animation);
				
		if (!this.isAnimating)
		{
			this.startAnimating();
		}
	},
	
	processEase: function (ease)
	{
		if (ease != 'random' && !XXX_Array.hasValue(this.tweenTypes, ease))
		{
			ease = 'easeInOutQuintic';
		}
		
		if (ease == 'random')
		{
			ease = this.tweenTypes[XXX_Number.getRandomNumber(0, this.tweenTypes.length - 1)];	
		}
		
		return ease;
	},
	
	// Uses delay instead of interval, otherwise frames might get double animated...
	startAnimating: function ()
	{
		var XXX_Animation_instance = this;
		
		this.isAnimating = true;
		this.delayID = XXX_Timer.startDelay(this.frameDuration, function () { XXX_Animation_instance.animateFrame(); });		
	},
	
	stopAnimating: function ()
	{
		XXX_Timer.stopInterval(this.delayID);
		this.isAnimating = false;
	},
	
	abortAnimating: function ()
	{
		this.stopAnimating();		
		this.animations = [];
	},
	
	removeAnimation: function (animationID)
	{
		for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(this.animations); i < iEnd; ++i)
		{
			var animation = this.animations[i];
			
			if (animation.animationID == animationID)
			{
				this.animations.splice(i, 1);
				
				break;
			}
		}
	},
	
	pauseAnimation: function (animationID)
	{		
		var now = XXX_TimestampHelpers.getCurrentMillisecondTimestamp();
		
		for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(this.animations); i < iEnd; ++i)
		{
			var animation = this.animations[i];
			
			if (animation.animationID == animationID)
			{
				animation.previousProgress = animation.progress;
				animation.start = XXX_TimestampHelpers.getCurrentMillisecondTimestamp() + 1000000000;
			}
		}
	},
	
	resumeAnimation: function (animationID)
	{		
		var now = XXX_TimestampHelpers.getCurrentMillisecondTimestamp();
		
		for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(this.animations); i < iEnd; ++i)
		{
			var animation = this.animations[i];
			
			if (animation.animationID == animationID)
			{
				tween.start = now;
			}
		}
	},
		
	applyPropertyStartOrEndSettings: function (element, propertySettings)
	{
		var properties = [];
		var values = [];								
		
		for (var k = 0, kEnd = XXX_Array.getFirstLevelItemTotal(propertySettings); k < kEnd; ++k)
		{
			var propertySetting = propertySettings[k];
			
			properties.push(propertySetting.property);
			values.push(propertySetting.value);
		}
		
		XXX_CSS.setStyle(element, properties, values);
	},
	
	animateFrame: function ()
	{		
		var now = XXX_TimestampHelpers.getCurrentMillisecondTimestamp();
		
		for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(this.animations); i < iEnd; ++i)
		{
			// Because of the splicing
			if (iEnd > 0)
			{
				var animation = this.animations[i];
				
				// Check if it needs to be update or is waiting
				if (animation.timing.start <= now)
				{
					// Time within animation
					var progress = XXX_Number.lowest((now - animation.timing.start) + animation.timing.previousProgress, animation.timing.duration);
					var progressFraction = progress / animation.timing.duration;
					
					XXX_Animation.animations[i].timing.progress = progress;
					
					if (!animation.started)
					{
						if (progress < animation.timing.duration)
						{					
							if (animation.propertyStartSettings !== false)
							{
								this.applyPropertyStartOrEndSettings(animation.element, animation.propertyStartSettings);
							}
							
							this.animations[i].started = true;
							
							if (animation.callbacks.start)
							{
								animation.callbacks.start();
							}
						}
					}
									
					if (animation.callbacks.frameStart)
					{
						animation.callbacks.frameStart(progressFraction);
					}
					
					// Only don't apply styles if nativeMoving and not the last frame
					if (!XXX_Manager_Page.isNativeViewPortMoving() || progress < animation.timing.duration)
					{					
						for (var j = 0, jEnd = XXX_Array.getFirstLevelItemTotal(animation.propertyTransitions); j < jEnd; ++j)
						{
							var propertyTransition = animation.propertyTransitions[j];
						
							var tempValue = XXX_Animation_Tweens[animation.ease](progress, propertyTransition.startValue, propertyTransition.valueDelta, animation.timing.duration);
							
							if (propertyTransition.property == 'custom')
							{
								if (animation.element)
								{
									animation.element((tempValue - 5000) / 1000);
								}
							}
							else
							{
								XXX_Animation_PropertyTransitions.apply(animation.element, propertyTransition, tempValue, animation.frames);
							}
						}
					}
					
					if (animation.callbacks.frameEnd)
					{
						animation.callbacks.frameEnd(progressFraction);
					}
					
					// Check if it's finished
					if (progress >= animation.timing.duration)
					{
						if (animation.propertyEndSettings !== false)
						{
							this.applyPropertyStartOrEndSettings(animation.element, animation.propertyEndSettings);
						}
							
						// Remove the tween
						var e = this.animations.splice(i, 1);
						
						// Update loop settings
						--i;
						--iEnd;					
						
						// Perform the endCallback if it's set
						if (animation.callbacks.end)
						{
							animation.callbacks.end();
						}
						
					}
				}
			}
		}
		
		if (XXX_Array.getFirstLevelItemTotal(this.animations) == 0)
		{
			this.stopAnimating();
		}
		else
		{
			this.startAnimating();
		}
	}
};
	
