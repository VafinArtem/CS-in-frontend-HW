export const isLatinNumericOrDollar = (string: string) => {
	const regExp = /^[\w$]+$/;

	return regExp.test(string);
}

