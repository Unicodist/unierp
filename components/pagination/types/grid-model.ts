export type GridQueryModel = {
    "pageSize": number,
    "pageNumber": number,
    "sortBy": string,
    "sortAsc": true,
    "filter": filter[]
}
type filter = {
    key:string
    value:string
}