const apiGET = {
    getRovers() {
        let url = 'http://frameplace.xyz:5000/user/find';
        return fetch(url)
            .then((res) => res.json());
    }
};
export default apiGET;