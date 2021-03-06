"use strict";
cc._RF.push(module, 'd66a0PfiwZCZ5GzAjOGS5sD', 'logo');
// scripts/logo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        logoSong: {
            default: null,
            url: cc.AudioClip
        },

        timer: 0,

        duracaoLogo: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.timer = 0;
        cc.audioEngine.playEffect(this.logoSong, false);
    },

    vaiPraMain: function vaiPraMain() {
        cc.director.loadScene("main");
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.timer > this.duracaoLogo) {
            this.vaiPraMain();
        }
        this.timer += dt;
    }
});

cc._RF.pop();