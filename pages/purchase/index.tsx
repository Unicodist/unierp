import PagingTable from "@/components/pagination/paging-table";
import {useEffect, useState} from "react";
import {PurchaseViewModel} from "@/types/viewmodels/purchase-view-model";

const Index = ()=>{
    const [purchases,setPurchase] = useState<PurchaseViewModel[]>([]);
    return (
        <PagingTable data={purchases} caption={'Purchases'} columns={[]}/>
    )
}

export default Index;