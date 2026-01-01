import React from 'react';
import styles from './NotificationModal.module.scss';

interface NotificationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose }) => {
    if(!isOpen) return null;

    return (
         <div className={styles.modal}>
            <div className={styles.modal__header}>
              <h3>Notfication</h3>
                <button className={styles.modal__close_btn} onClick={onClose}>✖️</button>
            </div>
            <div className={styles.modal__content}>
              <div className={styles.modal__item}>
                <strong>Tyler Nix : </strong> Like your post
              </div>
              <div className={styles.modal__item}>
                <strong>Linda Park :</strong> Commented on your photo
              </div>
              <div className={styles.modal__item}>
                <strong>Sasha Moris :</strong> added you as a friend
              </div>
              <div className={styles.modal__item}>
                <strong>Jesica Wong</strong> started a live stream
              </div>
            </div>


         </div>

    )
}

export default NotificationModal;