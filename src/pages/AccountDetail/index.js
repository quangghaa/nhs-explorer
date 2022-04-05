import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Detail from "./Detail";
import { useLocation } from "react-router";
import { useContentTypeGetOne } from "../../hooks/useContentType";

const AccountDetail = (props) => {
    const location = useLocation();
    const params = location.pathname.split('/');
    let id = 0;
    if (params.length > 0) {
        id = params[params.length-1]
    }
    const {contentTypeObj : account} = useContentTypeGetOne('account', id);
    return (
        <>
            <Header />
            <div className="body">
                <div className="title">Account Details</div>
                <hr />
                <div className="subtitle">Other Infomation</div>
                {/* {console.log("ACCOUNT: "} */}
                {Object.keys(account).length > 0 ? 
                <Detail account={account} />
                :
                <h1>NO RECORD FOUND</h1> }
            </div>
            <Footer />
        </>
    )
}

export default AccountDetail;