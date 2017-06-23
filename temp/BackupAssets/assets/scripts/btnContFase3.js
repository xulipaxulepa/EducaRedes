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
            this.label.string = 'A  camada  de  transporte estabelece\n'+  
            'uma  conexão  fim  a  fim  (conexão  confiável)\n'+ 
            'entre a origem e o destino dos dados.';
            this.contador += 1;
        }else if(this.contador == 1){
            this.label.string = 'os  protocolos  na  camada  de  transporte\n'+
            'podem resolver problemas como\n'+ 
            'confiabilidade e integridade';
            this.contador += 1;
        } else if(this.contador == 2){
            cc.director.loadScene("jogoFase3");
        } 
    },

    // use this for initialization
    onLoad: function () {
        this.contador = 0;
        this.label.string = 'Ola, eu sou o professor Nect!\n'+
        'Eu vou te ensinar sobre a camada Transporte';

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
