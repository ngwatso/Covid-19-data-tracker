/**
 * @prettier
 */
import './App.css';
import { generate, presetDarkPallettes } from '@ant-design/colors';
import { Layout, Avatar } from 'antd';
import Title from 'antd/lib/typography/Title';

const { Header, Footer, Sider, Content } = Layout;

function App() {
	const colors = generate('#1890ff', {
		theme: 'dark',
		backgroundColor: '141414',
	});
	console.log(colors);

	return (
		<div className="App">
			<Layout>
				<Header
					style={{
						padding: 5,
						background: '#b7e3fa',
					}}
				>
					<Avatar
						size={50}
						src="./images/covid.ico"
						style={{
							float: 'left',
						}}
					/>
					<Title level={1}>
						Covid-19 Data
						Tracker
					</Title>
				</Header>
				<Layout>
					<Sider
						style={{
							background: '#65b7f3',
						}}
					>
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
				<Footer>Footer</Footer>
			</Layout>
		</div>
	);
}

export default App;
