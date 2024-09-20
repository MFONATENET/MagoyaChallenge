
import { Account } from "@/constants/account";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Account>
) {
  res.status(200).json({
    accountNumber: Math.random().toString(18).slice(2,16),
    name: req.body.name,
    balance: req.body.balance,
    transactions: []
  });
}
