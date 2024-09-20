import AccountDetails from "@/components/AccountDetail";
import Transactions from "@/components/Transactions";
import TransactionForm from "@/components/TransectionForm";
import { Routes } from "@/constants/routes";
import useCurrentAccount from "@/hooks/useCurrentAccount";
import Link from "next/link";
import React from "react";

export default function Account() {
  const { accountNumber, name } = useCurrentAccount();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Hola, {name}</h1>
        {!accountNumber && (
          <Link href={Routes.HOME}> Click aquí para comenzar</Link>
        )}
        {accountNumber && (
          <>
            <AccountDetails />
            <TransactionForm />
            <Transactions />
          </>
        )}
      </div>
    </div>
  );
}
