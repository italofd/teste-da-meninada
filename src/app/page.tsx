import InputBox from "app/components/index/InputBox";
import UsersList from "app/components/index/UsersList";
import React from "react";

const Page = () => {
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
			<InputBox />
			<UsersList />
		</div>
	);
};

export default Page;
