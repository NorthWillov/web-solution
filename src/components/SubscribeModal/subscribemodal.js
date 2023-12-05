import React, { useState } from "react";
import styles from "./subscribemodal.module.css";
import Modal from "react-modal";
import jsonp from "jsonp";
import ClipLoader from "react-spinners/ClipLoader";

const SubscribeModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const url = `https://gmail.us21.list-manage.com/subscribe/post-json?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&amp;id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}&amp;f_id=006eebe6f0`;
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      const { msg, result } = data;
      // do something with response
      setMessage(msg);
      setIsLoading(false);
    });
  };

  return (
    <Modal
      className="Modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Subscribe Modal"
      overlayClassName="Overlay"
    >
      <h2 className={styles.title}>Subscribe</h2>
      <form
        onSubmit={onSubmit}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        {message && <p className={styles.message}>{message}</p>}

        <div className={styles.inputWrap}>
          <input
            type="email"
            name="EMAIL"
            className={styles.input}
            placeholder="Email"
            value={email}
            id="mce-EMAIL"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.btns}>
          <button type="submit" className={styles.btn}>
            {isLoading ? <ClipLoader color="#36d7b7" /> : "Subscribe"}
          </button>

          <button className={`${styles.btn} ${styles.gray}`} onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SubscribeModal;
