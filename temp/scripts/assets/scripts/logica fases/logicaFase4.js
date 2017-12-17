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

        face1: {
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

        tutorial1: {
            default: null,
            type: cc.Node
        },

        tutorial2: {
            default: null,
            type: cc.Node
        },

        textoFase: {
            default: null,
            type: cc.Label
        },

        textWrapper: {
            default: null,
            type: cc.Node
        },

        moveLbl: {
            default: null,
            type: cc.Node
        },

        lblPontuacao: {
            default: null,
            type: cc.Label
        },

        lblErros: {
            default: null,
            type: cc.Label
        },

        gameAudio: {
            default: null,
            url: cc.AudioClip
        },

        pontuacao: 0,

        erros: 0,

        contTexto: 0,

        porta: 0,

        pergunta: 0,

        saiAnimacao: 0,

        tuto: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.play(this.gameAudio, true, 0.5);
        this.pontuacao = 0;
        this.erros = 0;
        this.contTexto = 0;
        this.pergunta = 0;
        this.saiAnimacao = 0;
        this.tuto = 0;
        this.moveLbl.setPosition(1300, 0);
        var face = this.face1.getComponent(cc.Animation);
        face.play("falaProfessor1");
        var professor = this.professor.getComponent(cc.Animation);
        professor.play("Aparece");
        var texto = this.textoFase.getComponent(cc.Animation);
        texto.playAdditive('ApareceTexto');
        this.textoFase.string = "A camada de transporte trabalha\n" + "com o conceito de soquetes(sockets)";
    },

    onDestroy: function onDestroy() {
        cc.audioEngine.pauseAll();
    },

    aparecePortas: function aparecePortas() {
        this.porta1.setPosition(-392, 149);
        this.porta2.setPosition(-213, 149);
        this.porta3.setPosition(-41, 149);
        this.porta4.setPosition(150, 149);
        this.porta5.setPosition(356, 149);
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

    jogar: function jogar() {
        if (this.tuto === 0) {
            this.professor.setPosition(1360, 0);
            this.textWrapper.setPosition(1360, 0);
            this.tutorial1.setPosition(0, 0);
            this.tuto += 1;
        } else if (this.tuto == 1) {
            this.tutorial1.setPosition(1300, 0);
            this.tutorial2.setPosition(0, 0);
            this.tuto += 1;
        } else {
            this.tutorial2.setPosition(1300, 0);
            this.aparecePortas();
            this.skype.setPosition(0, -237);
            this.moveLbl.setPosition(-407, -246);
            this.contTexto = 19;
            cc.audioEngine.setVolume(0, 1);
        }
    },

    trocaTexto1: function trocaTexto1() {
        var texto = this.textoFase.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face1.getComponent(cc.Animation);
        if (this.contTexto === 0) {
            texto.playAdditive('ApareceTexto');
            professor.play("moveProfessor");
            face.play("falaProfessor2");
            this.textoFase.string = "Um soquete de rede é um ponto final\n" + "de um fluxo de comunicação entre processos\n" + "através de uma rede de computadores. Hoje em dia \n" + "a maioria da comunicação entre computadores\n é baseada no IP";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor1");
            face.play("falaProfessor2");
            this.textoFase.string = "portanto a maioria dos soquetes de rede são soquetes IP.";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor2");
            face.play("falaProfessor1");
            this.textoFase.string = "Um endereço de soquete é a combinação de um \n" + "endereço de IP e um número da porta, parecido com o final\n" + "de uma conexão telefônica que é a combinação de um \nnúmero de telefone e uma determinada extensão.";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor1");
            face.play("falaProfessor1");
            this.textoFase.string = "Com base nesse endereço, soquetes de internet\n" + "entregam pacotes de dados de entrada para \n" + "o processo ou thread de aplicação apropriado.";
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
            texto.playAdditive('ApareceTexto');
            face.play("falaProfessor2");
            this.textoFase.string = "Inserido no conceito de sockets, temos o conceito de\n" + "portas";
            this.contTexto += 1;
        } else if (this.contTexto == 5) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor2");
            face.play("falaProfessor2");
            this.textoFase.string = "Porta é um ponto físico (hardware) ou lógico (software)\n" + "no qual podem ser feitas conexões, ou seja \n" + "um canal através do qual os dados são transferidos entre\n um dispositivo de entrada e o processador";
            this.contTexto += 1;
        } else if (this.contTexto == 6) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor1");
            face.play("falaProfessor1");
            this.textoFase.string = "ou entre o processador e um dispositivo de saída.\n" + "Ou acesso por dentro e por fora do computador.";
            this.contTexto += 1;
        } else if (this.contTexto == 7) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor2");
            face.play("falaProfessor2");
            this.textoFase.string = "Uma porta de software é uma conexão virtual\n" + "que pode ser usada na transmissão de dados.\n" + " As mais comuns são as portas protocoladas TCP e UDP";
            this.contTexto += 1;
        } else if (this.contTexto == 8) {
            texto.playAdditive('ApareceTexto');
            face.play("falaProfessor1");
            this.textoFase.string = "Algumas portas frequentemente usadas são:\n" + "Porta 80: para protocolos HTTP\n" + "Porta 81: Skype";
            this.contTexto += 1;
        } else if (this.contTexto == 9) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor1");
            face.play("falaProfessor2");
            this.textoFase.string = "Porta 20: para protocolos FTP\n" + "Porta 110: para serviços POP3(E-Mail)\n" + "Porta 3306: para o MySQL, entre vários outras";
            this.contTexto += 1;
        } else if (this.contTexto == 10) {
            texto.playAdditive('ApareceTexto');
            face.play("falaProfessor1");
            this.textoFase.string = "Com essa informação em mãos\n" + "vamos ao minijogo";
            this.contTexto += 1;
        } else if (this.contTexto == 11) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor2");
            face.play("falaProfessor2");
            this.textoFase.string = "Com os conhecimentos de portas passados até então\n" + "direcione o icone da aplicaçao para a porta correta\n" + "para isso, clique na porta para qual ele deve seguir";
            this.contTexto += 1;
        } else if (this.contTexto == 12) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor1");
            face.play("falaProfessor2");
            this.textoFase.string = "Faça a associação certa 5 vezes\n" + "para avançar para o quiz!\n" + "clique em continuar e boa sorte!";
            this.contTexto += 1;
        } else if (this.contTexto == 13) {
            this.jogar();
        } else if (this.contTexto == 19 && this.saiAnimacao == 2) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor1");
            face.play("falaProfessor2");
            this.textoFase.string = "Ahhh!!\n" + "Infelizmente você errou demais\n" + "clique em continuar e repita a fase";
            this.contTexto += 1;
        } else if (this.contTexto == 20 && this.saiAnimacao == 2) {
            cc.director.loadScene("jogoFase4");
        } else if (this.contTexto == 19) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor1");
            face.play("falaProfessor2");
            this.textoFase.string = "Parabéns!!\n" + "Você acertou as portas corretas!\n" + "clique em continuar e vá para o quiz!";
            this.contTexto += 1;
        } else if (this.contTexto == 20) {
            cc.director.loadScene("quizFase4");
        }
    },

    porta80: function porta80() {
        var valorporta = "80";
        var move = cc.moveTo(3, cc.p(-392, 149));
        var porta = this.porta1.getComponent(cc.Animation);
        porta.play('porta');
        this.mexeAplicacao(move);
        if (this.porta == valorporta) {
            this.pontuacao += 1;
            this.pergunta += 1;
        } else {
            this.pergunta += 1;
            this.erros += 1;
        }
    },

    porta81: function porta81() {
        var valorporta = "81";
        var move = cc.moveTo(3, cc.p(-213, 149));
        var porta = this.porta2.getComponent(cc.Animation);
        porta.play('porta');
        this.mexeAplicacao(move);
        if (this.porta == valorporta) {
            this.pontuacao += 1;
            this.pergunta += 1;
        } else {
            this.pergunta += 1;
            this.erros += 1;
        }
    },

    porta20: function porta20() {
        var valorporta = "20";
        var move = cc.moveTo(3, cc.p(-41, 149));
        var porta = this.porta3.getComponent(cc.Animation);
        porta.play('porta');
        this.mexeAplicacao(move);
        if (this.porta == valorporta) {
            this.pontuacao += 1;
            this.pergunta += 1;
        } else {
            this.pergunta += 1;
            this.erros += 1;
        }
    },

    porta110: function porta110() {
        var valorporta = "110";
        var move = cc.moveTo(3, cc.p(150, 149));
        var porta = this.porta4.getComponent(cc.Animation);
        porta.play('porta');
        this.mexeAplicacao(move);
        if (this.porta == valorporta) {
            this.pontuacao += 1;
            this.pergunta += 1;
        } else {
            this.pergunta += 1;
            this.erros += 1;
        }
    },

    porta118: function porta118() {
        var valorporta = "118";
        var move = cc.moveTo(3, cc.p(356, 149));
        var porta = this.porta5.getComponent(cc.Animation);
        porta.play('porta');
        this.mexeAplicacao(move);
        if (this.porta == valorporta) {
            this.pontuacao += 1;
            this.pergunta += 1;
        } else {
            this.pergunta += 1;
            this.erros += 1;
        }
    },

    mexeAplicacao: function mexeAplicacao(move) {
        var move2 = cc.moveTo(0, cc.p(1300, 0));
        if (this.porta == "81") {
            this.skype.runAction(cc.sequence(move, move2));
        } else if (this.porta == "80" && this.pergunta == 5) {
            this.firefox.runAction(cc.sequence(move, move2));
        } else if (this.porta == "80") {
            this.chrome.runAction(cc.sequence(move, move2));
        } else if (this.porta == "110") {
            this.thunderbird.runAction(cc.sequence(move, move2));
        } else if (this.porta == "20") {
            this.filezilla.runAction(cc.sequence(move, move2));
        } else if (this.porta == "118") {
            this.mysql.runAction(cc.sequence(move, move2));
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
            this.porta = "20";
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

    voltaTW: function voltaTW() {
        if (this.saiAnimacao === 0) {
            this.saiAnimacao = 1;
            this.professor.setPosition(-184, -131);
            var professor = this.professor.getComponent(cc.Animation);
            professor.play("Aparece");
            var TW = this.textWrapper.getComponent(cc.Animation);
            TW.play("apareceTW!");
        } else {}
    },

    gameOver: function gameOver() {
        if (this.saiAnimacao === 0) {
            this.saiAnimacao = 2;
            this.professor.setPosition(-184, -131);
            var professor = this.professor.getComponent(cc.Animation);
            professor.play("Aparece");
            var TW = this.textWrapper.getComponent(cc.Animation);
            TW.play("apareceTW!");
            this.moveLbl.setPosition(1300, 0);
        } else {}
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.mudaPergunta();

        if (this.pontuacao >= 5) {
            this.voltaTW();
            this.someIcones();
            this.somePortas();
        } else if (this.erros >= 5) {
            this.gameOver();
            this.someIcones();
            this.somePortas();
        }

        this.lblPontuacao.string = "Acertos: " + this.pontuacao;
        this.lblErros.string = "Erros: " + this.erros;
    }
});

cc._RF.pop();