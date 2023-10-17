"use client";
import React from "react";

import styles from "app/components/main/index.module.css";
import { User } from "./types";

const InputBox = ({
	setListOfUsers,
}: {
	setListOfUsers: (userObject: User) => void;
}) => (
	<div className={styles.inputBox}>
		<h2>Insert a user</h2>
		<form
			className={styles.inputFormStyled}
			onSubmit={(e) => {
				e.preventDefault();

				const { currentTarget } = e;

				const firstName = currentTarget["firstName"].value;
				const lastName = currentTarget["lastName"].value;
				const phoneNumber = currentTarget["phone"].value;

				setListOfUsers({ firstName, lastName, phone: phoneNumber });

				e.stopPropagation();
				e.currentTarget.reset();
			}}
		>
			<label>First Name</label>
			<input type="text" name="firstName" className={styles.inputStyled} />

			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<label>Last Name</label>
				<input type="text" name="lastName" className={styles.inputStyled} />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<label>Phone</label>
				<input type="text" name="phone" className={styles.inputStyled} />
			</div>
			<input type="submit" value="Submit" className={styles.inputStyled} />
		</form>
	</div>
);

export default InputBox;
