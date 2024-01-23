interface Name {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
}

export default function Greet({
  name,
  messageCount,
  isLoggedIn,
}: Name): JSX.Element {
  return (
    <div>
      <h2>
        welecome to react typescript tutorial,{name}, you have {messageCount}
        user is logged in {isLoggedIn}
      </h2>
    </div>
  );
}
