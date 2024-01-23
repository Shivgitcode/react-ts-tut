interface Name {
  name: string;
}

export default function Greet({ name }: Name): JSX.Element {
  return (
    <div>
      <h2>welecome to react typescript tutorial,{name}</h2>
    </div>
  );
}
