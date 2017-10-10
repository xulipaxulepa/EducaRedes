"use strict";
cc._RF.push(module, 'b94cbMJ8WpDNKS0SpR87W9N', 'btnNovoJogo');
// scripts/buttons/btnNovoJogo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        gameAudio: {
            default: null,
            url: cc.AudioClip
        }
    },

    goToSelectFase: function goToSelectFase() {
        cc.director.loadScene("selectFase");
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.play(this.gameAudio, true);
    }

});

cc._RF.pop();