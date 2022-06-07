import React from "react";
import "./Main.scss";
import dashboard from "../../Assets/dashboard.png";
import wallet from "../../Assets/wallet.png";
import transaction from "../../Assets/transaction.png";
import delivery from "../../Assets/delivery.png";
import dispute from "../../Assets/dispute.png";

const Main = () => {
  return (
    <main>
      <section className="side-nav">
        <div>
          <div>
            <img src={dashboard} alt={"Dashboard Icon"} />
          </div>
          <p>Dashboard</p>
        </div>
        <div>
          <div>
            <img src={wallet} alt={"Wallet Icon"} />
          </div>
          <p>Wallet</p>
        </div>
        <div>
          <div>
            <img src={transaction} alt={"Transaction Icon"} />
          </div>
          <p>Transaction</p>
        </div>
        <div>
          <div>
            <img src={delivery} alt={"Delivery Icon"} />
          </div>
          <p>Delivery</p>
        </div>
        <div>
          <div>
            <img src={dispute} alt={"Dispute Icon"} />
          </div>
          <p>Dispute</p>
        </div>
      </section>
      <section className="main">
        <article>
          <p>Account Settings</p>
          <p>Set Up Your Personal Information</p>
        </article>
        <article>
          <div>
            <p>Profile</p>
            <p>Verification</p>
            <p>Bank Detail</p>
            <p>Notification Settings</p>
            <p>Give Feedback</p>
          </div>
          <div className="form-wrapper">
            <form action="">
              <label htmlFor="bankName">Bank Name</label>
              <input type="text" name="bankName" placeholder="eg. First bank" />
              <label htmlFor="accountName">Account Name</label>
              <input
                type="text"
                name="accountName"
                placeholder="eg. Bryan Daniels"
              />
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="number"
                name="accountNumber"
                placeholder="e.g. 221034521"
              />

              <label htmlFor="bvn">Bank Verification Number</label>
              <input type="number" name="bvn" placeholder="e.g. 12123456789" />
              <button>Verify</button>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
