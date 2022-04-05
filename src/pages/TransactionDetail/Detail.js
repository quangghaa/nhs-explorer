import React from "react";
import { QuestionCircleOutlined, CopyOutlined } from '@ant-design/icons';
import { formatTime, vndConverter } from "../../utils/Utils";


const Detail = (props) => {
    const transaction = props.transaction;
    return (
        <>
            {transaction ? (

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
                                    <span><QuestionCircleOutlined /> Transaction ID:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.transaction_id} <CopyOutlined /></span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Account ID:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.account_id}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Trace No:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.trace_no}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Process Time:</span>
                                </div>
                                <div className="item-content">
                                    <span>{formatTime(transaction.working_date)}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Amount: </span>
                                </div>
                                <div className="item-content">
                                    <span>{vndConverter(transaction.amount)}</span> <span className="vnd-unit">VND</span>
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