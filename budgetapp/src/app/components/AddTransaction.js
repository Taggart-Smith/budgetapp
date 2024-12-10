'use client';

import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

const AddTransaction = () => {
    const { addTransaction } = useAppContext();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddTransaction = () => {
        if (description.trim() === '' || isNaN(amount) || amount === '') {
            alert('Please enter a valid description and amount.');
            return;
        }

        addTransaction(description, parseFloat(amount));
        setDescription('');
        setAmount('');
    };

    return (
        <div className="">
            <h2 className="text-xl font-bold">Add Transaction</h2>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 p-2 mt-2 w-full"
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border border-gray-300 p-2 mt-2 w-full"
            />
            <button
                onClick={handleAddTransaction}
                className=""
            >
                Add Transaction
            </button>
        </div>
    );
};

export default AddTransaction;
