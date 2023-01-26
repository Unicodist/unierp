class AxiosService{
    private url: string;
    constructor(url:string) {
        this.url = url;
    }
    get(callback:()=>void){
        callback();
    }
}
export default AxiosService;