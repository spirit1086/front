import axios from "@/api/axios";

const getBooks = params =>{
    return axios.get('/books',{params:params})
}

const getBook = id =>{
    return axios.get('/book',{params:{id:id}})
}

const createBook = params =>{
    return axios.post('/book/create',{params:params})
}

const updateBook = (id,data) =>{
    return axios.patch('/book/update',{params:{id:id,data:data}})
}

const deleteBook = id =>{
    return axios.delete('/book/delete',{params:{id:id}})
}

export default {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}