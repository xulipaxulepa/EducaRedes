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
        
        face: {
            default: null,
            type: cc.Node
        },
        
        btnContinuar1: {
            default: null,
            type: cc.Node
        },
        
        textWrapper: {
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
        
        tutorial: {
            default: null,
            type: cc.Node
        },
        
        fase: 0,
        
        pontuacao: 0,
        
        contTexto: 0,
    },

    // use this for initialization
    onLoad: function () {
        this.criaAlvo();
        this.pontuacao = 0;
        this.fase = 9;
        this.contTexto = 0;
        this.linhaGameOver.setOpacity(0);
        this.accUp = false;
        this.accDown = false;
        this.accRight = false;
        this.setInputControl();
        this.textoFase.string = "Como pode ser visto, a diferença entre os sinais\n"+ 
            "é bem perceptivel";
    },
    
    onDestroy: function () {
        cc.audioEngine.pauseAll();
    },
    
    //movimentar via teclado
    setInputControl: function () {
        var self = this;
        // add keyboard event listener
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // When there is a key being pressed down, judge if it's the designated directional button and set up acceleration in the corresponding direction
            onKeyPressed: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.up:
                        self.accUp = true;
                        self.accDown = false;
                        break;
                    case cc.KEY.down:
                        self.accUp = false;
                        self.accDown = true;
                        break;
                    case cc.KEY.right:
                        self.accUp = false;
                        self.accDown = false;
                        self.accRight = true;
                        break;
                }
            },
            
    onKeyReleased: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.up:
                        self.accUp = false;
                        break;
                    case cc.KEY.down:
                        self.accDown = false;
                        break;
                    case cc.KEY.right:
                        self.accRight = false;
                        break;
                }
            }
        }, self.node);
    },
    
    movimentar: function(){
        if (this.accUp) {
            this.sobePlayer();
        } else if (this.accDown) {
            this.descePlayer();
        } else if(this.accRight){
            this.vaiFrentePlayer();
        }
    },
    
    jogar: function(){
        cc.audioEngine.setVolume(0, 1);
        this.fase = 0;
        this.frentePlayer();
        var tutorial = this.tutorial.getComponent(cc.Animation);
        tutorial.play("someTutorial");
    },
    
    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para cima em diversas velocidades*/
    sobePlayer: function(){
        this.player.stopAllActions();
        var sobe = cc.moveBy(3, cc.p(0, 300));
        var frente = cc.moveBy(300, cc.p(10000, 0));
        this.player.runAction(cc.sequence(sobe, frente));
    },
    
    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para baixo em diversas velocidades*/
    descePlayer: function(){
        this.player.stopAllActions();
        var desce = cc.moveBy(3, cc.p(0, -300));
        var frente = cc.moveBy(300, cc.p(10000, 0));
        this.player.runAction(cc.sequence(desce, frente));
    },
    
    vaiFrentePlayer: function(){
        this.player.stopAllActions();
        var frente = cc.moveBy(300, cc.p(10000, 0));
        this.player.runAction(frente);
    },
    
    vaiPraFrente: function(){
    var frente = cc.moveBy(300, cc.p(10000, 0));
        return frente;
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
    
    getPlayerDistance: function() {
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
            this.fase = 1;
        }
    },
    
    passaLinha: function(){
        if (this.getPlayerDistanceLinha() < 60) {
            // invoke collecting behavior
            this.gameOver();
        } else if(this.pontuacao == 10){
            this.linhaGameOver.setPosition(0, 2000);
        }
    },
    
    gameOver:function(){
        this.gameOverbackground.setPosition(0,0);
        this.scoreGameOver.string = 'Alvos Acertados: '+this.pontuacao;
        this.player.stopAllActions();
    },
    
    tryAgain: function(){
        cc.director.loadScene("jogoFase1-1");
    },
    
    trocaTexto1: function(){
        cc.audioEngine.setVolume(0, 0.2);
        var texto = this.textoFase.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face.getComponent(cc.Animation);
        var animaFace = face.play("falaProfessor1");
        animaFace.speed = 0.5;
        animaFace.repeatCount = Infinity;
        if(this.contTexto === 0){
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor1');
            this.textoFase.string = "O sinal analógico é gerado como uma onda\n"+
            "já que os valores vão se alterando no intervalo de tempo";
            this.contTexto += 1;
        } else if(this.contTexto == 1){
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor2');
            this.textoFase.string = "Já o sinal digital é gerado como uma reta\n"+
            "já que possui um conjunto de valores em um intervalo de tempo";
            this.contTexto += 1;
        } else if(this.contTexto == 2){
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor1');
            this.textoFase.string = "A camada de acesso a rede também fornece\n"+
            "o serviço de transformar um canal de transmissão bruta\n"+
            "em uma linha que pareça livre de erros de transmissão";
            this.contTexto += 1;
        } else if(this.contTexto == 3){
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor2');
            this.textoFase.string = "Oferecendo enquadramento de bits\n"+
            "verificação de erros e protocolos que assegurem a correção de erros";
            this.contTexto += 1;
        }else if(this.contTexto == 4){
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor1');
            this.textoFase.string = "Visto os conteúdos desta fase e em sala de aula\n"+
            "responda agora o Quiz";
            this.contTexto += 1;
        } else if(this.contTexto == 5){
            this.textoFase.string = "";
            this.contTexto = 0;
            this.fase = 2;
            this.player.setPosition(-418,0);
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
        this.movimentar();
        
        if(this.fase === 0){
            this.professor.setPosition(1306,-222);
            this.limitaPlayer();
            this.criaLinha();
            this.pegaAlvo();
            this.passaLinha();
            this.score.string = 'Alvos: '+ this.pontuacao;
        } else if(this.fase == 1){
            this.player.setOpacity(0);
            this.professor.setPosition(0,-222);
            this.textWrapper.setPosition(0,-220);
        } else if(this.fase == 2){
            cc.director.loadScene("quizFase1");
        }
    },
});
