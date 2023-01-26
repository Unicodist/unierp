export function getImage(email:string){
    const baseUrl = 'https://www.gravatar.com/avatar/'
    const md5 = require('md5')
    const hash = md5(email);
    return baseUrl+hash;
}
