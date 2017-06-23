cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        
        contador: 0
    },
    
    mudaTexto: function(){
        if(this.contador === 0){
            this.label.string = 'A camada de acesso a rede tem por objetivo\n'+ 
            'gerar e transmitir o sinal pelo meio. Seja a tecnologia\n'+
            'Ethernet, Wi-fi, Bluetooth, entre outros. ';
            this.contador += 1;
        }else if(this.contador == 1){
            this.label.string = 'Um dos serviços dessa camada\n'+ 
            'é a modulação da informação\n'+ 
            'através de um sinal analógico  ou  digital,';
            this.contador += 1;
        }else if(this.contador == 2){
            cc.director.loadScene("jogoFase1");
        } 
    },

    // use this for initialization
    onLoad: function () {
        this.contador = 0;
        this.label.string = 'Ola, eu sou o professor Sinaldo!\n'+
        'Eu vou te ensinar sobre a camada de Acesso a Rede';

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
