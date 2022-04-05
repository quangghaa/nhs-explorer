import React from "react";

import { DownOutlined } from '@ant-design/icons';
import './style.css';
import { Menu, Dropdown } from 'antd';
import { Link } from "react-router-dom";

const menu = (
    <Menu>
        <Menu.Item>
            <Link to='/accounts'>
                Accounts
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/blocks'>
                Blocks
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/transactions'>
                Transactions
            </Link>
        </Menu.Item>
    </Menu>
);

const Navigation = () => {
    return (
        <>
            <ul className="nav">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <li>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Digital Bank &nbsp;<DownOutlined />
                        </a>
                    </Dropdown>
                </li>

            </ul>
        </>
    )
}

export default Navigation;