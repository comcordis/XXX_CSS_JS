
// Very important!!!: Conversions don't automatically round values so that conversions can be reversed without loss of precision, so round manually when values are used in CSS

var XXX_Color =
{
	/////////////////////////
	//
	// Patterns
	//
	/////////////////////////
	
	patterns:
	{
		// [Pattern, Pattern modifiers]
		hexaDecimalChannel: ['^#?([a-fA-F0-9](?:[a-fA-F0-9])?)$', ''],
		hexaDecimalFull: ['^#?([a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?)$', ''],
		hexaDecimalFullLength: ['^#?([a-fA-F0-9]{6})$', ''],
		rgbInteger: ['^rgb\\s*\\(\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))\\s*,\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))\\s*,\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))\\s*\\)$', 'i'],
		rgbPercentage: ['^rgb\\s*\\(\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*\\)$', 'i'],
		rgbaInteger: ['^rgba\\s*\\(\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))\\s*,\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))\\s*,\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9])),\\s*((?:1(?:\\.0+)?)|(?:0(?:\\.[0-9]+)?))\\s*\\)$', 'i'],
		rgbaPercentage: ['^rgba\\s*\\(\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%),\\s*((?:1(?:\\.0+)?)|(?:0(?:\\.[0-9]+)?))\\s*\\)$', 'i'],
		hsl: ['^hsl\\s*\\(\\s*(?:((?:360(?:\\.0+)?)|(?:(?:(?:3[0-5][0-9])|(?:[1-2][0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))(?:\\.[0-9]+)?)))\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*\\)$', 'i'],
		hsla: ['^hsla\\s*\\(\\s*(?:((?:360(?:\\.0+)?)|(?:(?:(?:3[0-5][0-9])|(?:[1-2][0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))(?:\\.[0-9]+)?)))\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%),\\s*((?:1(?:\\.0+)?)|(?:0(?:\\.[0-9]+)?))\\s*\\)$', 'i'],
		
		color: ['^(?:(?:rgb\\s*\\(\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))\\s*,\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))\\s*,\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))\\s*\\))|(?:rgb\\s*\\(\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*\\))|(?:rgba\\s*\\(\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))\\s*,\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))\\s*,\\s*((?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9])),\\s*((?:1(?:\\.0+)?)|(?:0(?:\\.[0-9]+)?))\\s*\\))|(?:rgba\\s*\\(\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%),\\s*((?:1(?:\\.0+)?)|(?:0(?:\\.[0-9]+)?))\\s*\\))|(?:hsl\\s*\\(\\s*(?:((?:360(?:\\.0+)?)|(?:(?:(?:3[0-5][0-9])|(?:[1-2][0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))(?:\\.[0-9]+)?)))\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*\\))|(?:hsla\\s*\\(\\s*(?:((?:360(?:\\.0+)?)|(?:(?:(?:3[0-5][0-9])|(?:[1-2][0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))(?:\\.[0-9]+)?)))\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%)\\s*,\\s*(?:((?:100(?:\\.0+)?)|(?:(?:[1-9][0-9]|[0-9])(?:\\.[0-9]+)?))%),\\s*((?:1(?:\\.0+)?)|(?:0(?:\\.[0-9]+)?))\\s*\\))|(?:#?([a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?)))$', 'gi']
	},
	
	isValidPattern: function (type, value)
	{
		var validType = false;
		
		var result = false;
		
		type = XXX_String.formatToNotation('camel', type);
		
		switch (type)
		{
			case 'hexaDecimalChannel':
			case 'hexaDecimalFull':
			case 'hexaDecimalFullLength':
			case 'rgbInteger':
			case 'rgbPercentage':
			case 'rgbaInteger':
			case 'rgbaPercentage':
			case 'hsl':
			case 'hsla':
			case 'color':
				validType = true;
				break;
		}
		
		if (validType)
		{			
			if (XXX_String_Pattern.hasMatch(value, this.patterns[type][0], this.patterns[type][1]))
			{
				result = true;
			}
			
			if (!result && type == 'color')
			{
				if (this.isName(value))
				{
					result = true;	
				}
			}
		}
		
		return result;
	},
	
	isValidColor: function (value)
	{
		return this.isValidPattern('color', value);
	},
	
	/////////////////////////
	//
	// Parsing
	//
	/////////////////////////
	
	parseHexaDecimalFull: function (value)
	{
		var result = false;
		
		if (this.isValidPattern('hexaDecimalFull', value))
		{
			var tempResult = XXX_String_Pattern.getMatches(value, this.patterns.hexaDecimalFull[0], this.patterns.hexaDecimalFull[1]);
						
			if (tempResult)
			{				
				tempResult = this.hexaDecimalFullToRgb(tempResult[0]);
				
				result =
				{
					red: tempResult.red,
					green: tempResult.green,
					blue: tempResult.blue
				};
			}
		}
		
		return result;
	},
	
	parseRgbInteger: function (value)
	{
		var result = false;
		
		if (this.isValidPattern('rgbInteger', value))
		{
			var tempResult = XXX_String_Pattern.getMatches(value, this.patterns.rgbInteger[0], this.patterns.rgbInteger[1]);
			
			if (tempResult)
			{				
				result =
				{
					red: this.normalizeDecimalChannel(tempResult[1]),
					green: this.normalizeDecimalChannel(tempResult[2]),
					blue: this.normalizeDecimalChannel(tempResult[3])
				};
			}
		}
		
		return result;
	},
	
	parseRgbPercentage: function (value)
	{
		var result = false;
		
		if (this.isValidPattern('rgbPercentage', value))
		{
			var tempResult = XXX_String_Pattern.getMatches(value, this.patterns.rgbPercentage[0], this.patterns.rgbPercentage[1]);
						
			if (tempResult)
			{				
				result =
				{
					red: XXX_Number.round(this.normalizePercentage(tempResult[1]) * 2.55),
					green: XXX_Number.round(this.normalizePercentage(tempResult[2]) * 2.55),
					blue: XXX_Number.round(this.normalizePercentage(tempResult[3]) * 2.55)
				};
			}
		}
		
		return result;
	},
	
	parseRgbaInteger: function (value)
	{
		var result = false;
		
		if (this.isValidPattern('rgbaInteger', value))
		{
			var tempResult = XXX_String_Pattern.getMatches(value, this.patterns.rgbaInteger[0], this.patterns.rgbaInteger[1]);
						
			if (tempResult)
			{
				var opacity = this.normalizeOpacity(tempResult[4]);
				
				result =
				{
					red: this.normalizeDecimalChannel(tempResult[1]),
					green: this.normalizeDecimalChannel(tempResult[2]),
					blue: this.normalizeDecimalChannel(tempResult[3]),
					opacity: opacity,
					alpha: opacity,
					transparency: opacity
				};
			}
		}
		
		return result;
	},
	
	parseRgbaPercentage: function (value)
	{
		var result = false;
		
		if (this.isValidPattern('rgbaPercentage', value))
		{
			var tempResult = XXX_String_Pattern.getMatches(value, this.patterns.rgbaPercentage[0], this.patterns.rgbaPercentage[1]);
						
			if (tempResult)
			{
				var opacity = this.normalizeOpacity(tempResult[4]);
				
				result =
				{
					red: XXX_Number.round(this.normalizePercentage(tempResult[1]) * 2.55),
					green: XXX_Number.round(this.normalizePercentage(tempResult[2]) * 2.55),
					blue: XXX_Number.round(this.normalizePercentage(tempResult[3]) * 2.55),
					opacity: opacity,
					alpha: opacity,
					transparency: opacity
				};
			}
		}
		
		return result;
	},
	
	parseHsl: function (value)
	{
		var result = false;
		
		if (this.isValidPattern('hsl', value))
		{
			var tempResult = XXX_String_Pattern.getMatches(value, this.patterns.hsl[0], this.patterns.hsl[1]);
						
			if (tempResult)
			{				
				var tempColor = this.hslToRgb(this.normalizeHue(tempResult[1]), this.normalizePercentage(tempResult[2]), this.normalizePercentage(tempResult[3]));
				
				result = tempColor;
			}
		}
		
		return result;
	},
	
	parseHsla: function (value)
	{
		var result = false;
		
		if (this.isValidPattern('hsla', value))
		{
			var tempResult = XXX_String_Pattern.getMatches(value, this.patterns.hsla[0], this.patterns.hsla[1]);
						
			if (tempResult)
			{
				var opacity = this.normalizeOpacity(tempResult[4]);
				
				var tempColor = this.hslToRgb(this.normalizeHue(tempResult[1]), this.normalizePercentage(tempResult[2]), this.normalizePercentage(tempResult[3]));
				
				result = tempColor;
				
				result.opacity = opacity;
				result.alpha = opacity;
				result.transparency = opacity;
			}
		}
		
		return result;
	},
	
	parseName: function (value)
	{
		var result = false;
		
		if (this.isNameNotation(value))
		{
			var tempResult = this.getHexaDecimalFullByName(value);
			
			result =
			{
				red: this.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(tempResult, 0, 2)),
				green: this.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(tempResult, 2, 2)),
				blue: this.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(tempResult, 4, 2))
			};
		}
		
		return result;
	},
	
	/////////////////////////
	//
	// Normalize
	//
	/////////////////////////
		
	colorConversions: [],
	
	normalizeColor: function (styleValue)
	{
		var result = false;
		var previouslyConverted = false;
		
		// Check for previous conversions
		for (var i = 0, iEnd = XXX_Array.getFirstLevelItemTotal(this.colorConversions); i < iEnd; ++i)
		{
			if (this.colorConversions[i][0] == styleValue)
			{
				result = this.colorConversions[i][1];
				
				previouslyConverted = true;
			}
		}
		
		if (!previouslyConverted)
		{
			var tempColor;
			
			// Normalize color notation to full hexaDecimal 000000 - FFFFFF, most likely first
			if (XXX_Color.isValidPattern('hexaDecimalFull', styleValue))
			{
				tempColor = XXX_Color.parseHexaDecimalFull(styleValue);
				
				result = XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.red) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.green) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.blue);			
			}
			else if (XXX_Color.isValidPattern('rgbInteger', styleValue))
			{
				tempColor = XXX_Color.parseRgbInteger(styleValue);
				
				result = XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.red) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.green) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.blue);			
			}
			else if (XXX_Color.isValidPattern('rgbPercentage', styleValue))
			{
				tempColor = XXX_Color.parseRgbPercentage(styleValue);
				
				result = XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.red) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.green) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.blue);
			}
			else if (XXX_Color.isValidPattern('rgbaInteger', styleValue))
			{
				tempColor = XXX_Color.parseRgbaInteger(styleValue);
				
				result = XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.red) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.green) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.blue);
			}
			else if (XXX_Color.isValidPattern('rgbaPercentage', styleValue))
			{
				tempColor = XXX_Color.parseRgbaPercentage(styleValue);
				
				result = XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.red) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.green) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.blue);
			}
			else if (XXX_Color.isValidPattern('hsl', styleValue))
			{
				tempColor = XXX_Color.parseHsl(styleValue);
				
				result = XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.red) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.green) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.blue);
			}
			else if (XXX_Color.isValidPattern('hsla', styleValue))
			{
				tempColor = XXX_Color.parseHsla(styleValue);
				
				result = XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.red) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.green) + XXX_Color.decimalChannelToHexaDecimalChannel(tempColor.blue);
			}
			
			this.colorConversions.push([styleValue, result]);
		}
		
		return result;
	},
	
	/////////////////////////
	//
	// Color names
	//
	/////////////////////////
	
	standardColorNames:
	{
		aqua: '00FFFF',
		black: '000000',
		blue: '0000FF',
		fuchsia: 'FF00FF',
		gray: '808080',
		green: '008000',
		grey: '808080',
		lime: '00FF00',
		maroon: '800000',
		navy: '000080',
		olive: '808000',
		purple: '800080',
		red: 'FF0000',
		silver: 'C0C0C0',
		teal: '008080',
		white: 'FFFFFF',
		yellow: 'FFFF00'
	},
	crossBrowserColorNames:
	{
		aliceBlue: 'F0F8FF',
		antiqueWhite: 'FAEBD7',
		aqua: '00FFFF',
		aquaMarine: '7FFFD4',
		azure: 'F0FFFF',
		beige: 'F5F5DC',
		bisque: 'FFE4C4',
		black: '000000',
		blanchedAlmond: 'FFEBCD',
		blue: '0000FF',
		blueViolet: '8A2BE2',
		brown: 'A52A2A',
		burlyWood: 'DEB887',
		cadetBlue: '5F9EA0',
		chartreuse: '7FFF00',
		chocolate: 'D2691E',
		coral: 'FF7F50',
		cornflowerBlue: '6495ED',
		cornsilk: 'FFF8DC',
		crimson: 'DC143C',
		cyan: '00FFFF',
		darkBlue: '00008B',
		darkCyan: '008B8B',
		darkGoldenRod: 'B8860B',
		darkGray: 'A9A9A9',
		darkGreen: '006400',
		darkGrey: 'A9A9A9',
		darkKhaki: 'BDB76B',
		darkMagenta: '8B008B',
		darkOliveGreen: '556B2F',
		darkOrange: 'FF8C00',
		darkOrchid: '9932CC',
		darkRed: '8B0000',
		darkSalmon: 'E9967A',
		darkSeaGreen: '8FBC8F',
		darkSlateBlue: '483D8B',
		darkSlateGray: '2F4F4F',
		darkSlateGrey: '2F4F4F',
		darkTurquoise: '00CED1',
		darkViolet: '9400D3',
		deepPink: 'FF1493',
		deepskyBlue: '00BFFF',
		dimGray: '696969',
		dimGrey: '696969',
		dodgerBlue: '1E90FF',
		fireBrick: 'B22222',
		floralWhite: 'FFFAF0',
		forestGreen: '228B22',
		fuchsia: 'FF00FF',
		gainsboro: 'DCDCDC',
		ghostWhite: 'F8F8FF',
		gold: 'FFD700',
		goldenRod: 'DAA520',
		gray: '808080',
		green: '008000',
		greenYellow: 'ADFF2F',
		grey: '808080',
		honeyDew: 'F0FFF0',
		hotPink: 'FF69B4',
		indianRed: 'CD5C5C',
		indigo: '4B0082',
		ivory: 'FFFFF0',
		khaki: 'F0E68C',
		lavender: 'E6E6FA',
		lavenderBlush: 'FFF0F5',
		lawnGreen: '7CFC00',
		lemonChiffon: 'FFFACD',
		lightBlue: 'ADD8E6',
		lightCoral: 'F08080',
		lightCyan: 'E0FFFF',
		lightGoldenRodYellow: 'FAFAD2',
		lightGray: 'D3D3D3',
		lightGreen: '90EE90',
		lightGrey: 'D3D3D3',
		lightPink: 'FFB6C1',
		lightSalmon: 'FFA07A',
		lightSeaGreen: '20B2AA',
		lightSkyBlue: '87CEFA',
		lightSlateGray: '778899',
		lightSlateGrey: '778899',
		lightSteelBlue: 'B0C4DE',
		lightYellow: 'FFFFE0',
		lime: '00FF00',
		limeGreen: '32CD32',
		linen: 'FAF0E6',
		magenta: 'FF00FF',
		maroon: '800000',
		mediumAquamarine: '66CDAA',
		mediumBlue: '0000CD',
		mediumOrchid: 'BA55D3',
		mediumPurple: '9370DB',
		mediumSeaGreen: '3CB371',
		mediumSlateBlue: '7B68EE',
		mediumSpringGreen: '00FA9A',
		mediumTurquoise: '48D1CC',
		mediumVioletRed: 'C71585',
		midnightBlue: '191970',
		mintCream: 'F5FFFA',
		mistyRose: 'FFE4E1',
		moccasin: 'FFE4B5',
		navajoWhite: 'FFDEAD',
		navy: '000080',
		oldlace: 'FDF5E6',
		olive: '808000',
		oliveDrab: '6B8E23',
		orange: 'FFA500',
		orangeRed: 'FF4500',
		orchid: 'DA70D6',
		paleGoldenRod: 'EEE8AA',
		paleGreen: '98FB98',
		paleTurquoise: 'AFEEEE',
		paleVioletRed: 'DB7093',
		papayaWhip: 'FFEFD5',
		peachPuff: 'FFDAB9',
		peru: 'CD853F',
		pink: 'FFC0CB',
		plum: 'DDA0DD',
		powderBlue: 'B0E0E6',
		purple: '800080',
		red: 'FF0000',
		rosyBrown: 'BC8F8F',
		royalBlue: '4169E1',
		saddleBrown: '8B4513',
		salmon: 'FA8072',
		sandyBrown: 'F4A460',
		seaGreen: '2E8B57',
		seaShell: 'FFF5EE',
		sienna: 'A0522D',
		silver: 'C0C0C0',
		skyBlue: '87CEEB',
		slateBlue: '6A5ACD',
		slateGray: '708090',
		slateGrey: '708090',
		snow: 'FFFAFA',
		springGreen: '00FF7F',
		steelBlue: '4682B4',
		tan: 'D2B48C',
		teal: '008080',
		thistle: 'D8BFD8',
		tomato: 'FF6347',
		turquoise: '40E0D0',
		violet: 'EE82EE',
		wheat: 'F5DEB3',
		white: 'FFFFFF',
		whiteSmoke: 'F5F5F5',
		yellow: 'FFFF00',
		yellowGreen: '9ACD32'
	},
	
	isStandardName: function (value)
	{
		value = XXX_Type.makeString(value);
		value = XXX_String.formatToNotation('camel', value);
		
		var standardName = this.standardColorNames[value];
		
		var result = false;
		
		if (XXX_Type.isValue(standardName))
		{
			result = true;
		}
		
		return result;
	},
	
	isName: function (value)
	{
		value = XXX_Type.makeString(value);
		value = XXX_String.formatToNotation('camel', value);
		
		var name = this.crossBrowserColorNames[value];
		
		var result = false;
		
		if (XXX_Type.isValue(name))
		{
			result = true;
		}
		
		return result;
	},
	
	getHexaDecimalFullByName: function (value)
	{
		value = XXX_Type.makeString(value);
		value = XXX_String.formatToNotation('camel', value);
		
		var hexaDecimalFull = this.crossBrowserColorNames[value];
		
		var result = false;
		
		if (XXX_Type.isValue(hexaDecimalFull))
		{
			result = hexaDecimalFull;
		}
		
		return result;
	},
	
	getNameByHexaDecimalFull: function (value)
	{
		value = this.normalizeFullHexaDecimal(value);
		
		var result = false;
		
		for (var color in this.crossBrowserColorNames)
		{
			if (this.crossBrowserColorNames[color] == value)
			{
				result = color;
				break;
			}
		}
		
		return result;
	},
	
	/////////////////////////
	//
	// Normalization
	//
	/////////////////////////
	
	// Any hexaDecimal to normalized form FF
	normalizeHexaDecimalChannel: function (value)
	{
		var result = value;
		
		result = XXX_Type.makeString(result);
		
		// Get rid of preceeding and trailing whitespace
		result = XXX_String.trim(result);
		
		// Get rid of the # prefix
		if (XXX_String.getPart(result, 0, 1) === '#')
		{
			result = XXX_String.getPart(result, 1);
		}
		
		// Get rid of preceeding and trailing whitespace
		result = XXX_String.trim(result);
		
		// Get rid of all characters beyond 2
		if (XXX_String.getCharacterLength(result) > 2)
		{
			result = XXX_String.getPart(result, 0, 2);	
		}
		
		result = this.hexaDecimalChannelToDecimalChannel(result);
		
		result = this.decimalChannelToHexaDecimalChannel(result);
		
		return XXX_String.convertToUpperCase(result);
	},
	
	// Any hexaDecimal to normalized form FFFFFF
	normalizeHexaDecimalFull: function (value)
	{
		var result = '000000';
		
		value = XXX_Type.makeString(value);
		
		// Get rid of preceeding and trailing whitespace
		value = XXX_String.trim(value);
		
		// Get rid of the # prefix
		if (XXX_String.getPart(value, 0, 1) === '#')
		{
			value = XXX_String.getPart(value, 1);
		}
		
		// Get rid of preceeding and trailing whitespace
		value = XXX_String.trim(value);
		
		// Get rid of all characters beyond 6
		if (value.length > 6)
		{
			value = XXX_String.getPart(value, 0, 6);	
		}
		
		// Check if it's a valid pattern
		if (this.isValidPattern('hexaDecimalFull', value))
		{
			switch (XXX_String.getCharacterLength(value))
			{
				case 3:
					result = XXX_String.getPart(value, 0, 1) + XXX_String.getPart(value, 0, 1) + XXX_String.getPart(value, 1, 1) + XXX_String.getPart(value, 1, 1) + XXX_String.getPart(value, 2, 1) + XXX_String.getPart(value, 2, 1);
					break;
				case 6:
					result = value;
					break;
			}
		}
		
		return XXX_String.convertToUpperCase(result);
	},
	
	// Any decimal to normalized form 0 - 255
	normalizeDecimalChannel: function (value)
	{
		var result = (XXX_Type.isNumeric(value)) ? value : (!XXX_Type.makeNumber(value) ? 0 : XXX_Type.makeNumber(value));
		
		result = XXX_Number.forceInRange(result, 0, 255);
				
		return result;
	},
	
	// Any decimal to normalized form 0 - 16777215
	normalizeDecimalFull: function (value)
	{
		var result = (XXX_Type.isNumeric(value)) ? value : (!XXX_Type.makeNumber(value) ? 0 : XXX_Type.makeNumber(value));
		
		result = XXX_Number.forceInRange(result, 0, 16777215);
		
		return result;
	},
	
	// Any hue to normalized hue 0 - 360
	normalizeHue: function (value)
	{
		var result = (XXX_Type.isNumeric(value)) ? value : (!XXX_Type.makeNumber(value) ? 0 : XXX_Type.makeNumber(value));
		
		result = XXX_Number.forceInRange(result, 0, 360);
		
		if (result == 360)
		{
			result = 0;	
		}
		
		return result;
	},
	
	// Any percentage to normalized percentage 0 - 100
	normalizePercentage: function (value)
	{
		var result = (XXX_Type.isNumeric(value)) ? value : (!XXX_Type.makeNumber(value) ? 0 : XXX_Type.makeNumber(value));
		
		result = XXX_Number.forceInRange(result, 0, 100);
		
		return result;
	},
	
	// Any opacity to normalized percentage 0 - 1
	normalizeOpacity: function (value)
	{
		var result = (XXX_Type.isNumeric(value)) ? value : (!XXX_Type.makeNumber(value) ? 0 : XXX_Type.makeNumber(value));
		
		result = XXX_Number.forceInRange(result, 0, 1);
		
		return result;
	},
		
	/////////////////////////
	//
	// Channel
	//
	/////////////////////////
	
	// 0 - 255 to 00 - FF
	decimalChannelToHexaDecimalChannel: function (value)
	{
		var result = this.normalizeDecimalChannel(value);
		
		result = XXX_Number.convertBase(result, 10, 16);
		
		// zerofill
		result = XXX_String.padLeft(result, '0', 2);
				
		return XXX_String.convertToUpperCase(result);
	},	
	// 00 - FF to 0 - 255
	hexaDecimalChannelToDecimalChannel: function (value)
	{
		var result = 0;
				
		if (this.isValidPattern('hexaDecimalChannel', value))
		{
			result = XXX_Number.convertBase(value, 16, 10);
		}
		
		return result;
	},
		
	/////////////////////////
	//
	// Decimal
	//
	/////////////////////////
	
	// 0 - 16777215 to 000000 - FFFFFF
	decimalFullToHexaDecimalFull: function (value)
	{
		var result = this.normalizeDecimalFull(value);
		
		result = XXX_Number.convertBase(result, 10, 16);
		
		result = this.normalizeHexaDecimalFull(result);
		
		return result;
	},	
	// 0 - 16777215 to 0 - 255, 0 - 255, 0 - 255
	decimalFullToRgb: function (value)
	{
		var result = this.decimalFullToHexaDecimalFull(value);
		
		result = this.hexaDecimalFullToRgb(result);
		
		return result;
	},
	// 0 - 16777215 to 0 - 360, 0 - 100, 0 - 100
	decimalFullToHsv: function (value)
	{
		var result = this.decimalFullToHexaDecimalFull(value);
		
		result = this.hexaDecimalFullToHsv(result);
		
		return result;
	},
	// 0 - 16777215 to 0 - 360, 0 - 100, 0 - 100
	decimalFullToHsl: function (value)
	{
		var result = this.decimalFullToRgb(value);
		
		result = this.rgbToHsl(result.red, result.green, result.blue);
		
		return result;
	},
	
	/////////////////////////
	//
	// HexaDecimal
	//
	/////////////////////////
	
	// 000000 - FFFFFF to 0 - 16777215
	hexaDecimalFullToDecimalFull: function (value)
	{
		var result = this.normalizeHexaDecimalFull(value);
		
		result = XXX_Number.convertBase(result, 16, 10);
		
		return result;
	},	
	// 000000 - FFFFFF to 0 - 255, 0 - 255, 0 - 255
	hexaDecimalFullToRgb: function (value)
	{
		var result = this.normalizeHexaDecimalFull(value);
		
		result =
		{
			red: this.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(result, 0, 2)),
			green: this.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(result, 2, 2)),
			blue: this.hexaDecimalChannelToDecimalChannel(XXX_String.getPart(result, 4, 2))
		};
		
		return result;
	},
	// 000000 - FFFFFF to 0 - 360, 0 - 100, 0 - 100
	hexaDecimalFullToHsv: function (value)
	{
		var result = this.normalizeHexaDecimalFull(value);
		
		result = this.hexaDecimalFullToRgb(value);
		
		result = this.rgbToHsv(result.red, result.green, result.blue);
		
		return result;
	},
	// 000000 - FFFFFF to 0 - 360, 0 - 100, 0 - 100
	hexaDecimalFullToHsl: function (value)
	{
		var result = this.normalizeHexaDecimalFull(value);
		
		result = this.hexaDecimalFullToRgb(value);
		
		result = this.rgbToHsl(result.red, result.green, result.blue);
		
		return result;
	},
	
	/////////////////////////
	//
	// RGB
	//
	/////////////////////////
	
	// 0 - 100, 0 - 100, 0 - 100 to 0 - 255, 0 - 255, 0 - 255
	rgbPercentageToRgb: function (red, green, blue)
	{
		red = this.normalizePercentage(red) * 2.55;
		green = this.normalizePercentage(green) * 2.55;
		blue = this.normalizePercentage(blue) * 2.55;
		
		var result =
		{
			red: red,
			green: green,
			blue: blue
		};
		
		return result;
	},
	
	// 0 - 255, 0 - 255, 0 - 255 to 0 - 16777215
	rgbToDecimalFull: function (red, green, blue)
	{
		red = this.normalizeDecimalChannel(red);
		green = this.normalizeDecimalChannel(green);
		blue = this.normalizeDecimalChannel(blue);
		
		var result = this.rgbToHexaDecimalFull(red, green, blue);
		
		result = this.hexaDecimalFullToDecimalFull(result);
		
		return result;
	},
	// 0 - 255, 0 - 255, 0 - 255 to 000000 - FFFFFF
	rgbToHexaDecimalFull: function (red, green, blue)
	{
		red = this.normalizeDecimalChannel(red);
		green = this.normalizeDecimalChannel(green);
		blue = this.normalizeDecimalChannel(blue);
		
		var result = this.decimalChannelToHexaDecimalChannel(red) + this.decimalChannelToHexaDecimalChannel(green) + this.decimalChannelToHexaDecimalChannel(blue);
		
		return result;
	},
	// 0 - 255, 0 - 255, 0 - 255 to 0 - 360, 0 - 100, 0 - 100
	rgbToHsv: function (red, green, blue)
	{
		red = this.normalizeDecimalChannel(red);
		green = this.normalizeDecimalChannel(green);
		blue = this.normalizeDecimalChannel(blue);
				
		// / 255 to scale to unity
		red /= 255;
		green /= 255;
		blue /= 255;
		
		var minimumValue = XXX_Number.lowest(red, green, blue);
		var maximumValue = XXX_Number.highest(red, green, blue);
		
		var delta = maximumValue - minimumValue;
		
		var hue = 0;
		var saturation = 0;
		var value = maximumValue;
		
		if (delta !== 0)
		{
			saturation = delta / maximumValue;
			
			var redDelta = (((maximumValue - red) / 6) + (delta / 2)) / delta;
			var greenDelta = (((maximumValue - green) / 6) + (delta / 2)) / delta;
			var blueDelta = (((maximumValue - blue) / 6) + (delta / 2)) / delta;
			
			if (red == maximumValue)
			{
				hue = blueDelta - greenDelta;	
			}
			else if (green == maximumValue)
			{
				hue = (1 / 3) + redDelta - blueDelta;
			}
			else if (blue == maximumValue)
			{
				hue = (2 / 3) + greenDelta - redDelta;
			}
			
			if (hue < 0)
			{
				hue += 1;
			}
			
			if (hue > 1)
			{
				hue -= 1;	
			}
		}
		
		hue *= 360;
		saturation *= 100;
		value *= 100;
		
		var result =
		{
			hue: hue,
			saturation: saturation,
			value: value,
			brightness: value
		};
		
		return result;
	},
	// 0 - 255, 0 - 255, 0 - 255 to 0 - 360, 0 - 100, 0 - 100
	rgbToHsl: function (red, green, blue)
	{
		red = this.normalizeDecimalChannel(red);
		green = this.normalizeDecimalChannel(green);
		blue = this.normalizeDecimalChannel(blue);
		
		// / 255 to scale to unity
		red /= 255;
		green /= 255;
		blue /= 255;
		
		var minimumValue = XXX_Number.lowest(red, green, blue);
		var maximumValue = XXX_Number.highest(red, green, blue);
		
		var delta = maximumValue - minimumValue;
		
		var hue = (maximumValue + minimumValue) / 2;
		var saturation = hue;
		var lightness = hue;
		
		if (delta === 0)
		{
			// Achromatic
			hue = 0;
			saturation = 0;
		}
		else
		{
			saturation = (lightness > 0.5) ? (delta / (2 - maximumValue - minimumValue)) : (delta / (maximumValue + minimumValue));
			
			if (red == maximumValue)
			{
				hue = (green - blue) / delta + (green < blue ? 6 : 0);	
			}
			else if (green == maximumValue)
			{
				hue = (blue - red) / delta + 2;
			}
			else if (blue == maximumValue)
			{
				hue = (red / green) / delta + 4;
			}
			
			hue /= 6;
		}
		
		hue *= 360;
		saturation *= 100;
		lightness *= 100;
		
		var result =
		{
			hue: hue,
			saturation: saturation,
			lightness: lightness,
			intensity: lightness
		};
		
		return result;
	},
	
	/////////////////////////
	//
	// HSV (Hue, Saturation, Value) | HSB (Hue, Saturation, Brightness)
	//
	/////////////////////////
	
	// 0 - 360, 0 - 100, 0 - 100 to 0 - 16777215
	hsvToDecimalFull: function (hue, saturation, value)
	{
		var result = this.hsvToRgb(hue, saturation, value);
		
		result = this.rgbToDecimalFull(result.red, result.green, result.blue);
		
		return result;
	},
	// 0 - 360, 0 - 100, 0 - 100 to 000000 - FFFFFF
	hsvToHexaDecimalFull: function (hue, saturation, value)
	{
		var result = this.hsvToRgb(hue, saturation, value);
		
		result = this.rgbToHexaDecimalFull(result.red, result.green, result.blue);
		
		return result;
	},
	// 0 - 360, 0 - 100, 0 - 100 to 0 - 255, 0 - 255, 0 - 255
	hsvToRgb: function (hue, saturation, value)
	{
		// / 360 and / 100 to scale to unity
		hue = this.normalizeHue(hue) / 360;
		saturation = this.normalizePercentage(saturation) / 100;
		value = this.normalizePercentage(value) / 100;
		
		var red = 0;
		var green = 0;
		var blue = 0;
		
		if (saturation === 0)
		{
			red = value;
			green = value;
			blue = value;
		}
		else
		{
			var tempHue = hue * 6;
			var order = XXX_Number.floor(tempHue);
			
			var color1 = value * (1 - saturation);
			var color2 = value * (1 - saturation * (tempHue - order));
			var color3 = value * (1 - saturation * (1 - (tempHue - order)));
			
			if (order === 0)
			{
				red = value;
				green = color3;
				blue = color1;
			}
			else if (order == 1)
			{
				red = color2;
				green = value;
				blue = color1;
			}
			else if (order == 2)
			{
				red = color1;
				green = value;
				blue = color3;
			}
			else if (order == 3)
			{
				red = color1;
				green = color2;
				blue = value;
			}
			else if (order == 4)
			{
				red = color3;
				green = color1;
				blue = value;
			}
			else
			{
				red = value;
				green = color1;
				blue = color2;
			}
		}
		
		red *= 255;
		green *= 255;
		blue *= 255;
		
		var result =
		{
			red: red,
			green: green,
			blue: blue
		};
		
		return result;
	},
	// 0 - 360, 0 - 100, 0 - 100 to 0 - 360, 0 - 100, 0 - 100
	hsvToHsl: function (hue, saturation, value)
	{
		var result = this.hsvToRgb(hue, saturation, value);
		
		result = this.rgbToHsl(result.red, result.green, result.blue);
		
		return result;
	},
		
	/////////////////////////
	//
	// HSL (Hue, Saturation, Lightness) | HSI (Hue, Saturation, Intensity)
	//
	/////////////////////////
	
	// 0 - 360, 0 - 100, 0 - 100 to 0 - 16777215 
	hslToDecimalFull: function (hue, saturation, lightness)
	{
		var result = this.hslToRgb(hue, saturation, lightness);
		
		result = this.rgbToDecimalFull(result.red, result.green, result.blue);
		
		return result;
	},
	// 0 - 360, 0 - 100, 0 - 100 to 000000 - FFFFFF
	hslToHexaDecimalFull: function (hue, saturation, lightness)
	{
		var result = this.hslToRgb(hue, saturation, lightness);
		
		result = this.rgbToHexaDecimalFull(result.red, result.green, result.blue);
		
		return result;
	},	
	hueToRgb: function (p, q, t)
	{
		if (t < 0)
		{
			t += 1;
		}
		if (t > 1)
		{
			t -= 1;
		}
		if (t < 1/6)
		{
			return p + (q - p) * 6 * t;
		}
		if (t < 1/2)
		{
			return q;
		}
		if (t < 2/3)
		{
			return p + (q - p) * (2/3 - t) * 6;
		}
		
		return p;
	},
	
	// 0 - 360, 0 - 100, 0 - 100 to 0 - 255, 0 - 255, 0 - 255 
	hslToRgb: function (hue, saturation, lightness)
	{
		// / 360 and / 100 to scale to unity
		hue = this.normalizeHue(hue);
		saturation = this.normalizePercentage(saturation);
		lightness = this.normalizePercentage(lightness);
		
		hue /= 360;
		saturation /= 100;
		lightness /= 100;
		
		var red = 0;
		var green = 0;
		var blue = 0;
		
		if (saturation === 0)
		{
			// Achromatic
			red = lightness;
			green = lightness;
			blue = lightness;
		}
		else
		{			
			var q = (lightness < 0.5) ? (lightness * (1 + saturation)) : (lightness + saturation - lightness * saturation);
			var p = 2 * lightness - q;
			
			red = this.hueToRgb(p, q, hue + 1 / 3);
			green = this.hueToRgb(p, q, hue);
			blue = this.hueToRgb(p, q, hue - 1 / 3);
		}
		
		red *= 255;
		green *= 255;
		blue *= 255;
		
		var result =
		{
			red: red,
			green: green,
			blue: blue
		};
		
		return result;
	},	
	// 0 - 360, 0 - 100, 0 - 100 to 0 - 360, 0 - 100, 0 - 100
	hslToHsv: function (hue, saturation, lightness)
	{
		var result = this.hslToRgb(hue, saturation, lightness);
		
		result = this.rgbToHsv(result.red, result.green, result.blue);
		
		return result;
	},
	
	/////////////////////////
	//
	// Websafe
	//
	/////////////////////////
	
	// 0 - 255 to 0 | 51 | 102 | 153 | 205 | 255
	decimalChannelToWebsafe: function (value)
	{	
		var result = this.normalizeDecimalChannel(value);
		
		result = XXX_Number.round(result / 51) * 51;
		
		return result;
	},	
	// 00 - FF to 00 | 33 | 66 | 99 | CC | FF
	hexaDecimalChannelToWebsafe: function (value)
	{
		var result = this.hexaDecimalChannelToDecimalChannel(value);
		
		result = this.decimalChannelToWebsafe(result);
		
		result = this.decimalChannelToHexaDecimalChannel(result);
		
		return result;
	},	
	// 0 - 16777215 to (0 | 51 | 102 | 153 | 205 | 255) * 3
	decimalFullToWebsafe: function (value)
	{
		var result = this.decimalFullToRgb(value);
		
		result = this.rgbToWebsafe(result.red, result.green, result.blue);
		
		result = this.rgbToDecimalFull(result.red, result.green, result.blue);
		
		return result;
	},	
	// 000000 - FFFFFF to  3 x 00 | 33 | 66 | 99 | CC | FF
	hexaDecimalFullToWebsafe: function (value)
	{
		var result = this.hexaDecimalFullToRgb(value);
		
		result.red = this.decimalChannelToWebsafe(result.red);
		result.green = this.decimalChannelToWebsafe(result.green);
		result.blue = this.decimalChannelToWebsafe(result.blue);
		
		result = this.rgbToHexaDecimalFull(result.red, result.green, result.blue);
		
		return result;
	},	
	// 3 x 0 - 255 to 3 x 0 | 51 | 102 | 153 | 205 | 255
	rgbToWebsafe: function (red, green, blue)
	{
		red = this.normalizeDecimalChannel(red);
		green = this.normalizeDecimalChannel(green);
		blue = this.normalizeDecimalChannel(blue);
		
		var result =
		{
			red: this.decimalChannelToWebsafe(red),
			green: this.decimalChannelToWebsafe(green),
			blue: this.decimalChannelToWebsafe(blue)
		};
		
		return result;
	},	
	// 0 - < 360, 0 - 100, 0 - 100 to ... ?
	hsvToWebsafe: function (hue, saturation, value)
	{
		var result = this.hsvToRgb(hue, saturation, value);
		
		result = this.rgbToWebsafe(result.red, result.green, result.blue);
		
		result = this.rgbToHsv(result.red, result.green, result.blue);
		
		return result;
	},	
	// 0 - < 360, 0 - 100, 0 - 100 to ... ?
	hslToWebsafe: function (hue, saturation, lightness)
	{
		var result = this.hslToRgb(hue, saturation, lightness);
		
		result = this.rgbToWebsafe(result.red, result.green, result.blue);
		
		result = this.rgbToHsl(result.red, result.green, result.blue);
		
		return result;
	},
		
	/////////////////////////
	//
	// RGB / RYB Hue
	//
	/////////////////////////
	
	rgbHueToRybHue: function (hue)
	{
		hue = this.normalizeHue(hue);
		
		var percentage = hue / 3.6;
		
		var part = 100 / 6;
		var part12based = 100 / 12;
		
		var part1 = [0, part];
		var part2 = [part1[1], part * 2];
		var part3 = [part2[1], part * 3];
		var part4 = [part3[1], part * 4];
		var part5 = [part4[1], part * 5];
		var part6 = [part5[1], 100];
					
		var percentageWithinPart = 0;
		
		var rybHuePercentage = 0;
		
		if (percentage >= part1[0] && percentage < part1[1])
		{
			percentageWithinPart =  (percentage - part1[0]) / (part1[1] - part1[0]);
			
			rybHuePercentage = (part12based * 0) + (percentageWithinPart * (part12based * 4));
		}
		else if (percentage >= part2[0] && percentage < part2[1])
		{
			percentageWithinPart =  (percentage - part2[0]) / (part2[1] - part2[0]);
			
			rybHuePercentage = (part12based * 4) + (percentageWithinPart * (part12based * 2));
		}
		else if (percentage >= part3[0] && percentage < part3[1])
		{
			percentageWithinPart = (percentage - part3[0]) / (part3[1] - part3[0]);
			
			rybHuePercentage = (part12based * 6) + (percentageWithinPart * (part12based * 1));
		}
		else if (percentage >= part4[0] && percentage < part4[1])
		{
			percentageWithinPart =  (percentage - part4[0]) / (part4[1] - part4[0]);
			
			rybHuePercentage = (part12based * 7) + (percentageWithinPart * (part12based * 1));				
		}
		else if (percentage >= part5[0] && percentage < part5[1])
		{
			percentageWithinPart =  (percentage - part5[0]) / (part5[1] - part5[0]);
			
			rybHuePercentage = (part12based * 8) + (percentageWithinPart * (part12based * 2));
		}
		else if (percentage >= part6[0] && percentage < part6[1])
		{
			percentageWithinPart =  (percentage - part6[0]) / (part6[1] - part6[0]);
			
			rybHuePercentage = (part12based * 10) + (percentageWithinPart * (part12based * 2));				
		}
		
		var result = rybHuePercentage * 3.6;
		
		return result;
	},
	
	rybHueToRgbHue: function (hue)
	{
		hue = this.normalizeHue(hue);
		
		var percentage = hue / 3.6;
		
		var part = 100 / 12;
		var part6based = 100 / 6;
		
		var part1 = [0, part * 4];
		var part2 = [part1[1], part * 6];
		var part3 = [part2[1], part * 7];
		var part4 = [part3[1], part * 8];
		var part5 = [part4[1], part * 10];
		var part6 = [part5[1], 100];
					
		var percentageWithinPart = 0;
		
		var rgbHuePercentage = 0;
		
		if (percentage >= part1[0] && percentage < part1[1])
		{
			percentageWithinPart =  (percentage - part1[0]) / (part1[1] - part1[0]);
			
			rgbHuePercentage = (part6based * 0) + (percentageWithinPart * (part6based * 1));
		}
		else if (percentage >= part2[0] && percentage < part2[1])
		{
			percentageWithinPart =  (percentage - part2[0]) / (part2[1] - part2[0]);
			
			rgbHuePercentage = (part6based * 1) + (percentageWithinPart * (part6based * 1));
		}
		else if (percentage >= part3[0] && percentage < part3[1])
		{
			percentageWithinPart = (percentage - part3[0]) / (part3[1] - part3[0]);
			
			rgbHuePercentage = (part6based * 2) + (percentageWithinPart * (part6based * 1));
		}
		else if (percentage >= part4[0] && percentage < part4[1])
		{
			percentageWithinPart =  (percentage - part4[0]) / (part4[1] - part4[0]);
			
			rgbHuePercentage = (part6based * 3) + (percentageWithinPart * (part6based * 1));
		}
		else if (percentage >= part5[0] && percentage < part5[1])
		{
			percentageWithinPart =  (percentage - part5[0]) / (part5[1] - part5[0]);
			
			rgbHuePercentage = (part6based * 4) + (percentageWithinPart * (part6based * 1));
		}
		else if (percentage >= part6[0] && percentage < part6[1])
		{
			percentageWithinPart =  (percentage - part6[0]) / (part6[1] - part6[0]);
			
			rgbHuePercentage = (part6based * 5) + (percentageWithinPart * (part6based * 1));
		}
					
		var result = rgbHuePercentage * 3.6;
		
		return result;
	},
		
	getRgbByRybHue: function (rybHue)
	{
		var percentage = rybHue / 3.6;		
		
		if (percentage == 100)
		{
			percentage = 0;
		}
		
		var part = 100 / 12;
		
		var part1 = [0, part * 4];
		var part2 = [part1[1], part * 6];
		var part3 = [part2[1], part * 7];
		var part4 = [part3[1], part * 8];
		var part5 = [part4[1], part * 10];
		var part6 = [part5[1], 100];
					
		var percentageWithinPart = 0;
		var partBegin = 0;
		var partEnd = 0;
		
		var red = 0;
		var green = 0;
		var blue = 0;
		
		if (percentage >= part1[0] && percentage < part1[1])
		{
			percentageWithinPart =  (percentage - part1[0]) / (part1[1] - part1[0]);
			partBegin = part1[0];
			partEnd = part1[1];
			
			red = 255;
			green = percentageWithinPart * 255;
			blue = 0;
		}
		else if (percentage >= part2[0] && percentage < part2[1])
		{
			percentageWithinPart =  (percentage - part2[0]) / (part2[1] - part2[0]);
			partBegin = part2[0];
			partEnd = part2[1];
			
			red = (1 - percentageWithinPart) * 255;
			green = 255;
			blue = 0;
		}
		else if (percentage >= part3[0] && percentage < part3[1])
		{
			percentageWithinPart = (percentage - part3[0]) / (part3[1] - part3[0]);
			partBegin = part3[0];
			partEnd = part3[1];
			
			red = 0;
			green = 255;
			blue = percentageWithinPart * 255;
		}
		else if (percentage >= part4[0] && percentage < part4[1])
		{
			percentageWithinPart =  (percentage - part4[0]) / (part4[1] - part4[0]);
			partBegin = part4[0];
			partEnd = part4[1];
			
			red = 0;
			green = (1 - percentageWithinPart) * 255;
			blue = 255;
		}
		else if (percentage >= part5[0] && percentage < part5[1])
		{
			percentageWithinPart =  (percentage - part5[0]) / (part5[1] - part5[0]);
			partBegin = part5[0];
			partEnd = part5[1];
			
			red = percentageWithinPart * 255;
			green = 0;
			blue = 255;
		}
		else if (percentage >= part6[0] && percentage < part6[1])
		{
			percentageWithinPart =  (percentage - part6[0]) / (part6[1] - part6[0]);
			partBegin = part6[0];
			partEnd = part6[1];
			
			red = 255;
			green = 0;
			blue = (1 - percentageWithinPart) * 255;
		}
					
		var result =
		{
			red: XXX_Number.round(red),
			green: XXX_Number.round(green),
			blue: XXX_Number.round(blue),
			percentageWithinPart: percentageWithinPart,
			percentage: percentage,
			partBegin: partBegin,
			partEnd: partEnd
		};
		
		return result;
	},
	
	getRgbByRgbHue: function (rgbHue)
	{
		var percentage = rgbHue / 3.6;	
	
		if (percentage == 100)
		{
			percentage = 0;
		}
		
		var part = 100 / 6;
		
		var part1 = [0, part];
		var part2 = [part1[1], part * 2];
		var part3 = [part2[1], part * 3];
		var part4 = [part3[1], part * 4];
		var part5 = [part4[1], part * 5];
		var part6 = [part5[1], 100];
					
		var percentageWithinPart = 0;
		var partBegin = 0;
		var partEnd = 0;
		
		var red = 0;
		var green = 0;
		var blue = 0;
		
		if (percentage >= part1[0] && percentage < part1[1])
		{
			percentageWithinPart =  (percentage - part1[0]) / (part1[1] - part1[0]);
			partBegin = part1[0];
			partEnd = part1[1];
			
			red = 255;
			green = percentageWithinPart * 255;
			blue = 0;
		}
		else if (percentage >= part2[0] && percentage < part2[1])
		{
			percentageWithinPart =  (percentage - part2[0]) / (part2[1] - part2[0]);
			partBegin = part2[0];
			partEnd = part2[1];
			
			red = (1 - percentageWithinPart) * 255;
			green = 255;
			blue = 0;
		}
		else if (percentage >= part3[0] && percentage < part3[1])
		{
			percentageWithinPart = (percentage - part3[0]) / (part3[1] - part3[0]);
			partBegin = part3[0];
			partEnd = part3[1];
			
			red = 0;
			green = 255;
			blue = percentageWithinPart * 255;
		}
		else if (percentage >= part4[0] && percentage < part4[1])
		{
			percentageWithinPart =  (percentage - part4[0]) / (part4[1] - part4[0]);
			partBegin = part4[0];
			partEnd = part4[1];
			
			red = 0;
			green = (1 - percentageWithinPart) * 255;
			blue = 255;
		}
		else if (percentage >= part5[0] && percentage < part5[1])
		{
			percentageWithinPart =  (percentage - part5[0]) / (part5[1] - part5[0]);
			partBegin = part5[0];
			partEnd = part5[1];
			
			red = percentageWithinPart * 255;
			green = 0;
			blue = 255;
		}
		else if (percentage >= part6[0] && percentage < part6[1])
		{
			percentageWithinPart =  (percentage - part6[0]) / (part6[1] - part6[0]);
			partBegin = part6[0];
			partEnd = part6[1];
			
			red = 255;
			green = 0;
			blue = (1 - percentageWithinPart) * 255;
		}
					
		var result =
		{
			red: XXX_Number.round(red),
			green: XXX_Number.round(green),
			blue: XXX_Number.round(blue),
			percentageWithinPart: percentageWithinPart,
			percentage: percentage,
			partBegin: partBegin,
			partEnd: partEnd
		};
		
		return result;
	},
	
	/////////////////////////
	//
	// Hue offset
	//
	/////////////////////////
	
	rgbHueOffset: function (red, green, blue, offset, type)
	{
		red = this.normalizeDecimalChannel(red);
		green = this.normalizeDecimalChannel(green);
		blue = this.normalizeDecimalChannel(blue);
			
		offset = (XXX_Type.isNumeric(offset)) ? offset : (!XXX_Type.makeNumber(offset) ? 0 : XXX_Type.makeNumber(offset));
		
		if (!type)
		{
			type = 'rgb';
		}
		
		var result =
		{
			red: red,
			green: green,
			blue: blue
		};
		
		var tempColor;
		var rgbHue;
		var rybHue;
		
		// RYB
		if (XXX_String.convertToLowerCase(type) == 'ryb')
		{
			tempColor = this.rgbToHsv(red, green, blue);
			
			rybHue = this.rgbHueToRybHue(tempColor.hue);
			
			rybHue += offset;
			
			if (rybHue < 0)
			{
				rybHue = -rybHue % 360;
				
				rybHue = 360 - rybHue;
			}
			
			rybHue = rybHue % 360;
						
			rgbHue = this.rybHueToRgbHue(rybHue);
						
			tempColor = this.hsvToRgb(rgbHue, tempColor.saturation, tempColor.value);
			
			result.red = tempColor.red;
			result.green = tempColor.green;
			result.blue = tempColor.blue;
			
		}
		// RGB
		else
		{
			tempColor = this.rgbToHsv(red, green, blue);
			
			rgbHue = tempColor.hue;
			
			rgbHue += offset;
			
			if (rgbHue < 0)
			{
				rgbHue = -rgbHue % 360;
				
				rgbHue = 360 - rgbHue;
			}
			
			rgbHue = rgbHue % 360;
			
			tempColor = this.hsvToRgb(rgbHue, tempColor.saturation, tempColor.value);
			
			result.red = tempColor.red;
			result.green = tempColor.green;
			result.blue = tempColor.blue;
		}
		
		return result;
	},
	
	hexaDecimalFullHueOffset: function (color, offset, type)
	{
		color = this.normalizeHexaDecimalFull(color);
		
		color = this.hexaDecimalFullToRgb(color);
		
		var result = this.rgbHueOffset(color.red, color.green, color.blue, offset, type);
		
		result = this.rgbToHexaDecimalFull(XXX_Number.round(result.red), XXX_Number.round(result.green), XXX_Number.round(result.blue));
		
		return result;
	}
};
