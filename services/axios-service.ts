import * as console from "console";
import {AxiosResponse} from "axios";

class AxiosService{
    axios = require('axios');
    config = require('../appconfig.json');
    private _url: string;
    constructor() {
        this._url = this.config.baseUrl+this.config.rootSuffix
    }
    setUrl(url:string){
        this._url = url;
}
    get(callback:()=>void){
        this.axios.get(this._url).then(callback).catch((err:any)=>{console.log(err)})
    }
    post(props:any,callback:(response:AxiosResponse)=>void){
        this.axios.post(this._url).then(callback).catch((err:any)=>{console.log(err)})
    }
    put(callback:()=>void){
        this.axios.put(this._url).then(callback).catch((err:any)=>{console.log(err)})
    }
    patch(callback:()=>void){
        this.axios.patch(this._url).then(callback).catch((err:any)=>{console.log(err)})
    }

    addRoute(route: string) {
        this._url = `${this._url}${route}`
    }
}
export default AxiosService;