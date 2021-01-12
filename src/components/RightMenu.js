import React, { Component } from 'react';
import { Menu } from 'antd';
import {  FaBell, FaUser, FaShoppingCart} from "react-icons/fa";

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
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
export default RightMenu;