import React, { Component } from 'react';
import slider from '../Assets/Images/slider.jpg';
import { Tabs, DatePicker, Space, Input, Select, Button } from 'antd';
import locale from 'antd/es/date-picker/locale/tr_TR';
import { FiMapPin, FiUser } from "react-icons/fi";
import { SearchOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
const { RangePicker } = DatePicker;
const { Option } = Select;

class RightMenu extends Component {
    render() {
        return (
            <div className="home-featured">
                <a href='/'>
                    <figure>
                        <img className='img-responsive' src={slider} alt="Alt Description" />
                    </figure>
                </a>
                <div className='search-tabs'>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Otel" key="1">
                            <Space direction="horizontal" size={12}>
                                <Input placeholder="Otel veya Konum yazın" prefix={<FiMapPin />} />
                                <RangePicker locale={locale} />
                                <Select placeholder='Oda Sayısı' className="full-width">
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                    <Option value="6">6</Option>
                                </Select>
                                <Input placeholder="Kişi Sayısı" prefix={<FiUser />} />
                                <Button type="primary" icon={<SearchOutlined />} className="full-width">Ara</Button>
                            </Space>
                        </TabPane>
                        <TabPane tab="Tur" key="2">
                            <Space direction="horizontal" size={12}>
                                <Input placeholder="Ülke, Şehir, Bölge, Tema veya Tur adı girin" prefix={<FiMapPin />} className="long-input" />
                                <Button type="primary" icon={<SearchOutlined />} className="full-width">Ara</Button>
                            </Space>
                        </TabPane>
                        <TabPane tab="Gemi" key="3">
                            <Space direction="horizontal" size={12}>
                                <Input placeholder="Ülke, Şehir, Bölge, Liman, Tema veya Tur adı girin" prefix={<FiMapPin />} className="long-input" />
                                <Button type="primary" icon={<SearchOutlined />} className="full-width">Ara</Button>
                            </Space>
                        </TabPane>
                        <TabPane tab="Uçak" key="4" className="last">
                            <Space direction="horizontal" size={12}>
                                <Input placeholder="Otel veya Konum yazın" prefix={<FiMapPin />} />
                                <RangePicker locale={locale} />
                                <Select placeholder='Oda Sayısı' className="full-width">
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                    <Option value="6">6</Option>
                                </Select>
                                <Input placeholder="Kişi Sayısı" prefix={<FiUser />} />
                                <Button type="primary" icon={<SearchOutlined />} className="full-width">Ara</Button>
                            </Space>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default RightMenu;