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
        this.pergunta.string = 'A camada de aplicação\n é responsável por...';
        
        this.resposta1.string = 'Gerenciar os pacotes na rede';
        
        this.resposta2.string = 'Estabelecer uma conexão fim a fim\n (conexão confiável)entre a origem e o destino\n dos dados.';
        
        this.resposta3.string = 'permitir a criptografia de dados\n para garantia de segurança.\n Oferecer a interface de usabilidade\n para os clientes.';// 
        
        this.resposta4.string = 'Demonstrar na tela elementos visuais das aplicações';
        } else if(this.contador == 1){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Na camada de aplicação\n o protocolo HTTP é\n responsavel por...?';
        
        this.resposta1.string = 'Transferir hipertextos';
        
        this.resposta2.string = 'Receber arquivos de vídeo da Internet ';
        
        this.resposta3.string = 'Exibir páginas web';
        
        this.resposta4.string = 'Baixar arquivos Torrent';
        } else if(this.contador == 2){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'O programa Filezilla\n e o protocolo FTP\n são responsaveis por ';
        
        this.resposta1.string = 'Segurança na rede';
        
        this.resposta2.string = 'Transferencia de arquivos';
        
        this.resposta3.string = 'Armazenamento em nuvem';// trocar resposta 
        
        this.resposta4.string = 'Criptografia de dados';
        } else if(this.contador == 3){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Qual destes é um protocolo\n de camada de aplicação?';
        
        this.resposta1.string = 'TCP';
        
        this.resposta2.string = 'IP';
        
        this.resposta3.string = 'Ethernet';
        
        this.resposta4.string = 'HTTP';
        } else if(this.contador == 4){
        this.apareceRespostas();
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'pra que serve o protocolo DNS?';
        
        this.resposta1.string = 'Traduz nomes de domínios\n mais facilmente memorizáveis\n a endereços IP ';
        
        this.resposta2.string = 'Acessa e mantem serviços\n de informação de diretório\n distribuído sobre uma rede';
        
        this.resposta3.string = 'Opera serviços de rede de forma\n segura sobre uma rede insegura';
        
        this.resposta4.string = 'Oferece configuração dinâmica de terminais';
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
    
    goToCredits: function(){
        cc.director.loadScene("credits");
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
        this.someResposta();
        cc.audioEngine.play(this.gameAudio, true);
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
            face.play("falaProfessor2");
            professor.playAdditive('animaProfessor1');
        } else if(this.saiAnimacao === 0){
            
        }
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
