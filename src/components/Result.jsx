import React from 'react'

export default function Result({ input}) {
    console.log(input);
  return (
    
    <div>      
        <table  id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Initial Investment</th>
                    <th>Annual Investment</th>
                    <th>Expected Returns</th>
                    <th>Final Amount</th>
                </tr>
            </thead>
        </table>
      
    </div>
  )
}
