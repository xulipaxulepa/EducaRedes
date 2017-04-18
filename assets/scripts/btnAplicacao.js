cc.Class({
    extends: cc.Component,

    properties: {
        prof1: {
            default: null,
            type: cc.Node
        },
        
        prof2: {
            default: null,
            type: cc.Node
        },
        
        prof3: {
            default: null,
            type: cc.Node
        },
        
        prof4: {
            default: null,
            type: cc.Node
        },
        
        button: {
            default: null,
            type: cc.Node
        }
    },
    
    showProfButton: function(){
        this.prof1.setOpacity(0);
        this.prof2.setOpacity(0);
        this.prof3.setOpacity(0);
        this.prof4.setOpacity(1000);
        this.button.setPosition(326, -244);
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
