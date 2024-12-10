import AddTransaction from "./components/AddTransaction";
import BalanceTracker from "./components/BalanceTracker";
import PurchaseHistory from "./components/PurchaseHistory";

export default function Home() {
  return (
    <div className="flex h-screen justify-center">
      <div className="flex justify-center h-auto content-center flex-col">
        <BalanceTracker />
        <PurchaseHistory />
        <AddTransaction />
      </div>
    </div>
  );
}
