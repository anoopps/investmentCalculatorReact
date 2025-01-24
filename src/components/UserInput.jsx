import React from "react";


export default function UserInput({onChangeTrigger, userInput}) {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investments</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(event)=> onChangeTrigger('initialInvestment',event.target.value)} />
        </p>
        <p>
          <label>Annual Investments</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(event)=> onChangeTrigger('annualInvestment',event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Returns</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(event)=> onChangeTrigger('expectedReturn',event.target.value)} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.duration} onChange={(event)=> onChangeTrigger('duration',event.target.value)}/>
        </p>
      </div>
    </form>
  );
}
