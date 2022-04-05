import React, { useEffect } from "react";
import HomeHeader from '../../components/HomeHeader';
import Footer from '../../components/Footer';
import SearchTool from "../../components/SearchTool";
import { Row, Col, Button } from 'antd';
import { DollarCircleFilled, UserOutlined, BlockOutlined, TransactionOutlined } from '@ant-design/icons';

import { useContentTypeGetTotal, useContentTypeList } from "../../hooks/useContentType";
import { useNavigate } from 'react-router-dom';
import { vndConverter } from "../../utils/Utils";

const trimData = (data = []) =>
    data.map(({ id, account_id, initial_time, balance, blockade_amount }) => ({
        id,
        account_id,
        initial_time,
        balance,
        blockade_amount,
    }));

const Home = () => {
    const {
        contentTypeTotal: totalTrans
    } = useContentTypeGetTotal('transactions/total');

    const {
        contentTypeTotal: totalAccounts
    } = useContentTypeGetTotal('account/total');

    const {
        contentTypeTotal: totalBlocks
    } = useContentTypeGetTotal('blocks/total');

    const {
        contentTypeList: latestBlocks
    } = useContentTypeList('blocks/recent');

    const {
        contentTypeList: latestTrans
    } = useContentTypeList('transactions/recent');

    console.log(latestTrans);
    const navigate = useNavigate();

    const onAllBlock = () => {
        navigate('/blocks');
    }

    const onAllTransaction = () => {
        navigate('/transactions');
    }

    return (
        <>
            <HomeHeader />

            <div className="search-section">
                <div className="container">
                    <h3>The Digital Bank Blockchain Explorer</h3>
                    <SearchTool />
                    <br />
                    <span className="sponsored">Sponsored: <DollarCircleFilled /> Vnpay: Crypto Taxes Done in Minutes! <a href="#">Calculate My Taxes.</a></span>
                </div>
            </div>

            <div className="container">
                <div className="overview">
                    <Row>
                        <Col span={8}>
                            <div className="vertical-hr">
                                <div className="block">
                                    <span className="block-icon">
                                        <UserOutlined />
                                    </span>
                                    <span className="block-info">
                                        <span className="info-title">Account</span><br />
                                        <span className="info-content">{totalAccounts} <span className="info-unit">users</span></span>
                                    </span>
                                </div>
                                <hr />
                                <div className="block">
                                    <span className="block-icon">
                                        <BlockOutlined />
                                    </span>
                                    <span className="block-info">
                                        <span className="info-title">Block</span><br />
                                        <span className="info-content">{totalBlocks} <span className="info-unit">blocks</span></span>
                                    </span>
                                </div>
                            </div>

                        </Col>
                        <Col span={8}>
                            <div className="vertical-hr">
                                <div className="block">
                                    <span className="block-icon">
                                        <TransactionOutlined />
                                    </span>
                                    <span className="block-info">
                                        <span className="info-title">Transaction</span><br />
                                        <span className="info-content">{totalTrans} <span className="info-unit">transactions</span></span>
                                    </span>
                                </div>
                                <hr />
                                {/* <div className="block">
                                    <span className="block-icon">
                                        <BlockOutlined />
                                    </span>
                                    <span className="block-info">
                                        <span className="info-title">Block</span><br />
                                        <span className="info-content">5 <span className="info-unit">blocks</span></span>
                                    </span>
                                </div> */}
                            </div>

                        </Col>
                    </Row>
                </div>

                <Row gutter={16} className="latest-section">
                    <Col span={12}>
                        <div className="latest-block">
                            <div className="lb-title">Latest Blocks</div>
                            <ul className="block-list">
                                {latestBlocks != undefined ?
                                    latestBlocks.map((block, i) => {
                                        return (
                                            <li >
                                                <Row>
                                                    <Col span={6}>
                                                        <div className="block-id">
                                                            <span className="box-id">Bk</span>
                                                            <span>
                                                                <span className="id">{block.blocknum}</span><br />
                                                                <span className="time">{block.duration}</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className="block-owner">
                                                            <span>Hash <span className="owner">{block.datahash}</span></span><br />
                                                            <span className="time"><span className="txns">{block.txcount} txns</span></span>
                                                        </div>
                                                    </Col>
                                                    <Col span={6} className="center">
                                                        <div className="price">{block.network_name}</div>
                                                    </Col>
                                                </Row>
                                            </li>
                                        )
                                    })
                                    : <div className="no-data-section">
                                        No Data Found
                                    </div>}
                            </ul>
                            <div className="view-all">
                                <Button className="va-btn" onClick={onAllBlock}>
                                    View all blocks
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="latest-block">
                            <div className="lb-title">Latest Transactions</div>
                            <ul className="block-list">
                                {latestTrans != undefined ?
                                    latestTrans.map((tran, i) => {
                                        return (
                                            <li >
                                                <Row>
                                                    <Col span={6}>
                                                        <div className="block-id">
                                                            <span className="box-id-tx">Tx</span>
                                                            <span>
                                                                <span className="id">{tran.transaction_id}</span><br />
                                                                <span className="time">1 min ago</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className="block-owner">
                                                            <span>Owner ID <span className="owner">{tran.account_id}</span></span><br />
                                                            {/* <span className="time"><span className="txns">146 txns</span> in 1 sec</span> */}
                                                            {tran.amount > 0 ? 
                                                            <span className="credit">Credit</span>
                                                            :
                                                            <span className="debit">Debit</span>
                                                            }
                                                            
                                                        </div>
                                                    </Col>
                                                    <Col span={6} className="center">
                                                        <div className="price">{vndConverter(tran.amount)} Vnd</div>
                                                    </Col>
                                                </Row>
                                            </li>
                                        )
                                    })
                                    : <div className="no-data-section">
                                        No Data Found
                                    </div>}
                            </ul>
                            <div className="view-all">
                                <Button className="va-btn" onClick={onAllTransaction}>
                                    View all transactions
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>

            <Footer />
        </>
    )
}

export default Home;