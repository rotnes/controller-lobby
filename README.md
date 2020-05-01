# Controller lobby component

This repository is for the Playtime controller lobby component that can be used by the controllers of the games of our multiplayer webrtc solution.

This component is part of the Playtime generic controllers which game developers can use for their games, so they don't need to build it themselved, and only need to make game changes to be able to make a multiplayer version.

The idea here is that this component is built in a way that, if the game developer wants to build a controller for his game himself, he is able to easily add this component to his code, so he wouldn't need to worry about the lobby and only prepares the other scenes such as level selection or the actual playing screen. 

**This is still a work in progress.**

Currently the solution proposed here uses Handlebars/Mustache as templating html solution. The idea here is that this technology would allow this component to be reused inside any framework the game developer would like to develop his controller in.

Using an html template engine allows this component to be reused inside javascript frameworks (vue, react, angular) or html5 frameworks (Phaser).

There are 2 main ways which a game developer can use this component:

- He can add this as a package through npm. At this moment we don't plan on publishing this to npm registry though. This repo will be available on github, which also works as registry, so the game dev is able to get the package from there directly.

- Controller components will be added to the controllerApi. So there are 2 versions of the controllerApi, one that only contains the networking logic for making the p2p connections and one that also contains all controller components, so the game developer is able to do `controllerApi.showLobby()` whenever is the moment for that scene.

A third option is to allow game developers to fork this repo and build their logic on top of it as they see fit, but of course this will require some more work from them + proper testing and reviewing from us to make sure his solution works correctly. (we don't wanna have broken games in our site) 

# Run
```$xslt
yarn run build:dev
```
```$xslt
yarn run serve
```

Or production build:
```$xslt
yarn run build:prod
```
