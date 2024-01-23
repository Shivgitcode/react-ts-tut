interface Person {
  first: string;
  last: string;
}

type PersonLis = {
  person: Person[];
};

export default function PersonList({ person }: PersonLis) {
  return (
    <div>
      <ul>
        {person.map((el) => {
          return (
            <li>
              {el.first} {el.last}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
