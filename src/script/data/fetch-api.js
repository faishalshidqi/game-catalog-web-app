class FetchApi {
    static searchGame(keyword) {
        return fetch(`https://api.rawg.io/api/games?key=492b9978cc8745d8b1fabc0be237ffb3&search=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                console.log(responseJson)
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results)
                } else {
                    return Promise.reject(`${keyword} tidak ditemukan`)
                }
            })
    }
}

export default FetchApi
