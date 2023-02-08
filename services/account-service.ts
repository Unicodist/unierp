import { GridQueryModel } from "@/components/pagination/types/grid-model";
import AxiosService from "./axios-service";

class AccountService{
    config = require('../appconfig.json')
    axiosService = new AxiosService();

    getPage(model:GridQueryModel){
        
    }
}
export default AccountService;