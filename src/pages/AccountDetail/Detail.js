import React from "react";
import { QuestionCircleOutlined, CopyOutlined } from '@ant-design/icons';
import { formatTime, vndConverter } from "../../utils/Utils";


const Detail = (props) => {
    const account = props.account;
    return (
        <>
            {account ? (

                <div className="detail-section">
                    <div className="detail-header">
                        <ul className="dh-list">
                            <li>Overview</li>
                        </ul>
                    </div>

                    <div className="detail-body">
                        <ul className="detail-list">
                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Account:</span>
                                </div>
                                <div className="item-content">
                                    <span>{account.account_id} <CopyOutlined /></span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Recent Time:</span>
                                </div>
                                <div className="item-content">
                                    <span>{formatTime(account.recent_time)}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Balance:</span>
                                </div>
                                <div className="item-content">
                                    <span>{vndConverter(account.balance)}</span> <span className="vnd-unit">VND</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Blockade Amount: </span>
                                </div>
                                <div className="item-content">
                                    <span>{vndConverter(account.balance)}</span> <span className="vnd-unit">VND</span>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            ) : <>Can not display</>}

        </>
    )
}

export default Detail;