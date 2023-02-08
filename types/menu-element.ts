import {IconType} from "react-icons";
import {AiFillHome, AiFillTags} from "react-icons/ai";
import {FaCashRegister} from "react-icons/fa";

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
    },
    {
        icon:FaCashRegister,
        title:'Sales',
        url:'/sales'
    }
]