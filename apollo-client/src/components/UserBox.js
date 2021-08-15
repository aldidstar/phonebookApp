import UserAdd from "./add/UserAdd";
import Navbar from "./Navbar";
import UserSearch from "./search/UserSearch";
import UserList from "./UserList";
import Pagination from "./Pagination";



export default function UserBox(props) {
  return (
    <div>
      <Navbar />
      <UserAdd />
      <UserSearch />
      <UserList />
      <Pagination />


    </div>
  );
}
