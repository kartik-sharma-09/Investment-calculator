import Header from "./Components/Header";
import User from "./Components/User";
import Results from "./Components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",    // 10000
    annualInvestment: "",      // 1200
    expectedReturn: "",           //6
    duration: "",                //10
  });

  const inputIsValid  = userInput.duration >=1
  
  function handelChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <User userInput={userInput} onChange={handelChange} />
      {!inputIsValid && <p class="center">please Enter a duration Greater then Zero</p>}
     { inputIsValid &&  <Results input={userInput} />}
    </>
  );
}

export default App;
