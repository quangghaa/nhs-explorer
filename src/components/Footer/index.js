import { Col, Row } from "antd";
import React from "react";
import { CopyrightOutlined, HeartFilled, TwitterCircleFilled, FacebookFilled, RedditCircleFilled, MediumCircleFilled } from '@ant-design/icons';
import '../../static/css/footer.css';

const Footer = () => {
    return (
        <>
            <div className="bg-img">
                <div className="container">
                    {/* <Row className="footer">
                        <Col span={5}>
                            <div className="section-a">
                                <h3>VnPay Digital Bank</h3>
                                <span>See more infomation here.</span><br/>
                                <span>Preferences</span>
                            </div>
                        </Col>
                        <Col span={19}>
                            <Row>
                                <Col span={8}>
                                    <h4>Company</h4>
                                    <hr className="hr"/>
                                    <ul className="company-section">
                                        <li>About us</li>
                                        <li>Contact us</li>
                                        <li>Brand Assets</li>
                                        <li>Careers</li>
                                        <li>Term of Service</li>
                                    </ul>
                                </Col>
                                <Col span={8}>
                                    <h4>Resources</h4>
                                    <hr className="hr"/>
                                    <ul className="resources-section">
                                        <li>API Documentation</li>
                                        <li>Knowledge Base</li>
                                        <li>Newsletter</li>
                                        <li>Network Status</li>
                                        <li>Disqus Comments</li>
                                    </ul>
                                </Col>
                                <Col span={8}>
                                    <h4>Products & Services</h4>
                                    <hr className="hr"/>
                                    <ul className="resources-section">
                                        <li>Advertise</li>
                                        <li>Explorer-as-a-Service (EaaS)</li>
                                        <li>Developer APIs</li>
                                        <li>Blockscan</li>
                                        <li>BeaconScan</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row> */}

                    {/* <hr className="outside-hr"/> */}

                    <div className="subfooter">
                        <span>
                            VnPay <CopyrightOutlined /> 2022 | Donate <HeartFilled />
                        </span>

                        <span className="icons">
                            <span><TwitterCircleFilled /></span>
                            <span><FacebookFilled /></span>
                            <span><RedditCircleFilled /></span>
                            <span><MediumCircleFilled /></span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;