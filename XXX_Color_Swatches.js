var XXX_Color_Swatches =
{
	getNormalSwatches: function ()
	{
		var result = [];
		
		for (var red = 0, redEnd = 256; red < redEnd; red += 51)
		{			
			var block = [];
			
			for (var blue = 0, blueEnd = 256; blue < blueEnd; blue += 51)
			{
				var row = [];
				
				for (var green = 0, greenEnd = 256; green < greenEnd; green += 51)
				{
					var swatch = XXX_Color.decimalChannelToHexaDecimalChannel(red) + XXX_Color.decimalChannelToHexaDecimalChannel(green) + XXX_Color.decimalChannelToHexaDecimalChannel(blue);
					
					row.push(swatch);
				}
				
				block.push(row);
			}
			
			result.push(block);
		}
		
		debug3 = result;
		
		var newResult = [];
		
		for (var i = 0; i < 12; ++i)
		{
			var newRow = [];
			
			if (i < 6)
			{
				newRow = XXX_Array.appendArray(newRow, result[0][i]);
				newRow = XXX_Array.appendArray(newRow, result[1][i]);
				newRow = XXX_Array.appendArray(newRow, result[2][i]);
			}
			else
			{
				var tempI = i - 6;
				
				newRow = XXX_Array.appendArray(newRow, result[3][tempI]);
				newRow = XXX_Array.appendArray(newRow, result[4][tempI]);
				newRow = XXX_Array.appendArray(newRow, result[5][tempI]); 
			}
			
			newResult.push(newRow);
		}
		
		result = newResult;
		
		
		debug4 = result;
			
		return result;
	},
	
	getBlackToWhiteSwatches: function ()
	{
		var result = [];
		
		result.push('000000');
		
		for (var grey = 0, greyEnd = 16; grey < greyEnd; ++grey)
		{
			var tempHexaDecimal = XXX_Color.decimalChannelToHexaDecimalChannel(grey).substr(1, 1);
			
			result.push(tempHexaDecimal + tempHexaDecimal + tempHexaDecimal + tempHexaDecimal + tempHexaDecimal + tempHexaDecimal);
		}
		
		result.push('FFFFFF');
		
		return [result];
	},
	
	getRgbSwatches: function ()
	{
		var result = [];
		
		
		// Red
		var red = [];
		
		var blackToRed = XXX_Color_Gradient.hexaDecimalFull('000000', 'FF0000', 10).splice(0, 9);
		var redToWhite = XXX_Color_Gradient.hexaDecimalFull('FF0000', 'FFFFFF', 9);
		
		red = XXX_Array.appendArray(red, blackToRed);
		red = XXX_Array.appendArray(red, redToWhite);
		
		result.push(red);
		
		// Green
		var green = [];
		
		var blackToGreen = XXX_Color_Gradient.hexaDecimalFull('000000', '00FF00', 10).splice(0, 9);
		var greenToWhite = XXX_Color_Gradient.hexaDecimalFull('00FF00', 'FFFFFF', 9);
		
		green = XXX_Array.appendArray(green, blackToGreen);
		green = XXX_Array.appendArray(green, greenToWhite);
		
		result.push(green);
		
		// Blue
		var blue = [];
		
		var blackToBlue = XXX_Color_Gradient.hexaDecimalFull('000000', '0000FF', 10).splice(0, 9);
		var blueToWhite = XXX_Color_Gradient.hexaDecimalFull('0000FF', 'FFFFFF', 9);
		
		blue = XXX_Array.appendArray(blue, blackToBlue);
		blue = XXX_Array.appendArray(blue, blueToWhite);
		
		result.push(blue);
		
		
		return result;
	},
	
	getCmySwatches: function ()
	{
		var result = [];
				
		// Cyan
		var cyan = [];
		
		var blackToCyan = XXX_Color_Gradient.hexaDecimalFull('000000', '00FFFF', 10).splice(0, 9);
		var cyanToWhite = XXX_Color_Gradient.hexaDecimalFull('00FFFF', 'FFFFFF', 9);
		
		cyan = XXX_Array.appendArray(cyan, blackToCyan);
		cyan = XXX_Array.appendArray(cyan, cyanToWhite);
		
		result.push(cyan);
		
		// Magenta
		var magenta = [];
		
		var blackToMagenta = XXX_Color_Gradient.hexaDecimalFull('000000', 'FF00FF', 10).splice(0, 9);
		var magentaToWhite = XXX_Color_Gradient.hexaDecimalFull('FF00FF', 'FFFFFF', 9);
		
		magenta = XXX_Array.appendArray(magenta, blackToMagenta);
		magenta = XXX_Array.appendArray(magenta, magentaToWhite);
		
		result.push(magenta);
		
		// Yellow
		var yellow = [];
		
		var blackToYellow = XXX_Color_Gradient.hexaDecimalFull('000000', 'FFFF00', 10).splice(0, 9);
		var yellowToWhite = XXX_Color_Gradient.hexaDecimalFull('FFFF00', 'FFFFFF', 9);
		
		yellow = XXX_Array.appendArray(yellow, blackToYellow);
		yellow = XXX_Array.appendArray(yellow, yellowToWhite);
		
		result.push(yellow);
		
		return result;
	},
	
	getColorSwatches: function (color)
	{
		var result = [];
				
		// Tints		
		var colorToWhite = XXX_Color_Gradient.hexaDecimalFull(color, 'FFFFFF', 10);
		
		result.push(colorToWhite);
		
		// Shades		
		var colorToBlack = XXX_Color_Gradient.hexaDecimalFull(color, '000000', 10);
		
		result.push(colorToBlack);
		
		// Tones
		var hsv = XXX_Color.hexaDecimalFullToHsv(color);
		var rgb = XXX_Color.hexaDecimalFullToRgb(color);
				
		var temp = XXX_Color.getRgbByRgbHue(hsv.hue);
		
		var pure = XXX_Color.rgbToHexaDecimalFull(temp.red, temp.green, temp.blue);
		
		var temp2 = XXX_Color_Helpers.rgbBrightness(rgb.red, rgb.green, rgb.blue);
		
		var grey = XXX_Color.rgbToHexaDecimalFull(temp2, temp2, temp2);
		
		// Tones to grey
		var colorToGrey = XXX_Color_Gradient.hexaDecimalFull(color, grey, 10);
		
		result.push(colorToGrey);
		
		// Tones to pure
		var colorToPure = XXX_Color_Gradient.hexaDecimalFull(color, pure, 10);
		
		result.push(colorToPure);
				
		return result;
	}
};
