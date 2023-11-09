import sekeleton from "../../../styles/sekeleton.module.scss";

const NavbarLoading = () => {
  return (
    <div
      className={`${sekeleton.sekeleton} w-full h-12 bg-black fixed z-40 max-[550px]:h-14`}
    ></div>
  );
};

export default NavbarLoading;
