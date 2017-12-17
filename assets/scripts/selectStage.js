cc.Class({
    extends: cc.Component,

    properties: {
        Camada1: {
            default: null,
            type: cc.Node
        },
        
        Camada2: {
            default: null,
            type: cc.Node
        },
        
        Camada3: {
            default: null,
            type: cc.Node
        },
        
        Camada4: {
            default: null,
            type: cc.Node
        },
        
        Camada5: {
            default: null,
            type: cc.Node
        },
        
        testeFinal: {
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
        
        gameAudio: {
            default: null,
            url: cc.AudioClip
        },
        
        contador: 0,
    },
    
    vaiPraFrente: function(){
        if(this.contador == 1){
            var camada1 = this.Camada1.getComponent(cc.Animation);
            camada1.playAdditive('PraFrente');
            var camada2 = this.Camada2.getComponent(cc.Animation);
            camada2.playAdditive('PraTras');
            this.contador += 1;
        } else if(this.contador == 2){
            camada2 = this.Camada2.getComponent(cc.Animation);
            camada2.playAdditive('PraFrente');
            var camada3 = this.Camada3.getComponent(cc.Animation);
            camada3.playAdditive('PraTras');
            this.contador += 1;
        } else if(this.contador == 3){
            camada3 = this.Camada3.getComponent(cc.Animation);
            camada3.playAdditive('PraFrente');
            var camada4 = this.Camada4.getComponent(cc.Animation);
            camada4.playAdditive('PraTras');
            this.contador += 1;
        } else if(this.contador == 4){
            camada4 = this.Camada4.getComponent(cc.Animation);
            camada4.playAdditive('PraFrente');
            var camada5 = this.Camada5.getComponent(cc.Animation);
            camada5.playAdditive('PraTras');
            this.contador += 1;
        } else if(this.contador == 5){
            camada5 = this.Camada5.getComponent(cc.Animation);
            camada5.playAdditive('PraFrente');
        } 
    },
    
    vaiPraTras: function(){
        if(this.contador == 5){
            var camada5 = this.Camada5.getComponent(cc.Animation);
            camada5.playAdditive('PraFrente');
            var camada4 = this.Camada4.getComponent(cc.Animation);
            camada4.playAdditive('PraTras');
            this.contador -= 1;
        } else if(this.contador == 4){
            camada4 = this.Camada4.getComponent(cc.Animation);
            camada4.playAdditive('PraFrente');
            var camada3 = this.Camada3.getComponent(cc.Animation);
            camada3.playAdditive('PraTras');
            this.contador -= 1;
        } else if(this.contador == 3){
            camada3 = this.Camada3.getComponent(cc.Animation);
            camada3.playAdditive('PraFrente');
            var camada2 = this.Camada2.getComponent(cc.Animation);
            camada2.playAdditive('PraTras');
            this.contador -= 1;
        } else if(this.contador == 2){
            camada2 = this.Camada2.getComponent(cc.Animation);
            camada2.playAdditive('PraFrente');
            var camada1 = this.Camada1.getComponent(cc.Animation);
            camada1.playAdditive('PraTras');
            this.contador -= 1;
        } else if(this.contador == 1){
            camada1 = this.Camada1.getComponent(cc.Animation);
            camada1.playAdditive('PraFrente');
        } 
    },

    // use this for initialization
    onLoad: function () {
        cc.audioEngine.play(this.gameAudio, true);
        this.contador = 1;

    },
    
    onDestroy: function () {
        cc.audioEngine.pauseAll();
    },
    
    verificaContador: function(){
        if(this.contador == 1){
            this.button1.setPosition(-1300, 0);
        } else if(this.contador == 5){
            this.button2.setPosition(1300, 0);
        } else {
            this.button1.setPosition(-366, 0);
            this.button2.setPosition(366, 0);
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.verificaContador();
    },
});
