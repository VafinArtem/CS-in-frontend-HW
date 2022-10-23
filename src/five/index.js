export const isLatinNumericOrDollar = (string) => {
	const regExp = /^[\w$]+$/;

	return regExp.test(string);
}

export const arrayFromStringWithSeparators = (string) => {
	const regExp = /\.|,|;| +/g
	return string.split(regExp);
}

export const createStringFromTemplate = (stringTemplate, options) => {
	const GROUP_NAME = `key`;

	return stringTemplate.replace(/\${(?<key>\w+?)}/g, (match, p1, p2, p3, offset) => {
		return options[offset[GROUP_NAME]]
	})
}

export const deleteRepeat = (string) => {
	return string.replace(/(\w{1,3}?)\1+/g, `$1`);
}
