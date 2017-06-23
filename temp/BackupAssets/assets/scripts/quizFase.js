cc.Class({
    extends: cc.Component,

    properties: {
        resposta1: {
            default: null,
            type: cc.Label
        },
        
        resposta2: {
            default: null,
            type: cc.Label
        },
        
        resposta3: {
            default: null,
            type: cc.Label
        },
        
        resposta4: {
            default: null,
            type: cc.Label
        },
        
        pergunta: {
            default: null,
            type: cc.Label
        },
        
        respostaErrada1: {
            default: null,
            type: cc.Node
        },
        
        respostaErrada2: {
            default: null,
            type: cc.Node
        },
        
        respostaErrada3: {
            default: null,
            type: cc.Node
        },
        
        respostaCerta: {
            default: null,
            type: cc.Node
        },
        
        telaFinalQuiz: {
            default: null,
            type: cc.Node
        },
        
        gameOver: {
            default: null,
            type: cc.Label
        },
        
        respostasCertas: {
            default: null,
            type: cc.Label
        },
        
        respostasErradas: {
            default: null,
            type: cc.Label
        },
        
        buttonTryAgain: {
            default: null,
            type: cc.Node
        },
        
        resp: 0,
        
        contador: 0,
        
        timer: 0,
        
        respCer: 0,
        
        respErr: 0,
    },
    
    someResposta: function(){
        this.respostaErrada1.setOpacity(0);
        this.respostaErrada2.setOpacity(0);
        this.respostaErrada3.setOpacity(0);
        this.respostaCerta.setOpacity(0);
    },
    
    mostraResposta: function(){
        this.respostaErrada1.setOpacity(255);
        this.respostaErrada2.setOpacity(255);
        this.respostaErrada3.setOpacity(255);
        this.respostaCerta.setOpacity(255);
    },
    
    perguntas: function(){
        if(this.contador === 0){
        this.someResposta();
        this.pergunta.string = 'A camada de acesso a rede e responsavel por...';
        
        this.resposta1.string = 'nada';
        
        this.resposta2.string = 'nao sei';
        
        this.resposta3.string = 'essa ta certa';
        
        this.resposta4.string = 'fuuuuuuuuu';
        } else if(this.contador == 1){
        this.someResposta();
        this.pergunta.string = 'Funcionou';
        
        this.resposta1.string = 'essa ta certa';
        
        this.resposta2.string = 'alalalalaa';
        
        this.resposta3.string = 'ahushaush';
        
        this.resposta4.string = 'oiowiewiewoe';
        } else if(this.contador == 2){
        this.someResposta();
        this.pergunta.string = 'haaaa';
        
        this.resposta1.string = 'haushaushau';
        
        this.resposta2.string = 'essa ta certa';
        
        this.resposta3.string = 'okoouou';
        
        this.resposta4.string = 'mnbbvcxz';
        } else if(this.contador == 3){
        this.someResposta();
        this.pergunta.string = 'Funcionou mesmo';
        
        this.resposta1.string = 'oehoaoaisjd';
        
        this.resposta2.string = 'alalalalaa';
        
        this.resposta3.string = 'ahushaush';
        
        this.resposta4.string = 'essa ta certa';
        } else if(this.contador == 4){
        this.someResposta();
        this.pergunta.string = 'qualquer coisa';
        
        this.resposta1.string = 'essa ta certa';
        
        this.resposta2.string = 'ba bla bla';
        
        this.resposta3.string = 'xuxuxuxuxux';
        
        this.resposta4.string = 'okoiuiuohhyg';
        }
    },
    
    buttonRespCerto: function(){
        this.timer = 3;
        this.respCer += 1;
        this.contador += 1;
    },
    
    buttonRespErrado: function(){
        this.timer = 3;
        this.respErr += 1;
        this.contador += 1;
    },
    
    gameover: function(){
        this.telaFinalQuiz.setPositionX(0);
        if(this.respCer>= 3){
            this.buttonTryAgain.destroy();
            this.gameOver.string = 'Parabens!\n'+
            'Voce passou no Quiz!';
        } else {
            this.gameOver.string = 'Ah! que pena!\n'+
            'Voce nao passou no Quiz!\n'+ 
            'tente novamente!';
        }
        
        this.respostasCertas.string = 'Respostas corretas: '+this.respCer;
        
        this.respostasErradas.string = 'Respostas Erradas: '+this.respErr; 
    },

    // use this for initialization
    onLoad: function () {
        this.someResposta();
        this.timer = 100000;
        this.contador = 0;
        this.respCer = 0;
        this.respErr = 0;
        this.perguntas();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.timer == 3) {
            this.mostraResposta();
        } else if(this.timer < 1){
            this.perguntas();
        } else if(this.contador == 5){
            this.gameover();
        }
        
        this.timer -= dt;

    },
});
