import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 5,
  });

  function handleUserInput(identifier, updatedValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: +updatedValue,
      };
    });
  }

  const isValidUserInput =  userInput.duration>=1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeTrigger={handleUserInput} />
      {!isValidUserInput && <p className="center">Please enter a valid value</p>}
      {isValidUserInput && <Result input={userInput} />}
    </>
  );
}

export default App;
