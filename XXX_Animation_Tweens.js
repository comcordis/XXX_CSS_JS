/*

http://www.robertpenner.com/easing/penner_chapter7_tweening.pdf

*/

var XXX_Animation_Tweens =
{
	/////////////////////////
	//
	// Linear
	//
	/////////////////////////
	
	linear: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return startValue + (valueDelta * (timeProgress / timeDuration));
	},
	
	/////////////////////////
	//
	// Quadratic t^2
	//
	/////////////////////////
	
	// accelerating startValue zero velocity
	easeInQuadratic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return valueDelta * (timeProgress /= timeDuration) * timeProgress + startValue;
	},
	// Decelerating to zero velocity
	easeOutQuadratic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return -valueDelta * (timeProgress /= timeDuration) * (timeProgress - 2) + startValue;
	},
	
	// accelerating startValue zero velocity to half way, then decelerating to zero velocity
	easeInOutQuadratic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if ((timeProgress /= timeDuration / 2) < 1)
		{
			return valueDelta / 2 * timeProgress * timeProgress + startValue;
		}
		else
		{
			return -valueDelta / 2 * ((--timeProgress) * (timeProgress - 2) - 1) + startValue;
		}
	},
	// decelerating to zero velocity to half way, then accelerating startValue zero velocity
	easeOutInQuadratic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if ((timeProgress /= timeDuration / 2) < 1)
		{
			return -valueDelta / 2 * (--timeProgress * timeProgress - 1) + startValue;
		}
		else
		{
			return valueDelta / 2 * (--timeProgress * timeProgress + 1) + startValue;
		}
	},
	
	/////////////////////////
	//
	// Cubic t^3
	//
	/////////////////////////
	
	// accelerating startValue zero velocity
	easeInCubic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return valueDelta * (timeProgress /= timeDuration) * timeProgress * timeProgress + startValue;
	},
	// Decelerating to zero velocity
	easeOutCubic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return valueDelta * ((timeProgress = timeProgress / timeDuration - 1) * timeProgress * timeProgress + 1) + startValue;
	},
	
	// accelerating startValue zero velocity to half way, then decelerating to zero velocity
	easeInOutCubic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if ((timeProgress /= timeDuration / 2) < 1)
		{
			return valueDelta / 2 * timeProgress * timeProgress * timeProgress + startValue;
		}
		else
		{
			return valueDelta / 2 * ((timeProgress -= 2) * timeProgress * timeProgress + 2) + startValue;
		}
	},
	// decelerating to zero velocity to half way, then accelerating startValue zero velocity
	easeOutInCubic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		timeProgress /= timeDuration / 2;
		return valueDelta / 2 * (--timeProgress * timeProgress * timeProgress + 1) + startValue;
	},
	
	/////////////////////////
	//
	// Quartic t^4
	//
	/////////////////////////
	
	// accelerating startValue zero velocity
	easeInQuartic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return valueDelta * (timeProgress /= timeDuration) * timeProgress * timeProgress * timeProgress + startValue;
	},
	// Decelerating to zero velocity
	easeOutQuartic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return -valueDelta * ((timeProgress = timeProgress / timeDuration -1) * timeProgress * timeProgress * timeProgress - 1) + startValue;
	},
	
	// accelerating startValue zero velocity to half way, then decelerating to zero velocity
	easeInOutQuartic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if ((timeProgress /= timeDuration / 2) < 1)
		{
			return valueDelta / 2 * timeProgress * timeProgress * timeProgress * timeProgress + startValue;
		}
		else
		{
			return -valueDelta / 2 * ((timeProgress -= 2) * timeProgress * timeProgress * timeProgress - 2) + startValue;
		}
	},
	// decelerating to zero velocity to half way, then accelerating startValue zero velocity
	easeOutInQuartic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if ((timeProgress /= timeDuration / 2) < 1)
		{
			return -valueDelta / 2 * (--timeProgress * timeProgress * timeProgress * timeProgress - 1) + startValue;
		}
		else
		{
			return valueDelta / 2 * (--timeProgress * timeProgress * timeProgress * timeProgress + 1) + startValue;
		}
	},
	
	/////////////////////////
	//
	// Quintic t^5
	//
	/////////////////////////
	
	// accelerating startValue zero velocity
	easeInQuintic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return valueDelta * (timeProgress /= timeDuration) * timeProgress * timeProgress * timeProgress * timeProgress + startValue;
	},
	// Decelerating to zero velocity
	easeOutQuintic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return valueDelta * ((timeProgress = timeProgress / timeDuration - 1) * timeProgress * timeProgress * timeProgress * timeProgress + 1) + startValue;
	},
	
	// accelerating startValue zero velocity to half way, then decelerating to zero velocity
	easeInOutQuintic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if ((timeProgress /= timeDuration / 2) < 1)
		{
			return valueDelta / 2 * timeProgress * timeProgress * timeProgress * timeProgress * timeProgress + startValue;
		}
		else
		{
			return valueDelta / 2 * ((timeProgress -= 2) * timeProgress * timeProgress * timeProgress * timeProgress + 2) + startValue;
		}
	},
	// decelerating to zero velocity to half way, then accelerating startValue zero velocity
	easeOutInQuintic: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		timeProgress /= timeDuration / 2;
		return valueDelta / 2 * (--timeProgress * timeProgress * timeProgress * timeProgress * timeProgress + 1) + startValue;
	},
	
	/////////////////////////
	//
	// Sinusoidal sin(t)
	//
	/////////////////////////
	
	// accelerating startValue zero velocity
	easeInSinusoidal: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return -valueDelta * XXX_Number.cosine(timeProgress / timeDuration * (XXX_Number.pi() / 2)) + valueDelta + startValue;
	},
	// Decelerating to zero velocity
	easeOutSinusoidal: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return valueDelta * XXX_Number.sine(timeProgress / timeDuration * (XXX_Number.pi() / 2)) + startValue;
	},
	
	// accelerating startValue zero velocity to half way, then decelerating to zero velocity
	easeInOutSinusoidal: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return -valueDelta / 2 * (XXX_Number.cosine(XXX_Number.pi() * timeProgress / timeDuration) - 1) + startValue;
	},
	// decelerating to zero velocity to half way, then accelerating startValue zero velocity
	easeOutInSinusoidal: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if ((timeProgress /= timeDuration / 2) < 1)
		{
			return valueDelta / 2 * (XXX_Number.sine(XXX_Number.pi() * timeProgress / 2)) + startValue;
		}
		else
		{
			return -valueDelta / 2 * (XXX_Number.cosine(XXX_Number.pi() * --timeProgress / 2) -2) + startValue;
		}
	},
	
	/////////////////////////
	//
	// Exponential 2^t
	//
	/////////////////////////
	
	// accelerating startValue zero velocity
	easeInExponential: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return (timeProgress === 0) ? startValue : valueDelta * XXX_Number.power(2, 10 * (timeProgress / timeDuration - 1)) + startValue;
	},
	// Decelerating to zero velocity
	easeOutExponential: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return (timeProgress == timeDuration) ? startValue + valueDelta : valueDelta * (-XXX_Number.power(2, -10 * timeProgress / timeDuration) + 1) + startValue;
	},
	
	// accelerating startValue zero velocity to half way, then decelerating to zero velocity
	easeInOutExponential: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if (timeProgress === 0)
		{
			return startValue;
		}
		else if (timeProgress == timeDuration)
		{
			return startValue + valueDelta;
		}
		else if ((timeProgress /= timeDuration / 2) < 1)
		{
			return valueDelta / 2 * XXX_Number.power(2, 10 * (timeProgress - 1)) + startValue;
		}
		else
		{
			return valueDelta / 2 * (-XXX_Number.power(2, -10 * --timeProgress) + 2) + startValue;
		}
	},
	// decelerating to zero velocity to half way, then accelerating startValue zero velocity
	easeOutInExponential: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if (timeProgress === 0)
		{
			return startValue;
		}
		else if (timeProgress == timeDuration)
		{
			return startValue + valueDelta;
		}
		else if ((timeProgress /= timeDuration / 2) < 1)
		{
			return valueDelta / 2 * (-XXX_Number.power(2, -10 * timeProgress) + 1) + startValue;
		}
		else
		{
			return valueDelta / 2 * (XXX_Number.power(2, 10 * (timeProgress - 2)) + 1) + startValue;
		}
	},
	
	/////////////////////////
	//
	// Circular sqrt(1 - t^2)
	//
	/////////////////////////
	
	// accelerating startValue zero velocity
	easeInCircular: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return -valueDelta * (XXX_Number.squareRoot(1 - (timeProgress /= timeDuration) * timeProgress) - 1) + startValue;
	},
	// Decelerating to zero velocity
	easeOutCircular: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return valueDelta * XXX_Number.squareRoot(1 - (timeProgress = timeProgress / timeDuration - 1) * timeProgress) + startValue;
	},
	
	// accelerating startValue zero velocity to half way, then decelerating to zero velocity
	easeInOutCircular: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if ((timeProgress /= timeDuration / 2) < 1)
		{
			return -valueDelta / 2 * (XXX_Number.squareRoot(1 - timeProgress * timeProgress) - 1) + startValue;
		}
		else
		{
			return valueDelta / 2 * (XXX_Number.squareRoot(1 - (timeProgress -= 2) * timeProgress) + 1) + startValue;
		}
	},
	// decelerating to zero velocity to half way, then accelerating startValue zero velocity
	easeOutInCircular: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if ((timeProgress /= timeDuration / 2) < 1)
		{
			return valueDelta / 2 * XXX_Number.squareRoot(1 - (--timeProgress) * timeProgress)  + startValue;
		}
		else
		{
			return valueDelta / 2 * (2 - XXX_Number.squareRoot(1 - (--timeProgress) * timeProgress)) + startValue;
		}
	},
	
	/////////////////////////
	//
	// Elastic exponential decaying sine wave
	//
	/////////////////////////
	
	// accelerating startValue zero velocity
	easeInElastic: function (timeProgress, startValue, valueDelta, timeDuration, amplitude, period)
	{
		if (timeProgress === 0)
		{
			return startValue;
		}
		else if ((timeProgress /= timeDuration) == 1)
		{
			return startValue + valueDelta;
		}
		
		if (!period)
		{
			period = timeDuration * 0.3;
		}
		
		var sine;
		
		if (!amplitude || amplitude < XXX_Number.absolute(valueDelta))
		{
			amplitude = valueDelta;
			sine = period / 4;
		}
		else
		{
			sine = period / (2 * XXX_Number.pi()) * XXX_Number.arcSine(valueDelta / amplitude);
		}
		
		return -(amplitude * XXX_Number.power(2, 10 * (timeProgress -= 1)) * XXX_Number.sine((timeProgress * timeDuration - sine) * (2 * XXX_Number.pi()) / period)) + startValue;
	},
	// Decelerating to zero velocity
	easeOutElastic: function (timeProgress, startValue, valueDelta, timeDuration, amplitude, period)
	{
		if (timeProgress === 0)
		{
			return startValue;
		}
		else if ((timeProgress /= timeDuration) == 1)
		{
			return startValue + valueDelta;
		}
		
		if (!period)
		{
			period = timeDuration * 0.3;
		}
		
		var sine;
		
		if (!amplitude || amplitude < XXX_Number.absolute(valueDelta))
		{
			amplitude = valueDelta;
			sine = period / 4;
		}
		else
		{
			sine = period / (2 * XXX_Number.pi()) * XXX_Number.arcSine(valueDelta / amplitude);
		}
		
		return amplitude * XXX_Number.power(2, -10 * timeProgress) * XXX_Number.sine((timeProgress * timeDuration - sine) * (2 * XXX_Number.pi()) / period ) + valueDelta + startValue;
	},
	
	// accelerating startValue zero velocity to half way, then decelerating to zero velocity
	easeInOutElastic: function (timeProgress, startValue, valueDelta, timeDuration, amplitude, period)
	{
		if (timeProgress === 0)
		{
			return startValue;
		}
		else if ((timeProgress /= timeDuration / 2) == 2)
		{
			return startValue + valueDelta;
		}
		
		if (!period)
		{
			period = timeDuration * (0.3 * 1.5);
		}
		
		var sine;
		
		if (!amplitude)
		{
			amplitude = valueDelta;
			sine = period / 4;
		}
		else
		{
			sine = period / (2 * XXX_Number.pi()) * XXX_Number.arcSine(valueDelta / amplitude);
		}
		
		var result = 0;
					
		if (timeProgress < 1)
		{
			result =  -0.5 * (amplitude * XXX_Number.power(2, 10 * --timeProgress) * XXX_Number.sine((timeProgress * timeDuration - sine) * (2 * XXX_Number.pi()) / period)) + startValue;
		}
		else
		{
			result = amplitude * XXX_Number.power(2, -10 * --timeProgress) * XXX_Number.sine((timeProgress * timeDuration - sine) * (2 * XXX_Number.pi()) / period) * 0.5 + valueDelta + startValue;
		}
		
		//alert(result);
		
		return result;
	},
	// decelerating to zero velocity to half way, then accelerating startValue zero velocity
	easeOutInElastic: function (timeProgress, startValue, valueDelta, timeDuration, amplitude, period)
	{
		if (timeProgress === 0)
		{
			return startValue;
		}
		else if ((timeProgress /= timeDuration / 2) == 2)
		{
			return startValue + valueDelta;
		}
		
		if (!period)
		{
			period = timeDuration * (0.3 * 1.5);
		}
		
		var sine;
		
		if (!amplitude || amplitude < XXX_Number.absolute(valueDelta))
		{
			amplitude = valueDelta;
			sine = period / 4;
		}
		else
		{
			sine = period / (2 * XXX_Number.pi()) * XXX_Number.arcSine(valueDelta / amplitude);
		}
		
		if (timeProgress < 1)
		{
			return 0.5 * (amplitude * XXX_Number.power(2, -10 * timeProgress) * XXX_Number.sine((timeProgress * timeDuration - sine) * (2 * XXX_Number.pi()) / period)) + valueDelta / 2 + startValue;
		}
		else
		{
			return valueDelta / 2 + 0.5 * (amplitude * XXX_Number.power(2, 10 * (timeProgress - 2)) * XXX_Number.sine((timeProgress * timeDuration - sine) * (2 * XXX_Number.pi()) / period)) + startValue;
		}
	},
	
	/////////////////////////
	//
	// Back (s + 1) * t^3 - s * t^2
	//
	/////////////////////////
	
	// shoot has a default value of 1.70158, which produces an overshoot of 10 percent
	
	// accelerating startValue zero velocity
	easeInBack: function (timeProgress, startValue, valueDelta, timeDuration, shoot)
	{
		if (XXX_Type.isVariableUndefined(shoot))
		{
			shoot = 1.70158;
		}
		
		return valueDelta * (timeProgress /= timeDuration) * timeProgress * ((shoot + 1) * timeProgress - shoot) + startValue;
	},
	// Decelerating to zero velocity
	easeOutBack: function (timeProgress, startValue, valueDelta, timeDuration, shoot)
	{
		if (XXX_Type.isVariableUndefined(shoot))
		{
			shoot = 1.70158;
		}
		
		return valueDelta * ((timeProgress = timeProgress / timeDuration - 1) * timeProgress * ((shoot + 1) * timeProgress + shoot) + 1) + startValue;
	},
	
	// accelerating startValue zero velocity to half way, then decelerating to zero velocity
	easeInOutBack: function (timeProgress, startValue, valueDelta, timeDuration, shoot)
	{
		if (XXX_Type.isVariableUndefined(shoot))
		{
			shoot = 1.70158;
		}
		
		if ((timeProgress /= timeDuration / 2) < 1)
		{
			return valueDelta / 2 * (timeProgress * timeProgress * (((shoot *= (1.525)) + 1) * timeProgress - shoot)) + startValue;
		}
		else
		{
			return valueDelta / 2 * ((timeProgress -= 2) * timeProgress * (((shoot *= (1.525)) + 1) * timeProgress + shoot) + 2) + startValue;
		}
	},
	// decelerating to zero velocity to half way, then accelerating startValue zero velocity
	easeOutInBack: function (timeProgress, startValue, valueDelta, timeDuration, shoot)
	{
		if (XXX_Type.isVariableUndefined(shoot))
		{
			shoot = 1.70158;
		}
		
		if ((timeProgress /= timeDuration/2) < 1)
		{
			return valueDelta / 2 * (--timeProgress * timeProgress * (((shoot *= (1.525)) + 1) * timeProgress + shoot) + 1) + startValue;
		}
		else
		{
			return valueDelta / 2 * (--timeProgress * timeProgress * (((shoot *= (1.525)) + 1) * timeProgress - shoot) + 1) + startValue;
		}
	},
	
	/////////////////////////
	//
	// Bounce exponentially decaying parabolic bounce
	//
	/////////////////////////
	
	// accelerating startValue zero velocity
	easeInBounce: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		return valueDelta - this.easeOutBounce(timeDuration - timeProgress, 0, valueDelta, timeDuration) + startValue;
	},
	// Decelerating to zero velocity
	easeOutBounce: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if ((timeProgress /= timeDuration) < (1 / 2.75))
		{
			return valueDelta * (7.5625 * timeProgress * timeProgress) + startValue;
		}
		else if (timeProgress < (2 / 2.75))
		{
			return valueDelta * (7.5625 * (timeProgress -= (1.5 / 2.75)) * timeProgress + 0.75) + startValue;
		}
		else if (timeProgress < (2.5 / 2.75))
		{
			return valueDelta * (7.5625 * (timeProgress -= (2.25 / 2.75)) * timeProgress + 0.9375) + startValue;
		}
		else
		{
			return valueDelta * (7.5625 * (timeProgress -= (2.625 / 2.75)) * timeProgress + 0.984375) + startValue;
		}
	},
	
	// accelerating startValue zero velocity to half way, then decelerating to zero velocity
	easeInOutBounce: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if (timeProgress < timeDuration / 2)
		{
			return this.easeInBounce(timeProgress * 2, 0, valueDelta, timeDuration) * 0.5 + startValue;
		}
		else
		{
			return this.easeOutBounce(timeProgress * 2 - timeDuration, 0, valueDelta, timeDuration) * 0.5 + valueDelta * 0.5 + startValue;
		}
	},
	// decelerating to zero velocity to half way, then accelerating startValue zero velocity
	easeOutInBounce: function (timeProgress, startValue, valueDelta, timeDuration)
	{
		if (timeProgress < timeDuration / 2)
		{
			return this.easeOutBounce(timeProgress * 2, 0, valueDelta, timeDuration) * 0.5 + startValue;
		}
		else
		{
			return this.easeInBounce(timeProgress * 2 - timeDuration, 0, valueDelta, timeDuration) * 0.5 + valueDelta * 0.5 + startValue;
		}
	}
};