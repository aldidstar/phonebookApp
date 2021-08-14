import UserAdd from "./add/UserAdd";
import Navbar from "./Navbar";
import UserSearch from "./search/UserSearch";
import UserList from "./UserList";


export default function UserBox(props) {
  return (
    <div>
      <Navbar />
      <UserAdd />
      <UserSearch />
      <UserList />

    </div>
  );
}
