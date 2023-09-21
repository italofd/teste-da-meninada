import React from "react";
import Pivetada from "../components/index";
import { screen } from "@testing-library/dom";
import { act, render, within } from "@testing-library/react";

/**
 * Documentation can be found at => https://testing-library.com/
 * Remember that this is a whole library focused on UI so it has a lot of things
 * Including support to react and dom manipulation/visualization
 */

describe("UI", () => {
	it("Should render and test basic things", async () => {
		//Getting the methods for
		const { findByText } = render(<Pivetada />);

		//One way to test if the component is rendering
		expect(
			await findByText(
				"Hello, Im Italo, a web developer from Brazil. I love to learn new things and share my knowledge with others."
			)
		).toBeInTheDocument();

		/**
		 * Another way to test if the component is rendering
		 * Using the screen object from testing-library
		 * And the getByText method but using a REGEX (that can be useful)
		 */
		const text = screen.getByText(/Hello, Im Italo, a web developer/);

		//Way to search for ID when getting a div or something else
		const div = screen.getByTestId("le-divison");

		//Way to search within a div or elements in general
		expect(div).toBeInTheDocument();

		//Test property of elements
		const link = within(div).getByRole("link", { name: "xoblas" });

		expect(link).toHaveAttribute("href", "link/to/xoblas");

		//Just a test bro...
		//Testing...
	});
});
