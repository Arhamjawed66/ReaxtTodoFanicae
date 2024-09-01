
import { useState } from 'react'
import './App.css'
import { Input } from 'postcss';

function App() {

  const [amount,SetAmount] = useState(0);
  const [type,SetType] = useState("income");
  const [transcation,SetTranscation] = useState([]);

  const handleAddTranscation = () => {
    SetTranscation([...transcation,{amount,type}])
    console.log(transcation);
    SetAmount("")
    SetType("income")
  }
    const totalIncome = transcation.reduce(
      (acc,transcation) => 
        transcation.type ===`income`? acc + Number (transcation.amount) :acc,0
    )
    const totalExpense = transcation.reduce(
      (acc,transcation) => 
        transcation.type ===`expense`? acc + Number (transcation.amount) :acc,0
    )
    const toatlBlance = totalIncome - totalExpense
    console.log(totalExpense);
    console.log(totalIncome);
    console.log(toatlBlance);


  
 return (
  <div>
    <div className=' flex flex-col justify-center items-center gap-2'>
      <div className='flex gap-4'> 
        <div className='p-4 broder bg-orange-400 rounded-md hover:text-gray-100'>
          <h1>total Income</h1>
          <h1>{totalIncome}</h1>
        </div>
        <div className='p-4 broder bg-rose-500 rounded-md  hover:text-gray-100'>
          <h1>total Expense </h1>
          <h1>{totalExpense}</h1>
        </div>
        <div className='p-4 broder bg-red-300 rounded-md  hover:text-gray-100'>
          <h1>total Blance</h1>
          <h1>{toatlBlance}</h1>
        </div>
      </div>




      <div className='flex gap-2 '>
        <input value={amount}
        onChange={(e) =>console.log( SetAmount(e.target.value))}
         type="number"
          placeholder='Add amount' 
        className='bg-slate-300 p-4 rounded-2xl 
        font-bold text-3xl' />

        <select value={type}
        onChange={(e) => console.log(SetType(e.target.value))} 
        className='bg-cyan-950 text-white p-4 rounded-2xl 
        font-bold  text-3xl'>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select>

        <button onClick={handleAddTranscation}
        className='bg-green-500 text-blue-950 rounded-2xl p-5 font-bold 
         text-3xl hover:text-white'>Submit</button>
      </div>
      <div>
        {transcation.map((data,index) =>{
          return (
            <div key={index}>
              <h1 className='font-bold underline text-3xl'>{data.amount}</h1>
            <h1 className={`font-bold underline text-3xl
            ${data.type === `income`?`text-green-600`:`text-red-500`}`}>{data.type}</h1>{""}
            </div>
            
          )
            
          
        })}
      </div>
    </div>
  </div>
  )
}

export default App
