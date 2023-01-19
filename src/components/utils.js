export const addRequestsToLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
};

export const getRequestsFromLocalStorage = (value) => {
    return JSON.parse(localStorage.getItem(value));
};