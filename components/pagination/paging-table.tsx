import React, {Component} from 'react';
import {Table, TableCaption, TableContainer, Tbody, Td, Thead, Tr, VStack} from "@chakra-ui/react";
import PagingTableToolbar from "@/components/pagination/paging-table-toolbar";
import {Column} from "@/types/columns";

type PagingTableProps = {
    data:any[]
    caption:string
    columns:Column[]
}
function PagingTable(props:PagingTableProps) {
    return (
        <VStack>
            <TableContainer width={'100%'}>
                <PagingTableToolbar/>
                <Table variant='simple'>
                    <TableCaption>{props.caption}</TableCaption>
                    <Thead>
                        <Tr>
                            {props.columns.map((item)=>{
                                return (
                                    <Td key={item.heading}>{item.heading}</Td>
                                )
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {props.data.map((row,i)=>{
                            return (
                                <Tr key={i}>
                                    {props.columns.map((column,i)=>{
                                        return (
                                            <Td key={i}>{column.renderer==null?row[column.key]:column.renderer(row[column.key])}</Td>
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

export default PagingTable;