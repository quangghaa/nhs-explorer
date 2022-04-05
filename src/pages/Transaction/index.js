import React from "react";
import TransactionTable from "../../components/TransactionTable";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const queryClient = new QueryClient();

const Transaction = () => {
    return (
        <QueryClientProvider client={queryClient}>
                <Header />
                <div className="body">
                    <div className="title">Transactions</div>
                    <hr />
                    <div className="subtitle">Other Infomation</div>
                    <TransactionTable />
                </div>

                <Footer />
        </QueryClientProvider>
    )
}

export default Transaction;