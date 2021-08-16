/**
 * @prettier
 */
import React from 'react';
import { Menu, Dropdown, message, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const CountrySelector = () => {
	const handleButtonClick = (e) => {
		message.info('Click on left mouse button');
		console.log('click left button', e);
	};

	const handleMenuClick = (e) => {
		message.info('Click on menu item');
		console.log('click', e);
	};

	const menu = (
		<Menu onClick={handleMenuClick}>
			<Menu.Item key="1" icon={<UserOutlined />}>
				1st Item
			</Menu.Item>
			<Menu.Item key="2" icon={<UserOutlined />}>
				2nd Item
			</Menu.Item>
			<Menu.Item key="3" icon={<UserOutlined />}>
				3rd Item
			</Menu.Item>
		</Menu>
	);

	return (
		<Space wrap>
			<Dropdown.Button
				onClick={handleButtonClick}
				overlay={menu}
				dropdownStyle={{
					width: '100px',
					border: '1px dotted blue',
				}}
			>
				Country
			</Dropdown.Button>
		</Space>
	);
};
