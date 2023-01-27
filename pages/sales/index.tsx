import React from 'react';
import PagingTable from "@/components/paging-table";
import {salesColumns} from "@/types/columns";
import {SalesViewModel} from "@/types/viewmodels/sales-view-model";
const Index = () => {
    const row1:SalesViewModel = {id:1,wareHouseName:'Baneshwor Warehouse',customerName:'Sushan Sen',billAmount:56.98,discountAmount:10.98,netTotal:46.00,remarks:'Nothing',status:'Active',salesDetails:[]};
    const row2:SalesViewModel = {id:1,wareHouseName:'Bhaktapur Warehouse',customerName:'Amris puri',billAmount:36.254,discountAmount:26.35,netTotal:48.4,remarks:'Inactive huda red hunchha?',status:'Inactive',salesDetails:[]};
    return (
        <PagingTable caption='Sales' columns={salesColumns} data={[row1,row2]}/>
    );
};

export default Index;