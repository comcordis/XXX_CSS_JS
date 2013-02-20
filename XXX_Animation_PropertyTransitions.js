
var XXX_Animation_PropertyTransitions =
{
	prepare: function (element, propertyTransitions, frames)
	{
		var newPropertyTransitions = [];
		
		for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(propertyTransitions); i < iEnd; ++i)
		{
			var propertyTransition = propertyTransitions[i];
						
			var property = propertyTransition.property;			
			var startValue = XXX_Type.isValue(propertyTransition.startValue) ? propertyTransition.startValue : false;
			var endValue = propertyTransition.endValue;
			var unit = XXX_Type.isValue(propertyTransition.unit) ? propertyTransition.unit : false;
			
			switch (property)
			{
				case 'x':
				case 'y':
				case 'top':
				case 'right':
				case 'bottom':
				case 'left':
				
				case 'width':
				case 'height':
				
				case 'text-indent':
				
				case 'font-size':
				case 'line-height':
				
				case 'padding':
				case 'padding-top':
				case 'padding-right':
				case 'padding-bottom':
				case 'padding-left':
				
				case 'margin':
				case 'margin-top':
				case 'margin-right':
				case 'margin-bottom':
				case 'margin-left':
				
				case 'border-width':
				case 'border-top-width':
				case 'border-right-width':
				case 'border-bottom-width':
				case 'border-left-width':
				
				case 'border-spacing':
					var currentValue = false;
					
					if (startValue === false)
					{
						currentValue = XXX_CSS.getStyle(element, property);
								
						if (!currentValue || currentValue === '' || currentValue == 'auto')
						{
							currentValue = 0;
						}
						
						startValue = XXX_Type.makeInteger(currentValue);
					}
					
					if (unit === false)
					{
						unit = XXX_CSS.getStyleValueUnitForAnimation(currentValue);
					}
										
					newPropertyTransitions.push(
					{
						property: property,
						startValue: startValue,
						endValue: endValue,
						valueDelta: endValue - startValue,
						unit: unit
					});
					break;
				case 'opacity':
					if (startValue === false)
					{
						startValue = XXX_CSS.getStyle(element, 'opacity');
					}
					
					newPropertyTransitions.push(
					{
						property: property,
						startValue: startValue,
						endValue: endValue,
						valueDelta: endValue - startValue
					});
					break;
				case 'z-index':
				case 'z':
					if (startValue === false)
					{
						startValue = XXX_CSS.getStyle(element, 'z-index');
					}
					
					newPropertyTransitions.push(
					{
						property: property,
						startValue: startValue,
						endValue: endValue,
						valueDelta: endValue - startValue
					});
					break;
				case 'background-color':
				case 'border-color':
				case 'border-top-color':
				case 'border-right-color':
				case 'border-bottom-color':
				case 'border-left-color':
				case 'color':
				case 'outline-color':
					var startFullHexaDecimal = XXX_Color.normalizeFullHexaDecimal(XXX_CSS.getStyle(element, property));
					startValue = 1;
					
					var endFullHexaDecimal = XXX_Color.normalizeFullHexaDecimal(endValue);
					endValue = frames;
					
					var gradient = XXX_Color_Gradient.hexaDecimalFull(startFullHexaDecimal, endFullHexaDecimal, frames);
					
					newPropertyTransitions.push(
					{
						property: property,
						startValue: startValue,
						startFullHexaDecimal: startFullHexaDecimal,
						endValue: endValue,
						endFullHexaDecimal: endFullHexaDecimal,
						valueDelta: endValue - startValue,
						gradient: gradient
					});
					break;
				case 'custom':					
					newPropertyTransitions.push(
					{
						property: property,
						startValue: startValue,
						endValue: endValue,
						valueDelta: endValue - startValue
					});
					break;
			}
			
		}
		
		return newPropertyTransitions;
	},
	
	apply: function (element, propertyTransition, tempValue, frames)
	{
		// Format, round & other special actions to come up with valid values...
		
		switch (propertyTransition.property)
		{
			// Only round
			case 'x':
			case 'y':
			case 'top':
			case 'right':
			case 'bottom':
			case 'left':
			
			case 'text-indent':
				switch (propertyTransition.unit)
				{
					case 'px':
						tempValue = XXX_Number.round(tempValue);
						break;
					case '%':
						tempValue = XXX_Number.round(tempValue, 1);
						break;
					default:
						tempValue = XXX_Number.round(tempValue, 1);
						break;
				}
				
				tempValue = tempValue + propertyTransition.unit;
				
				XXX_CSS.setStyle(element, propertyTransition.property, tempValue);
				break;
			// Only positive & round values
			case 'width':
			case 'height':
			
			case 'font-size':
			
			case 'padding':
			case 'padding-top':
			case 'padding-right':
			case 'padding-bottom':
			case 'padding-left':
			
			case 'margin':
			case 'margin-top':
			case 'margin-right':
			case 'margin-bottom':
			case 'margin-left':
			
			case 'border-width':
			case 'border-top-width':
			case 'border-right-width':
			case 'border-bottom-width':
			case 'border-left-width':
			
			case 'border-spacing':
				switch (propertyTransition.unit)
				{
					case 'px':
						tempValue = XXX_Number.highest(XXX_Number.round(tempValue), 0);
						break;
					case '%':
						tempValue = XXX_Number.highest(XXX_Number.round(tempValue, 1), 0);
						break;
					default:
						tempValue = XXX_Number.highest(XXX_Number.round(tempValue, 1), 0);
						break;
				}
				
				tempValue = tempValue + propertyTransition.unit;
				
				XXX_CSS.setStyle(element, propertyTransition.property, tempValue);
				break;
			// Only decimal 2 values 0 - 1
			case 'opacity':	
				tempValue = XXX_Number.round(tempValue, 2);
				
				XXX_CSS.setStyle(element, propertyTransition.property, tempValue);
				break;
			// HexaDecimalFull
			case 'background-color':
			case 'border-color':
			case 'border-top-color':
			case 'border-right-color':
			case 'border-bottom-color':
			case 'border-left-color':
			case 'color':
			case 'outline-color':
				tempValue = '#' + propertyTransition.gradient[XXX_Number.highest(XXX_Number.lowest(XXX_Number.round(tempValue), frames) - 1, 0)];
				
				XXX_CSS.setStyle(element, propertyTransition.property, tempValue);
				break;
		}
		
	}
};