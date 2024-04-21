import React, { useState } from 'react';
import { LoginOutlined,  } from '@ant-design/icons';
import { Menu } from 'antd';

import { Link } from 'react-router-dom'
const items = [
    {
      label: 'Login',
      key: 'login',
      icon: <LoginOutlined />,
      to: '/login'
    },
    {
      label: 'Register',
      key: 'register',
    //   icon: <AppstoreOutlined />,
      to: '/register'
    },
  ];

const Navbar = () => {
    const [current, setCurrent] = useState('login');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };

    return    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
                {items.map(item => (
                <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.to}>{item.label}</Link>
                </Menu.Item>
                ))}
            </Menu>
};
export default Navbar;
