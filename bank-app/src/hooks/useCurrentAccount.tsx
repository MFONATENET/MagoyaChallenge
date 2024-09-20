import { RootState } from "@/store";
import { useSelector } from "react-redux";

const useCurrentAccount = () => {
  const currentAcc = useSelector((state: RootState) =>
    state.account.accounts.find(
      (acc) => acc.accountNumber === state.account.currentAccount
    )
  );
  return { ...currentAcc };
};
export default useCurrentAccount;
