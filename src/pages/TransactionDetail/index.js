import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Detail from "./Detail";
import { useLocation } from "react-router";
import { useContentTypeGetOne } from "../../hooks/useContentType";

const TransactionDetail = (props) => {
    const location = useLocation();
    const params = location.pathname.split('/');
    let id = 0;
    if (params.length > 0) {
        id = params[params.length-1]
    }
    const {contentTypeObj : transaction} = useContentTypeGetOne('transaction', id);
    return (
        <>
            <Header />
            <div className="body">
                <div className="title">Transaction Details</div>
                <hr />
                <div className="subtitle">Other Infomation</div>
                
                {transaction.length > 0 ? 
                <Detail transaction={transaction[0]} />
                :
                <h1>NO RECORD FOUND</h1> }
            </div>
            <Footer />
        </>
    )
}

export default TransactionDetail;