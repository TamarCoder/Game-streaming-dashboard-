import styles from './SettingModal.module.scss' 


interface SettingModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const SettingModal: React.FC<SettingModalProps> = ({ isOpen, onClose }) => {
    if(!isOpen) return null;

    return(
        <div className={styles.modal}>
            <div className={styles.modal__header}>
              <h3>Settings</h3>
                <button className={styles.modal__close_btn} onClick={onClose}>✖️</button>
            </div>
            <div className={styles.modal__content}>
              <div className={styles.modal__item}>
                <strong>Profile Settings</strong>
              </div>
              <div className={styles.modal__item}>
                <strong>Account Settings</strong>
              </div>
              <div className={styles.modal__item}>
                <strong>Privacy Settings</strong>
              </div>
              <div className={styles.modal__item}>
                <strong>Notification Settings</strong>
              </div>
            </div>
        </div>
    )
}

export default SettingModal;