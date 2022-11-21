import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import walletWhite from '/public/icons/walletWhite.png';
import { toast } from 'react-toastify';

const Wallet = ({ sxBtn = {}, sxBox = {}, textBtn = 'Connect Wallet' }) => {
  const [accounts, setAccounts] = useState([]);
  const isConnected = Boolean(accounts[0]);

  const connectMetaMask = async () => {
    const accs = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log(accs);
    setAccounts(accs);
    toast.success(`connected to metamask ....`);
  };

  return (
    <Link href="/token">
      <Button
        variant="contained"
        sx={{
          ...sxBox,
          borderRadius: '60px',
          mt: { xs: 2, md: 0 },
          ml: 'auto',
          height: '50px',
        }}
        onClick={connectMetaMask}
      >
        {textBtn}
        <Box sx={{ ml: 1, ...sxBtn }}>
          <Image src={walletWhite} twitter="walletWhite" />
        </Box>
      </Button>
    </Link>
  );
};

export default Wallet;
