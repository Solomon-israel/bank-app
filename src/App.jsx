import styles from "./App.module.css";
import { TbCircleDashedLetterB } from "react-icons/tb";
import { RiMenu2Line } from "react-icons/ri";
import {
  MdNotificationAdd,
  MdNotifications,
  MdNoTransfer,
  MdSavings,
} from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import { BiChart, BiHome } from "react-icons/bi";
import { PiPiggyBank } from "react-icons/pi";
import { LuNfc } from "react-icons/lu";
import { GiSave, GiSaveArrow } from "react-icons/gi";
import { FaArrowDown, FaArrowUp, FaMoneyBill } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaMoneyBillWheat } from "react-icons/fa6";

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
          <MdNotifications className={styles.notification_bell} />
          <p>Israel</p>
        </div>
      </section>

      {/*  CARDS */}
      <section className={styles.cards}>
        <div className={styles.card_text}>
          <span>Welcome back,</span>
          <h3>Israel 👋</h3>
        </div>

        <div className={styles.balance_cards_container}>
          <div className={`${styles.balance_cards} ${styles.card_one}`}>
            <div className={styles.balance_card_top}>
              <p>Current Balance</p>
              <BsEyeFill />
            </div>
            <p className={styles.acct_num}>$250,000.00</p>
            <span>Naira Account</span>
            <BiHome className={styles.balance_cards_icon} />
          </div>

          <div className={`${styles.balance_cards} ${styles.card_two}`}>
            <div className={styles.balance_card_top}>
              <p>Savings Balance</p>
              <BsEyeFill />
            </div>
            <p className={styles.acct_num}>$80,000.00</p>
            <span>Savings Account</span>
            <PiPiggyBank className={styles.balance_cards_icon} />
          </div>

          <div className={`${styles.balance_cards} ${styles.card_three}`}>
            <div className={styles.balance_card_top}>
              <p>Total Income</p>
              <BsEyeFill />
            </div>
            <p className={styles.acct_num}>$320,000.00</p>
            <span>This month</span>
            <BiChart className={styles.balance_cards_icon} />
          </div>
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

      <section className={styles.quick_actions}>
        <span>Quick Actions</span>
        <div className={styles.quick_actions_container}>
          <div className={styles.banking_service}>
            <button className={styles.deposit}>
              <FaArrowDown
                className={`${styles.banking_service_icon} ${styles.banking_service_icon_one}`}
              />
              <div className={styles.banking_service_text}>
                <h4>Deposit</h4>
                <span>Add money</span>
              </div>
            </button>
          </div>
          <div className={styles.banking_service}>
            <button className={styles.deposit}>
              <FaArrowUp
                className={`${styles.banking_service_icon} ${styles.banking_service_icon_two}`}
              />
              <div className={styles.banking_service_text}>
                <h4>Withdrawal</h4>
                <span>Withdraw money</span>
              </div>
            </button>
          </div>
          <div className={styles.banking_service}>
            <button className={styles.deposit}>
              <FaArrowRightArrowLeft
                className={`${styles.banking_service_icon} ${styles.banking_service_icon_three}`}
              />
              <div className={styles.banking_service_text}>
                <h4>Transfer</h4>
                <span>Deposit money</span>
              </div>
            </button>
          </div>
          <div className={styles.banking_service}>
            <button className={styles.deposit}>
              <FaMoneyBillWheat
                className={`${styles.banking_service_icon} ${styles.banking_service_icon_four}`}
              />
              <div className={styles.banking_service_text}>
                <h4>Pay Bills</h4>
                <span>Make payments</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
