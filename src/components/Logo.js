import { Link } from "react-router-dom";
const LogoComponent = () => {
  return (
    <div className="logoContainer">
      <Link to="/">
        <img
          src="https://cdn.brandfetch.io/ideeTxiKQK/w/480/h/480/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1764508876740"
          alt="Swiggy Logo"
          className="w-12 pointer-coarse:cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default LogoComponent;
