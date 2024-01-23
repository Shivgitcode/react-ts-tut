import "./App.css";
import Greet from "./components/Greet";
// import Person from "./components/Persons";
import PersonList from "./components/PersonList";

function App() {
  interface Person {
    first: string;
    last: string;
  }
  // const person: { first: string; last: string } = {
  //   first: "shivansh",
  //   last: "Aggarwal",
  // };
  const person: Person[] = [
    { first: "shivansh", last: "Aggarwal" },
    { first: "shivansh", last: "Aggarwal" },
    { first: "shivansh", last: "Aggarwal" },
    { first: "shivansh", last: "Aggarwal" },
    { first: "shivansh", last: "Aggarwal" },
    { first: "shivansh", last: "Aggarwal" },
  ];

  return (
    <div>
      <Greet name="shivansh" messageCount={20} isLoggedIn={true}></Greet>
      <Greet name="Abhinav" messageCount={30} isLoggedIn={true}></Greet>
      <Greet name="Viren" messageCount={15} isLoggedIn={true}></Greet>
      {/* <Person name={person}></Person> */}
      <PersonList person={person}></PersonList>
    </div>
  );
}

export default App;
