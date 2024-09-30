import '../component/game-list.js'
import '../component/search-bar.js'
import FetchApi from '../data/fetch-api.js'

const main = () => {
    const searchElement = document.querySelector('search-bar')
    const gameListElement = document.querySelector('game-list')

    const onButtonSearchClicked = async () => {
        try {
            const result = await FetchApi.searchGame(searchElement.value)
            console.log(result)
            renderResult(result)
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = results => {
        gameListElement.games = results
    }

    const fallbackResult = message => {
        gameListElement.renderError(message)
    }

    searchElement.clickEvent = onButtonSearchClicked
}

export default main
