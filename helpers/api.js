export const fetchdata = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.org/posts").then(data => data.json());
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const fetchpost = async (name) => {
    try {
        const response = await fetchdata();
        const res = await response.json();
        return res.items.filter(item => item.slug === name)[0];
    } catch (error) {
        console.error(error);
    }
}

export const fetchcreators = async () => {
    try {
        const response = await fetch("http://localhost:8089/api/allCreators");
        const res = await response.json();
        return res;
    } catch (error) {
        console.error(error);
    }
}
export const fetchcreator = async (id) => {
    try {
        const response = await fetchcreators();
        return response.items.filter(item => item.id == id)[0];
    } catch (error) {
        console.error(error);
    }
}
// export const fetchnumberpages = async (id) => {
//     try {
//         const response = await fetch("http://localhost:8089/api/allCreators");
//         const res = await response.json();
//         return res.totalPages;
//     } catch (error) {
//         console.error(error);
//     }
// }


