import {JSX} from "@babel/types";

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
    {heading:'Remarks',key:'remarks'}
]