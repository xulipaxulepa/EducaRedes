"use strict";
cc._RF.push(module, '3082eOKgbVGYbUqDWKxl0Xh', 'quizFase5');
// scripts/quiz fases/quizFase5.js

'use strict';

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

        saiAnimacao: 0
    },

    someResposta: function someResposta() {
        this.respostaErrada1.setOpacity(0);
        this.respostaErrada2.setOpacity(0);
        this.respostaErrada3.setOpacity(0);
        this.respostaExtra.setOpacity(0);
        this.respostaCerta.setOpacity(0);
    },

    mostraResposta: function mostraResposta() {
        this.respostaErrada1.setOpacity(255);
        this.respostaErrada2.setOpacity(255);
        this.respostaErrada3.setOpacity(255);
        this.respostaExtra.setOpacity(255);
        this.respostaCerta.setOpacity(255);
    },

    trocaRespostas: function trocaRespostas() {
        if (this.contador == 1) {
            this.respostaCerta.setPositionY(-18); //segunda opçao
        } else if (this.contador == 2) {
            this.respostaCerta.setPositionY(-258); //ultima opçao
        } else if (this.contador == 3) {
            this.respostaCerta.setPositionY(-146); //terceira opçao
        } else if (this.contador == 4) {
            this.respostaCerta.setPositionY(-146); //terceira opçao
        } else if (this.contador == 5) {
            this.respostaCerta.setPositionY(112); //primeira opçao
        } else if (this.contador == 6) {
            this.respostaCerta.setPositionY(-18); //segunda opçao
        } else if (this.contador == 7) {
            this.respostaCerta.setPositionY(112); //primeira opçao
        } else if (this.contador == 8) {
            this.respostaCerta.setPositionY(-258); //ultima opçao
        } else if (this.contador == 9) {
            this.respostaCerta.setPositionY(-18); //segunda opçao
        }
    },

    perguntas: function perguntas() {
        if (this.contador === 0) {
            this.apareceRespostas();
            this.someResposta();
            this.pergunta.string = 'Questao 1:\nQual protocolo é responsável por resolver\n' + 'o mapeamento entre os endereço IP\n' + 'e os endereços MAC da rede?';

            this.resposta1.string = 'TCP';

            this.resposta2.string = 'DHCP';

            this.resposta3.string = 'ARP'; //correta

            this.resposta4.string = 'DNS';
        } else if (this.contador == 1) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 2:\nAssinale a alternativa que representa\n' + 'o tamanho em bytes dos campos de\n' + 'endereço MAC, IPv4 e IPv6\n respectivamente.';

            this.resposta1.string = '4, 6, 16';

            this.resposta2.string = '6, 4, 16'; //correta

            this.resposta3.string = '48, 32, 128';

            this.resposta4.string = '16, 32, 64';
        } else if (this.contador == 2) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 3:\nNa pilha TCP/IP, a função de enviar ao\n' + 'transmissor da informação uma confirmação\n' + 'de recebimento da mensagem(ack)\n é realizada pela camada:';

            this.resposta1.string = 'Internet';

            this.resposta2.string = 'Acesso a rede';

            this.resposta3.string = 'Aplicaçao';

            this.resposta4.string = 'Transporte'; //correta
        } else if (this.contador == 3) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 4:\nAssinale a alternativa que contém\n' + ' protocolos das camadas de enlace, rede\n' + 'transporte e aplicação respectivamente\n da pilha de protocolos TCP/IP.';

            this.resposta1.string = 'ARP, IP, TCP, IP';

            this.resposta2.string = 'Ethernet, PPP, UDP, SSH';

            this.resposta3.string = 'PPP, ICMP, UDP, SNMP'; //correta

            this.resposta4.string = 'Ethernet, DNS, TCP, SMTP';
        } else if (this.contador == 4) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 5:\nO endereço de um recurso\n' + ' disponível em uma rede seja na Internet \n' + 'ou numa rede corporativa Intranet\n tem a seguinte estrutura:';

            this.resposta1.string = 'protocolo://caminho/recurso/máquina. ';

            this.resposta2.string = 'protocolo://caminho/máquina/recurso. ';

            this.resposta3.string = 'protocolo://máquina/caminho/recurso. '; //correto

            this.resposta4.string = 'máquina://protocolo/caminho/recurso. ';
        } else if (this.contador == 5) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 6:\nNa classe padrão C\n' + 'quantos bytes são reservados para redes?';

            this.resposta1.string = '03 bytes'; //correto

            this.resposta2.string = '02 bytes';

            this.resposta3.string = '01 byte';

            this.resposta4.string = '04 bytes';
        } else if (this.contador == 6) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 7:\nComo é denominado o protocolo\n' + 'de configuração dinâmica de IP?';

            this.resposta1.string = 'FTP';

            this.resposta2.string = 'DHCP'; //correto

            this.resposta3.string = 'HTTP';

            this.resposta4.string = 'DNS';
        } else if (this.contador == 7) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 8:\nQual destes protocolos é mais rápido\n' + 'porém menos confiável?';

            this.resposta1.string = 'UDP'; //correto

            this.resposta2.string = 'FTP';

            this.resposta3.string = 'SSH';

            this.resposta4.string = 'TCP';
        } else if (this.contador == 8) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 9:\nQual é a classe de endereço IP\n' + 'que utiliza a máscara padrão 255.255.0.0?';

            this.resposta1.string = 'A';

            this.resposta2.string = 'D';

            this.resposta3.string = 'C';

            this.resposta4.string = 'B'; //correta
        } else if (this.contador == 9) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 10:\nO conjunto formado por um endereço IP\n' + 'e um número de porta constitui:';

            this.resposta1.string = 'Uma conexao';

            this.resposta2.string = 'Um socket'; //correta

            this.resposta3.string = 'Um datagrama';

            this.resposta4.string = 'O endereço de gateway';
        }
    },

    buttonRespCerto: function buttonRespCerto() {
        this.timer = 3;
        this.saiAnimacao = 1;
        this.respCer += 1;
        this.contador += 1;
    },

    buttonRespErrado: function buttonRespErrado() {
        this.timer = 3;
        this.saiAnimacao = 1;
        this.respErr += 1;
        this.contador += 1;
    },

    gameover: function gameover() {
        this.telaFinalQuiz.setPositionX(0);
        if (this.respCer >= 7) {
            this.buttonTryAgain.destroy();
            this.gameOver.string = 'Parabéns!\n' + 'Você passou no Quiz!';
        } else {
            this.gameOver.string = 'Ah! que pena!\n' + 'Você não passou no Quiz!\n' + 'tente novamente!';
        }

        this.respostasCertas.string = 'Respostas corretas: ' + this.respCer;

        this.respostasErradas.string = 'Respostas Erradas: ' + this.respErr;
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.play(this.gameAudio, true);
        this.someResposta();
        this.timer = 100000;
        this.contador = 0;
        this.saiAnimacao = 0;
        this.respCer = 0;
        this.respErr = 0;
        this.perguntas();
    },

    onDestroy: function onDestroy() {
        cc.audioEngine.pauseAll();
    },

    goToCredits: function goToCredits() {
        cc.director.loadScene("credits");
    },

    apareceRespostas: function apareceRespostas() {
        if (this.saiAnimacao == 1) {
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
            respErrada1.playAdditive('apareceResposta1');
            respErrada2.playAdditive('apareceResposta2');
            respErrada3.playAdditive('apareceResposta3');
            respErrada4.playAdditive('apareceResposta4');
            resp1.playAdditive('apareceResposta1');
            resp2.playAdditive('apareceResposta2');
            resp3.playAdditive('apareceResposta3');
            resp4.playAdditive('apareceResposta4');
            fala.playAdditive('apareceFalaProfessor');
        } else if (this.saiAnimacao === 0) {}
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.timer == 3) {
            this.mostraResposta();
        } else if (this.timer < 1) {
            this.perguntas();
        } else if (this.contador == 10) {
            this.gameover();
        }

        this.timer -= dt;
    }
});

cc._RF.pop();