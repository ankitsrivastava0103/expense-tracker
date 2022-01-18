import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(true)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    onAddExpense(expenseData)
  }

  const handleFormClick = () => {
    setShowForm(!showForm)
  }

  return (
    <div className='new-expense'>
      {showForm ? (
        <button onClick={handleFormClick}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelForm={handleFormClick}
        />
      )}
    </div>
  )
}

export default NewExpense
