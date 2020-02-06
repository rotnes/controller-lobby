var lobbyTemplate = document.getElementById('lobbyTemplate');
var template = Handlebars.compile(lobbyTemplate.innerHTML);

var data = {
    players: 1,
    maxPlayers: 2,
    playButtonAvailable: true,
};
var box = document.getElementById('lobby');
box.innerHTML = template(data);

var playButton = document.getElementById('play-button');
if (data.playButtonAvailable && playButton) {
    playButton.onclick = function() {
        console.log("Play!");
    };
}
