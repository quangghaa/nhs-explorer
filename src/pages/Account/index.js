import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AccountTable from "../../components/AccountTable";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const queryClient = new QueryClient();

const Account = () => {
    return (
        
            <QueryClientProvider client={queryClient}>
                <Header />
                <div className="body">
                    <div className="title">Accounts</div>
                    <hr />
                    <div className="subtitle">Other Infomation</div>
                    <AccountTable />
                </div>

                <Footer />
            </QueryClientProvider>
        
    )
}

export default Account;