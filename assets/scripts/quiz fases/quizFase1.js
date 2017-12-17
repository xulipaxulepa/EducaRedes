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
        
        respostaErrada1b: {
            default: null,
            type: cc.Node
        },
        
        respostaErrada2b: {
            default: null,
            type: cc.Node
        },
        
        respostaErrada3b: {
            default: null,
            type: cc.Node
        },
        
        respostaErrada4b: {
            default: null,
            type: cc.Node
        },
        
        respostaCerta: {
            default: null,
            type: cc.Node
        },
        
        respostaExtra: {
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
        
        professor: {
            default: null,
            type: cc.Node
        },
        
        face: {
            default: null,
            type: cc.Node
        },
        
        falaquizprof: {
            default: null,
            type: cc.Node
        },
        
        gameAudio: {
            default: null,
            url: cc.AudioClip
        },
        
        resp: 0,
        
        contador: 0,
        
        timer: 0,
        
        respCer: 0,
        
        respErr: 0,
        
        saiAnimacao: 0,
    },
    
    someResposta: function(){
        this.respostaErrada1.setOpacity(0);
        this.respostaErrada2.setOpacity(0);
        this.respostaErrada3.setOpacity(0);
        this.respostaExtra.setOpacity(0);
        this.respostaCerta.setOpacity(0);
    },
    
    mostraResposta: function(){
        this.respostaErrada1.setOpacity(255);
        this.respostaErrada2.setOpacity(255);
        this.respostaErrada3.setOpacity(255);
        this.respostaExtra.setOpacity(255);
        this.respostaCerta.setOpacity(255);
    },
    
    trocaRespostas: function(){
        if(this.contador == 1){
            this.respostaCerta.setPositionY(112);
        } else if(this.contador == 2){
            this.respostaCerta.setPositionY(-18);
        } else if(this.contador == 3){
            this.respostaCerta.setPositionY(-258);
        } else if(this.contador == 4){
            this.respostaCerta.setPositionY(112);
        }
    },
    
    perguntas: function(){
        if(this.contador === 0){
        this.apareceRespostas();
        this.someResposta();
        this.pergunta.string = 'Quais as PDUs(Unidades de \n'+
        'dados de protocolos) usados\n'+
        'na camada de acesso a rede?';
        
        this.resposta1.string = 'Segmento e bit';
        
        this.resposta2.string = 'Datagrama e pacotes';
        
        this.resposta3.string = 'Bit e Quadros(Frames)';
        
        this.resposta4.string = 'Pacotes e quadros';
        } else if(this.contador == 1){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'A onda senoidal é a representação\n'+
                                'fundamental de um sinal analógico.\n'+
                                ' Marque a alternativa abaixo que NÃO\n'+ 
                                'apresenta uma característica\n'+
                                'de onda senoidal.';
        
        this.resposta1.string = 'Sinalização';
        
        this.resposta2.string = 'Amplitude ';
        
        this.resposta3.string = 'Frequencia/Periodo';
        
        this.resposta4.string = 'Fase';
        } else if(this.contador == 2){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Em uma transmissão digital \n'+
                                'ao informar que existem\n'+
                                '4 níveis de sinalização quantos bits\n'+
                                'estão sendo trafegados por sinal?';
        
        this.resposta1.string = '3';
        
        this.resposta2.string = '2';
        
        this.resposta3.string = '4';
        
        this.resposta4.string = '1';
        } else if(this.contador == 3){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'O sinal digital é caracterizado por...:';
        
        this.resposta1.string = 'Ser alternado em contínuo';
        
        this.resposta2.string = 'Ser um sinal que não possui falhas';
        
        this.resposta3.string = 'Ter um conjunto infinito de valores\n num intervalo de tempo qualquer';
        
        this.resposta4.string = 'Possuir apenas um\n conjunto limitado de valores';
        } else if(this.contador == 4){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'A latência é calculada\n'+
                                'através da soma de 4 atrasos.\n'+
                                'Marque a alternativa que apresenta\n'+
                                'os 4 atrasos que formam a latência:';
        
        this.resposta1.string = 'Atraso de transmissão, atraso de propagação\n'+
                                'atraso de fila, atraso de processamento.';
        
        this.resposta2.string = 'Atraso de sinais, atraso de propagação\n'+
                                'atraso de fila, atraso de processamento';
        
        this.resposta3.string = 'Atraso de transmissão, atraso de propagação\n'+
                                'atraso de recepção, atraso de processamento';
        
        this.resposta4.string = 'Atraso de mensagem, atraso de propagação\n'+
                                'atraso de recepção, atraso de processamento.';
        }
    },
    
    buttonRespCerto: function(){
        this.timer = 3;
        this.saiAnimacao = 1;
        this.respCer += 1;
        this.contador += 1;
    },
    
    buttonRespErrado: function(){
        this.timer = 3;
        this.saiAnimacao = 1;
        this.respErr += 1;
        this.contador += 1;
    },
    
    gameover: function(){
        this.telaFinalQuiz.setPositionX(0);
        if(this.respCer>= 3){
            this.buttonTryAgain.destroy();
            this.gameOver.string = 'Parabéns!\n'+
            'Você passou no Quiz!';
        } else {
            this.gameOver.string = 'Ah! que pena!\n'+
            'Você não passou no Quiz!\n'+ 
            'tente novamente!';
        }
        
        this.respostasCertas.string = 'Respostas corretas: '+this.respCer;
        
        this.respostasErradas.string = 'Respostas Erradas: '+this.respErr; 
    },

    // use this for initialization
    onLoad: function () {
        cc.audioEngine.play(this.gameAudio, true);
        this.someResposta();
        this.timer = 100000;
        this.contador = 0;
        this.saiAnimacao = 0;
        this.respCer = 0;
        this.respErr = 0;
        this.perguntas();
    },
    
    onDestroy: function () {
        cc.audioEngine.pauseAll();
    },
    
    apareceRespostas: function(){
        if(this.saiAnimacao == 1){
            this.saiAnimacao = 0;
            var respErrada1 = this.respostaErrada1b.getComponent(cc.Animation);
            var respErrada2 = this.respostaErrada2b.getComponent(cc.Animation);
            var respErrada3 = this.respostaErrada3b.getComponent(cc.Animation);
            var respErrada4 = this.respostaErrada4b.getComponent(cc.Animation);
            var resp1 = this.resposta1.getComponent(cc.Animation);
            var resp2 = this.resposta2.getComponent(cc.Animation);
            var resp3 = this.resposta3.getComponent(cc.Animation);
            var resp4 = this.resposta4.getComponent(cc.Animation);
            var respCerta = this.respostaCerta.getComponent(cc.Animation);
            var respExtra = this.respostaExtra.getComponent(cc.Animation);
            var fala = this.falaquizprof.getComponent(cc.Animation);
            var face = this.face.getComponent(cc.Animation);
            var professor = this.professor.getComponent(cc.Animation);
            respErrada1.playAdditive('apareceResposta1');
            respErrada2.playAdditive('apareceResposta2');
            respErrada3.playAdditive('apareceResposta3');
            respErrada4.playAdditive('apareceResposta4');
            resp1.playAdditive('apareceResposta1');
            resp2.playAdditive('apareceResposta2');
            resp3.playAdditive('apareceResposta3');
            resp4.playAdditive('apareceResposta4');
            fala.playAdditive('apareceFalaProfessor');
            var animaFace = face.play("falaProfessor1");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            professor.playAdditive('animaProfessor1');
        } else if(this.saiAnimacao === 0){
            
        }
    },
    
    goToCredits: function(){
        cc.director.loadScene("credits");
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
