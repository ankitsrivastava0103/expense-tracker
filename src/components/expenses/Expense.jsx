import React, { useState } from 'react'
import './Expense.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expense = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filterdExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  )

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterdExpenses} />
      <ExpensesList items={filterdExpenses} />
    </Card>
  )
}

export default Expense
