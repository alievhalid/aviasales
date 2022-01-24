import React, { useState } from "react";
import logo from "../img/Logo.png";
import styles from "./main.module.scss";
import airlogo from "../img/air-logo.png";
import { useSelector } from "react-redux";
function Main() {
  const tickets = useSelector((state) => state.reducer.tickets);
  const loading = useSelector((state) => state.reducer.loading);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(true);
  const [checkboxOne, setCheckboxOne] = useState(false);
  const [checkboxTwo, setCheckboxTwo] = useState(false);
  const [checkboxThree, setCheckboxThree] = useState(false);
  const [checkboxFour, setCheckboxFour] = useState(false);
  const [checkboxFive, setCheckboxFive] = useState(false);

  
  const handleCheckOne = (event) => {
    setCheckboxOne(event.target.checked);
  };
  const handleCheckTwo = (event) => {
    setCheckboxTwo(event.target.checked);
  };
  const handleCheckThree = (event) => {
    setCheckboxThree(event.target.checked);
  };
  const handleCheckFour = (event) => {
    setCheckboxFour(event.target.checked);
  };
  const handleCheckFive = (event) => {
    setCheckboxFive(event.target.checked);
  };

  const handleClickOne = () => {
    setCheckboxOne(!checkboxOne);
  };
  const handleClickTwo = () => {
    setCheckboxTwo(!checkboxTwo);
  };
  const handleClickThree = () => {
    setCheckboxThree(!checkboxThree);
  };
  const handleClickFour = () => {
    setCheckboxFour(!checkboxFour);
  };
  const handleClickFive = () => {
    setCheckboxFive(!checkboxFive);
  };
  const changeOne = () => {
    setOne(!one);
    if (one === true) {
      setTwo(true);
      setThree(true);
    } else if (two === true || three === true || one === true) {
      setOne(false);
    }
  };
  const changeTwo = () => {
    setTwo(!two);
    if (two === true) {
      setOne(true);
      setThree(true);
    } else if (two === true || three === true || one === true) {
      setTwo(false);
    }
  };
  const changeThree = () => {
    setThree(!three);
    if (three === true) {
      setOne(true);
      setTwo(true);
    } else if (two === true || three === true || one === true) {
      setThree(false);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.options}>
        <div className={styles["filter"]}>
          <div className={styles.heading}>Количество пересадок</div>
          <div
            className={checkboxOne ? styles.checkboxSelected : styles.checkbox}
            onClick={handleClickOne}
          >
            <input
              type="checkbox"
              value={checkboxOne}
              checked={checkboxOne}
              onChange={handleCheckOne}
            />
            Все
          </div>
          <div
            className={checkboxTwo ? styles.checkboxSelected : styles.checkbox}
            onClick={handleClickTwo}
          >
            <input
              type="checkbox"
              value={checkboxTwo}
              checked={checkboxTwo}
              onChange={handleCheckTwo}
            />
            Без пересадок
          </div>
          <div
            className={
              checkboxThree ? styles.checkboxSelected : styles.checkbox
            }
            onClick={handleClickThree}
          >
            <input
              type="checkbox"
              value={checkboxThree}
              checked={checkboxThree}
              onChange={handleCheckThree}
            />
            1 пересадка
          </div>
          <div
            className={checkboxFour ? styles.checkboxSelected : styles.checkbox}
            onClick={handleClickFour}
          >
            <input
              type="checkbox"
              value={checkboxFour}
              checked={checkboxFour}
              onChange={handleCheckFour}
            />
            2 пересадки
          </div>
          <div
            className={checkboxFive ? styles.checkboxSelected : styles.checkbox}
            onClick={handleClickFive}
          >
            <input
              type="checkbox"
              value={checkboxFive}
              checked={checkboxFive}
              onChange={handleCheckFive}
            />
            3 пересадки
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.tabs}>
            <div
              className={
                one === false ? styles["tab-one-red"] : styles["tab-one"]
              }
              onClick={changeOne}
            >
              самый дешевый
            </div>
            <div
              className={
                two === false ? styles["tab-one-red"] : styles["tab-two"]
              }
              onClick={changeTwo}
            >
              самый быстрый
            </div>
            <div
              className={
                three === false ? styles["tab-one-red"] : styles["tab-one"]
              }
              onClick={changeThree}
            >
              оптимальный
            </div>
          </div>
          {loading ? (
            <span className={styles.loading}>идет загрузка</span>
          ) : (
            tickets.tickets?.map((ticket, index) => {
              return (
                <div className={styles.card} key={index}>
                  <div className={styles["card-info"]}>
                    <div className={styles["price"]}>{ticket.price} ₽</div>
                    <div className={styles.airlogo}>
                      <img src={airlogo} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className={styles.date}>
                      <div>
                        <span>
                          {ticket?.segments[0].origin} -{" "}
                          {ticket?.segments[0].destination}
                        </span>
                        <div>10:45 - 08:00</div>
                      </div>
                      <div>
                        <span>В ПУТИ</span>
                        <div>{ticket?.segments[0].duration} мин</div>
                      </div>
                      <div>
                        <span> ПЕРЕСАДКИ</span>
                        <div>{ticket?.carrier}</div>
                      </div>
                    </div>
                    <div className={styles.date}>
                      <div>
                        <span>
                          {ticket?.segments[1].origin} -{" "}
                          {ticket?.segments[1].destination}
                        </span>
                        <div>10:45 - 08:00</div>
                      </div>
                      <div>
                        <span>В ПУТИ</span>
                        <div>{ticket?.segments[1].duration} мин</div>
                      </div>
                      <div>
                        <span> ПЕРЕСАДКИ</span>
                        <div>{ticket.carrier}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
