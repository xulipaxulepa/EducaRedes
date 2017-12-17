"use strict";
cc._RF.push(module, 'a3a26F4L01KDIVBtmM1UXE4', 'logicaFase2');
// scripts/logica fases/logicaFase2.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        professor: {
            default: null,
            type: cc.Node
        },

        face: {
            default: null,
            type: cc.Node
        },

        textoFase: {
            default: null,
            type: cc.Label
        },

        bg: {
            default: null,
            type: cc.Node
        },

        no1: {
            default: null,
            type: cc.Node
        },

        no2: {
            default: null,
            type: cc.Node
        },

        no3: {
            default: null,
            type: cc.Node
        },

        no4: {
            default: null,
            type: cc.Node
        },

        no5: {
            default: null,
            type: cc.Node
        },

        no6: {
            default: null,
            type: cc.Node
        },

        no1a: {
            default: null,
            type: cc.Node
        },

        no2a: {
            default: null,
            type: cc.Node
        },

        no3a: {
            default: null,
            type: cc.Node
        },

        no4a: {
            default: null,
            type: cc.Node
        },

        no5a: {
            default: null,
            type: cc.Node
        },

        no6a: {
            default: null,
            type: cc.Node
        },

        no1aLinha: {
            default: null,
            type: cc.Node
        },

        tabRot: {
            default: null,
            type: cc.Node
        },

        lblNo1: {
            default: null,
            type: cc.Label
        },

        btnRealizarSalto1: {
            default: null,
            type: cc.Node
        },

        btnRealizarSalto2: {
            default: null,
            type: cc.Node
        },

        btnRealizarSalto3: {
            default: null,
            type: cc.Node
        },

        btnRealizarSalto4: {
            default: null,
            type: cc.Node
        },

        btnRealizarSalto5: {
            default: null,
            type: cc.Node
        },

        btnRealizarSalto6: {
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

        score: {
            default: null,
            type: cc.Label
        },

        professorFrente: {
            default: null,
            type: cc.Node
        },

        textWrapperFrente: {
            default: null,
            type: cc.Node
        },

        modeloRede: {
            default: null,
            type: cc.Node
        },

        textoFase1: {
            default: null,
            type: cc.Label
        },

        tutorial1: {
            default: null,
            type: cc.Node
        },

        tutorial2: {
            default: null,
            type: cc.Node
        },

        tutorial3: {
            default: null,
            type: cc.Node
        },

        btnJogar: {
            default: null,
            type: cc.Node
        },

        gameAudio: {
            default: null,
            url: cc.AudioClip
        },

        saltos: 0,

        pontuacao: 0,

        contTexto: 0,

        tuto: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.play(this.gameAudio, true, 0.5);
        this.player.setPosition(1360, 0);
        this.pontuacao = 0;
        this.contTexto = 0;
        this.saltos = 5;
        this.tuto = 1;
        this.btnJogar.setPosition(1300, -206);
        this.score.string = this.saltos;
        this.someNos();
        var face = this.face.getComponent(cc.Animation);
        face.play("falaProfessor2");
        var professora = this.professor.getComponent(cc.Animation);
        professora.play("Aparece");
        var texto = this.textoFase.getComponent(cc.Animation);
        texto.playAdditive('ApareceTexto');
        this.textoFase.string = "Nesse Minijogo, você aprendera a rotear\n" + "pacotes IPs";
    },

    onDestroy: function onDestroy() {
        cc.audioEngine.pauseAll();
    },

    someNos: function someNos() {
        this.no1.setPosition(1360, 0);
        this.no2.setPosition(1360, 0);
        this.no3.setPosition(1360, 0);
        this.no4.setPosition(1360, 0);
        this.no5.setPosition(1360, 0);
        this.no6.setPosition(1360, 0);
    },

    someRealizaSalto: function someRealizaSalto() {
        this.btnRealizarSalto1.setPosition(895, -108);
        this.btnRealizarSalto2.setPosition(895, -108);
        this.btnRealizarSalto3.setPosition(895, -108);
        this.btnRealizarSalto4.setPosition(895, -108);
        this.btnRealizarSalto5.setPosition(895, -108);
        this.btnRealizarSalto6.setPosition(895, -108);
    },

    apareceNos: function apareceNos() {
        this.no1a.setPosition(-240, -181);
        this.no2a.setPosition(-181, -6);
        this.no3a.setPosition(-15, -181);
        this.no4a.setPosition(12, -27);
        this.no5a.setPosition(-39, 103);
        this.no6a.setPosition(193, 115);
    },

    apareceNosLinha: function apareceNosLinha() {
        this.no1aLinha.setOpacity(255);
    },

    movePlayer: function movePlayer(x, y) {
        var move = cc.moveTo(3, cc.p(x, y));
        //this.player.runAction(move);
        return move;
    },

    criaLinha: function criaLinha() {
        var novaLinha = cc.instantiate(this.linha);
        this.bg.addChild(novaLinha);
        novaLinha.setPosition(this.player.getPosition());
    },

    jogar: function jogar() {
        if (this.tuto == 1) {
            this.tutorial1.setOpacity(0);
            this.tutorial2.setOpacity(255);
            this.tuto += 1;
        } else if (this.tuto == 2) {
            this.tutorial2.setOpacity(0);
            this.tutorial3.setOpacity(255);
            this.tuto += 1;
            var score = this.score.getComponent(cc.Animation);
            score.play("apareceScore");
            this.no1.setPosition(-240, -181);
            this.player.setPosition(-210, -154);
        } else if (this.tuto == 3) {
            cc.audioEngine.setVolume(0, 1);
            this.btnJogar.setPosition(1300, -206);
            this.tutorial3.setOpacity(0);
            this.apareceNos();
            this.apareceNosLinha();
        }
    },

    trocaTexto1: function trocaTexto1() {
        var professora = this.professor.getComponent(cc.Animation);
        var texto = this.textoFase.getComponent(cc.Animation);
        if (this.contTexto === 0) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-1");
            this.textoFase.string = "Os roteadores são utilizados para interligar\n" + "as redes físicas entre si. Eles oferecem\n" + "múltiplos caminhos para interconectar\n" + "as redes físicas.";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-2");
            this.textoFase.string = "As tabelas de roteamento indicam para cada roteador\n" + "como ele deve encaminhar um pacote a fim de que\n" + "este chegue a uma certa rede física de destino.";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            texto.playAdditive('ApareceTexto');
            professora.play("moveProfessora2-3");
            this.textoFase.string = "As tabelas de roteamento são preenchidas\n" + "automaticamente, através de protocolos\n" + "de roteamento padronizados\n" + "como o BGP (Border Gateway Protocol)";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-1");
            this.textoFase.string = "Veja agora um exemplo de rede!";
            this.modeloRede.setOpacity(255);
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "O cenário acima demonstra uma rede\n" + "com 6 roteadores, cada um deles com sua tabela\n" + "de roteamento";
            this.contTexto += 1;
        } else if (this.contTexto == 5) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-2");
            this.textoFase.string = "No papel de um pacote, você terá\n" + "5 saltos para sair do nó 1 e chegar ao nó 6!\n" + "caso contrário, a mensagem será perdida";
            this.modeloRede.setOpacity(0);
            this.contTexto += 1;
        } else if (this.contTexto == 6) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-1");
            this.textoFase.string = "Cada salto possui um custo\n" + "Usaremos nesse exemplo, o número de saltos\n" + "para se alcançar determinado nó";
            this.modeloRede.setOpacity(0);
            this.contTexto += 1;
        } else if (this.contTexto == 7) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-2");
            this.textoFase.string = "Tente chegar ao nó 6\n" + "com o menor custo possível\n" + "atente-se aos saltos necessários";
            this.modeloRede.setOpacity(0);
            this.contTexto += 1;
        } else if (this.contTexto == 8) {
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "clique em continuar e boa sorte!!";
            this.contTexto += 1;
        } else if (this.contTexto == 9) {
            this.tutorial1.setOpacity(255);
            this.btnJogar.setPosition(0, -206);
            this.bg.setOpacity(255);
            this.textoFase1.string = "Parabéns, você chegou ao nó 6!\n" + "apesar de bastante simplificado\n" + "o minijogo demonstrou como uma \n" + "informação trafega em diversas redes!";
            this.contTexto += 1;
        } else if (this.contTexto == 20) {
            texto.playAdditive('ApareceTexto');
            this.textoFase1.string = "Com as informações passadas nesta fase\n" + "responda agora o Quiz!\n" + "clique em continuar e boa sorte!";
            this.contTexto += 1;
        } else if (this.contTexto == 21) {
            cc.director.loadScene("quizFase2");
        } else if (this.contTexto == 10) {
            this.contTexto += 1;
        } else if (this.contTexto == 11) {
            cc.director.loadScene("jogoFase2");
        }
    },

    buttonNo1: function buttonNo1() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 6         6\n" + "\n" + "\n" + "No 3         1";
        this.someRealizaSalto();
        this.btnRealizarSalto6.setPosition(0, -108);
        this.btnRealizarSalto3.setPosition(0, -202);
    },

    buttonNo2: function buttonNo2() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 5         2\n" + "\n" + "\n" + "No 6         1";
        this.someRealizaSalto();
        this.btnRealizarSalto5.setPosition(0, -108);
        this.btnRealizarSalto6.setPosition(0, -202);
    },

    buttonNo3: function buttonNo3() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 5         1\n" + "\n" + "\n" + "No 2         2";
        this.someRealizaSalto();
        this.btnRealizarSalto5.setPosition(0, -108);
        this.btnRealizarSalto2.setPosition(0, -202);
    },

    buttonNo4: function buttonNo4() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 5         1\n" + "\n" + "\n" + "No 2         1";
        this.someRealizaSalto();
        this.btnRealizarSalto5.setPosition(0, -108);
        this.btnRealizarSalto2.setPosition(0, -202);
    },

    buttonNo5: function buttonNo5() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 4         1\n" + "\n" + "\n" + "No 6         2";
        this.someRealizaSalto();
        this.btnRealizarSalto4.setPosition(0, -108);
        this.btnRealizarSalto6.setPosition(0, -202);
    },

    buttonNo6: function buttonNo6() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 5         70%\n" + "\n" + "\n" + "";
        this.someRealizaSalto();
        this.btnRealizarSalto5.setPosition(0, -108);
    },

    buttonSalto1: function buttonSalto1() {
        //this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no1.setPosition(-240, -181);
        this.saltos -= 1;
        this.movePlayer(-240, -181);
    },

    buttonSalto2: function buttonSalto2() {
        //this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no2.setPosition(-181, -6);
        if (this.player.x == 12) {
            this.saltos -= 1;
            var move2 = this.movePlayer(-181, -6);
            this.player.runAction(move2);
        } else {
            this.saltos -= 2;
            var move2 = this.movePlayer(-181, -6);
            this.player.runAction(move2);
        }
    },

    buttonSalto3: function buttonSalto3() {
        //this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no3.setPosition(-15, -181);
        this.saltos -= 1;
        var move = this.movePlayer(-15, -181);
        this.player.runAction(move);
    },

    buttonSalto4: function buttonSalto4() {
        //this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no4.setPosition(12, -27);
        this.saltos -= 1;
        var move = this.movePlayer(12, -27);
        this.player.runAction(move);
    },

    buttonSalto5: function buttonSalto5() {
        //this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no5.setPosition(-39, 103);
        if (this.player.x == -15) {
            this.saltos -= 1;
            var move1 = this.movePlayer(-39, 103);
            this.player.runAction(move1);
        } else if (this.player.x == 12) {
            this.saltos -= 1;
            var move2 = this.movePlayer(-39, 103);
            this.player.runAction(move2);
        } else {
            this.saltos -= 2;
            var move2 = this.movePlayer(-39, 103);
            this.player.runAction(move2);
        }
    },

    buttonSalto6: function buttonSalto6() {
        //this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no6.setPosition(193, 115);
        if (this.player.x == -210) {
            this.saltos -= 5;
            var move6 = this.movePlayer(193, 115);
            this.player.runAction(move6);
        } else if (this.player.x == -39) {
            this.saltos -= 2;
            var move2 = this.movePlayer(193, 115);
            this.player.runAction(move2);
        } else {
            this.saltos -= 1;
            var move6 = this.movePlayer(193, 115);
            this.player.runAction(move6);
        }
        if (this.saltos > 0) {
            var profFrente = this.professorFrente.getComponent(cc.Animation);
            profFrente.play("moveProfessorFrente");
            var twfrente = this.textWrapperFrente.getComponent(cc.Animation);
            twfrente.play("moveTWFrente");
            this.contTexto = 20;
        }
    },

    gameOver: function gameOver() {
        this.saltos = 1;
        var score = this.score.getComponent(cc.Animation);
        score.play("someScore");
        var profFrente = this.professorFrente.getComponent(cc.Animation);
        profFrente.play("moveProfessorFrente");
        var twfrente = this.textWrapperFrente.getComponent(cc.Animation);
        twfrente.play("moveTWFrente");
        //this.contTexto = 20;
        this.someNos();
        this.textoFase1.string = "Infelizmente a mensagem se perdeu\n" + "Saltos insuficientes para chegar ao destino\n" + 'clique em continuar e tente novamente!';
        if (this.contTexto == 9) {
            cc.director.loadScene("jogoFase2");
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.criaLinha();

        if (this.saltos <= 0) {
            this.gameOver();
        }

        this.score.string = "Saltos: " + this.saltos;
    }
});

cc._RF.pop();