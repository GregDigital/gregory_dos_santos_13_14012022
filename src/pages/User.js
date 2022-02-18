import React from "react";
import Account from "../components/Account";
import EditProfil from "../components/EditProfil";
import { isEmpty } from "../components/Utils";
import { ACCOUNTS_USERS } from "../services/userAccounts";

const User = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <EditProfil />
      <h2 className="sr-only">Accounts</h2>

      {!isEmpty(ACCOUNTS_USERS) &&
        ACCOUNTS_USERS.map((account, index) => (
          <Account
            key={index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
    </main>
  );
};

export default User;
