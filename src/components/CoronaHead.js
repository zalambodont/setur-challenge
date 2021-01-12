import { Typography, Alert } from 'antd';
import {
    CloseCircleOutlined,
  } from '@ant-design/icons';

const CoronaHead = () => {
    const { Link } = Typography;
    const message = <div>Yeni Koronavirüs (Covid-19) Küresel salgını hakkında bilgilendirme için <Link type='secondary'  href='#'> tıklayınız </Link></div>
    const closeText = <CloseCircleOutlined/>
	return (
        <Alert message={message} className="corona-head text-center" type={'error'} closable closeText={closeText} ></Alert>
	)
}

export default CoronaHead