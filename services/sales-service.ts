import {SalesViewModel} from "@/types/viewmodels/sales-view-model";
import AxiosService from "./axios-service";

import config from '../appconfig.json';

export async function getAllSales():Promise<SalesViewModel[]>{
    const axiosService = new AxiosService()
    axiosService.setUrl(config.routes.sales.all)
    return await axiosService.get<SalesViewModel[]>();
}