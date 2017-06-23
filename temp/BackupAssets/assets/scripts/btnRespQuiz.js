cc.Class({
    extends: cc.Component,

    properties: {
        contador: 0,
        
        timer: 0,
        
        respCer: 0,
        
        respErr: 0,
        
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
        
        resp11: {
            default: null,
            type: cc.Node
        },
        
        resp12: {
            default: null,
            type: cc.Node
        },
        
        resp13: {
            default: null,
            type: cc.Node
        },
        
        resp14: {
            default: null,
            type: cc.Node
        },
        
        resp21: {
            default: null,
            type: cc.Node
        },
        
        resp22: {
            default: null,
            type: cc.Node
        },
        
        resp23: {
            default: null,
            type: cc.Node
        },
        
        resp24: {
            default: null,
            type: cc.Node
        },
    },
    
    mostraResposta: function(){
        this.respostaErrada1.setOpacity(255);
        this.respostaErrada2.setOpacity(255);
        this.respostaErrada3.setOpacity(255);
        this.respostaCerta.setOpacity(255);
    },
    
    someRespostas: function(){
        this.respostaErrada1.setOpacity(0);
        this.respostaErrada2.setOpacity(0);
        this.respostaErrada3.setOpacity(0);
        this.respostaCerta.setOpacity(0);
    },
    
    trocaPerguntas1: function(){
        this.resp11.setPositionX(1306);
        this.resp12.setPositionX(1306);
        this.resp13.setPositionX(1306);
        this.resp14.setPositionX(1306);
        this.resp21.setPositionX(225);
        this.resp22.setPositionX(225);
        this.resp23.setPositionX(225);
        this.resp24.setPositionX(225);
    },
    
    perguntas: function(){
        if(this.contador == 1){
        this.trocaPerguntas1();
        this.someRespostas();
        this.pergunta.string = 'Essa e a proxima pergunta';
        
        this.resposta1.string = 'essa ta certa';
        
        this.resposta2.string = 'blabla';
        
        this.resposta3.string = 'blablabla';
        
        this.resposta4.string = 'lalalalsusu';
        } else if(this.contador == 2){
        this.someRespostas();
        this.pergunta.string = 'Essa e a proxima proxima pergunta';
        
        this.resposta1.string = 'e';
        
        this.resposta2.string = 'blablajlkjlkj';
        
        this.resposta3.string = 'xuxuxux';
        
        this.resposta4.string = 'lolita';
        }
    },
    
    respCerta: function(){
        this.timer = 3;
        this.respCer += 1;
        this.mostraResposta();
        this.contador += 1;
    },
    
    respErrada: function(){
        this.timer = 3;
        this.respErr += 1;
        this.mostraResposta();
        this.contador += 1;
    },

    // use this for initialization
    onLoad: function () {
        this.contador = 0;
        
        this.timer = 0;
        
        this.respCer = 0;
        
        this.respErr = 0;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.timer < 1) {
            this.perguntas();
            
        }
        this.timer -= dt;

    },
});
