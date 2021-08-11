
import './App.css';
import { generate, presetDarkPallettes } from '@ant-design/colors';
import { Layout, Avatar, Row, Col, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';

const { Header, Footer, Sider, Content } = Layout;

function App() {

	return (
		<div className="App">
			<Layout>
				
				<Header style={{ height: '10vh', background: '#101010'}}>
				<Row style={{height: '100%'}} align='middle'>
					<Col span={1}></Col>
					<Col span={2}>
					<Avatar	size={85}	src="./images/covid.ico" style={{ float: 'left'	}}/>
					</Col>
					<Col span={21}>					
					<Title style={{	color: '#FFFAF0' }}	level={1}	>
						Covid-19 Data	Tracker
					</Title>
					</Col>
				</Row>
				</Header>
				<Layout style={{height: '80vh'}}>
					<Sider width={'25%'} style={{	background: '#65b7f3'	}}>
						Sider
					</Sider>
					<Layout>
						<Content>
							Content
						</Content>
					</Layout>
				</Layout>
			</Layout>
			<Layout>
				<Footer	style={{ height: '10vh', color: '#FFFAF0', background: '#414141' }}>
					Footer
				</Footer>
			</Layout>
		</div>
	);
}

export default App;
