var XXX_Color_Helpers =
{
	
	/////////////////////////
	//
	// Light / Dark (Predominantly leaning towards white or black after desaturation...)
	//
	/////////////////////////
	
	rgbBrightness: function (red, green, blue)
	{
		red = XXX_Color.normalizeDecimalChannel(red);
		green = XXX_Color.normalizeDecimalChannel(green);
		blue = XXX_Color.normalizeDecimalChannel(blue);
		
		var result = XXX_Number.round((red * 0.299) + (green * 0.587) + (blue * 0.114));
		
		return result;
	},
	
	rgbIsLight: function (red, green, blue)
	{
		red = XXX_Color.normalizeDecimalChannel(red);
		green = XXX_Color.normalizeDecimalChannel(green);
		blue = XXX_Color.normalizeDecimalChannel(blue);
		
		var brightness = this.rgbBrightness(red, green, blue);
		
		var result = false;
		
		if (brightness > 127)
		{
			result = true;	
		}
				
		return result;
	},	
	rgbIsDark: function (red, green, blue)
	{
		var result = this.rgbIsLight(red, green, blue) ? false : true;
		
		return result;
	},	
	hexaDecimalFullIsLight: function (color)
	{
		var result = XXX_Color.hexaDecimalFullToRgb(color);
		
		result = this.rgbIsLight(result.red, result.green, result.blue);
								 
		return result;
	},	
	hexaDecimalFullIsDark: function (color)
	{
		var result = XXX_Color.hexaDecimalFullToRgb(color);
		
		result = this.rgbIsDark(result.red, result.green, result.blue);
								 
		return result;
	},
	
	// First lighter than second
	rgbIsLighter: function (red1, green1, blue1, red2, green2, blue2)
	{
		red1 = XXX_Color.normalizeDecimalChannel(red1);
		green1 = XXX_Color.normalizeDecimalChannel(green1);
		blue1 = XXX_Color.normalizeDecimalChannel(blue1);
		
		red2 = XXX_Color.normalizeDecimalChannel(red2);
		green2 = XXX_Color.normalizeDecimalChannel(green2);
		blue2 = XXX_Color.normalizeDecimalChannel(blue2);
		
		var brightness1 = this.rgbBrightness(red1, green1, blue1);
		var brightness2 = this.rgbBrightness(red2, green2, blue2);
		
		var result = false;
		
		if (brightness1 > brightness2)
		{
			result = true;	
		}
		
		return result;
	},
	rgbIsDarker: function (red1, green1, blue1, red2, green2, blue2)
	{
		var result = this.rgbIsLighter(red1, green1, blue1, red2, green2, blue2) ? false : true;
		
		return result;
	},	
	hexaDecimalFullIsLighter: function (color1, color2)
	{
		color1 = XXX_Color.hexaDecimalFullToRgb(color1);
		color2 = XXX_Color.hexaDecimalFullToRgb(color2);
		
		var result = this.rgbIsLighter(color1.red, color1.green, color1.blue, color2.red, color2.green, color2.blue);
								 
		return result;
	},	
	hexaDecimalFullIsDarker: function (color1, color2)
	{
		color1 = XXX_Color.hexaDecimalFullToRgb(color1);
		color2 = XXX_Color.hexaDecimalFullToRgb(color2);
		
		var result = this.rgbIsDarker(color1.red, color1.green, color1.blue, color2.red, color2.green, color2.blue);
								 
		return result;
	},
	
	/////////////////////////
	//
	// Warm / Cold, based on RYB pure hue... (0 - 180 is warm, 180-360 cold)
	//
	/////////////////////////
	
	rgbWarmth: function (red, green, blue)
	{
		red = XXX_Color.normalizeDecimalChannel(red);
		green = XXX_Color.normalizeDecimalChannel(green);
		blue = XXX_Color.normalizeDecimalChannel(blue);
		
		var result = XXX_Color.rgbToHsv(red, green, blue);
		
		var rybHue = XXX_Color.rgbHueToRybHue(result.hue);
		
		result = rybHue;
		
		return result;
	},
	
	rgbIsCold: function (red, green, blue)
	{
		red = XXX_Color.normalizeDecimalChannel(red);
		green = XXX_Color.normalizeDecimalChannel(green);
		blue = XXX_Color.normalizeDecimalChannel(blue);
		
		var result = this.rgbWarmth(red, green, blue);
		
		if (result <= 180)
		{
			result = false;	
		}
		else
		{
			result = true;
		}
		
		return result;
	},
	rgbIsWarm: function (red, green, blue)
	{
		var result = this.rgbIsCold(red, green, blue) ? false : true;
		
		return result;
	},
	hexaDecimalFullIsCold: function (color)
	{
		var result = XXX_Color.hexaDecimalFullToRgb(color);
		
		result = this.rgbIsCold(result.red, result.green, result.blue);
								 
		return result;
	},
	hexaDecimalFullIsWarm: function (color)
	{
		var result = XXX_Color.hexaDecimalFullToRgb(color);
		
		result = this.rgbIsWarm(result.red, result.green, result.blue);
								 
		return result;
	},
	
	// First colder than second
	rgbIsColder: function (red1, green1, blue1, red2, green2, blue2)
	{
		red1 = XXX_Color.normalizeDecimalChannel(red1);
		green1 = XXX_Color.normalizeDecimalChannel(green1);
		blue1 = XXX_Color.normalizeDecimalChannel(blue1);
		
		red2 = XXX_Color.normalizeDecimalChannel(red2);
		green2 = XXX_Color.normalizeDecimalChannel(green2);
		blue2 = XXX_Color.normalizeDecimalChannel(blue2);
		
		var color1 = this.rgbWarmth(red1, green1, blue1);
		var color2 = this.rgbWarmth(red2, green2, blue2);
		
		// Distance to 270 (The coldest color...)
		var coldness1 = (color1 > 270 && color1 <= 90) ? ((color1 <= 90) ? color1 + 90 : color1 - 270) : 270 - color1;
		var coldness2 = (color2 > 270 && color2 <= 90) ? ((color2 <= 90) ? color2 + 90 : color2 - 270) : 270 - color2;
		
		var result = false;
		
		if (coldness1 < coldness2)
		{
			result = true;	
		}
		
		return result;
	},	
	rgbIsWarmer: function (red1, green1, blue1, red2, green2, blue2)
	{
		var result = this.rgbIsColder(red1, green1, blue1, red2, green2, blue2) ? false : true;
		
		return result;
	},	
	hexaDecimalFullIsColder: function (color1, color2)
	{
		color1 = XXX_Color.hexaDecimalFullToRgb(color1);
		color2 = XXX_Color.hexaDecimalFullToRgb(color2);
		
		var result = this.rgbIsColder(color1.red, color1.green, color1.blue, color2.red, color2.green, color2.blue);
								 
		return result;
	},	
	hexaDecimalFullIsWarmer: function (color1, color2)
	{
		color1 = XXX_Color.hexaDecimalFullToRgb(color1);
		color2 = XXX_Color.hexaDecimalFullToRgb(color2);
		
		var result = this.rgbIsWarmer(color1.red, color1.green, color1.blue, color2.red, color2.green, color2.blue);
								 
		return result;
	}
};