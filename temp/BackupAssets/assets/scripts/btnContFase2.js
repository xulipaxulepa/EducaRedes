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
            this.label.string = 'A camada Internet tem como objetivo\n'+ 
            'gerenciar pacotes na rede, identificando\n'+ 
            'sua origem/destino e redes para entrega';
            this.contador += 1;
        }else if(this.contador == 1){
            this.label.string = 'o IP executa a tarefa básica\n'+ 
            'de levar pacotes de dados da origem\n'+
            'para o destino.';
            this.contador += 1;
        }else if(this.contador == 2){
            this.label.string = 'Um  exemplo de  serviço  oferecido\n'+ 
            'por  essa  camada  é  o  roteamento  de  pacotes,\n'+
            'através dos endereços de origem/destino.';
            this.contador += 1;
        } else if(this.contador == 3){
            cc.director.loadScene("jogoFase2");
        } 
    },

    // use this for initialization
    onLoad: function () {
        this.contador = 0;
        this.label.string = 'Ola, eu sou a professora Lace!\n'+
        'Eu vou te ensinar sobre a camada Internet';

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
