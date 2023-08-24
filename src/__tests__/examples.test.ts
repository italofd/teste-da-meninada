//You can import here the same files as you use on your project
//Export them and use them as you wish

//Test Suite: Describe what are you testing (EG: Name of the feature, web page or file)
describe("Example test", () => {
	//Test Case: Describe a case for the subject you are working on (EG: Should ... when ...)
	it("Should test sum two numbers", () => {
		const uno = 1;
		const dos = 2;

		const xoblas = () => {
			return uno + dos;
		};

		const sumValue = xoblas();

		//Working with numbers in jest, take a time to read all the functions documentation it will be worth it
		expect(sumValue).toBeGreaterThanOrEqual(3);
		expect(sumValue).toBeLessThan(5);
		expect(sumValue).not.toBe(4);
		expect(sumValue).not.toBeUndefined();
		expect(sumValue).toBe(3);
	});

	it("Should test a object", () => {
		const objectToTest = {
			name: "xoblas",
			age: 22,
			characteristics: {
				smokes: true,
			},
		};

		const xoblas = () => objectToTest;

		const value = objectToTest;

		//Working with objects in jest, take a time to read all the functions documentation it will be worth it
		expect(value).toHaveProperty("name");
		expect(value).toHaveProperty("characteristics.smokes", true);

		expect(value).toMatchObject({ name: "xoblas" });
		expect(value).toMatchObject({ characteristics: { smokes: true } });
		expect(value).toMatchObject({
			characteristics: { smokes: true },
			age: 22,
			name: "xoblas",
		});

		//What to NOT do with objects
		expect(value).toEqual(objectToTest);
		expect(value).toStrictEqual(objectToTest);
	});
});
