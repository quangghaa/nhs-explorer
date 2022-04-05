import React from "react";
import { Cascader } from 'antd';
import { Input } from 'antd';
import './style.css';


const options = [
  {
    value: 'Account',
    label: 'Account'
  },
  {
    value: 'Block',
    label: 'Block'
  },
  {
    value: 'Txn Hash',
    label: 'Txn Hash'
  },
];

function onChange(value) {
  console.log(value);
}
const { Search } = Input;
const onSearch = value => console.log(value);

const SearchTool = () => {
    return (
        <>
            <div className="search">
              <Cascader className="select-custom" options={options} onChange={onChange} placeholder="All Filter" />
              <Search placeholder="Search by Account / Block / Txn Hash" onSearch={onSearch} enterButton />
            </div>
        </>
    )

}

export default SearchTool;