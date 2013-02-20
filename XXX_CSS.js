// TODO http://www.sitepoint.com/detect-css3-property-browser-support/

var XXX_CSS =
{
	////////////////////
	// Page font size
	////////////////////
	
	pageFontSize: 68.75,
	
	defaultPageFontSize: function ()
	{
		this.pageFontSize = 68.75;
		
		this.updatePageFontSize();
	},
	
	increasePageFontSize: function ()
	{
		this.pageFontSize *= 1.25;
		
		this.updatePageFontSize();
	},
	
	decreasePageFontSize: function ()
	{
		this.pageFontSize /= 1.25;
		
		this.updatePageFontSize();
	},
	
	
	updatePageFontSize: function ()
	{
		this.setStyle(XXX_DOM.getBody(), 'font-size', XXX_Number.round(this.pageFontSize, 2) + '%');
	},
	/*
	initializePageFontSize: function ()
	{
		// TODO shouldn't be here!
		
		var decreasePageFontSizeElement = XXX_DOM.get('decreasePageFontSize');
		var defaultPageFontSizeElement = XXX_DOM.get('defaultPageFontSize');
		var increasePageFontSizeElement = XXX_DOM.get('increasePageFontSize');
		
		XXX_DOM_NativeEventDispatcher.addEventListener(decreasePageFontSizeElement, 'click', function (nativeEvent)
		{
			nativeEvent.preventDefault();
			
			XXX_CSS.decreasePageFontSize();
		});
		
		XXX_DOM_NativeEventDispatcher.addEventListener(defaultPageFontSizeElement, 'click', function (nativeEvent)
		{
			nativeEvent.preventDefault();
			
			XXX_CSS.defaultPageFontSize();
		});
		
		XXX_DOM_NativeEventDispatcher.addEventListener(increasePageFontSizeElement, 'click', function (nativeEvent)
		{
			nativeEvent.preventDefault();
			
			XXX_CSS.increasePageFontSize();
		});
	},
	*/
	////////////////////
	// Class
	////////////////////
	
	setClass: function (element, className)
	{
		element = XXX_DOM.get(element);
		
		element.className = className;
	},
	getClass: function (element)
	{
		element = XXX_DOM.get(element);
		
		return element.className;
	},
	
	hasClass: function (element, className)
	{
		element = XXX_DOM.get(element);
		
		var result = false;
		
		if (element.className == className)
		{
			result = true;
		}
		else
		{
			result = XXX_Array.hasValue(XXX_String.splitToArray(element.className, ' '), className);
		}
		
		return result;
	},
	getClasses: function (element)
	{
		element = XXX_DOM.get(element);
		
		return XXX_String.splitToArray(element.className, ' ');
	},
	
	addClass: function (element, className)
	{
		element = XXX_DOM.get(element);
		
		if (element.className == '')
		{
			element.className = className;
		}
		else if (element.className == className)
		{
		}
		else
		{
			if (!XXX_Array.hasValue(XXX_String.splitToArray(element.className, ' '), className))
			{
				element.className += ' ' + className;
			}
		}
	},
	removeClass: function (element, className)
	{
		element = XXX_DOM.get(element);			
		
		if (element.className == '')
		{
		}
		else if (element.className == className)
		{
			element.className = '';
		}
		else
		{
			var classNames = XXX_String.splitToArray(element.className, ' ');
			
			for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(classNames); i < iEnd; ++i)
			{
				if (classNames[i] == className)
				{
					classNames.splice(i, 1);
				}
			}
			
			element.className = XXX_Array.joinValuesToString(classNames, ' ');
		}
	},
	
	////////////////////
	// Style
	////////////////////
		
	styleValueConversions: [],
	
	domMethod: document.defaultView && document.defaultView.getComputedStyle,
	
	correctProperty: function (property)
	{
		if (property == 'x')
		{
			property = 'left';	
		}
		else if (property == 'y')
		{
			property = 'top';	
		}
		else if (property == 'z')
		{
			property = 'z-index';	
		}
		else if (property == 'alpha')
		{
			property = 'opacity';	
		}
		else if (property == 'transparency')
		{
			property = 'opacity';	
		}
		else if (property == 'cssFloat')
		{
			property = 'float';	
		}
		else if (property == 'styleFloat')
		{
			property = 'float';	
		}
		
		return property;
	},
	
	
	getStyle: function (element, styleProperty)
	{
		element = XXX_DOM.get(element);
		
		var styleValue;
		
		if (element)
		{
			styleValue = this._getStyle(element, styleProperty);
		}
						
		return styleValue;
	},
					
	_getStyle: function (element, styleProperty)
	{	
		styleProperty = this.correctProperty(styleProperty);
		
		if (styleProperty === 'float')
		{
			if (XXX_HTTP_Browser.engine === 'trident')
			{
				styleProperty = 'style-float';
			}
			else
			{
				styleProperty = 'css-float';
			}
		}
		
		styleProperty = XXX_String.formatToNotation('dash', styleProperty);
		
		// IE
		var stylePropertyCamelNotation = XXX_String.formatToNotation('camel', styleProperty);
		// Mozilla/Opera etc.
		var stylePropertyDashNotation = styleProperty;
		
		var styleValue;
		
		if (!XXX_Type.isAssociativeArray(element._XXX_previousCSSProperties))
		{
			element._XXX_previousCSSProperties = {};
		}
		
		if (XXX_Type.isValue(element._XXX_previousCSSProperties[stylePropertyCamelNotation]))
		{
			styleValue = element._XXX_previousCSSProperties[stylePropertyCamelNotation];
		}
		
		// Try the DOM method (Mozilla & Opera etc.)
		if (this.domMethod && XXX_Type.isEmpty(styleValue))
		{
			styleValue = document.defaultView.getComputedStyle(element, null).getPropertyValue(stylePropertyDashNotation);
		}
		
		if (XXX_HTTP_Browser.engine == 'trident' && XXX_Type.isEmpty(styleValue))
		{		
			// Try the IE method
			if (XXX_Type.isEmpty(styleValue) && element.currentStyle)
			{
				styleValue = element.currentStyle[stylePropertyCamelNotation];
				
				// Try runtimeStyle, used by htc files for IE...
				if (XXX_Type.isEmpty(styleValue) && element.runtimeStyle)
				{
					styleValue = element.runtimeStyle[stylePropertyCamelNotation];
				}
			}
		}
		
		// Try the inline style, bad inaccurate approach... yet better than nothing
		if (XXX_Type.isEmpty(styleValue) && element.style)
		{
			styleValue = element.style[stylePropertyCamelNotation];
		}
		
		if (styleProperty === 'opacity')
		{			
			if (XXX_HTTP_Browser.engine == 'trident')
			{
				styleValue = XXX_CSS_Fixes.IE.getOpacity(element);
			}
						
			if (!XXX_Type.isNumber(styleValue))
			{
				if (XXX_Type.isNumeric(styleValue))
				{
					styleValue = XXX_Type.makeNumber(styleValue);
				}
				else
				{
					styleValue = 1.0;
				}
			}
		}
		
		return styleValue;
	},
	
	setStyle: function (element, styleProperty, styleValue)
	{		
		element = XXX_DOM.get(element);
		
		if (element)
		{
			if ((XXX_Type.isArray(styleProperty) && XXX_Type.isArray(styleValue)) && (XXX_Array.getFirstLevelItemTotal(styleProperty) == XXX_Array.getFirstLevelItemTotal(styleValue)))
			{
				for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(styleProperty); i < iEnd; ++i)
				{
					this._setStyle(element, styleProperty[i], styleValue[i]);
				}
			}
			else
			{
				this._setStyle(element, styleProperty, styleValue);
			}
		}
	},
	
	_setStyle: function (element, styleProperty, styleValue)
	{
		styleProperty = this.correctProperty(styleProperty);
		
		var stylePropertyCamelNotation = XXX_String.formatToNotation('camel', styleProperty);
		var stylePropertyDashNotation = XXX_String.formatToNotation('dash', styleProperty);
		
		if (!XXX_Type.isAssociativeArray(element._XXX_previousCSSProperties))
		{
			element._XXX_previousCSSProperties = {};
		}
		
		if (element._XXX_previousCSSProperties[stylePropertyCamelNotation] != styleValue)
		{
			if (stylePropertyCamelNotation == 'float')
			{
				// .float not used because it's a js property...
				//element.style.float = styleValue;
				
				if (XXX_HTTP_Browser.engine == 'trident')
				{
					element.style.styleFloat = styleValue;
				}
				else
				{
					element.style.cssFloat = styleValue;
				}
			}
			
			if (stylePropertyCamelNotation == 'opacity')
			{
				styleValue = XXX_Number.round(styleValue, 2);
				
				if (XXX_HTTP_Browser.engine == 'trident')
				{
					XXX_CSS_Fixes.IE.setOpacity(element, styleValue);
				}
			}
			
			try
			{
				element.style[stylePropertyCamelNotation] = styleValue;
			}
			catch (nativeException)
			{	
			}
			
			element._XXX_previousCSSProperties[stylePropertyCamelNotation] = styleValue;
		}
	},
		
	getStyleValueUnitForAnimation: function (styleValue)
	{
		var result = 'px';
		
		var oneCharacterUnit = XXX_String.convertToLowerCase(XXX_String.getPart(styleValue, -1, 1));
		var twoCharacterUnit = XXX_String.convertToLowerCase(XXX_String.getPart(styleValue, -2, 2));
							
		if (oneCharacterUnit == '%')
		{
			result = '%';
		}
		else if (twoCharacterUnit == 'px')
		{
			result = 'px';
		}
		else if (twoCharacterUnit == 'ex')
		{
			result = 'ex';
		}
		else if (twoCharacterUnit == 'em')
		{
			result = 'em';
		}
		else if (twoCharacterUnit == 'in')
		{
			result = 'in';
		}
		else if (twoCharacterUnit == 'cm')
		{
			result = 'cm';
		}
		else if (twoCharacterUnit == 'mm')
		{
			result = 'mm';
		}
		else if (twoCharacterUnit == 'pt')
		{
			result = 'pt';
		}
		else if (twoCharacterUnit == 'pc')
		{
			result = 'pc';
		}
		else
		{
			result = 'px';
		}
		
		return result;
	},
	
	////////////////////
	// Rendering
	////////////////////
	
	forceRendering: function (element)
	{
		try
		{
			// TODO
			element = XXX_DOM.get(element);
			var textNode = XXX_DOM.createTextNode(' ');
			element.appendChild(textNode);
			element.removeChild(textNode);
		}
		catch (exception)
		{
		}
	},
		
	isDraggable: function (element)
	{
		element = XXX_DOM.get(element);
		
		var position = this.getStyle(element, 'position');
		
		var result = false;
		
		if (position == 'relative' || position == 'absolute')
		{
			result = true;
		}
		
		return result;
	}
};