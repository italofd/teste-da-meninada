"use client";

import InputBox from "app/components/main/InputBox";
import UsersList from "app/components/main/UsersList";
import React, { useState } from "react";
import { User } from "./components/main/types";

const Page = () => {
	const [listOfUsers, setListOfUsers] = useState<User[]>([]);

	return (
		<div
			color="#FFFFF"
			style={{
				height: "100%",
				alignContent: "center",
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
			}}
		>
			<InputBox
				setListOfUsers={(userObject: User) =>
					setListOfUsers((prev) => {
						const newArray = [...prev];

						newArray.push(userObject);

						return newArray;
					})
				}
			/>
			<UsersList listOfUsers={listOfUsers} />
		</div>
	);
};

export default Page;
