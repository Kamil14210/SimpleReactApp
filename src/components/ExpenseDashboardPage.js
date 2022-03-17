import React from 'react';
import ExpenseList from './ExpenseList';
import expenses from '../reducers/expenses';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage =() =>(
    <div>
        <ExpenseListFilters />
        <ExpenseList />

    </div> 
    )

export default ExpenseDashboardPage;