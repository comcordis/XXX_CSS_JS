
var XXX_CSS_Depth =
{
	depth: 1001001,
	
	getNextHighest: function ()
	{
		return ++this.depth;
	},
	
	bringToFront: function (element)
	{
		element = XXX_DOM.get(element);
		
		XXX_CSS.setStyle(element, 'z-index', XXX_CSS_Depth.getNextHighest());
	},
	
	swap: function (element, element2)
	{
		element = XXX_DOM.get(element);
		element2 = XXX_DOM.get(element2);
		
		var elementDepth = XXX_CSS.getStyle(element, 'zIndex');
		
		if (!elementDepth || elementDepth === '' || elementDepth == 'auto')
		{
			elementDepth = XXX_CSS_Depth.getNextHighest();	
		}
		
		var element2Depth = XXX_CSS.getStyle(element2, 'zIndex');
		
		if (!element2Depth || element2Depth === '' || element2Depth == 'auto')
		{
			element2Depth = XXX_CSS_Depth.getNextHighest();
		}
		
		var temp = elementDepth;
		
		XXX_CSS.setStyle(element, element2Depth);
		XXX_CSS.setStyle(element2, temp);
	}
};
