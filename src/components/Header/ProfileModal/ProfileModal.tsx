import styls from "./ProfileModal.module.scss";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styls.modal}>
      <div className={styls.modal__header}>
        <h3>Profile</h3>
        <button className={styls.modal__close_btn} onClick={onClose}>
          ✖️
        </button>
      </div>
      <div className={styls.modal__content}>
        <div className={styls.modal__item}>
          <strong>Username :</strong> Gamer123
        </div>
        <div className={styls.modal__item}>
          <strong>Email :</strong> gamer123@example.com
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
