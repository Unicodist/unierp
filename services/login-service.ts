import AxiosService from "@/services/axios-service";
import {LoginViewModel} from "@/types/viewmodels/login-view-model";

class LoginService{
    config = require('../appconfig.json');
    axiosService = new AxiosService()
    login(loginProps:LoginViewModel){
        this.axiosService.addRoute(this.config.routes.loginRoute)
        this.axiosService.post(loginProps,(response)=>{
            console.log(response)
        })
    }
}
export default LoginService;