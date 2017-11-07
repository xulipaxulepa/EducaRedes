"use strict";
cc._RF.push(module, '81f93OBl8BM/4SWtEWO0tvv', 'btnContFase3');
// scripts/buttons/buttons dialogues/btnContFase3.js

"use strict";

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

        contador: 0
    },

    mudaTexto: function mudaTexto() {
        var texto = this.label.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face.getComponent(cc.Animation);
        if (this.contador === 0) {
            texto.playAdditive('ApareceTexto');
            professor.play("moveProfessor");
            face.play("falaProfessor3-2");
            this.label.string = 'A finalidade dessa camada é permitir que\n' + 'as entidades pares dos hosts de origem e de destino\n' + 'mantenham uma conversação';
            this.contador += 1;
        } else if (this.contador == 1) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.label.string = 'Dois protocolos fim a fim foram definidos aqui.\n' + 'O primeiro deles, o TCP(Transmission Control Protocol\n' + '— protocolo de controle de transmissão)';
            this.contador += 1;
        } else if (this.contador == 2) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-1");
            this.label.string = 'Um protocolo orientado a conexões confiável\n' + 'que permite a entrega sem erros de um fluxo de bytes\n' + 'originário de uma determinada\n' + 'máquina em qualquer computador';
            this.contador += 1;
        } else if (this.contador == 3) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-2");
            this.label.string = 'Esse protocolo fragmenta o fluxo de bytes de entrada\n' + 'em mensagens discretas. No destino, o processo TCP receptor\n' + 'volta a montar as mensagens recebidas no fluxo de saída.';
            this.contador += 1;
        } else if (this.contador == 4) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.label.string = 'O proximo mini-jogo demonstra como\n' + 'a mensagem viaja entre varios nós\n' + 'ate chegar em seu destino';
            this.contador += 1;
        } else if (this.contador == 5) {
            cc.director.loadScene("jogoFase3");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.contador = 0;
        var face = this.face.getComponent(cc.Animation);
        face.play("falaProfessor3-1");
        var professor = this.professor.getComponent(cc.Animation);
        professor.play("Aparece");
        var texto = this.label.getComponent(cc.Animation);
        texto.playAdditive('ApareceTexto');
        this.label.string = 'Ola, eu sou o professor Portty!\n' + 'Eu vou te ensinar sobre a camada Transporte';
    }

});

cc._RF.pop();