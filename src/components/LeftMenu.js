import React, { Component } from 'react';
import { Menu, Icon, Row, Col, Space } from 'antd';

const SubMenu = Menu.SubMenu;
const dummyMenu = 
(
  <div className='mega-menu'>
  <Row>
    <Col span={6}>
      <figure><img src='https://cdn2.setur.com.tr/image/web-banner/menu-9.jpg' alt='' className='img-responsive' /></figure>
      <div className='menu-holder'>
        <h3>Grup 1</h3>
            <Menu mode="vertical">
            <Menu.Item>
                <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
              
              <Menu.Item>
              <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
              
              <Menu.Item>
              <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
            </Menu>
      </div>
    </Col>
    <Col span={6}>
      <figure><img src='https://cdn2.setur.com.tr/image/web-banner/menu-10.jpg' alt='' className='img-responsive' /></figure>
      <div className='menu-holder'>
        <h3>Grup 2</h3>
            <Menu mode="vertical">
            <Menu.Item>
                <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
              
              <Menu.Item>
              <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
              
              <Menu.Item>
              <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
            </Menu>
      </div>
    </Col>
    <Col span={6}>
      <figure><img src='https://cdn2.setur.com.tr/image/web-banner/menu-11.jpg' alt='' className='img-responsive' /></figure>
      <div className='menu-holder'>
        <h3>Grup 3</h3>
            <Menu mode="vertical">
            <Menu.Item>
                <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
              
              <Menu.Item>
              <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
              
              <Menu.Item>
              <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
            </Menu>
      </div>
    </Col>
    <Col span={6}>
      <figure><img src='https://cdn2.setur.com.tr/image/web-banner/menu-12.jpg' alt='' className='img-responsive' /></figure>
      <div className='menu-holder'>
        <h3>Grup 4</h3>
            <Menu mode="vertical">
            <Menu.Item>
                <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
              
              <Menu.Item>
              <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
              
              <Menu.Item>
              <a href="/">Kişisel geziler ve lorem ipsum</a>
              </Menu.Item>
            </Menu>
      </div>
    </Col>
    </Row>
</div>

)

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
      <SubMenu title='Otel'>
        <Menu.Item className='mega-menu'>
          {dummyMenu}
        </Menu.Item>
      </SubMenu>
        <SubMenu title='Tur'>
          <Menu.Item className='mega-menu'>
            {dummyMenu}
          </Menu.Item>
        </SubMenu>
        <SubMenu title='Gemi'>
          <Menu.Item className='mega-menu'>
            {dummyMenu}
          </Menu.Item>
        </SubMenu>
 
        <Menu.Item>
          <a href="/">Uçak</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/">Vize</a>
        </Menu.Item>
        <SubMenu title='Özel Çözümler'>
          <Menu.Item className='mega-menu'>
            <div className='mega-menu'>
              <Row>
                <Col span={8}>
                  <figure><img src='https://cdn2.setur.com.tr/image/web-banner/menu-13.jpg' alt='' className='img-responsive' /></figure>
                  <div className='menu-holder'>
                    <h3>Kişiye Özel</h3>
                        <Menu mode="vertical">
                        <Menu.Item>
                            <a href="/">Kişisel geziler ve lorem ipsum</a>
                          </Menu.Item>
                          
                          <Menu.Item>
                          <a href="/">Kişisel geziler ve lorem ipsum</a>
                          </Menu.Item>
                          
                          <Menu.Item>
                          <a href="/">Kişisel geziler ve lorem ipsum</a>
                          </Menu.Item>
                        </Menu>
                  </div>
                </Col>
                <Col span={16}>
                  <figure><img src='https://cdn2.setur.com.tr/image/web-banner/menu-14.jpg' alt='' className='img-responsive' /></figure>
                  <div className='menu-holder'>
                    <h3>Şirketlere Özel</h3>
                    <Row>
                      <Col span={12}>
                        <Menu mode="vertical">
                        <Menu.Item>
                            <a href="/">Kurumsal etkinlikler ve lorem ipsum</a>
                          </Menu.Item>
                          
                          <Menu.Item>
                          <a href="/">Kurumsal etkinlikler ve lorem ipsum</a>
                          </Menu.Item>
                          
                          <Menu.Item>
                          <a href="/">Kurumsal etkinlikler ve lorem ipsum</a>
                          </Menu.Item>
                        </Menu>
                      </Col>
                      <Col span={12}>
                        <Menu mode="vertical">
                        <Menu.Item>
                            <a href="/">Kurumsal etkinlikler ve lorem ipsum</a>
                          </Menu.Item>
                          
                          <Menu.Item>
                          <a href="/">Kurumsal etkinlikler ve lorem ipsum</a>
                          </Menu.Item>
                          
                          <Menu.Item>
                          <a href="/">Kurumsal etkinlikler ve lorem ipsum</a>
                          </Menu.Item>
                        </Menu>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default LeftMenu;