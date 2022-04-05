import React, { useEffect, useState } from "react";
import { Form, Input, Button } from 'antd';
import TransactionTable from "../../components/TransactionTable";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useContentTypeList } from "../../hooks/useContentType";

const queryClient = new QueryClient();

const Demo = () => {
    const [query, setQuery] = useState({
        page: 0,
        limit: 1,
    });
    const { contentTypeList } = useContentTypeList('accounts', query)
    const onFinish=(value) => {
        setQuery({
            ...query, limit: value['limit']
        })
    }

    return (
        <QueryClientProvider client={queryClient}>
                <Header />
                <Form name="test" onFinish={onFinish}>
                    <Form.Item
                        label="Limit"
                        name="limit"
                    >
                        <Input />
                    </Form.Item>
                    <Button htmlType="submit">Search</Button>
                </Form>
                <div className="body">
                    {contentTypeList.length > 0 && (
                        contentTypeList.map((k, v) => {
                            return <h1>{k.id}</h1>
                        })
                    )}
                </div>

                <Footer />
        </QueryClientProvider>
    )
}

export default Demo;