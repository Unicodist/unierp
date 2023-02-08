import {IconType} from "react-icons";
import {BiPurchaseTagAlt} from "react-icons/bi";
import {AiFillHome, AiFillTags} from "react-icons/ai";

export type MenuElement = {
    icon:IconType
    title:string
    url:string
}


export const routeMenu: MenuElement[] = [
    {
        icon : AiFillHome,
        title:'Home',
        url : '/'
    },
    {
        icon:AiFillTags,
        title:'Purchase',
        url:'/purchase'
    }
]