import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


// register
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST", `${SERVERURL}/register`,reqBody)
}



