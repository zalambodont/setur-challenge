import React, { Component } from 'react';
import { Row, Col } from 'antd';

class FooterContent extends Component {
  render() {
    return (
      <>
        <Row>
          <Col flex={1}>
            <h5>Oteller</h5>
            <nav>
              <ul>
                <li><a href="/belek-otelleri">Belek Otelleri</a></li>
                <li><a href="/kemer-otelleri">Kemer Otelleri</a></li>
                <li><a href="/bodrum-otelleri">Bodrum Otelleri</a></li>
                <li><a href="/marmaris-otelleri">Marmaris Otelleri</a></li>
                <li><a href="/cesme-otelleri">Çeşme Otelleri</a></li>
                <li><a href="/fethiye-otelleri">Fethiye Otelleri</a></li>
                <li><a href="/side-otelleri">Side Otelleri</a></li>
                <li><a href="/alanya-otelleri">Alanya Otelleri</a></li>
                <li><a href="/assos-otelleri">Assos Otelleri</a></li>
                <li><a href="/kas-otelleri">Kaş Otelleri</a></li>
              </ul>
            </nav>
          </Col>
          <Col flex={1}>
            <h5>Temalar</h5>
            <nav>
              <ul>
                <li><a href="/erken-rezervasyon-otelleri">Erken Rezervasyon Otelleri</a></li>
                <li><a href="/kibris-otelleri">Kıbrıs Otelleri</a></li>
                <li><a href="/balayi-otelleri">Balayı Otelleri</a></li>
                <li><a href="/son-dakika-tatil-firsatlari">Son Dakika Tatil Fırsatları</a></li>
                <li><a href="/bayram-otelleri">Bayram Otelleri</a></li>
                <li><a href="/cocuk-dostu-oteller">Çocuk Dostu Oteller</a></li>
                <li><a href="/aquapark-otelleri">Aquapark Otelleri</a></li>
                <li><a href="/denize-sifir-oteller">Denize Sıfır Oteller</a></li>
                <li><a href="/sanatcili-oteller">Sanatçılı Oteller</a></li>
                <li><a href="/mavi-bayrakli-oteller">Mavi Bayraklı Oteller</a></li>
              </ul>
            </nav>
          </Col>
          <Col flex={1}>
            <h5>Turlar</h5>
            <nav>
              <ul>
                <li><a href="/yurt-disi-turlar">Yurt Dışı Turları</a></li>
                <li><a href="/kultur-turlari">Kültür Turları</a></li>
                <li><a href="/gemi-turlari">Gemi Turları</a></li>
                <li><a href="/festival-turlari">Festival Turları</a></li>
                <li><a href="/butik-turlar">Butik Turlar</a></li>
                <li><a href="/setur-select-turlari">Setur Select Turları</a></li>
                <li><a href="/vizesiz-yurt-disi-turlari">Vizesiz Yurt Dışı Turlar</a></li>
              </ul>
            </nav>
          </Col>
          <Col flex={1}>
            <h5>Diğer Hizmetlerimiz</h5>
            <nav>
              <ul>
                <li><a href="/mavi-yolculuk">Mavi Yolculuk</a></li>
                <li><a href="/sedventure">Sedventure</a></li>
                <li><a href="/sirketlere-ozel-arac-kiralama">Şirketlere Özel Araç Kiralama</a></li>
                <li><a href="/transfer-sirket">Şirketlere Özel Transfer</a></li>
                <li><a href="/bireysel-ve-kurumsal-vize">Vize</a></li>
              </ul>
            </nav>
          </Col>
          <Col flex={1}>
            <h5>Gerekli Linkler</h5>
            <nav>
              <ul>
                <li><a href="/odeme-secenekleri">Ödeme Seçenekleri</a></li>
                <li><a href="/hediye-karti">Hediye Kart</a></li>
                <li><a href="/kampanyalar">Kampanyalar</a></li>
                <li><a href="/musteri-iliskileri">Müşteri İlişkileri</a></li>
                <li><a href="/kisisel-verilerin-korunmasi">Kişisel Verilerin Korunması</a></li>
                <li><a href="/cerez-politikasi">Çerez Politikası</a></li>
                <li><a href="/acentelik-basvuru-formu">Acentelik Başvuru Formu</a></li>
                <li><a href="/koronavirus-hakkinda-bilgilendirme">Koronavirüs Hakkında Bilgilendirme</a></li>
                <li><a href="/ucus-kurallari-hakkinda-bilgilendirme">Uçuş Kuralları Hakkında Bilgilendirme</a></li>
              </ul>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col flex="136px">
            <div className="applications">
              <a href="https://itunes.apple.com/tr/app/setur/id1326016062"  target="_blank" rel="noreferrer">
                <img src="https://cdn2.setur.com.tr/image/footer/appstore_3x.png" className="img-responsive" alt='alttext for ' />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.app.setur"  target="_blank" rel="noreferrer">
                <img src="https://cdn2.setur.com.tr/image/footer/playstore_3x.png" className="img-responsive" alt='alttext for ' />
              </a>
            </div>
          </Col>
          <Col flex='auto'>
            <Row>
              <Col flex='auto'>
                <div class="small-text">
                  Belirtilen fiyatlar T.C. ve K.K.T.C. vatandaşları için geçerlidir.
                    Yabancı uyruklu misafirlere uygulanacak fiyatlarımız çağrı merkezimizden öğrenebilirsiniz. <br />
                    Mentioned prices are valid for Turkish and Cyprus citizens only. Please contact our call center for special fares for foreign nationals. <br />
                    Sitemizde yer alan tesis özellikleri bilgilendirme amaçlıdır, hizmet ve kullanım saatleri dönemsel olarak Otel’ler tarafından değişitirilebilir. <br />
                    All facility properties on this website are for information purposes only. Service conditions and operating hours might be changed by hotels seasonally.<br />
                    Kıbrıs rezervasyonlarında otel konaklaması ile birlikte alınan uçak biletleri paket olarak geçerlidir.<br />Otel konaklaması iptal edildiğinde uçak bileti tek başına kullanılmaz.
                    Uçak bileti anlaşmalı sınıflardan kesildiği için iptal iade yapılmaz.
                </div>
              </Col>
              <Col flex="136px">
                <a  target="_blank" rel="noreferrer" href="https://www.tursab.org.tr/tr/ddsv">
                  <img src="https://cdn2.setur.com.tr/image/footer/Tursab_logo_white.jpg" class="img-responsive" alt='alttext for ' />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='koc' span={12}>
            <a class="koc" href="http://www.koc.com.tr/tr-tr"  target="_blank" rel="noreferrer" title="KOÇ HOLDİNG">
              <img src="https://cdn2.setur.com.tr/image/homepage/koc.png" alt='alttext for ' />
            </a> © Copyright 2000 - 2021
          </Col>
          <Col className='text-right' span={12}>
            <img class="mr-16" src="https://sectigo.com/images/seals/sectigo_trust_seal_sm_2x.png" alt='alttext for ' />
            <img src="https://cdn2.setur.com.tr/image/footer/visa-mastercard-logo_2x.png" alt='alttext for ' />

          </Col>
        </Row>
      </>
    );
  }
}
export default FooterContent;