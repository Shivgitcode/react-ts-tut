import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
};

export default function Private({ isLoggedIn, Component }: PrivateProps) {
  //   return <div></div>
  if (isLoggedIn) {
    return <Component name="shivansh" />;
  } else {
    return <Login></Login>;
  }
}
