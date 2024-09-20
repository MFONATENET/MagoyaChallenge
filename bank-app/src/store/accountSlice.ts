import { Account } from "@/constants/account";
import { TransactionType } from "@/types/TransactionType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  accounts: Account[];
  currentAccount: string;
}

const initialState: AccountState = { accounts: [], currentAccount: "" };

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    createAccount: (
      state,
      action: PayloadAction<Account>
    ) => {
      state.accounts.push(action.payload);
      state.currentAccount = action.payload.accountNumber;
    },
    login: (state, action: PayloadAction<string>) => {
      state.currentAccount = action.payload;
    },
    makeTransaction: (
      state,
      action: PayloadAction<{ amount: number; type: TransactionType }>
    ) => {
      const { amount, type } = action.payload;
      const accIndex = state.accounts.findIndex(
        (acc) => acc.accountNumber === state.currentAccount
      );
      if (type === TransactionType.D) {
        state.accounts[accIndex].balance += amount;
      } else {
        state.accounts[accIndex].balance -= amount;
      }
      state.accounts[accIndex].transactions.push({
        date: new Date().toISOString(),
        amount,
        type,
      });
    },
  },
});

export const { createAccount, login, makeTransaction } = accountSlice.actions;
export default accountSlice.reducer;
