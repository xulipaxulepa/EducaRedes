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
        
        textwrapper: {
            default: null,
            type: cc.Node
        },
        
        tutorial: {
            default: null,
            type: cc.Node
        },
        
        AmpMax: {
            default: null,
            type: cc.Label
        },
        
        Frequencia: {
            default: null,
            type: cc.Label
        },
        
        gameAudio: {
            default: null,
            url: cc.AudioClip
        },
        
        fase: 0,
        
        pontuacao: 0,
        
        contTexto: 0,
        
        saiLoop: 0,
        
    },

    // use this for initialization
    onLoad: function () {
        cc.audioEngine.play(this.gameAudio, true);
        this.frentePlayer();
        this.criaAlvo();
        this.btnContinuar2.setOpacity(0);
        this.linhaGameOver.setOpacity(0);
        this.pontuacao = 0;
        this.fase = 0;
        this.contTexto = 0;
        this.accUp = false;
        this.accDown = false;
        this.saiLoop = 0;
        this.setInputControl();
        var texto = this.textoFase.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face.getComponent(cc.Animation);
        var animaFace = face.play("falaProfessor1");
        animaFace.speed = 0.5;
        animaFace.repeatCount = Infinity;
        texto.playAdditive('ApareceTexto');
        professor.playAdditive('Aparece');
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera a diferença\n"+ 
            "entre o sinal analogico e o sinal digital";
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
                }
            }
        }, self.node);
    },
    
    movimentar: function(){
        if (this.accUp) {
            this.sobePlayer();
        } else if (this.accDown) {
            this.descePlayer();
        } 
    },
    
    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para cima em diversas velocidades*/
    sobePlayer: function (){
        if(this.saiLoop === 0){
        var sobe = cc.moveBy(3, cc.p(0, 300)).easing(cc.easeCubicActionInOut());
        this.player.runAction(sobe);
        this.saiLoop = 1;
        } else if(this.saiLoop == 1){
            
        }
    },
    
    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para baixo em diversas velocidades*/
    descePlayer: function (){
        if(this.saiLoop == 1){
            var desce = cc.moveBy(3, cc.p(0, -300)).easing(cc.easeCubicActionInOut());
            this.player.runAction(desce);
            this.saiLoop = 0;
        } else if(this.saiLoop === 0){
            
        }
    },
    
    vaiPraFrente: function(){
    var frente = cc.moveBy(3, cc.p(100, 0));
        return cc.repeatForever(frente);
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
        if(this.pontuacao === 0){
            this.alvo.setPosition(-320, 272);
        } else {
            var y = Math.floor((Math.random() * 300) + 0);
            var x = this.player.x + 100;
            var xlinha = x + 200;
            this.alvo.setPosition(x, y);
            this.linhaGameOver.setPosition(xlinha, 0);
        }
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
        var texto = this.textoFase.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face.getComponent(cc.Animation);
        
        if(this.contTexto === 0){
            professor.playAdditive('moveProfessorJF1');
            texto.playAdditive('ApareceTexto');
            var animaFace = face.play("falaProfessor2");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.textoFase.string = "um  sinal  analógico  é  caracterizado por\n"+ 
            "uma equação matemática continua.\n"+ 
            "Quando a entrada muda";
            this.contTexto += 1;
        } else if(this.contTexto == 1){
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "de um valor para o próximo\n"+ 
            "faz isso movendo se através\n"+
            "de todos os valores intermediários.";
            this.contTexto += 1;
        } else if(this.contTexto == 2){
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "Perceba que a fase descreve a posição\n"+ 
                                    "da onda no instante de tempo igual a zero.\n"+ 
                                    "A fase é medida em graus";
            this.contTexto += 1;
        }else if(this.contTexto == 3){
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "Tente acertar 10 alvos para avançar\n"+
            "para a proxima etapa";
            this.contTexto += 1;
        } else if(this.contTexto == 4){
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "Evite subir demais ou descer demais\n"+
            "caso isso aconteça, sera Game Over";
            this.contTexto += 1;
        } else if(this.contTexto == 5){
            texto.playAdditive('ApareceTexto');
            var tw = this.textwrapper.getComponent(cc.Animation);
            tw.play("someTWJF1");
            var tutorial = this.tutorial.getComponent(cc.Animation);
            tutorial.play("apareceTutorial");
        }
    },
    
    jogar: function(){
        this.textoFase.string = "Como pode ser visto o sinal analogico é gerado como\n"+
            "um conjunto de ondas, já que o sinal passa por todos os valores\n"+
            "naquele intervalo de tempo";
            this.contTexto = 7;
            this.fase = 1;
            this.player.setPosition(-418,0);
            var tutorial = this.tutorial.getComponent(cc.Animation);
            tutorial.play("someTutorial");
    },
    
    trocaTexto2: function(){
        if(this.contTexto == 7){
            this.textoFase.string = "Já o sinal digital é gerado como um conjunto de retas\n"+
            "já que possui um conjunto limitado\n"+
            "de valores em um intervalo de tempo";
            this.contTexto += 1;
        } else if(this.contTexto == 8){
            this.textoFase.string = "Tente acertar 10 alvos para avançar\n"+
            "para a proxima etapa";
            this.contTexto += 1;
        } else if(this.contTexto == 9){
            this.textoFase.string = "Evite subir demais ou descer demais\n"+
            "caso isso aconteça, sera Game Over";
            this.contTexto += 1;
        } else if(this.contTexto == 10){
            this.textoFase.string = "Boa Sorte!";
            this.contTexto = 0;
            this.fase = 3;
            this.player.setPosition(-418,0);
        }
    },
    
    explicaAmplitudeFrequencia: function(){
        if(this.pontuacao == 1){
           var amp = this.AmpMax.getComponent(cc.Animation);
           amp.play("Aparece");
        } else if(this.pontuacao == 2){
            var frequen = this.Frequencia.getComponent(cc.Animation);
           frequen.play("Aparece");
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
        this.movimentar();
        
        if(this.fase === 0){
            this.professor.setPosition(0,-222);
            this.player.setOpacity(0);
        } else if(this.fase == 1){
            this.player.setOpacity(255);
            this.professor.setPosition(1306,-222);
            this.textwrapper.setPosition(1306,-222);
            this.btnContinuar1.setPosition(1306,-222);
            this.btnContinuar2.setPosition(1306,-222);
            this.limitaPlayer();
            this.criaLinha();
            this.pegaAlvo();
            this.passaLinha();
            this.score.string = 'Alvos: '+ this.pontuacao;
            this.explicaAmplitudeFrequencia();
        } else if(this.fase == 2){
            this.professor.setPosition(0,-222);
            this.textwrapper.setPosition(0,-229);
            this.btnContinuar2.setPosition(747,-99);
            this.player.setOpacity(0);
            this.btnContinuar1.setPosition(3000,0);
            this.btnContinuar2.setOpacity(255);
        } else if(this.fase == 3){
            cc.director.loadScene("jogoFase1-1");
        }
        
        
        
    },
});
