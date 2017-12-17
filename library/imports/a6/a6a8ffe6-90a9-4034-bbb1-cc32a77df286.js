"use strict";
cc._RF.push(module, 'a6a8f/mkKlANLuxzDKnffKG', 'btnContFase2');
// scripts/buttons/buttons dialogues/btnContFase2.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
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

    mudaTexto: function mudaTexto() {
        var texto = this.label.getComponent(cc.Animation);
        var professora = this.professor.getComponent(cc.Animation);
        if (this.contador === 0) {
            texto.playAdditive('ApareceTexto');
            professora.play("moveProfessor2-1");
            this.label.string = 'A camada internet é responsável pela entrega\n' + 'de um pacote, de sua origem até o seu\n' + 'destino final.';
            this.contador += 1;
        } else if (this.contador == 1) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-1");
            this.label.string = 'Sua principal função é fazer o roteamento\n' + 'dos pacotes';
            this.contador += 1;
        } else if (this.contador == 2) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-2");
            this.label.string = 'A camada internet define um formato de pacote\n' + 'e um protocolo chamado IP(Internet Protocol).';
            this.contador += 1;
        } else if (this.contador == 3) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'Endereço IP, de forma genérica, é uma identificação\n' + 'de um endereço do dispositivo\n (computador, impressora, etc)\n' + 'em uma rede local ou pública.';
            this.contador += 1;
        } else if (this.contador == 4) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'Cada computador na internet possui um IP\n' + '(Internet Protocol ou Protocolo de internet) único\n' + 'que é o meio em que as máquinas usam\n' + 'para se comunicarem na Internet.';
            this.contador += 1;
        } else if (this.contador == 5) {
            texto.playAdditive('ApareceTexto');
            professora.play("moveProfessora2-2");
            this.label.string = 'O endereço IP, na versão 4 do IP (IPv4)\n' + 'é um número de 32 bits oficialmente escrito\n' + 'com quatro octetos (bytes) representados\n' + 'no formato decimal, por exemplo, "192 . 168 . 1 . 2".';
            this.contador += 1;
        } else if (this.contador == 6) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'A tarefa da camada internet é entregar\n' + 'pacotes IP onde eles são necessários.';
            this.contador += 1;
        } else if (this.contador == 7) {
            texto.playAdditive('ApareceTexto');
            professora.play("moveProfessor2-1");
            this.label.string = 'O roteamento de pacotes é uma questão\n' + 'de grande importância nessa camada, assim como\n' + 'a necessidade de evitar o congestionamento.';
            this.contador += 1;
        } else if (this.contador == 8) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-1");
            this.label.string = 'Um exemplo de serviço oferecido\n' + 'por essa camada é o roteamento de pacotes,\n' + 'através dos endereços de origem/destino.';
            this.contador += 1;
        } else if (this.contador == 9) {
            cc.director.loadScene("jogoFase2");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.play(this.gameAudio, true, 0.2);
        cc.audioEngine.setVolume(0, 0.2);
        this.contador = 0;
        var face = this.face.getComponent(cc.Animation);
        face.play("falaProfessor2");
        var professora = this.professor.getComponent(cc.Animation);
        professora.play("Aparece");
        var texto = this.label.getComponent(cc.Animation);
        texto.playAdditive('ApareceTexto');
        this.label.string = 'Olá, eu sou a professora Anette! \n' + 'Eu vou te ensinar sobre a camada Internet';
    },

    onDestroy: function onDestroy() {
        cc.audioEngine.pauseAll();
    }

});

cc._RF.pop();