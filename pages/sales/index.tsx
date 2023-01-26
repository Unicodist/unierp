import React from 'react';
import PagingTable from "@/components/paging-table";
import {salesColumns} from "@/types/columns";
import {SalesViewModel} from "@/types/viewmodels/sales-view-model";
const Index = () => {
    const row1:SalesViewModel = {id:1,wareHouseName:'Baneshwor Warehouse',customerName:'Sushan Sen',billAmount:56.98,discountAmount:10.98,netTotal:46.00,remarks:'Nothing',salesDetails:[]};
    return (
        <PagingTable caption='Sales' columns={salesColumns} data={[row1]}/>
    );
};

export default Index;