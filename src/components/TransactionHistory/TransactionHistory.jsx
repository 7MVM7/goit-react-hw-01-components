import React from "react";
import {Tabl} from "./TransactionHistory.styled";

function TransactionHistory  ({ items })  {
  return (
    <Tabl  >
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>


      {items.map(({id,type,amount,currency }) => (
        <tbody  key={id}>

        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>

      </tbody>
      ))}
    </Tabl>
  );
}

export default TransactionHistory;


// const TransactionHistory = ({ items }) => {
//   return (
//     <table className="transaction-history" >
//       <thead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>


//       {items.map(({id,type,amount,currency }) => (
//         <tbody  key={id}>

//         <tr>
//           <td>{type}</td>
//           <td>{amount}</td>
//           <td>{currency}</td>
//         </tr>

//       </tbody>
//       ))}
//     </table>
//   );
// }


// const TransactionHistory = function ({ items })  {return (
//   <table className="transaction-history" >
//     <thead>
//       <tr>
//         <th>Type</th>
//         <th>Amount</th>
//         <th>Currency</th>
//       </tr>
//     </thead>


//     {items.map(({id,type,amount,currency }) => (
//       <tbody  key={id}>

//       <tr>
//         <td>{type}</td>
//         <td>{amount}</td>
//         <td>{currency}</td>
//       </tr>

//     </tbody>
//     ))}
//   </table>
// );
// }
