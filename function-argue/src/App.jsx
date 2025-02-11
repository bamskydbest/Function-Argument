import "./App.css";
import Assignment from "./Assignment";
import BestRestaurants from "./BestRestaurants";
import UserProfile from "./UserProfile";
import Welcome from "./Welcome";

function App() {
  // const greet = (name) => {
  //   let output = "Hello " + name;
  //   return output;
  // };

  const greet = () => {
    alert("You have clicked the button!!!");
  };

  const studentName = "Mojereola";
  let studentAge = 24;

  const studentlist = ["Mahmoud", "Sanusi", "Majeedat"];

  const name = "Mahmoud Abdulmajeed Taiye";
  const email = "mahmoudabdulmajeedtaiye@gmail.com";
  let age = 25;
  const food = "Dokunnu";
  const size = "Family Size";
  const location = "Ilorin , Kwara State";

  return (
    <div>
      {/* <h1 className="">{greet("Mahmoud Abdulmajeed Taiye")}</h1> */}

      <Welcome
        age={studentAge}
        name={studentName}
        greetFunction={greet}
        list={studentlist}
      />
      <Assignment />
      <UserProfile name={name} email={email} age={age} />
      <BestRestaurants food={food} size={size} location={location} />
    </div>
  );
}

export default App;
