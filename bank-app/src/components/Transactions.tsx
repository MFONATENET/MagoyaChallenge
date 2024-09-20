import useCurrentAccount from "@/hooks/useCurrentAccount";
import { TransactionType } from "@/types/TransactionType";
import React from "react";

const Balance: React.FC = () => {
  const { transactions } = useCurrentAccount();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Historial de Transacciones</h2>
      {!transactions || transactions.length === 0 ? (
        <p>Todavía no hay transacciones</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((transaction, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-md">
              <p>Fecha: {new Date(transaction.date).toLocaleString()}</p>
              <p>Monto: ${transaction.amount.toFixed(2)}</p>
              <p>
                Tipo:{" "}
                {transaction.type === TransactionType.D ? "Depósito" : "Retiro"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Balance;
