var XXX_CSS_Fixes =
{
	////////////////////
	// IE fixes (As a better/lighter alternative to the proprietary expressions/behaviors etc.)
	////////////////////
	
	IE:
	{
		hasLayout: function (element)
		{
			element = XXX_DOM.get(element);
			
			return element.currentStyle.hasLayout;
		},
		
		zoom: function (element)
		{
			element = XXX_DOM.get(element);
			
		   if ((element.currentStyle && !element.currentStyle.hasLayout) || (!element.currentStyle && element.style.zoom === 'normal'))
		   {
			  element.style.zoom = 1;
		   }
		},
		
		setOpacity: function (element, opacity)
		{
			element = XXX_DOM.get(element);
			
			opacity *= 100;
			
			try
			{
			   //this.zoom(element);
			   
			   try
			   {
					element.filters.item('DXImageTransform.Microsoft.Alpha').opacity = opacity;
			   }
			   catch (e)
			   {
				   try
				   {
					   element.filters.item('alpha').opacity = opacity;
				   }
				   catch (e1)
				   {					   
						element.style.filter += 'alpha(opacity=' + opacity + ')';
						
						//this.zoom(element);
				   }
			   }
			}
			catch(e)
			{				
			}
		},
		
		getOpacity: function (element)
		{
			element = XXX_DOM.get(element);
			
			opacity = 1;
				
			if (element.filters)
			{	
				 try
				 {
					opacity = element.filters.item('DXImageTransform.Microsoft.Alpha').opacity / 100;
				 }
				 catch (e1)
				 {
					try
					{
					   opacity = element.filters.item('alpha').opacity / 100;
					}
					catch (e2)
					{
					}
				 }
			}
			
			return opacity;
		},
		
				
		/* Always reset before fixing again */
		
		doesLayoutNeedToBeFixed: function (area)
		{
			var result = false;
							
			if (!area._XXX_layoutFixed)
			{
				var classNames = XXX_CSS.getClasses(area.elements.areaLayout);
				
				for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(classNames); i < iEnd; ++i)
				{
					var className = classNames[i];
					
					if (className == 'XXX_layout_leftShrink' || className == 'XXX_layout_rightShrink' || className == 'XXX_layout_above')
					{
						result = true;
						
						break;
					}
				}
			}
			
			return result;
		},
		
		
		LTE_6:
		{
			setAlphaImageLoader: function (element, source, sizingMethod)
			{
				/*
				
				AlphaImageLoader:
					Applies an image to the background of any element whose height and width are both explicitly set (or if the position: absolute; style is set) and supports full alpha transparency.
				
				sizingMethods:
					- crop: Clips the image to fit the dimensions of the object.
					- image: Default. Enlarges or reduces the border of the object to fit the dimensions of the image.
					- scale: Stretches or shrinks the image to fill the borders of the object.
				
				*/
				
				if (element.filters['DXImageTransform.Microsoft.AlphaImageLoader'])
				{
					element.filters['DXImageTransform.Microsoft.AlphaImageLoader'].enabled = source ? true : false;
					
					if (source)
					{
						element.filters['DXImageTransform.Microsoft.AlphaImageLoader'].src = source;
						element.filters['DXImageTransform.Microsoft.AlphaImageLoader'].sizingMethod = sizingMethod;
					}
				}
				else if (source)
				{
					element.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + source + '",sizingMethod="' + sizingMethod + '")';
				}
			},
			
			// Doesn't fix background-repeat and background-position / CSS sprites
			
			// TODO don't redo once applied.
			
			fixPNGTransparency: function (element)
			{
				element = XXX_DOM.get(element);
				
				// IMG - PNG image source
				if (XXX_String.convertToLowerCase(element.tagName) == 'img')
				{
					if (XXX_String.endsWith(element.src, '.png'))
					{
						var width = XXX_CSS.getStyle(element, 'width');
						var height = XXX_CSS.getStyle(element, 'height');
						
						if (width == 'auto' && height == 'auto')
						{
							var size = XXX_CSS_Size.get(element);
							
							XXX_CSS.setStyle(element, ['width', 'height'], [size.width + 'px', size.height + 'px']);
						}
						
						this.setAlphaImageLoader(element, element.src, 'scale');
						
						element.src = XXX_Paths.composePublicWebURI('httpServer_static_XXX', 'presentation/images/transparentPixel.gif', 0, false);
					}
					else if (XXX_String.endsWith(element.src, 'transparentPixel.gif'))
					{
						this.setAlphaImageLoader(element);
					}
				}
				// background-image - PNG background
				else
				{
					var backgroundImage = XXX_CSS.getStyle(element, 'backgroundImage');
					
					if (backgroundImage && backgroundImage != 'none')
					{
						backgroundImage = XXX_String_Pattern.getMatches(backgroundImage, '^url\\(["\']?(.*\\.png)["\']?\\)$', 'i');
						
						backgroundImage = backgroundImage[1][0];
						
						if (backgroundImage)
						{
							var backgroundRepeat = XXX_CSS.getStyle(element, 'backgroundRepeat');
								
							var width = XXX_CSS.getStyle(element, 'width');
							var height = XXX_CSS.getStyle(element, 'height');
							
							if (width == 'auto' && height == 'auto')
							{
								var size = XXX_CSS_Size.get(element);
								
								XXX_CSS.setStyle(element, ['width', 'height'], [size.width + 'px', size.height + 'px']);
							}
							
							XXX_CSS.setStyle(element, 'backgroundImage', 'none');
							
							this.setAlphaImageLoader(element, backgroundImage, ((backgroundRepeat == 'no-repeat') ? 'crop' : 'scale'));
							
							/* 
							TODO
							
							* Making links unclickable
							* Text becomes difficult to select
							* Tabbing any links disappears when you lose focus sometimes content will suddenly be cut-off when overlapping and floats are concerned.
							
							for (var n = 0, nEnd = childNodes.length; n < nEnd; ++n)
							{
								if (childNodes[n].style)
								{
									childNodes[n].style.position = 'relative';
								}
							}
							*/
						}
					}
				}
			},
			
			getAreaElements: function (ID)
			{
				var result =
				{
					area: XXX_DOM.get(ID),
					area_sides: XXX_DOM.get(ID + '_sides'),
					area_side_top: XXX_DOM.get(ID + '_side_top'),
					area_side_bottom: XXX_DOM.get(ID + '_side_bottom'),
					area_side_left: XXX_DOM.get(ID + '_side_left'),
					area_side_right: XXX_DOM.get(ID + '_side_right'),
					area_body: XXX_DOM.get(ID + '_body')
				};
				
				return result;
			},
			
			resetFixedAreaLayout: function (ID, byPassCheck)
			{
				if (byPassCheck || XXX_CSS_Fixes.IE.doesLayoutNeedToBeFixed(ID))
				{
					var areaElements = this.getAreaElements(ID);
					
					XXX_CSS.setStyle(areaElements.area_sides, 'width', 'auto');	
					XXX_CSS.setStyle(areaElements.area_side_top, 'width', 'auto');	
					XXX_CSS.setStyle(areaElements.area_side_bottom, 'width', 'auto');	
					XXX_CSS.setStyle(areaElements.area_side_left, 'width','auto');	
					XXX_CSS.setStyle(areaElements.area_side_right, 'width', 'auto');	
					XXX_CSS.setStyle(areaElements.area_body, 'width', 'auto');	
					
					areaElements.area._XXX_layoutFixed = false;
				}
			},
			
			fixAreaLayout: function (ID, left, right, byPassCheck)
			{
				if (byPassCheck || XXX_CSS_Fixes.IE.doesLayoutNeedToBeFixed(ID))
				{
					left = XXX_Default.toMinimumInteger(left, 0);
					right = XXX_Default.toMinimumInteger(right, 0);
					
					var areaElements = this.getAreaElements(ID);
					
					var size = XXX_CSS_Size.get(areaElements.area);
					
					var width = size.width - left - right;
					
					XXX_CSS.setStyle(areaElements.area_sides, 'width', width + 'px');	
					XXX_CSS.setStyle(areaElements.area_side_top, 'width', width + 'px');	
					XXX_CSS.setStyle(areaElements.area_side_bottom, 'width', width + 'px');	
					XXX_CSS.setStyle(areaElements.area_side_left, 'width', width + 'px');	
					XXX_CSS.setStyle(areaElements.area_side_right, 'width', width + 'px');	
					XXX_CSS.setStyle(areaElements.area_body, 'width', width + 'px');
					
					areaElements.area._XXX_layoutFixed = true;
				}
			}	
		},
		
		LTE_7:
		{			
			resetFixedAreaLayout: function (ID, byPassCheck)
			{
				if (byPassCheck || XXX_CSS_Fixes.IE.doesLayoutNeedToBeFixed(ID))
				{
					var area = XXX_DOM.get(ID);
					var area_sides = XXX_DOM.get(ID + '_sides');
					
					XXX_CSS.setStyle(area_sides, 'width', 'auto');
					
					area._XXX_layoutFixed = false;
				}
			},
						
			fixAreaLayout: function (area, left, right, byPassCheck)
			{
				if (byPassCheck || XXX_CSS_Fixes.IE.doesLayoutNeedToBeFixed(area))
				{
					left = XXX_Default.toMinimumInteger(left, 0);
					right = XXX_Default.toMinimumInteger(right, 0);
										
					var size = XXX_CSS_Size.get(area.elements.areaLayout);
					
					var width = size.width - left - right;
									
					XXX_CSS.setStyle(area.elements.areaBody, 'width', width + 'px');
					
					area._XXX_layoutFixed = true;
				}
			}
		}
	}
};