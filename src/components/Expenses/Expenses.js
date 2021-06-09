import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear)
    }
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);


    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
    );
}

export default Expenses;
