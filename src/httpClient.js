import axios from "axios";
import router from "./router";
import store from "./store";

const requestFetch = axios.create({
    baseURL: 'https://api.rudn.site:7064/',
    //baseURL: 'https://localhost:7064/',
});

requestFetch.interceptors.request.use(config => {
    store.dispatch('loader/showLoadingAnimation')
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

requestFetch.interceptors.response.use((response) => {

    if (response.status === 200 || response.status === 201) {
        store.dispatch('loader/hideLoadingAnimation')
        return Promise.resolve(response)
    } else {
        store.dispatch('loader/hideLoadingAnimation')
        return Promise.resolve(response)
    }
}, (error) => {
    if (401 === error.response.status) {
        store.dispatch('error/displayErrorMessage', 'Your session has expired!');
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        router.push({ name: 'Login' })

    } else if (404 === error.response.status) {
        store.dispatch('loader/hideLoadingAnimation')
        return Promise.resolve(error);

    }
    else {
        store.dispatch('error/displayErrorMessage', 'An error occurred. Please try again later!');
        store.dispatch('loader/hideLoadingAnimation')
        return Promise.reject(error.response)
    }

    store.dispatch('loader/hideLoadingAnimation')
})

export default requestFetch
