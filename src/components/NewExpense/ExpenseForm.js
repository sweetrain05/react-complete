import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }

    function submitHandler(e) {
        e.preventDefault(); // prevent reload of page when form is submitted(default reload feature in browser)

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
