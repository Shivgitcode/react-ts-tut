// import { useState } from "react";

export default function User() {
  //   const [user, setUser] = useState<User>(null);

  //   const handleLogin = () => {
  //     setUser({
  //       name: "shivansh",
  //       email: "shivneeraj2004@gmail.com",
  //     });
  //   };

  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  const handleLogin = () => {};
  const handleLogout = () => {};

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is </div>
      <div>user email is </div>
    </div>
  );
}
