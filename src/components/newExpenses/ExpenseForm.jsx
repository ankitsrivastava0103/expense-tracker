import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {
  // Other Ways To Update State Usinng Single Object
  // First way is not the ideal way. May cause some problem
  // Second way is the ideal way to update state in one object.
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   })

  //   const titleChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredTitle: event.target.value,
  //     })
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value }
  //     })
  //   }

  //   const amountChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredAmount: event.target.value,
  //     })
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredAmount: event.target.value }
  //     })
  //   }

  //   const dateChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       setEnteredDate: event.target.value,
  //     })
  //     setUserInput((prevState) => {
  //       return { ...prevState, setEnteredDate: event.target.value }
  //     })
  //   }

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2021-12-31'
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
