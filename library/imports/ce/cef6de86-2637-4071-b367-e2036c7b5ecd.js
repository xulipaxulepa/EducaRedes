"use strict";
cc._RF.push(module, 'cef6d6GJjdAcbNn4gNse17N', 'logicaFase4');
// scripts/logica fases/logicaFase4.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        professor: {
            default: null,
            type: cc.Node
        },

        porta1: {
            default: null,
            type: cc.Node
        },

        porta2: {
            default: null,
            type: cc.Node
        },

        porta3: {
            default: null,
            type: cc.Node
        },

        porta4: {
            default: null,
            type: cc.Node
        },

        porta5: {
            default: null,
            type: cc.Node
        },

        chrome: {
            default: null,
            type: cc.Node
        },

        filezilla: {
            default: null,
            type: cc.Node
        },

        firefox: {
            default: null,
            type: cc.Node
        },

        skype: {
            default: null,
            type: cc.Node
        },

        thunderbird: {
            default: null,
            type: cc.Node
        },

        mysql: {
            default: null,
            type: cc.Node
        },

        textoFase: {
            default: null,
            type: cc.Label
        },

        lblPontuacao: {
            default: null,
            type: cc.Label
        },

        pontuacao: 0,

        contTexto: 0,

        porta: 0,

        pergunta: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.pontuacao = 0;
        this.contTexto = 0;
        this.pergunta = 0;
        this.textoFase.string = "A camada de transporte trabalha\n" + "com o conceito de soquetes(sockets)";
    },

    aparecePortas: function aparecePortas() {
        this.porta1.setPosition(-392, 172);
        this.porta2.setPosition(-213, 172);
        this.porta3.setPosition(-41, 172);
        this.porta4.setPosition(150, 172);
        this.porta5.setPosition(356, 172);
    },

    somePortas: function somePortas() {
        this.porta1.setPosition(-1349, 0);
        this.porta2.setPosition(-1349, 0);
        this.porta3.setPosition(-1349, 0);
        this.porta4.setPosition(-1349, 0);
        this.porta5.setPosition(-1349, 0);
    },

    someIcones: function someIcones() {
        this.skype.setPosition(-1360, 0);
        this.firefox.setPosition(-1360, 0);
        this.chrome.setPosition(-1360, 0);
        this.filezilla.setPosition(-1360, 0);
        this.thunderbird.setPosition(-1360, 0);
        this.mysql.setPosition(-1360, 0);
    },

    trocaTexto1: function trocaTexto1() {
        if (this.contTexto === 0) {
            this.textoFase.string = "Um soquete de rede é um ponto final de um fluxo de comunicação \n" + "entre processos através de uma rede de computadores. Hoje em dia\n" + "a maioria da comunicação entre computadores é baseada no IP";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            this.textoFase.string = "portanto a maioria dos soquetes de rede são soquetes IP.";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            this.textoFase.string = "Um endereço de soquete é a combinação de um endereço de IP e um\n" + "número da porta, parecido com o final de uma conexão telefônica que é\n" + "a combinação de um número de telefone e uma determinada extensão.";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            this.textoFase.string = "Com base nesse endereço, soquetes de internet\n" + "entregam pacotes de dados de entrada para o processo ou thread\n" + "de aplicação apropriado.";
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
            this.textoFase.string = "Inserido no conceito de sockets, temos o conceito de\n" + "portas";
            this.contTexto += 1;
        } else if (this.contTexto == 5) {
            this.textoFase.string = "Porta é um ponto físico (hardware) ou lógico (software) no qual\n" + "podem ser feitas conexões, ou seja, um canal através do qual os dados\n" + "são transferidos entre um dispositivo de entrada e o processador";
            this.contTexto += 1;
        } else if (this.contTexto == 6) {
            this.textoFase.string = "ou entre o processador e um dispositivo de saída.\n" + "Ou acesso por dentro e por fora do computador.";
            this.contTexto += 1;
        } else if (this.contTexto == 7) {
            this.textoFase.string = "Uma porta de software é uma conexão virtual\n" + "que pode ser usada na transmissão de dados. As mais comuns são\n" + "as portas protocoladas TCP e UDP";
            this.contTexto += 1;
        } else if (this.contTexto == 8) {
            this.textoFase.string = "Algumas portas frequentemente usadas são:\n" + "Porta 80: para protocolos HTTP\n" + "Porta 81: Skype";
            this.contTexto += 1;
        } else if (this.contTexto == 9) {
            this.textoFase.string = "Porta 20: para protocolos FTP\n" + "Porta 110: para serviços POP3(E-Mail)\n" + "Porta 118: para o SQL, entre vários outras";
            this.contTexto += 1;
        } else if (this.contTexto == 10) {
            this.textoFase.string = "Com essa informação em mãos\n" + "vamos ao mini-jogo";
            this.contTexto += 1;
        } else if (this.contTexto == 11) {
            this.textoFase.string = "Com os conhecimentos de portas passados até entao\n" + "direcione o icone da aplicaçao para a porta correta\n" + "para isso, clique na porta para qual ele deve seguir";
            this.contTexto += 1;
        } else if (this.contTexto == 12) {
            this.textoFase.string = "Faça a associação certa 5 vezes\n" + "para avançar para o quiz!\n" + "clique em continuar e boa sorte!";
            this.contTexto += 1;
        } else if (this.contTexto == 13) {
            this.aparecePortas();
            this.professor.setPosition(1360, 0);
            this.skype.setPosition(0, -237);
            this.contTexto = 19;
        } else if (this.contTexto == 19) {
            this.textoFase.string = "Parabéns!!\n" + "Você acertou as portas corretas!\n" + "clique em continuar e vá para o quiz!";
            this.contTexto += 1;
        } else if (this.contTexto == 20) {
            cc.director.loadScene("quizFase4");
        }
    },

    porta80: function porta80() {
        var valorporta = "80";
        if (this.porta == valorporta) {
            this.pontuacao += 1;
            this.pergunta += 1;
            this.someIcones();
        } else {
            this.pergunta += 1;
            this.someIcones();
        }
    },

    porta81: function porta81() {
        var valorporta = "81";
        if (this.porta == valorporta) {
            this.pontuacao += 1;
            this.pergunta += 1;
            this.someIcones();
        } else {
            this.pergunta += 1;
            this.someIcones();
        }
    },

    porta20: function porta20() {
        var valorporta = "20";
        if (this.porta == valorporta) {
            this.pontuacao += 1;
            this.pergunta += 1;
            this.someIcones();
        } else {
            this.pergunta += 1;
            this.someIcones();
        }
    },

    porta110: function porta110() {
        var valorporta = "110";
        if (this.porta == valorporta) {
            this.pontuacao += 1;
            this.pergunta += 1;
            this.someIcones();
        } else {
            this.pergunta += 1;
            this.someIcones();
        }
    },

    porta118: function porta118() {
        var valorporta = "118";
        if (this.porta == valorporta) {
            this.pontuacao += 1;
            this.pergunta += 1;
            this.someIcones();
        } else {
            this.pergunta += 1;
            this.someIcones();
        }
    },

    mudaPergunta: function mudaPergunta() {
        if (this.pergunta === 0) {
            this.porta = "81";
        } else if (this.pergunta == 1) {
            this.porta = "80";
            this.chrome.setPosition(0, -237);
        } else if (this.pergunta == 2) {
            this.porta = "110";
            this.thunderbird.setPosition(0, -237);
        } else if (this.pergunta == 3) {
            this.porta = "20";
            this.filezilla.setPosition(0, -237);
        } else if (this.pergunta == 4) {
            this.porta = "81";
            this.skype.setPosition(0, -237);
        } else if (this.pergunta == 5) {
            this.porta = "80";
            this.firefox.setPosition(0, -237);
        } else if (this.pergunta == 6) {
            this.porta = "118";
            this.mysql.setPosition(0, -237);
        } else if (this.pergunta == 7) {
            this.porta = "81";
            this.filezilla.setPosition(0, -237);
        } else if (this.pergunta == 8) {
            this.porta = "80";
            this.chrome.setPosition(0, -237);
        } else if (this.pergunta == 9) {
            this.porta = "81";
            this.skype.setPosition(0, -237);
        } else if (this.pergunta == 10) {
            this.porta = "110";
            this.thunderbird.setPosition(0, -237);
            this.pergunta = 0;
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.mudaPergunta();

        if (this.pontuacao >= 5) {
            this.professor.setPosition(-184, 0);
            this.someIcones();
            this.somePortas();
        }

        this.lblPontuacao.string = "Acertos: " + this.pontuacao;
    }
});

cc._RF.pop();