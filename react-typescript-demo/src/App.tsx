import "./App.css";
// import Heading from "./components/Heading";
// import Greet from "./components/Greet";
// import Person from "./components/Persons";
// import PersonList from "./components/PersonList";
// import { Status } from "./components/Status";
import Oscar from "./components/Oscar";
// import { Button } from "./components/button";
import { Container } from "./components/Container";
import Input from "./components/Input";
import { ThemeContextProvider } from "./context/ThemeContext";
import Box from "./context/Box";

function App() {
  // interface Person {
  //   first: string;
  //   last: string;
  // }
  // const person: { first: string; last: string } = {
  //   first: "shivansh",
  //   last: "Aggarwal",
  // };
  // const person: Person[] = [
  //   { first: "shivansh", last: "Aggarwal" },
  //   { first: "shivansh", last: "Aggarwal" },
  //   { first: "shivansh", last: "Aggarwal" },
  //   { first: "shivansh", last: "Aggarwal" },
  //   { first: "shivansh", last: "Aggarwal" },
  //   { first: "shivansh", last: "Aggarwal" },
  // ];

  const styles = { border: "1px solid black", padding: "1rem", color: "red" };

  return (
    <div>
      {/* <Greet name="shivansh" messageCount={20} isLoggedIn={true}></Greet>
      <Greet name="Abhinav" messageCount={30} isLoggedIn={true}></Greet>
      <Greet name="Viren" messageCount={15} isLoggedIn={true}></Greet>
      {/* <Person name={person}></Person> */}
      {/* <PersonList person={person}></PersonList> */}
      {/* <Status status={"success"}></Status> */}
      {/* <Heading>hello how do you do </Heading>
       */}
      <Oscar>
        {/* <Heading>this award goes to cristiano ronaldo </Heading> */}
      </Oscar>
      {/* <Button
        handleClick={(event) => {
          console.log("you clicked me ", event);
        }}
      ></Button> */}

      <Input
        handleChange={(event) => {
          console.log(event);
        }}
        value=""
      ></Input>
      <Container styles={styles}></Container>

      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
