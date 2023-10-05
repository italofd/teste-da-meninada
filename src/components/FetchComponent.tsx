import React, { useState } from "react";
import { getDoc, doc, initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

interface ObjectToRender {
	id: number;
	title: string;
	description: string;
}

interface UserInfo {
	fullName: string;
	phoneNumber: string;
}

const FetchComponent = () => {
	const [uiObjects, setUiObjects] = useState<ObjectToRender[]>([]);
	const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

	const getObject = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
		(res) => res.json().then((data) => setUiObjects(data))
	);

	const firestore = initializeFirestore(
		{
			name: "",
			options: {},
			automaticDataCollectionEnabled: true,
		},
		{}
	);

	getDoc(doc(firestore, "users/italo/settings")).then((res) => {
		const firebaseUserInfo = res.data() as UserInfo;

		setUserInfo(firebaseUserInfo);
	});

	return (
		<>
			<div>
				<h1>{userInfo?.fullName}</h1>
				<p>Phone: {userInfo?.phoneNumber}</p>
			</div>
			<div>
				{uiObjects?.map((value) => (
					<div>
						<p>ID: {value.id}</p>
						<p>Title: {value.title}</p>
						<p>Description: {value.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default FetchComponent;
