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
        this.pergunta.string = 'A camada transporte é responsável por...';
        
        this.resposta1.string = 'Gerenciar os pacotes na rede';
        
        this.resposta2.string = 'Gerar e transmitir o sinal pelo meio';
        
        this.resposta3.string = 'Estabelecer uma conexão fim a fim\n (conexão confiável)entre duas aplicações';
        
        this.resposta4.string = 'Acessar a rede em aplicações Web';
        } else if(this.contador == 1){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Qual destes protocolos não pertence\n a camada de transporte?';
        
        this.resposta1.string = 'ARP';
        
        this.resposta2.string = 'TCP';
        
        this.resposta3.string = 'UDP';
        
        this.resposta4.string = 'RTP';
        } else if(this.contador == 2){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Qual a ordem correta\n do protocolo Three Way Handshake\n do TCP/IP?';
        
        this.resposta1.string = 'SYN, SYN-SYN, ACK-ACK';
        
        this.resposta2.string = 'SYN, SYN-ACK, ACK';
        
        this.resposta3.string = 'ACK, ACK-SYN, SYN';
        
        this.resposta4.string = 'SYN, ACK-SYN, ACK';
        } else if(this.contador == 3){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Na camada de transporte\n o protocolo para garantir\n a confiabilidade é...?';
        
        this.resposta1.string = 'IP';
        
        this.resposta2.string = 'FTP';
        
        this.resposta3.string = 'HTTP';
        
        this.resposta4.string = 'TCP';
        } else if(this.contador == 4){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Os protocolos da camada de transporte\n que estabelecem uma conexão com\n outro nó antes de começarem\n a transmitir dados são conhecidos como ?';
        
        this.resposta1.string = 'Protocolos orientados à conexão';
        
        this.resposta2.string = 'Protocolos sem conexão';
        
        this.resposta3.string = 'Protocolos orientados a Syn';
        
        this.resposta4.string = 'Protocolos orientados para Ack';
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
            face.play("falaProfessor3-3");
            professor.playAdditive('animaProfessor');
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
