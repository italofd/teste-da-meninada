import styles from "app/components/main/index.module.css";
import { User } from "./types";

const UsersList = ({ listOfUsers }: { listOfUsers: User[] }) => {
	return (
		<div className={styles.userListDiv}>
			<h1>Users List</h1>
		</div>
	);
};

export default UsersList;
