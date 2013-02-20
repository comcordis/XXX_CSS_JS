var XXX_Color_Gradient =
{
	rgb: function (red1, green1, blue1, red2, green2, blue2, steps)
	{
		red1 = XXX_Color.normalizeDecimalChannel(red1);
		green1 = XXX_Color.normalizeDecimalChannel(green1);
		blue1 = XXX_Color.normalizeDecimalChannel(blue1);
		
		red2 = XXX_Color.normalizeDecimalChannel(red2);
		green2 = XXX_Color.normalizeDecimalChannel(green2);
		blue2 = XXX_Color.normalizeDecimalChannel(blue2);
		
		if (!steps || steps < 3)
		{
			steps = 3;	
		}
		
		--steps;
		
		var red = red1;
		var green = green1;
		var blue = blue1;
		
		var redStep = (red2 - red) / steps;
		var greenStep = (green2 - green) / steps;
		var blueStep = (blue2 - blue) / steps;
					
		var i = steps + 1;
		
		var result = [];
		
		while (i--)
		{
			result[i] = 
			{
				red: XXX_Number.round(red),
				green: XXX_Number.round(green),
				blue: XXX_Number.round(blue)
			};
			
			red += redStep;
			green += greenStep;
			blue += blueStep;
		}
		
		result.reverse();
		
		return result;
	},
	
	hexaDecimalFull: function (color1, color2, steps)
	{
		color1 = XXX_Color.normalizeHexaDecimalFull(color1);
		color2 = XXX_Color.normalizeHexaDecimalFull(color2);
				
		color1 =
		{
			red: XXX_Color.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(color1, 0, 2)),
			green: XXX_Color.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(color1, 2, 2)),
			blue: XXX_Color.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(color1, 4, 2))
		};
		
		color2 =
		{
			red: XXX_Color.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(color2, 0, 2)),
			green: XXX_Color.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(color2, 2, 2)),
			blue: XXX_Color.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(color2, 4, 2))
		};
		
		if (!steps || steps < 3)
		{
			steps = 3;	
		}
		
		--steps;
		
		var red = color1.red;
		var green = color1.green;
		var blue = color1.blue;
		
		var redStep = (color2.red - red) / steps;
		var greenStep = (color2.green - green) / steps;
		var blueStep = (color2.blue - blue) / steps;
					
		var i = steps + 1;
		
		var result = [];
		
		while (i--)
		{
			result[i] = XXX_Color.decimalChannelToHexaDecimalChannel(XXX_Number.round(red)) + XXX_Color.decimalChannelToHexaDecimalChannel(XXX_Number.round(green)) + XXX_Color.decimalChannelToHexaDecimalChannel(XXX_Number.round(blue));
			
			red += redStep;
			green += greenStep;
			blue += blueStep;
		}
		
		result.reverse();
		
		return result;
	}
};