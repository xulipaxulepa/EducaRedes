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
            this.label.string = 'A camada de aplicação é responsável\n'+
            'pelos protocolos de comunicação com\n'+ 
            'as diferentes aplicações é a interface \n'+
            'entre os programas e a arquitetura TCP/IP.';
            this.contador += 1;
        }else if(this.contador == 1){
            this.label.string = 'o dado é passado do programa de rede\n'+
            'no formato usado internamente\n'+ 
            'por essa aplicação';
            this.contador += 1;
        }else if(this.contador == 2){
            this.label.string = 'Um  exemplo  de  serviço  oferecido\n'+  
            'nessa  camada  é  o  recebimento  de  arquivosHTTP\n'+
            '(HyperText Transfer Protocol) para a exibição\n'+ 
            'de páginas Web.';
            this.contador += 1;
        } else if(this.contador == 3){
            cc.director.loadScene("jogoFase4");
        } 
    },

    // use this for initialization
    onLoad: function () {
        this.contador = 0;
        this.label.string = 'Ola, eu sou o professor Geraldo!\n'+
        'Eu vou te ensinar sobre a camada Aplicação';

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
