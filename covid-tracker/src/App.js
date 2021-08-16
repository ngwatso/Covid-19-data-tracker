
import './App.css';
import { generate, presetDarkPallettes } from '@ant-design/colors';
import { Layout, Avatar, Row, Col, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import { StartDate } from './components/startDate'
import { EndDate } from './components/endDate'
import { CountrySelector } from './components/countrySelector'

const { Header, Footer, Sider, Content } = Layout;

function App() {

	return (
		<div className="App">
			<Layout>
				
				<Header style={{ height: '10vh', background: '#101010'}}>
				<Row style={{height: '100%'}} align='middle'>
					<Col span={3}>
					<Avatar	size={85}	src="./images/covid.ico" style={{ float: 'left'	}}/>
					</Col>
					<Col span={18}>					
					<Title style={{	color: '#FFFAF0' }}	level={1}	>
						Covid-19 Data	Tracker
					</Title>
					</Col>
				</Row>
				</Header>
				<Layout style={{height: '80vh'}}>
					<Sider  width={'200px'} style={{background: '#414141'	}}>
						{/* <Col span={24} style={{border: '1px solid yellow'}}> */}
						<CountrySelector/>

						{/* </Col> */}
					</Sider>
					<Layout>
						<Content style={{ background: '#999999'}}>
							<Row style={{ height: '5%'}} align='middle'>
								<Col span={8}></Col>
								<Col span={3}>
								<StartDate />
								</Col>
								{/* <Col span={2}></Col> */}
								<Col span={3}>
								<EndDate />
								</Col>
								<Col span={8}></Col>
							</Row>
						</Content>
					</Layout>
				</Layout>
			</Layout>
			<Layout>
				<Footer	style={{ height: '10vh', color: '#FFFAF0', background: '#101010' }}>
				</Footer>
			</Layout>
		</div>
	);
}

export default App;
