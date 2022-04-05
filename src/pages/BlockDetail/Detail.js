import React from "react";
import { QuestionCircleOutlined, CopyOutlined } from '@ant-design/icons';
import { formatTime, vndConverter } from "../../utils/Utils";


const Detail = (props) => {
    const block = props.block;
    return (
        <>
            {block ? (

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
                                    <span><QuestionCircleOutlined /> Block:</span>
                                </div>
                                <div className="item-content">
                                    <span>{block.id} <CopyOutlined /></span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Block Number:</span>
                                </div>
                                <div className="item-content">
                                    <span>{block.blocknum} <CopyOutlined /></span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Data Hash:</span>
                                </div>
                                <div className="item-content">
                                    <span>{block.datahash} <CopyOutlined /></span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Data Prehash:</span>
                                </div>
                                <div className="item-content">
                                    <span>{block.prehash} <CopyOutlined /></span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Genesis Hash:</span>
                                </div>
                                <div className="item-content">
                                    <span>{block.channel_genesis_hash} <CopyOutlined /></span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Transaction Count:</span>
                                </div>
                                <div className="item-content">
                                    <span>{block.txcount}</span><span className="vnd-unit">Txns</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Created At:</span>
                                </div>
                                <div className="item-content">
                                    <span>{formatTime(block.createdt)}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Block Size:</span>
                                </div>
                                <div className="item-content">
                                    <span>{block.blksize}</span> <span className="vnd-unit">KB</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Network Name:</span>
                                </div>
                                <div className="item-content">
                                    <span>{block.network_name}</span>
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