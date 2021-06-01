import { setTimeout } from "timers";


export default function useApi(){

    function login({username,password}: {username:string,password:string}):Promise<boolean>{
        if (username === 'ali' && password === 'a1234567' ){
            return callApi(true);
        }else{
            return callApi(false);
        }
    }

    function callApi<T>(data:T):Promise<T>{
        const result = new Promise<T>((resolve,reject)=>{
            setTimeout(()=>{
                resolve(data);
            },2000);
        });
        return result;
    }

    return{
        login
    }
}

