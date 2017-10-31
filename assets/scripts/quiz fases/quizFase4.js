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
        this.someResposta();
        this.pergunta.string = 'A camada de aplicação é responsável por...';
        
        this.resposta1.string = 'Gerenciar os pacotes na rede';
        
        this.resposta2.string = 'Estabelecer uma conexão fim a fim\n (conexão confiável)entre a origem e o destino\n dos dados.';
        
        this.resposta3.string = 'Gerenciar os diversos protocolos\n de comunicação das suas aplicações';//permitir a criptografia de dados para garantia de segurança. Oferecer a interface de usabilidade para os clientes. 
        
        this.resposta4.string = '';
        } else if(this.contador == 1){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Na camada de aplicação\n o protocolo HTTP é responsavel por...?';
        
        this.resposta1.string = 'Transferir hipertextos';
        
        this.resposta2.string = 'Receber arquivos de vídeo da Internet ';
        
        this.resposta3.string = 'Exibir páginas web';
        
        this.resposta4.string = 'Baixar arquivos Torrent';
        } else if(this.contador == 2){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'O programa Filezilla e o protocolo FTP\n são responsaveis por ';
        
        this.resposta1.string = 'Segurança na rede';
        
        this.resposta2.string = 'Transferencia de arquivos';
        
        this.resposta3.string = 'Armazenamento em nuvem';// trocar resposta 
        
        this.resposta4.string = 'Criptografia de dados';
        } else if(this.contador == 3){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Qual destes é um protocolo\n de camada de aplicação?';
        
        this.resposta1.string = 'TCP';
        
        this.resposta2.string = 'IP';
        
        this.resposta3.string = 'Ethernet';
        
        this.resposta4.string = 'HTTP';
        } else if(this.contador == 4){
        this.someResposta();
        this.trocaRespostas();
        //modificar a pergunta
        //pra que que serve o protocolo DNS.
        this.pergunta.string = 'O que significa\n um código de status HTTP de "404"?';
        
        this.resposta1.string = 'Erro de protocolo ';
        
        this.resposta2.string = 'Documento foi movido ';
        
        this.resposta3.string = 'Recuperação bem sucedida do documento';
        
        this.resposta4.string = 'Documento não encontrado ';
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
