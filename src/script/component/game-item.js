class GameItem extends HTMLElement{
    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode:'open'})
    }

    set game(game) {
        this._game = game
        this.render()
    }

    render() {
        this.shadowDOM.innerHTML = `
      <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 #ADCF9F;
            border-radius: 10px;
            overflow: hidden;
          }
          
        .image-photo {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
          
        .game-description {
            padding: 24px;
        }
          
        .game-description > h2 {
            font-weight: lighter;
        }
          
        .game-description > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
        </style>
        <img class="image-photo" src="${this._game.background_image}" alt="Image Photo">
        <div class="game-description">
          <h2>${this._game.name}</h2>
          <p>${this._game.released}</p>
        </div>
`
    }
}

customElements.define('game-item', GameItem)
