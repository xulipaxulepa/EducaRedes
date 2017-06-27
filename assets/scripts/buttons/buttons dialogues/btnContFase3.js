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
            this.label.string = 'A finalidade dessa camada é permitir que\n'+ 
            'as entidades pares dos hosts de origem e de destino\n'+
            'mantenham uma conversação';
            this.contador += 1;
        } else if(this.contador == 1){
            this.label.string = 'Dois protocolos fim a fim foram definidos aqui.\n'+
            'O primeiro deles, o TCP(Transmission Control Protocol\n'+
            '— protocolo de controle de transmissão)';
            this.contador += 1;
        } else if(this.contador == 2){
            this.label.string = 'Um protocolo orientado a conexões confiável\n'+
            'que permite a entrega sem erros de um fluxo de bytes\n'+
            'originário de uma determinada máquina em qualquer computador';
            this.contador += 1;
        } else if(this.contador == 3){
            this.label.string = 'Esse protocolo fragmenta o fluxo de bytes de entrada\n'+
            'em mensagens discretas. No destino, o processo TCP receptor\n'+
            'volta a montar as mensagens recebidas no fluxo de saída.';
            this.contador += 1;
        } else if(this.contador == 4){
            this.label.string = 'O proximo mini-jogo demonstra como\n'+ 
            'a mensagem viaja entre varios nos ate chegar em seu destino';
            this.contador += 1;
        } else if(this.contador == 5){
            cc.director.loadScene("jogoFase3");
        } 
    },

    // use this for initialization
    onLoad: function () {
        this.contador = 0;
        this.label.string = 'Ola, eu sou o professor Portty!\n'+
        'Eu vou te ensinar sobre a camada Transporte';

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
