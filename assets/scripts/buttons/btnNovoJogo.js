cc.Class({
    extends: cc.Component,

    properties: {
        gameAudio: {
            default: null,
            url: cc.AudioClip
        },
    },
    
    goToSelectFase: function(){
        cc.director.loadScene("selectFase");
    },

    // use this for initialization
    onLoad: function () {
        cc.audioEngine.play(this.gameAudio, true);
    },
    
    onDestroy: function () {
        cc.audioEngine.pauseAll();
    },
    
    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
