import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


// register
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST", `${SERVERURL}/register`,reqBody)
}

// Login
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

// get Home Book
export const getHomeBookAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/home-books`)
}

// ----------------------user--------------------------------

// add book
export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-book`,reqBody, reqHeader)
}

// get all books
export const getAllBooksAPI = async(searchKey, reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-books?search-${searchKey}`,{},reqHeader)
}

// get a Book
export const getABookAPI = async(LiaBookSolid, reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/view-books/${bookid}`,{},reqHeader)
}
