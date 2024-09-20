import useCurrentAccount from '@/hooks/useCurrentAccount';
import React from 'react';

const Balance: React.FC = () => {
  const {balance} = useCurrentAccount()
  return <h3>Saldo Actual: ${balance?.toLocaleString()}</h3>;
};

export default Balance;