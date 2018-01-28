const apiGETRefferals = {
    getRovers() {
        let url = 'http://frameplace.xyz:5000/get-referrals';
        return fetch(url)
            .then((res) => res.json());
    }
};
export default apiGETRefferals;