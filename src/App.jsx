import styles from "./App.module.css";
import { TbCircleDashedLetterB } from "react-icons/tb";
import { RiMenu2Line } from "react-icons/ri";
import { MdNotificationAdd, MdNoTransfer, MdSavings } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import { BiChart, BiHome } from "react-icons/bi";
import { PiPiggyBank } from "react-icons/pi";

export default function App() {
  return (
    <div className={styles.container}>
      {/* HEADER */}
      <section className={styles.header}>
        <div className={styles.header_left}>
          <RiMenu2Line className={styles.icon} />

          <div className={styles.logo}>
            <TbCircleDashedLetterB className={styles.logo_icon} />
            <h3>BankFlow</h3>
          </div>
        </div>

        <div className={styles.header_right}>
          <MdNotificationAdd />
          <p>Solomon Israel</p>
        </div>
      </section>

      {/*  CARDS */}
      <section className={styles.cards}>
        <div className={styles.card_text}>
          <span>Welcome back,</span>
          <h3>Solomon Israel 👋</h3>
        </div>

        <div className={styles.balance_cards_container}>
          <div className={styles.balance_cards}>
            <p>Current Balance</p>
            <span className={styles.balance_cards_amount}>$250,000</span>
            <p>Naira Account</p>
            <BiHome className={styles.balance_cards_icon} />
          </div>
          <div className={styles.balance_cards}>
            <p>Savings Balance</p>
            <span className={styles.balance_cards_amount}>$80,000</span>
            <p>Naira Savings</p>
            <PiPiggyBank className={styles.balance_cards_icon} />
          </div>
          <div className={styles.balance_cards}>
            <p>Total Income</p>
            <span className={styles.balance_cards_amount}>$320,000</span>
            <p>This Month</p>
            <BiChart className={styles.balance_cards_icon} />
          </div>
        </div>

        <div className={styles.debit_card_container}>
          <h4>My Debit Card</h4>
          <div className={styles.debit_card}>
            <p>BankFlow</p>
            <p>12335634567467</p>
            <span>Solomon Israel</span>
          </div>
          <span>View Card</span>
        </div>
      </section>
    </div>
  );
}
