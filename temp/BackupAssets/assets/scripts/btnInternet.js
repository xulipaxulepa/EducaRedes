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
        
        button1: {
            default: null,
            type: cc.Node
        },
        
        button2: {
            default: null,
            type: cc.Node
        },
        
        button3: {
            default: null,
            type: cc.Node
        },
        
        button4: {
            default: null,
            type: cc.Node
        }

    },
    
    mudaButton: function(){
        this.button1.setPosition(596, -244);
        this.button2.setPosition(326, -244);
        this.button3.setPosition(596, -244);
        this.button4.setPosition(596, -244);
    },
    
    showProfButton: function(){
        this.prof1.setOpacity(0);
        this.prof2.setOpacity(1000);
        this.prof3.setOpacity(0);
        this.prof4.setOpacity(0);
        this.mudaButton();
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
