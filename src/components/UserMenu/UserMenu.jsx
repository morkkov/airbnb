import "./style.scss";
import Link from "../Link/Link.jsx";
import GlobeIcon from "./globe.svg";
import Account from "../Account/Account.jsx";

const UserMenu = () => {
  return (
    <div className="user-menu">
      <div className="user-menu__home">
        <Link text="Air BNB your home" />
      </div>
      <div className="user-menu__local">
        <Link icon={GlobeIcon} />
      </div>
      <div className="user-menu__user">
        <Account />
      </div>
    </div>
  );
};

export default UserMenu;
