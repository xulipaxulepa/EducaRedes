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
            this.respostaCerta.setPositionY(-18);//segunda opçao
        } else if(this.contador == 2){
            this.respostaCerta.setPositionY(-258);//ultima opçao
        } else if(this.contador == 3){
            this.respostaCerta.setPositionY(-146);//terceira opçao
        } else if(this.contador == 4){
            this.respostaCerta.setPositionY(-146);//terceira opçao
        } else if(this.contador == 5){
            this.respostaCerta.setPositionY(112);//primeira opçao
        } else if(this.contador == 6){
            this.respostaCerta.setPositionY(-18);//segunda opçao
        } else if(this.contador == 7){
            this.respostaCerta.setPositionY(112);//primeira opçao
        } else if(this.contador == 8){
            this.respostaCerta.setPositionY(-258);//ultima opçao
        } else if(this.contador == 9){
            this.respostaCerta.setPositionY(-18);//segunda opçao
        }
    },
    
    perguntas: function(){
        if(this.contador === 0){
        this.someResposta();
        this.pergunta.string = 'Questao 1:Qual protocolo é responsável por resolver\n'+
        'o mapeamento entre os endereço IP\n'+
        'e os endereços MAC da rede?';
        
        this.resposta1.string = 'TCP';
        
        this.resposta2.string = 'DHCP';
        
        this.resposta3.string = 'ARP';//correta
        
        this.resposta4.string = 'DNS';
        } else if(this.contador == 1){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Questao 2:Assinale a alternativa que representa\n'+
        'o tamanho em bytes dos campos de endereço MAC\n'+
        'IPv4 e IPv6, respectivamente.';
        
        this.resposta1.string = '4, 6, 16';
        
        this.resposta2.string = '6, 4, 16';//correta
        
        this.resposta3.string = '48, 32, 128';
        
        this.resposta4.string = '16, 32, 64';
        } else if(this.contador == 2){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Questao 3: Na pilha TCP/IP, a função de enviar\n'+
        'ao transmissor da informação uma confirmação\n'+
        'de recebimento da mensagem(ack) é realizada pela camada:';
        
        this.resposta1.string = 'Transporte';
        
        this.resposta2.string = 'Acesso a rede';
        
        this.resposta3.string = 'Aplicaçao';
        
        this.resposta4.string = 'Internet';//correta
        } else if(this.contador == 3){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Questao 4: Assinale a alternativa que contém protocolos\n'+
        'das camadas de enlace, rede, transporte e aplicação\n'+
        'respectivamente, da pilha de protocolos TCP/IP.';
        
        this.resposta1.string = 'ARP, IP, TCP, IP';
        
        this.resposta2.string = 'PPP, ICMP, UDP, SNMP';
        
        this.resposta3.string = 'Ethernet, PPP, UDP, SSH';//correta
        
        this.resposta4.string = 'Ethernet, DNS, TCP, SMTP';
        } else if(this.contador == 4){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Questao 5: O endereço de um recurso disponível em uma rede\n'+
        'seja na Internet ou numa rede corporativa Intranet\n'+
        'tem a seguinte estrutura:';
        
        this.resposta1.string = 'protocolo://caminho/recurso/máquina. ';
        
        this.resposta2.string = 'protocolo://caminho/máquina/recurso. ';
        
        this.resposta3.string = 'protocolo://máquina/caminho/recurso. ';//correto
        
        this.resposta4.string = 'máquina://protocolo/caminho/recurso. ';
        } else if(this.contador == 5){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Questao 6: Na classe padrão C\n'+
        'quantos bytes são reservados para redes?';
        
        this.resposta1.string = '01 byte';//correto
        
        this.resposta2.string = '02 bytes';
        
        this.resposta3.string = '03 bytes';
        
        this.resposta4.string = '04 bytes';
        } else if(this.contador == 6){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Questao 7: Como é denominado o protocolo\n'+ 
        'de configuração dinâmica de IP?';
        
        this.resposta1.string = 'FTP';
        
        this.resposta2.string = 'DHCP';//correto
        
        this.resposta3.string = 'HTTP';
        
        this.resposta4.string = 'DNS';
        } else if(this.contador == 7){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Questao 8: Qual detses protocolos é mais rápido\n'+
        'porém menos confiável?';
        
        this.resposta1.string = 'UDP';//correto
        
        this.resposta2.string = 'FTP';
        
        this.resposta3.string = 'SSH';
        
        this.resposta4.string = 'TCP';
        } else if(this.contador == 8){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Questao 9: Qual é a classe de endereço IP\n'+
        'que utiliza a máscara padrão 255.255.0.0?';
        
        this.resposta1.string = 'A';
        
        this.resposta2.string = 'D';
        
        this.resposta3.string = 'C';
        
        this.resposta4.string = 'B';//correta
        } else if(this.contador == 9){
        this.someResposta();
        this.trocaRespostas();
        this.pergunta.string = 'Questao 10: O conjunto formado por um endereço IP\n'+
        'e um número de porta constitui:';
        
        this.resposta1.string = 'Uma conexao';
        
        this.resposta2.string = 'Um socket';//correta
        
        this.resposta3.string = 'Um datagrama';
        
        this.resposta4.string = 'O endereço de gateway';
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
        if(this.respCer>= 7){
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
    
    goToCredits: function(){
        cc.director.loadScene("credits");
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.timer == 3) {
            this.mostraResposta();
        } else if(this.timer < 1){
            this.perguntas();
        } else if(this.contador == 10){
            this.gameover();
        }
        
        this.timer -= dt;

    },
});
