import React, { useState } from 'react';
import { LoginOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [current, setCurrent] = useState('login');

    const logout = () => {
        dispatch({ 
          type: 'LOGOUT',
          payload: null,
        });
        navigate('/');
    };

    const onClick = (e) => {
        if (e.key === 'logout') {
            logout();
        } else {
            setCurrent(e.key);
        }
    };

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
            to: '/register'
        },
        {
            label: 'Logout',
            key: 'logout'
        },
    ];

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
            {items.map(item => (
                <Menu.Item key={item.key} icon={item.icon}>
                    {item.key !== 'logout' ? (
                        <Link to={item.to}>{item.label}</Link>
                    ) : (
                        item.label
                    )}
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default Navbar;
