import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
type User = AuthUser | null;

export default function User() {
  const [user, setUser] = useState<User>(null);

  const handleLogin = () => {
    setUser({
      name: "shivansh",
      email: "shivneeraj2004@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>user email is {user?.email} </div>
    </div>
  );
}
