import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BlockTable from '../../components/BlockTable/index';

const queryClient = new QueryClient();

const Block = () => {
    return (
        <QueryClientProvider client={queryClient}>
                <Header />
                <div className="body">
                    <div className="title">Blocks</div>
                    <hr />
                    <div className="subtitle">Other Infomation</div>
                    <BlockTable />
                </div>

                <Footer />
        </QueryClientProvider>
    )
}

export default Block;