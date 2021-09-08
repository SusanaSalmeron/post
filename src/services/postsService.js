import axios from 'axios';

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export async function getAllPotsts() {
    let result = []
    try {
        result = await client.get()
        /* console.log(result) */
    }
    catch (e) {
        console.log(e)
    }
    return result
}

export async function getPostById(id) {
    let result = {}
    try {
        result = await client.get(`/${id}`)
        console.log(result)
    }
    catch (e) {
        console.log(e)
    }
    return result
}

