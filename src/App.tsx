import axios from "axios";
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
export default App;
