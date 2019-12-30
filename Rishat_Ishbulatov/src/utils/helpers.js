export const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString() + "  " + date.toLocaleTimeString();
};

export const wait = (ms, value) => {
    return new Promise(resolve => setTimeout(resolve, ms, value));
};
