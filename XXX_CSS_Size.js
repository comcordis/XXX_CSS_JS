
var XXX_CSS_Size =
{
	get: function (element)
	{
		var width = 0;
		var height = 0;
		
		element = XXX_DOM.get(element);
		/* Breaks chrome
		// Make sure it's visible
		var display = XXX_String.convertToLowerCase(this.getStyle(element, 'display'));
		
		if (display == 'none')
		{
			this.setStyle(element, 'display', 'block');
		}
		*/
		if (element.offsetWidth || element.offsetHeight)
		{
			width = element.offsetWidth;
			height = element.offsetHeight;
		}
		else if (element.style.pixelWidth || element.style.pixelHeight)
		{
			width = element.style.pixelWidth;
			height = element.style.pixelHeight;
		}
		
		/*
		if (display == 'none')
		{
			this.setStyle(element, 'display', 'none');
		}
		*/
		return {width: width, height: height};
	}
};


