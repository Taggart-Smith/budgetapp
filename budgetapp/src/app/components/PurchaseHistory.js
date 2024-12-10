'use client';

import { useAppContext } from '../context/AppContext';

const PurchaseHistory = () => {
  const { transactions } = useAppContext();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold">Purchase History</h2>
      {transactions.length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index} className="py-2">
              <strong>{transaction.description}</strong>: ${transaction.amount.toFixed(2)} on{' '}
              {new Date(transaction.date).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PurchaseHistory;
