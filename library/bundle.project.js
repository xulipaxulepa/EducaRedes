require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"alvo":[function(require,module,exports){
"use strict";
cc._RF.push(module, '658ffRcKz5CYKrwFy/wcuUj', 'alvo');
// scripts/logica fases/alvo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        pickRadios: 0
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnAcessoARede":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'c9918FY9ixM5rmy9w8Y/uEr', 'btnAcessoARede');
// scripts/buttons/buttons camadas/btnAcessoARede.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        prof1: {
            default: null,
            type: cc.Node
        },

        prof2: {
            default: null,
            type: cc.Node
        },

        prof3: {
            default: null,
            type: cc.Node
        },

        prof4: {
            default: null,
            type: cc.Node
        },

        button1: {
            default: null,
            type: cc.Node
        },

        button2: {
            default: null,
            type: cc.Node
        },

        button3: {
            default: null,
            type: cc.Node
        },

        button4: {
            default: null,
            type: cc.Node
        },

        button5: {
            default: null,
            type: cc.Node
        }
    },

    mudaButton: function mudaButton() {
        this.button1.setPosition(326, -244);
        this.button2.setPosition(596, -244);
        this.button3.setPosition(596, -244);
        this.button4.setPosition(596, -244);
        this.button5.setPosition(596, -244);
    },

    showProfButton: function showProfButton() {
        this.prof1.setOpacity(1000);
        this.prof2.setOpacity(0);
        this.prof3.setOpacity(0);
        this.prof4.setOpacity(0);
        this.mudaButton();
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnAplicacao":[function(require,module,exports){
"use strict";
cc._RF.push(module, '00df6hAp4hCiIpx+GvpezGv', 'btnAplicacao');
// scripts/buttons/buttons camadas/btnAplicacao.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        prof1: {
            default: null,
            type: cc.Node
        },

        prof2: {
            default: null,
            type: cc.Node
        },

        prof3: {
            default: null,
            type: cc.Node
        },

        prof4: {
            default: null,
            type: cc.Node
        },

        button1: {
            default: null,
            type: cc.Node
        },

        button2: {
            default: null,
            type: cc.Node
        },

        button3: {
            default: null,
            type: cc.Node
        },

        button4: {
            default: null,
            type: cc.Node
        },

        button5: {
            default: null,
            type: cc.Node
        }
    },

    mudaButton: function mudaButton() {
        this.button1.setPosition(596, -244);
        this.button2.setPosition(596, -244);
        this.button3.setPosition(596, -244);
        this.button4.setPosition(326, -244);
        this.button5.setPosition(596, -244);
    },

    showProfButton: function showProfButton() {
        this.prof1.setOpacity(0);
        this.prof2.setOpacity(0);
        this.prof3.setOpacity(0);
        this.prof4.setOpacity(1000);
        this.mudaButton();
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnCarregarJogo":[function(require,module,exports){
"use strict";
cc._RF.push(module, '0623bNFMOdOFYwl+o7rDYGV', 'btnCarregarJogo');
// scripts/buttons/btnCarregarJogo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToSelectFase: function goToSelectFase() {
        cc.director.loadScene("selectFase");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnContFase1":[function(require,module,exports){
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
},{}],"btnContFase2":[function(require,module,exports){
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

        contador: 0
    },

    mudaTexto: function mudaTexto() {
        var texto = this.label.getComponent(cc.Animation);
        var professora = this.professor.getComponent(cc.Animation);
        if (this.contador === 0) {
            texto.playAdditive('ApareceTexto');
            professora.play("moveProfessor2-1");
            this.label.string = 'A camada internet é Responsável pela entrega\n' + 'de um pacote, de sua origem até o seu\n' + 'destino final.';
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
            this.label.string = 'Endereço IP, de forma genérica, é uma identificação\n' + 'de um dispositivo (computador, impressora, etc)\n' + 'em uma rede local ou pública.';
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
            this.label.string = 'Um  exemplo de  serviço  oferecido\n' + 'por  essa  camada  é  o  roteamento  de  pacotes,\n' + 'através dos endereços de origem/destino.';
            this.contador += 1;
        } else if (this.contador == 9) {
            cc.director.loadScene("jogoFase2");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.contador = 0;
        var face = this.face.getComponent(cc.Animation);
        face.play("falaProfessor2");
        var professora = this.professor.getComponent(cc.Animation);
        professora.play("Aparece");
        var texto = this.label.getComponent(cc.Animation);
        texto.playAdditive('ApareceTexto');
        this.label.string = 'Ola, eu sou a professora Anette!\n' + 'Eu vou te ensinar sobre a camada Internet';
    }

});

cc._RF.pop();
},{}],"btnContFase3":[function(require,module,exports){
"use strict";
cc._RF.push(module, '81f93OBl8BM/4SWtEWO0tvv', 'btnContFase3');
// scripts/buttons/buttons dialogues/btnContFase3.js

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
            this.label.string = 'A finalidade dessa camada é permitir que\n' + 'as entidades pares dos hosts de origem e de destino\n' + 'mantenham uma conversação';
            this.contador += 1;
        } else if (this.contador == 1) {
            this.label.string = 'Dois protocolos fim a fim foram definidos aqui.\n' + 'O primeiro deles, o TCP(Transmission Control Protocol\n' + '— protocolo de controle de transmissão)';
            this.contador += 1;
        } else if (this.contador == 2) {
            this.label.string = 'Um protocolo orientado a conexões confiável\n' + 'que permite a entrega sem erros de um fluxo de bytes\n' + 'originário de uma determinada máquina em qualquer computador';
            this.contador += 1;
        } else if (this.contador == 3) {
            this.label.string = 'Esse protocolo fragmenta o fluxo de bytes de entrada\n' + 'em mensagens discretas. No destino, o processo TCP receptor\n' + 'volta a montar as mensagens recebidas no fluxo de saída.';
            this.contador += 1;
        } else if (this.contador == 4) {
            this.label.string = 'O proximo mini-jogo demonstra como\n' + 'a mensagem viaja entre varios nós ate chegar em seu destino';
            this.contador += 1;
        } else if (this.contador == 5) {
            cc.director.loadScene("jogoFase3");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.contador = 0;
        this.label.string = 'Ola, eu sou o professor Portty!\n' + 'Eu vou te ensinar sobre a camada Transporte';
    }

});

cc._RF.pop();
},{}],"btnContFase4":[function(require,module,exports){
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
},{}],"btnContFase5":[function(require,module,exports){
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

        contador: 0
    },

    mudaTexto: function mudaTexto() {
        if (this.contador === 0) {
            this.professor1.setPosition(-1300, 0);
            this.professor2.setPosition(-267, -89);
            this.label.string = 'O teste final consiste de um quiz com 10 perguntas\n' + 'referentes as 4 camadas da arquitetura TCP/IP';
            this.contador += 1;
        } else if (this.contador == 1) {
            this.professor2.setPosition(-1300, 0);
            this.professor3.setPosition(-267, -89);
            this.label.string = 'Para passar nesse teste, voce deve acertar pelo menos\n' + '7 das 10 questoes apresentadas';
            this.contador += 1;
        } else if (this.contador == 2) {
            this.professor3.setPosition(-1300, 0);
            this.professor4.setPosition(-267, -89);
            this.label.string = 'Considere esse quiz como uma prova final\n' + 'nao tenha pressa em responder as questoes\n' + 'e analise com cuidado as opçoes apresentadas';
            this.contador += 1;
        } else if (this.contador == 3) {
            this.professor4.setPosition(-1300, 0);
            this.professor1.setPosition(-267, -89);
            this.label.string = 'Boa sorte!';
            this.contador += 1;
        } else if (this.contador == 4) {
            cc.director.loadScene("quizFase5");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.contador = 0;
        this.label.string = 'Ola, bem vindo ao teste final!\n' + 'esta ultima fase testara todo o seu conhecimento\n' + 'adquirido ate entao, em jogo e na disciplina';
    }

});

cc._RF.pop();
},{}],"btnInternet":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'fd4a6mCbvdDg43YYgEZsLRe', 'btnInternet');
// scripts/buttons/buttons camadas/btnInternet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        prof1: {
            default: null,
            type: cc.Node
        },

        prof2: {
            default: null,
            type: cc.Node
        },

        prof3: {
            default: null,
            type: cc.Node
        },

        prof4: {
            default: null,
            type: cc.Node
        },

        button1: {
            default: null,
            type: cc.Node
        },

        button2: {
            default: null,
            type: cc.Node
        },

        button3: {
            default: null,
            type: cc.Node
        },

        button4: {
            default: null,
            type: cc.Node
        },

        button5: {
            default: null,
            type: cc.Node
        }

    },

    mudaButton: function mudaButton() {
        this.button1.setPosition(596, -244);
        this.button2.setPosition(326, -244);
        this.button3.setPosition(596, -244);
        this.button4.setPosition(596, -244);
        this.button5.setPosition(596, -244);
    },

    showProfButton: function showProfButton() {
        this.prof1.setOpacity(0);
        this.prof2.setOpacity(1000);
        this.prof3.setOpacity(0);
        this.prof4.setOpacity(0);
        this.mudaButton();
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnNovoJogo":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'b94cbMJ8WpDNKS0SpR87W9N', 'btnNovoJogo');
// scripts/buttons/btnNovoJogo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        gameAudio: {
            default: null,
            url: cc.AudioClip
        }
    },

    goToSelectFase: function goToSelectFase() {
        cc.director.loadScene("selectFase");
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.play(this.gameAudio, true);
    }

});

cc._RF.pop();
},{}],"btnOpcoes":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'a6892JACbZPYartnZOolo/y', 'btnOpcoes');
// scripts/buttons/btnOpcoes.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToOpcoes: function goToOpcoes() {
        cc.director.loadScene("opcoes");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnPlayCamada1":[function(require,module,exports){
"use strict";
cc._RF.push(module, '6ec98tavstF46fC5jCFjmOB', 'btnPlayCamada1');
// scripts/buttons/btnPlay/btnPlayCamada1.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToFase1: function goToFase1() {
        cc.director.loadScene("fase1");
    },

    // use this for initialization
    onLoad: function onLoad() {},

    onDestroy: function onDestroy() {
        cc.audioEngine.pauseAll();
    }

});

cc._RF.pop();
},{}],"btnPlayCamada2":[function(require,module,exports){
"use strict";
cc._RF.push(module, '3ae0acxn/9OU7Byg/NIgeR5', 'btnPlayCamada2');
// scripts/buttons/btnPlay/btnPlayCamada2.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToFase2: function goToFase2() {
        cc.director.loadScene("fase2");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnPlayCamada3":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'aadbdiSWPRH153TsbJGZF8q', 'btnPlayCamada3');
// scripts/buttons/btnPlay/btnPlayCamada3.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToFase3: function goToFase3() {
        cc.director.loadScene("fase3");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnPlayCamada4":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'aa0b6XCiHlBs62frhBOLeKy', 'btnPlayCamada4');
// scripts/buttons/btnPlay/btnPlayCamada4.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToFase4: function goToFase4() {
        cc.director.loadScene("fase4");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnPlayCamada5":[function(require,module,exports){
"use strict";
cc._RF.push(module, '5a1c4XzCSVHbp6Ht4+qg7aD', 'btnPlayCamada5');
// scripts/buttons/btnPlay/btnPlayCamada5.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToFase4: function goToFase4() {
        cc.director.loadScene("fase5");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnQuiz1":[function(require,module,exports){
"use strict";
cc._RF.push(module, '778d4Y5rCdLXKJdDo4R0k3E', 'btnQuiz1');
// scripts/buttons/button quiz/btnQuiz1.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToQuiz1: function goToQuiz1() {
        cc.director.loadScene("quizFase1");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnQuiz2":[function(require,module,exports){
"use strict";
cc._RF.push(module, '34dcbhY1FhPgZPAOgtG1n5n', 'btnQuiz2');
// scripts/buttons/button quiz/btnQuiz2.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToQuiz1: function goToQuiz1() {
        cc.director.loadScene("quizFase2");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnQuiz3":[function(require,module,exports){
"use strict";
cc._RF.push(module, '79ad1jru4tL6LPe8iLw32iV', 'btnQuiz3');
// scripts/buttons/button quiz/btnQuiz3.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToQuiz1: function goToQuiz1() {
        cc.director.loadScene("quizFase3");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnQuiz4":[function(require,module,exports){
"use strict";
cc._RF.push(module, '5b4231rmL9Kzqawp2hK9ylc', 'btnQuiz4');
// scripts/buttons/button quiz/btnQuiz4.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToQuiz1: function goToQuiz1() {
        cc.director.loadScene("quizFase4");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnQuiz5":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'bf6efU5YexDeL3oF1U+94qp', 'btnQuiz5');
// scripts/buttons/button quiz/btnQuiz5.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToQuiz1: function goToQuiz1() {
        cc.director.loadScene("quizFase5");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnSair":[function(require,module,exports){
"use strict";
cc._RF.push(module, '6a42d9jdplMsYvSADsomSjB', 'btnSair');
// scripts/buttons/btnSair.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {},

    sairDoJogo: function sairDoJogo() {
        cc.game.end();
    }

});

cc._RF.pop();
},{}],"btnTesteFinal":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'b0fccE2+axN8rYII3y9PT9v', 'btnTesteFinal');
// scripts/buttons/buttons camadas/btnTesteFinal.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        prof1: {
            default: null,
            type: cc.Node
        },

        prof2: {
            default: null,
            type: cc.Node
        },

        prof3: {
            default: null,
            type: cc.Node
        },

        prof4: {
            default: null,
            type: cc.Node
        },

        button1: {
            default: null,
            type: cc.Node
        },

        button2: {
            default: null,
            type: cc.Node
        },

        button3: {
            default: null,
            type: cc.Node
        },

        button4: {
            default: null,
            type: cc.Node
        },

        button5: {
            default: null,
            type: cc.Node
        }
    },

    mudaButton: function mudaButton() {
        this.button1.setPosition(596, -244);
        this.button2.setPosition(596, -244);
        this.button3.setPosition(596, -244);
        this.button4.setPosition(596, -244);
        this.button5.setPosition(326, -244);
    },

    showProfButton: function showProfButton() {
        this.prof1.setOpacity(0);
        this.prof2.setOpacity(0);
        this.prof3.setOpacity(0);
        this.prof4.setOpacity(0);
        this.mudaButton();
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"btnTransporte":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'd7ebdy33+RFv7Dst+i664dz', 'btnTransporte');
// scripts/buttons/buttons camadas/btnTransporte.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        prof1: {
            default: null,
            type: cc.Node
        },

        prof2: {
            default: null,
            type: cc.Node
        },

        prof3: {
            default: null,
            type: cc.Node
        },

        prof4: {
            default: null,
            type: cc.Node
        },

        button1: {
            default: null,
            type: cc.Node
        },

        button2: {
            default: null,
            type: cc.Node
        },

        button3: {
            default: null,
            type: cc.Node
        },

        button4: {
            default: null,
            type: cc.Node
        },

        button5: {
            default: null,
            type: cc.Node
        }

    },

    mudaButton: function mudaButton() {
        this.button1.setPosition(596, -244);
        this.button2.setPosition(596, -244);
        this.button3.setPosition(326, -244);
        this.button4.setPosition(596, -244);
        this.button5.setPosition(596, -244);
    },

    showProfButton: function showProfButton() {
        this.prof1.setOpacity(0);
        this.prof2.setOpacity(0);
        this.prof3.setOpacity(1000);
        this.prof4.setOpacity(0);
        this.mudaButton();
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}],"creditroll":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'c76abV3c2hB9bYc8A7pzHmO', 'creditroll');
// scripts/creditroll.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        jumpHeight: 0,
        // main character's jump duration
        jumpDuration: 0,
        // maximal movement speed
        maxMoveSpeed: 0,
        // acceleration
        accel: 0,

        timer: 0
    },

    setJumpAction: function setJumpAction() {
        // jump up
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight));
        // repeat
        return cc.repeatForever(jumpUp);
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.timer = 15;
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
    },

    selectStage: function selectStage() {
        cc.director.loadScene("selectFase");
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.timer < 1) {
            this.selectStage();
        }

        this.timer -= dt;
    }
});

cc._RF.pop();
},{}],"logicaFase1-1":[function(require,module,exports){
"use strict";
cc._RF.push(module, '4b39dColCpOArq1yhND3+DD', 'logicaFase1-1');
// scripts/logica fases/logicaFase1-1.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        bg: {
            default: null,
            type: cc.Node
        },

        buttonUp: {
            default: null,
            type: cc.Node
        },

        buttonDown: {
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

        alvo: {
            default: null,
            type: cc.Node
        },

        gameOverbackground: {
            default: null,
            type: cc.Node
        },

        score: {
            default: null,
            type: cc.Label
        },

        scoreGameOver: {
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

        btnContinuar1: {
            default: null,
            type: cc.Node
        },

        textWrapper: {
            default: null,
            type: cc.Node
        },

        textoFase: {
            default: null,
            type: cc.Label
        },

        linhaGameOver: {
            default: null,
            type: cc.Node
        },

        tutorial: {
            default: null,
            type: cc.Node
        },

        fase: 0,

        pontuacao: 0,

        contTexto: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.criaAlvo();
        this.pontuacao = 0;
        this.fase = 9;
        this.contTexto = 0;
        this.linhaGameOver.setOpacity(0);
        this.accUp = false;
        this.accDown = false;
        this.accRight = false;
        this.setInputControl();
        this.textoFase.string = "Como pode ser visto, a diferença entre os sinais\n" + "é bem perceptivel";
    },

    onDestroy: function onDestroy() {
        cc.audioEngine.pauseAll();
    },

    //movimentar via teclado
    setInputControl: function setInputControl() {
        var self = this;
        // add keyboard event listener
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // When there is a key being pressed down, judge if it's the designated directional button and set up acceleration in the corresponding direction
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.up:
                        self.accUp = true;
                        self.accDown = false;
                        break;
                    case cc.KEY.down:
                        self.accUp = false;
                        self.accDown = true;
                        break;
                    case cc.KEY.right:
                        self.accUp = false;
                        self.accDown = false;
                        self.accRight = true;
                        break;
                }
            },

            onKeyReleased: function onKeyReleased(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.up:
                        self.accUp = false;
                        break;
                    case cc.KEY.down:
                        self.accDown = false;
                        break;
                    case cc.KEY.right:
                        self.accRight = false;
                        break;
                }
            }
        }, self.node);
    },

    movimentar: function movimentar() {
        if (this.accUp) {
            this.sobePlayer();
        } else if (this.accDown) {
            this.descePlayer();
        } else if (this.accRight) {
            this.vaiFrentePlayer();
        }
    },

    jogar: function jogar() {
        this.fase = 0;
        this.frentePlayer();
        var tutorial = this.tutorial.getComponent(cc.Animation);
        tutorial.play("someTutorial");
    },

    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para cima em diversas velocidades*/
    sobePlayer: function sobePlayer() {
        this.player.stopAllActions();
        var sobe = cc.moveBy(3, cc.p(0, 300));
        var frente = cc.moveBy(300, cc.p(10000, 0));
        this.player.runAction(cc.sequence(sobe, frente));
    },

    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para baixo em diversas velocidades*/
    descePlayer: function descePlayer() {
        this.player.stopAllActions();
        var desce = cc.moveBy(3, cc.p(0, -300));
        var frente = cc.moveBy(300, cc.p(10000, 0));
        this.player.runAction(cc.sequence(desce, frente));
    },

    vaiFrentePlayer: function vaiFrentePlayer() {
        this.player.stopAllActions();
        var frente = cc.moveBy(300, cc.p(10000, 0));
        this.player.runAction(frente);
    },

    vaiPraFrente: function vaiPraFrente() {
        var frente = cc.moveBy(300, cc.p(10000, 0));
        return frente;
    },

    frentePlayer: function frentePlayer() {
        this.vaiPraFrente = this.vaiPraFrente();
        this.player.runAction(this.vaiPraFrente);
    },

    criaLinha: function criaLinha() {
        var novaLinha = cc.instantiate(this.linha);
        this.bg.addChild(novaLinha);
        novaLinha.setPosition(this.player.getPosition());
    },

    criaAlvo: function criaAlvo() {
        var y = Math.floor(Math.random() * 300 + 0);
        var x = this.player.x + 100;
        var xlinha = x + 200;
        this.alvo.setPosition(x, y);
        this.linhaGameOver.setPosition(xlinha, 0);
    },

    getPlayerDistance: function getPlayerDistance() {
        // judge the distance according to the position of the player node
        var playerPos = this.player.getPosition();
        var AlvoPos = this.alvo.getPosition();
        // calculate the distance between two nodes according to their positions
        var dist = cc.pDistance(AlvoPos, playerPos);
        return dist;
    },

    getPlayerDistanceLinha: function getPlayerDistanceLinha() {
        // judge the distance according to the position of the player node
        var playerPos = this.player.getPosition();
        var linhaGameOverPos = this.linhaGameOver.getPosition();
        // calculate the distance between two nodes according to their positions
        var dist = cc.pDistance(linhaGameOverPos, playerPos);
        return dist;
    },

    onPicked: function onPicked() {
        // When the stars are being collected, invoke the interface in the Game script to generate a new star
        this.criaAlvo();
        this.pontuacao += 1;
    },

    limitaPlayer: function limitaPlayer() {
        if (this.player.y > this.player.parent.height / 2) {
            this.player.y = this.player.parent.height / 2;
            this.gameOver();
        } else if (this.player.y < -this.player.parent.height / 2) {
            this.player.y = -this.player.parent.height / 2;
            this.gameOver();
        }
    },

    pegaAlvo: function pegaAlvo() {
        if (this.getPlayerDistance() < 60) {
            // invoke collecting behavior
            this.onPicked();
            return;
        } else if (this.pontuacao == 10) {
            this.fase = 1;
        }
    },

    passaLinha: function passaLinha() {
        if (this.getPlayerDistanceLinha() < 60) {
            // invoke collecting behavior
            this.gameOver();
        } else if (this.pontuacao == 10) {
            this.linhaGameOver.setPosition(0, 2000);
        }
    },

    gameOver: function gameOver() {
        this.gameOverbackground.setPosition(0, 0);
        this.scoreGameOver.string = 'Alvos Acertados: ' + this.pontuacao;
        this.player.stopAllActions();
    },

    tryAgain: function tryAgain() {
        cc.director.loadScene("jogoFase1-1");
    },

    trocaTexto1: function trocaTexto1() {
        var texto = this.textoFase.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face.getComponent(cc.Animation);
        var animaFace = face.play("falaProfessor1");
        animaFace.speed = 0.5;
        animaFace.repeatCount = Infinity;
        if (this.contTexto === 0) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor1');
            this.textoFase.string = "O sinal analogico é gerado como uma onda\n" + "já que os valores vão se alterando no intervalo de tempo";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor2');
            this.textoFase.string = "Já o sinal digital é gerado como uma reta\n" + "já que possui um conjunto de valores em um intervalo de tempo";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor1');
            this.textoFase.string = "A camada de acesso a rede tambem fornece\n" + "o serviço de  transformar  um  canal  de transmissão  bruta\n" + "em  uma  linha  que  pareça  livre  de  erros  de  transmissão";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor2');
            this.textoFase.string = "Oferecendo enquadramento de bits\n" + "verificação de erros e protocolos que assegurem a correçao de erros";
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor1');
            this.textoFase.string = "Visto os conteudos desta fase e em sala de aula\n" + "responda agora o Quiz";
            this.contTexto += 1;
        } else if (this.contTexto == 5) {
            this.textoFase.string = "";
            this.contTexto = 0;
            this.fase = 2;
            this.player.setPosition(-418, 0);
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {

        this.movimentar();

        if (this.fase === 0) {
            this.professor.setPosition(1306, -222);
            this.limitaPlayer();
            this.criaLinha();
            this.pegaAlvo();
            this.passaLinha();
            this.score.string = 'Alvos: ' + this.pontuacao;
        } else if (this.fase == 1) {
            this.player.setOpacity(0);
            this.professor.setPosition(0, -222);
            this.textWrapper.setPosition(0, -220);
        } else if (this.fase == 2) {
            cc.director.loadScene("quizFase1");
        }
    }
});

cc._RF.pop();
},{}],"logicaFase1":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'ad2dfsTZshIrIMIlP4Ufxjb', 'logicaFase1');
// scripts/logica fases/logicaFase1.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        bg: {
            default: null,
            type: cc.Node
        },

        buttonUp: {
            default: null,
            type: cc.Node
        },

        buttonDown: {
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

        alvo: {
            default: null,
            type: cc.Node
        },

        gameOverbackground: {
            default: null,
            type: cc.Node
        },

        score: {
            default: null,
            type: cc.Label
        },

        scoreGameOver: {
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

        btnContinuar1: {
            default: null,
            type: cc.Node
        },

        btnContinuar2: {
            default: null,
            type: cc.Node
        },

        textoFase: {
            default: null,
            type: cc.Label
        },

        linhaGameOver: {
            default: null,
            type: cc.Node
        },

        textwrapper: {
            default: null,
            type: cc.Node
        },

        tutorial: {
            default: null,
            type: cc.Node
        },

        AmpMax: {
            default: null,
            type: cc.Label
        },

        Frequencia: {
            default: null,
            type: cc.Label
        },

        gameAudio: {
            default: null,
            url: cc.AudioClip
        },

        fase: 0,

        pontuacao: 0,

        contTexto: 0,

        saiLoop: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.play(this.gameAudio, true);
        this.frentePlayer();
        this.criaAlvo();
        this.btnContinuar2.setOpacity(0);
        this.linhaGameOver.setOpacity(0);
        this.pontuacao = 0;
        this.fase = 0;
        this.contTexto = 0;
        this.accUp = false;
        this.accDown = false;
        this.saiLoop = 0;
        this.setInputControl();
        var texto = this.textoFase.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face.getComponent(cc.Animation);
        var animaFace = face.play("falaProfessor1");
        animaFace.speed = 0.5;
        animaFace.repeatCount = Infinity;
        texto.playAdditive('ApareceTexto');
        professor.playAdditive('Aparece');
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera a diferença\n" + "entre o sinal analogico e o sinal digital";
    },

    //movimentar via teclado
    setInputControl: function setInputControl() {
        var self = this;
        // add keyboard event listener
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // When there is a key being pressed down, judge if it's the designated directional button and set up acceleration in the corresponding direction
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.up:
                        self.accUp = true;
                        self.accDown = false;
                        break;
                    case cc.KEY.down:
                        self.accUp = false;
                        self.accDown = true;
                        break;
                }
            },

            onKeyReleased: function onKeyReleased(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.up:
                        self.accUp = false;
                        break;
                    case cc.KEY.down:
                        self.accDown = false;
                        break;
                }
            }
        }, self.node);
    },

    movimentar: function movimentar() {
        if (this.accUp) {
            this.sobePlayer();
        } else if (this.accDown) {
            this.descePlayer();
        }
    },

    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para cima em diversas velocidades*/
    sobePlayer: function sobePlayer() {
        if (this.saiLoop === 0) {
            var sobe = cc.moveBy(3, cc.p(0, 300)).easing(cc.easeCubicActionInOut());
            this.player.runAction(sobe);
            this.saiLoop = 1;
        } else if (this.saiLoop == 1) {}
    },

    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para baixo em diversas velocidades*/
    descePlayer: function descePlayer() {
        if (this.saiLoop == 1) {
            var desce = cc.moveBy(3, cc.p(0, -300)).easing(cc.easeCubicActionInOut());
            this.player.runAction(desce);
            this.saiLoop = 0;
        } else if (this.saiLoop === 0) {}
    },

    vaiPraFrente: function vaiPraFrente() {
        var frente = cc.moveBy(3, cc.p(100, 0));
        return cc.repeatForever(frente);
    },

    frentePlayer: function frentePlayer() {
        this.vaiPraFrente = this.vaiPraFrente();
        this.player.runAction(this.vaiPraFrente);
    },

    criaLinha: function criaLinha() {
        var novaLinha = cc.instantiate(this.linha);
        this.bg.addChild(novaLinha);
        novaLinha.setPosition(this.player.getPosition());
    },

    criaAlvo: function criaAlvo() {
        if (this.pontuacao === 0) {
            this.alvo.setPosition(-320, 272);
        } else {
            var y = Math.floor(Math.random() * 300 + 0);
            var x = this.player.x + 100;
            var xlinha = x + 200;
            this.alvo.setPosition(x, y);
            this.linhaGameOver.setPosition(xlinha, 0);
        }
    },

    getPlayerDistance: function getPlayerDistance() {
        // judge the distance according to the position of the player node
        var playerPos = this.player.getPosition();
        var AlvoPos = this.alvo.getPosition();
        // calculate the distance between two nodes according to their positions
        var dist = cc.pDistance(AlvoPos, playerPos);
        return dist;
    },

    getPlayerDistanceLinha: function getPlayerDistanceLinha() {
        // judge the distance according to the position of the player node
        var playerPos = this.player.getPosition();
        var linhaGameOverPos = this.linhaGameOver.getPosition();
        // calculate the distance between two nodes according to their positions
        var dist = cc.pDistance(linhaGameOverPos, playerPos);
        return dist;
    },

    onPicked: function onPicked() {
        // When the stars are being collected, invoke the interface in the Game script to generate a new star
        this.criaAlvo();
        this.pontuacao += 1;
    },

    limitaPlayer: function limitaPlayer() {
        if (this.player.y > this.player.parent.height / 2) {
            this.player.y = this.player.parent.height / 2;
            this.gameOver();
        } else if (this.player.y < -this.player.parent.height / 2) {
            this.player.y = -this.player.parent.height / 2;
            this.gameOver();
        }
    },

    pegaAlvo: function pegaAlvo() {
        if (this.getPlayerDistance() < 60) {
            // invoke collecting behavior
            this.onPicked();
            return;
        } else if (this.pontuacao == 10) {
            this.fase = 2;
        }
    },

    passaLinha: function passaLinha() {
        if (this.getPlayerDistanceLinha() < 60) {
            // invoke collecting behavior
            this.gameOver();
            return;
        } else if (this.pontuacao == 10) {
            this.linhaGameOver.setPosition(0, 2000);
        }
    },

    gameOver: function gameOver() {
        this.gameOverbackground.setPosition(0, 0);
        this.scoreGameOver.string = 'Alvos Acertados: ' + this.pontuacao;
        this.player.stopAllActions();
    },

    tryAgain: function tryAgain() {
        cc.director.loadScene("jogoFase1");
    },

    trocaTexto1: function trocaTexto1() {
        var texto = this.textoFase.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face.getComponent(cc.Animation);

        if (this.contTexto === 0) {
            professor.playAdditive('moveProfessorJF1');
            texto.playAdditive('ApareceTexto');
            var animaFace = face.play("falaProfessor2");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.textoFase.string = "um  sinal  analógico  é  caracterizado por\n" + "uma equação matemática continua.\n" + "Quando a entrada muda";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "de um valor para o próximo\n" + "faz isso movendo se através\n" + "de todos os valores intermediários.";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "Perceba que a fase descreve a posição\n" + "da onda no instante de tempo igual a zero.\n" + "A fase é medida em graus";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "Tente acertar 10 alvos para avançar\n" + "para a proxima etapa";
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "Evite subir demais ou descer demais\n" + "caso isso aconteça, sera Game Over";
            this.contTexto += 1;
        } else if (this.contTexto == 5) {
            texto.playAdditive('ApareceTexto');
            var tw = this.textwrapper.getComponent(cc.Animation);
            tw.play("someTWJF1");
            var tutorial = this.tutorial.getComponent(cc.Animation);
            tutorial.play("apareceTutorial");
        }
    },

    jogar: function jogar() {
        this.textoFase.string = "Como pode ser visto o sinal analogico é gerado como\n" + "um conjunto de ondas, já que o sinal passa por todos os valores\n" + "naquele intervalo de tempo";
        this.contTexto = 7;
        this.fase = 1;
        this.player.setPosition(-418, 0);
        var tutorial = this.tutorial.getComponent(cc.Animation);
        tutorial.play("someTutorial");
    },

    trocaTexto2: function trocaTexto2() {
        if (this.contTexto == 7) {
            this.textoFase.string = "Já o sinal digital é gerado como um conjunto de retas\n" + "já que possui um conjunto limitado\n" + "de valores em um intervalo de tempo";
            this.contTexto += 1;
        } else if (this.contTexto == 8) {
            this.textoFase.string = "Tente acertar 10 alvos para avançar\n" + "para a proxima etapa";
            this.contTexto += 1;
        } else if (this.contTexto == 9) {
            this.textoFase.string = "Evite subir demais ou descer demais\n" + "caso isso aconteça, sera Game Over";
            this.contTexto += 1;
        } else if (this.contTexto == 10) {
            this.textoFase.string = "Boa Sorte!";
            this.contTexto = 0;
            this.fase = 3;
            this.player.setPosition(-418, 0);
        }
    },

    explicaAmplitudeFrequencia: function explicaAmplitudeFrequencia() {
        if (this.pontuacao == 1) {
            var amp = this.AmpMax.getComponent(cc.Animation);
            amp.play("Aparece");
        } else if (this.pontuacao == 2) {
            var frequen = this.Frequencia.getComponent(cc.Animation);
            frequen.play("Aparece");
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {

        this.movimentar();

        if (this.fase === 0) {
            this.professor.setPosition(0, -222);
            this.player.setOpacity(0);
        } else if (this.fase == 1) {
            this.player.setOpacity(255);
            this.professor.setPosition(1306, -222);
            this.textwrapper.setPosition(1306, -222);
            this.btnContinuar1.setPosition(1306, -222);
            this.btnContinuar2.setPosition(1306, -222);
            this.limitaPlayer();
            this.criaLinha();
            this.pegaAlvo();
            this.passaLinha();
            this.score.string = 'Alvos: ' + this.pontuacao;
            this.explicaAmplitudeFrequencia();
        } else if (this.fase == 2) {
            this.professor.setPosition(0, -222);
            this.textwrapper.setPosition(0, -229);
            this.btnContinuar2.setPosition(747, -99);
            this.player.setOpacity(0);
            this.btnContinuar1.setPosition(3000, 0);
            this.btnContinuar2.setOpacity(255);
        } else if (this.fase == 3) {
            cc.director.loadScene("jogoFase1-1");
        }
    }
});

cc._RF.pop();
},{}],"logicaFase2":[function(require,module,exports){
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

        saltos: 0,

        pontuacao: 0,

        contTexto: 0,

        tuto: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
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
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera a rotear\n" + "pacotes IPs";
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
            this.btnJogar.setPosition(1300, -206);
            this.tutorial3.setOpacity(0);
            this.apareceNos();
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
            this.textoFase.string = "O cenario acima demonstra uma rede\n" + "com 6 roteadores, cada um deles com sua tabela\n" + "de roteamento";
            this.contTexto += 1;
        } else if (this.contTexto == 5) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-2");
            this.textoFase.string = "No papel de um pacote, voce tera\n" + "5 saltos para sair do nó 1 e chegar ao nó 6!\n" + "caso contrario, a mensagem sera perdida";
            this.modeloRede.setOpacity(0);
            this.contTexto += 1;
        } else if (this.contTexto == 6) {
            texto.playAdditive('ApareceTexto');
            professora.play("animaProfessora2-1");
            this.textoFase.string = "Cada salto possui um custo\n" + "Usaremos nesse exemplo, o numero de saltos\n" + "para se alcançar determinado nó";
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
            this.textoFase1.string = "Parabéns, voce chegou ao nó 6!\n" + "apesar de bastante simplificado\n" + "o mini-jogo demonstrou como uma \n" + "informação trafega em diversas redes!";
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
        this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no1.setPosition(-240, -181);
        this.saltos -= 1;
        this.movePlayer(-240, -181);
    },

    buttonSalto2: function buttonSalto2() {
        this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no2.setPosition(-181, -6);
        if (this.player.x == 12) {
            this.saltos -= 1;
            var move2 = this.movePlayer(-181, -6);
            this.player.runAction(move2);
        } else {
            this.saltos -= 2;
            var move1 = this.movePlayer(12, -27);
            var move2 = this.movePlayer(-181, -6);
            this.player.runAction(cc.sequence(move1, move2));
        }
    },

    buttonSalto3: function buttonSalto3() {
        this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no3.setPosition(-15, -181);
        this.saltos -= 1;
        var move = this.movePlayer(-15, -181);
        this.player.runAction(move);
    },

    buttonSalto4: function buttonSalto4() {
        this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no4.setPosition(12, -27);
        this.saltos -= 1;
        var move = this.movePlayer(12, -27);
        this.player.runAction(move);
    },

    buttonSalto5: function buttonSalto5() {
        this.someNos();
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
            move1 = this.movePlayer(12, -27);
            var move2 = this.movePlayer(-39, 103);
            this.player.runAction(cc.sequence(move1, move2));
        }
    },

    buttonSalto6: function buttonSalto6() {
        this.someNos();
        this.tabRot.setPosition(1320, -130);
        this.no6.setPosition(193, 115);
        if (this.player.x == -210) {
            this.saltos -= 5;
            var move1 = this.movePlayer(-181, -6);
            var move2 = this.movePlayer(-15, -181);
            var move3 = this.movePlayer(12, -27);
            var move5 = this.movePlayer(-39, 103);
            var move6 = this.movePlayer(193, 115);
            this.player.runAction(cc.sequence(move1, move2, move3, move5, move6));
        } else if (this.player.x == -39) {
            this.saltos -= 2;
            var move1 = this.movePlayer(12, -27);
            var move2 = this.movePlayer(193, 115);
            this.player.runAction(cc.sequence(move1, move2));
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
},{}],"logicaFase3":[function(require,module,exports){
"use strict";
cc._RF.push(module, '8efd8g1DsBMdYjjCxV8WINP', 'logicaFase3');
// scripts/logica fases/logicaFase3.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        professor: {
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

        tabRot: {
            default: null,
            type: cc.Node
        },

        score: {
            default: null,
            type: cc.Label
        },

        professorFrente: {
            default: null,
            type: cc.Node
        },

        pacote1: {
            default: null,
            type: cc.Node
        },

        pacote2: {
            default: null,
            type: cc.Node
        },

        pacote3: {
            default: null,
            type: cc.Node
        },

        textoFase1: {
            default: null,
            type: cc.Label
        },

        tabrot: {
            default: null,
            type: cc.Node
        },

        pacoteA: {
            default: null,
            type: cc.Node
        },

        pacoteB: {
            default: null,
            type: cc.Node
        },

        pacoteC: {
            default: null,
            type: cc.Node
        },

        pacoteACorreto: {
            default: null,
            type: cc.Node
        },

        pacoteBCorreto: {
            default: null,
            type: cc.Node
        },

        pacoteCCorreto: {
            default: null,
            type: cc.Node
        },

        LblAcertos: {
            default: null,
            type: cc.Label
        },

        LblErros: {
            default: null,
            type: cc.Label
        },

        LblOrdemCorreta: {
            default: null,
            type: cc.Label
        },

        acertos: 0,

        erros: 0,

        contTexto: 0,

        roteamentos: 0,

        button1: 0,

        button2: 0,

        button3: 0,

        branco: 0,

        azul: 0,

        verde: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.acertos = 0;
        this.erros = 0;
        this.contTexto = 0;
        this.roteamentos = 0;
        this.button1 = 0;
        this.button2 = 0;
        this.button3 = 0;
        this.branco = 0;
        this.azul = 0;
        this.verde = 0;
        this.someNos();
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera como o pacote\n" + "trafega na rede, atraves do TCP";
    },

    someNos: function someNos() {
        this.no1.setPosition(1360, 0);
        this.no2.setPosition(1360, 0);
        this.no3.setPosition(1360, 0);
        this.no4.setPosition(1360, 0);
        this.no5.setPosition(1360, 0);
        this.no6.setPosition(1360, 0);
    },

    apareceNos: function apareceNos() {
        this.no1.setPosition(-240, -181);
        this.no2.setPosition(-181, -6);
        this.no3.setPosition(-15, -181);
        this.no4.setPosition(12, -27);
        this.no5.setPosition(-39, 103);
        this.no6.setPosition(193, 115);
    },

    aparecePacotes1: function aparecePacotes1() {
        if (this.pacote1.x == 213 && this.pacote1.y == 115) {
            this.pacoteA.setPosition(159, 57);
            this.pacote1.setPosition(215, 117);
        } else if (this.pacote3.x == 203 && this.pacote3.y == 115) {
            this.pacoteC.setPosition(-3, 57);
            this.pacote3.setPosition(205, 117);
        } else if (this.pacote2.x == 193 && this.pacote2.y == 115) {
            this.pacoteB.setPosition(-165, 57);
            this.pacote2.setPosition(195, 117);
        }
    },

    aparecePacotes2: function aparecePacotes2() {
        if (this.pacote3.x == 213 && this.pacote3.y == 115) {
            this.pacoteC.setPosition(159, 57);
            this.pacote3.setPosition(215, 117);
        } else if (this.pacote2.x == 203 && this.pacote2.y == 115) {
            this.pacoteB.setPosition(-3, 57);
            this.pacote2.setPosition(205, 117);
        } else if (this.pacote1.x == 193 && this.pacote1.y == 115) {
            this.pacoteA.setPosition(-165, 57);
            this.pacote1.setPosition(195, 117);
        }
    },

    aparecePacotes3: function aparecePacotes3() {
        if (this.pacote1.x == 213 && this.pacote1.y == 115) {
            this.pacoteA.setPosition(159, 57);
            this.pacote1.setPosition(215, 117);
        } else if (this.pacote2.x == 203 && this.pacote2.y == 115) {
            this.pacoteB.setPosition(-3, 57);
            this.pacote2.setPosition(205, 117);
        } else if (this.pacote3.x == 193 && this.pacote3.y == 115) {
            this.pacoteC.setPosition(-165, 57);
            this.pacote3.setPosition(195, 117);
        }
    },

    aparecePacotes4: function aparecePacotes4() {
        if (this.pacote2.x == 213 && this.pacote2.y == 115) {
            this.pacoteB.setPosition(159, 57);
            this.pacote2.setPosition(215, 117);
        } else if (this.pacote3.x == 203 && this.pacote3.y == 115) {
            this.pacoteC.setPosition(-3, 57);
            this.pacote3.setPosition(205, 117);
        } else if (this.pacote1.x == 193 && this.pacote1.y == 115) {
            this.pacoteA.setPosition(-165, 57);
            this.pacote1.setPosition(195, 117);
        }
    },

    aparecePacotes5: function aparecePacotes5() {
        if (this.pacote1.x == 213 && this.pacote1.y == 115) {
            this.pacoteA.setPosition(159, 57);
            this.pacote1.setPosition(215, 117);
        } else if (this.pacote3.x == 203 && this.pacote3.y == 115) {
            this.pacoteC.setPosition(-3, 57);
            this.pacote3.setPosition(205, 117);
        } else if (this.pacote2.x == 193 && this.pacote2.y == 115) {
            this.pacoteB.setPosition(-165, 57);
            this.pacote2.setPosition(195, 117);
        }
    },

    movePacote1: function movePacote1() {
        var pacote11 = cc.moveTo(4, cc.p(-181, -6));
        var pacote12 = cc.moveTo(4, cc.p(-39, 103));
        var pacote13 = cc.moveTo(4, cc.p(213, 115));
        this.pacote1.runAction(cc.sequence(pacote11, pacote12, pacote13));
        var pacote21 = cc.moveTo(2, cc.p(12, -37));
        var pacote22 = cc.moveTo(2, cc.p(193, 115));
        this.pacote2.runAction(cc.sequence(pacote21, pacote22));
        var pacote31 = cc.moveTo(2, cc.p(12, -27));
        var pacote32 = cc.moveTo(2, cc.p(-181, -6));
        var pacote33 = cc.moveTo(2, cc.p(-39, 103));
        var pacote34 = cc.moveTo(2, cc.p(203, 115));
        this.pacote3.runAction(cc.sequence(pacote31, pacote32, pacote33, pacote34));
    },

    movePacote2: function movePacote2() {
        if (this.roteamentos == 1) {
            var pacote31 = cc.moveTo(4, cc.p(-181, -6));
            var pacote32 = cc.moveTo(4, cc.p(-39, 103));
            var pacote33 = cc.moveTo(4, cc.p(213, 115));
            this.pacote3.runAction(cc.sequence(pacote31, pacote32, pacote33));
            var pacote11 = cc.moveTo(2, cc.p(12, -37));
            var pacote12 = cc.moveTo(2, cc.p(193, 115));
            this.pacote1.runAction(cc.sequence(pacote11, pacote12));
            var pacote21 = cc.moveTo(2, cc.p(12, -27));
            var pacote22 = cc.moveTo(2, cc.p(-181, -6));
            var pacote23 = cc.moveTo(2, cc.p(-39, 103));
            var pacote24 = cc.moveTo(2, cc.p(203, 115));
            this.pacote2.runAction(cc.sequence(pacote21, pacote22, pacote23, pacote24));
        } else if (this.roteamentos == 2) {
            pacote11 = cc.moveTo(4, cc.p(-181, -6));
            pacote12 = cc.moveTo(4, cc.p(-39, 103));
            var pacote13 = cc.moveTo(4, cc.p(213, 115));
            this.pacote1.runAction(cc.sequence(pacote11, pacote12, pacote13));
            pacote31 = cc.moveTo(2, cc.p(12, -37));
            pacote32 = cc.moveTo(2, cc.p(193, 115));
            this.pacote3.runAction(cc.sequence(pacote31, pacote32));
            pacote21 = cc.moveTo(2, cc.p(12, -27));
            pacote22 = cc.moveTo(2, cc.p(-181, -6));
            pacote23 = cc.moveTo(2, cc.p(-39, 103));
            pacote24 = cc.moveTo(2, cc.p(203, 115));
            this.pacote2.runAction(cc.sequence(pacote21, pacote22, pacote23, pacote24));
        } else if (this.roteamentos == 3) {
            pacote21 = cc.moveTo(4, cc.p(-181, -6));
            pacote22 = cc.moveTo(4, cc.p(-39, 103));
            pacote23 = cc.moveTo(4, cc.p(213, 115));
            this.pacote2.runAction(cc.sequence(pacote21, pacote22, pacote23));
            pacote11 = cc.moveTo(2, cc.p(12, -37));
            pacote12 = cc.moveTo(2, cc.p(193, 115));
            this.pacote1.runAction(cc.sequence(pacote11, pacote12));
            pacote11 = cc.moveTo(2, cc.p(12, -27));
            pacote12 = cc.moveTo(2, cc.p(-181, -6));
            pacote13 = cc.moveTo(2, cc.p(-39, 103));
            var pacote14 = cc.moveTo(2, cc.p(203, 115));
            this.pacote3.runAction(cc.sequence(pacote11, pacote12, pacote13, pacote14));
        } else if (this.roteamentos == 4) {
            pacote11 = cc.moveTo(4, cc.p(-181, -6));
            pacote12 = cc.moveTo(4, cc.p(-39, 103));
            pacote13 = cc.moveTo(4, cc.p(213, 115));
            this.pacote1.runAction(cc.sequence(pacote11, pacote12, pacote13));
            pacote21 = cc.moveTo(2, cc.p(12, -37));
            pacote22 = cc.moveTo(2, cc.p(193, 115));
            this.pacote2.runAction(cc.sequence(pacote21, pacote22));
            pacote31 = cc.moveTo(2, cc.p(12, -27));
            pacote32 = cc.moveTo(2, cc.p(-181, -6));
            pacote33 = cc.moveTo(2, cc.p(-39, 103));
            var pacote34 = cc.moveTo(2, cc.p(203, 115));
            this.pacote3.runAction(cc.sequence(pacote31, pacote32, pacote33, pacote34));
        }
    },

    trocaTexto1: function trocaTexto1() {
        if (this.contTexto === 0) {
            this.textoFase.string = "O TCP é um protocolo de nível\n" + "da camada de transporte. O Protocolo de controle de\n" + "transmissão provê confiabilidade, entrega na sequencia";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            this.textoFase.string = "correta e verificação de erros pacotes\n" + "de dados, entre os diferentes nós da rede";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            this.textoFase.string = "No mini jogo a seguir, cada bolinha verde\n" + "representa um nó na rede, o objetivo do jogo é\n" + "organizar o pacote que sai da sua origem e chega ao seu destino";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            this.textoFase.string = "Para isso existe o RIP\n" + "(Routing Information Protocol) que é um padrão para\n" + "troca de informações entre os gateways e hosts de roteamento.";
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
            this.textoFase.string = "A rede mundial de computadores é organizada\n" + "como um conjunto de sistemas autônomos.";
            this.contTexto += 1;
        } else if (this.contTexto == 5) {
            this.textoFase.string = "O RIP emite mensagens de atualização\n" + "das suas rotas (Tabelas de Roteamento) em intervalos regulares\n" + "(a cada 30 segundos) e quando a topologia da rede mudar.";
            this.contTexto += 1;
        } else if (this.contTexto == 6) {
            this.textoFase.string = "Os roteadores do RIP mantêm somente\n" + "a melhor rota à um destino.\n" + "com essas informações em mente, vamos ao mini-jogo";
            this.contTexto += 1;
        } else if (this.contTexto == 7) {
            this.textoFase.string = "Nesse cenario, a informaçao viajara\n" + "do roteador 1 ao roteador 6, nesse mini-jogo\n" + "o seu objetivo e colocar os pacotes na ordem correta";
            this.contTexto += 1;
        } else if (this.contTexto == 8) {
            this.textoFase.string = "visualize a ordem de chegada dos pacotes\n" + "e os organize, clicando neles, na ordem correta\n" + "demonstrada no canto superior da tela";
            this.contTexto += 1;
        } else if (this.contTexto == 9) {
            this.textoFase.string = "Tambem deve ser observado\n" + "a melhor rota a ser utilizada\n" + "clique em continuar para começar";
            this.contTexto += 1;
        } else if (this.contTexto == 10) {
            this.bg.setOpacity(255);
            this.apareceNos();
            this.tabrot.setPosition(321, -130);
            this.pacote1.setPosition(-240, -181);
            this.pacote2.setPosition(-230, -181);
            this.pacote3.setPosition(-220, -181);
            this.movePacote1();
            this.contTexto = 20;
        } else if (this.contTexto == 20) {
            this.textoFase1.string = "Parabéns, voce chegou roteou os 5 pacotes\n" + "fazendo " + this.acertos + " acertos e " + this.erros + " erros\n";
            this.contTexto += 1;
        } else if (this.contTexto == 21 && this.acertos >= 3) {
            this.textoFase1.string = "Voce obteve 3 ou mais acertos\n" + "Com as informações passadas nesta fase\n" + "responda agora o Quiz!\n" + "clique em continuar e boa sorte!";
            this.contTexto += 1;
        } else if (this.contTexto == 22 && this.acertos >= 3) {
            cc.director.loadScene("quizFase3");
        } else if (this.contTexto == 21 && this.erros >= 3) {
            this.textoFase1.string = "Voce obteve 3 ou mais erros\n" + "tente acertar pelo menos 3 roteamentos\n" + "jogue novamente!\n" + "clique em continuar e boa sorte!";
            this.contTexto += 1;
        } else if (this.contTexto == 22 && this.erros >= 3) {
            cc.director.loadScene("jogoFase3");
        }
    },

    gameOver: function gameOver() {
        if (this.roteamentos == 5) {
            this.pacoteA.setPosition(1390, -150);
            this.pacoteB.setPosition(1390, -150);
            this.pacoteC.setPosition(1390, -150);
            this.pacote1.setPosition(-1240, -181);
            this.pacote2.setPosition(-1230, -181);
            this.pacote3.setPosition(-1220, -181);
            this.professorFrente.setPosition(-199, 0);
            //this.someNos();
        }
    },

    colocaPacotesCorretos: function colocaPacotesCorretos() {
        if (this.roteamentos === 0) {
            this.pacoteACorreto.setPosition(-107, -58);
            this.branco = 1;
            this.pacoteBCorreto.setPosition(-12, -58);
            this.azul = 2;
            this.pacoteCCorreto.setPosition(75, -58);
            this.verde = 3;
        } else if (this.roteamentos == 1) {
            this.pacoteCCorreto.setPosition(-107, -58);
            this.verde = 1;
            this.pacoteACorreto.setPosition(-12, -58);
            this.branco = 2;
            this.pacoteBCorreto.setPosition(75, -58);
            this.azul = 3;
        } else if (this.roteamentos == 2) {
            this.pacoteACorreto.setPosition(-107, -58);
            this.branco = 1;
            this.pacoteCCorreto.setPosition(-12, -58);
            this.verde = 2;
            this.pacoteBCorreto.setPosition(75, -58);
            this.azul = 3;
        } else if (this.roteamentos == 3) {
            this.pacoteACorreto.setPosition(-107, -58);
            this.branco = 1;
            this.pacoteCCorreto.setPosition(-12, -58);
            this.verde = 2;
            this.pacoteBCorreto.setPosition(75, -58);
            this.azul = 3;
        } else if (this.roteamentos === 4) {
            this.pacoteACorreto.setPosition(-107, -58);
            this.branco = 1;
            this.pacoteBCorreto.setPosition(-12, -58);
            this.azul = 2;
            this.pacoteCCorreto.setPosition(75, -58);
            this.verde = 3;
        }
    },

    veriicaOrdem: function veriicaOrdem() {
        if (this.button1 == this.branco && this.button2 == this.azul && this.button3 == this.verde) {
            this.acertos += 1;
            this.roteamentos += 1;
            this.button1 = 0;
            this.button2 = 0;
            this.button3 = 0;
            this.pacoteA.setPosition(1390, -150);
            this.pacoteB.setPosition(1390, -150);
            this.pacoteC.setPosition(1390, -150);
            this.pacote1.setPosition(-240, -181);
            this.pacote2.setPosition(-230, -181);
            this.pacote3.setPosition(-220, -181);
            this.movePacote2();
        } else if (this.button1 === 0 || this.button2 === 0 || this.button3 === 0) {} else if (this.button1 != this.branco || this.button2 != this.azul || this.button3 != this.verde) {
            this.erros += 1;
            this.roteamentos += 1;
            this.button1 = 0;
            this.button2 = 0;
            this.button3 = 0;
            this.pacoteA.setPosition(1390, -150);
            this.pacoteB.setPosition(1390, -150);
            this.pacoteC.setPosition(1390, -150);
            this.pacote1.setPosition(-240, -181);
            this.pacote2.setPosition(-230, -181);
            this.pacote3.setPosition(-220, -181);
            this.movePacote2();
        }
    },

    btnButton: function btnButton() {
        if (this.button2 === 0 && this.button3 === 0) {
            this.button1 = 1;
            this.pacoteA.setPosition(-139, -150);
            this.veriicaOrdem();
        } else if (this.button2 == 0 && this.button3 == 1) {
            this.button1 = 2;
            this.pacoteA.setPosition(12, -150);
            this.veriicaOrdem();
        } else if (this.button2 == 1 && this.button3 == 0) {
            this.button1 = 2;
            this.pacoteA.setPosition(12, -150);
            this.veriicaOrdem();
        } else if (this.button2 == 2 && this.button3 == 1) {
            this.button1 = 3;
            this.pacoteA.setPosition(163, -150);
            this.veriicaOrdem();
        } else if (this.button2 == 1 && this.button3 == 2) {
            this.button1 = 3;
            this.pacoteA.setPosition(163, -150);
            this.veriicaOrdem();
        }
    },

    btnButton2: function btnButton2() {
        if (this.button1 === 0 && this.button3 === 0) {
            this.button2 = 1;
            this.pacoteB.setPosition(-139, -150);
            this.veriicaOrdem();
        } else if (this.button1 == 0 && this.button3 == 1) {
            this.button2 = 2;
            this.pacoteB.setPosition(12, -150);
            this.veriicaOrdem();
        } else if (this.button1 == 1 && this.button3 == 0) {
            this.button2 = 2;
            this.pacoteB.setPosition(12, -150);
            this.veriicaOrdem();
        } else if (this.button1 == 2 && this.button3 == 1) {
            this.button2 = 3;
            this.pacoteB.setPosition(163, -150);
            this.veriicaOrdem();
        } else if (this.button1 == 1 && this.button3 == 2) {
            this.button2 = 3;
            this.pacoteB.setPosition(163, -150);
            this.veriicaOrdem();
        }
    },

    btnButton3: function btnButton3() {
        if (this.button1 === 0 && this.button2 === 0) {
            this.button3 = 1;
            this.pacoteC.setPosition(-139, -150);
            this.veriicaOrdem();
        } else if (this.button1 == 0 && this.button2 == 1) {
            this.button3 = 2;
            this.pacoteC.setPosition(12, -150);
            this.veriicaOrdem();
        } else if (this.button1 == 1 && this.button2 == 0) {
            this.button3 = 2;
            this.pacoteC.setPosition(12, -150);
            this.veriicaOrdem();
        } else if (this.button1 == 2 && this.button2 == 1) {
            this.button3 = 3;
            this.pacoteC.setPosition(163, -150);
            this.veriicaOrdem();
        } else if (this.button1 == 1 && this.button2 == 2) {
            this.button3 = 3;
            this.pacoteC.setPosition(163, -150);
            this.veriicaOrdem();
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {

        this.colocaPacotesCorretos();

        this.gameOver();

        if (this.roteamentos === 0) {
            this.aparecePacotes1();
        } else if (this.roteamentos == 1) {
            this.aparecePacotes2();
        } else if (this.roteamentos == 2) {
            this.aparecePacotes3();
        } else if (this.roteamentos == 3) {
            this.aparecePacotes4();
        } else if (this.roteamentos == 4) {
            this.aparecePacotes5();
        }

        this.LblAcertos.string = "Acertos: " + this.acertos;
        this.LblErros.string = "Erros: " + this.erros;
    }
});

cc._RF.pop();
},{}],"logicaFase4":[function(require,module,exports){
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
},{}],"logo":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'd66a0PfiwZCZ5GzAjOGS5sD', 'logo');
// scripts/logo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        logoSong: {
            default: null,
            url: cc.AudioClip
        },

        timer: 0,

        duracaoLogo: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.timer = 0;
        cc.audioEngine.playEffect(this.logoSong, false);
    },

    vaiPraMain: function vaiPraMain() {
        cc.director.loadScene("main");
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.timer > this.duracaoLogo) {
            this.vaiPraMain();
        }
        this.timer += dt;
    }
});

cc._RF.pop();
},{}],"profCamada1":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'c5ddcGEn1dDCqKxChrdjrai', 'profCamada1');
// scripts/profs/profCamada1.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.setOpacity(0);
    }

});

cc._RF.pop();
},{}],"profCamada2":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'd1625RGXZFImoy+5eRjGQ8Y', 'profCamada2');
// scripts/profs/profCamada2.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.setOpacity(0);
    }

});

cc._RF.pop();
},{}],"profCamada3":[function(require,module,exports){
"use strict";
cc._RF.push(module, '53932RlzvlNIKpf6zUVC3fC', 'profCamada3');
// scripts/profs/profCamada3.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.setOpacity(0);
    }

});

cc._RF.pop();
},{}],"profCamada4":[function(require,module,exports){
"use strict";
cc._RF.push(module, '2b28ea0LxRBkY5XEt4jAd0L', 'profCamada4');
// scripts/profs/profCamada4.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.setOpacity(0);
    }

});

cc._RF.pop();
},{}],"quizFase1":[function(require,module,exports){
"use strict";
cc._RF.push(module, '3c658NO4SdNWJy5B6SE9q6m', 'quizFase1');
// scripts/quiz fases/quizFase1.js

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

        professor: {
            default: null,
            type: cc.Node
        },

        face: {
            default: null,
            type: cc.Node
        },

        falaquizprof: {
            default: null,
            type: cc.Node
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
            this.respostaCerta.setPositionY(112);
        } else if (this.contador == 2) {
            this.respostaCerta.setPositionY(-18);
        } else if (this.contador == 3) {
            this.respostaCerta.setPositionY(-258);
        } else if (this.contador == 4) {
            this.respostaCerta.setPositionY(112);
        }
    },

    perguntas: function perguntas() {
        if (this.contador === 0) {
            this.apareceRespostas();
            this.someResposta();
            this.pergunta.string = 'Quais os PDUs(Unidades de \n' + 'dados de protocolos) usados\n' + 'na camada de acesso a rede?';

            this.resposta1.string = 'Segmento';

            this.resposta2.string = 'Datagrama';

            this.resposta3.string = 'Bit e Quadros(Frames)';

            this.resposta4.string = 'Pacotes';
        } else if (this.contador == 1) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'A onda senoidal é a representação\n' + 'fundamental de um sinal analógico.\n' + ' Marque a alternativa abaixo que NÃO\n' + 'apresenta uma característica\n' + 'de onda senoidal.';

            this.resposta1.string = 'Sinalização';

            this.resposta2.string = 'Amplitude ';

            this.resposta3.string = 'Frequencia/Periodo';

            this.resposta4.string = 'Fase';
        } else if (this.contador == 2) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Em uma transmissão digital \n' + 'ao informar que existem\n' + '4 níveis de sinalização quantos bits\n' + 'estão sendo trafegados por sinal?';

            this.resposta1.string = '3';

            this.resposta2.string = '2';

            this.resposta3.string = '4';

            this.resposta4.string = '1';
        } else if (this.contador == 3) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'O sinal digital é caracterizado por...:';

            this.resposta1.string = 'Ser alterado em contínuo';

            this.resposta2.string = 'Ser um sinal que não possui falhas';

            this.resposta3.string = 'Ter um conjunto infinito de valores\n num intervalo de tempo qualquer';

            this.resposta4.string = 'Possuir apenas um\n conjunto limitado de valores';
        } else if (this.contador == 4) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'A latência é calculada\n' + 'através da soma de 4 atrasos.\n' + 'Marque a alternativa que apresenta\n' + 'os 4 atrasos que formam a latência:';

            this.resposta1.string = 'Atraso de transmissão, atraso de propagação\n' + 'atraso de fila, atraso de processamento.';

            this.resposta2.string = 'Atraso de sinais, atraso de propagação\n' + 'atraso de fila, atraso de processamento';

            this.resposta3.string = 'Atraso de transmissão, atraso de propagação\n' + 'atraso de recepção, atraso de processamento';

            this.resposta4.string = 'Atraso de mensagem, atraso de propagação\n' + 'atraso de recepção, atraso de processamento.';
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
        if (this.respCer >= 3) {
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
        this.someResposta();
        this.timer = 100000;
        this.contador = 0;
        this.saiAnimacao = 0;
        this.respCer = 0;
        this.respErr = 0;
        this.perguntas();
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
            var face = this.face.getComponent(cc.Animation);
            var professor = this.professor.getComponent(cc.Animation);
            respErrada1.playAdditive('apareceResposta1');
            respErrada2.playAdditive('apareceResposta2');
            respErrada3.playAdditive('apareceResposta3');
            respErrada4.playAdditive('apareceResposta4');
            resp1.playAdditive('apareceResposta1');
            resp2.playAdditive('apareceResposta2');
            resp3.playAdditive('apareceResposta3');
            resp4.playAdditive('apareceResposta4');
            fala.playAdditive('apareceFalaProfessor');
            var animaFace = face.play("falaProfessor1");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            professor.playAdditive('animaProfessor1');
        } else if (this.saiAnimacao === 0) {}
    },

    goToCredits: function goToCredits() {
        cc.director.loadScene("credits");
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.timer == 3) {
            this.mostraResposta();
        } else if (this.timer < 1) {
            this.perguntas();
        } else if (this.contador == 5) {
            this.gameover();
        }

        this.timer -= dt;
    }
});

cc._RF.pop();
},{}],"quizFase2":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'da591+6Q01M7rrbZhQRZ/KS', 'quizFase2');
// scripts/quiz fases/quizFase2.js

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

        professor: {
            default: null,
            type: cc.Node
        },

        face: {
            default: null,
            type: cc.Node
        },

        falaquizprof: {
            default: null,
            type: cc.Node
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
            this.respostaCerta.setPositionY(112);
        } else if (this.contador == 2) {
            this.respostaCerta.setPositionY(-18);
        } else if (this.contador == 3) {
            this.respostaCerta.setPositionY(-258);
        } else if (this.contador == 4) {
            this.respostaCerta.setPositionY(112);
        }
    },

    perguntas: function perguntas() {
        if (this.contador === 0) {
            this.apareceRespostas();
            this.someResposta();
            this.pergunta.string = 'A camada Internet\n é responsável por...';

            this.resposta1.string = 'Controlar de forma física o acesso a rede';

            this.resposta2.string = 'Gerar e transmitir o sinal pelo meio';

            this.resposta3.string = 'Definir e tratar os endereços lógicos\n de origem/destino na rede';

            this.resposta4.string = 'Fazer a comunicaçã entre os processos';
        } else if (this.contador == 1) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual dos seguintes\n NÃO é verdadeiro\n sobre um endereço IP?';

            this.resposta1.string = 'Um endereço IPv4\n geralmente é representado no formato\n hexadecimal para o usuário';

            this.resposta2.string = 'Um endereço IP é um endereço lógico';

            this.resposta3.string = 'Um endereço IP é globalmente\n exclusivo em uma rede';

            this.resposta4.string = 'Um endereço IP pode ser considerado\n como consistindo de\n uma parte de rede e uma parte de host';
        } else if (this.contador == 2) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual das seguintes\n máscaras padrão está\n incorreta?';

            this.resposta1.string = 'Máscara Classe A 255.0.0.0 ou /8';

            this.resposta2.string = 'Máscara Classe D 255.255.255.255 ou /32';

            this.resposta3.string = 'Máscara Classe B 255.255.0.0 ou /16';

            this.resposta4.string = 'Máscara classe C 255.255.255.0 ou /24';
        } else if (this.contador == 3) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'O que faz o ARP\n (Address Resolution Protocol)?';

            this.resposta1.string = 'Resolve endereços MAC\n para endereços IP';

            this.resposta2.string = 'Resolve o campo TYPE\n para o endereço MAC';

            this.resposta3.string = 'Resolve o endereço MAC\n para o campo TYPE';

            this.resposta4.string = 'Resolve o endereço IP\n para endereço MAC';
        } else if (this.contador == 4) {
            this.apareceRespostas();
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual o numero máximo\n de hosts possíveis em\n uma rede classe C?';

            this.resposta1.string = '254';

            this.resposta2.string = '128';

            this.resposta3.string = '256';

            this.resposta4.string = '64';
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
        if (this.respCer >= 3) {
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
        this.someResposta();
        this.timer = 100000;
        this.contador = 0;
        this.saiAnimacao = 0;
        this.respCer = 0;
        this.respErr = 0;
        this.perguntas();
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
            var face = this.face.getComponent(cc.Animation);
            var professor = this.professor.getComponent(cc.Animation);
            respErrada1.playAdditive('apareceResposta1');
            respErrada2.playAdditive('apareceResposta2');
            respErrada3.playAdditive('apareceResposta3');
            respErrada4.playAdditive('apareceResposta4');
            resp1.playAdditive('apareceResposta1');
            resp2.playAdditive('apareceResposta2');
            resp3.playAdditive('apareceResposta3');
            resp4.playAdditive('apareceResposta4');
            fala.playAdditive('apareceFalaProfessor');
            face.play("falaProfessor2");
            professor.playAdditive('animaProfessora2-1');
        } else if (this.saiAnimacao === 0) {}
    },

    goToCredits: function goToCredits() {
        cc.director.loadScene("credits");
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.timer == 3) {
            this.mostraResposta();
        } else if (this.timer < 1) {
            this.perguntas();
        } else if (this.contador == 5) {
            this.gameover();
        }

        this.timer -= dt;
    }
});

cc._RF.pop();
},{}],"quizFase3":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'f22e5aGH4xNvqXYx+gl+gj4', 'quizFase3');
// scripts/quiz fases/quizFase3.js

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

        resp: 0,

        contador: 0,

        timer: 0,

        respCer: 0,

        respErr: 0
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
            this.respostaCerta.setPositionY(112);
        } else if (this.contador == 2) {
            this.respostaCerta.setPositionY(-18);
        } else if (this.contador == 3) {
            this.respostaCerta.setPositionY(-258);
        } else if (this.contador == 4) {
            this.respostaCerta.setPositionY(112);
        }
    },

    perguntas: function perguntas() {
        if (this.contador === 0) {
            this.someResposta();
            this.pergunta.string = 'A camada transporte é responsável por...';

            this.resposta1.string = 'Gerenciar os pacotes na rede';

            this.resposta2.string = 'Gerar e transmitir o sinal pelo meio';

            this.resposta3.string = 'Estabelecer uma conexão fim a fim\n (conexão confiável)entre duas aplicações';

            this.resposta4.string = 'Acessar a rede em aplicações Web';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual destes protocolos não pertence\n a camada de transporte?';

            this.resposta1.string = 'ARP';

            this.resposta2.string = 'TCP';

            this.resposta3.string = 'UDP';

            this.resposta4.string = 'RTP';
        } else if (this.contador == 2) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual a ordem correta\n do protocolo Three Way Handshake\n do TCP/IP?';

            this.resposta1.string = 'SYN, SYN-SYN, ACK-ACK';

            this.resposta2.string = 'SYN, SYN-ACK, ACK';

            this.resposta3.string = 'ACK, ACK-SYN, SYN';

            this.resposta4.string = 'SYN, ACK-SYN, ACK';
        } else if (this.contador == 3) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Na camada de transporte\n o protocolo para garantir\n a confiabilidade é...?';

            this.resposta1.string = 'IP';

            this.resposta2.string = 'FTP';

            this.resposta3.string = 'HTTP';

            this.resposta4.string = 'TCP';
        } else if (this.contador == 4) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Os protocolos de camada de transporte\n que estabelecem uma conexão com outro nó\n antes de começarem a transmitir dados\n são conhecidos como ?';

            this.resposta1.string = 'Protocolos orientados à conexão';

            this.resposta2.string = 'Protocolos sem conexão';

            this.resposta3.string = 'Protocolos orientados a Syn';

            this.resposta4.string = 'Protocolos orientados para Ack';
        }
    },

    buttonRespCerto: function buttonRespCerto() {
        this.timer = 3;
        this.respCer += 1;
        this.contador += 1;
    },

    buttonRespErrado: function buttonRespErrado() {
        this.timer = 3;
        this.respErr += 1;
        this.contador += 1;
    },

    gameover: function gameover() {
        this.telaFinalQuiz.setPositionX(0);
        if (this.respCer >= 3) {
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
        this.someResposta();
        this.timer = 100000;
        this.contador = 0;
        this.respCer = 0;
        this.respErr = 0;
        this.perguntas();
    },

    goToCredits: function goToCredits() {
        cc.director.loadScene("credits");
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.timer == 3) {
            this.mostraResposta();
        } else if (this.timer < 1) {
            this.perguntas();
        } else if (this.contador == 5) {
            this.gameover();
        }

        this.timer -= dt;
    }
});

cc._RF.pop();
},{}],"quizFase4":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'be410/DQ6NMUa2FROMcamiA', 'quizFase4');
// scripts/quiz fases/quizFase4.js

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

        resp: 0,

        contador: 0,

        timer: 0,

        respCer: 0,

        respErr: 0
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
            this.respostaCerta.setPositionY(112);
        } else if (this.contador == 2) {
            this.respostaCerta.setPositionY(-18);
        } else if (this.contador == 3) {
            this.respostaCerta.setPositionY(-258);
        } else if (this.contador == 4) {
            this.respostaCerta.setPositionY(112);
        }
    },

    perguntas: function perguntas() {
        if (this.contador === 0) {
            this.someResposta();
            this.pergunta.string = 'A camada de aplicação é responsável por...';

            this.resposta1.string = 'Gerenciar os pacotes na rede';

            this.resposta2.string = 'Estabelecer uma conexão fim a fim\n (conexão confiável)entre a origem e o destino\n dos dados.';

            this.resposta3.string = 'Gerenciar os diversos protocolos\n de comunicação das suas aplicações'; //permitir a criptografia de dados para garantia de segurança. Oferecer a interface de usabilidade para os clientes. 

            this.resposta4.string = '';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Na camada de aplicação\n o protocolo HTTP é responsavel por...?';

            this.resposta1.string = 'Transferir hipertextos';

            this.resposta2.string = 'Receber arquivos de vídeo da Internet ';

            this.resposta3.string = 'Exibir páginas web';

            this.resposta4.string = 'Baixar arquivos Torrent';
        } else if (this.contador == 2) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'O programa Filezilla e o protocolo FTP\n são responsaveis por ';

            this.resposta1.string = 'Segurança na rede';

            this.resposta2.string = 'Transferencia de arquivos';

            this.resposta3.string = 'Armazenamento em nuvem'; // trocar resposta 

            this.resposta4.string = 'Criptografia de dados';
        } else if (this.contador == 3) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual destes é um protocolo\n de camada de aplicação?';

            this.resposta1.string = 'TCP';

            this.resposta2.string = 'IP';

            this.resposta3.string = 'Ethernet';

            this.resposta4.string = 'HTTP';
        } else if (this.contador == 4) {
            this.someResposta();
            this.trocaRespostas();
            //modificar a pergunta
            //pra que que serve o protocolo DNS.
            this.pergunta.string = 'O que significa\n um código de status HTTP de "404"?';

            this.resposta1.string = 'Erro de protocolo ';

            this.resposta2.string = 'Documento foi movido ';

            this.resposta3.string = 'Recuperação bem sucedida do documento';

            this.resposta4.string = 'Documento não encontrado ';
        }
    },

    buttonRespCerto: function buttonRespCerto() {
        this.timer = 3;
        this.respCer += 1;
        this.contador += 1;
    },

    buttonRespErrado: function buttonRespErrado() {
        this.timer = 3;
        this.respErr += 1;
        this.contador += 1;
    },

    goToCredits: function goToCredits() {
        cc.director.loadScene("credits");
    },

    gameover: function gameover() {
        this.telaFinalQuiz.setPositionX(0);
        if (this.respCer >= 3) {
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
        this.someResposta();
        this.timer = 100000;
        this.contador = 0;
        this.respCer = 0;
        this.respErr = 0;
        this.perguntas();
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.timer == 3) {
            this.mostraResposta();
        } else if (this.timer < 1) {
            this.perguntas();
        } else if (this.contador == 5) {
            this.gameover();
        }

        this.timer -= dt;
    }
});

cc._RF.pop();
},{}],"quizFase5":[function(require,module,exports){
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

        resp: 0,

        contador: 0,

        timer: 0,

        respCer: 0,

        respErr: 0
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
            this.someResposta();
            this.pergunta.string = 'Questao 1:Qual protocolo é responsável por resolver\n' + 'o mapeamento entre os endereço IP\n' + 'e os endereços MAC da rede?';

            this.resposta1.string = 'TCP';

            this.resposta2.string = 'DHCP';

            this.resposta3.string = 'ARP'; //correta

            this.resposta4.string = 'DNS';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 2:Assinale a alternativa que representa\n' + 'o tamanho em bytes dos campos de endereço MAC\n' + 'IPv4 e IPv6, respectivamente.';

            this.resposta1.string = '4, 6, 16';

            this.resposta2.string = '6, 4, 16'; //correta

            this.resposta3.string = '48, 32, 128';

            this.resposta4.string = '16, 32, 64';
        } else if (this.contador == 2) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 3: Na pilha TCP/IP, a função de enviar\n' + 'ao transmissor da informação uma confirmação\n' + 'de recebimento da mensagem(ack) é realizada pela camada:';

            this.resposta1.string = 'Transporte';

            this.resposta2.string = 'Acesso a rede';

            this.resposta3.string = 'Aplicaçao';

            this.resposta4.string = 'Internet'; //correta
        } else if (this.contador == 3) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 4: Assinale a alternativa que contém protocolos\n' + 'das camadas de enlace, rede, transporte e aplicação\n' + 'respectivamente, da pilha de protocolos TCP/IP.';

            this.resposta1.string = 'ARP, IP, TCP, IP';

            this.resposta2.string = 'PPP, ICMP, UDP, SNMP';

            this.resposta3.string = 'Ethernet, PPP, UDP, SSH'; //correta

            this.resposta4.string = 'Ethernet, DNS, TCP, SMTP';
        } else if (this.contador == 4) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 5: O endereço de um recurso disponível em uma rede\n' + 'seja na Internet ou numa rede corporativa Intranet\n' + 'tem a seguinte estrutura:';

            this.resposta1.string = 'protocolo://caminho/recurso/máquina. ';

            this.resposta2.string = 'protocolo://caminho/máquina/recurso. ';

            this.resposta3.string = 'protocolo://máquina/caminho/recurso. '; //correto

            this.resposta4.string = 'máquina://protocolo/caminho/recurso. ';
        } else if (this.contador == 5) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 6: Na classe padrão C\n' + 'quantos bytes são reservados para redes?';

            this.resposta1.string = '01 byte'; //correto

            this.resposta2.string = '02 bytes';

            this.resposta3.string = '03 bytes';

            this.resposta4.string = '04 bytes';
        } else if (this.contador == 6) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 7: Como é denominado o protocolo\n' + 'de configuração dinâmica de IP?';

            this.resposta1.string = 'FTP';

            this.resposta2.string = 'DHCP'; //correto

            this.resposta3.string = 'HTTP';

            this.resposta4.string = 'DNS';
        } else if (this.contador == 7) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 8: Qual detses protocolos é mais rápido\n' + 'porém menos confiável?';

            this.resposta1.string = 'UDP'; //correto

            this.resposta2.string = 'FTP';

            this.resposta3.string = 'SSH';

            this.resposta4.string = 'TCP';
        } else if (this.contador == 8) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 9: Qual é a classe de endereço IP\n' + 'que utiliza a máscara padrão 255.255.0.0?';

            this.resposta1.string = 'A';

            this.resposta2.string = 'D';

            this.resposta3.string = 'C';

            this.resposta4.string = 'B'; //correta
        } else if (this.contador == 9) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Questao 10: O conjunto formado por um endereço IP\n' + 'e um número de porta constitui:';

            this.resposta1.string = 'Uma conexao';

            this.resposta2.string = 'Um socket'; //correta

            this.resposta3.string = 'Um datagrama';

            this.resposta4.string = 'O endereço de gateway';
        }
    },

    buttonRespCerto: function buttonRespCerto() {
        this.timer = 3;
        this.respCer += 1;
        this.contador += 1;
    },

    buttonRespErrado: function buttonRespErrado() {
        this.timer = 3;
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
        this.someResposta();
        this.timer = 100000;
        this.contador = 0;
        this.respCer = 0;
        this.respErr = 0;
        this.perguntas();
    },

    goToCredits: function goToCredits() {
        cc.director.loadScene("credits");
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
},{}],"selectStage":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'ca0f0YsqNpNQI4m4zG6+h5M', 'selectStage');
// scripts/selectStage.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        Camada1: {
            default: null,
            type: cc.Node
        },

        Camada2: {
            default: null,
            type: cc.Node
        },

        Camada3: {
            default: null,
            type: cc.Node
        },

        Camada4: {
            default: null,
            type: cc.Node
        },

        Camada5: {
            default: null,
            type: cc.Node
        },

        testeFinal: {
            default: null,
            type: cc.Node
        },

        button1: {
            default: null,
            type: cc.Node
        },

        button2: {
            default: null,
            type: cc.Node
        },

        contador: 0
    },

    vaiPraFrente: function vaiPraFrente() {
        if (this.contador == 1) {
            var camada1 = this.Camada1.getComponent(cc.Animation);
            camada1.playAdditive('PraFrente');
            var camada2 = this.Camada2.getComponent(cc.Animation);
            camada2.playAdditive('PraTras');
            this.contador += 1;
        } else if (this.contador == 2) {
            camada2 = this.Camada2.getComponent(cc.Animation);
            camada2.playAdditive('PraFrente');
            var camada3 = this.Camada3.getComponent(cc.Animation);
            camada3.playAdditive('PraTras');
            this.contador += 1;
        } else if (this.contador == 3) {
            camada3 = this.Camada3.getComponent(cc.Animation);
            camada3.playAdditive('PraFrente');
            var camada4 = this.Camada4.getComponent(cc.Animation);
            camada4.playAdditive('PraTras');
            this.contador += 1;
        } else if (this.contador == 4) {
            camada4 = this.Camada4.getComponent(cc.Animation);
            camada4.playAdditive('PraFrente');
            var camada5 = this.Camada5.getComponent(cc.Animation);
            camada5.playAdditive('PraTras');
            this.contador += 1;
        } else if (this.contador == 5) {
            camada5 = this.Camada5.getComponent(cc.Animation);
            camada5.playAdditive('PraFrente');
        }
    },

    vaiPraTras: function vaiPraTras() {
        if (this.contador == 5) {
            var camada5 = this.Camada5.getComponent(cc.Animation);
            camada5.playAdditive('PraFrente');
            var camada4 = this.Camada4.getComponent(cc.Animation);
            camada4.playAdditive('PraTras');
            this.contador -= 1;
        } else if (this.contador == 4) {
            camada4 = this.Camada4.getComponent(cc.Animation);
            camada4.playAdditive('PraFrente');
            var camada3 = this.Camada3.getComponent(cc.Animation);
            camada3.playAdditive('PraTras');
            this.contador -= 1;
        } else if (this.contador == 3) {
            camada3 = this.Camada3.getComponent(cc.Animation);
            camada3.playAdditive('PraFrente');
            var camada2 = this.Camada2.getComponent(cc.Animation);
            camada2.playAdditive('PraTras');
            this.contador -= 1;
        } else if (this.contador == 2) {
            camada2 = this.Camada2.getComponent(cc.Animation);
            camada2.playAdditive('PraFrente');
            var camada1 = this.Camada1.getComponent(cc.Animation);
            camada1.playAdditive('PraTras');
            this.contador -= 1;
        } else if (this.contador == 1) {
            camada1 = this.Camada1.getComponent(cc.Animation);
            camada1.playAdditive('PraFrente');
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.contador = 1;
    },

    onDestroy: function onDestroy() {
        cc.audioEngine.pauseAll();
    },

    verificaContador: function verificaContador() {
        if (this.contador == 1) {
            this.button1.setPosition(-1300, 0);
        } else if (this.contador == 5) {
            this.button2.setPosition(1300, 0);
        } else {
            this.button1.setPosition(-366, 0);
            this.button2.setPosition(366, 0);
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.verificaContador();
    }
});

cc._RF.pop();
},{}]},{},["btnCarregarJogo","btnNovoJogo","btnOpcoes","btnPlayCamada1","btnPlayCamada2","btnPlayCamada3","btnPlayCamada4","btnPlayCamada5","btnSair","btnQuiz1","btnQuiz2","btnQuiz3","btnQuiz4","btnQuiz5","btnAcessoARede","btnAplicacao","btnInternet","btnTesteFinal","btnTransporte","btnContFase1","btnContFase2","btnContFase3","btnContFase4","btnContFase5","creditroll","alvo","logicaFase1-1","logicaFase1","logicaFase2","logicaFase3","logicaFase4","logo","profCamada1","profCamada2","profCamada3","profCamada4","quizFase1","quizFase2","quizFase3","quizFase4","quizFase5","selectStage"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xvZ2ljYSBmYXNlcy9hbHZvLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGNhbWFkYXMvYnRuQWNlc3NvQVJlZGUuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgY2FtYWRhcy9idG5BcGxpY2FjYW8uanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0bkNhcnJlZ2FySm9nby5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBkaWFsb2d1ZXMvYnRuQ29udEZhc2UxLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGRpYWxvZ3Vlcy9idG5Db250RmFzZTIuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgZGlhbG9ndWVzL2J0bkNvbnRGYXNlMy5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBkaWFsb2d1ZXMvYnRuQ29udEZhc2U0LmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGRpYWxvZ3Vlcy9idG5Db250RmFzZTUuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgY2FtYWRhcy9idG5JbnRlcm5ldC5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuTm92b0pvZ28uanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0bk9wY29lcy5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhMS5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhMi5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhMy5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhNC5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhNS5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9uIHF1aXovYnRuUXVpejEuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbiBxdWl6L2J0blF1aXoyLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b24gcXVpei9idG5RdWl6My5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9uIHF1aXovYnRuUXVpejQuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbiBxdWl6L2J0blF1aXo1LmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idG5TYWlyLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGNhbWFkYXMvYnRuVGVzdGVGaW5hbC5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBjYW1hZGFzL2J0blRyYW5zcG9ydGUuanMiLCJhc3NldHMvc2NyaXB0cy9jcmVkaXRyb2xsLmpzIiwiYXNzZXRzL3NjcmlwdHMvbG9naWNhIGZhc2VzL2xvZ2ljYUZhc2UxLTEuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTEuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTIuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTMuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTQuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dvLmpzIiwiYXNzZXRzL3NjcmlwdHMvcHJvZnMvcHJvZkNhbWFkYTEuanMiLCJhc3NldHMvc2NyaXB0cy9wcm9mcy9wcm9mQ2FtYWRhMi5qcyIsImFzc2V0cy9zY3JpcHRzL3Byb2ZzL3Byb2ZDYW1hZGEzLmpzIiwiYXNzZXRzL3NjcmlwdHMvcHJvZnMvcHJvZkNhbWFkYTQuanMiLCJhc3NldHMvc2NyaXB0cy9xdWl6IGZhc2VzL3F1aXpGYXNlMS5qcyIsImFzc2V0cy9zY3JpcHRzL3F1aXogZmFzZXMvcXVpekZhc2UyLmpzIiwiYXNzZXRzL3NjcmlwdHMvcXVpeiBmYXNlcy9xdWl6RmFzZTMuanMiLCJhc3NldHMvc2NyaXB0cy9xdWl6IGZhc2VzL3F1aXpGYXNlNC5qcyIsImFzc2V0cy9zY3JpcHRzL3F1aXogZmFzZXMvcXVpekZhc2U1LmpzIiwiYXNzZXRzL3NjcmlwdHMvc2VsZWN0U3RhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0k7O0FBRUE7QUFDSTtBQURROztBQUlaO0FBQ0E7O0FBUks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7QUF6Q0Q7O0FBK0NaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUlEO0FBQ0E7O0FBckVLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLO0FBekNEOztBQStDWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBOztBQW5FSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGSTs7QUFLUjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGRTs7QUFLTjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQTFCUTs7QUE2Qlo7QUFDSTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNIO0FBQ0c7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBSUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0g7QUFDRztBQUNBO0FBSUE7QUFDSDtBQUNHO0FBQ0E7QUFJQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQWpMSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGRTs7QUFLTjtBQWhCUTs7QUFtQlo7QUFDSTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFJQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBSUE7QUFDSDtBQUNHO0FBQ0E7QUFFQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUdBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDs7QUFwR0k7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFOUTs7QUFTWjtBQUNJO0FBQ0k7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBRUg7O0FBL0NJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBTlE7O0FBU1o7QUFDSTtBQUNJO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFJRDtBQUNBO0FBQ0k7QUFDQTtBQUdIOztBQXRESTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQTFCUTs7QUE2Qlo7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFFQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFJSDs7QUFyRUk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBekNEOztBQWdEWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBOztBQXBFSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGTztBQURIOztBQU9aO0FBQ0k7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDSDs7QUFqQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFJQTtBQUNJO0FBQ0g7O0FBM0JJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDQTs7QUFJQTtBQUNJO0FBQ0g7O0FBdkJJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLO0FBekNEOztBQStDWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFJRDtBQUNBOztBQXJFSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUF6Q0Q7O0FBZ0RaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0E7O0FBcEVLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBVFE7O0FBWVo7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFFSDs7QUFFRDtBQUNIO0FBekNJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZBOztBQUtKO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZROztBQUtaO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZnQjs7QUFLcEI7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRkU7O0FBS047QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlM7O0FBS2I7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRk07O0FBS1Y7O0FBRUE7O0FBRUE7QUFyRlE7O0FBd0ZaO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVIOztBQUVEO0FBQ0k7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0k7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNKO0FBQ0k7QUFDQTtBQUNBO0FBQ0o7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQWJSO0FBZUg7O0FBRVQ7QUFDWTtBQUNJO0FBQ0k7QUFDQTtBQUNKO0FBQ0k7QUFDQTtBQUNKO0FBQ0k7QUFDQTtBQVRSO0FBV0g7QUFqQ3VCO0FBbUMvQjs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDQTs7QUFFSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7QUF4Vkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkE7O0FBS0o7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDSTtBQUNBO0FBRkk7O0FBS1I7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkU7O0FBS047QUFDSTtBQUNBO0FBRmdCOztBQUtwQjtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGRTs7QUFLTjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGUzs7QUFLYjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGSTs7QUFLUjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDs7QUFFQTs7QUFFQTs7QUFFQTs7QUEzR1E7O0FBK0daO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0k7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNKO0FBQ0k7QUFDQTtBQUNBO0FBUlI7QUFVSDs7QUFFVDtBQUNZO0FBQ0k7QUFDSTtBQUNBO0FBQ0o7QUFDSTtBQUNBO0FBTlI7QUFRSDtBQXpCdUI7QUEyQi9COztBQUVEO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUdKOztBQUVEOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUdKOztBQUVEO0FBQ0E7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0g7QUFDRztBQUNBO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFHSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7O0FBRUQ7QUFDSTtBQUNJO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0c7QUFDQTtBQUNGO0FBQ0c7QUFDRDtBQUNGO0FBQ0o7O0FBRUQ7QUFDQTs7QUFFSTs7QUFFQTtBQUNJO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDSDtBQUlKO0FBbmFJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZBOztBQUtKO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZlOztBQUtuQjtBQUNJO0FBQ0E7QUFGZTs7QUFLbkI7QUFDSTtBQUNBO0FBRmU7O0FBS25CO0FBQ0k7QUFDQTtBQUZlOztBQUtuQjtBQUNJO0FBQ0E7QUFGZTs7QUFLbkI7QUFDSTtBQUNBO0FBRmU7O0FBS25CO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGZTs7QUFLbkI7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk07O0FBS1Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBdExROztBQTBMWjtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBSUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUdBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFJQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUdBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDSDtBQUNHO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUVIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0M7QUFDRztBQUNKO0FBQ0E7QUFDQTtBQUNDO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNJO0FBQ0g7QUFDSjs7QUFHRDtBQUNBO0FBQ0k7O0FBRUE7QUFDSTtBQUNIOztBQUVEO0FBQ0g7QUFqaUJJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZBOztBQUtKO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGSTs7QUFLUjtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGWTs7QUFLaEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCO0FBQ0k7QUFDQTtBQUZZOztBQUtoQjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBckpROztBQXlKWjtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBSUE7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFLRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0E7O0FBRUk7O0FBRUE7O0FBRUE7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUNBO0FBQ0g7QUE1a0JJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZTOztBQUtiO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZVOztBQUtkOztBQUVBOztBQUVBOztBQUVBOztBQTdFUTs7QUFpRlo7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUlEO0FBQ0E7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0g7QUFoVEk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBOztBQUVJO0FBQ0k7QUFDQTtBQUZNOztBQUtWOztBQUVBO0FBVFE7O0FBWVo7QUFDQTtBQUNJO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFFSDtBQUNEO0FBRUg7QUFqQ0k7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFFSDs7QUFwQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFDSDs7QUFuQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFDSDs7QUFuQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFDSDs7QUFuQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmM7O0FBS2xCO0FBQ0k7QUFDQTtBQUZjOztBQUtsQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRmM7O0FBS2xCO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZVOztBQUtkOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBekhROztBQTRIWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQU1BOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUtBOztBQUdBOztBQUdBOztBQUdBO0FBRUM7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFFSDtBQUNHO0FBR0g7O0FBRUQ7O0FBRUE7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFHSjs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIOztBQUVEO0FBRUg7QUEzVUk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmM7O0FBS2xCO0FBQ0k7QUFDQTtBQUZjOztBQUtsQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRmM7O0FBS2xCO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZVOztBQUtkOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBekhROztBQTRIWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFFSDtBQUNHO0FBR0g7O0FBRUQ7O0FBRUE7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUdKOztBQUVEO0FBQ0k7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7O0FBRUQ7QUFFSDtBQXpUSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmM7O0FBS2xCO0FBQ0k7QUFDQTtBQUZZOztBQUtoQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQXBGUTs7QUF1Rlo7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0k7QUFDQTtBQUVIO0FBQ0c7QUFHSDs7QUFFRDs7QUFFQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIOztBQUVEO0FBRUg7QUE1T0k7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZjOztBQUtsQjtBQUNJO0FBQ0E7QUFGWTs7QUFLaEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFwRlE7O0FBdUZaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0k7QUFDQTtBQUVIO0FBQ0c7QUFHSDs7QUFFRDs7QUFFQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7O0FBRUQ7QUFFSDtBQTlPSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmM7O0FBS2xCO0FBQ0k7QUFDQTtBQUZZOztBQUtoQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQXBGUTs7QUF1Rlo7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBOztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0k7QUFDQTtBQUVIO0FBQ0c7QUFHSDs7QUFFRDs7QUFFQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIOztBQUVEO0FBRUg7QUFqVUk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUF6Q1E7O0FBNENaO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNJO0FBRUg7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDSTtBQUNIO0FBcklJIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwaWNrUmFkaW9zOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b241OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMS5zZXRQb3NpdGlvbigzMjYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMi5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMy5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNC5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd1Byb2ZCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wcm9mMS5zZXRPcGFjaXR5KDEwMDApO1xyXG4gICAgICAgIHRoaXMucHJvZjIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnByb2YzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mNC5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMubXVkYUJ1dHRvbigpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2YxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Y0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYUJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbjEuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjIuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjMuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjQuc2V0UG9zaXRpb24oMzI2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjUuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNob3dQcm9mQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucHJvZjEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnByb2YyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjQuc2V0T3BhY2l0eSgxMDAwKTtcclxuICAgICAgICB0aGlzLm11ZGFCdXR0b24oKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvU2VsZWN0RmFzZTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzZWxlY3RGYXNlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcXVhZHJvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmYWNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ0blZvbHRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSB0aGlzLmNvbnRhZG9yIC0gMTtcclxuICAgICAgICB0aGlzLm11ZGFUZXh0bygpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYVRleHRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ZXh0byA9IHRoaXMubGFiZWwuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdmFyIHByb2Zlc3NvciA9IHRoaXMucHJvZmVzc29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciBmYWNlID0gdGhpcy5mYWNlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdtb3ZlUHJvZmVzc29yJyk7XHJcbiAgICAgICAgICAgIHZhciBhbmltYUZhY2UgPSBmYWNlLnBsYXkoXCJmYWxhUHJvZmVzc29yMlwiKTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnNwZWVkID0gMC41O1xyXG4gICAgICAgICAgICBhbmltYUZhY2UucmVwZWF0Q291bnQgPSBJbmZpbml0eTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnUmVkZSBkZSBjb21wdXRhZG9yZXMgXFxuJytcclxuICAgICAgICAgICAgJ8OpIFNpc3RlbWEgZGUgY29tdW5pY2HDp8OjbyBkZSBkYWRvcyBcXG4nKyBcclxuICAgICAgICAgICAgJ2NvbnN0aXR1w61kbyBhdHJhdsOpcyBkYSBpbnRlcmxpZ2HDp8OjbyBlbnRyZVxcbicrIFxyXG4gICAgICAgICAgICAnY29tcHV0YWRvcmVzIGUgb3V0cm9zIGRpc3Bvc2l0aXZvcyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnZGlzdHJpYnXDrWRvcyBnZW9ncmFmaWNhbWVudGUsIGNvbSBhIGZpbmFsaWRhZGVcXG4nKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGUgdHJvY2FyIGluZm9ybWHDp8O1ZXMgZSBjb21wYXJ0aWxoYXIgcmVjdXJzb3MnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ1BhcmEgZW50ZW5kZXJtb3MgbWVsaG9yIGEgcmVkZSBkZSBjb21wdXRhZG9yZXNcXG4nK1xyXG4gICAgICAgICAgICAncHJlY2lzYW1vcyBjb25oZWNlclxcbicrIFxyXG4gICAgICAgICAgICAnTyBtb2RlbG8gbG9naWNvIE9TSVxcbicrIFxyXG4gICAgICAgICAgICAnZSBhIGFycXVpdGV0dXJhIFRDUC9JUCc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnYW5pbWFQcm9mZXNzb3IxJyk7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZSA9IGZhY2UucGxheShcImZhbGFQcm9mZXNzb3IzXCIpO1xyXG4gICAgICAgICAgICBhbmltYUZhY2Uuc3BlZWQgPSAwLjU7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5yZXBlYXRDb3VudCA9IEluZmluaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIG1vZGVsbyBPU0kgc2UgYmFzZWlhIGVtIHVtYSBwcm9wb3N0YSBkZXNlbnZvbHZpZGFcXG4nKyBcclxuICAgICAgICAgICAgJ3BlbGEgSVNPIChJbnRlcm5hdGlvbmFsIFN0YW5kYXJkcyBPcmdhbml6YXRpb24pXFxuJytcclxuICAgICAgICAgICAgJ2NvbW8gdW0gcHJpbWVpcm8gcGFzc28gZW0gZGlyZcOnw6NvIMOgIHBhZHJvbml6YcOnw6NvXFxuJysgXHJcbiAgICAgICAgICAgICdpbnRlcm5hY2lvbmFsIGRvcyBwcm90b2NvbG9zIGVtcHJlZ2Fkb3MgXFxuJytcclxuICAgICAgICAgICAgJ25hcyBkaXZlcnNhcyBjYW1hZGFzJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIG1vZGVsbyBPU0kgcG9zc3VpIDcgY2FtYWRhcywgc8OjbyBlbGFzOlxcbicrIFxyXG4gICAgICAgICAgICAnRsOtc2ljYVxcbicrXHJcbiAgICAgICAgICAgICdFbmxhY2VcXG4nKyBcclxuICAgICAgICAgICAgJ1JlZGVzJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdUcmFuc3BvcnRlXFxuJysgXHJcbiAgICAgICAgICAgICdTZXNzw6NvXFxuJytcclxuICAgICAgICAgICAgJ0FwcmVzZW50YcOnw6NvXFxuJysgXHJcbiAgICAgICAgICAgICdBcGxpY2HDp8Ojbyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA2KXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnYW5pbWFQcm9mZXNzb3IyJyk7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZSA9IGZhY2UucGxheShcImZhbGFQcm9mZXNzb3IxXCIpO1xyXG4gICAgICAgICAgICBhbmltYUZhY2Uuc3BlZWQgPSAwLjU7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5yZXBlYXRDb3VudCA9IEluZmluaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdEbyBtb2RlbG8gbG9naWNvIE9TSSBzdXJnaXUgYSBhcnF1aXRldHVyYSBUQ1AvSVBcXG4nKyBcclxuICAgICAgICAgICAgJ08gbW9kZWxvIFRDUC9JUCBkZXNjcmV2ZSB1bSBjb25qdW50byBkZSBvcmllbnRhw6fDtWVzXFxuJytcclxuICAgICAgICAgICAgJ2dlcmFpcyBwYXJhIGEgY29uY2Vww6fDo28gZSBpbXBsZW1lbnRhw6fDo28nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNyl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ2RlIHByb3RvY29sb3MgZGUgcmVkZSBlc3BlY8OtZmljb3NcXG4nK1xyXG4gICAgICAgICAgICAncGFyYSBwZXJtaXRpciBxdWUgaGFqYVxcbicrXHJcbiAgICAgICAgICAgICdjb211bmljYcOnw6NvIGF0cmF2w6lzIGRlIHVtYSByZWRlLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDgpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdhbmltYVByb2Zlc3NvcjEnKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBpbWFnZW0gYWNpbWEgZGVtb25zdHJhIGFzIHBlY3VsaWFyaWRhZGVzXFxuJysgXHJcbiAgICAgICAgICAgICdkZSB1bSBtb2RlbG8gcGFyYSBvIG91dHJvJztcclxuICAgICAgICAgICAgdGhpcy5xdWFkcm8uc2V0UG9zaXRpb24oMjIyLDEzOSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA5KXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlID0gZmFjZS5wbGF5KFwiZmFsYVByb2Zlc3NvcjJcIik7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5zcGVlZCA9IDAuNTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnJlcGVhdENvdW50ID0gSW5maW5pdHk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0NvbW8gcG9kZSBzZXIgdmlzdG8sIGEgYXJxdWl0ZXR1cmEgVENQL0lQXFxuJysgXHJcbiAgICAgICAgICAgICdQb3NzdWkgNCBjYW1hZGFzIGUgZXUgaXJlaSBleHBsaWNhciBzb2JyZSBhIHByaW1laXJhJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEwKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgdGhpcy5xdWFkcm8uc2V0UG9zaXRpb24oMTM2MCwxMzkpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdhbmltYVByb2Zlc3NvcjInKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBjYW1hZGEgZGUgYWNlc3NvIGEgcmVkZVxcbicrXHJcbiAgICAgICAgICAgICd0ZW0gY29tbyB1bSBkb3Mgb2JqZXRpdm9zXFxuJytcclxuICAgICAgICAgICAgJ2dlcmFyIGUgdHJhbnNtaXRpciBvIHNpbmFsIHBlbG8gbWVpby4gU2VqYSBhIHRlY25vbG9naWFcXG4nKyBcclxuICAgICAgICAgICAgJ0V0aGVybmV0LCBXaS1maSwgQmx1ZXRvb3RoLCBlbnRyZSBvdXRyb3MuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDExKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlID0gZmFjZS5wbGF5KFwiZmFsYVByb2Zlc3NvcjNcIik7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5zcGVlZCA9IDAuNTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnJlcGVhdENvdW50ID0gSW5maW5pdHk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ1VtIGRvcyBzZXJ2acOnb3MgZGVzc2EgY2FtYWRhIMOpIGEgbW9kdWxhw6fDo29cXG4nK1xyXG4gICAgICAgICAgICAnZGEgaW5mb3JtYcOnw6NvIGF0cmF2w6lzIGRlIHVtIHNpbmFsXFxuJytcclxuICAgICAgICAgICAgJ2FuYWzDs2dpY28gb3UgZGlnaXRhbCc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxMil7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZSA9IGZhY2UucGxheShcImZhbGFQcm9mZXNzb3IxXCIpO1xyXG4gICAgICAgICAgICBhbmltYUZhY2Uuc3BlZWQgPSAwLjU7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5yZXBlYXRDb3VudCA9IEluZmluaXR5O1xyXG4gICAgICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdtb3ZlUHJvZmVzc29yMicpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIG1pbmktam9nbyBhIHNlZ3VpciwgZGVtb25zdHJhIG1lbGhvclxcbicrXHJcbiAgICAgICAgICAgICdhIGRpZmVyZW7Dp2EgZW50cmUgb3Mgc2luYWlzIGUgb3Mgc2V1cyBjb25jZWl0b3MnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMTMpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTFcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZUF1ZGlvLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB2YXIgdGV4dG8gPSB0aGlzLmxhYmVsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciBwcm9mZXNzb3IgPSB0aGlzLnByb2Zlc3Nvci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB2YXIgZmFjZSA9IHRoaXMuZmFjZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB2YXIgYW5pbWFGYWNlID0gZmFjZS5wbGF5KFwiZmFsYVByb2Zlc3NvcjFcIik7XHJcbiAgICAgICAgYW5pbWFGYWNlLnNwZWVkID0gMC41O1xyXG4gICAgICAgIGFuaW1hRmFjZS5yZXBlYXRDb3VudCA9IEluZmluaXR5O1xyXG4gICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZScpO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ09sYSwgZXUgc291IG8gcHJvZmVzc29yIFNpbmFsZG8hXFxuJytcclxuICAgICAgICAnRXUgdm91IHRlIGVuc2luYXIgc29icmUgcmVkZSBkZSBjb21wdXRhZG9yZXNcXG4nK1xyXG4gICAgICAgICdhcnF1aXRldHVyYSBUQ1AvSVAgZSBhIGNhbWFkYSBkZSBhY2Vzc28gYSByZWRlJztcclxuXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBcclxuXHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZhY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFUZXh0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGV4dG8gPSB0aGlzLmxhYmVsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciBwcm9mZXNzb3JhID0gdGhpcy5wcm9mZXNzb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHByb2Zlc3NvcmEucGxheShcIm1vdmVQcm9mZXNzb3IyLTFcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0EgY2FtYWRhIGludGVybmV0IMOpIFJlc3BvbnPDoXZlbCBwZWxhIGVudHJlZ2FcXG4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZSB1bSBwYWNvdGUsIGRlIHN1YSBvcmlnZW0gYXTDqSBvIHNldVxcbicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc3Rpbm8gZmluYWwuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHByb2Zlc3NvcmEucGxheShcImFuaW1hUHJvZmVzc29yYTItMVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnU3VhIHByaW5jaXBhbCBmdW7Dp8OjbyDDqSBmYXplciBvIHJvdGVhbWVudG9cXG4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkb3MgcGFjb3Rlcyc7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yYS5wbGF5KFwiYW5pbWFQcm9mZXNzb3JhMi0yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBIGNhbWFkYSBpbnRlcm5ldCBkZWZpbmUgdW0gZm9ybWF0byBkZSBwYWNvdGVcXG4nK1xyXG4gICAgICAgICAgICAnZSB1bSBwcm90b2NvbG8gY2hhbWFkbyBJUChJbnRlcm5ldCBQcm90b2NvbCkuJzsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdFbmRlcmXDp28gSVAsIGRlIGZvcm1hIGdlbsOpcmljYSwgw6kgdW1hIGlkZW50aWZpY2HDp8Ojb1xcbicrXHJcbiAgICAgICAgICAgICdkZSB1bSBkaXNwb3NpdGl2byAoY29tcHV0YWRvciwgaW1wcmVzc29yYSwgZXRjKVxcbicrXHJcbiAgICAgICAgICAgICdlbSB1bWEgcmVkZSBsb2NhbCBvdSBww7pibGljYS4nOyBcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0NhZGEgY29tcHV0YWRvciBuYSBpbnRlcm5ldCBwb3NzdWkgdW0gSVBcXG4nK1xyXG4gICAgICAgICAgICAnKEludGVybmV0IFByb3RvY29sIG91IFByb3RvY29sbyBkZSBpbnRlcm5ldCkgw7puaWNvXFxuJytcclxuICAgICAgICAgICAgJ3F1ZSDDqSBvIG1laW8gZW0gcXVlIGFzIG3DoXF1aW5hcyB1c2FtXFxuJytcclxuICAgICAgICAgICAgJ3BhcmEgc2UgY29tdW5pY2FyZW0gbmEgSW50ZXJuZXQuJzsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3JhLnBsYXkoXCJtb3ZlUHJvZmVzc29yYTItMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnTyBlbmRlcmXDp28gSVAsIG5hIHZlcnPDo28gNCBkbyBJUCAoSVB2NClcXG4nK1xyXG4gICAgICAgICAgICAnw6kgdW0gbsO6bWVybyBkZSAzMiBiaXRzIG9maWNpYWxtZW50ZSBlc2NyaXRvXFxuJysgXHJcbiAgICAgICAgICAgICdjb20gcXVhdHJvIG9jdGV0b3MgKGJ5dGVzKSByZXByZXNlbnRhZG9zXFxuJytcclxuICAgICAgICAgICAgJ25vIGZvcm1hdG8gZGVjaW1hbCwgcG9yIGV4ZW1wbG8sIFwiMTkyIC4gMTY4IC4gMSAuIDJcIi4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWRvciA9PSA2KXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSB0YXJlZmEgZGEgY2FtYWRhIGludGVybmV0IMOpIGVudHJlZ2FyXFxuJytcclxuICAgICAgICAgICAgJ3BhY290ZXMgSVAgb25kZSBlbGVzIHPDo28gbmVjZXNzw6FyaW9zLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDcpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3JhLnBsYXkoXCJtb3ZlUHJvZmVzc29yMi0xXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIHJvdGVhbWVudG8gZGUgcGFjb3RlcyDDqSB1bWEgcXVlc3TDo29cXG4nK1xyXG4gICAgICAgICAgICAnZGUgZ3JhbmRlIGltcG9ydMOibmNpYSBuZXNzYSBjYW1hZGEsIGFzc2ltIGNvbW9cXG4nK1xyXG4gICAgICAgICAgICAnYSBuZWNlc3NpZGFkZSBkZSBldml0YXIgbyBjb25nZXN0aW9uYW1lbnRvLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDgpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3JhLnBsYXkoXCJhbmltYVByb2Zlc3NvcmEyLTFcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ1VtICBleGVtcGxvIGRlICBzZXJ2acOnbyAgb2ZlcmVjaWRvXFxuJysgXHJcbiAgICAgICAgICAgICdwb3IgIGVzc2EgIGNhbWFkYSAgw6kgIG8gIHJvdGVhbWVudG8gIGRlICBwYWNvdGVzLFxcbicrXHJcbiAgICAgICAgICAgICdhdHJhdsOpcyBkb3MgZW5kZXJlw6dvcyBkZSBvcmlnZW0vZGVzdGluby4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gOSl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImpvZ29GYXNlMlwiKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHZhciBmYWNlID0gdGhpcy5mYWNlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGZhY2UucGxheShcImZhbGFQcm9mZXNzb3IyXCIpO1xyXG4gICAgICAgIHZhciBwcm9mZXNzb3JhID0gdGhpcy5wcm9mZXNzb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgcHJvZmVzc29yYS5wbGF5KFwiQXBhcmVjZVwiKTtcclxuICAgICAgICB2YXIgdGV4dG8gPSB0aGlzLmxhYmVsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnT2xhLCBldSBzb3UgYSBwcm9mZXNzb3JhIEFuZXR0ZSFcXG4nK1xyXG4gICAgICAgICdFdSB2b3UgdGUgZW5zaW5hciBzb2JyZSBhIGNhbWFkYSBJbnRlcm5ldCc7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYVRleHRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBIGZpbmFsaWRhZGUgZGVzc2EgY2FtYWRhIMOpIHBlcm1pdGlyIHF1ZVxcbicrIFxyXG4gICAgICAgICAgICAnYXMgZW50aWRhZGVzIHBhcmVzIGRvcyBob3N0cyBkZSBvcmlnZW0gZSBkZSBkZXN0aW5vXFxuJytcclxuICAgICAgICAgICAgJ21hbnRlbmhhbSB1bWEgY29udmVyc2HDp8Ojbyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRG9pcyBwcm90b2NvbG9zIGZpbSBhIGZpbSBmb3JhbSBkZWZpbmlkb3MgYXF1aS5cXG4nK1xyXG4gICAgICAgICAgICAnTyBwcmltZWlybyBkZWxlcywgbyBUQ1AoVHJhbnNtaXNzaW9uIENvbnRyb2wgUHJvdG9jb2xcXG4nK1xyXG4gICAgICAgICAgICAn4oCUIHByb3RvY29sbyBkZSBjb250cm9sZSBkZSB0cmFuc21pc3PDo28pJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdVbSBwcm90b2NvbG8gb3JpZW50YWRvIGEgY29uZXjDtWVzIGNvbmZpw6F2ZWxcXG4nK1xyXG4gICAgICAgICAgICAncXVlIHBlcm1pdGUgYSBlbnRyZWdhIHNlbSBlcnJvcyBkZSB1bSBmbHV4byBkZSBieXRlc1xcbicrXHJcbiAgICAgICAgICAgICdvcmlnaW7DoXJpbyBkZSB1bWEgZGV0ZXJtaW5hZGEgbcOhcXVpbmEgZW0gcXVhbHF1ZXIgY29tcHV0YWRvcic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRXNzZSBwcm90b2NvbG8gZnJhZ21lbnRhIG8gZmx1eG8gZGUgYnl0ZXMgZGUgZW50cmFkYVxcbicrXHJcbiAgICAgICAgICAgICdlbSBtZW5zYWdlbnMgZGlzY3JldGFzLiBObyBkZXN0aW5vLCBvIHByb2Nlc3NvIFRDUCByZWNlcHRvclxcbicrXHJcbiAgICAgICAgICAgICd2b2x0YSBhIG1vbnRhciBhcyBtZW5zYWdlbnMgcmVjZWJpZGFzIG5vIGZsdXhvIGRlIHNhw61kYS4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ08gcHJveGltbyBtaW5pLWpvZ28gZGVtb25zdHJhIGNvbW9cXG4nKyBcclxuICAgICAgICAgICAgJ2EgbWVuc2FnZW0gdmlhamEgZW50cmUgdmFyaW9zIG7Ds3MgYXRlIGNoZWdhciBlbSBzZXUgZGVzdGlubyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UzXCIpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnT2xhLCBldSBzb3UgbyBwcm9mZXNzb3IgUG9ydHR5IVxcbicrXHJcbiAgICAgICAgJ0V1IHZvdSB0ZSBlbnNpbmFyIHNvYnJlIGEgY2FtYWRhIFRyYW5zcG9ydGUnO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFUZXh0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBjYW1hZGEgZGUgYWNlc3NvIGEgcmVkZSB0ZW0gcG9yIG9iamV0aXZvXFxuJytcclxuICAgICAgICAgICAgJ2dlcmFyIGUgdHJhbnNtaXRpciBvIHNpbmFsIHBlbG8gbWVpby5cXG4nKyBcclxuICAgICAgICAgICAgJ1NlamEgYSB0ZWNub2xvZ2lhIEV0aGVybmV0LCBXaS1maSwgQmx1ZXRvb3RoLCBlbnRyZSBvdXRyb3MuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBIGNhbWFkYSBJbnRlcm5ldCB0ZW0gY29tbyBvYmpldGl2b1xcbicrXHJcbiAgICAgICAgICAgICdnZXJlbmNpYXIgcGFjb3RlcyBuYSByZWRlLCBpZGVudGlmaWNhbmRvIHN1YSBvcmlnZW0vZGVzdGlub1xcbicrXHJcbiAgICAgICAgICAgICdlIHJlZGVzIHBhcmEgZW50cmVnYS4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0EgY2FtYWRhIGRlIHRyYW5zcG9ydGUgZXN0YWJlbGVjZSB1bWEgY29uZXjDo28gZmltIGEgZmltXFxuJytcclxuICAgICAgICAgICAgJyhjb25leMOjbyBjb25macOhdmVsKSBlbnRyZSBhIG9yaWdlbSBlIG8gZGVzdGlubyBkb3MgZGFkb3MuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdQb3IgZmltLCB0ZW1vcyBhIGNhbWFkYSBkZSBhcGxpY2HDp2FvXFxuJytcclxuICAgICAgICAgICAgJ0EgY2FtYWRhIGRlIGFwbGljYcOnw6NvIGNvbnTDqW0gdG9kb3Mgb3MgcHJvdG9jb2xvcyBkZSBuw612ZWwgbWFpcyBhbHRvLlxcbicrXHJcbiAgICAgICAgICAgICdEZW50cmUgZWxlcyBlc3TDo28gbyBwcm90b2NvbG8gZGUgdGVybWluYWwgdmlydHVhbChURUxORVQpJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIHByb3RvY29sbyBkZSB0cmFuc2ZlcsOqbmNpYSBkZSBhcnF1aXZvcyhGVFApIGVcXG4nK1xyXG4gICAgICAgICAgICAnbyBwcm90b2NvbG8gZGUgY29ycmVpbyBlbGV0csO0bmljbyhTTVRQKSc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnTXVpdG9zIG91dHJvcyBwcm90b2NvbG9zIGZvcmFtIGluY2x1w61kb3MgY29tIG8gZGVjb3JyZXIgZG9zIGFub3NcXG4nK1xyXG4gICAgICAgICAgICAnY29tbyBvIEROUyhEb21haW4gTmFtZSBTZXJ2aWNlKSwgcXVlIG1hcGVpYSBvcyBub21lc1xcbicrXHJcbiAgICAgICAgICAgICdkZSBob3N0cyBwYXJhIHNldXMgcmVzcGVjdGl2b3MgZW5kZXJlw6dvcyBkZSByZWRlJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDYpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTRcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnT2xhLCBldSBzb3UgbyBwcm9mZXNzb3IgR2VyYWxkbyFcXG4nK1xyXG4gICAgICAgICdWYW1vcyByZWNhcGl0dWxhciB0dWRvIHF1ZSBmb2kgdmlzdG8gYXRlIGVudGFvJztcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mZXNzb3IxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3NvcjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mZXNzb3I0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhVGV4dG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yMS5zZXRQb3NpdGlvbigtMTMwMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yMi5zZXRQb3NpdGlvbigtMjY3LCAtODkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIHRlc3RlIGZpbmFsIGNvbnNpc3RlIGRlIHVtIHF1aXogY29tIDEwIHBlcmd1bnRhc1xcbicrIFxyXG4gICAgICAgICAgICAncmVmZXJlbnRlcyBhcyA0IGNhbWFkYXMgZGEgYXJxdWl0ZXR1cmEgVENQL0lQJzsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3IyLnNldFBvc2l0aW9uKC0xMzAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3IzLnNldFBvc2l0aW9uKC0yNjcsIC04OSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ1BhcmEgcGFzc2FyIG5lc3NlIHRlc3RlLCB2b2NlIGRldmUgYWNlcnRhciBwZWxvIG1lbm9zXFxuJysgXHJcbiAgICAgICAgICAgICc3IGRhcyAxMCBxdWVzdG9lcyBhcHJlc2VudGFkYXMnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yMy5zZXRQb3NpdGlvbigtMTMwMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yNC5zZXRQb3NpdGlvbigtMjY3LCAtODkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdDb25zaWRlcmUgZXNzZSBxdWl6IGNvbW8gdW1hIHByb3ZhIGZpbmFsXFxuJysgXHJcbiAgICAgICAgICAgICduYW8gdGVuaGEgcHJlc3NhIGVtIHJlc3BvbmRlciBhcyBxdWVzdG9lc1xcbicrXHJcbiAgICAgICAgICAgICdlIGFuYWxpc2UgY29tIGN1aWRhZG8gYXMgb3DDp29lcyBhcHJlc2VudGFkYXMnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yNC5zZXRQb3NpdGlvbigtMTMwMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yMS5zZXRQb3NpdGlvbigtMjY3LCAtODkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdCb2Egc29ydGUhJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTVcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPbGEsIGJlbSB2aW5kbyBhbyB0ZXN0ZSBmaW5hbCFcXG4nK1xyXG4gICAgICAgICdlc3RhIHVsdGltYSBmYXNlIHRlc3RhcmEgdG9kbyBvIHNldSBjb25oZWNpbWVudG9cXG4nK1xyXG4gICAgICAgICdhZHF1aXJpZG8gYXRlIGVudGFvLCBlbSBqb2dvIGUgbmEgZGlzY2lwbGluYSc7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9mMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24xOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b240OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMi5zZXRQb3NpdGlvbigzMjYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMy5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNC5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd1Byb2ZCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wcm9mMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjIuc2V0T3BhY2l0eSgxMDAwKTtcclxuICAgICAgICB0aGlzLnByb2YzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mNC5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMubXVkYUJ1dHRvbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ2FtZUF1ZGlvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHVybDogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9TZWxlY3RGYXNlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdEZhc2VcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVBdWRpbywgdHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub09wY29lczogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJvcGNvZXNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvRmFzZTE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmFzZTFcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9GYXNlMjogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJmYXNlMlwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvRmFzZTM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmFzZTNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0Zhc2U0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImZhc2U0XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9GYXNlNDogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJmYXNlNVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvUXVpejE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2UxXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9RdWl6MTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTJcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub1F1aXoxOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlM1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvUXVpejE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2U0XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9RdWl6MTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNhaXJEb0pvZ286IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZ2FtZS5lbmQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b241OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMi5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMy5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNC5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNS5zZXRQb3NpdGlvbigzMjYsIC0yNDQpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd1Byb2ZCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wcm9mMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnByb2YzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mNC5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMubXVkYUJ1dHRvbigpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2YxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Y0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b24xLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24yLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24zLnNldFBvc2l0aW9uKDMyNiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b240LnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b241LnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzaG93UHJvZkJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnByb2YxLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjMuc2V0T3BhY2l0eSgxMDAwKTtcclxuICAgICAgICB0aGlzLnByb2Y0LnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5tdWRhQnV0dG9uKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxyXG4gICAgICAgIC8vIG1haW4gY2hhcmFjdGVyJ3MganVtcCBkdXJhdGlvblxyXG4gICAgICAgIGp1bXBEdXJhdGlvbjogMCxcclxuICAgICAgICAvLyBtYXhpbWFsIG1vdmVtZW50IHNwZWVkXHJcbiAgICAgICAgbWF4TW92ZVNwZWVkOiAwLFxyXG4gICAgICAgIC8vIGFjY2VsZXJhdGlvblxyXG4gICAgICAgIGFjY2VsOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRpbWVyOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2V0SnVtcEFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGp1bXAgdXBcclxuICAgICAgICB2YXIganVtcFVwID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy5wKDAsIHRoaXMuanVtcEhlaWdodCkpO1xyXG4gICAgICAgIC8vIHJlcGVhdFxyXG4gICAgICAgIHJldHVybiBjYy5yZXBlYXRGb3JldmVyKGp1bXBVcCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDE1O1xyXG4gICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNlbGVjdFN0YWdlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdEZhc2VcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDwgMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFN0YWdlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uVXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uRG93bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGluaGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhbHZvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNjb3JlR2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmYWNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0bkNvbnRpbnVhcjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dFdyYXBwZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dG9GYXNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsaW5oYUdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHR1dG9yaWFsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZhc2U6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9udHVhY2FvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNyaWFBbHZvKCk7XHJcbiAgICAgICAgdGhpcy5wb250dWFjYW8gPSAwO1xyXG4gICAgICAgIHRoaXMuZmFzZSA9IDk7XHJcbiAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgIHRoaXMubGluaGFHYW1lT3Zlci5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMuYWNjVXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY0Rvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRJbnB1dENvbnRyb2woKTtcclxuICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkNvbW8gcG9kZSBzZXIgdmlzdG8sIGEgZGlmZXJlbsOnYSBlbnRyZSBvcyBzaW5haXNcXG5cIisgXHJcbiAgICAgICAgICAgIFwiw6kgYmVtIHBlcmNlcHRpdmVsXCI7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy9tb3ZpbWVudGFyIHZpYSB0ZWNsYWRvXHJcbiAgICBzZXRJbnB1dENvbnRyb2w6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8gYWRkIGtleWJvYXJkIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcclxuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXHJcbiAgICAgICAgICAgIC8vIFdoZW4gdGhlcmUgaXMgYSBrZXkgYmVpbmcgcHJlc3NlZCBkb3duLCBqdWRnZSBpZiBpdCdzIHRoZSBkZXNpZ25hdGVkIGRpcmVjdGlvbmFsIGJ1dHRvbiBhbmQgc2V0IHVwIGFjY2VsZXJhdGlvbiBpbiB0aGUgY29ycmVzcG9uZGluZyBkaXJlY3Rpb25cclxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbihrZXlDb2RlLCBldmVudCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS51cDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NVcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgb25LZXlSZWxlYXNlZDogZnVuY3Rpb24oa2V5Q29kZSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChrZXlDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjVXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgc2VsZi5ub2RlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vdmltZW50YXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjVXApIHtcclxuICAgICAgICAgICAgdGhpcy5zb2JlUGxheWVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNjZVBsYXllcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmFjY1JpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy52YWlGcmVudGVQbGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBqb2dhcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmZhc2UgPSAwO1xyXG4gICAgICAgIHRoaXMuZnJlbnRlUGxheWVyKCk7XHJcbiAgICAgICAgdmFyIHR1dG9yaWFsID0gdGhpcy50dXRvcmlhbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0dXRvcmlhbC5wbGF5KFwic29tZVR1dG9yaWFsXCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLypGdW7Dp29lcyB1c2FkYXMgcGFyYSBjaGFtYXIgYSBhw6dhbyBkZSBcclxuICAgIG1vdmltZW50YXIgYSBjb3JkYSBwYXJhIGNpbWEgZW0gZGl2ZXJzYXMgdmVsb2NpZGFkZXMqL1xyXG4gICAgc29iZVBsYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHZhciBzb2JlID0gY2MubW92ZUJ5KDMsIGNjLnAoMCwgMzAwKSk7XHJcbiAgICAgICAgdmFyIGZyZW50ZSA9IGNjLm1vdmVCeSgzMDAsIGNjLnAoMTAwMDAsIDApKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24oY2Muc2VxdWVuY2Uoc29iZSwgZnJlbnRlKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvKkZ1bsOnb2VzIHVzYWRhcyBwYXJhIGNoYW1hciBhIGHDp2FvIGRlIFxyXG4gICAgbW92aW1lbnRhciBhIGNvcmRhIHBhcmEgYmFpeG8gZW0gZGl2ZXJzYXMgdmVsb2NpZGFkZXMqL1xyXG4gICAgZGVzY2VQbGF5ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB2YXIgZGVzY2UgPSBjYy5tb3ZlQnkoMywgY2MucCgwLCAtMzAwKSk7XHJcbiAgICAgICAgdmFyIGZyZW50ZSA9IGNjLm1vdmVCeSgzMDAsIGNjLnAoMTAwMDAsIDApKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoZGVzY2UsIGZyZW50ZSkpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdmFpRnJlbnRlUGxheWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdmFyIGZyZW50ZSA9IGNjLm1vdmVCeSgzMDAsIGNjLnAoMTAwMDAsIDApKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24oZnJlbnRlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZhaVByYUZyZW50ZTogZnVuY3Rpb24oKXtcclxuICAgIHZhciBmcmVudGUgPSBjYy5tb3ZlQnkoMzAwLCBjYy5wKDEwMDAwLCAwKSk7XHJcbiAgICAgICAgcmV0dXJuIGZyZW50ZTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGZyZW50ZVBsYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnZhaVByYUZyZW50ZSA9IHRoaXMudmFpUHJhRnJlbnRlKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKHRoaXMudmFpUHJhRnJlbnRlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNyaWFMaW5oYTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vdmFMaW5oYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluaGEpO1xyXG4gICAgICAgIHRoaXMuYmcuYWRkQ2hpbGQobm92YUxpbmhhKTtcclxuICAgICAgICBub3ZhTGluaGEuc2V0UG9zaXRpb24odGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjcmlhQWx2bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAzMDApICsgMCk7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBsYXllci54ICsgMTAwO1xyXG4gICAgICAgIHZhciB4bGluaGEgPSB4ICsgMjAwO1xyXG4gICAgICAgIHRoaXMuYWx2by5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgICAgICB0aGlzLmxpbmhhR2FtZU92ZXIuc2V0UG9zaXRpb24oeGxpbmhhLCAwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBqdWRnZSB0aGUgZGlzdGFuY2UgYWNjb3JkaW5nIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGxheWVyIG5vZGVcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgQWx2b1BvcyA9IHRoaXMuYWx2by5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbm9kZXMgYWNjb3JkaW5nIHRvIHRoZWlyIHBvc2l0aW9uc1xyXG4gICAgICAgIHZhciBkaXN0ID0gY2MucERpc3RhbmNlKEFsdm9Qb3MsIHBsYXllclBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZUxpbmhhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8ganVkZ2UgdGhlIGRpc3RhbmNlIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIHBsYXllciBub2RlXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIGxpbmhhR2FtZU92ZXJQb3MgPSB0aGlzLmxpbmhhR2FtZU92ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG5vZGVzIGFjY29yZGluZyB0byB0aGVpciBwb3NpdGlvbnNcclxuICAgICAgICB2YXIgZGlzdCA9IGNjLnBEaXN0YW5jZShsaW5oYUdhbWVPdmVyUG9zLCBwbGF5ZXJQb3MpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25QaWNrZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIHN0YXJzIGFyZSBiZWluZyBjb2xsZWN0ZWQsIGludm9rZSB0aGUgaW50ZXJmYWNlIGluIHRoZSBHYW1lIHNjcmlwdCB0byBnZW5lcmF0ZSBhIG5ldyBzdGFyXHJcbiAgICAgICAgdGhpcy5jcmlhQWx2bygpO1xyXG4gICAgICAgIHRoaXMucG9udHVhY2FvICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBsaW1pdGFQbGF5ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKCB0aGlzLnBsYXllci55ID4gdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodC8yKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnkgPSB0aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0LzI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLnkgPCAtdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodC8yKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnkgPSAtdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodC8yO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGVnYUFsdm86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IDYwKSB7XHJcbiAgICAgICAgICAgIC8vIGludm9rZSBjb2xsZWN0aW5nIGJlaGF2aW9yXHJcbiAgICAgICAgICAgIHRoaXMub25QaWNrZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBvbnR1YWNhbyA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZmFzZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGFzc2FMaW5oYTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZUxpbmhhKCkgPCA2MCkge1xyXG4gICAgICAgICAgICAvLyBpbnZva2UgY29sbGVjdGluZyBiZWhhdmlvclxyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucG9udHVhY2FvID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5saW5oYUdhbWVPdmVyLnNldFBvc2l0aW9uKDAsIDIwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdhbWVPdmVyOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlcmJhY2tncm91bmQuc2V0UG9zaXRpb24oMCwwKTtcclxuICAgICAgICB0aGlzLnNjb3JlR2FtZU92ZXIuc3RyaW5nID0gJ0Fsdm9zIEFjZXJ0YWRvczogJyt0aGlzLnBvbnR1YWNhbztcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJ5QWdhaW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UxLTFcIik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVRleHRvMTogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGV4dG8gPSB0aGlzLnRleHRvRmFzZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB2YXIgcHJvZmVzc29yID0gdGhpcy5wcm9mZXNzb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdmFyIGZhY2UgPSB0aGlzLmZhY2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdmFyIGFuaW1hRmFjZSA9IGZhY2UucGxheShcImZhbGFQcm9mZXNzb3IxXCIpO1xyXG4gICAgICAgIGFuaW1hRmFjZS5zcGVlZCA9IDAuNTtcclxuICAgICAgICBhbmltYUZhY2UucmVwZWF0Q291bnQgPSBJbmZpbml0eTtcclxuICAgICAgICBpZih0aGlzLmNvbnRUZXh0byA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHByb2Zlc3Nvci5wbGF5QWRkaXRpdmUoJ2FuaW1hUHJvZmVzc29yMScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk8gc2luYWwgYW5hbG9naWNvIMOpIGdlcmFkbyBjb21vIHVtYSBvbmRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiasOhIHF1ZSBvcyB2YWxvcmVzIHbDo28gc2UgYWx0ZXJhbmRvIG5vIGludGVydmFsbyBkZSB0ZW1wb1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnYW5pbWFQcm9mZXNzb3IyJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiSsOhIG8gc2luYWwgZGlnaXRhbCDDqSBnZXJhZG8gY29tbyB1bWEgcmV0YVxcblwiK1xyXG4gICAgICAgICAgICBcImrDoSBxdWUgcG9zc3VpIHVtIGNvbmp1bnRvIGRlIHZhbG9yZXMgZW0gdW0gaW50ZXJ2YWxvIGRlIHRlbXBvXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdhbmltYVByb2Zlc3NvcjEnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBIGNhbWFkYSBkZSBhY2Vzc28gYSByZWRlIHRhbWJlbSBmb3JuZWNlXFxuXCIrXHJcbiAgICAgICAgICAgIFwibyBzZXJ2acOnbyBkZSAgdHJhbnNmb3JtYXIgIHVtICBjYW5hbCAgZGUgdHJhbnNtaXNzw6NvICBicnV0YVxcblwiK1xyXG4gICAgICAgICAgICBcImVtICB1bWEgIGxpbmhhICBxdWUgIHBhcmXDp2EgIGxpdnJlICBkZSAgZXJyb3MgIGRlICB0cmFuc21pc3PDo29cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMyl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHByb2Zlc3Nvci5wbGF5QWRkaXRpdmUoJ2FuaW1hUHJvZmVzc29yMicpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk9mZXJlY2VuZG8gZW5xdWFkcmFtZW50byBkZSBiaXRzXFxuXCIrXHJcbiAgICAgICAgICAgIFwidmVyaWZpY2HDp8OjbyBkZSBlcnJvcyBlIHByb3RvY29sb3MgcXVlIGFzc2VndXJlbSBhIGNvcnJlw6dhbyBkZSBlcnJvc1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udFRleHRvID09IDQpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdhbmltYVByb2Zlc3NvcjEnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJWaXN0byBvcyBjb250ZXVkb3MgZGVzdGEgZmFzZSBlIGVtIHNhbGEgZGUgYXVsYVxcblwiK1xyXG4gICAgICAgICAgICBcInJlc3BvbmRhIGFnb3JhIG8gUXVpelwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZhc2UgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbigtNDE4LDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tb3ZpbWVudGFyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5mYXNlID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3Iuc2V0UG9zaXRpb24oMTMwNiwtMjIyKTtcclxuICAgICAgICAgICAgdGhpcy5saW1pdGFQbGF5ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmlhTGluaGEoKTtcclxuICAgICAgICAgICAgdGhpcy5wZWdhQWx2bygpO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3NhTGluaGEoKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZS5zdHJpbmcgPSAnQWx2b3M6ICcrIHRoaXMucG9udHVhY2FvO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmZhc2UgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yLnNldFBvc2l0aW9uKDAsLTIyMik7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdyYXBwZXIuc2V0UG9zaXRpb24oMCwtMjIwKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5mYXNlID09IDIpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uVXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uRG93bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGluaGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhbHZvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNjb3JlR2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmYWNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0bkNvbnRpbnVhcjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuQ29udGludWFyMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpbmhhR2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dHdyYXBwZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHV0b3JpYWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgQW1wTWF4OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBGcmVxdWVuY2lhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnYW1lQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZhc2U6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9udHVhY2FvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgICAgICBcclxuICAgICAgICBzYWlMb29wOiAwLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lQXVkaW8sIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZnJlbnRlUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5jcmlhQWx2bygpO1xyXG4gICAgICAgIHRoaXMuYnRuQ29udGludWFyMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMubGluaGFHYW1lT3Zlci5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucG9udHVhY2FvID0gMDtcclxuICAgICAgICB0aGlzLmZhc2UgPSAwO1xyXG4gICAgICAgIHRoaXMuY29udFRleHRvID0gMDtcclxuICAgICAgICB0aGlzLmFjY1VwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zYWlMb29wID0gMDtcclxuICAgICAgICB0aGlzLnNldElucHV0Q29udHJvbCgpO1xyXG4gICAgICAgIHZhciB0ZXh0byA9IHRoaXMudGV4dG9GYXNlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciBwcm9mZXNzb3IgPSB0aGlzLnByb2Zlc3Nvci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB2YXIgZmFjZSA9IHRoaXMuZmFjZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB2YXIgYW5pbWFGYWNlID0gZmFjZS5wbGF5KFwiZmFsYVByb2Zlc3NvcjFcIik7XHJcbiAgICAgICAgYW5pbWFGYWNlLnNwZWVkID0gMC41O1xyXG4gICAgICAgIGFuaW1hRmFjZS5yZXBlYXRDb3VudCA9IEluZmluaXR5O1xyXG4gICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZScpO1xyXG4gICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTmVzc2UgTWluaS1Kb2dvLCB2b2NlIGFwcmVuZGVyYSBhIGRpZmVyZW7Dp2FcXG5cIisgXHJcbiAgICAgICAgICAgIFwiZW50cmUgbyBzaW5hbCBhbmFsb2dpY28gZSBvIHNpbmFsIGRpZ2l0YWxcIjtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8vbW92aW1lbnRhciB2aWEgdGVjbGFkb1xyXG4gICAgc2V0SW5wdXRDb250cm9sOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIGFkZCBrZXlib2FyZCBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgIGNjLmV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcih7XHJcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxyXG4gICAgICAgICAgICAvLyBXaGVuIHRoZXJlIGlzIGEga2V5IGJlaW5nIHByZXNzZWQgZG93biwganVkZ2UgaWYgaXQncyB0aGUgZGVzaWduYXRlZCBkaXJlY3Rpb25hbCBidXR0b24gYW5kIHNldCB1cCBhY2NlbGVyYXRpb24gaW4gdGhlIGNvcnJlc3BvbmRpbmcgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3NlZDogZnVuY3Rpb24oa2V5Q29kZSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChrZXlDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjVXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY0Rvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY0Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICBvbktleVJlbGVhc2VkOiBmdW5jdGlvbihrZXlDb2RlLCBldmVudCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS51cDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY0Rvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW92aW1lbnRhcjogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcy5hY2NVcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvYmVQbGF5ZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWNjRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NlUGxheWVyKCk7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8qRnVuw6dvZXMgdXNhZGFzIHBhcmEgY2hhbWFyIGEgYcOnYW8gZGUgXHJcbiAgICBtb3ZpbWVudGFyIGEgY29yZGEgcGFyYSBjaW1hIGVtIGRpdmVyc2FzIHZlbG9jaWRhZGVzKi9cclxuICAgIHNvYmVQbGF5ZXI6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKHRoaXMuc2FpTG9vcCA9PT0gMCl7XHJcbiAgICAgICAgdmFyIHNvYmUgPSBjYy5tb3ZlQnkoMywgY2MucCgwLCAzMDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW5PdXQoKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKHNvYmUpO1xyXG4gICAgICAgIHRoaXMuc2FpTG9vcCA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc2FpTG9vcCA9PSAxKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLypGdW7Dp29lcyB1c2FkYXMgcGFyYSBjaGFtYXIgYSBhw6dhbyBkZSBcclxuICAgIG1vdmltZW50YXIgYSBjb3JkYSBwYXJhIGJhaXhvIGVtIGRpdmVyc2FzIHZlbG9jaWRhZGVzKi9cclxuICAgIGRlc2NlUGxheWVyOiBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZih0aGlzLnNhaUxvb3AgPT0gMSl7XHJcbiAgICAgICAgICAgIHZhciBkZXNjZSA9IGNjLm1vdmVCeSgzLCBjYy5wKDAsIC0zMDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW5PdXQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnJ1bkFjdGlvbihkZXNjZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2FpTG9vcCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc2FpTG9vcCA9PT0gMCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZhaVByYUZyZW50ZTogZnVuY3Rpb24oKXtcclxuICAgIHZhciBmcmVudGUgPSBjYy5tb3ZlQnkoMywgY2MucCgxMDAsIDApKTtcclxuICAgICAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihmcmVudGUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZnJlbnRlUGxheWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudmFpUHJhRnJlbnRlID0gdGhpcy52YWlQcmFGcmVudGUoKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24odGhpcy52YWlQcmFGcmVudGUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgY3JpYUxpbmhhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbm92YUxpbmhhID0gY2MuaW5zdGFudGlhdGUodGhpcy5saW5oYSk7XHJcbiAgICAgICAgdGhpcy5iZy5hZGRDaGlsZChub3ZhTGluaGEpO1xyXG4gICAgICAgIG5vdmFMaW5oYS5zZXRQb3NpdGlvbih0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNyaWFBbHZvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMucG9udHVhY2FvID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5hbHZvLnNldFBvc2l0aW9uKC0zMjAsIDI3Mik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMzAwKSArIDApO1xyXG4gICAgICAgICAgICB2YXIgeCA9IHRoaXMucGxheWVyLnggKyAxMDA7XHJcbiAgICAgICAgICAgIHZhciB4bGluaGEgPSB4ICsgMjAwO1xyXG4gICAgICAgICAgICB0aGlzLmFsdm8uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgICAgIHRoaXMubGluaGFHYW1lT3Zlci5zZXRQb3NpdGlvbih4bGluaGEsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8ganVkZ2UgdGhlIGRpc3RhbmNlIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIHBsYXllciBub2RlXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIEFsdm9Qb3MgPSB0aGlzLmFsdm8uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG5vZGVzIGFjY29yZGluZyB0byB0aGVpciBwb3NpdGlvbnNcclxuICAgICAgICB2YXIgZGlzdCA9IGNjLnBEaXN0YW5jZShBbHZvUG9zLCBwbGF5ZXJQb3MpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2VMaW5oYTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGp1ZGdlIHRoZSBkaXN0YW5jZSBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBwbGF5ZXIgbm9kZVxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBsaW5oYUdhbWVPdmVyUG9zID0gdGhpcy5saW5oYUdhbWVPdmVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBub2RlcyBhY2NvcmRpbmcgdG8gdGhlaXIgcG9zaXRpb25zXHJcbiAgICAgICAgdmFyIGRpc3QgPSBjYy5wRGlzdGFuY2UobGluaGFHYW1lT3ZlclBvcywgcGxheWVyUG9zKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uUGlja2VkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBXaGVuIHRoZSBzdGFycyBhcmUgYmVpbmcgY29sbGVjdGVkLCBpbnZva2UgdGhlIGludGVyZmFjZSBpbiB0aGUgR2FtZSBzY3JpcHQgdG8gZ2VuZXJhdGUgYSBuZXcgc3RhclxyXG4gICAgICAgIHRoaXMuY3JpYUFsdm8oKTtcclxuICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbGltaXRhUGxheWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICggdGhpcy5wbGF5ZXIueSA+IHRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci55ID0gdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodC8yO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci55IDwgLXRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci55ID0gLXRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMjtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBlZ2FBbHZvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCA2MCkge1xyXG4gICAgICAgICAgICAvLyBpbnZva2UgY29sbGVjdGluZyBiZWhhdmlvclxyXG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wb250dWFjYW8gPT0gMTApe1xyXG4gICAgICAgICAgICB0aGlzLmZhc2UgPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBhc3NhTGluaGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2VMaW5oYSgpIDwgNjApIHtcclxuICAgICAgICAgICAgLy8gaW52b2tlIGNvbGxlY3RpbmcgYmVoYXZpb3JcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucG9udHVhY2FvID09MTApe1xyXG4gICAgICAgICAgICB0aGlzLmxpbmhhR2FtZU92ZXIuc2V0UG9zaXRpb24oMCwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZU92ZXI6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyYmFja2dyb3VuZC5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgIHRoaXMuc2NvcmVHYW1lT3Zlci5zdHJpbmcgPSAnQWx2b3MgQWNlcnRhZG9zOiAnK3RoaXMucG9udHVhY2FvO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cnlBZ2FpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTFcIik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVRleHRvMTogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGV4dG8gPSB0aGlzLnRleHRvRmFzZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB2YXIgcHJvZmVzc29yID0gdGhpcy5wcm9mZXNzb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdmFyIGZhY2UgPSB0aGlzLmZhY2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT09IDApe1xyXG4gICAgICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdtb3ZlUHJvZmVzc29ySkYxJyk7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHZhciBhbmltYUZhY2UgPSBmYWNlLnBsYXkoXCJmYWxhUHJvZmVzc29yMlwiKTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnNwZWVkID0gMC41O1xyXG4gICAgICAgICAgICBhbmltYUZhY2UucmVwZWF0Q291bnQgPSBJbmZpbml0eTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJ1bSAgc2luYWwgIGFuYWzDs2dpY28gIMOpICBjYXJhY3Rlcml6YWRvIHBvclxcblwiKyBcclxuICAgICAgICAgICAgXCJ1bWEgZXF1YcOnw6NvIG1hdGVtw6F0aWNhIGNvbnRpbnVhLlxcblwiKyBcclxuICAgICAgICAgICAgXCJRdWFuZG8gYSBlbnRyYWRhIG11ZGFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMSl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiZGUgdW0gdmFsb3IgcGFyYSBvIHByw7N4aW1vXFxuXCIrIFxyXG4gICAgICAgICAgICBcImZheiBpc3NvIG1vdmVuZG8gc2UgYXRyYXbDqXNcXG5cIitcclxuICAgICAgICAgICAgXCJkZSB0b2RvcyBvcyB2YWxvcmVzIGludGVybWVkacOhcmlvcy5cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMil7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiUGVyY2ViYSBxdWUgYSBmYXNlIGRlc2NyZXZlIGEgcG9zacOnw6NvXFxuXCIrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhIG9uZGEgbm8gaW5zdGFudGUgZGUgdGVtcG8gaWd1YWwgYSB6ZXJvLlxcblwiKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBIGZhc2Ugw6kgbWVkaWRhIGVtIGdyYXVzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMyl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVGVudGUgYWNlcnRhciAxMCBhbHZvcyBwYXJhIGF2YW7Dp2FyXFxuXCIrXHJcbiAgICAgICAgICAgIFwicGFyYSBhIHByb3hpbWEgZXRhcGFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNCl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiRXZpdGUgc3ViaXIgZGVtYWlzIG91IGRlc2NlciBkZW1haXNcXG5cIitcclxuICAgICAgICAgICAgXCJjYXNvIGlzc28gYWNvbnRlw6dhLCBzZXJhIEdhbWUgT3ZlclwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA1KXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgdmFyIHR3ID0gdGhpcy50ZXh0d3JhcHBlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdHcucGxheShcInNvbWVUV0pGMVwiKTtcclxuICAgICAgICAgICAgdmFyIHR1dG9yaWFsID0gdGhpcy50dXRvcmlhbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdHV0b3JpYWwucGxheShcImFwYXJlY2VUdXRvcmlhbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBqb2dhcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkNvbW8gcG9kZSBzZXIgdmlzdG8gbyBzaW5hbCBhbmFsb2dpY28gw6kgZ2VyYWRvIGNvbW9cXG5cIitcclxuICAgICAgICAgICAgXCJ1bSBjb25qdW50byBkZSBvbmRhcywgasOhIHF1ZSBvIHNpbmFsIHBhc3NhIHBvciB0b2RvcyBvcyB2YWxvcmVzXFxuXCIrXHJcbiAgICAgICAgICAgIFwibmFxdWVsZSBpbnRlcnZhbG8gZGUgdGVtcG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gPSA3O1xyXG4gICAgICAgICAgICB0aGlzLmZhc2UgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbigtNDE4LDApO1xyXG4gICAgICAgICAgICB2YXIgdHV0b3JpYWwgPSB0aGlzLnR1dG9yaWFsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB0dXRvcmlhbC5wbGF5KFwic29tZVR1dG9yaWFsXCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FUZXh0bzI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiSsOhIG8gc2luYWwgZGlnaXRhbCDDqSBnZXJhZG8gY29tbyB1bSBjb25qdW50byBkZSByZXRhc1xcblwiK1xyXG4gICAgICAgICAgICBcImrDoSBxdWUgcG9zc3VpIHVtIGNvbmp1bnRvIGxpbWl0YWRvXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZGUgdmFsb3JlcyBlbSB1bSBpbnRlcnZhbG8gZGUgdGVtcG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVGVudGUgYWNlcnRhciAxMCBhbHZvcyBwYXJhIGF2YW7Dp2FyXFxuXCIrXHJcbiAgICAgICAgICAgIFwicGFyYSBhIHByb3hpbWEgZXRhcGFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiRXZpdGUgc3ViaXIgZGVtYWlzIG91IGRlc2NlciBkZW1haXNcXG5cIitcclxuICAgICAgICAgICAgXCJjYXNvIGlzc28gYWNvbnRlw6dhLCBzZXJhIEdhbWUgT3ZlclwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQm9hIFNvcnRlIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZmFzZSA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKC00MTgsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZXhwbGljYUFtcGxpdHVkZUZyZXF1ZW5jaWE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5wb250dWFjYW8gPT0gMSl7XHJcbiAgICAgICAgICAgdmFyIGFtcCA9IHRoaXMuQW1wTWF4LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgIGFtcC5wbGF5KFwiQXBhcmVjZVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wb250dWFjYW8gPT0gMil7XHJcbiAgICAgICAgICAgIHZhciBmcmVxdWVuID0gdGhpcy5GcmVxdWVuY2lhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgIGZyZXF1ZW4ucGxheShcIkFwYXJlY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdmltZW50YXIoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmZhc2UgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3Nvci5zZXRQb3NpdGlvbigwLC0yMjIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmZhc2UgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3Iuc2V0UG9zaXRpb24oMTMwNiwtMjIyKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0d3JhcHBlci5zZXRQb3NpdGlvbigxMzA2LC0yMjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkNvbnRpbnVhcjEuc2V0UG9zaXRpb24oMTMwNiwtMjIyKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Db250aW51YXIyLnNldFBvc2l0aW9uKDEzMDYsLTIyMik7XHJcbiAgICAgICAgICAgIHRoaXMubGltaXRhUGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JpYUxpbmhhKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGVnYUFsdm8oKTtcclxuICAgICAgICAgICAgdGhpcy5wYXNzYUxpbmhhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gJ0Fsdm9zOiAnKyB0aGlzLnBvbnR1YWNhbztcclxuICAgICAgICAgICAgdGhpcy5leHBsaWNhQW1wbGl0dWRlRnJlcXVlbmNpYSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmZhc2UgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yLnNldFBvc2l0aW9uKDAsLTIyMik7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHdyYXBwZXIuc2V0UG9zaXRpb24oMCwtMjI5KTtcclxuICAgICAgICAgICAgdGhpcy5idG5Db250aW51YXIyLnNldFBvc2l0aW9uKDc0NywtOTkpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkNvbnRpbnVhcjEuc2V0UG9zaXRpb24oMzAwMCwwKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Db250aW51YXIyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5mYXNlID09IDMpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTEtMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9mZXNzb3I6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmFjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJnOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm8zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm82OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vMWE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm8yYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzNhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vNGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm81YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzZhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhYlJvdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsYmxObzE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0blJlYWxpemFyU2FsdG8xOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0blJlYWxpemFyU2FsdG8yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0blJlYWxpemFyU2FsdG8zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0blJlYWxpemFyU2FsdG80OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0blJlYWxpemFyU2FsdG81OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0blJlYWxpemFyU2FsdG82OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsaW5oYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNjb3JlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mZXNzb3JGcmVudGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dFdyYXBwZXJGcmVudGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbW9kZWxvUmVkZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2UxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0dXRvcmlhbDE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHV0b3JpYWwyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHR1dG9yaWFsMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5Kb2dhcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzYWx0b3M6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9udHVhY2FvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgICAgICBcclxuICAgICAgICB0dXRvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMucG9udHVhY2FvID0gMDtcclxuICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgPSA1O1xyXG4gICAgICAgIHRoaXMudHV0byA9IDE7XHJcbiAgICAgICAgdGhpcy5idG5Kb2dhci5zZXRQb3NpdGlvbigxMzAwLCAtMjA2KTtcclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9IHRoaXMuc2FsdG9zO1xyXG4gICAgICAgIHRoaXMuc29tZU5vcygpO1xyXG4gICAgICAgIHZhciBmYWNlID0gdGhpcy5mYWNlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGZhY2UucGxheShcImZhbGFQcm9mZXNzb3IyXCIpO1xyXG4gICAgICAgIHZhciBwcm9mZXNzb3JhID0gdGhpcy5wcm9mZXNzb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgcHJvZmVzc29yYS5wbGF5KFwiQXBhcmVjZVwiKTtcclxuICAgICAgICB2YXIgdGV4dG8gPSB0aGlzLnRleHRvRmFzZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTmVzc2UgTWluaS1Kb2dvLCB2b2NlIGFwcmVuZGVyYSBhIHJvdGVhclxcblwiKyBcclxuICAgICAgICAgICAgXCJwYWNvdGVzIElQc1wiO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZU5vczogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vMS5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vMi5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vMy5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNC5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNS5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNi5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNvbWVSZWFsaXphU2FsdG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvMS5zZXRQb3NpdGlvbig4OTUsIC0xMDgpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzIuc2V0UG9zaXRpb24oODk1LCAtMTA4KTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG8zLnNldFBvc2l0aW9uKDg5NSwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNC5zZXRQb3NpdGlvbig4OTUsIC0xMDgpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzUuc2V0UG9zaXRpb24oODk1LCAtMTA4KTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG82LnNldFBvc2l0aW9uKDg5NSwgLTEwOCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhcGFyZWNlTm9zOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm8xYS5zZXRQb3NpdGlvbigtMjQwLCAtMTgxKTtcclxuICAgICAgICB0aGlzLm5vMmEuc2V0UG9zaXRpb24oLTE4MSwgLTYpO1xyXG4gICAgICAgIHRoaXMubm8zYS5zZXRQb3NpdGlvbigtMTUsIC0xODEpO1xyXG4gICAgICAgIHRoaXMubm80YS5zZXRQb3NpdGlvbigxMiwgLTI3KTtcclxuICAgICAgICB0aGlzLm5vNWEuc2V0UG9zaXRpb24oLTM5LCAxMDMpO1xyXG4gICAgICAgIHRoaXMubm82YS5zZXRQb3NpdGlvbigxOTMsIDExNSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtb3ZlUGxheWVyOiBmdW5jdGlvbiAoeCwgeSl7XHJcbiAgICAgICAgdmFyIG1vdmUgPSBjYy5tb3ZlVG8oMywgY2MucCh4LCB5KSk7XHJcbiAgICAgICAgLy90aGlzLnBsYXllci5ydW5BY3Rpb24obW92ZSk7XHJcbiAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjcmlhTGluaGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBub3ZhTGluaGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmhhKTtcclxuICAgICAgICB0aGlzLmJnLmFkZENoaWxkKG5vdmFMaW5oYSk7XHJcbiAgICAgICAgbm92YUxpbmhhLnNldFBvc2l0aW9uKHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgam9nYXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy50dXRvID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnR1dG9yaWFsMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgICAgICB0aGlzLnR1dG9yaWFsMi5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMudHV0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnR1dG8gPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWwyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWwzLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICAgICAgdGhpcy50dXRvICs9IDE7XHJcbiAgICAgICAgICAgIHZhciBzY29yZSA9IHRoaXMuc2NvcmUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHNjb3JlLnBsYXkoXCJhcGFyZWNlU2NvcmVcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm8xLnNldFBvc2l0aW9uKC0yNDAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbigtMjEwLCAtMTU0KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy50dXRvID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkpvZ2FyLnNldFBvc2l0aW9uKDEzMDAsIC0yMDYpO1xyXG4gICAgICAgICAgICB0aGlzLnR1dG9yaWFsMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgICAgICB0aGlzLmFwYXJlY2VOb3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVRleHRvMTogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcHJvZmVzc29yYSA9IHRoaXMucHJvZmVzc29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciB0ZXh0byA9IHRoaXMudGV4dG9GYXNlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGlmKHRoaXMuY29udFRleHRvID09PSAwKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yYS5wbGF5KFwiYW5pbWFQcm9mZXNzb3JhMi0xXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk9zIHJvdGVhZG9yZXMgc8OjbyB1dGlsaXphZG9zIHBhcmEgaW50ZXJsaWdhclxcblwiK1xyXG4gICAgICAgICAgICBcImFzIHJlZGVzIGbDrXNpY2FzIGVudHJlIHNpLiBFbGVzIG9mZXJlY2VtXFxuXCIrXHJcbiAgICAgICAgICAgIFwibcO6bHRpcGxvcyBjYW1pbmhvcyBwYXJhIGludGVyY29uZWN0YXJcXG5cIisgXHJcbiAgICAgICAgICAgIFwiYXMgcmVkZXMgZsOtc2ljYXMuXCI7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yYS5wbGF5KFwiYW5pbWFQcm9mZXNzb3JhMi0yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkFzIHRhYmVsYXMgZGUgcm90ZWFtZW50byBpbmRpY2FtIHBhcmEgY2FkYSByb3RlYWRvclxcblwiK1xyXG4gICAgICAgICAgICBcImNvbW8gZWxlIGRldmUgZW5jYW1pbmhhciB1bSBwYWNvdGUgYSBmaW0gZGUgcXVlXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZXN0ZSBjaGVndWUgYSB1bWEgY2VydGEgcmVkZSBmw61zaWNhIGRlIGRlc3Rpbm8uXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3JhLnBsYXkoXCJtb3ZlUHJvZmVzc29yYTItM1wiKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBcyB0YWJlbGFzIGRlIHJvdGVhbWVudG8gc8OjbyBwcmVlbmNoaWRhc1xcblwiK1xyXG4gICAgICAgICAgICBcImF1dG9tYXRpY2FtZW50ZSwgYXRyYXbDqXMgZGUgcHJvdG9jb2xvc1xcblwiK1xyXG4gICAgICAgICAgICBcImRlIHJvdGVhbWVudG8gcGFkcm9uaXphZG9zXFxuXCIrIFxyXG4gICAgICAgICAgICBcImNvbW8gbyBCR1AgKEJvcmRlciBHYXRld2F5IFByb3RvY29sKVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAzKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yYS5wbGF5KFwiYW5pbWFQcm9mZXNzb3JhMi0xXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlZlamEgYWdvcmEgdW0gZXhlbXBsbyBkZSByZWRlIVwiO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsb1JlZGUuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA0KXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIGNlbmFyaW8gYWNpbWEgZGVtb25zdHJhIHVtYSByZWRlXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY29tIDYgcm90ZWFkb3JlcywgY2FkYSB1bSBkZWxlcyBjb20gc3VhIHRhYmVsYVxcblwiK1xyXG4gICAgICAgICAgICBcImRlIHJvdGVhbWVudG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNSl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHByb2Zlc3NvcmEucGxheShcImFuaW1hUHJvZmVzc29yYTItMlwiKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJObyBwYXBlbCBkZSB1bSBwYWNvdGUsIHZvY2UgdGVyYVxcblwiK1xyXG4gICAgICAgICAgICBcIjUgc2FsdG9zIHBhcmEgc2FpciBkbyBuw7MgMSBlIGNoZWdhciBhbyBuw7MgNiFcXG5cIitcclxuICAgICAgICAgICAgXCJjYXNvIGNvbnRyYXJpbywgYSBtZW5zYWdlbSBzZXJhIHBlcmRpZGFcIjtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbG9SZWRlLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDYpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3JhLnBsYXkoXCJhbmltYVByb2Zlc3NvcmEyLTFcIik7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQ2FkYSBzYWx0byBwb3NzdWkgdW0gY3VzdG9cXG5cIitcclxuICAgICAgICAgICAgXCJVc2FyZW1vcyBuZXNzZSBleGVtcGxvLCBvIG51bWVybyBkZSBzYWx0b3NcXG5cIitcclxuICAgICAgICAgICAgXCJwYXJhIHNlIGFsY2Fuw6dhciBkZXRlcm1pbmFkbyBuw7NcIjtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbG9SZWRlLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDcpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3JhLnBsYXkoXCJhbmltYVByb2Zlc3NvcmEyLTJcIik7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVGVudGUgY2hlZ2FyIGFvIG7DsyA2XFxuXCIrXHJcbiAgICAgICAgICAgIFwiY29tIG8gbWVub3IgY3VzdG8gcG9zc8OtdmVsXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYXRlbnRlLXNlIGFvcyBzYWx0b3MgbmVjZXNzw6FyaW9zXCI7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWxvUmVkZS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udFRleHRvID09IDgpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcImNsaXF1ZSBlbSBjb250aW51YXIgZSBib2Egc29ydGUhIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udFRleHRvID09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLnR1dG9yaWFsMS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuSm9nYXIuc2V0UG9zaXRpb24oMCwgLTIwNik7XHJcbiAgICAgICAgICAgIHRoaXMuYmcuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZTEuc3RyaW5nID0gXCJQYXJhYsOpbnMsIHZvY2UgY2hlZ291IGFvIG7DsyA2IVxcblwiK1xyXG4gICAgICAgICAgICBcImFwZXNhciBkZSBiYXN0YW50ZSBzaW1wbGlmaWNhZG9cXG5cIisgXHJcbiAgICAgICAgICAgIFwibyBtaW5pLWpvZ28gZGVtb25zdHJvdSBjb21vIHVtYSBcXG5cIitcclxuICAgICAgICAgICAgXCJpbmZvcm1hw6fDo28gdHJhZmVnYSBlbSBkaXZlcnNhcyByZWRlcyFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjApe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZTEuc3RyaW5nID0gXCJDb20gYXMgaW5mb3JtYcOnw7VlcyBwYXNzYWRhcyBuZXN0YSBmYXNlXFxuXCIrXHJcbiAgICAgICAgICAgIFwicmVzcG9uZGEgYWdvcmEgbyBRdWl6IVxcblwiK1xyXG4gICAgICAgICAgICBcImNsaXF1ZSBlbSBjb250aW51YXIgZSBib2Egc29ydGUhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIxKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2UyXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDExKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvbk5vMTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubGJsTm8xLnN0cmluZyA9IFwiTm8gNiAgICAgICAgIDZcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJObyAzICAgICAgICAgMVwiO1xyXG4gICAgICAgIHRoaXMuc29tZVJlYWxpemFTYWx0bygpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzYuc2V0UG9zaXRpb24oMCwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvMy5zZXRQb3NpdGlvbigwLCAtMjAyKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvbk5vMjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubGJsTm8xLnN0cmluZyA9IFwiTm8gNSAgICAgICAgIDJcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJObyA2ICAgICAgICAgMVwiO1xyXG4gICAgICAgIHRoaXMuc29tZVJlYWxpemFTYWx0bygpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzUuc2V0UG9zaXRpb24oMCwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNi5zZXRQb3NpdGlvbigwLCAtMjAyKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvbk5vMzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubGJsTm8xLnN0cmluZyA9IFwiTm8gNSAgICAgICAgIDFcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJObyAyICAgICAgICAgMlwiO1xyXG4gICAgICAgIHRoaXMuc29tZVJlYWxpemFTYWx0bygpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzUuc2V0UG9zaXRpb24oMCwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvMi5zZXRQb3NpdGlvbigwLCAtMjAyKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvbk5vNDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubGJsTm8xLnN0cmluZyA9IFwiTm8gNSAgICAgICAgIDFcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJObyAyICAgICAgICAgMVwiO1xyXG4gICAgICAgIHRoaXMuc29tZVJlYWxpemFTYWx0bygpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzUuc2V0UG9zaXRpb24oMCwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvMi5zZXRQb3NpdGlvbigwLCAtMjAyKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvbk5vNTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubGJsTm8xLnN0cmluZyA9IFwiTm8gNCAgICAgICAgIDFcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJObyA2ICAgICAgICAgMlwiO1xyXG4gICAgICAgIHRoaXMuc29tZVJlYWxpemFTYWx0bygpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzQuc2V0UG9zaXRpb24oMCwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNi5zZXRQb3NpdGlvbigwLCAtMjAyKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvbk5vNjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubGJsTm8xLnN0cmluZyA9IFwiTm8gNSAgICAgICAgIDcwJVxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJcXG5cIitcclxuICAgICAgICBcIlwiO1xyXG4gICAgICAgIHRoaXMuc29tZVJlYWxpemFTYWx0bygpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzUuc2V0UG9zaXRpb24oMCwgLTEwOCk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25TYWx0bzE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMTMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5ubzEuc2V0UG9zaXRpb24oLTI0MCwgLTE4MSk7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgLT0gMTtcclxuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoLTI0MCwgLTE4MSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25TYWx0bzI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMTMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5ubzIuc2V0UG9zaXRpb24oLTE4MSwgLTYpO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnggPT0gMTIpe1xyXG4gICAgICAgIHRoaXMuc2FsdG9zIC09IDE7XHJcbiAgICAgICAgdmFyIG1vdmUyID0gdGhpcy5tb3ZlUGxheWVyKC0xODEsIC02KTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24obW92ZTIpOyAgICBcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgLT0gMjtcclxuICAgICAgICB2YXIgbW92ZTEgPSB0aGlzLm1vdmVQbGF5ZXIoMTIsIC0yNyk7XHJcbiAgICAgICAgdmFyIG1vdmUyID0gdGhpcy5tb3ZlUGxheWVyKC0xODEsIC02KTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24oY2Muc2VxdWVuY2UobW92ZTEsbW92ZTIpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25TYWx0bzM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMTMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5ubzMuc2V0UG9zaXRpb24oLTE1LCAtMTgxKTtcclxuICAgICAgICB0aGlzLnNhbHRvcyAtPSAxO1xyXG4gICAgICAgIHZhciBtb3ZlID0gdGhpcy5tb3ZlUGxheWVyKC0xNSwgLTE4MSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKG1vdmUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uU2FsdG80OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc29tZU5vcygpO1xyXG4gICAgICAgIHRoaXMudGFiUm90LnNldFBvc2l0aW9uKDEzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubm80LnNldFBvc2l0aW9uKDEyLCAtMjcpO1xyXG4gICAgICAgIHRoaXMuc2FsdG9zIC09IDE7XHJcbiAgICAgICAgdmFyIG1vdmUgPSB0aGlzLm1vdmVQbGF5ZXIoMTIsIC0yNyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKG1vdmUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uU2FsdG81OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc29tZU5vcygpO1xyXG4gICAgICAgIHRoaXMudGFiUm90LnNldFBvc2l0aW9uKDEzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubm81LnNldFBvc2l0aW9uKC0zOSwgMTAzKTtcclxuICAgICAgICBpZih0aGlzLnBsYXllci54ID09IC0xNSl7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgLT0gMTtcclxuICAgICAgICB2YXIgbW92ZTEgPSB0aGlzLm1vdmVQbGF5ZXIoLTM5LCAxMDMpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJ1bkFjdGlvbihtb3ZlMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVyLnggPT0gMTIpe1xyXG4gICAgICAgIHRoaXMuc2FsdG9zIC09IDE7XHJcbiAgICAgICAgdmFyIG1vdmUyID0gdGhpcy5tb3ZlUGxheWVyKC0zOSwgMTAzKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24obW92ZTIpOyAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNhbHRvcyAtPSAyO1xyXG4gICAgICAgIG1vdmUxID0gdGhpcy5tb3ZlUGxheWVyKDEyLCAtMjcpO1xyXG4gICAgICAgIHZhciBtb3ZlMiA9IHRoaXMubW92ZVBsYXllcigtMzksIDEwMyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKG1vdmUxLG1vdmUyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uU2FsdG82OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc29tZU5vcygpO1xyXG4gICAgICAgIHRoaXMudGFiUm90LnNldFBvc2l0aW9uKDEzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubm82LnNldFBvc2l0aW9uKDE5MywgMTE1KTtcclxuICAgICAgICBpZih0aGlzLnBsYXllci54ID09IC0yMTApe1xyXG4gICAgICAgIHRoaXMuc2FsdG9zIC09IDU7XHJcbiAgICAgICAgdmFyIG1vdmUxID0gdGhpcy5tb3ZlUGxheWVyKC0xODEsIC02KTtcclxuICAgICAgICB2YXIgbW92ZTIgPSB0aGlzLm1vdmVQbGF5ZXIoLTE1LCAtMTgxKTtcclxuICAgICAgICB2YXIgbW92ZTMgPSB0aGlzLm1vdmVQbGF5ZXIoMTIsIC0yNyk7XHJcbiAgICAgICAgdmFyIG1vdmU1ID0gdGhpcy5tb3ZlUGxheWVyKC0zOSwgMTAzKTtcclxuICAgICAgICB2YXIgbW92ZTYgPSB0aGlzLm1vdmVQbGF5ZXIoMTkzLCAxMTUpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShtb3ZlMSxtb3ZlMixtb3ZlMyxtb3ZlNSxtb3ZlNikpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBsYXllci54ID09IC0zOSl7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgLT0gMjtcclxuICAgICAgICB2YXIgbW92ZTEgPSB0aGlzLm1vdmVQbGF5ZXIoMTIsIC0yNyk7XHJcbiAgICAgICAgdmFyIG1vdmUyID0gdGhpcy5tb3ZlUGxheWVyKDE5MywgMTE1KTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24oY2Muc2VxdWVuY2UobW92ZTEsbW92ZTIpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNhbHRvcyAtPSAxO1xyXG4gICAgICAgICAgICB2YXIgbW92ZTYgPSB0aGlzLm1vdmVQbGF5ZXIoMTkzLCAxMTUpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24obW92ZTYpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYodGhpcy5zYWx0b3MgPiAwKXtcclxuICAgICAgICB2YXIgcHJvZkZyZW50ZSA9IHRoaXMucHJvZmVzc29yRnJlbnRlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHByb2ZGcmVudGUucGxheShcIm1vdmVQcm9mZXNzb3JGcmVudGVcIik7XHJcbiAgICAgICAgdmFyIHR3ZnJlbnRlID0gdGhpcy50ZXh0V3JhcHBlckZyZW50ZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0d2ZyZW50ZS5wbGF5KFwibW92ZVRXRnJlbnRlXCIpO1xyXG4gICAgICAgIHRoaXMuY29udFRleHRvID0gMjA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICBcclxuICAgIGdhbWVPdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc2FsdG9zID0gMTtcclxuICAgICAgICB2YXIgc2NvcmUgPSB0aGlzLnNjb3JlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHNjb3JlLnBsYXkoXCJzb21lU2NvcmVcIik7XHJcbiAgICAgICAgdmFyIHByb2ZGcmVudGUgPSB0aGlzLnByb2Zlc3NvckZyZW50ZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBwcm9mRnJlbnRlLnBsYXkoXCJtb3ZlUHJvZmVzc29yRnJlbnRlXCIpO1xyXG4gICAgICAgIHZhciB0d2ZyZW50ZSA9IHRoaXMudGV4dFdyYXBwZXJGcmVudGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdHdmcmVudGUucGxheShcIm1vdmVUV0ZyZW50ZVwiKTtcclxuICAgICAgICAvL3RoaXMuY29udFRleHRvID0gMjA7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2UxLnN0cmluZyA9IFwiSW5mZWxpem1lbnRlIGEgbWVuc2FnZW0gc2UgcGVyZGV1XFxuXCIrXHJcbiAgICAgICAgICAgIFwiU2FsdG9zIGluc3VmaWNpZW50ZXMgcGFyYSBjaGVnYXIgYW8gZGVzdGlub1xcblwiK1xyXG4gICAgICAgICAgICAnY2xpcXVlIGVtIGNvbnRpbnVhciBlIHRlbnRlIG5vdmFtZW50ZSEnO1xyXG4gICAgICAgIGlmKHRoaXMuY29udFRleHRvID09IDkpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICB0aGlzLmNyaWFMaW5oYSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc2FsdG9zIDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gXCJTYWx0b3M6IFwiKyB0aGlzLnNhbHRvcztcclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJnOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm8zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm82OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhYlJvdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzY29yZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yRnJlbnRlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBhY290ZTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFjb3RlMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGUzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHRvRmFzZTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhYnJvdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGVBOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBhY290ZUI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFjb3RlQzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGVBQ29ycmV0bzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGVCQ29ycmV0bzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGVDQ29ycmV0bzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBMYmxBY2VydG9zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBMYmxFcnJvczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgTGJsT3JkZW1Db3JyZXRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhY2VydG9zOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGVycm9zOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgICAgICBcclxuICAgICAgICByb3RlYW1lbnRvczogMCxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24xOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMzogMCxcclxuICAgICAgICBcclxuICAgICAgICBicmFuY286IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXp1bDogMCxcclxuICAgICAgICBcclxuICAgICAgICB2ZXJkZTogMCxcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjZXJ0b3MgPSAwO1xyXG4gICAgICAgIHRoaXMuZXJyb3MgPSAwO1xyXG4gICAgICAgIHRoaXMuY29udFRleHRvID0gMDtcclxuICAgICAgICB0aGlzLnJvdGVhbWVudG9zID0gMDtcclxuICAgICAgICB0aGlzLmJ1dHRvbjEgPSAwO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMiA9IDA7XHJcbiAgICAgICAgdGhpcy5idXR0b24zID0gMDtcclxuICAgICAgICB0aGlzLmJyYW5jbyA9IDA7XHJcbiAgICAgICAgdGhpcy5henVsID0gMDtcclxuICAgICAgICB0aGlzLnZlcmRlID0gMDtcclxuICAgICAgICB0aGlzLnNvbWVOb3MoKTtcclxuICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk5lc3NlIE1pbmktSm9nbywgdm9jZSBhcHJlbmRlcmEgY29tbyBvIHBhY290ZVxcblwiKyBcclxuICAgICAgICAgICAgXCJ0cmFmZWdhIG5hIHJlZGUsIGF0cmF2ZXMgZG8gVENQXCI7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzb21lTm9zOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm8xLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm8yLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm8zLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm80LnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm81LnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm82LnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXBhcmVjZU5vczogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vMS5zZXRQb3NpdGlvbigtMjQwLCAtMTgxKTtcclxuICAgICAgICB0aGlzLm5vMi5zZXRQb3NpdGlvbigtMTgxLCAtNik7XHJcbiAgICAgICAgdGhpcy5ubzMuc2V0UG9zaXRpb24oLTE1LCAtMTgxKTtcclxuICAgICAgICB0aGlzLm5vNC5zZXRQb3NpdGlvbigxMiwgLTI3KTtcclxuICAgICAgICB0aGlzLm5vNS5zZXRQb3NpdGlvbigtMzksIDEwMyk7XHJcbiAgICAgICAgdGhpcy5ubzYuc2V0UG9zaXRpb24oMTkzLCAxMTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXBhcmVjZVBhY290ZXMxOiBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZih0aGlzLnBhY290ZTEueCA9PSAyMTMgJiYgdGhpcy5wYWNvdGUxLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDE1OSwgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEuc2V0UG9zaXRpb24oMjE1LCAxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTMueCA9PSAyMDMgJiYgdGhpcy5wYWNvdGUzLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKC0zLCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigyMDUsMTE3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYWNvdGUyLnggPT0gMTkzICYmIHRoaXMucGFjb3RlMi55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigtMTY1LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5zZXRQb3NpdGlvbigxOTUsIDExNyk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhcGFyZWNlUGFjb3RlczI6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKHRoaXMucGFjb3RlMy54ID09IDIxMyAmJiB0aGlzLnBhY290ZTMueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTU5LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigyMTUsIDExNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGFjb3RlMi54ID09IDIwMyAmJiB0aGlzLnBhY290ZTIueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oLTMsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnNldFBvc2l0aW9uKDIwNSwxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTEueCA9PSAxOTMgJiYgdGhpcy5wYWNvdGUxLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKC0xNjUsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnNldFBvc2l0aW9uKDE5NSwgMTE3KTtcclxuICAgICAgICB9ICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFwYXJlY2VQYWNvdGVzMzogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYodGhpcy5wYWNvdGUxLnggPT0gMjEzICYmIHRoaXMucGFjb3RlMS55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxNTksIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnNldFBvc2l0aW9uKDIxNSwgMTE3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYWNvdGUyLnggPT0gMjAzICYmIHRoaXMucGFjb3RlMi55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigtMywgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIuc2V0UG9zaXRpb24oMjA1LDExNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGFjb3RlMy54ID09IDE5MyAmJiB0aGlzLnBhY290ZTMueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oLTE2NSwgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMuc2V0UG9zaXRpb24oMTk1LCAxMTcpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXBhcmVjZVBhY290ZXM0OiBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZih0aGlzLnBhY290ZTIueCA9PSAyMTMgJiYgdGhpcy5wYWNvdGUyLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDE1OSwgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIuc2V0UG9zaXRpb24oMjE1LCAxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTMueCA9PSAyMDMgJiYgdGhpcy5wYWNvdGUzLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKC0zLCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigyMDUsMTE3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYWNvdGUxLnggPT0gMTkzICYmIHRoaXMucGFjb3RlMS55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigtMTY1LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigxOTUsIDExNyk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhcGFyZWNlUGFjb3RlczU6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKHRoaXMucGFjb3RlMS54ID09IDIxMyAmJiB0aGlzLnBhY290ZTEueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUEuc2V0UG9zaXRpb24oMTU5LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigyMTUsIDExNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGFjb3RlMy54ID09IDIwMyAmJiB0aGlzLnBhY290ZTMueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oLTMsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUzLnNldFBvc2l0aW9uKDIwNSwxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTIueCA9PSAxOTMgJiYgdGhpcy5wYWNvdGUyLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKC0xNjUsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnNldFBvc2l0aW9uKDE5NSwgMTE3KTtcclxuICAgICAgICB9ICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vdmVQYWNvdGUxOiBmdW5jdGlvbiAoKXtcclxuICAgICAgICB2YXIgcGFjb3RlMTEgPSBjYy5tb3ZlVG8oNCwgY2MucCgtMTgxLCAtNikpO1xyXG4gICAgICAgIHZhciBwYWNvdGUxMiA9IGNjLm1vdmVUbyg0LCBjYy5wKC0zOSwgMTAzKSk7XHJcbiAgICAgICAgdmFyIHBhY290ZTEzID0gY2MubW92ZVRvKDQsIGNjLnAoMjEzLCAxMTUpKTtcclxuICAgICAgICB0aGlzLnBhY290ZTEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTExLHBhY290ZTEyLHBhY290ZTEzKSk7XHJcbiAgICAgICAgdmFyIHBhY290ZTIxID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0zNykpO1xyXG4gICAgICAgIHZhciBwYWNvdGUyMiA9IGNjLm1vdmVUbygyLCBjYy5wKDE5MywgMTE1KSk7XHJcbiAgICAgICAgdGhpcy5wYWNvdGUyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUyMSxwYWNvdGUyMikpO1xyXG4gICAgICAgIHZhciBwYWNvdGUzMSA9IGNjLm1vdmVUbygyLCBjYy5wKDEyLCAtMjcpKTtcclxuICAgICAgICB2YXIgcGFjb3RlMzIgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMTgxLCAtNikpO1xyXG4gICAgICAgIHZhciBwYWNvdGUzMyA9IGNjLm1vdmVUbygyLCBjYy5wKC0zOSwgMTAzKSk7XHJcbiAgICAgICAgdmFyIHBhY290ZTM0ID0gY2MubW92ZVRvKDIsIGNjLnAoMjAzLCAxMTUpKTtcclxuICAgICAgICB0aGlzLnBhY290ZTMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTMxLHBhY290ZTMyLHBhY290ZTMzLHBhY290ZTM0KSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtb3ZlUGFjb3RlMjogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAxKXtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTMxID0gY2MubW92ZVRvKDQsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTMyID0gY2MubW92ZVRvKDQsIGNjLnAoLTM5LCAxMDMpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTMzID0gY2MubW92ZVRvKDQsIGNjLnAoMjEzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUzLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUzMSxwYWNvdGUzMixwYWNvdGUzMykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMTEgPSBjYy5tb3ZlVG8oMiwgY2MucCgxMiwgLTM3KSk7XHJcbiAgICAgICAgICAgIHZhciBwYWNvdGUxMiA9IGNjLm1vdmVUbygyLCBjYy5wKDE5MywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMTEscGFjb3RlMTIpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTIxID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0yNykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMjIgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMTgxLCAtNikpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMjMgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMjQgPSBjYy5tb3ZlVG8oMiwgY2MucCgyMDMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTIxLHBhY290ZTIyLHBhY290ZTIzLHBhY290ZTI0KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gMil7XHJcbiAgICAgICAgICAgIHBhY290ZTExID0gY2MubW92ZVRvKDQsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICAgICAgcGFjb3RlMTIgPSBjYy5tb3ZlVG8oNCwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMTMgPSBjYy5tb3ZlVG8oNCwgY2MucCgyMTMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTExLHBhY290ZTEyLHBhY290ZTEzKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTMxID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0zNykpO1xyXG4gICAgICAgICAgICBwYWNvdGUzMiA9IGNjLm1vdmVUbygyLCBjYy5wKDE5MywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMzEscGFjb3RlMzIpKTtcclxuICAgICAgICAgICAgcGFjb3RlMjEgPSBjYy5tb3ZlVG8oMiwgY2MucCgxMiwgLTI3KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTIyID0gY2MubW92ZVRvKDIsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICAgICAgcGFjb3RlMjMgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgICAgICBwYWNvdGUyNCA9IGNjLm1vdmVUbygyLCBjYy5wKDIwMywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMjEscGFjb3RlMjIscGFjb3RlMjMscGFjb3RlMjQpKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAzKXtcclxuICAgICAgICAgICAgcGFjb3RlMjEgPSBjYy5tb3ZlVG8oNCwgY2MucCgtMTgxLCAtNikpO1xyXG4gICAgICAgICAgICBwYWNvdGUyMiA9IGNjLm1vdmVUbyg0LCBjYy5wKC0zOSwgMTAzKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTIzID0gY2MubW92ZVRvKDQsIGNjLnAoMjEzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUyMSxwYWNvdGUyMixwYWNvdGUyMykpO1xyXG4gICAgICAgICAgICBwYWNvdGUxMSA9IGNjLm1vdmVUbygyLCBjYy5wKDEyLCAtMzcpKTtcclxuICAgICAgICAgICAgcGFjb3RlMTIgPSBjYy5tb3ZlVG8oMiwgY2MucCgxOTMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTExLHBhY290ZTEyKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTExID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0yNykpO1xyXG4gICAgICAgICAgICBwYWNvdGUxMiA9IGNjLm1vdmVUbygyLCBjYy5wKC0xODEsIC02KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTEzID0gY2MubW92ZVRvKDIsIGNjLnAoLTM5LCAxMDMpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTE0ID0gY2MubW92ZVRvKDIsIGNjLnAoMjAzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUzLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUxMSxwYWNvdGUxMixwYWNvdGUxMyxwYWNvdGUxNCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnJvdGVhbWVudG9zID09IDQpe1xyXG4gICAgICAgICAgICBwYWNvdGUxMSA9IGNjLm1vdmVUbyg0LCBjYy5wKC0xODEsIC02KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTEyID0gY2MubW92ZVRvKDQsIGNjLnAoLTM5LCAxMDMpKTtcclxuICAgICAgICAgICAgcGFjb3RlMTMgPSBjYy5tb3ZlVG8oNCwgY2MucCgyMTMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTExLHBhY290ZTEyLHBhY290ZTEzKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTIxID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0zNykpO1xyXG4gICAgICAgICAgICBwYWNvdGUyMiA9IGNjLm1vdmVUbygyLCBjYy5wKDE5MywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMjEscGFjb3RlMjIpKTtcclxuICAgICAgICAgICAgcGFjb3RlMzEgPSBjYy5tb3ZlVG8oMiwgY2MucCgxMiwgLTI3KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTMyID0gY2MubW92ZVRvKDIsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICAgICAgcGFjb3RlMzMgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMzQgPSBjYy5tb3ZlVG8oMiwgY2MucCgyMDMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTMxLHBhY290ZTMyLHBhY290ZTMzLHBhY290ZTM0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FUZXh0bzE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk8gVENQIMOpIHVtIHByb3RvY29sbyBkZSBuw612ZWxcXG5cIitcclxuICAgICAgICAgICAgXCJkYSBjYW1hZGEgZGUgdHJhbnNwb3J0ZS4gTyBQcm90b2NvbG8gZGUgY29udHJvbGUgZGVcXG5cIitcclxuICAgICAgICAgICAgXCJ0cmFuc21pc3PDo28gcHJvdsOqIGNvbmZpYWJpbGlkYWRlLCBlbnRyZWdhIG5hIHNlcXVlbmNpYVwiOyBcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiY29ycmV0YSBlIHZlcmlmaWNhw6fDo28gZGUgZXJyb3MgcGFjb3Rlc1xcblwiK1xyXG4gICAgICAgICAgICBcImRlIGRhZG9zLCBlbnRyZSBvcyBkaWZlcmVudGVzIG7Ds3MgZGEgcmVkZVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJObyBtaW5pIGpvZ28gYSBzZWd1aXIsIGNhZGEgYm9saW5oYSB2ZXJkZVxcblwiK1xyXG4gICAgICAgICAgICBcInJlcHJlc2VudGEgdW0gbsOzIG5hIHJlZGUsIG8gb2JqZXRpdm8gZG8gam9nbyDDqVxcblwiK1xyXG4gICAgICAgICAgICBcIm9yZ2FuaXphciBvIHBhY290ZSBxdWUgc2FpIGRhIHN1YSBvcmlnZW0gZSBjaGVnYSBhbyBzZXUgZGVzdGlub1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJQYXJhIGlzc28gZXhpc3RlIG8gUklQXFxuXCIrIFxyXG4gICAgICAgICAgICBcIihSb3V0aW5nIEluZm9ybWF0aW9uIFByb3RvY29sKSBxdWUgw6kgdW0gcGFkcsOjbyBwYXJhXFxuXCIrXHJcbiAgICAgICAgICAgIFwidHJvY2EgZGUgaW5mb3JtYcOnw7VlcyBlbnRyZSBvcyBnYXRld2F5cyBlIGhvc3RzIGRlIHJvdGVhbWVudG8uXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkEgcmVkZSBtdW5kaWFsIGRlIGNvbXB1dGFkb3JlcyDDqSBvcmdhbml6YWRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY29tbyB1bSBjb25qdW50byBkZSBzaXN0ZW1hcyBhdXTDtG5vbW9zLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIFJJUCBlbWl0ZSBtZW5zYWdlbnMgZGUgYXR1YWxpemHDp8Ojb1xcblwiK1xyXG4gICAgICAgICAgICBcImRhcyBzdWFzIHJvdGFzIChUYWJlbGFzIGRlIFJvdGVhbWVudG8pIGVtIGludGVydmFsb3MgcmVndWxhcmVzXFxuXCIrXHJcbiAgICAgICAgICAgIFwiKGEgY2FkYSAzMCBzZWd1bmRvcykgZSBxdWFuZG8gYSB0b3BvbG9naWEgZGEgcmVkZSBtdWRhci5cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNil7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiT3Mgcm90ZWFkb3JlcyBkbyBSSVAgbWFudMOqbSBzb21lbnRlXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYSBtZWxob3Igcm90YSDDoCB1bSBkZXN0aW5vLlxcblwiK1xyXG4gICAgICAgICAgICBcImNvbSBlc3NhcyBpbmZvcm1hw6fDtWVzIGVtIG1lbnRlLCB2YW1vcyBhbyBtaW5pLWpvZ29cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTmVzc2UgY2VuYXJpbywgYSBpbmZvcm1hw6dhbyB2aWFqYXJhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZG8gcm90ZWFkb3IgMSBhbyByb3RlYWRvciA2LCBuZXNzZSBtaW5pLWpvZ29cXG5cIitcclxuICAgICAgICAgICAgXCJvIHNldSBvYmpldGl2byBlIGNvbG9jYXIgb3MgcGFjb3RlcyBuYSBvcmRlbSBjb3JyZXRhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDgpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcInZpc3VhbGl6ZSBhIG9yZGVtIGRlIGNoZWdhZGEgZG9zIHBhY290ZXNcXG5cIitcclxuICAgICAgICAgICAgXCJlIG9zIG9yZ2FuaXplLCBjbGljYW5kbyBuZWxlcywgbmEgb3JkZW0gY29ycmV0YVxcblwiK1xyXG4gICAgICAgICAgICBcImRlbW9uc3RyYWRhIG5vIGNhbnRvIHN1cGVyaW9yIGRhIHRlbGFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVGFtYmVtIGRldmUgc2VyIG9ic2VydmFkb1xcblwiK1xyXG4gICAgICAgICAgICBcImEgbWVsaG9yIHJvdGEgYSBzZXIgdXRpbGl6YWRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBwYXJhIGNvbWXDp2FyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5iZy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBhcmVjZU5vcygpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYnJvdC5zZXRQb3NpdGlvbigzMjEsLTEzMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigtMjQwLCAtMTgxKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnNldFBvc2l0aW9uKC0yMzAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMuc2V0UG9zaXRpb24oLTIyMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVBhY290ZTEoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gPSAyMDtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjApe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZTEuc3RyaW5nID0gXCJQYXJhYsOpbnMsIHZvY2UgY2hlZ291IHJvdGVvdSBvcyA1IHBhY290ZXNcXG5cIitcclxuICAgICAgICAgICAgXCJmYXplbmRvIFwiK3RoaXMuYWNlcnRvcytcIiBhY2VydG9zIGUgXCIrdGhpcy5lcnJvcytcIiBlcnJvc1xcblwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMSAmJiB0aGlzLmFjZXJ0b3MgPj0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlMS5zdHJpbmcgPSBcIlZvY2Ugb2J0ZXZlIDMgb3UgbWFpcyBhY2VydG9zXFxuXCIrXHJcbiAgICAgICAgICAgIFwiQ29tIGFzIGluZm9ybWHDp8O1ZXMgcGFzc2FkYXMgbmVzdGEgZmFzZVxcblwiK1xyXG4gICAgICAgICAgICBcInJlc3BvbmRhIGFnb3JhIG8gUXVpeiFcXG5cIitcclxuICAgICAgICAgICAgXCJjbGlxdWUgZW0gY29udGludWFyIGUgYm9hIHNvcnRlIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMiAmJiB0aGlzLmFjZXJ0b3MgPj0gMyl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlM1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjEgJiYgdGhpcy5lcnJvcyA+PSAzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2UxLnN0cmluZyA9IFwiVm9jZSBvYnRldmUgMyBvdSBtYWlzIGVycm9zXFxuXCIrXHJcbiAgICAgICAgICAgIFwidGVudGUgYWNlcnRhciBwZWxvIG1lbm9zIDMgcm90ZWFtZW50b3NcXG5cIitcclxuICAgICAgICAgICAgXCJqb2d1ZSBub3ZhbWVudGUhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBlIGJvYSBzb3J0ZSFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjIgJiYgdGhpcy5lcnJvcyA+PSAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdhbWVPdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxMzkwLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDEzOTAsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTM5MCwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigtMTI0MCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5zZXRQb3NpdGlvbigtMTIzMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigtMTIyMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yRnJlbnRlLnNldFBvc2l0aW9uKC0xOTksIDApO1xyXG4gICAgICAgICAgICAvL3RoaXMuc29tZU5vcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNvbG9jYVBhY290ZXNDb3JyZXRvczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLnJvdGVhbWVudG9zID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBQ29ycmV0by5zZXRQb3NpdGlvbigtMTA3LCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmJyYW5jbyA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQkNvcnJldG8uc2V0UG9zaXRpb24oLTEyLCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmF6dWwgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUNDb3JyZXRvLnNldFBvc2l0aW9uKDc1LCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmRlID0gMztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDQ29ycmV0by5zZXRQb3NpdGlvbigtMTA3LCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmRlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBQ29ycmV0by5zZXRQb3NpdGlvbigtMTIsIC01OCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnJhbmNvID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCQ29ycmV0by5zZXRQb3NpdGlvbig3NSwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5henVsID0gMztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBQ29ycmV0by5zZXRQb3NpdGlvbigtMTA3LCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmJyYW5jbyA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQ0NvcnJldG8uc2V0UG9zaXRpb24oLTEyLCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmRlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCQ29ycmV0by5zZXRQb3NpdGlvbig3NSwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5henVsID0gMztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBQ29ycmV0by5zZXRQb3NpdGlvbigtMTA3LCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmJyYW5jbyA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQ0NvcnJldG8uc2V0UG9zaXRpb24oLTEyLCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmRlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCQ29ycmV0by5zZXRQb3NpdGlvbig3NSwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5henVsID0gMztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQUNvcnJldG8uc2V0UG9zaXRpb24oLTEwNywgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5icmFuY28gPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUJDb3JyZXRvLnNldFBvc2l0aW9uKC0xMiwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5henVsID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDQ29ycmV0by5zZXRQb3NpdGlvbig3NSwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJkZSA9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdmVyaWljYU9yZGVtOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuYnV0dG9uMSA9PSB0aGlzLmJyYW5jbyAmJiB0aGlzLmJ1dHRvbjIgPT0gdGhpcy5henVsICYmIFxyXG4gICAgICAgIHRoaXMuYnV0dG9uMyA9PSB0aGlzLnZlcmRlKXtcclxuICAgICAgICAgICAgdGhpcy5hY2VydG9zICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucm90ZWFtZW50b3MgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDEzOTAsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oMTM5MCwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQy5zZXRQb3NpdGlvbigxMzkwLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnNldFBvc2l0aW9uKC0yNDAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIuc2V0UG9zaXRpb24oLTIzMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigtMjIwLCAtMTgxKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlUGFjb3RlMigpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgPT09IDAgfHwgdGhpcy5idXR0b24yID09PSAwIHx8IFxyXG4gICAgICAgIHRoaXMuYnV0dG9uMyA9PT0gMCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgIT0gdGhpcy5icmFuY28gfHwgdGhpcy5idXR0b24yICE9IHRoaXMuYXp1bCB8fCBcclxuICAgICAgICB0aGlzLmJ1dHRvbjMgIT0gdGhpcy52ZXJkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9zICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucm90ZWFtZW50b3MgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDEzOTAsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oMTM5MCwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQy5zZXRQb3NpdGlvbigxMzkwLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnNldFBvc2l0aW9uKC0yNDAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIuc2V0UG9zaXRpb24oLTIzMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigtMjIwLCAtMTgxKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlUGFjb3RlMigpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidG5CdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5idXR0b24yID09PSAwICYmIHRoaXMuYnV0dG9uMyA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigtMTM5LCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24yID09IDAgJiYgdGhpcy5idXR0b24zID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUEuc2V0UG9zaXRpb24oMTIsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjIgPT0gMSAmJiB0aGlzLmJ1dHRvbjMgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMSA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxMiwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMiA9PSAyICYmIHRoaXMuYnV0dG9uMyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gMztcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDE2MywgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMiA9PSAxICYmIHRoaXMuYnV0dG9uMyA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gMztcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDE2MywgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ0bkJ1dHRvbjI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5idXR0b24xID09PSAwICYmIHRoaXMuYnV0dG9uMyA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigtMTM5LCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24xID09IDAgJiYgdGhpcy5idXR0b24zID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oMTIsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgPT0gMSAmJiB0aGlzLmJ1dHRvbjMgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigxMiwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMSA9PSAyICYmIHRoaXMuYnV0dG9uMyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gMztcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDE2MywgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMSA9PSAxICYmIHRoaXMuYnV0dG9uMyA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gMztcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDE2MywgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnRuQnV0dG9uMzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmJ1dHRvbjEgPT09IDAgJiYgdGhpcy5idXR0b24yID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKC0xMzksIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgPT0gMCAmJiB0aGlzLmJ1dHRvbjIgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQy5zZXRQb3NpdGlvbigxMiwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMSA9PSAxICYmIHRoaXMuYnV0dG9uMiA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKDEyLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24xID09IDIgJiYgdGhpcy5idXR0b24yID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTYzLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24xID09IDEgJiYgdGhpcy5idXR0b24yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTYzLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbG9jYVBhY290ZXNDb3JyZXRvcygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnJvdGVhbWVudG9zID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUGFjb3RlczEoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUGFjb3RlczIoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUGFjb3RlczMoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUGFjb3RlczQoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUGFjb3RlczUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5MYmxBY2VydG9zLnN0cmluZyA9IFwiQWNlcnRvczogXCIgKyB0aGlzLmFjZXJ0b3M7XHJcbiAgICAgICAgdGhpcy5MYmxFcnJvcy5zdHJpbmcgPSBcIkVycm9zOiBcIiArIHRoaXMuZXJyb3M7XHJcbiAgICB9LFxyXG59KTsiLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwb3J0YTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9ydGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBvcnRhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwb3J0YTQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9ydGE1OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNocm9tZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmaWxlemlsbGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlyZWZveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBza3lwZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0aHVuZGVyYmlyZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBteXNxbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxibFBvbnR1YWNhbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9udHVhY2FvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgICAgICBcclxuICAgICAgICBwb3J0YTogMCxcclxuICAgICAgICBcclxuICAgICAgICBwZXJndW50YTogMCxcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvbnR1YWNhbyA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQSBjYW1hZGEgZGUgdHJhbnNwb3J0ZSB0cmFiYWxoYVxcblwiK1xyXG4gICAgICAgIFwiY29tIG8gY29uY2VpdG8gZGUgc29xdWV0ZXMoc29ja2V0cylcIjtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFwYXJlY2VQb3J0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wb3J0YTEuc2V0UG9zaXRpb24oLTM5MiwgMTcyKTtcclxuICAgICAgICB0aGlzLnBvcnRhMi5zZXRQb3NpdGlvbigtMjEzLCAxNzIpO1xyXG4gICAgICAgIHRoaXMucG9ydGEzLnNldFBvc2l0aW9uKC00MSwgMTcyKTtcclxuICAgICAgICB0aGlzLnBvcnRhNC5zZXRQb3NpdGlvbigxNTAsIDE3Mik7XHJcbiAgICAgICAgdGhpcy5wb3J0YTUuc2V0UG9zaXRpb24oMzU2LCAxNzIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVBvcnRhczogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnBvcnRhMS5zZXRQb3NpdGlvbigtMTM0OSwgMCk7XHJcbiAgICAgICAgdGhpcy5wb3J0YTIuc2V0UG9zaXRpb24oLTEzNDksIDApO1xyXG4gICAgICAgIHRoaXMucG9ydGEzLnNldFBvc2l0aW9uKC0xMzQ5LCAwKTtcclxuICAgICAgICB0aGlzLnBvcnRhNC5zZXRQb3NpdGlvbigtMTM0OSwgMCk7XHJcbiAgICAgICAgdGhpcy5wb3J0YTUuc2V0UG9zaXRpb24oLTEzNDksIDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZUljb25lczogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnNreXBlLnNldFBvc2l0aW9uKC0xMzYwLCAwKTtcclxuICAgICAgICB0aGlzLmZpcmVmb3guc2V0UG9zaXRpb24oLTEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMuY2hyb21lLnNldFBvc2l0aW9uKC0xMzYwLCAwKTtcclxuICAgICAgICB0aGlzLmZpbGV6aWxsYS5zZXRQb3NpdGlvbigtMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy50aHVuZGVyYmlyZC5zZXRQb3NpdGlvbigtMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5teXNxbC5zZXRQb3NpdGlvbigtMTM2MCwgMCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVRleHRvMTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRUZXh0byA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVW0gc29xdWV0ZSBkZSByZWRlIMOpIHVtIHBvbnRvIGZpbmFsIGRlIHVtIGZsdXhvIGRlIGNvbXVuaWNhw6fDo28gXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZW50cmUgcHJvY2Vzc29zIGF0cmF2w6lzIGRlIHVtYSByZWRlIGRlIGNvbXB1dGFkb3Jlcy4gSG9qZSBlbSBkaWFcXG5cIitcclxuICAgICAgICAgICAgXCJhIG1haW9yaWEgZGEgY29tdW5pY2HDp8OjbyBlbnRyZSBjb21wdXRhZG9yZXMgw6kgYmFzZWFkYSBubyBJUFwiOyBcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwicG9ydGFudG8gYSBtYWlvcmlhIGRvcyBzb3F1ZXRlcyBkZSByZWRlIHPDo28gc29xdWV0ZXMgSVAuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlVtIGVuZGVyZcOnbyBkZSBzb3F1ZXRlIMOpIGEgY29tYmluYcOnw6NvIGRlIHVtIGVuZGVyZcOnbyBkZSBJUCBlIHVtXFxuXCIrXHJcbiAgICAgICAgICAgIFwibsO6bWVybyBkYSBwb3J0YSwgcGFyZWNpZG8gY29tIG8gZmluYWwgZGUgdW1hIGNvbmV4w6NvIHRlbGVmw7RuaWNhIHF1ZSDDqVxcblwiK1xyXG4gICAgICAgICAgICBcImEgY29tYmluYcOnw6NvIGRlIHVtIG7Dum1lcm8gZGUgdGVsZWZvbmUgZSB1bWEgZGV0ZXJtaW5hZGEgZXh0ZW5zw6NvLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDb20gYmFzZSBuZXNzZSBlbmRlcmXDp28sIHNvcXVldGVzIGRlIGludGVybmV0XFxuXCIrXHJcbiAgICAgICAgICAgIFwiZW50cmVnYW0gcGFjb3RlcyBkZSBkYWRvcyBkZSBlbnRyYWRhIHBhcmEgbyBwcm9jZXNzbyBvdSB0aHJlYWRcXG5cIitcclxuICAgICAgICAgICAgXCJkZSBhcGxpY2HDp8OjbyBhcHJvcHJpYWRvLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJJbnNlcmlkbyBubyBjb25jZWl0byBkZSBzb2NrZXRzLCB0ZW1vcyBvIGNvbmNlaXRvIGRlXFxuXCIrXHJcbiAgICAgICAgICAgIFwicG9ydGFzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlBvcnRhIMOpIHVtIHBvbnRvIGbDrXNpY28gKGhhcmR3YXJlKSBvdSBsw7NnaWNvIChzb2Z0d2FyZSkgbm8gcXVhbFxcblwiK1xyXG4gICAgICAgICAgICBcInBvZGVtIHNlciBmZWl0YXMgY29uZXjDtWVzLCBvdSBzZWphLCB1bSBjYW5hbCBhdHJhdsOpcyBkbyBxdWFsIG9zIGRhZG9zXFxuXCIrXHJcbiAgICAgICAgICAgIFwic8OjbyB0cmFuc2Zlcmlkb3MgZW50cmUgdW0gZGlzcG9zaXRpdm8gZGUgZW50cmFkYSBlIG8gcHJvY2Vzc2Fkb3JcIjsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDYpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIm91IGVudHJlIG8gcHJvY2Vzc2Fkb3IgZSB1bSBkaXNwb3NpdGl2byBkZSBzYcOtZGEuXFxuXCIrXHJcbiAgICAgICAgICAgIFwiT3UgYWNlc3NvIHBvciBkZW50cm8gZSBwb3IgZm9yYSBkbyBjb21wdXRhZG9yLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA3KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJVbWEgcG9ydGEgZGUgc29mdHdhcmUgw6kgdW1hIGNvbmV4w6NvIHZpcnR1YWxcXG5cIitcclxuICAgICAgICAgICAgXCJxdWUgcG9kZSBzZXIgdXNhZGEgbmEgdHJhbnNtaXNzw6NvIGRlIGRhZG9zLiBBcyBtYWlzIGNvbXVucyBzw6NvXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYXMgcG9ydGFzIHByb3RvY29sYWRhcyBUQ1AgZSBVRFBcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQWxndW1hcyBwb3J0YXMgZnJlcXVlbnRlbWVudGUgdXNhZGFzIHPDo286XFxuXCIrXHJcbiAgICAgICAgICAgIFwiUG9ydGEgODA6IHBhcmEgcHJvdG9jb2xvcyBIVFRQXFxuXCIrXHJcbiAgICAgICAgICAgIFwiUG9ydGEgODE6IFNreXBlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlBvcnRhIDIwOiBwYXJhIHByb3RvY29sb3MgRlRQXFxuXCIrXHJcbiAgICAgICAgICAgIFwiUG9ydGEgMTEwOiBwYXJhIHNlcnZpw6dvcyBQT1AzKEUtTWFpbClcXG5cIitcclxuICAgICAgICAgICAgXCJQb3J0YSAxMTg6IHBhcmEgbyBTUUwsIGVudHJlIHbDoXJpb3Mgb3V0cmFzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDb20gZXNzYSBpbmZvcm1hw6fDo28gZW0gbcOjb3NcXG5cIitcclxuICAgICAgICAgICAgXCJ2YW1vcyBhbyBtaW5pLWpvZ29cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMTEpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkNvbSBvcyBjb25oZWNpbWVudG9zIGRlIHBvcnRhcyBwYXNzYWRvcyBhdMOpIGVudGFvXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZGlyZWNpb25lIG8gaWNvbmUgZGEgYXBsaWNhw6dhbyBwYXJhIGEgcG9ydGEgY29ycmV0YVxcblwiK1xyXG4gICAgICAgICAgICBcInBhcmEgaXNzbywgY2xpcXVlIG5hIHBvcnRhIHBhcmEgcXVhbCBlbGUgZGV2ZSBzZWd1aXJcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMTIpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkZhw6dhIGEgYXNzb2NpYcOnw6NvIGNlcnRhIDUgdmV6ZXNcXG5cIitcclxuICAgICAgICAgICAgXCJwYXJhIGF2YW7Dp2FyIHBhcmEgbyBxdWl6IVxcblwiK1xyXG4gICAgICAgICAgICBcImNsaXF1ZSBlbSBjb250aW51YXIgZSBib2Egc29ydGUhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEzKXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUG9ydGFzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNreXBlLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDE5O1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxOSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiUGFyYWLDqW5zISFcXG5cIitcclxuICAgICAgICAgICAgXCJWb2PDqiBhY2VydG91IGFzIHBvcnRhcyBjb3JyZXRhcyFcXG5cIitcclxuICAgICAgICAgICAgXCJjbGlxdWUgZW0gY29udGludWFyIGUgdsOhIHBhcmEgbyBxdWl6IVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMCl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlNFwiKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcG9ydGE4MDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdmFsb3Jwb3J0YSA9IFwiODBcIjtcclxuICAgICAgICBpZih0aGlzLnBvcnRhID09IHZhbG9ycG9ydGEpe1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5zb21lSWNvbmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcG9ydGE4MTogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdmFsb3Jwb3J0YSA9IFwiODFcIjtcclxuICAgICAgICBpZih0aGlzLnBvcnRhID09IHZhbG9ycG9ydGEpe1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5zb21lSWNvbmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcG9ydGEyMDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdmFsb3Jwb3J0YSA9IFwiMjBcIjtcclxuICAgICAgICBpZih0aGlzLnBvcnRhID09IHZhbG9ycG9ydGEpe1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5zb21lSWNvbmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcG9ydGExMTA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHZhbG9ycG9ydGEgPSBcIjExMFwiO1xyXG4gICAgICAgIGlmKHRoaXMucG9ydGEgPT0gdmFsb3Jwb3J0YSl7XHJcbiAgICAgICAgICAgIHRoaXMucG9udHVhY2FvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5zb21lSWNvbmVzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVJY29uZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwb3J0YTExODogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdmFsb3Jwb3J0YSA9IFwiMTE4XCI7XHJcbiAgICAgICAgaWYodGhpcy5wb3J0YSA9PSB2YWxvcnBvcnRhKXtcclxuICAgICAgICAgICAgdGhpcy5wb250dWFjYW8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVJY29uZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFQZXJndW50YTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLnBlcmd1bnRhID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODFcIjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODBcIjtcclxuICAgICAgICAgICAgdGhpcy5jaHJvbWUuc2V0UG9zaXRpb24oMCwgLTIzNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGVyZ3VudGEgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGEgPSBcIjExMFwiO1xyXG4gICAgICAgICAgICB0aGlzLnRodW5kZXJiaXJkLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBlcmd1bnRhID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRhID0gXCIyMFwiO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGV6aWxsYS5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODFcIjtcclxuICAgICAgICAgICAgdGhpcy5za3lwZS5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODBcIjtcclxuICAgICAgICAgICAgdGhpcy5maXJlZm94LnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBlcmd1bnRhID09IDYpe1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRhID0gXCIxMThcIjtcclxuICAgICAgICAgICAgdGhpcy5teXNxbC5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSA3KXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODFcIjtcclxuICAgICAgICAgICAgdGhpcy5maWxlemlsbGEuc2V0UG9zaXRpb24oMCwgLTIzNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGVyZ3VudGEgPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGEgPSBcIjgwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY2hyb21lLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBlcmd1bnRhID09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRhID0gXCI4MVwiO1xyXG4gICAgICAgICAgICB0aGlzLnNreXBlLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBlcmd1bnRhID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiMTEwXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bmRlcmJpcmQuc2V0UG9zaXRpb24oMCwgLTIzNyk7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgPSAwO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgdGhpcy5tdWRhUGVyZ3VudGEoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnBvbnR1YWNhbyA+PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3Iuc2V0UG9zaXRpb24oLTE4NCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVQb3J0YXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYmxQb250dWFjYW8uc3RyaW5nID0gXCJBY2VydG9zOiBcIisgdGhpcy5wb250dWFjYW87XHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgICAgICBsb2dvU29uZzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgZHVyYWNhb0xvZ286IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmxvZ29Tb25nLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB2YWlQcmFNYWluOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5kdXJhY2FvTG9nbykge1xyXG4gICAgICAgICAgICB0aGlzLnZhaVByYU1haW4oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0T3BhY2l0eSgwKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldE9wYWNpdHkoMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldE9wYWNpdHkoMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldE9wYWNpdHkoMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3Bvc3RhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGVyZ3VudGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEyYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTNiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhNGI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFDZXJ0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUV4dHJhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRlbGFGaW5hbFF1aXo6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0NlcnRhczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFzRXJyYWRhczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uVHJ5QWdhaW46IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZhY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmFsYXF1aXpwcm9mOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3A6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcENlcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwRXJyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNhaUFuaW1hY2FvOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW9zdHJhUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FSZXNwb3N0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTI1OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZXJndW50YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgdGhpcy5hcGFyZWNlUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFpcyBvcyBQRFVzKFVuaWRhZGVzIGRlIFxcbicrXHJcbiAgICAgICAgJ2RhZG9zIGRlIHByb3RvY29sb3MpIHVzYWRvc1xcbicrXHJcbiAgICAgICAgJ25hIGNhbWFkYSBkZSBhY2Vzc28gYSByZWRlPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1NlZ21lbnRvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnRGF0YWdyYW1hJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnQml0IGUgUXVhZHJvcyhGcmFtZXMpJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnUGFjb3Rlcyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgdGhpcy5hcGFyZWNlUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnQSBvbmRhIHNlbm9pZGFsIMOpIGEgcmVwcmVzZW50YcOnw6NvXFxuJytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnVuZGFtZW50YWwgZGUgdW0gc2luYWwgYW5hbMOzZ2ljby5cXG4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgTWFycXVlIGEgYWx0ZXJuYXRpdmEgYWJhaXhvIHF1ZSBOw4NPXFxuJysgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwcmVzZW50YSB1bWEgY2FyYWN0ZXLDrXN0aWNhXFxuJytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGUgb25kYSBzZW5vaWRhbC4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdTaW5hbGl6YcOnw6NvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnQW1wbGl0dWRlICc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0ZyZXF1ZW5jaWEvUGVyaW9kbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0Zhc2UnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgIHRoaXMuYXBhcmVjZVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ0VtIHVtYSB0cmFuc21pc3PDo28gZGlnaXRhbCBcXG4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbyBpbmZvcm1hciBxdWUgZXhpc3RlbVxcbicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzQgbsOtdmVpcyBkZSBzaW5hbGl6YcOnw6NvIHF1YW50b3MgYml0c1xcbicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzdMOjbyBzZW5kbyB0cmFmZWdhZG9zIHBvciBzaW5hbD8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICczJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnMic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJzQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICcxJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICB0aGlzLmFwYXJlY2VSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdPIHNpbmFsIGRpZ2l0YWwgw6kgY2FyYWN0ZXJpemFkbyBwb3IuLi46JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnU2VyIGFsdGVyYWRvIGVtIGNvbnTDrW51byc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1NlciB1bSBzaW5hbCBxdWUgbsOjbyBwb3NzdWkgZmFsaGFzJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnVGVyIHVtIGNvbmp1bnRvIGluZmluaXRvIGRlIHZhbG9yZXNcXG4gbnVtIGludGVydmFsbyBkZSB0ZW1wbyBxdWFscXVlcic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1Bvc3N1aXIgYXBlbmFzIHVtXFxuIGNvbmp1bnRvIGxpbWl0YWRvIGRlIHZhbG9yZXMnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgIHRoaXMuYXBhcmVjZVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ0EgbGF0w6puY2lhIMOpIGNhbGN1bGFkYVxcbicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F0cmF2w6lzIGRhIHNvbWEgZGUgNCBhdHJhc29zLlxcbicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01hcnF1ZSBhIGFsdGVybmF0aXZhIHF1ZSBhcHJlc2VudGFcXG4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcyA0IGF0cmFzb3MgcXVlIGZvcm1hbSBhIGxhdMOqbmNpYTonO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdBdHJhc28gZGUgdHJhbnNtaXNzw6NvLCBhdHJhc28gZGUgcHJvcGFnYcOnw6NvXFxuJytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXRyYXNvIGRlIGZpbGEsIGF0cmFzbyBkZSBwcm9jZXNzYW1lbnRvLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0F0cmFzbyBkZSBzaW5haXMsIGF0cmFzbyBkZSBwcm9wYWdhw6fDo29cXG4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdHJhc28gZGUgZmlsYSwgYXRyYXNvIGRlIHByb2Nlc3NhbWVudG8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdBdHJhc28gZGUgdHJhbnNtaXNzw6NvLCBhdHJhc28gZGUgcHJvcGFnYcOnw6NvXFxuJytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXRyYXNvIGRlIHJlY2Vww6fDo28sIGF0cmFzbyBkZSBwcm9jZXNzYW1lbnRvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnQXRyYXNvIGRlIG1lbnNhZ2VtLCBhdHJhc28gZGUgcHJvcGFnYcOnw6NvXFxuJytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXRyYXNvIGRlIHJlY2Vww6fDo28sIGF0cmFzbyBkZSBwcm9jZXNzYW1lbnRvLic7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcENlcnRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMuc2FpQW5pbWFjYW8gPSAxO1xyXG4gICAgICAgIHRoaXMucmVzcENlciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BFcnJhZG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5zYWlBbmltYWNhbyA9IDE7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZW92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50ZWxhRmluYWxRdWl6LnNldFBvc2l0aW9uWCgwKTtcclxuICAgICAgICBpZih0aGlzLnJlc3BDZXI+PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UcnlBZ2Fpbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ1BhcmFiw6lucyFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogcGFzc291IG5vIFF1aXohJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLnN0cmluZyA9ICdBaCEgcXVlIHBlbmEhXFxuJytcclxuICAgICAgICAgICAgJ1ZvY8OqIG7Do28gcGFzc291IG5vIFF1aXohXFxuJysgXHJcbiAgICAgICAgICAgICd0ZW50ZSBub3ZhbWVudGUhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNDZXJ0YXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBjb3JyZXRhczogJyt0aGlzLnJlc3BDZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNFcnJhZGFzLnN0cmluZyA9ICdSZXNwb3N0YXMgRXJyYWRhczogJyt0aGlzLnJlc3BFcnI7IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDEwMDAwMDtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLnNhaUFuaW1hY2FvID0gMDtcclxuICAgICAgICB0aGlzLnJlc3BDZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciA9IDA7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFwYXJlY2VSZXNwb3N0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5zYWlBbmltYWNhbyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5zYWlBbmltYWNhbyA9IDA7XHJcbiAgICAgICAgICAgIHZhciByZXNwRXJyYWRhMSA9IHRoaXMucmVzcG9zdGFFcnJhZGExYi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHJlc3BFcnJhZGEyID0gdGhpcy5yZXNwb3N0YUVycmFkYTJiLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcmVzcEVycmFkYTMgPSB0aGlzLnJlc3Bvc3RhRXJyYWRhM2IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciByZXNwRXJyYWRhNCA9IHRoaXMucmVzcG9zdGFFcnJhZGE0Yi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHJlc3AxID0gdGhpcy5yZXNwb3N0YTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciByZXNwMiA9IHRoaXMucmVzcG9zdGEyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcmVzcDMgPSB0aGlzLnJlc3Bvc3RhMy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHJlc3A0ID0gdGhpcy5yZXNwb3N0YTQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciByZXNwQ2VydGEgPSB0aGlzLnJlc3Bvc3RhQ2VydGEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciByZXNwRXh0cmEgPSB0aGlzLnJlc3Bvc3RhRXh0cmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciBmYWxhID0gdGhpcy5mYWxhcXVpenByb2YuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciBmYWNlID0gdGhpcy5mYWNlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcHJvZmVzc29yID0gdGhpcy5wcm9mZXNzb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BFcnJhZGExLnBsYXlBZGRpdGl2ZSgnYXBhcmVjZVJlc3Bvc3RhMScpO1xyXG4gICAgICAgICAgICByZXNwRXJyYWRhMi5wbGF5QWRkaXRpdmUoJ2FwYXJlY2VSZXNwb3N0YTInKTtcclxuICAgICAgICAgICAgcmVzcEVycmFkYTMucGxheUFkZGl0aXZlKCdhcGFyZWNlUmVzcG9zdGEzJyk7XHJcbiAgICAgICAgICAgIHJlc3BFcnJhZGE0LnBsYXlBZGRpdGl2ZSgnYXBhcmVjZVJlc3Bvc3RhNCcpO1xyXG4gICAgICAgICAgICByZXNwMS5wbGF5QWRkaXRpdmUoJ2FwYXJlY2VSZXNwb3N0YTEnKTtcclxuICAgICAgICAgICAgcmVzcDIucGxheUFkZGl0aXZlKCdhcGFyZWNlUmVzcG9zdGEyJyk7XHJcbiAgICAgICAgICAgIHJlc3AzLnBsYXlBZGRpdGl2ZSgnYXBhcmVjZVJlc3Bvc3RhMycpO1xyXG4gICAgICAgICAgICByZXNwNC5wbGF5QWRkaXRpdmUoJ2FwYXJlY2VSZXNwb3N0YTQnKTtcclxuICAgICAgICAgICAgZmFsYS5wbGF5QWRkaXRpdmUoJ2FwYXJlY2VGYWxhUHJvZmVzc29yJyk7XHJcbiAgICAgICAgICAgIHZhciBhbmltYUZhY2UgPSBmYWNlLnBsYXkoXCJmYWxhUHJvZmVzc29yMVwiKTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnNwZWVkID0gMC41O1xyXG4gICAgICAgICAgICBhbmltYUZhY2UucmVwZWF0Q291bnQgPSBJbmZpbml0eTtcclxuICAgICAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnYW5pbWFQcm9mZXNzb3IxJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc2FpQW5pbWFjYW8gPT09IDApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvQ3JlZGl0czogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJjcmVkaXRzXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9zdHJhUmVzcG9zdGEoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy50aW1lciA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVvdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGltZXIgLT0gZHQ7XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVzcG9zdGExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGE0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwZXJndW50YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGExYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTJiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhM2I6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGE0Yjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUNlcnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXh0cmE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGVsYUZpbmFsUXVpejoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnYW1lT3Zlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFzQ2VydGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNFcnJhZGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b25UcnlBZ2Fpbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mZXNzb3I6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmFjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmYWxhcXVpenByb2Y6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcDogMCxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMCxcclxuICAgICAgICBcclxuICAgICAgICB0aW1lcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwQ2VyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3BFcnI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2FpQW5pbWFjYW86IDAsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzb21lUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldE9wYWNpdHkoMCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtb3N0cmFSZXNwb3N0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEzLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXh0cmEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVJlc3Bvc3RhczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKDExMik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTE4KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMjU4KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBlcmd1bnRhczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICB0aGlzLmFwYXJlY2VSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ0EgY2FtYWRhIEludGVybmV0XFxuIMOpIHJlc3BvbnPDoXZlbCBwb3IuLi4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdDb250cm9sYXIgZGUgZm9ybWEgZsOtc2ljYSBvIGFjZXNzbyBhIHJlZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdHZXJhciBlIHRyYW5zbWl0aXIgbyBzaW5hbCBwZWxvIG1laW8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdEZWZpbmlyIGUgdHJhdGFyIG9zIGVuZGVyZcOnb3MgbMOzZ2ljb3NcXG4gZGUgb3JpZ2VtL2Rlc3Rpbm8gbmEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0ZhemVyIGEgY29tdW5pY2HDp8OjIGVudHJlIG9zIHByb2Nlc3Nvcyc7IFxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgIHRoaXMuYXBhcmVjZVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgZG9zIHNlZ3VpbnRlc1xcbiBOw4NPIMOpIHZlcmRhZGVpcm9cXG4gc29icmUgdW0gZW5kZXJlw6dvIElQPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1VtIGVuZGVyZcOnbyBJUHY0XFxuIGdlcmFsbWVudGUgw6kgcmVwcmVzZW50YWRvIG5vIGZvcm1hdG9cXG4gaGV4YWRlY2ltYWwgcGFyYSBvIHVzdcOhcmlvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnVW0gZW5kZXJlw6dvIElQIMOpIHVtIGVuZGVyZcOnbyBsw7NnaWNvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnVW0gZW5kZXJlw6dvIElQIMOpIGdsb2JhbG1lbnRlXFxuIGV4Y2x1c2l2byBlbSB1bWEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1VtIGVuZGVyZcOnbyBJUCBwb2RlIHNlciBjb25zaWRlcmFkb1xcbiBjb21vIGNvbnNpc3RpbmRvIGRlXFxuIHVtYSBwYXJ0ZSBkZSByZWRlIGUgdW1hIHBhcnRlIGRlIGhvc3QnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgIHRoaXMuYXBhcmVjZVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgZGFzIHNlZ3VpbnRlc1xcbiBtw6FzY2FyYXMgcGFkcsOjbyBlc3TDoVxcbiBpbmNvcnJldGE/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnTcOhc2NhcmEgQ2xhc3NlIEEgMjU1LjAuMC4wIG91IC84JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnTcOhc2NhcmEgQ2xhc3NlIEQgMjU1LjI1NS4yNTUuMjU1IG91IC8zMic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ03DoXNjYXJhIENsYXNzZSBCIDI1NS4yNTUuMC4wIG91IC8xNic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ03DoXNjYXJhIGNsYXNzZSBDIDI1NS4yNTUuMjU1LjAgb3UgLzI0JztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICB0aGlzLmFwYXJlY2VSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdPIHF1ZSBmYXogbyBBUlBcXG4gKEFkZHJlc3MgUmVzb2x1dGlvbiBQcm90b2NvbCk/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnUmVzb2x2ZSBlbmRlcmXDp29zIE1BQ1xcbiBwYXJhIGVuZGVyZcOnb3MgSVAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdSZXNvbHZlIG8gY2FtcG8gVFlQRVxcbiBwYXJhIG8gZW5kZXJlw6dvIE1BQyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1Jlc29sdmUgbyBlbmRlcmXDp28gTUFDXFxuIHBhcmEgbyBjYW1wbyBUWVBFJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnUmVzb2x2ZSBvIGVuZGVyZcOnbyBJUFxcbiBwYXJhIGVuZGVyZcOnbyBNQUMnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgIHRoaXMuYXBhcmVjZVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgbyBudW1lcm8gbcOheGltb1xcbiBkZSBob3N0cyBwb3Nzw612ZWlzIGVtXFxuIHVtYSByZWRlIGNsYXNzZSBDPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJzI1NCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJzEyOCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJzI1Nic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJzY0JztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwQ2VydG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5zYWlBbmltYWNhbyA9IDE7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcEVycmFkbzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnNhaUFuaW1hY2FvID0gMTtcclxuICAgICAgICB0aGlzLnJlc3BFcnIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnYW1lb3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRlbGFGaW5hbFF1aXouc2V0UG9zaXRpb25YKDApO1xyXG4gICAgICAgIGlmKHRoaXMucmVzcENlcj49IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRyeUFnYWluLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnUGFyYWLDqW5zIVxcbicrXHJcbiAgICAgICAgICAgICdWb2PDqiBwYXNzb3Ugbm8gUXVpeiEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ0FoISBxdWUgcGVuYSFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogbsOjbyBwYXNzb3Ugbm8gUXVpeiFcXG4nKyBcclxuICAgICAgICAgICAgJ3RlbnRlIG5vdmFtZW50ZSEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0NlcnRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIGNvcnJldGFzOiAnK3RoaXMucmVzcENlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0VycmFkYXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBFcnJhZGFzOiAnK3RoaXMucmVzcEVycjsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMTAwMDAwO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMuc2FpQW5pbWFjYW8gPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcENlciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyID0gMDtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXBhcmVjZVJlc3Bvc3RhczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLnNhaUFuaW1hY2FvID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnNhaUFuaW1hY2FvID0gMDtcclxuICAgICAgICAgICAgdmFyIHJlc3BFcnJhZGExID0gdGhpcy5yZXNwb3N0YUVycmFkYTFiLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcmVzcEVycmFkYTIgPSB0aGlzLnJlc3Bvc3RhRXJyYWRhMmIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciByZXNwRXJyYWRhMyA9IHRoaXMucmVzcG9zdGFFcnJhZGEzYi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHJlc3BFcnJhZGE0ID0gdGhpcy5yZXNwb3N0YUVycmFkYTRiLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcmVzcDEgPSB0aGlzLnJlc3Bvc3RhMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHJlc3AyID0gdGhpcy5yZXNwb3N0YTIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciByZXNwMyA9IHRoaXMucmVzcG9zdGEzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcmVzcDQgPSB0aGlzLnJlc3Bvc3RhNC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHJlc3BDZXJ0YSA9IHRoaXMucmVzcG9zdGFDZXJ0YS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHJlc3BFeHRyYSA9IHRoaXMucmVzcG9zdGFFeHRyYS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIGZhbGEgPSB0aGlzLmZhbGFxdWl6cHJvZi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIGZhY2UgPSB0aGlzLmZhY2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciBwcm9mZXNzb3IgPSB0aGlzLnByb2Zlc3Nvci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcEVycmFkYTEucGxheUFkZGl0aXZlKCdhcGFyZWNlUmVzcG9zdGExJyk7XHJcbiAgICAgICAgICAgIHJlc3BFcnJhZGEyLnBsYXlBZGRpdGl2ZSgnYXBhcmVjZVJlc3Bvc3RhMicpO1xyXG4gICAgICAgICAgICByZXNwRXJyYWRhMy5wbGF5QWRkaXRpdmUoJ2FwYXJlY2VSZXNwb3N0YTMnKTtcclxuICAgICAgICAgICAgcmVzcEVycmFkYTQucGxheUFkZGl0aXZlKCdhcGFyZWNlUmVzcG9zdGE0Jyk7XHJcbiAgICAgICAgICAgIHJlc3AxLnBsYXlBZGRpdGl2ZSgnYXBhcmVjZVJlc3Bvc3RhMScpO1xyXG4gICAgICAgICAgICByZXNwMi5wbGF5QWRkaXRpdmUoJ2FwYXJlY2VSZXNwb3N0YTInKTtcclxuICAgICAgICAgICAgcmVzcDMucGxheUFkZGl0aXZlKCdhcGFyZWNlUmVzcG9zdGEzJyk7XHJcbiAgICAgICAgICAgIHJlc3A0LnBsYXlBZGRpdGl2ZSgnYXBhcmVjZVJlc3Bvc3RhNCcpO1xyXG4gICAgICAgICAgICBmYWxhLnBsYXlBZGRpdGl2ZSgnYXBhcmVjZUZhbGFQcm9mZXNzb3InKTtcclxuICAgICAgICAgICAgZmFjZS5wbGF5KFwiZmFsYVByb2Zlc3NvcjJcIik7XHJcbiAgICAgICAgICAgIHByb2Zlc3Nvci5wbGF5QWRkaXRpdmUoJ2FuaW1hUHJvZmVzc29yYTItMScpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnNhaUFuaW1hY2FvID09PSAwKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0NyZWRpdHM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiY3JlZGl0c1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1vc3RyYVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGltZXIgPCAxKXtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3Bvc3RhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGVyZ3VudGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhQ2VydGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFeHRyYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZWxhRmluYWxRdWl6OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNDZXJ0YXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0VycmFkYXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvblRyeUFnYWluOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3A6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcENlcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwRXJyOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW9zdHJhUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FSZXNwb3N0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTI1OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZXJndW50YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdBIGNhbWFkYSB0cmFuc3BvcnRlIMOpIHJlc3BvbnPDoXZlbCBwb3IuLi4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdHZXJlbmNpYXIgb3MgcGFjb3RlcyBuYSByZWRlJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnR2VyYXIgZSB0cmFuc21pdGlyIG8gc2luYWwgcGVsbyBtZWlvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnRXN0YWJlbGVjZXIgdW1hIGNvbmV4w6NvIGZpbSBhIGZpbVxcbiAoY29uZXjDo28gY29uZmnDoXZlbCllbnRyZSBkdWFzIGFwbGljYcOnw7Vlcyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0FjZXNzYXIgYSByZWRlIGVtIGFwbGljYcOnw7VlcyBXZWInO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgZGVzdGVzIHByb3RvY29sb3MgbsOjbyBwZXJ0ZW5jZVxcbiBhIGNhbWFkYSBkZSB0cmFuc3BvcnRlPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0FSUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1RDUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1VEUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1JUUCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVhbCBhIG9yZGVtIGNvcnJldGFcXG4gZG8gcHJvdG9jb2xvIFRocmVlIFdheSBIYW5kc2hha2VcXG4gZG8gVENQL0lQPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1NZTiwgU1lOLVNZTiwgQUNLLUFDSyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1NZTiwgU1lOLUFDSywgQUNLJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnQUNLLCBBQ0stU1lOLCBTWU4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdTWU4sIEFDSy1TWU4sIEFDSyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnTmEgY2FtYWRhIGRlIHRyYW5zcG9ydGVcXG4gbyBwcm90b2NvbG8gcGFyYSBnYXJhbnRpclxcbiBhIGNvbmZpYWJpbGlkYWRlIMOpLi4uPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0lQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnRlRQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnSFRUUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1RDUCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnT3MgcHJvdG9jb2xvcyBkZSBjYW1hZGEgZGUgdHJhbnNwb3J0ZVxcbiBxdWUgZXN0YWJlbGVjZW0gdW1hIGNvbmV4w6NvIGNvbSBvdXRybyBuw7NcXG4gYW50ZXMgZGUgY29tZcOnYXJlbSBhIHRyYW5zbWl0aXIgZGFkb3NcXG4gc8OjbyBjb25oZWNpZG9zIGNvbW8gPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1Byb3RvY29sb3Mgb3JpZW50YWRvcyDDoCBjb25leMOjbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1Byb3RvY29sb3Mgc2VtIGNvbmV4w6NvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnUHJvdG9jb2xvcyBvcmllbnRhZG9zIGEgU3luJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnUHJvdG9jb2xvcyBvcmllbnRhZG9zIHBhcmEgQWNrJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwQ2VydG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcEVycmFkbzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BFcnIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnYW1lb3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRlbGFGaW5hbFF1aXouc2V0UG9zaXRpb25YKDApO1xyXG4gICAgICAgIGlmKHRoaXMucmVzcENlcj49IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRyeUFnYWluLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnUGFyYWLDqW5zIVxcbicrXHJcbiAgICAgICAgICAgICdWb2PDqiBwYXNzb3Ugbm8gUXVpeiEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ0FoISBxdWUgcGVuYSFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogbsOjbyBwYXNzb3Ugbm8gUXVpeiFcXG4nKyBcclxuICAgICAgICAgICAgJ3RlbnRlIG5vdmFtZW50ZSEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0NlcnRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIGNvcnJldGFzOiAnK3RoaXMucmVzcENlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0VycmFkYXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBFcnJhZGFzOiAnK3RoaXMucmVzcEVycjsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMTAwMDAwO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcENlciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyID0gMDtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0NyZWRpdHM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiY3JlZGl0c1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1vc3RyYVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGltZXIgPCAxKXtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3Bvc3RhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGVyZ3VudGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhQ2VydGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFeHRyYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZWxhRmluYWxRdWl6OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNDZXJ0YXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0VycmFkYXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvblRyeUFnYWluOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3A6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcENlcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwRXJyOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW9zdHJhUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FSZXNwb3N0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTI1OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZXJndW50YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdBIGNhbWFkYSBkZSBhcGxpY2HDp8OjbyDDqSByZXNwb25zw6F2ZWwgcG9yLi4uJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnR2VyZW5jaWFyIG9zIHBhY290ZXMgbmEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0VzdGFiZWxlY2VyIHVtYSBjb25leMOjbyBmaW0gYSBmaW1cXG4gKGNvbmV4w6NvIGNvbmZpw6F2ZWwpZW50cmUgYSBvcmlnZW0gZSBvIGRlc3Rpbm9cXG4gZG9zIGRhZG9zLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0dlcmVuY2lhciBvcyBkaXZlcnNvcyBwcm90b2NvbG9zXFxuIGRlIGNvbXVuaWNhw6fDo28gZGFzIHN1YXMgYXBsaWNhw6fDtWVzJzsvL3Blcm1pdGlyIGEgY3JpcHRvZ3JhZmlhIGRlIGRhZG9zIHBhcmEgZ2FyYW50aWEgZGUgc2VndXJhbsOnYS4gT2ZlcmVjZXIgYSBpbnRlcmZhY2UgZGUgdXNhYmlsaWRhZGUgcGFyYSBvcyBjbGllbnRlcy4gXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnTmEgY2FtYWRhIGRlIGFwbGljYcOnw6NvXFxuIG8gcHJvdG9jb2xvIEhUVFAgw6kgcmVzcG9uc2F2ZWwgcG9yLi4uPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1RyYW5zZmVyaXIgaGlwZXJ0ZXh0b3MnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdSZWNlYmVyIGFycXVpdm9zIGRlIHbDrWRlbyBkYSBJbnRlcm5ldCAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdFeGliaXIgcMOhZ2luYXMgd2ViJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnQmFpeGFyIGFycXVpdm9zIFRvcnJlbnQnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ08gcHJvZ3JhbWEgRmlsZXppbGxhIGUgbyBwcm90b2NvbG8gRlRQXFxuIHPDo28gcmVzcG9uc2F2ZWlzIHBvciAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdTZWd1cmFuw6dhIG5hIHJlZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdUcmFuc2ZlcmVuY2lhIGRlIGFycXVpdm9zJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnQXJtYXplbmFtZW50byBlbSBudXZlbSc7Ly8gdHJvY2FyIHJlc3Bvc3RhIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdDcmlwdG9ncmFmaWEgZGUgZGFkb3MnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgZGVzdGVzIMOpIHVtIHByb3RvY29sb1xcbiBkZSBjYW1hZGEgZGUgYXBsaWNhw6fDo28/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnVENQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnSVAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdFdGhlcm5ldCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0hUVFAnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIC8vbW9kaWZpY2FyIGEgcGVyZ3VudGFcclxuICAgICAgICAvL3ByYSBxdWUgcXVlIHNlcnZlIG8gcHJvdG9jb2xvIEROUy5cclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdPIHF1ZSBzaWduaWZpY2FcXG4gdW0gY8OzZGlnbyBkZSBzdGF0dXMgSFRUUCBkZSBcIjQwNFwiPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0Vycm8gZGUgcHJvdG9jb2xvICc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0RvY3VtZW50byBmb2kgbW92aWRvICc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1JlY3VwZXJhw6fDo28gYmVtIHN1Y2VkaWRhIGRvIGRvY3VtZW50byc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0RvY3VtZW50byBuw6NvIGVuY29udHJhZG8gJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwQ2VydG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcEVycmFkbzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BFcnIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvQ3JlZGl0czogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJjcmVkaXRzXCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZW92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50ZWxhRmluYWxRdWl6LnNldFBvc2l0aW9uWCgwKTtcclxuICAgICAgICBpZih0aGlzLnJlc3BDZXI+PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UcnlBZ2Fpbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ1BhcmFiw6lucyFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogcGFzc291IG5vIFF1aXohJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLnN0cmluZyA9ICdBaCEgcXVlIHBlbmEhXFxuJytcclxuICAgICAgICAgICAgJ1ZvY8OqIG7Do28gcGFzc291IG5vIFF1aXohXFxuJysgXHJcbiAgICAgICAgICAgICd0ZW50ZSBub3ZhbWVudGUhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNDZXJ0YXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBjb3JyZXRhczogJyt0aGlzLnJlc3BDZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNFcnJhZGFzLnN0cmluZyA9ICdSZXNwb3N0YXMgRXJyYWRhczogJyt0aGlzLnJlc3BFcnI7IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDEwMDAwMDtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLnJlc3BDZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciA9IDA7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1vc3RyYVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGltZXIgPCAxKXtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3Bvc3RhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGVyZ3VudGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhQ2VydGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFeHRyYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZWxhRmluYWxRdWl6OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNDZXJ0YXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0VycmFkYXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvblRyeUFnYWluOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3A6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcENlcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwRXJyOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW9zdHJhUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FSZXNwb3N0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMTgpOy8vc2VndW5kYSBvcMOnYW9cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMjU4KTsvL3VsdGltYSBvcMOnYW9cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMTQ2KTsvL3RlcmNlaXJhIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xNDYpOy8vdGVyY2VpcmEgb3DDp2FvXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTsvL3ByaW1laXJhIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDYpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7Ly9zZWd1bmRhIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDcpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKDExMik7Ly9wcmltZWlyYSBvcMOnYW9cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA4KXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMjU4KTsvL3VsdGltYSBvcMOnYW9cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA5KXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMTgpOy8vc2VndW5kYSBvcMOnYW9cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZXJndW50YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDE6UXVhbCBwcm90b2NvbG8gw6kgcmVzcG9uc8OhdmVsIHBvciByZXNvbHZlclxcbicrXHJcbiAgICAgICAgJ28gbWFwZWFtZW50byBlbnRyZSBvcyBlbmRlcmXDp28gSVBcXG4nK1xyXG4gICAgICAgICdlIG9zIGVuZGVyZcOnb3MgTUFDIGRhIHJlZGU/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnVENQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnREhDUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0FSUCc7Ly9jb3JyZXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0ROUyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVlc3RhbyAyOkFzc2luYWxlIGEgYWx0ZXJuYXRpdmEgcXVlIHJlcHJlc2VudGFcXG4nK1xyXG4gICAgICAgICdvIHRhbWFuaG8gZW0gYnl0ZXMgZG9zIGNhbXBvcyBkZSBlbmRlcmXDp28gTUFDXFxuJytcclxuICAgICAgICAnSVB2NCBlIElQdjYsIHJlc3BlY3RpdmFtZW50ZS4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICc0LCA2LCAxNic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJzYsIDQsIDE2JzsvL2NvcnJldGFcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnNDgsIDMyLCAxMjgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICcxNiwgMzIsIDY0JztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDM6IE5hIHBpbGhhIFRDUC9JUCwgYSBmdW7Dp8OjbyBkZSBlbnZpYXJcXG4nK1xyXG4gICAgICAgICdhbyB0cmFuc21pc3NvciBkYSBpbmZvcm1hw6fDo28gdW1hIGNvbmZpcm1hw6fDo29cXG4nK1xyXG4gICAgICAgICdkZSByZWNlYmltZW50byBkYSBtZW5zYWdlbShhY2spIMOpIHJlYWxpemFkYSBwZWxhIGNhbWFkYTonO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdUcmFuc3BvcnRlJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnQWNlc3NvIGEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0FwbGljYcOnYW8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdJbnRlcm5ldCc7Ly9jb3JyZXRhXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVlc3RhbyA0OiBBc3NpbmFsZSBhIGFsdGVybmF0aXZhIHF1ZSBjb250w6ltIHByb3RvY29sb3NcXG4nK1xyXG4gICAgICAgICdkYXMgY2FtYWRhcyBkZSBlbmxhY2UsIHJlZGUsIHRyYW5zcG9ydGUgZSBhcGxpY2HDp8Ojb1xcbicrXHJcbiAgICAgICAgJ3Jlc3BlY3RpdmFtZW50ZSwgZGEgcGlsaGEgZGUgcHJvdG9jb2xvcyBUQ1AvSVAuJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnQVJQLCBJUCwgVENQLCBJUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1BQUCwgSUNNUCwgVURQLCBTTk1QJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnRXRoZXJuZXQsIFBQUCwgVURQLCBTU0gnOy8vY29ycmV0YVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdFdGhlcm5ldCwgRE5TLCBUQ1AsIFNNVFAnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1ZXN0YW8gNTogTyBlbmRlcmXDp28gZGUgdW0gcmVjdXJzbyBkaXNwb27DrXZlbCBlbSB1bWEgcmVkZVxcbicrXHJcbiAgICAgICAgJ3NlamEgbmEgSW50ZXJuZXQgb3UgbnVtYSByZWRlIGNvcnBvcmF0aXZhIEludHJhbmV0XFxuJytcclxuICAgICAgICAndGVtIGEgc2VndWludGUgZXN0cnV0dXJhOic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ3Byb3RvY29sbzovL2NhbWluaG8vcmVjdXJzby9tw6FxdWluYS4gJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAncHJvdG9jb2xvOi8vY2FtaW5oby9tw6FxdWluYS9yZWN1cnNvLiAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdwcm90b2NvbG86Ly9tw6FxdWluYS9jYW1pbmhvL3JlY3Vyc28uICc7Ly9jb3JyZXRvXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ23DoXF1aW5hOi8vcHJvdG9jb2xvL2NhbWluaG8vcmVjdXJzby4gJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDY6IE5hIGNsYXNzZSBwYWRyw6NvIENcXG4nK1xyXG4gICAgICAgICdxdWFudG9zIGJ5dGVzIHPDo28gcmVzZXJ2YWRvcyBwYXJhIHJlZGVzPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJzAxIGJ5dGUnOy8vY29ycmV0b1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICcwMiBieXRlcyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJzAzIGJ5dGVzJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnMDQgYnl0ZXMnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDYpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1ZXN0YW8gNzogQ29tbyDDqSBkZW5vbWluYWRvIG8gcHJvdG9jb2xvXFxuJysgXHJcbiAgICAgICAgJ2RlIGNvbmZpZ3VyYcOnw6NvIGRpbsOibWljYSBkZSBJUD8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdGVFAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdESENQJzsvL2NvcnJldG9cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnSFRUUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0ROUyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNyl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVlc3RhbyA4OiBRdWFsIGRldHNlcyBwcm90b2NvbG9zIMOpIG1haXMgcsOhcGlkb1xcbicrXHJcbiAgICAgICAgJ3BvcsOpbSBtZW5vcyBjb25macOhdmVsPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1VEUCc7Ly9jb3JyZXRvXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0ZUUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1NTSCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1RDUCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gOCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVlc3RhbyA5OiBRdWFsIMOpIGEgY2xhc3NlIGRlIGVuZGVyZcOnbyBJUFxcbicrXHJcbiAgICAgICAgJ3F1ZSB1dGlsaXphIGEgbcOhc2NhcmEgcGFkcsOjbyAyNTUuMjU1LjAuMD8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdBJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnRCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0MnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdCJzsvL2NvcnJldGFcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA5KXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDEwOiBPIGNvbmp1bnRvIGZvcm1hZG8gcG9yIHVtIGVuZGVyZcOnbyBJUFxcbicrXHJcbiAgICAgICAgJ2UgdW0gbsO6bWVybyBkZSBwb3J0YSBjb25zdGl0dWk6JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnVW1hIGNvbmV4YW8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdVbSBzb2NrZXQnOy8vY29ycmV0YVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdVbSBkYXRhZ3JhbWEnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdPIGVuZGVyZcOnbyBkZSBnYXRld2F5JztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwQ2VydG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcEVycmFkbzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BFcnIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnYW1lb3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRlbGFGaW5hbFF1aXouc2V0UG9zaXRpb25YKDApO1xyXG4gICAgICAgIGlmKHRoaXMucmVzcENlcj49IDcpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRyeUFnYWluLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnUGFyYWLDqW5zIVxcbicrXHJcbiAgICAgICAgICAgICdWb2PDqiBwYXNzb3Ugbm8gUXVpeiEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ0FoISBxdWUgcGVuYSFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogbsOjbyBwYXNzb3Ugbm8gUXVpeiFcXG4nKyBcclxuICAgICAgICAgICAgJ3RlbnRlIG5vdmFtZW50ZSEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0NlcnRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIGNvcnJldGFzOiAnK3RoaXMucmVzcENlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0VycmFkYXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBFcnJhZGFzOiAnK3RoaXMucmVzcEVycjsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMTAwMDAwO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcENlciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyID0gMDtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0NyZWRpdHM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiY3JlZGl0c1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1vc3RyYVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGltZXIgPCAxKXtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aW1lciAtPSBkdDtcclxuXHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBDYW1hZGExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIENhbWFkYTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgQ2FtYWRhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBDYW1hZGE0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIENhbWFkYTU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGVzdGVGaW5hbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24xOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDAsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB2YWlQcmFGcmVudGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdmFyIGNhbWFkYTEgPSB0aGlzLkNhbWFkYTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTEucGxheUFkZGl0aXZlKCdQcmFGcmVudGUnKTtcclxuICAgICAgICAgICAgdmFyIGNhbWFkYTIgPSB0aGlzLkNhbWFkYTIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTIucGxheUFkZGl0aXZlKCdQcmFUcmFzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgY2FtYWRhMiA9IHRoaXMuQ2FtYWRhMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhMi5wbGF5QWRkaXRpdmUoJ1ByYUZyZW50ZScpO1xyXG4gICAgICAgICAgICB2YXIgY2FtYWRhMyA9IHRoaXMuQ2FtYWRhMy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhMy5wbGF5QWRkaXRpdmUoJ1ByYVRyYXMnKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICBjYW1hZGEzID0gdGhpcy5DYW1hZGEzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGEzLnBsYXlBZGRpdGl2ZSgnUHJhRnJlbnRlJyk7XHJcbiAgICAgICAgICAgIHZhciBjYW1hZGE0ID0gdGhpcy5DYW1hZGE0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGE0LnBsYXlBZGRpdGl2ZSgnUHJhVHJhcycpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIGNhbWFkYTQgPSB0aGlzLkNhbWFkYTQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTQucGxheUFkZGl0aXZlKCdQcmFGcmVudGUnKTtcclxuICAgICAgICAgICAgdmFyIGNhbWFkYTUgPSB0aGlzLkNhbWFkYTUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTUucGxheUFkZGl0aXZlKCdQcmFUcmFzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgY2FtYWRhNSA9IHRoaXMuQ2FtYWRhNS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhNS5wbGF5QWRkaXRpdmUoJ1ByYUZyZW50ZScpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB2YWlQcmFUcmFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT0gNSl7XHJcbiAgICAgICAgICAgIHZhciBjYW1hZGE1ID0gdGhpcy5DYW1hZGE1LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGE1LnBsYXlBZGRpdGl2ZSgnUHJhRnJlbnRlJyk7XHJcbiAgICAgICAgICAgIHZhciBjYW1hZGE0ID0gdGhpcy5DYW1hZGE0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGE0LnBsYXlBZGRpdGl2ZSgnUHJhVHJhcycpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yIC09IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIGNhbWFkYTQgPSB0aGlzLkNhbWFkYTQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTQucGxheUFkZGl0aXZlKCdQcmFGcmVudGUnKTtcclxuICAgICAgICAgICAgdmFyIGNhbWFkYTMgPSB0aGlzLkNhbWFkYTMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTMucGxheUFkZGl0aXZlKCdQcmFUcmFzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgLT0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICAgICAgY2FtYWRhMyA9IHRoaXMuQ2FtYWRhMy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhMy5wbGF5QWRkaXRpdmUoJ1ByYUZyZW50ZScpO1xyXG4gICAgICAgICAgICB2YXIgY2FtYWRhMiA9IHRoaXMuQ2FtYWRhMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhMi5wbGF5QWRkaXRpdmUoJ1ByYVRyYXMnKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciAtPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICBjYW1hZGEyID0gdGhpcy5DYW1hZGEyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGEyLnBsYXlBZGRpdGl2ZSgnUHJhRnJlbnRlJyk7XHJcbiAgICAgICAgICAgIHZhciBjYW1hZGExID0gdGhpcy5DYW1hZGExLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGExLnBsYXlBZGRpdGl2ZSgnUHJhVHJhcycpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yIC09IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIGNhbWFkYTEgPSB0aGlzLkNhbWFkYTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTEucGxheUFkZGl0aXZlKCdQcmFGcmVudGUnKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAxO1xyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB2ZXJpZmljYUNvbnRhZG9yOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5zZXRQb3NpdGlvbigtMTMwMCwgMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5zZXRQb3NpdGlvbigxMzAwLCAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuc2V0UG9zaXRpb24oLTM2NiwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5zZXRQb3NpdGlvbigzNjYsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgdGhpcy52ZXJpZmljYUNvbnRhZG9yKCk7XHJcbiAgICB9LFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==