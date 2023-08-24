interface ObjectToNormalize {
	devName: "midnight" | "vitinDev" | "fleabs" | "italo";
	devId: string;
	characteristics: {
		smokes: boolean;
		workout: boolean;
		seniority: string;
	};
}

//Understand how basic mocking and jest works
export const normalizeString = (stringsToNormalize: string[] | undefined) => {
	if (stringsToNormalize?.length === 0 || !stringsToNormalize) return "xoblas";
	return stringsToNormalize.join("__");
};

//You are working with an old and messy database and need to perform a operation, sum two numbers,
//but the numbers are not always numbers, they can be strings, undefined
//Your job is to sum this two numbers whatEver the case is, but if one of them is undefined return also return attribute

//[HOMEWORK]: Create a return type for the function, avoid summing strings.
export const constSumNumbers = (
	numberOne: string | number | undefined,
	numberTwo: string | number | undefined
) => {
	if (numberOne && numberTwo) {
		return numberOne + numberTwo;
	}

	if (!numberOne && !numberTwo) {
		throw new Error("Both numbers are undefined");
	}

	return {
		numberOne,
		numberTwo,
	};
};

//Think that you are now working on a gamification, and you need to create a function that will return a object with the user characteristics
//Pre-determined by a business logic, whe don't want the behavior of the function changing for some other reason or mistake

//More complex mocking and expecting
//[HOMEWORK]: Simplify this function and create a type for the return, also avoid it being possibly undefined
export const formatObject = (
	objectToNormalize: ObjectToNormalize | undefined
) => {
	if (!objectToNormalize) return {};
	if (
		objectToNormalize.characteristics.smokes &&
		objectToNormalize.characteristics.workout
	) {
		return {
			...objectToNormalize,
			lier: true,
		};
	}
	if (!objectToNormalize.characteristics.workout) {
		return {
			...objectToNormalize,
			sedentary: true,
		};
	}
	if (objectToNormalize.characteristics.smokes) {
		return {
			...objectToNormalize,
			ironLungs: true,
		};
	}
	if (objectToNormalize.devName === "italo") {
		return {
			...objectToNormalize,
			theBestDevEver: true,
		};
	}
};
