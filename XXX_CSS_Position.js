var XXX_CSS_Position =
{
	getRelativeToPage: function (element)
	{
		var left = 0;
		var top = 0;
		
		element = XXX_DOM.get(element);
				
		var offsetParent  = this.getOffsetParent(element);
		
		if (offsetParent)
		{
			do
			{
				left += element.offsetLeft;
				top += element.offsetTop;
								
				element = this.getOffsetParent(element);
			}
			while (element);
		}
		
		return {x: left, y: top};
	},
	
	getRelativeToViewPort: function (element)
	{
		element = XXX_DOM.get(element);
		
		var x = 0, y = 0;
		
		if (element)
		{
			if (XXX_CSS.getStyle(element, 'position') == 'fixed')
			{
				// TODO while loop for parents, untill fixed parent.
				x = element.offsetLeft;
				y = element.offsetTop;
			}
			else
			{
				var viewPortPosition = XXX_HTTP_Browser_ViewPort.getPosition();
		
				var elementPositionRelativeToPage = this.getRelativeToPage(element);
				
				x = elementPositionRelativeToPage.x - viewPortPosition.x;
				y = elementPositionRelativeToPage.y - viewPortPosition.y;
			}
		}
		
		return {x: x, y: y};
	},
	
	getOffsetParent: function (element, advancedMethod)
	{
		element = XXX_DOM.get(element);
		
		var originalElement = element;
		
		var found = false;
		
		if (!advancedMethod)
		{
			element = element.offsetParent;
			
			if (XXX_Type.isElement(element))
			{
				found = element;
			}
		}
		else
		{
			do
			{
				if (element && XXX_String.convertToLowerCase(element.tagName) !== 'body')
				{
					element = element.parentNode;
					
					if (XXX_Type.isElement(element))
					{
						var parentPosition = XXX_String.convertToLowerCase(XXX_CSS.getStyle(element, 'position'));
						
						// Do this stuff manually due to some offsetParent cross browser inconsistencies
						if (XXX_String.convertToLowerCase(element.tagName) === 'body' || (parentPosition === 'relative' || parentPosition === 'absolute'))
						{
							found = element;
						}
					}
					else
					{
						break;
					}
				}
				else
				{
					break;
				}
			}
			while (!found);
		}
		
		
		return found;
	},
	
	getRelativeToOffsetParent: function (element)
	{
		var left = 0;
		var top = 0;
		
		element = XXX_DOM.get(element);
		
		var offsetParent  = this.getOffsetParent(element);
				
		if (offsetParent)
		{		
			left += element.offsetLeft;
			top += element.offsetTop;
		}
		
		return {x: left, y: top};
	},
		
	outsidePage: function (element)
	{
		XXX_CSS.setStyle(element, ['top', 'left'], ['-10000px', '-10000px']);
	},
	
	standardizePreferredPositions: function (preferredPositions)
	{
		if (!XXX_Type.isArray(preferredPositions))
		{
			if (XXX_Type.isValue(preferredPositions))
			{
				preferredPositions = [preferredPositions];
			}
			else
			{				
				preferredPositions = ['top', 'topRight', 'topLeft', 'left', 'right', 'bottomRight', 'bottomLeft', 'bottom'];
			}
		}
		
		return preferredPositions;
	},
		
	nextToOffsetElement: function (offsetElement, sideElement, preferredPositions, spacing)
	{		
		preferredPositions = this.standardizePreferredPositions(preferredPositions);
				
		var offsetElementPositionRelativeToPage = this.getRelativeToPage(offsetElement);
		var offsetElementPositionRelativeToOffsetParent = this.getRelativeToOffsetParent(offsetElement);
		var offsetElementSize = XXX_CSS_Size.get(offsetElement);
				
		var sideElementPositionRelativeToPage = this.getRelativeToPage(sideElement);
		var sideElementSize = XXX_CSS_Size.get(sideElement);
				
		var viewPortPositionRelativeToPage = XXX_HTTP_Browser_ViewPort.getPosition();
		var viewPortSize = XXX_HTTP_Browser_ViewPort.getSize();
		
		// Determine best position
			
			var foundPosition = false;
			
			var firstPreferredPosition = preferredPositions[0];
									
			var position = {};
			var defaultPosition = {};
			
			for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(preferredPositions); i < iEnd; ++i)
			{
				var preferredPosition = preferredPositions[i];
				
				position = XXX_Calculate.getRelativeRectanglePositions(offsetElementPositionRelativeToPage, offsetElementSize, sideElementSize, preferredPosition, spacing);
				
				if (preferredPosition == firstPreferredPosition)
				{
					defaultPosition =
					{
						x: position.x,
						y: position.y
					};
				}
				
				if (XXX_Calculate.fullyWithinHitTest(viewPortPositionRelativeToPage, viewPortSize, position, sideElementSize))
				{
					foundPosition = preferredPosition;
					
					//XXX_JS.errorNotification(1, preferredPosition);
					
					break;
				}
			}
			
			if (!foundPosition)
			{
				//XXX_JS.errorNotification(1, firstPreferredPosition + ': Defaulting, none within viewPort');
				
				position = defaultPosition;
			}
			else
			{
				//XXX_JS.errorNotification(1, foundPosition + ': Within viewPort');
			}
			
			// Compensate for offsetParent
			position.x -= offsetElementPositionRelativeToPage.x - offsetElementPositionRelativeToOffsetParent.x;
			position.y -= offsetElementPositionRelativeToPage.y - offsetElementPositionRelativeToOffsetParent.y;
							
			XXX_CSS.setStyle(sideElement, ['left', 'top'], [position.x + 'px', position.y + 'px']);
	},
	
	nextToCoordinate: function (pointerPosition, sideElement, preferredPositions, spacing)
	{
		preferredPositions = this.standardizePreferredPositions();
		
		var sideElementPositionRelativeToPage = this.getRelativeToPage(sideElement);
		var sideElementSize = XXX_CSS_Size.get(sideElement);
				
		var viewPortPositionRelativeToPage = XXX_Manager_Page.getViewPortPosition();
		var viewPortSize = XXX_Manager_Page.getViewPortSize();
			
		// Determine best position
			
			var foundPosition = false;
			
			var firstPreferredPosition = preferredPositions[0];
									
			var position = {};
			var defaultPosition = {};
			
			for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(preferredPositions); i < iEnd; ++i)
			{
				var preferredPosition = preferredPositions[i];
				
				position = XXX_Calculate.getRelativeRectanglePositions(pointerPosition, {width: 1, height: 1}, sideElementSize, preferredPosition, spacing);
				
				if (preferredPosition == firstPreferredPosition)
				{
					defaultPosition =
					{
						x: position.x,
						y: position.y
					};
				}
				
				if (XXX_Calculate.fullyWithinHitTest(viewPortPositionRelativeToPage, viewPortSize, position, sideElementSize))
				{
					foundPosition = preferredPosition;
					
					break;
				}
			}
			
			if (!foundPosition)
			{
				//XXX_JS.errorNotification(1, firstPreferredPosition + ': Defaulting, none within viewPort');
				
				position = defaultPosition;
			}
			else
			{
				//XXX_JS.errorNotification(1, foundPosition + ': Within viewPort');
			}
			
			XXX_CSS.setStyle(sideElement, ['left', 'top'], [position.x + 'px', position.y + 'px']);
	},
	
	floatLeft: function (element)
	{
		XXX_CSS.setStyle(element, 'float', 'left');
	},
	
	floatRight: function (element)
	{
		XXX_CSS.setStyle(element, 'float', 'right');
	},
	
	stopFloating: function (element)
	{
		XXX_CSS.setStyle(element, 'float', 'none');
	}
};