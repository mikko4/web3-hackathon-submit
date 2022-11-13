import { React, useState, useEffect } from "react";
import InputCode from "./InputCode";
import abi from "./abi";
import SpendTokens from "./SpendTokens";

const TronWeb = require("tronweb");

const WalletInfo = () => {
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

    const contract = tronWeb.contract(
        abi,
        "TGNX6SSrByxG4q9AchFuWns8HjMtvWVVHZ"
    );

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
                const supply = await contract.balanceOf(details.address).call();
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

    const headerStyle = {
        padding: "0px 0",
        lineHeight: "1.5em",
    };

    return (
        <div className="container">
            <div className="inner">
                <header style={headerStyle}>
                    <h1
                        style={{
                            fontSize: "4rem",
                            fontWeight: "600",
                            marginBottom: "2rem",
                            lineHeight: "1em",
                            color: "#EB4511",
                            textTransform: "uppercase",
                            textAlign: "center",
                        }}
                    >
                        profile
                    </h1>
                </header>

                <InputCode rewardUser={rewardUser} />

                <SpendTokens spendTokens={spendEco} />

                {message}

                <li>Wallet Connected: {details.name}</li>
                <li>Wallet Address: {details.address}</li>
                <li>
                    Balance: <span>{balance} ECO</span>
                </li>
                <li>
                    Total Supply: <span>{totalSupply} ECO</span>
                </li>
                <li>Connected to: {details.network}</li>
            </div>
        </div>
    );
};

export default WalletInfo;
