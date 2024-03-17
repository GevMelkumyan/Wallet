import React from "react";
import style from "./PaymentMethod.module.css";
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  return (
    <div className={style.paymentMethod}>
      <div className={style.createNew}>
        <p className={style.newP1}>Добавьте метод оплаты</p>
        <p className={style.newP2}>2 / 4</p>
      </div>
      <div className={style.methods}>
        <Link to={"/method"} className={style.methodTypes1}>
          <div className={style.typesDiv}>
            <p className={style.types}>Humo</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 8L14 12L10 16"
                stroke="#3D3D3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Link>
        <div className={style.methodTypes1}>
          <div className={style.typesDiv}>
            <p className={style.types}>Uzcard</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 8L14 12L10 16"
                stroke="#3D3D3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={style.methodTypes3}>
          <div className={style.typesDiv}>
            <p className={style.types}>Anorbank</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 8L14 12L10 16"
                stroke="#3D3D3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={style.methodTypes1}>
          <div className={style.typesDiv}>
            <p className={style.types}>Ipak Yuli Bank</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 8L14 12L10 16"
                stroke="#3D3D3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={style.methodTypes1}>
          <div className={style.typesDiv}>
            <p className={style.types}>Kapitalnank</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 8L14 12L10 16"
                stroke="#3D3D3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={style.lastMethod}>
          <div className={style.typesDiv1}>
            <p className={style.types}>Tenge Bank</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 8L14 12L10 16"
                stroke="#3D3D3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
