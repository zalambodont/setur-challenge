import { Breadcrumb, Row, Col } from 'antd';

const BreadCrumb = () => {
  return (
    <div className="layout-wrapper">
      <Row>
        <Col xs={24} lg={12} >
          <Breadcrumb className='py-1 hidden-medium'>
            <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Lorem</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Ipsum</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col xs={24} md={24} lg={12} className='head-right-menu'>
          <ul>
            <li><a className="call-center" title="Çagri Merkezi 444 28 22" href="tel:4442822">444 28 22</a></li>
            <li><a href="/kampanyalar" title="" className="campaigns">Kampanyalar</a></li>
            <li><a href="/yetkili-seyahat-acenteleri" title="">Yetkili Seyahat Acenteleri</a></li>
            <li className="hidden-support-container">
              <a href="#" title="" id="support-btn">Yardım ve Destek</a>
              <i className="fal fa-angle-down"></i>
              <ul className="hidden-support">
                <li>
                  <a href="/hakkimizda">Hakkımızda</a>
                </li>
                <li>
                  <a href="/iletisim">İletişim</a>
                </li>
              </ul>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default BreadCrumb