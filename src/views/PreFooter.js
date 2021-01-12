import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterestP } from "react-icons/fa";

class PreFooter extends Component {
  render() {
    return (
      <div className='pre-footer'>
        <div className='layout-wrapper'>
          <Row>
            <Col xs={24} lg={20}>
              <Row>
                <Col xs={8} md={6} lg={3}>
                  <Button type="primary" className="full-width">Kampanyalar</Button>
                </Col>
                <Col xs={8} md={6} lg={3}>
                  <Button type="primary" className="full-width">Hakkımızda</Button>
                </Col>
                <Col xs={8} md={6} lg={3}>
                  <Button type="primary" className="full-width">Kalite</Button>
                </Col>
                <Col xs={8} md={6} lg={3}>
                  <Button type="primary" className="full-width">Acenteler</Button>
                </Col>
                <Col xs={8} md={6} lg={3}>
                  <Button type="primary" className="full-width">Öneri & Şikayet</Button>
                </Col>
                <Col xs={8} md={6} lg={3}>
                  <Button type="primary" className="full-width">Broşürler</Button>
                </Col>
                <Col xs={8} md={6} lg={3}>
                  <Button type="primary" className="full-width">B. T. Hizmetleri</Button>
                </Col>
                <Col xs={8} md={6} lg={3}>
                  <Button type="primary" className="full-width">İletişim</Button>
                </Col>
              </Row>
            </Col>
            <Col xs={24} lg={4}>
              <ul className='social'>
                <li><a href='/'><FaFacebookF /></a></li>
                <li><a href='/'><FaInstagram /></a></li>
                <li><a href='/'><FaTwitter /></a></li>
                <li><a href='/'><FaYoutube /></a></li>
                <li><a href='/'><FaPinterestP /></a></li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default PreFooter;