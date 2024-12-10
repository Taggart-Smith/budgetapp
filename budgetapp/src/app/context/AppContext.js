"use client"
import { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

// Max amount displayed
const MAX_HISTORY = 5;

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);


  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    setTransactions(storedTransactions.slice(0, MAX_HISTORY));
    const storedBalance = localStorage.getItem('balance');
    setBalance(storedBalance ? parseFloat(storedBalance) : 0);
  }, []);


  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem('purchaseHistory', JSON.stringify(transactions));
    }
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('balance', balance);
  }, [balance]);

  const addTransaction = (description, amount) => {
    const newTransaction = { description, amount, date: new Date().toISOString() };

    setTransactions((prev) => {
      const updatedTransactions = [newTransaction, ...prev].slice(0, MAX_HISTORY);
    
      setBalance((prevBalance) => prevBalance = balance + amount);
      
      return updatedTransactions;
    });
  };

  return (
    <AppContext.Provider value={{ transactions, balance, addTransaction }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
