import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ input }) {

  const dataResults = calculateInvestmentResults(input);  
  const initialInvestment = dataResults[0].valueEndOfYear - dataResults[0].interest - dataResults[0].annualInvestment;

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Initial Investment</th>
            <th>Interest</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {dataResults.map((yearData) => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year -initialInvestment;
                const totalAmtInvested =  yearData.valueEndOfYear - totalInterest;
                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{ formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{ formatter.format(yearData.interest)}</td>
                        <td>{ formatter.format(totalInterest)}</td>
                        <td>{ formatter.format(totalAmtInvested)}</td>
                    </tr>
                )
               
            })}
        </tbody>
      </table>
    </div>
  );
}
