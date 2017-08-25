cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        
        professor1: {
            default: null,
            type: cc.Node
        },
        
        professor2: {
            default: null,
            type: cc.Node
        },
        
        professor3: {
            default: null,
            type: cc.Node
        },
        
        professor4: {
            default: null,
            type: cc.Node
        },
        
        contador: 0
    },
    
    mudaTexto: function(){
        if(this.contador === 0){
            this.professor1.setPosition(-1300, 0);
            this.professor2.setPosition(-267, -89);
            this.label.string = 'O teste final consiste de um quiz com 10 perguntas\n'+ 
            'referentes as 4 camadas da arquitetura TCP/IP'; 
            this.contador += 1;
        } else if(this.contador == 1){
            this.professor2.setPosition(-1300, 0);
            this.professor3.setPosition(-267, -89);
            this.label.string = 'Para passar nesse teste, voce deve acertar pelo menos\n'+ 
            '7 das 10 questoes apresentadas';
            this.contador += 1;
        } else if(this.contador == 2){
            this.professor3.setPosition(-1300, 0);
            this.professor4.setPosition(-267, -89);
            this.label.string = 'Considere esse quiz como uma prova final\n'+ 
            'nao tenha pressa em responder as questoes\n'+
            'e analise com cuidado as opçoes apresentadas';
            this.contador += 1;
        } else if(this.contador == 3){
            this.professor4.setPosition(-1300, 0);
            this.professor1.setPosition(-267, -89);
            this.label.string = 'Boa sorte!';
            this.contador += 1;
        } else if(this.contador == 4){
            cc.director.loadScene("quizFase5");
        } 
    },

    // use this for initialization
    onLoad: function () {
        this.contador = 0;
        this.label.string = 'Ola, bem vindo ao teste final!\n'+
        'esta ultima fase testara todo o seu conhecimento\n'+
        'adquirido ate entao, em jogo e na disciplina';

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
