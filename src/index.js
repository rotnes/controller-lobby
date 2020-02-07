// import Handlebars from "handlebars";
var lobbyTemplate = require("./lobby.handlebars");

class Lobby {
    constructor (options) {
        console.log("Lobby - contructor");

        this.load();
    }

    load () {
        // let lobbyTemplate = document.getElementById('lobbyTemplate');
        let template = Handlebars.compile(lobbyTemplate);

        let data = {
            players: 1,
            maxPlayers: 2,
            playButtonAvailable: true,
        };
        let box = document.getElementById('lobby');
        box.innerHTML = template(data);

        let playButton = document.getElementById('play-button');
        if (data.playButtonAvailable && playButton) {
            playButton.onclick = function() {
                console.log("Play!");
                // options.playButtonClicked();
            };
        }
    }
}

export default Lobby;
