import { Account } from "@/constants/account";
import axios from "axios";

export const create = async (data:{
  name: string,
  balance: number
}): Promise<Account> => {
  const res = await axios.post("api/createAccount", data);
  return res.data;
};
