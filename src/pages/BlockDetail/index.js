import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Detail from "./Detail";
import { useLocation } from "react-router";
import { useContentTypeGetOne, useContentTypeGetWithBody, useContentTypeList } from "../../hooks/useContentType";

const BlockDetail = (props) => {
    const location = useLocation();
    const params = location.pathname.split('/');
    let id = 0;
    if (params.length > 0) {
        id = params[params.length-1]
    }
    const {contentTypeObj : block} = useContentTypeGetOne('block', id);
    return (
        <>
            <Header />
            <div className="body">
                <div className="title">Block Details</div>
                <hr />
                <div className="subtitle">Other Infomation</div>
                
                {block ? 
                <Detail block={block} />
                :
                <h1>NO RECORD FOUND</h1> }
            </div>
            <Footer />
        </>
    )
}

export default BlockDetail;