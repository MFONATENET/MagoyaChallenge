import { TransactionType } from "@/types/TransactionType";

export interface Transaction {
  date: string;
  amount: number;
  type: TransactionType;
}

export interface Account {
  accountNumber: string;
  name: string;
  balance: number;
  transactions: Transaction[];
}
