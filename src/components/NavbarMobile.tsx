import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <Link className="menu-item" to="/" onClick={closeSideBar}>
        หน้าแรก
      </Link>

      <Link className="menu-item" to="/content" onClick={closeSideBar}>
        คนหายทั้งหมด
      </Link>

      <Link className="menu-item" to="/help" onClick={closeSideBar}>
        ศูนย์ช่วยเหลือ
      </Link>
    </Menu>
  );
};

export default NavbarMobile;
