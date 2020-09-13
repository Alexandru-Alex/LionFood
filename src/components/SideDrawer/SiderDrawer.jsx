import React from "react";
import "../SideDrawer/SiderDrawer.css";

const siderDrawer = (props) => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer open"];
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/"> Home</a>
        </li>

        <li>
          <a href="/restaurante"> Restaurante</a>
        </li>
        <li>
          <a href="/orase"> Orase</a>
        </li>

        <li>
          <a href="/login"> Autentificare</a>
        </li>
      </ul>
    </nav>
  );
};
export default siderDrawer;
