const NumberCodes: {[key: string]: {[key: string]: number}} = {
	arab: {
		MIN: 48,
		MAX: 57
	},
	roman: {
		MIN: 8544,
		MAX: 8575
	},
	fractions: {
		MIN: 8528,
		MAX: 8543
	}
}

const getType = (char: string):string => {
	const code = char.charCodeAt(0);

	for (const numberCode of Object.keys(NumberCodes)) {
		if (code >= NumberCodes[numberCode].MIN && code <= NumberCodes[numberCode].MAX) {
			return numberCode;
		}
	}
}

const isDigit = (value: string): boolean => {
	const type = getType(value[0])

	if (!type) {
		return false;
	}

	for (const digit of value) {
		if (digit.codePointAt(0) < NumberCodes[type].MIN || digit.codePointAt(0) > NumberCodes[type].MAX) {
			return false;
		}
	}

	return true;
}

export {isDigit}
