type Person = {
  name: {
    first: string;
    last: string;
  };
};

export default function Person({ name }: Person) {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
}
