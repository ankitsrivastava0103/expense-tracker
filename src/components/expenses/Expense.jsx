import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from '../UI/Card'

const Expense = ({ items }) => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  )
}

export default Expense
