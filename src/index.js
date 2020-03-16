import lobbyTemplate from "./lobby.handlebars";

class Lobby {
    constructor (options) {
        console.log("Lobby - constructor");
        this.visible = false;
    }

    show () {
        console.log("Lobby - show");
        let data = {
            players: 1,
            maxPlayers: 2,
            playButtonAvailable: true,
        };
        let div = document.createElement('div');
        div.id = 'lobby-container';
        div.innerHTML = lobbyTemplate(data);
        document.body.appendChild(div);

        this.visible = true;
    }

    hide () {
        console.log("Lobby - hide");
        let e = document.getElementById('lobby-container');
        if (e) {
            e.remove();
            this.visible = false;
        }

    }
}

export default Lobby;
