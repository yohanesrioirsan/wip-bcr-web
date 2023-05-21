import { useEffect, useState } from "react";
import style from "./Backdrop.module.css";

export const Backdrop = (props) => {
  const { triggerClass } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (evt) => {
      if (evt.target.className.includes(triggerClass)) {
        setShow(true);
      } else {
        setShow(false);
      }
    }); 
  }, [triggerClass]);

  return show ? <div className={style.backdrop}></div> : <></>;
};

export default Backdrop
