"use strict";
cc._RF.push(module, '0d608MgM3NBMLjQf0Ozohur', 'btnContFase4');
// scripts/buttons/buttons dialogues/btnContFase4.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },

        contador: 0
    },

    mudaTexto: function mudaTexto() {
        if (this.contador === 0) {
            this.label.string = 'A camada de acesso a rede tem por objetivo\n' + 'gerar e transmitir o sinal pelo meio.\n' + 'Seja a tecnologia Ethernet, Wi-fi, Bluetooth, entre outros.';
            this.contador += 1;
        } else if (this.contador == 1) {
            this.label.string = 'A camada Internet tem como objetivo\n' + 'gerenciar pacotes na rede, identificando sua origem/destino\n' + 'e redes para entrega.';
            this.contador += 1;
        } else if (this.contador == 2) {
            this.label.string = 'A camada de transporte estabelece uma conexão fim a fim\n' + '(conexão confiável) entre a origem e o destino dos dados.';
            this.contador += 1;
        } else if (this.contador == 3) {
            this.label.string = 'Por fim, temos a camada de aplicaçao\n' + 'A camada de aplicação contém todos os protocolos de nível mais alto.\n' + 'Dentre eles estão o protocolo de terminal virtual(TELNET)';
            this.contador += 1;
        } else if (this.contador == 4) {
            this.label.string = 'O protocolo de transferência de arquivos(FTP) e\n' + 'o protocolo de correio eletrônico(SMTP)';
            this.contador += 1;
        } else if (this.contador == 5) {
            this.label.string = 'Muitos outros protocolos foram incluídos com o decorrer dos anos\n' + 'como o DNS(Domain Name Service), que mapeia os nomes\n' + 'de hosts para seus respectivos endereços de rede';
            this.contador += 1;
        } else if (this.contador == 6) {
            cc.director.loadScene("jogoFase4");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.contador = 0;
        this.label.string = 'Ola, eu sou o professor Geraldo!\n' + 'Vamos recapitular tudo que foi visto ate entao';
    }

});

cc._RF.pop();