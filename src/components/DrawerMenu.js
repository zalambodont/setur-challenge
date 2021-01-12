import React, { Component } from 'react';
import { Menu } from 'antd';
import { FaPlane, FaShip, FaHotel, FaBell, FaUser, FaShoppingCart,FaLuggageCart, FaFileAlt, FaBusinessTime} from "react-icons/fa";

class DrawerMenu extends Component {
  render() {
    return (
      <Menu mode="vertical">
      <Menu.Item key="mail" icon={<FaHotel />} >
        <a href="/">Otel</a>
      </Menu.Item>
      <Menu.Item key="login" icon={<FaLuggageCart />} >
        <a href="/">Tur</a>
      </Menu.Item>
      <Menu.Item key="ship" icon={<FaShip />} >
        <a href="/">Gemi</a>
      </Menu.Item>
      <Menu.Item key="plane" icon={<FaPlane />} >
        <a href="/">Uçak</a>
      </Menu.Item>
      <Menu.Item key="visa" icon={<FaFileAlt />} >
        <a href="/">Vize</a>
      </Menu.Item>
      <Menu.Item key="special" icon={<FaBusinessTime />} >
        <a href="/">Özel Çözümler</a>
      </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="mail" icon={<FaBell />} >
          <a href="/">Fırsatlar</a>
        </Menu.Item>
        <Menu.Item key="login" icon={<FaUser />} >
          <a href="/">Giriş Yap</a>
        </Menu.Item>
        <Menu.Item key="basket" icon={<FaShoppingCart />} >
          <a href="/">Sepetim</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default DrawerMenu;