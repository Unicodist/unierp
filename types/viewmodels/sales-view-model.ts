export type SalesViewModel = {
    id:number,
    wareHouseName:string,
    customerName:string,
    billAmount:number,
    discountAmount:number,
    netTotal:number,
    remarks: string | null,
    salesDetails:SalesDetailViewModel[]
}
export type SalesDetailViewModel = {
    itemId:number,
    itemName:string,
    unitName:string,
    rate:number,
    qty:number
    discount:number,
    taxAmount:number
}