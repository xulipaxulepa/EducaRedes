"use strict";
cc._RF.push(module, '50dd6EXQ4dK1abMt/33PoSO', 'btnContFase5');
// scripts/buttons/buttons dialogues/btnContFase5.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },

        professor1: {
            default: null,
            type: cc.Node
        },

        professor2: {
            default: null,
            type: cc.Node
        },

        professor3: {
            default: null,
            type: cc.Node
        },

        professor4: {
            default: null,
            type: cc.Node
        },

        gameAudio: {
            default: null,
            url: cc.AudioClip
        },

        contador: 0
    },

    mudaTexto: function mudaTexto() {
        var texto = this.label.getComponent(cc.Animation);
        var prof1 = this.professor1.getComponent(cc.Animation);
        var prof2 = this.professor2.getComponent(cc.Animation);
        var prof3 = this.professor3.getComponent(cc.Animation);
        var prof4 = this.professor4.getComponent(cc.Animation);
        if (this.contador === 0) {
            this.professor1.setPosition(-1300, 0);
            this.professor2.setPosition(-129, -89);
            prof2.playAdditive('Aparece');
            texto.playAdditive('ApareceTexto');
            this.label.string = 'O teste final consiste de um quiz com 10 perguntas\n' + 'referentes as 4 camadas da arquitetura TCP/IP';
            this.contador += 1;
        } else if (this.contador == 1) {
            this.professor2.setPosition(-1300, 0);
            this.professor3.setPosition(-129, -89);
            prof3.playAdditive('Aparece');
            texto.playAdditive('ApareceTexto');
            this.label.string = 'Para passar nesse teste\n' + 'você deve acertar pelo menos\n' + '7 das 10 questões apresentadas';
            this.contador += 1;
        } else if (this.contador == 2) {
            this.professor3.setPosition(-1300, 0);
            this.professor4.setPosition(-129, -89);
            prof4.playAdditive('Aparece');
            texto.playAdditive('ApareceTexto');
            this.label.string = 'Considere esse quiz como uma prova final\n' + 'não tenha pressa em responder as questões\n' + 'e analise com cuidado as opções apresentadas';
            this.contador += 1;
        } else if (this.contador == 3) {
            this.professor4.setPosition(-1300, 0);
            this.professor1.setPosition(-129, -89);
            prof1.playAdditive('Aparece');
            texto.playAdditive('ApareceTexto');
            this.label.string = 'Boa sorte!';
            this.contador += 1;
        } else if (this.contador == 4) {
            cc.director.loadScene("quizFase5");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.play(this.gameAudio, true, 0.2);
        this.contador = 0;
        var texto = this.label.getComponent(cc.Animation);
        texto.playAdditive('ApareceTexto');
        this.label.string = 'Olá, bem-vindo ao teste final!\n' + 'esta última fase testara todo o seu conhecimento\n' + 'adquirido até então, em jogo e na disciplina';
    },

    onDestroy: function onDestroy() {
        cc.audioEngine.pauseAll();
    }

});

cc._RF.pop();