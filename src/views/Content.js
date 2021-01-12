import React, { Component } from 'react';
import Slider from '../components/Slider'
import { Row, Col, Button, Space } from 'antd';
import image from '../Assets/Images/istanbul-yakin-min.jpg'
import i1 from '../Assets/Images/1.jpg'
import i2 from '../Assets/Images/2.jpg'
import i3 from '../Assets/Images/3.jpg'
import i4 from '../Assets/Images/4.jpg'
import i5 from '../Assets/Images/5.jpg'
import i6 from '../Assets/Images/6.jpg'
import i7 from '../Assets/Images/7.jpg'
import i8 from '../Assets/Images/8.jpg'
import { FaArrowAltCircleRight, FaAngleDoubleDown, FaAngleDoubleUp, } from "react-icons/fa";


class Content extends Component {
  constructor() {
    super();
    this.state = {
      extended: false,
    };
    this.showHide = this.showHide.bind(this);
  }

  showHide = () => {
    this.setState({ extended: !this.state.extended });
  };
  render() {
    return (
      <>
        <Slider />
        <div className="layout-wrapper">
          <section className='mb-16'>
            <Row gutter={16}>
              <Col xs={12} className={"mb-8"}>
                <h1>Bizden Size Öneriler</h1>
              </Col>
              <Col xs={12} className="text-right">
                <Space direction="horizontal" size={12}>
                  <Button type="secondary" >Yurtdışı Önerileri</Button>
                  <Button type="secondary" >Yurtiçi Önerileri</Button>
                </Space>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={16}>
                <div className="home-collection mb-sm-16">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/istanbul-yakin-min.jpg)" }}>
                    <figure>
                      <img src={image} alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline'>
                    Konya Şeb-i Arus Turu
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <Button size='small' type="secondary" >Lorem ipsum wellnes park</Button>
                    <Button size='small' type="secondary" >Dolor sit amet sports park</Button>
                    <Button size='small' type="secondary" >Lorem ipsum wellnes park</Button>
                    <Button size='small' type="secondary" >Dolor sit amet sports park</Button>
                    <Button size='small' type="secondary" >Lorem ipsum wellnes park</Button>
                    <Button size='small' type="secondary" >Dolor sit amet sports park</Button>
                    <Button size='small' type="secondary" >Lorem ipsum wellnes park</Button>
                    <Button size='small' type="secondary" >Dolor sit amet sports park</Button>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="home-collection mb-16">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg)" }}>
                    <figure>
                      <img src='https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg' alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline smaller'>
                    Termal Oteller
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <Button size='small' type="secondary" >Lorem ipsum wellnes park</Button>
                    <Button size='small' type="secondary" >Dolor sit amet sports park</Button>
                  </div>
                </div>
                <div className="home-collection">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/kayak-min.jpg)" }}>
                    <figure>
                      <img src='https://cdn2.setur.com.tr/image/web-banner/kayak-min.jpg' alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline smaller'>
                    Kayak Otelleri
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <Button size='small' type="secondary" >Lorem ipsum wellnes park</Button>
                    <Button size='small' type="secondary" >Dolor sit amet sports park</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <section className='mb-16'>
            <Row gutter={16}>
              <Col xs={12} className={"mb-8"}>
                <h1>Popüler Turlar</h1>
              </Col>
              <Col xs={12} className="text-right">
                <Space direction="horizontal" size={12}>
                  <Button type="secondary" >Tüm Yurtiçi Turlar</Button>
                  <Button type="secondary" >Tüm Yurtdışı Turlar</Button>
                </Space>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={12} lg={6}>
                <div className="home-collection mb-sm-16">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg)" }}>
                    <figure>
                      <img src='https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg' alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline smaller'>
                    Konya Şeb'i Arus turu
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <div className='collection-detail'>
                      <table className='table'>
                        <tr>
                          <td>Süre:</td>
                          <td>2 Gün</td>
                        </tr>
                        <tr>
                          <td>Fiyat:</td>
                          <td>1.055,24 TL</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6} className={"mb-16"}>
                <div className="home-collection mb-sm-16">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg)" }}>
                    <figure>
                      <img src='https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg' alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline smaller'>
                    Konya Şeb'i Arus turu
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <div className='collection-detail'>
                      <table className='table'>
                        <tr>
                          <td>Süre:</td>
                          <td>2 Gün</td>
                        </tr>
                        <tr>
                          <td>Fiyat:</td>
                          <td>1.055,24 TL</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6} className={"mb-16"}>
                <div className="home-collection mb-sm-16">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg)" }}>
                    <figure>
                      <img src='https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg' alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline smaller'>
                    Konya Şeb'i Arus turu
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <div className='collection-detail'>
                      <table className='table'>
                        <tr>
                          <td>Süre:</td>
                          <td>2 Gün</td>
                        </tr>
                        <tr>
                          <td>Fiyat:</td>
                          <td>1.055,24 TL</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6}>
                <div className="home-collection mb-16">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg)" }}>
                    <figure>
                      <img src='https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg' alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline smaller'>
                    Konya Şeb'i Arus turu
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <div className='collection-detail'>
                      <table className='table'>
                        <tr>
                          <td>Süre:</td>
                          <td>2 Gün</td>
                        </tr>
                        <tr>
                          <td>Fiyat:</td>
                          <td>1.055,24 TL</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>

        </div>
        <div className='gray-background py-16'>
          <section className='layout-wrapper'>
            <Row gutter={16}>
              <Col xs={12} className={"mb-8"}>
                <h1>Gemi Turları</h1>
              </Col>
              <Col xs={12} className="text-right">
                <Space direction="horizontal" size={12}>
                  <Button type="secondary" >Tüm Gemi Turları</Button>
                </Space>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={12} lg={6}>
                <div className="home-collection mb-sm-16">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg)" }}>
                    <figure>
                      <img src='https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg' alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline smaller'>
                    Konya Şeb'i Arus turu
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <div className='collection-detail'>
                      <table className='table'>
                        <tr>
                          <td>Süre:</td>
                          <td>2 Gün</td>
                        </tr>
                        <tr>
                          <td>Fiyat:</td>
                          <td>1.055,24 TL</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6} className={"mb-16"}>
                <div className="home-collection mb-sm-16">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg)" }}>
                    <figure>
                      <img src='https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg' alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline smaller'>
                    Konya Şeb'i Arus turu
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <div className='collection-detail'>
                      <table className='table'>
                        <tr>
                          <td>Süre:</td>
                          <td>2 Gün</td>
                        </tr>
                        <tr>
                          <td>Fiyat:</td>
                          <td>1.055,24 TL</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6} className={"mb-16"}>
                <div className="home-collection mb-sm-16">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg)" }}>
                    <figure>
                      <img src='https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg' alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline smaller'>
                    Konya Şeb'i Arus turu
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <div className='collection-detail'>
                      <table className='table'>
                        <tr>
                          <td>Süre:</td>
                          <td>2 Gün</td>
                        </tr>
                        <tr>
                          <td>Fiyat:</td>
                          <td>1.055,24 TL</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6}>
                <div className="home-collection mb-16">
                  <div className="figure" style={{ backgroundImage: "url(https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg)" }}>
                    <figure>
                      <img src='https://cdn2.setur.com.tr/image/web-banner/termal-min.jpg' alt="Alt Description" className="img-responsive" />
                    </figure>
                  </div>
                  <div className='headline smaller'>
                    Konya Şeb'i Arus turu
                        <i><FaArrowAltCircleRight /></i>
                  </div>
                  <div className='collection-info'>
                    <div className='collection-detail'>
                      <table className='table'>
                        <tr>
                          <td>Süre:</td>
                          <td>2 Gün</td>
                        </tr>
                        <tr>
                          <td>Fiyat:</td>
                          <td>1.055,24 TL</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </div>
        <div className='layout-wrapper'>
          <section className='py-16'>
            <article className={!this.state.expanded ? 'cut-in-half' : ''}>
              <h1>Tatil Deyince...</h1>
              <p>Tatil deyince aklınıza ne geliyor? Bu sorunun cevabı, herkes için değişiyor. Kimileri için <b>tatil</b> deniz-kum-güneş üçlüsünden ibaretken, kimileri yeni yerler görmek ve yeni kültürleri tanımak istiyor. Kimi zaman da, adrenalin dolu etkinlikler en ideal tatil yerine geçiyor. Tatilin tanımı ve kapsamı kişiden kişiye değişse de, hep aynı kalan bir şey var: tatil, herkesin ihtiyacı. İster iş hayatının stresini geride bırakmaya çalışın, isterseniz de bir dünya gezgini olun, her yıl belli bir dönemi tatil yapmaya ayırmanız gerekiyor. Setur, bu doğrultuda hazırladığı seçeneklerle sizlere <b>tatil paketleri</b> değil, “tatil deneyimleri” sunuyor. Bizim için tatilin tanımı belli: kapsamı ne olursa olsun, her müşterimizin geriye mutlu dönmesi gerekiyor. Bu nedenle Setur, sizi tatile göndermekle yetinmeyip, hiç unutmayacağınız hatıraların sahibi olmanız için çalışıyor.</p>
              <h2>Bugün Nereye Gitmek İstersiniz?</h2>
              <p>Her insanın hayalinde, ideal bir tatil rotası muhakkak bulunuyor. Bodrum’un turunç kokulu sokaklarından,         Bangkok’un hiç durmayan gece hayatına kadar çok sayıda tatil rotası keşfedilmeyi bekliyor. Setur,         size ziyaret edilebilecek yerlerin ve ülkelerin listesini sunmakla yetinmiyor; siz nereye gitmek istiyorsanız,         orası için bir seçenek muhakkak sunuyor. Siz hayal etmeye devam edin yeter, onları gerçeğe dönüştürmek bize düşüyor! <b>Yurt içi tatil</b> seçeneklerimizden yurt dışı turlarına kadar sayısız destinasyon, portföyümüzde yer alıyor. Bilinen, popüler tatil beldelerinden adı bile duyulmamış, bakir topraklara kadar bu yaşlı dünyanın her yeri, ilgi alanımıza giriyor.</p>
              <p>Setur, hedefiniz neresi olursa olsun orayı tam anlamıyla keşfetmenizi sağlıyor.         Her turistin ziyaret ettiği yerler kadar, keşfedilmemiş ve sadece sakinleri tarafından         bilinen destinasyonları da tur programlarına dahil ediyor. Bir şehri nasıl keşfedersiniz?         Peki ya bir ülkeyi? Özellikle de, zamanınız kısıtlıysa? Setur, profesyonel rehberlik hizmetleri,         ek turlar ve daima yanınızda olan müşteri temsilcileriyle, ziyaret ettiğiniz her yerden         tatmin olmuş bir şekilde ayrılmanızı sağlıyor. Böylelikle, nereye giderseniz gidin         görülmedik bir yer kalmamış oluyor. Tatil hedefinizi keşfetmek ve her yönüyle tanımak – Setur,         müşterileri için öncelikle bunu hedefliyor.</p>
              <p>Bu doğrultuda, <b>Avrupa turları, Amerika turları, Uzakdoğu turları</b> gibi geniş kapsamlı ve çok sayıda ülkeyi içine alan turlar kadar, belli bir ülkeye veya şehre özgü turlarımız da bulunuyor. <b>Fransa Turu, İngiltere turu, İtalya turu</b> gibi ülkeye ve <b>           Barcelona turu, Prag turu,Roma turu </b> gibi şehre özel seçeneklerimiz, tatilinizin kapsamını ve süresini önceden belirleyebilmenizi sağlıyor. Uzmanlığımız sadece <b><a href="/" className="content-inline-link">yurt dışı turları</a></b> değil, Türkiye’nin her noktası da <b><a href="/" className="content-inline-link">yurtiçi turlar</a></b> kapsamında ilgi alanımıza giriyor. Her yıl, <b>Türkiye’nin en iyi otelleri</b> tarafımızca titizlikle belirleniyor ve tüm müşterilerimize değişik seçeneklerle sunuluyor.</p>
              <h2>Her Bütçeye Uygun Tatil Olanağı</h2>
              <p>Setur, yarım asrı aşkın deneyimi ile sizlere kaliteli olduğu kadar, hesaplı bir hizmet de sunuyor.         Fiyatlarımız her bütçeye uygun, zira sunduğumuz hizmetin kapsamına birden fazla seçenek giriyor. <b>Herşey dahil otel</b> seçeneklerimiz kadar, <b>beş yıldızlı otel, pansiyon</b> ve <b>butik otel</b> seçeneklerimiz de bulunuyor. Arzu ettiğiniz tatilin türüne ve bütçenize göre, tüm bu seçenekler arasında seçim yapmanız kolaylaşıyor. <b><a href="/" className="content-inline-link">Erken rezervasyon</a></b> yaptırmanız halinde ise, elde edeceğiniz avantajlar daha da artıyor. Hatta bu sayede, normal şartlarda bütçenizin üzerinde kalan yerlere dahi gidebilmeniz mümkün oluyor. <a href="/">Tatil yapmak</a> için Setur’u tercih ettiğiniz zaman, bütçeniz dert etmeniz gereken son şey – uygun fiyatlarımız ve geniş kapsamlı ödeme seçeneklerimiz, sadece tatilin keyfine odaklanmanızı sağlıyor. Dedik ya, siz gitmek istediğiniz yeri belirleyin yeter – gerisini, uzman ve profesyonel çalışanlarımız hallediyor.</p>
              <div className="degrade"></div>
            </article>
            <div className='text-center'>
              <span className='cursor-pointer' onClick={() => this.showHide()}>{this.state.extended ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}</span>
            </div>
          </section>
          <hr />
          <section className='py-16'>
            <Row>
              <Col span={3}><a href='/'><img src={i1} alt='img alt text' className='img-responsive' /></a></Col>
              <Col span={3}><a href='/'><img src={i2} alt='img alt text' className='img-responsive' /></a></Col>
              <Col span={3}><a href='/'><img src={i3} alt='img alt text' className='img-responsive' /></a></Col>
              <Col span={3}><a href='/'><img src={i4} alt='img alt text' className='img-responsive' /></a></Col>
              <Col span={3}><a href='/'><img src={i5} alt='img alt text' className='img-responsive' /></a></Col>
              <Col span={3}><a href='/'><img src={i6} alt='img alt text' className='img-responsive' /></a></Col>
              <Col span={3}><a href='/'><img src={i7} alt='img alt text' className='img-responsive' /></a></Col>
              <Col span={3}><a href='/'><img src={i8} alt='img alt text' className='img-responsive' /></a></Col>
            </Row>
          </section>
        </div>
      </>
    );
  }
}
export default Content;