'use client';

import { useAppContext } from '../context/AppContext';

const BalanceTracker = () => {
  const { balance } = useAppContext();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold">Balance Tracker</h2>
      <p className="text-lg">Current Balance: ${balance.toFixed(2)}</p>
    </div>
  );
};

export default BalanceTracker;
