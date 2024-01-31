import React from "react";
import s from "../style/Page.module.css";

export default function Page(props) {
  return (
    <div className={s.div}>
      <div className={s.component}>
        <div className={s.info}>
          <h2>{props.Name}</h2>
          <p>
            <span>Информация :</span> {props.info}
          </p>
        </div>
        <img src={props.url} alt="Постер фільму" />
      </div>
    </div>
  );
}
