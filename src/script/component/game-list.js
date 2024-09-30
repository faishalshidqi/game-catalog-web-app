import './game-item.js'

class GameList extends HTMLElement {
    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode:'open'})
    }

    set games(games) {
        this._games = games
        this.render()
    }

    render() {
        this.shadowDOM.innerHTML = ''
        this._games.forEach(game => {
            const gameItemElement = document.createElement('game-item')
            gameItemElement.game = game
            this.shadowDOM.appendChild(gameItemElement)
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
    <style>
        game-list > .placeholder {
            font-weight: lighter;
            color: #CED89E;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        </style>
        <h2 class="placeholder">${message}</h2>`
    }
}

customElements.define('game-list', GameList)
