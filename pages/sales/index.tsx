import React, { useEffect, useState } from 'react';
import PagingTable from "@/components/pagination/paging-table";
import {salesColumns} from "@/types/columns";
import {SalesViewModel} from "@/types/viewmodels/sales-view-model";
import { getAllSales } from '@/services/sales-service';
const Index = ()=>{
    const [sales, setSales] = useState<SalesViewModel[]>([]);
    useEffect(() => {
        getAllSales().then(res => {setSales(res);});
    }, []);
    return (
        <PagingTable caption='Sales' columns={salesColumns} data={sales}/>
    );
};

export default Index;