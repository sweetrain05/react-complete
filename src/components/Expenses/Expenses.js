import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    function yearFilterHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    // filter the expenses data by selected year
    const filteredExpenses = props.items.filter((list) => {
        return list.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    onFiltedByYear={yearFilterHandler}
                    selectedYear={filteredYear}
                />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;
