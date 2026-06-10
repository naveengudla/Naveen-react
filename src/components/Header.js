import LogoComponent from "./Logo";
import NavbarComponent from "./Navbar";

const HeaderComponent = () => {
  return (
    <div className="flex justify-between items-center p-4 m-4 bg-[#fff] shadow-[0_0_8px_0_rgba(2,6,12,0.08)] border-[#e8e8e8] border-[1px] rounded-lg">
      <LogoComponent />
      <NavbarComponent />
    </div>
  );
};

export default HeaderComponent;