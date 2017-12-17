"use strict";
cc._RF.push(module, '0d608MgM3NBMLjQf0Ozohur', 'btnContFase4');
// scripts/buttons/buttons dialogues/btnContFase4.js

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

        gameAudio: {
            default: null,
            url: cc.AudioClip
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
            face.play("falaProfessor2");
            this.label.string = 'A camada de acesso a rede tem por objetivo\n' + 'gerar e transmitir o sinal pelo meio.\n' + 'Seja a tecnologia Ethernet, Wi-fi, Bluetooth, entre outros.';
            this.contador += 1;
        } else if (this.contador == 1) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'A camada Internet tem como objetivo\n' + 'gerenciar pacotes na rede, identificando sua origem/destino\n' + 'e redes para entrega.';
            this.contador += 1;
        } else if (this.contador == 2) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor1");
            face.play("falaProfessor1");
            this.label.string = 'A camada de transporte estabelece uma conexão fim a fim\n' + '(conexão confiável) entre a origem e o destino dos dados.';
            this.contador += 1;
        } else if (this.contador == 3) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor1");
            face.play("falaProfessor1");
            this.label.string = 'Por fim, temos a camada de aplicação\n' + 'A camada de aplicação contém todos\n os protocolos de nível mais alto.\n';
            this.contador += 1;
        } else if (this.contador == 4) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor2");
            face.play("falaProfessor2");
            this.label.string = 'Dentre eles estão o protocolo de terminal virtual(TELNET)\n' + 'O protocolo de transferência de arquivos(FTP) e\n' + 'o protocolo de correio eletrônico(SMTP)';
            this.contador += 1;
        } else if (this.contador == 5) {
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor1");
            face.play("falaProfessor2");
            this.label.string = 'Muitos outros protocolos foram incluídos \n' + 'com o decorrer dos anos, como o DNS(Domain Name Service)\n' + 'que mapeia os nomes de hosts\n' + 'para seus respectivos endereços de rede';
            this.contador += 1;
        } else if (this.contador == 6) {
            cc.director.loadScene("jogoFase4");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.play(this.gameAudio, true, 0.2);
        this.contador = 0;
        var face = this.face.getComponent(cc.Animation);
        face.play("falaProfessor1");
        var professor = this.professor.getComponent(cc.Animation);
        professor.play("Aparece");
        var texto = this.label.getComponent(cc.Animation);
        texto.playAdditive('ApareceTexto');
        this.label.string = ' Olá, eu sou o professor Mark!\n' + 'Vamos recapitular tudo que foi visto até então';
    },

    onDestroy: function onDestroy() {
        cc.audioEngine.pauseAll();
    }

});

cc._RF.pop();