const isLatinNumericOrDollar = (string: string): Boolean => {
	const regExp = /^[\w$]+$/;

	return regExp.test(string);
}

const arrayFromStringWithSeparators = (string: string): string[] => {
	const regExp = /\.|,|;| +/g
	return string.split(regExp);
}

const createStringFromTemplate = (stringTemplate: string, options: {[key: string]: any}): string => {
	const GROUP_NAME = `key`;

	return stringTemplate.replace(/\${(?<key>\w+?)}/g, (match, p1, p2, p3, offset) => {
		return options[offset[GROUP_NAME]]
	})
}

const deleteRepeat = (string: string): string => {
	return string.replace(/(\w{1,3}?)\1+/g, `$1`);
}

const calc = (expression: string): string => {
	return expression.replace(/[\d(][\d+\-*\/() ]+/mig, (...args) =>
		Function('', `return ${args[0]}`)()
	).replace(/^\n/, '');
}

export {isLatinNumericOrDollar, arrayFromStringWithSeparators, calc, createStringFromTemplate, deleteRepeat}
