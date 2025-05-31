import "./App.css";
import Card from "./components/Card";

function App() {
  let info = {
    username: "siurya",
    age: 21
  }
  let array = [1,2,3,4,5]
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-3xl mb-4">
        Siurya Pratap Singh
        <br />
        <Card firstname = "Surya" infor = {info} row = {array} btntext = "#click-me"/>
        <br />
        <Card firstname = "Surya" infor = {info} row = {array} />
      </h1>
      
    </>
  );
}

export default App;
