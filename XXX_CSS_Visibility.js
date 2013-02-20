var XXX_CSS_Visibility =
{
	show: function (element)
	{
		XXX_CSS.setStyle(element, 'visibility', 'visible');
	},
	
	hide: function (element)
	{
		XXX_CSS.setStyle(element, 'visibility', 'hidden');
	},
	
	expand: function (element)
	{
		element = XXX_DOM.get(element);
		
		if (element)
		{
			var display = 'block';
			
			if (element._XXX_CSS_Size_display)
			{
				display = element._XXX_CSS_Size_display;
			}
			
			XXX_CSS.setStyle(element, 'display', display);
		}
	},
	
	collapse: function (element)
	{
		element = XXX_DOM.get(element);
		
		if (element)
		{
			if (!element._XXX_CSS_Size_display)
			{
				element._XXX_CSS_Size_display = XXX_CSS.getStyle(element, 'display');
			}
		
			XXX_CSS.setStyle(element, 'display', 'none');
		}
	},
	
	setOpacity: function (element, opacity)
	{
		XXX_CSS.setStyle(element, 'opacity', opacity);
	},
	
	getOpacity: function (element)
	{
		return XXX_CSS.getStyle(element, 'opacity');
	}
};