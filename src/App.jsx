import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1200,
    annualInvestment: 5000,
    expectedReturns: 20000,
    duration: 5,
  });

  function handleUserInput(identifier, updatedValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: updatedValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeTrigger={handleUserInput} />
      <Result input={userInput} />
    </>
  );
}

export default App;
