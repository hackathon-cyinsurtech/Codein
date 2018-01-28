const apiGET = {
    getRovers() {
        let url = 'http://frameplace.xyz:5000/get-user';
        return fetch(url)
            .then((res) => res.json());
    }
};
export default apiGET;