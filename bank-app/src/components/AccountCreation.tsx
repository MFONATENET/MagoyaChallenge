import { Account } from "@/constants/account";
import { create } from "@/services/createAccountService";
import { createAccount } from "@/store/accountSlice";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AccountCreation() {
  const [name, setName] = useState("");
  const [balance, setbalance] = useState("");
  const dispatch = useDispatch();
  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationFn: create,
    onSuccess: (data: Account) => {
      dispatch(createAccount(data));
      push("/account");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ name, balance: Number(balance) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label
          htmlFor="balance"
          className="block text-sm font-medium text-gray-700"
        >
          Saldo Inicial
        </label>
        <input
          type="number"
          id="balance"
          value={balance}
          onChange={(e) => setbalance(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Crear Cuenta
      </button>
    </form>
  );
}
