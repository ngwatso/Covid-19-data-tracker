
import './App.css';
import { generate, presetDarkPallettes } from '@ant-design/colors';
import { Layout, Avatar, Row, Col, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';

const { Header, Footer, Sider, Content } = Layout;

function App() {
	const colors = generate('#101010', {
		theme: 'dark',
		backgroundColor: '141414',
	});
	console.log(colors);

	return (
		<div className="App">
			<Layout>
				
				<Header style={{ minHeight: '10vh', background: '#101010', /*border: '1px solid yellow' */}}>
				<Row style={{height: '100%'}} align='middle'>
					<Col span={2}>
					<Avatar	size={85}	src="./images/covid.ico" style={{ /*border: '1px solid yellow', */ float: 'left'	}}/>
					</Col>
					<Col span={22}>					
					<Title style={{	/*border: '1px solid red', */ color: '#FFFAF0' }}	level={1}	>
						Covid-19 Data	Tracker
					</Title>
					</Col>
				</Row>
				</Header>
				
				<Layout style={{minHeight: '75vh'}}>
					<Sider style={{	background: '#65b7f3'	}}>
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
				<Footer	style={{ color: '#FFFAF0', background: '#414141' }}>
					Footer
				</Footer>
			</Layout>
		</div>
	);
}

export default App;
