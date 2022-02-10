import CloseIcon from "@components/icons/CloseIcon";
import { classNames } from "@lib/utils/classNames";
import { useState } from "react";
import styles from "./index.module.scss";

export const Banner = ({
  text,
  linkText = "Read More",
  bgColor = "bg-[#3770E1]",
  link = "#",
}) => {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <div className={classNames(styles.banner_container, bgColor)}>
      <div className={styles.banner_content}>
        <div className={styles.text_wrapper}>
          <p>
            <span className={styles.text}>{text}</span>
            {"  "}
            <a
              className="underline"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </a>
          </p>
        </div>
        <button
          className={styles.close_icon}
          onClick={() => {
            setShow((prev) => !prev);
          }}
          aria-label="Close popup button"
        >
          <CloseIcon width="14" height="14" fill="white" />
        </button>
      </div>
    </div>
  );
};
