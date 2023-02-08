import AxiosService from "@/services/axios-service";
import config from "@/appconfig.json";
import {SalesViewModel} from "@/types/viewmodels/sales-view-model";

export async function pagePurchase() {
    const axiosService = new AxiosService()
    axiosService.setUrl(config.routes.sales.all)
    return await axiosService.get<SalesViewModel[]>();
}