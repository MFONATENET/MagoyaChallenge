import React from "react";
import Balance from "./Balance";
import useCurrentAccount from "@/hooks/useCurrentAccount";

export default function AccountDetails() {
  const { accountNumber } = useCurrentAccount();
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Tu Cuenta {accountNumber}</h2>
      <Balance></Balance>
    </div>
  );
}
