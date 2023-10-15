"use client";
import React from "react";

import styles from "app/xoblas.module.css";

const InputBox = () => {
	console.log("EVA01", styles);

	return (
		<div className={styles.inputBox}>
			<h2>Insert a user</h2>
			<form
				style={{
					display: "flex",
					justifyContent: "space-around",
					flexDirection: "column",
					height: "100%",
				}}
				onSubmit={(e) => {
					e.preventDefault();

					const { currentTarget } = e;

					const firstName = currentTarget["firstName"].value;
					const lastName = currentTarget["lastName"].value;
					const phoneNumber = currentTarget["phone"].value;

					e.stopPropagation();
					e.currentTarget.reset();
				}}
			>
				<label>First Name</label>
				<input
					type="text"
					name="firstName"
					style={{
						height: "30px",
						fontSize: "16px",
					}}
				/>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<label>Last Name</label>
					<input
						type="text"
						name="lastName"
						style={{
							height: "30px",
							fontSize: "16px",
						}}
					/>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<label>Phone</label>
					<input
						type="text"
						name="phone"
						style={{
							height: "30px",
							fontSize: "16px",
						}}
					/>
				</div>
				<input
					type="submit"
					value="Submit"
					style={{
						height: "30px",
						fontSize: "16px",
					}}
				/>
			</form>
		</div>
	);
};

export default InputBox;
