import React, { useState } from "react";
import styles from "./subscribemodal.module.css";
import Modal from "react-modal";

const SubscribeModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Implement your subscription logic here
    console.log("Subscribed with email:", email);
    // Close the modal after subscription
    onClose();
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
      <form>
        <div className={styles.inputWrap}>
          <input
            className={styles.input}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.btns}>
          <button className={styles.btn} onClick={handleSubscribe}>
            Subscribe
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
