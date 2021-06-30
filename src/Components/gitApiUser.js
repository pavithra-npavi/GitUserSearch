import axios from "axios"

function getApiUser(query){

    const config = {
        method: "get",
        url : "https://api.github.com/search/users",
        params :{
          q : query
        }    
}
return axios(config)
// if(!query)
// {
//     return new Promise.reject("query should be provided");
// }

// return axios.get("https://api.github.com/search/users",{
//     params:{
//        q:query
//     }
// }
// )
}


export {getApiUser}