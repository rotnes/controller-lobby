import './scss/main';
// import styles from './app.module';
import lobbyTemplate from './templates/lobby.handlebars';

class Lobby {
    constructor (options) {
        console.log('Lobby - constructor');
        this.visible = false;
    }

    show () {
        console.log("Lobby - show");
        let data = {
            players: [
                {
                    name: 'player 1',
                    ready: true
                },
                {
                    name: 'player 2',
                    ready: false
                }
            ],
            maxPlayers: 2,
            playButtonAvailable: true,
            characters: [
                {
                    name: 'blank',
                    avatar: 'assets/avatar-blank.png',
                    avatar_big: 'assets/avatar-blank@2x.png'
                },
                {
                    name: 'blue',
                    avatar: 'assets/avatar-blue.png',
                    avatar_big: 'assets/avatar-blue@2x.png'
                },
                {
                    name: 'pink',
                    avatar: 'assets/avatar-pink.png',
                    avatar_big: 'assets/avatar-pink@2x.png'
                },
                {
                    name: 'purple',
                    avatar: 'assets/avatar-purple.png',
                    avatar_big: 'assets/avatar-purple@2x.png'
                },
                {
                    name: 'blank',
                    avatar: 'assets/avatar-blank.png',
                    avatar_big: 'assets/avatar-blank@2x.png'
                },
            ]
        };
        let div = document.createElement('div');
        div.id = 'app';
        div.className = 'app';
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

(function(){
    const lobby = new Lobby();
    lobby.show();
}());
