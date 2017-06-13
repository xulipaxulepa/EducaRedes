cc.Class({
    extends: cc.Component,

    properties: {
        bg: {
            default: null,
            type: cc.Node
        },
        
        buttonUp: {
            default: null,
            type: cc.Node
        },
        
        buttonDown: {
            default: null,
            type: cc.Node
        },
        
        player: {
            default: null,
            type: cc.Node
        },
        
        linha: {
            default: null,
            type: cc.Prefab
        },
        
        alvo: {
            default: null,
            type: cc.Node
        },
        
        gameOverbackground: {
            default: null,
            type: cc.Node
        }, 
        
        score: {
            default: null,
            type: cc.Label
        },
        
        scoreGameOver: {
            default: null,
            type: cc.Label
        },
        
        professor: {
            default: null,
            type: cc.Node
        },
        
        btnContinuar1: {
            default: null,
            type: cc.Node
        },
        
        btnContinuar2: {
            default: null,
            type: cc.Node
        },
        
        textoFase: {
            default: null,
            type: cc.Label
        },
        
        linhaGameOver: {
            default: null,
            type: cc.Node
        },
        
        fase: 0,
        
        pontuacao: 0,
        
        contTexto: 0,
    },

    // use this for initialization
    onLoad: function () {
        this.frentePlayer();
        this.criaAlvo();
        this.btnContinuar2.setOpacity(0);
        this.linhaGameOver.setOpacity(0);
        this.pontuacao = 0;
        this.fase = 0;
        this.contTexto = 0;
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera a diferença\n"+ 
            "entre o sinal analogico e o sinal digital";
    },
    
    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para cima em diversas velocidades*/
    sobePlayer: function (){
        var sobe = cc.moveBy(3, cc.p(0, 300)).easing(cc.easeCubicActionInOut());
        this.player.runAction(sobe);
    },
    
    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para baixo em diversas velocidades*/
    descePlayer: function (){
        var desce = cc.moveBy(3, cc.p(0, -300)).easing(cc.easeCubicActionInOut());
        this.player.runAction(desce);
    },
    
    vaiPraFrente: function(){
    var frente = cc.moveBy(3, cc.p(100, 0));
        return cc.repeatForever(cc.sequence(frente));
    },
    
    frentePlayer: function(){
        this.vaiPraFrente = this.vaiPraFrente();
        this.player.runAction(this.vaiPraFrente);
    },
    
    criaLinha: function() {
        var novaLinha = cc.instantiate(this.linha);
        this.bg.addChild(novaLinha);
        novaLinha.setPosition(this.player.getPosition());
    },
    
    criaAlvo: function(){
        var y = Math.floor((Math.random() * 300) + 0);
        var x = this.player.x + 100;
        var xlinha = x + 200;
        this.alvo.setPosition(x, y);
        this.linhaGameOver.setPosition(xlinha, 0);
    },
    
    getPlayerDistance: function () {
        // judge the distance according to the position of the player node
        var playerPos = this.player.getPosition();
        var AlvoPos = this.alvo.getPosition();
        // calculate the distance between two nodes according to their positions
        var dist = cc.pDistance(AlvoPos, playerPos);
        return dist;
    },
    
    getPlayerDistanceLinha: function () {
        // judge the distance according to the position of the player node
        var playerPos = this.player.getPosition();
        var linhaGameOverPos = this.linhaGameOver.getPosition();
        // calculate the distance between two nodes according to their positions
        var dist = cc.pDistance(linhaGameOverPos, playerPos);
        return dist;
    },
    
    onPicked: function() {
        // When the stars are being collected, invoke the interface in the Game script to generate a new star
        this.criaAlvo();
        this.pontuacao += 1;
    },
    
    limitaPlayer: function(){
        if ( this.player.y > this.player.parent.height/2) {
            this.player.y = this.player.parent.height/2;
            this.gameOver();
        } else if (this.player.y < -this.player.parent.height/2) {
            this.player.y = -this.player.parent.height/2;
            this.gameOver();
        }
    },
    
    pegaAlvo: function(){
        if (this.getPlayerDistance() < 60) {
            // invoke collecting behavior
            this.onPicked();
            return;
        } else if(this.pontuacao == 10){
            this.fase = 2;
        }
    },
    
    passaLinha: function(){
        if (this.getPlayerDistanceLinha() < 60) {
            // invoke collecting behavior
            this.gameOver();
            return;
        } else if(this.pontuacao ==10){
            this.linhaGameOver.setPosition(0, 2000);
        }
    },
    
    gameOver:function(){
        this.gameOverbackground.setPosition(0,0);
        this.scoreGameOver.string = 'Alvos Acertados: '+this.pontuacao;
        this.player.stopAllActions();
    },
    
    tryAgain: function(){
        cc.director.loadScene("jogoFase1");
    },
    
    trocaTexto1: function(){
        if(this.contTexto === 0){
            this.textoFase.string = "um  sinal  analógico  é  caracterizado por\n"+ 
            "uma equação matemática continua. Quando a entrada muda de um valor para o próximo\n"+ 
            "faz isso movendo se através de todos os valores intermediários.";
            this.contTexto += 1;
        } else if(this.contTexto == 1){
            this.textoFase.string = "Tente acertar 10 alvos para avançar\n"+
            "para a proxima etapa";
            this.contTexto += 1;
        } else if(this.contTexto == 2){
            this.textoFase.string = "Evite subir demais ou descer demais\n"+
            "caso isso aconteça, sera Game Over";
            this.contTexto += 1;
        } else if(this.contTexto == 3){
            this.textoFase.string = "";
            this.contTexto = 0;
            this.fase = 1;
            this.player.setPosition(-418,0);
        }
    },
    
    trocaTexto2: function(){
        if(this.contTexto == 0){
        this.textoFase.string = "O sinal digital e gerado como um conjunto de retas\n"+
            "ja que possui um conjunto limitado de valores em um intervalo de tempo";
            this.contTexto += 1;
        } else if(this.contTexto == 1){
            this.textoFase.string = "Tente acertar 10 alvos para avançar\n"+
            "para a proxima etapa";
            this.contTexto += 1;
        } else if(this.contTexto == 2){
            this.textoFase.string = "Evite subir demais ou descer demais\n"+
            "caso isso aconteça, sera Game Over";
            this.contTexto += 1;
        } else if(this.contTexto == 3){
            this.textoFase.string = "Boa Sorte!";
            this.contTexto = 0;
            this.fase = 3;
            this.player.setPosition(-418,0);
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this.fase === 0){
            this.professor.setPosition(0,-222);
            this.player.setOpacity(0);
        } else if(this.fase == 1){
            this.player.setOpacity(255);
            this.professor.setPosition(1306,-222);
            this.limitaPlayer();
            this.criaLinha();
            this.pegaAlvo();
            this.passaLinha();
            this.score.string = 'Alvos: '+ this.pontuacao;
        } else if(this.fase == 2){
            this.professor.setPosition(0,-222);
            this.player.setOpacity(0);
            this.btnContinuar1.setPosition(3000,0);
            this.btnContinuar2.setOpacity(255);
        } else if(this.fase == 3){
            cc.director.loadScene("jogoFase1-1");
        }
        
        
        
    },
});
