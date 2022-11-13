import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import "./styles/App.css";
import abi from "./abi";

const TronWeb = require("tronweb");

const App = () => {
  const [message, setMessage] = useState(<h3> Connecting... </h3>);
  const [details, setDetails] = useState({
    name: "none",
    address: "none",
    network: "none",
  });

  const getWalletDetails = async () => {
    if (window.tronWeb) {
      //checking if wallet injected
      if (window.tronWeb.ready) {
        //we have wallet and we are logged in
        setMessage(<h3>Wallet Connected</h3>);
        setDetails({
          name: await window.tronWeb.defaultAddress.name,
          address: await window.tronWeb.defaultAddress.base58,
          network: await window.tronWeb.fullNode.host,
        });
      } else {
        //we have wallet but not logged in
        setMessage(<h3>Wallet Detected, Please Approve Connection</h3>);
        setDetails({
          name: "none",
          address: "none",
          network: "none",
        });
      }
    } else {
      //wallet is not detected at all
      setMessage(<h3>Wallet Not Detected</h3>);
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await getWalletDetails();
    }, 500);
    return () => {
      clearInterval(interval);
    };
  });

  const api = "https://api.shasta.trongrid.io";
  const privateKey =
    "1cdee40ae045e22e7035fbea581c1e380925c36986f5deb445ee0ff3471ade47";

  const tronWeb = new TronWeb(api, api, api, privateKey);

  tronWeb.setAddress("TKSzPvJcCNYntfwdaP4YRMWpkU1LuuMt34");

  const contract = tronWeb.contract(abi, "TLBRZ3tfaNoToivySLnBeQyGF1Bbtu31QE");

  const [totalSupply, getTotalSupply] = useState();
  useEffect(() => {
    const s = async () => {
      const supply = await contract.totalSupply().call();
      getTotalSupply(supply.toString());
    };
    s();
  });

  const [balance, getBalance] = useState();
  useEffect(() => {
    const b = async () => {
      try {
        let supply = await contract.balanceOf(details.address).call();
        console.log(balance + " Address " + details.address);
        getBalance(supply.toString());
      } catch (err) {
        // don't do nothing
      }
    };
    b();
  });

  const rewardUser = async (amount) => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await sleep(500);
    console.log(details.address);
    console.log(amount);

    await contract.reward(details.address, amount).send();
  };

  const spendEco = async (amount) => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await sleep(1000);
    console.log(details.address);
    console.log(amount);

    await contract.spend(amount).send();
  };

  return (
    <main>
      <script defer src="./scripts.js"></script>
      <Header rewardUser={rewardUser} balance={balance} />
      <Body />
      <div id="overlay"></div>
    </main>
  );
};

export default App;
