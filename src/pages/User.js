import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Account from "../components/Account";
import EditProfil from "../components/EditProfil";
import { userDetails } from "../actions/user.action";
import { isEmpty } from "../components/Utils";
import { ACCOUNTS_USERS } from "../services/userAccounts";

const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userDetails());
  }, [dispatch]);

  return (
    <main className="main bg-dark">
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
