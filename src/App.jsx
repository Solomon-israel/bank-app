import styles from "./App.module.css";
import { TbCircleDashedLetterB } from "react-icons/tb";
import { RiMenu2Line } from "react-icons/ri";
import { MdNotificationAdd, MdNoTransfer, MdSavings } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import { BiChart, BiHome } from "react-icons/bi";
import { PiPiggyBank } from "react-icons/pi";
import { LuNfc } from "react-icons/lu";

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
          <div className={`${styles.balance_cards} ${styles.card_one}`}>
            <div className={styles.balance_card_top}>
              <p>Current Balance</p>
              <BsEyeFill />
            </div>
            <p className={styles.acct_num}>$123456789</p>
            <span>Naira Account</span>
            <BiHome className={styles.balance_card_icon} />
          </div>

          <div className={`${styles.balance_cards} ${styles.card_two}`}>
            <div className={styles.balance_card_top}>
              <p>Current Balance</p>
              <BsEyeFill />
            </div>
            <p className={styles.acct_num}>$123456789</p>
            <span>Naira Account</span>
            <BiHome className={styles.balance_card_icon} />
          </div>

          <div className={`${styles.balance_cards} ${styles.card_three}`}>
            <div className={styles.balance_card_top}>
              <p>Current Balance</p>
              <BsEyeFill />
            </div>
            <p className={styles.acct_num}>$123456789</p>
            <span>Naira Account</span>
            <BiHome className={styles.balance_card_icon} />
          </div>

          {/* <div className={styles.balance_cards}>
            <p>Savings Balance</p>
            <span className={styles.balance_cards_amount}>$80,000</span>
            <p>Naira Savings</p>
            <PiPiggyBank className={styles.balance_cards_icon} />
          </div> */}
          {/* <div className={styles.balance_cards}>
            <p>Total Income</p>
            <span className={styles.balance_cards_amount}>$320,000</span>
            <p>This Month</p>
            <BiChart className={styles.balance_cards_icon} />
          </div> */}
        </div>

        <div className={styles.debit_card_container}>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <h3>BankFlow</h3>
              <LuNfc className={styles.nfc} />
            </div>

            <div className={styles.chip}></div>

            <p className={styles.card_num}>1234 5678 9012 3456</p>

            <div className={styles.card_bottom}>
              <span>Solomon Israel</span>
              <h2>VISA</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
