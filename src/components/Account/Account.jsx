import "./style.scss";
import navIcon from "./nav.svg";

const Account = () => {
  return (
    <button className="account">
      <div className="account_nav-icon">
        <img src={navIcon} alt="" />
      </div>
      <div className="account_avatar">
        <img src="./img/icons/user-avatar.svg" alt="user avatar" />
      </div>
    </button>
  );
};

export default Account;
