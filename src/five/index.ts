export const isLatinNumericOrDollar = (string: string) => {
	const regExp = /^[\w$]+$/;

	return regExp.test(string);
}

export const arrayFromStringWithSeparators = (string: string): string[] => {
	const regExp = /\.|,|;| +/g
	return string.split(regExp);
}
