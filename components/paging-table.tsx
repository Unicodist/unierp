import React, {Component} from 'react';
import {Table, TableCaption, TableContainer, Tbody, Td, Thead, Tr, VStack} from "@chakra-ui/react";
import PagingTableToolbar from "@/components/paging-table-toolbar";
import {Column} from "@/types/columns";

type PagingTableProps = {
    data:any[]
    caption:string
    columns:Column[]
}
class PagingTable extends Component<PagingTableProps> {
    columns:Column[]
    data:any[]
    caption:string;
    constructor(props:PagingTableProps) {
        super(props);
        this.columns = props.columns
        this.data = props.data
        this.caption = props.caption
    }
    render() {
        return (
            <VStack>
                <PagingTableToolbar/>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>{this.caption}</TableCaption>
                        <Thead>
                            <Tr>
                                {this.columns.map((item)=>{
                                    return (
                                        <Td>{item.heading}</Td>
                                    )
                                })}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {this.data.map((row)=>{
                                return (
                                    <Tr>
                                        {this.columns.map((columnName)=>{
                                            return (
                                                <Td>{row[columnName.key]}</Td>
                                            )
                                        })}
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
        );
    }
}

export default PagingTable;