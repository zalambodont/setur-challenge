import './Ant.less';
import './App.scss';
import CoronaHead from "./components/CoronaHead";
import BreadCrumb from "./components/BreadCrumb";
import HeaderContent from "./views/Header";
import PageContent from "./views/Content";
import PreFooter from "./views/PreFooter";
import FooterContent from "./views/FooterContent";
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <CoronaHead />
      <Header>
        <HeaderContent />
      </Header>
      <BreadCrumb />
      <Content>
        <PageContent />
      </Content>
      <PreFooter />
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  );
}

export default App;
