import {JSX} from "@babel/types";
import { Badge } from "@chakra-ui/react";
import React from "react";

export type Column = {
    heading:string,
    key:string,
    renderer?:(item:any)=>JSX.Element
}
export const salesColumns:Column[] = [
    {heading:'Warehouse',key:'wareHouseName'},
    {heading:'Customer',key:'customerName'},
    {heading:'Bill amount',key:'billAmount'},
    {heading:'Discount amount',key:'discountAmount'},
    {heading:'Net total',key:'netTotal'},
    {heading:'Remarks',key:'remarks'},
    {heading:'Status',key:'status',renderer:(item)=>renderBadgeWithStatus(item)}
]

function renderBadgeWithStatus(status:string){
    var colorScheme = status === 'Active'?'green':'red';
    return React.createElement(Badge,{colorScheme:colorScheme},status)
}