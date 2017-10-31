"use strict";
cc._RF.push(module, '2b869A22TdA5pCE7eonM2Yc', 'btnContFase1');
// scripts/buttons/buttons dialogues/btnContFase1.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },

        quadro: {
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

        gameAudio: {
            default: null,
            url: cc.AudioClip
        },

        contador: 0
    },

    btnVolta: function btnVolta() {
        this.contador = this.contador - 1;
        this.mudaTexto();
    },

    mudaTexto: function mudaTexto() {
        var texto = this.label.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face.getComponent(cc.Animation);

        if (this.contador === 0) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('moveProfessor');
            var animaFace = face.play("falaProfessor2");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.label.string = 'Rede de computadores \n' + 'é Sistema de comunicação de dados \n' + 'constituído através da interligação entre\n' + 'computadores e outros dispositivos';
            this.contador += 1;
        } else if (this.contador == 1) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'distribuídos geograficamente, com a finalidade\n' + 'de trocar informações e compartilhar recursos';
            this.contador += 1;
        } else if (this.contador == 2) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'Para entendermos melhor a rede de computadores\n' + 'precisamos conhecer\n' + 'O modelo logico OSI\n' + 'e a arquitetura TCP/IP';
            this.contador += 1;
        } else if (this.contador == 3) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor1');
            animaFace = face.play("falaProfessor3");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.label.string = 'O modelo OSI se baseia em uma proposta desenvolvida\n' + 'pela ISO (International Standards Organization)\n' + 'como um primeiro passo em direção à padronização\n' + 'internacional dos protocolos empregados \n' + 'nas diversas camadas';
            this.contador += 1;
        } else if (this.contador == 4) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'O modelo OSI possui 7 camadas, são elas:\n' + 'Física\n' + 'Enlace\n' + 'Redes';
            this.contador += 1;
        } else if (this.contador == 5) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'Transporte\n' + 'Sessão\n' + 'Apresentação\n' + 'Aplicação';
            this.contador += 1;
        } else if (this.contador == 6) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor2');
            animaFace = face.play("falaProfessor1");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.label.string = 'Do modelo logico OSI surgiu a arquitetura TCP/IP\n' + 'O modelo TCP/IP descreve um conjunto de orientações\n' + 'gerais para a concepção e implementação';
            this.contador += 1;
        } else if (this.contador == 7) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'de protocolos de rede específicos\n' + 'para permitir que haja\n' + 'comunicação através de uma rede.';
            this.contador += 1;
        } else if (this.contador == 8) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor1');
            this.label.string = 'A imagem acima demonstra as peculiaridades\n' + 'de um modelo para o outro';
            this.quadro.setPosition(222, 139);
            this.contador += 1;
        } else if (this.contador == 9) {
            texto.playAdditive('ApareceTexto');
            animaFace = face.play("falaProfessor2");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.label.string = 'Como pode ser visto, a arquitetura TCP/IP\n' + 'Possui 4 camadas e eu irei explicar sobre a primeira';
            this.contador += 1;
        } else if (this.contador == 10) {
            texto.playAdditive('ApareceTexto');
            this.quadro.setPosition(1360, 139);
            professor.playAdditive('animaProfessor2');
            this.label.string = 'A camada de acesso a rede\n' + 'tem como um dos objetivos\n' + 'gerar e transmitir o sinal pelo meio. Seja a tecnologia\n' + 'Ethernet, Wi-fi, Bluetooth, entre outros.';
            this.contador += 1;
        } else if (this.contador == 11) {
            texto.playAdditive('ApareceTexto');
            animaFace = face.play("falaProfessor3");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.label.string = 'Um dos serviços dessa camada é a modulação\n' + 'da informação através de um sinal\n' + 'analógico ou digital';
            this.contador += 1;
        } else if (this.contador == 12) {
            texto.playAdditive('ApareceTexto');
            animaFace = face.play("falaProfessor1");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            professor.playAdditive('moveProfessor2');
            this.label.string = 'O mini-jogo a seguir, demonstra melhor\n' + 'a diferença entre os sinais e os seus conceitos';
            this.contador += 1;
        } else if (this.contador == 13) {
            cc.director.loadScene("jogoFase1");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.play(this.gameAudio, true);
        this.contador = 0;
        var texto = this.label.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face.getComponent(cc.Animation);
        var animaFace = face.play("falaProfessor1");
        animaFace.speed = 0.5;
        animaFace.repeatCount = Infinity;
        texto.playAdditive('ApareceTexto');
        professor.playAdditive('Aparece');
        this.label.string = 'Ola, eu sou o professor Sinaldo!\n' + 'Eu vou te ensinar sobre rede de computadores\n' + 'arquitetura TCP/IP e a camada de acesso a rede';
    },

    onDestroy: function onDestroy() {
        cc.audioEngine.pauseAll();
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {}
});

cc._RF.pop();