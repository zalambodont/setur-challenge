import React, { Component } from 'react';
import LeftMenu from '../components/LeftMenu'
import RightMenu from '../components/RightMenu'
import DrawerMenu from '../components/DrawerMenu'
import { Drawer, Button } from 'antd';
import logo from '../Assets/Images/setur.png'
class Header extends Component {
  state = {
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
render() {
    return (
        <nav className="menuBar">
          <div className="logo">
            <a href="/"><img src={logo} alt='Setur' /></a>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
                <RightMenu />
            </div>
            <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title="Menü"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <DrawerMenu />
            </Drawer>
</div>
        </nav>
    );
  }
}
export default Header;