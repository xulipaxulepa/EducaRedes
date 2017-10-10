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
            this.label.string = 'Rede de computadores \n' + 'é um conjunto de computadores\n' + 'autônomos interconectados por uma única tecnologia.';
            this.contador += 1;
        } else if (this.contador == 1) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'Em rede de computadores\n' + 'existem 2 modelos de protocolos\n' + 'O modelo logico OSI\n' + 'e a arquitetura TCP/IP';
            this.contador += 1;
        } else if (this.contador == 2) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor1');
            animaFace = face.play("falaProfessor3");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.label.string = 'O modelo OSI se baseia em uma proposta desenvolvida\n' + 'pela ISO (International Standards Organization)\n' + 'como um primeiro passo em direção à padronização\n' + 'internacional dos protocolos empregados \n' + 'nas diversas camadas';
            this.contador += 1;
        } else if (this.contador == 3) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'O modelo OSI possui 7 camadas, são elas:\n' + 'Física\n' + 'Enlace\n' + 'Redes';
            this.contador += 1;
        } else if (this.contador == 4) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'Transporte\n' + 'Sessão\n' + 'Apresentação\n' + 'Aplicação';
            this.contador += 1;
        } else if (this.contador == 5) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor2');
            animaFace = face.play("falaProfessor1");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.label.string = 'Do modelo logico OSI surgiu a arquitetura TCP/IP\n' + 'O modelo TCP/IP descreve um conjunto de orientações\n' + 'gerais para a concepção e implementação';
            this.contador += 1;
        } else if (this.contador == 6) {
            texto.playAdditive('ApareceTexto');
            this.label.string = 'de protocolos de rede específicos\n' + 'para permitir que haja\n' + 'comunicação através de uma rede.';
            this.contador += 1;
        } else if (this.contador == 7) {
            texto.playAdditive('ApareceTexto');
            professor.playAdditive('animaProfessor1');
            this.label.string = 'A imagem acima demonstra as peculiaridades\n' + 'de um modelo para o outro';
            this.quadro.setPosition(222, 139);
            this.contador += 1;
        } else if (this.contador == 8) {
            texto.playAdditive('ApareceTexto');
            animaFace = face.play("falaProfessor2");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.label.string = 'Como pode ser visto, a arquitetura TCP/IP\n' + 'Possui 4 camadas e eu irei explicar sobre a primeira';
            this.contador += 1;
        } else if (this.contador == 9) {
            texto.playAdditive('ApareceTexto');
            this.quadro.setPosition(1360, 139);
            professor.playAdditive('animaProfessor2');
            this.label.string = 'A camada de acesso a rede\n' + 'tem como um dos objetivos\n' + 'gerar e transmitir o sinal pelo meio. Seja a tecnologia\n' + 'Ethernet, Wi-fi, Bluetooth, entre outros.';
            this.contador += 1;
        } else if (this.contador == 10) {
            texto.playAdditive('ApareceTexto');
            animaFace = face.play("falaProfessor3");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            this.label.string = 'Um dos serviços dessa camada é a modulação\n' + 'da informação através de um sinal\n' + 'analógico ou digital';
            this.contador += 1;
        } else if (this.contador == 11) {
            texto.playAdditive('ApareceTexto');
            animaFace = face.play("falaProfessor1");
            animaFace.speed = 0.5;
            animaFace.repeatCount = Infinity;
            professor.playAdditive('moveProfessor2');
            this.label.string = 'O mini-jogo a seguir, demonstra melhor\n' + 'a diferença entre os sinais e os seus conceitos';
            this.contador += 1;
        } else if (this.contador == 12) {
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

        contador: 0
    },

    mudaTexto: function mudaTexto() {
        if (this.contador === 0) {
            this.label.string = 'A camada internet define um formato de pacote\n' + 'oficial e um protocolo chamado IP(Internet Protocol).';
            this.contador += 1;
        } else if (this.contador == 1) {
            this.label.string = 'Endereço IP, de forma genérica, é uma\n' + 'identificação de um dispositivo (computador, impressora, etc)\n' + 'em uma rede local ou pública.';
            this.contador += 1;
        } else if (this.contador == 2) {
            this.label.string = 'Cada computador na internet possui\n' + 'um IP (Internet Protocol ou Protocolo de internet) único\n' + 'que é o meio em que as máquinas usam\n' + 'para se comunicarem na Internet.';
            this.contador += 1;
        } else if (this.contador == 3) {
            this.label.string = 'O endereço IP, na versão 4 do IP (IPv4)\n' + 'é um número de 32 bits oficialmente escrito\n' + 'com quatro octetos (bytes) representados no formato\n' + 'decimal como, por exemplo, "192.168.1.2".';
            this.contador += 1;
        } else if (this.contador == 4) {
            this.label.string = 'A tarefa da camada internet é entregar\n' + 'pacotes IP onde eles são necessários.';
            this.contador += 1;
        } else if (this.contador == 5) {
            this.label.string = 'O roteamento de pacotes é uma questão\n' + 'de grande importância nessa camada, assim como\n' + 'a necessidade de evitar o congestionamento.';
            this.contador += 1;
        } else if (this.contador == 6) {
            this.label.string = 'Um  exemplo de  serviço  oferecido\n' + 'por  essa  camada  é  o  roteamento  de  pacotes,\n' + 'através dos endereços de origem/destino.';
            this.contador += 1;
        } else if (this.contador == 7) {
            cc.director.loadScene("jogoFase2");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.contador = 0;
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

        fase: 0,

        pontuacao: 0,

        contTexto: 0,

        saiLoop: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
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
            this.textoFase.string = "Tente acertar 10 alvos para avançar\n" + "para a proxima etapa";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            texto.playAdditive('ApareceTexto');
            this.textoFase.string = "Evite subir demais ou descer demais\n" + "caso isso aconteça, sera Game Over";
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
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

        textoFase1: {
            default: null,
            type: cc.Label
        },

        saltos: 0,

        pontuacao: 0,

        contTexto: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.player.setPosition(1360, 0);
        this.pontuacao = 0;
        this.contTexto = 0;
        this.saltos = 5;
        this.score.string = this.saltos;
        this.someNos();
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
        this.no1.setPosition(-53, -27);
        this.no2.setPosition(6, 148);
        this.no3.setPosition(172, -27);
        this.no4.setPosition(199, 127);
        this.no5.setPosition(148, 257);
        this.no6.setPosition(380, 269);
    },

    movePlayer: function movePlayer(x, y) {
        var move = cc.moveTo(3, cc.p(x, y));
        this.player.runAction(move);
    },

    criaLinha: function criaLinha() {
        var novaLinha = cc.instantiate(this.linha);
        this.bg.addChild(novaLinha);
        novaLinha.setPosition(this.player.getPosition());
    },

    trocaTexto1: function trocaTexto1() {
        if (this.contTexto === 0) {
            this.textoFase.string = "Os roteadores são utilizados para interligar\n" + "as redes físicas entre si. Eles oferecem\n" + "múltiplos caminhos para interconectar as redes físicas.";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            this.textoFase.string = "As tabelas de roteamento indicam para cada roteador\n" + "como ele deve encaminhar um pacote a fim de que\n" + "este chegue a uma certa rede física de destino.";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            this.textoFase.string = "As tabelas de roteamento são preenchidas\n" + "automaticamente, através de protocolos de roteamento\n" + "padronizados, como o BGP (Border Gateway Protocol)";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            this.textoFase.string = "Veja agora um exemplo de rede!";
            this.apareceNos();
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
            this.textoFase.string = "O cenario acima demonstra uma rede\n" + "com 6 roteadores, cada um deles com sua tabela\n" + "de roteamento";
            this.contTexto += 1;
        } else if (this.contTexto == 5) {
            this.textoFase.string = "No papel de um pacote, voce tera\n" + "5 saltos para sair do nó 1 e chegar ao nó 6!\n" + "clique em continuar e boa sorte!!";
            this.someNos();
            this.contTexto += 1;
        } else if (this.contTexto == 6) {
            this.bg.setOpacity(255);
            this.no1.setPosition(-240, -181);
            this.player.setPosition(-210, -154);
            this.contTexto += 1;
        } else if (this.contTexto == 20) {
            this.textoFase1.string = "Parabéns, voce chegou ao nó 6!\n" + "apesar de bastante simplificado o mini-jogo demonstrou\n" + "como uma informação trafega em diversas redes!";
            this.contTexto += 1;
        } else if (this.contTexto == 21) {
            this.textoFase1.string = "Com as informações passadas nesta fase\n" + "responda agora o Quiz!\n" + "clique em continuar e boa sorte!";
            this.contTexto += 1;
        } else if (this.contTexto == 22) {
            cc.director.loadScene("quizFase2");
        } else if (this.contTexto == 9) {
            this.contTexto += 1;
        } else if (this.contTexto == 10) {
            cc.director.loadScene("jogoFase3");
        }
    },

    buttonNo1: function buttonNo1() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 3         20%\n" + "\n" + "\n" + "No 2         70%";
        this.someRealizaSalto();
        this.btnRealizarSalto3.setPosition(0, -108);
        this.btnRealizarSalto2.setPosition(0, -202);
    },

    buttonNo2: function buttonNo2() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 5         80%\n" + "\n" + "\n" + "No 4         70%";
        this.someRealizaSalto();
        this.btnRealizarSalto5.setPosition(0, -108);
        this.btnRealizarSalto4.setPosition(0, -202);
    },

    buttonNo3: function buttonNo3() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 1         20%\n" + "\n" + "\n" + "No 2         70%";
        this.someRealizaSalto();
        this.btnRealizarSalto1.setPosition(0, -108);
        this.btnRealizarSalto2.setPosition(0, -202);
    },

    buttonNo4: function buttonNo4() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 5         90%\n" + "\n" + "\n" + "No 2         70%";
        this.someRealizaSalto();
        this.btnRealizarSalto5.setPosition(0, -108);
        this.btnRealizarSalto2.setPosition(0, -202);
    },

    buttonNo5: function buttonNo5() {
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 4         60%\n" + "\n" + "\n" + "No 6         30%";
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
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no1.setPosition(-240, -181);
        this.saltos -= 1;
        this.movePlayer(-240, -181);
    },

    buttonSalto2: function buttonSalto2() {
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no2.setPosition(-181, -6);
        this.saltos -= 1;
        this.movePlayer(-181, -6);
    },

    buttonSalto3: function buttonSalto3() {
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no3.setPosition(-15, -181);
        this.saltos -= 1;
        this.movePlayer(-15, -181);
    },

    buttonSalto4: function buttonSalto4() {
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no4.setPosition(12, -27);
        this.saltos -= 1;
        this.movePlayer(12, -27);
    },

    buttonSalto5: function buttonSalto5() {
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no5.setPosition(-39, 103);
        this.saltos -= 1;
        this.movePlayer(-39, 103);
    },

    buttonSalto6: function buttonSalto6() {
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no6.setPosition(193, 115);
        this.saltos -= 1;
        this.movePlayer(193, 115);
        this.professorFrente.setPosition(-199, 0);
        this.contTexto = 20;
    },

    gameOver: function gameOver() {
        this.professorFrente.setPosition(-199, 0);
        //this.contTexto = 20;
        this.someNos();
        this.textoFase1.string = "Infelizmente a mensagem se perdeu\n" + "clique em continuar e tente novamente!";
        if (this.contTexto == 10) {
            cc.director.loadScene("jogoFase3");
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.criaLinha();

        if (this.saltos === 0) {
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
            this.pergunta.string = 'A camada Internet é responsável por...';

            this.resposta1.string = 'Controlar de forma física o acesso a rede';

            this.resposta2.string = 'Gerar e transmitir o sinal pelo meio';

            this.resposta3.string = 'Definir e tratar os endereços lógicos\n de origem/destino na rede';

            this.resposta4.string = 'Acessar a rede em aplicações Web';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual dos seguintes não é verdadeiro\n sobre um endereço IP?';

            this.resposta1.string = 'Um endereço IPv4\n geralmente é representado no formato\n hexadecimal para o usuário';

            this.resposta2.string = 'Um endereço IP é um endereço lógico';

            this.resposta3.string = 'Um endereço IP é globalmente\n exclusivo em uma rede';

            this.resposta4.string = 'Um endereço IP pode ser considerado\n como consistindo de\n uma parte de rede e uma parte de host';
        } else if (this.contador == 2) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual das seguintes máscaras padrão\n está incorreta?';

            this.resposta1.string = 'Máscara Classe A 255.0.0.0 ou /8';

            this.resposta2.string = 'Máscara Classe D 255.255.255.255 ou /32';

            this.resposta3.string = 'Máscara Classe B 255.255.0.0 ou /16';

            this.resposta4.string = 'Máscara classe C 255.255.255.0 ou /24';
        } else if (this.contador == 3) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'O que faz o ARP (Address Resolution Protocol)?';

            this.resposta1.string = 'Resolve endereços MAC\n para endereços IP';

            this.resposta2.string = 'Resolve o campo TYPE\n para o endereço MAC';

            this.resposta3.string = 'Resolve o endereço MAC\n para o campo TYPE';

            this.resposta4.string = 'Resolve o endereço IP\n para endereço MAC';
        } else if (this.contador == 4) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual o numero máximo de hosts possíveis\n em uma rede classe C?';

            this.resposta1.string = '254';

            this.resposta2.string = '128';

            this.resposta3.string = '256';

            this.resposta4.string = '64';
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

            this.resposta4.string = 'SCTP';
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
            this.pergunta.string = 'Na camada de transporte\n o protocolo para garantir\n a confiabilidade e...?';

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

            this.resposta3.string = 'Gerenciar os diversos protocolos\n de comunicação das suas aplicações';

            this.resposta4.string = 'Acessar a rede em aplicações Web';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Na camada de aplicação\n o protocolo HTTP é responsavel por...?';

            this.resposta1.string = 'Transferir hipertextos';

            this.resposta2.string = 'Receber arquvos de video da internet ';

            this.resposta3.string = 'Exibir paginas web';

            this.resposta4.string = 'Baixar arquivos Torrent';
        } else if (this.contador == 2) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'O programa Filezilla e o protocolo FTP\n são responsaveis por ';

            this.resposta1.string = 'Segurança na rede';

            this.resposta2.string = 'Transferencia de arquivos';

            this.resposta3.string = 'Armazenamento em nuvem';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xvZ2ljYSBmYXNlcy9hbHZvLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGNhbWFkYXMvYnRuQWNlc3NvQVJlZGUuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgY2FtYWRhcy9idG5BcGxpY2FjYW8uanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0bkNhcnJlZ2FySm9nby5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBkaWFsb2d1ZXMvYnRuQ29udEZhc2UxLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGRpYWxvZ3Vlcy9idG5Db250RmFzZTIuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgZGlhbG9ndWVzL2J0bkNvbnRGYXNlMy5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBkaWFsb2d1ZXMvYnRuQ29udEZhc2U0LmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGRpYWxvZ3Vlcy9idG5Db250RmFzZTUuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgY2FtYWRhcy9idG5JbnRlcm5ldC5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuTm92b0pvZ28uanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0bk9wY29lcy5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhMS5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhMi5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhMy5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhNC5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhNS5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9uIHF1aXovYnRuUXVpejEuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbiBxdWl6L2J0blF1aXoyLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b24gcXVpei9idG5RdWl6My5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9uIHF1aXovYnRuUXVpejQuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbiBxdWl6L2J0blF1aXo1LmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idG5TYWlyLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGNhbWFkYXMvYnRuVGVzdGVGaW5hbC5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBjYW1hZGFzL2J0blRyYW5zcG9ydGUuanMiLCJhc3NldHMvc2NyaXB0cy9jcmVkaXRyb2xsLmpzIiwiYXNzZXRzL3NjcmlwdHMvbG9naWNhIGZhc2VzL2xvZ2ljYUZhc2UxLTEuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTEuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTIuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTMuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTQuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dvLmpzIiwiYXNzZXRzL3NjcmlwdHMvcHJvZnMvcHJvZkNhbWFkYTEuanMiLCJhc3NldHMvc2NyaXB0cy9wcm9mcy9wcm9mQ2FtYWRhMi5qcyIsImFzc2V0cy9zY3JpcHRzL3Byb2ZzL3Byb2ZDYW1hZGEzLmpzIiwiYXNzZXRzL3NjcmlwdHMvcHJvZnMvcHJvZkNhbWFkYTQuanMiLCJhc3NldHMvc2NyaXB0cy9xdWl6IGZhc2VzL3F1aXpGYXNlMS5qcyIsImFzc2V0cy9zY3JpcHRzL3F1aXogZmFzZXMvcXVpekZhc2UyLmpzIiwiYXNzZXRzL3NjcmlwdHMvcXVpeiBmYXNlcy9xdWl6RmFzZTMuanMiLCJhc3NldHMvc2NyaXB0cy9xdWl6IGZhc2VzL3F1aXpGYXNlNC5qcyIsImFzc2V0cy9zY3JpcHRzL3F1aXogZmFzZXMvcXVpekZhc2U1LmpzIiwiYXNzZXRzL3NjcmlwdHMvc2VsZWN0U3RhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0k7O0FBRUE7QUFDSTtBQURROztBQUlaO0FBQ0E7O0FBUks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7QUF6Q0Q7O0FBK0NaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUlEO0FBQ0E7O0FBckVLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLO0FBekNEOztBQStDWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBOztBQW5FSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGSTs7QUFLUjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGRTs7QUFLTjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQTFCUTs7QUE2Qlo7QUFDSTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUlBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNIO0FBQ0c7QUFDQTtBQUlBO0FBQ0g7QUFDRztBQUNBO0FBSUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0g7QUFDRztBQUNBO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUg7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0E7QUEzS0s7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFOUTs7QUFTWjtBQUNJO0FBQ0k7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBRUg7O0FBMURJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBTlE7O0FBU1o7QUFDSTtBQUNJO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUVIOztBQS9DSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQU5ROztBQVNaO0FBQ0k7QUFDSTtBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBSUQ7QUFDQTtBQUNJO0FBQ0E7QUFHSDs7QUF0REk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUExQlE7O0FBNkJaO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFFQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUdBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBSUg7O0FBckVJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQXpDRDs7QUFnRFo7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDQTs7QUFwRUs7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRk87QUFESDs7QUFPWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0g7O0FBakJJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBSUE7QUFDSTtBQUNIOztBQTNCSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0E7O0FBSUE7QUFDSTtBQUNIOztBQXZCSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSztBQXpDRDs7QUErQ1o7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBSUQ7QUFDQTs7QUFyRUs7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBekNEOztBQWdEWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBOztBQXBFSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQVRROztBQVlaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBRUg7O0FBRUQ7QUFDSDtBQXpDSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGQTs7QUFLSjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGSTs7QUFLUjtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRTs7QUFLTjtBQUNJO0FBQ0E7QUFGZ0I7O0FBS3BCO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZTOztBQUtiO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWOztBQUVBOztBQUVBO0FBckZROztBQXdGWjtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0k7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNKO0FBQ0k7QUFDQTtBQUNBO0FBQ0o7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQWJSO0FBZUg7O0FBRVQ7QUFDWTtBQUNJO0FBQ0k7QUFDQTtBQUNKO0FBQ0k7QUFDQTtBQUNKO0FBQ0k7QUFDQTtBQVRSO0FBV0g7QUFqQ3VCO0FBbUMvQjs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDQTs7QUFFSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7QUFwVkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkE7O0FBS0o7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDSTtBQUNBO0FBRkk7O0FBS1I7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkU7O0FBS047QUFDSTtBQUNBO0FBRmdCOztBQUtwQjtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGRTs7QUFLTjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGUzs7QUFLYjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjs7QUFFQTs7QUFFQTs7QUFFQTs7QUE1RlE7O0FBZ0daO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNJO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDSjtBQUNJO0FBQ0E7QUFDQTtBQVJSO0FBVUg7O0FBRVQ7QUFDWTtBQUNJO0FBQ0k7QUFDQTtBQUNKO0FBQ0k7QUFDQTtBQU5SO0FBUUg7QUF6QnVCO0FBMkIvQjs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFHSjs7QUFFRDs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFHSjs7QUFFRDtBQUNBO0FBQ0k7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFHSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7O0FBRUQ7QUFDSTtBQUNJO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNBOztBQUVJOztBQUVBO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDSDtBQUlKO0FBOVhJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZBOztBQUtKO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZlOztBQUtuQjtBQUNJO0FBQ0E7QUFGZTs7QUFLbkI7QUFDSTtBQUNBO0FBRmU7O0FBS25CO0FBQ0k7QUFDQTtBQUZlOztBQUtuQjtBQUNJO0FBQ0E7QUFGZTs7QUFLbkI7QUFDSTtBQUNBO0FBRmU7O0FBS25CO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjs7QUFFQTs7QUFFQTs7QUFuSFE7O0FBdUhaO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUVIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSTtBQUNIO0FBQ0o7O0FBR0Q7QUFDQTtBQUNJOztBQUVBO0FBQ0k7QUFDSDs7QUFFRDtBQUNIO0FBNVdJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZBOztBQUtKO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGSTs7QUFLUjtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGWTs7QUFLaEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCO0FBQ0k7QUFDQTtBQUZZOztBQUtoQjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBckpROztBQXlKWjtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBSUE7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFLRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0E7O0FBRUk7O0FBRUE7O0FBRUE7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUNBO0FBQ0g7QUE1a0JJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZTOztBQUtiO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZVOztBQUtkOztBQUVBOztBQUVBOztBQUVBOztBQTdFUTs7QUFpRlo7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUlEO0FBQ0E7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0g7QUFoVEk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBOztBQUVJO0FBQ0k7QUFDQTtBQUZNOztBQUtWOztBQUVBO0FBVFE7O0FBWVo7QUFDQTtBQUNJO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFFSDtBQUNEO0FBRUg7QUFqQ0k7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFFSDs7QUFwQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFDSDs7QUFuQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFDSDs7QUFuQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFDSDs7QUFuQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmM7O0FBS2xCO0FBQ0k7QUFDQTtBQUZjOztBQUtsQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRmM7O0FBS2xCO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZFOztBQUtOO0FBQ0k7QUFDQTtBQUZVOztBQUtkOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBekhROztBQTRIWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQU1BOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUtBOztBQUdBOztBQUdBOztBQUdBO0FBRUM7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFFSDtBQUNHO0FBR0g7O0FBRUQ7O0FBRUE7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFHSjs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIOztBQUVEO0FBRUg7QUEzVUk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZjOztBQUtsQjtBQUNJO0FBQ0E7QUFGWTs7QUFLaEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFwRlE7O0FBdUZaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFFSDtBQUNHO0FBR0g7O0FBRUQ7O0FBRUE7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUVIO0FBNU9JOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBcEZROztBQXVGWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBRUg7QUFDRztBQUdIOztBQUVEOztBQUVBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7O0FBRUQ7QUFFSDtBQTVPSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmM7O0FBS2xCO0FBQ0k7QUFDQTtBQUZZOztBQUtoQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQXBGUTs7QUF1Rlo7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFFSDtBQUNHO0FBR0g7O0FBRUQ7O0FBRUE7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIOztBQUVEO0FBRUg7QUE1T0k7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZjOztBQUtsQjtBQUNJO0FBQ0E7QUFGWTs7QUFLaEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFwRlE7O0FBdUZaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFFSDtBQUNHO0FBR0g7O0FBRUQ7O0FBRUE7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUVIO0FBalVJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZROztBQUtaO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBekNROztBQTRDWjtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDSTtBQUVIOztBQUVEO0FBQ0k7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNBO0FBQ0k7QUFDSDtBQXJJSSIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGlja1JhZGlvczogMCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2YxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Y0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYUJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbjEuc2V0UG9zaXRpb24oMzI2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjIuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjMuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjQuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjUuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNob3dQcm9mQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucHJvZjEuc2V0T3BhY2l0eSgxMDAwKTtcclxuICAgICAgICB0aGlzLnByb2YyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjQuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLm11ZGFCdXR0b24oKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9mMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24xOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b240OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b24xLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24yLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24zLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b240LnNldFBvc2l0aW9uKDMyNiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b241LnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzaG93UHJvZkJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnByb2YxLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjMuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnByb2Y0LnNldE9wYWNpdHkoMTAwMCk7XHJcbiAgICAgICAgdGhpcy5tdWRhQnV0dG9uKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub1NlbGVjdEZhc2U6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2VsZWN0RmFzZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHF1YWRybzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mZXNzb3I6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmFjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnYW1lQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidG5Wb2x0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gdGhpcy5jb250YWRvciAtIDE7XHJcbiAgICAgICAgdGhpcy5tdWRhVGV4dG8oKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFUZXh0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGV4dG8gPSB0aGlzLmxhYmVsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciBwcm9mZXNzb3IgPSB0aGlzLnByb2Zlc3Nvci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB2YXIgZmFjZSA9IHRoaXMuZmFjZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnbW92ZVByb2Zlc3NvcicpO1xyXG4gICAgICAgICAgICB2YXIgYW5pbWFGYWNlID0gZmFjZS5wbGF5KFwiZmFsYVByb2Zlc3NvcjJcIik7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5zcGVlZCA9IDAuNTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnJlcGVhdENvdW50ID0gSW5maW5pdHk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ1JlZGUgZGUgY29tcHV0YWRvcmVzIFxcbicrXHJcbiAgICAgICAgICAgICfDqSB1bSBjb25qdW50byBkZSBjb21wdXRhZG9yZXNcXG4nKyBcclxuICAgICAgICAgICAgJ2F1dMO0bm9tb3MgaW50ZXJjb25lY3RhZG9zIHBvciB1bWEgw7puaWNhIHRlY25vbG9naWEuJzsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRW0gcmVkZSBkZSBjb21wdXRhZG9yZXNcXG4nK1xyXG4gICAgICAgICAgICAnZXhpc3RlbSAyIG1vZGVsb3MgZGUgcHJvdG9jb2xvc1xcbicrIFxyXG4gICAgICAgICAgICAnTyBtb2RlbG8gbG9naWNvIE9TSVxcbicrIFxyXG4gICAgICAgICAgICAnZSBhIGFycXVpdGV0dXJhIFRDUC9JUCc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnYW5pbWFQcm9mZXNzb3IxJyk7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZSA9IGZhY2UucGxheShcImZhbGFQcm9mZXNzb3IzXCIpO1xyXG4gICAgICAgICAgICBhbmltYUZhY2Uuc3BlZWQgPSAwLjU7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5yZXBlYXRDb3VudCA9IEluZmluaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIG1vZGVsbyBPU0kgc2UgYmFzZWlhIGVtIHVtYSBwcm9wb3N0YSBkZXNlbnZvbHZpZGFcXG4nKyBcclxuICAgICAgICAgICAgJ3BlbGEgSVNPIChJbnRlcm5hdGlvbmFsIFN0YW5kYXJkcyBPcmdhbml6YXRpb24pXFxuJytcclxuICAgICAgICAgICAgJ2NvbW8gdW0gcHJpbWVpcm8gcGFzc28gZW0gZGlyZcOnw6NvIMOgIHBhZHJvbml6YcOnw6NvXFxuJysgXHJcbiAgICAgICAgICAgICdpbnRlcm5hY2lvbmFsIGRvcyBwcm90b2NvbG9zIGVtcHJlZ2Fkb3MgXFxuJytcclxuICAgICAgICAgICAgJ25hcyBkaXZlcnNhcyBjYW1hZGFzJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIG1vZGVsbyBPU0kgcG9zc3VpIDcgY2FtYWRhcywgc8OjbyBlbGFzOlxcbicrIFxyXG4gICAgICAgICAgICAnRsOtc2ljYVxcbicrXHJcbiAgICAgICAgICAgICdFbmxhY2VcXG4nKyBcclxuICAgICAgICAgICAgJ1JlZGVzJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdUcmFuc3BvcnRlXFxuJysgXHJcbiAgICAgICAgICAgICdTZXNzw6NvXFxuJytcclxuICAgICAgICAgICAgJ0FwcmVzZW50YcOnw6NvXFxuJysgXHJcbiAgICAgICAgICAgICdBcGxpY2HDp8Ojbyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnYW5pbWFQcm9mZXNzb3IyJyk7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZSA9IGZhY2UucGxheShcImZhbGFQcm9mZXNzb3IxXCIpO1xyXG4gICAgICAgICAgICBhbmltYUZhY2Uuc3BlZWQgPSAwLjU7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5yZXBlYXRDb3VudCA9IEluZmluaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdEbyBtb2RlbG8gbG9naWNvIE9TSSBzdXJnaXUgYSBhcnF1aXRldHVyYSBUQ1AvSVBcXG4nKyBcclxuICAgICAgICAgICAgJ08gbW9kZWxvIFRDUC9JUCBkZXNjcmV2ZSB1bSBjb25qdW50byBkZSBvcmllbnRhw6fDtWVzXFxuJytcclxuICAgICAgICAgICAgJ2dlcmFpcyBwYXJhIGEgY29uY2Vww6fDo28gZSBpbXBsZW1lbnRhw6fDo28nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNil7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ2RlIHByb3RvY29sb3MgZGUgcmVkZSBlc3BlY8OtZmljb3NcXG4nK1xyXG4gICAgICAgICAgICAncGFyYSBwZXJtaXRpciBxdWUgaGFqYVxcbicrXHJcbiAgICAgICAgICAgICdjb211bmljYcOnw6NvIGF0cmF2w6lzIGRlIHVtYSByZWRlLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDcpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdhbmltYVByb2Zlc3NvcjEnKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBpbWFnZW0gYWNpbWEgZGVtb25zdHJhIGFzIHBlY3VsaWFyaWRhZGVzXFxuJysgXHJcbiAgICAgICAgICAgICdkZSB1bSBtb2RlbG8gcGFyYSBvIG91dHJvJztcclxuICAgICAgICAgICAgdGhpcy5xdWFkcm8uc2V0UG9zaXRpb24oMjIyLDEzOSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA4KXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlID0gZmFjZS5wbGF5KFwiZmFsYVByb2Zlc3NvcjJcIik7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5zcGVlZCA9IDAuNTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnJlcGVhdENvdW50ID0gSW5maW5pdHk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0NvbW8gcG9kZSBzZXIgdmlzdG8sIGEgYXJxdWl0ZXR1cmEgVENQL0lQXFxuJysgXHJcbiAgICAgICAgICAgICdQb3NzdWkgNCBjYW1hZGFzIGUgZXUgaXJlaSBleHBsaWNhciBzb2JyZSBhIHByaW1laXJhJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDkpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICB0aGlzLnF1YWRyby5zZXRQb3NpdGlvbigxMzYwLDEzOSk7XHJcbiAgICAgICAgICAgIHByb2Zlc3Nvci5wbGF5QWRkaXRpdmUoJ2FuaW1hUHJvZmVzc29yMicpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBIGNhbWFkYSBkZSBhY2Vzc28gYSByZWRlXFxuJytcclxuICAgICAgICAgICAgJ3RlbSBjb21vIHVtIGRvcyBvYmpldGl2b3NcXG4nK1xyXG4gICAgICAgICAgICAnZ2VyYXIgZSB0cmFuc21pdGlyIG8gc2luYWwgcGVsbyBtZWlvLiBTZWphIGEgdGVjbm9sb2dpYVxcbicrIFxyXG4gICAgICAgICAgICAnRXRoZXJuZXQsIFdpLWZpLCBCbHVldG9vdGgsIGVudHJlIG91dHJvcy4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMTApe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBhbmltYUZhY2UgPSBmYWNlLnBsYXkoXCJmYWxhUHJvZmVzc29yM1wiKTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnNwZWVkID0gMC41O1xyXG4gICAgICAgICAgICBhbmltYUZhY2UucmVwZWF0Q291bnQgPSBJbmZpbml0eTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnVW0gZG9zIHNlcnZpw6dvcyBkZXNzYSBjYW1hZGEgw6kgYSBtb2R1bGHDp8Ojb1xcbicrXHJcbiAgICAgICAgICAgICdkYSBpbmZvcm1hw6fDo28gYXRyYXbDqXMgZGUgdW0gc2luYWxcXG4nK1xyXG4gICAgICAgICAgICAnYW5hbMOzZ2ljbyBvdSBkaWdpdGFsJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDExKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlID0gZmFjZS5wbGF5KFwiZmFsYVByb2Zlc3NvcjFcIik7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5zcGVlZCA9IDAuNTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnJlcGVhdENvdW50ID0gSW5maW5pdHk7XHJcbiAgICAgICAgICAgIHByb2Zlc3Nvci5wbGF5QWRkaXRpdmUoJ21vdmVQcm9mZXNzb3IyJyk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ08gbWluaS1qb2dvIGEgc2VndWlyLCBkZW1vbnN0cmEgbWVsaG9yXFxuJytcclxuICAgICAgICAgICAgJ2EgZGlmZXJlbsOnYSBlbnRyZSBvcyBzaW5haXMgZSBvcyBzZXVzIGNvbmNlaXRvcyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxMil7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImpvZ29GYXNlMVwiKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lQXVkaW8sIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHZhciB0ZXh0byA9IHRoaXMubGFiZWwuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdmFyIHByb2Zlc3NvciA9IHRoaXMucHJvZmVzc29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciBmYWNlID0gdGhpcy5mYWNlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciBhbmltYUZhY2UgPSBmYWNlLnBsYXkoXCJmYWxhUHJvZmVzc29yMVwiKTtcclxuICAgICAgICBhbmltYUZhY2Uuc3BlZWQgPSAwLjU7XHJcbiAgICAgICAgYW5pbWFGYWNlLnJlcGVhdENvdW50ID0gSW5maW5pdHk7XHJcbiAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdBcGFyZWNlJyk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnT2xhLCBldSBzb3UgbyBwcm9mZXNzb3IgU2luYWxkbyFcXG4nK1xyXG4gICAgICAgICdFdSB2b3UgdGUgZW5zaW5hciBzb2JyZSByZWRlIGRlIGNvbXB1dGFkb3Jlc1xcbicrXHJcbiAgICAgICAgJ2FycXVpdGV0dXJhIFRDUC9JUCBlIGEgY2FtYWRhIGRlIGFjZXNzbyBhIHJlZGUnO1xyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIFxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYVRleHRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBIGNhbWFkYSBpbnRlcm5ldCBkZWZpbmUgdW0gZm9ybWF0byBkZSBwYWNvdGVcXG4nK1xyXG4gICAgICAgICAgICAnb2ZpY2lhbCBlIHVtIHByb3RvY29sbyBjaGFtYWRvIElQKEludGVybmV0IFByb3RvY29sKS4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRW5kZXJlw6dvIElQLCBkZSBmb3JtYSBnZW7DqXJpY2EsIMOpIHVtYVxcbicrXHJcbiAgICAgICAgICAgICdpZGVudGlmaWNhw6fDo28gZGUgdW0gZGlzcG9zaXRpdm8gKGNvbXB1dGFkb3IsIGltcHJlc3NvcmEsIGV0YylcXG4nK1xyXG4gICAgICAgICAgICAnZW0gdW1hIHJlZGUgbG9jYWwgb3UgcMO6YmxpY2EuJzsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdDYWRhIGNvbXB1dGFkb3IgbmEgaW50ZXJuZXQgcG9zc3VpXFxuJytcclxuICAgICAgICAgICAgJ3VtIElQIChJbnRlcm5ldCBQcm90b2NvbCBvdSBQcm90b2NvbG8gZGUgaW50ZXJuZXQpIMO6bmljb1xcbicrXHJcbiAgICAgICAgICAgICdxdWUgw6kgbyBtZWlvIGVtIHF1ZSBhcyBtw6FxdWluYXMgdXNhbVxcbicrXHJcbiAgICAgICAgICAgICdwYXJhIHNlIGNvbXVuaWNhcmVtIG5hIEludGVybmV0Lic7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnTyBlbmRlcmXDp28gSVAsIG5hIHZlcnPDo28gNCBkbyBJUCAoSVB2NClcXG4nK1xyXG4gICAgICAgICAgICAnw6kgdW0gbsO6bWVybyBkZSAzMiBiaXRzIG9maWNpYWxtZW50ZSBlc2NyaXRvXFxuJysgXHJcbiAgICAgICAgICAgICdjb20gcXVhdHJvIG9jdGV0b3MgKGJ5dGVzKSByZXByZXNlbnRhZG9zIG5vIGZvcm1hdG9cXG4nK1xyXG4gICAgICAgICAgICAnZGVjaW1hbCBjb21vLCBwb3IgZXhlbXBsbywgXCIxOTIuMTY4LjEuMlwiLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBIHRhcmVmYSBkYSBjYW1hZGEgaW50ZXJuZXQgw6kgZW50cmVnYXJcXG4nK1xyXG4gICAgICAgICAgICAncGFjb3RlcyBJUCBvbmRlIGVsZXMgc8OjbyBuZWNlc3PDoXJpb3MuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ08gcm90ZWFtZW50byBkZSBwYWNvdGVzIMOpIHVtYSBxdWVzdMOjb1xcbicrXHJcbiAgICAgICAgICAgICdkZSBncmFuZGUgaW1wb3J0w6JuY2lhIG5lc3NhIGNhbWFkYSwgYXNzaW0gY29tb1xcbicrXHJcbiAgICAgICAgICAgICdhIG5lY2Vzc2lkYWRlIGRlIGV2aXRhciBvIGNvbmdlc3Rpb25hbWVudG8uJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNil7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ1VtICBleGVtcGxvIGRlICBzZXJ2acOnbyAgb2ZlcmVjaWRvXFxuJysgXHJcbiAgICAgICAgICAgICdwb3IgIGVzc2EgIGNhbWFkYSAgw6kgIG8gIHJvdGVhbWVudG8gIGRlICBwYWNvdGVzLFxcbicrXHJcbiAgICAgICAgICAgICdhdHJhdsOpcyBkb3MgZW5kZXJlw6dvcyBkZSBvcmlnZW0vZGVzdGluby4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNyl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImpvZ29GYXNlMlwiKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ09sYSwgZXUgc291IGEgcHJvZmVzc29yYSBBbmV0dGUhXFxuJytcclxuICAgICAgICAnRXUgdm91IHRlIGVuc2luYXIgc29icmUgYSBjYW1hZGEgSW50ZXJuZXQnO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFUZXh0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBmaW5hbGlkYWRlIGRlc3NhIGNhbWFkYSDDqSBwZXJtaXRpciBxdWVcXG4nKyBcclxuICAgICAgICAgICAgJ2FzIGVudGlkYWRlcyBwYXJlcyBkb3MgaG9zdHMgZGUgb3JpZ2VtIGUgZGUgZGVzdGlub1xcbicrXHJcbiAgICAgICAgICAgICdtYW50ZW5oYW0gdW1hIGNvbnZlcnNhw6fDo28nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0RvaXMgcHJvdG9jb2xvcyBmaW0gYSBmaW0gZm9yYW0gZGVmaW5pZG9zIGFxdWkuXFxuJytcclxuICAgICAgICAgICAgJ08gcHJpbWVpcm8gZGVsZXMsIG8gVENQKFRyYW5zbWlzc2lvbiBDb250cm9sIFByb3RvY29sXFxuJytcclxuICAgICAgICAgICAgJ+KAlCBwcm90b2NvbG8gZGUgY29udHJvbGUgZGUgdHJhbnNtaXNzw6NvKSc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnVW0gcHJvdG9jb2xvIG9yaWVudGFkbyBhIGNvbmV4w7VlcyBjb25macOhdmVsXFxuJytcclxuICAgICAgICAgICAgJ3F1ZSBwZXJtaXRlIGEgZW50cmVnYSBzZW0gZXJyb3MgZGUgdW0gZmx1eG8gZGUgYnl0ZXNcXG4nK1xyXG4gICAgICAgICAgICAnb3JpZ2luw6FyaW8gZGUgdW1hIGRldGVybWluYWRhIG3DoXF1aW5hIGVtIHF1YWxxdWVyIGNvbXB1dGFkb3InO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0Vzc2UgcHJvdG9jb2xvIGZyYWdtZW50YSBvIGZsdXhvIGRlIGJ5dGVzIGRlIGVudHJhZGFcXG4nK1xyXG4gICAgICAgICAgICAnZW0gbWVuc2FnZW5zIGRpc2NyZXRhcy4gTm8gZGVzdGlubywgbyBwcm9jZXNzbyBUQ1AgcmVjZXB0b3JcXG4nK1xyXG4gICAgICAgICAgICAndm9sdGEgYSBtb250YXIgYXMgbWVuc2FnZW5zIHJlY2ViaWRhcyBubyBmbHV4byBkZSBzYcOtZGEuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIHByb3hpbW8gbWluaS1qb2dvIGRlbW9uc3RyYSBjb21vXFxuJysgXHJcbiAgICAgICAgICAgICdhIG1lbnNhZ2VtIHZpYWphIGVudHJlIHZhcmlvcyBuw7NzIGF0ZSBjaGVnYXIgZW0gc2V1IGRlc3Rpbm8nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNSl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImpvZ29GYXNlM1wiKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ09sYSwgZXUgc291IG8gcHJvZmVzc29yIFBvcnR0eSFcXG4nK1xyXG4gICAgICAgICdFdSB2b3UgdGUgZW5zaW5hciBzb2JyZSBhIGNhbWFkYSBUcmFuc3BvcnRlJztcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhVGV4dG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0EgY2FtYWRhIGRlIGFjZXNzbyBhIHJlZGUgdGVtIHBvciBvYmpldGl2b1xcbicrXHJcbiAgICAgICAgICAgICdnZXJhciBlIHRyYW5zbWl0aXIgbyBzaW5hbCBwZWxvIG1laW8uXFxuJysgXHJcbiAgICAgICAgICAgICdTZWphIGEgdGVjbm9sb2dpYSBFdGhlcm5ldCwgV2ktZmksIEJsdWV0b290aCwgZW50cmUgb3V0cm9zLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBjYW1hZGEgSW50ZXJuZXQgdGVtIGNvbW8gb2JqZXRpdm9cXG4nK1xyXG4gICAgICAgICAgICAnZ2VyZW5jaWFyIHBhY290ZXMgbmEgcmVkZSwgaWRlbnRpZmljYW5kbyBzdWEgb3JpZ2VtL2Rlc3Rpbm9cXG4nK1xyXG4gICAgICAgICAgICAnZSByZWRlcyBwYXJhIGVudHJlZ2EuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBIGNhbWFkYSBkZSB0cmFuc3BvcnRlIGVzdGFiZWxlY2UgdW1hIGNvbmV4w6NvIGZpbSBhIGZpbVxcbicrXHJcbiAgICAgICAgICAgICcoY29uZXjDo28gY29uZmnDoXZlbCkgZW50cmUgYSBvcmlnZW0gZSBvIGRlc3Rpbm8gZG9zIGRhZG9zLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnUG9yIGZpbSwgdGVtb3MgYSBjYW1hZGEgZGUgYXBsaWNhw6dhb1xcbicrXHJcbiAgICAgICAgICAgICdBIGNhbWFkYSBkZSBhcGxpY2HDp8OjbyBjb250w6ltIHRvZG9zIG9zIHByb3RvY29sb3MgZGUgbsOtdmVsIG1haXMgYWx0by5cXG4nK1xyXG4gICAgICAgICAgICAnRGVudHJlIGVsZXMgZXN0w6NvIG8gcHJvdG9jb2xvIGRlIHRlcm1pbmFsIHZpcnR1YWwoVEVMTkVUKSc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnTyBwcm90b2NvbG8gZGUgdHJhbnNmZXLDqm5jaWEgZGUgYXJxdWl2b3MoRlRQKSBlXFxuJytcclxuICAgICAgICAgICAgJ28gcHJvdG9jb2xvIGRlIGNvcnJlaW8gZWxldHLDtG5pY28oU01UUCknO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ011aXRvcyBvdXRyb3MgcHJvdG9jb2xvcyBmb3JhbSBpbmNsdcOtZG9zIGNvbSBvIGRlY29ycmVyIGRvcyBhbm9zXFxuJytcclxuICAgICAgICAgICAgJ2NvbW8gbyBETlMoRG9tYWluIE5hbWUgU2VydmljZSksIHF1ZSBtYXBlaWEgb3Mgbm9tZXNcXG4nK1xyXG4gICAgICAgICAgICAnZGUgaG9zdHMgcGFyYSBzZXVzIHJlc3BlY3Rpdm9zIGVuZGVyZcOnb3MgZGUgcmVkZSc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA2KXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2U0XCIpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ09sYSwgZXUgc291IG8gcHJvZmVzc29yIEdlcmFsZG8hXFxuJytcclxuICAgICAgICAnVmFtb3MgcmVjYXBpdHVsYXIgdHVkbyBxdWUgZm9pIHZpc3RvIGF0ZSBlbnRhbyc7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mZXNzb3IyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3NvcjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYVRleHRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3NvcjEuc2V0UG9zaXRpb24oLTEzMDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3NvcjIuc2V0UG9zaXRpb24oLTI2NywgLTg5KTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnTyB0ZXN0ZSBmaW5hbCBjb25zaXN0ZSBkZSB1bSBxdWl6IGNvbSAxMCBwZXJndW50YXNcXG4nKyBcclxuICAgICAgICAgICAgJ3JlZmVyZW50ZXMgYXMgNCBjYW1hZGFzIGRhIGFycXVpdGV0dXJhIFRDUC9JUCc7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yMi5zZXRQb3NpdGlvbigtMTMwMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yMy5zZXRQb3NpdGlvbigtMjY3LCAtODkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdQYXJhIHBhc3NhciBuZXNzZSB0ZXN0ZSwgdm9jZSBkZXZlIGFjZXJ0YXIgcGVsbyBtZW5vc1xcbicrIFxyXG4gICAgICAgICAgICAnNyBkYXMgMTAgcXVlc3RvZXMgYXByZXNlbnRhZGFzJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3NvcjMuc2V0UG9zaXRpb24oLTEzMDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3NvcjQuc2V0UG9zaXRpb24oLTI2NywgLTg5KTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQ29uc2lkZXJlIGVzc2UgcXVpeiBjb21vIHVtYSBwcm92YSBmaW5hbFxcbicrIFxyXG4gICAgICAgICAgICAnbmFvIHRlbmhhIHByZXNzYSBlbSByZXNwb25kZXIgYXMgcXVlc3RvZXNcXG4nK1xyXG4gICAgICAgICAgICAnZSBhbmFsaXNlIGNvbSBjdWlkYWRvIGFzIG9ww6dvZXMgYXByZXNlbnRhZGFzJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3NvcjQuc2V0UG9zaXRpb24oLTEzMDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3NvcjEuc2V0UG9zaXRpb24oLTI2NywgLTg5KTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQm9hIHNvcnRlISc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2U1XCIpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnT2xhLCBiZW0gdmluZG8gYW8gdGVzdGUgZmluYWwhXFxuJytcclxuICAgICAgICAnZXN0YSB1bHRpbWEgZmFzZSB0ZXN0YXJhIHRvZG8gbyBzZXUgY29uaGVjaW1lbnRvXFxuJytcclxuICAgICAgICAnYWRxdWlyaWRvIGF0ZSBlbnRhbywgZW0gam9nbyBlIG5hIGRpc2NpcGxpbmEnO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b241OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYUJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbjEuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjIuc2V0UG9zaXRpb24oMzI2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjMuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjQuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjUuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNob3dQcm9mQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucHJvZjEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnByb2YyLnNldE9wYWNpdHkoMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjQuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLm11ZGFCdXR0b24oKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdhbWVBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvU2VsZWN0RmFzZTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzZWxlY3RGYXNlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lQXVkaW8sIHRydWUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9PcGNvZXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwib3Bjb2VzXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0Zhc2UxOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImZhc2UxXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvRmFzZTI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmFzZTJcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0Zhc2UzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImZhc2UzXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9GYXNlNDogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJmYXNlNFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvRmFzZTQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmFzZTVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub1F1aXoxOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlMVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvUXVpejE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2UyXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9RdWl6MTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub1F1aXoxOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlNFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvUXVpejE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2U1XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzYWlyRG9Kb2dvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmdhbWUuZW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2YxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Y0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYUJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbjEuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjIuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjMuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjQuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjUuc2V0UG9zaXRpb24oMzI2LCAtMjQ0KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNob3dQcm9mQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucHJvZjEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnByb2YyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjQuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLm11ZGFCdXR0b24oKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9mMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24xOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b240OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMi5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMy5zZXRQb3NpdGlvbigzMjYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNC5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd1Byb2ZCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wcm9mMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnByb2YzLnNldE9wYWNpdHkoMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mNC5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMubXVkYUJ1dHRvbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAganVtcEhlaWdodDogMCxcclxuICAgICAgICAvLyBtYWluIGNoYXJhY3RlcidzIGp1bXAgZHVyYXRpb25cclxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXHJcbiAgICAgICAgLy8gbWF4aW1hbCBtb3ZlbWVudCBzcGVlZFxyXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcclxuICAgICAgICAvLyBhY2NlbGVyYXRpb25cclxuICAgICAgICBhY2NlbDogMCxcclxuICAgICAgICBcclxuICAgICAgICB0aW1lcjogMCxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNldEp1bXBBY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBqdW1wIHVwXHJcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MucCgwLCB0aGlzLmp1bXBIZWlnaHQpKTtcclxuICAgICAgICAvLyByZXBlYXRcclxuICAgICAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihqdW1wVXApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAxNTtcclxuICAgICAgICB0aGlzLmp1bXBBY3Rpb24gPSB0aGlzLnNldEp1bXBBY3Rpb24oKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuanVtcEFjdGlvbik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZWxlY3RTdGFnZTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzZWxlY3RGYXNlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA8IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RTdGFnZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aW1lciAtPSBkdDtcclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJnOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvblVwOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbkRvd246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGxheWVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpbmhhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYWx2bzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnYW1lT3ZlcmJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNjb3JlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzY29yZUdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mZXNzb3I6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmFjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5Db250aW51YXIxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHRXcmFwcGVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHRvRmFzZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGluaGFHYW1lT3Zlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0dXRvcmlhbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmYXNlOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBvbnR1YWNhbzogMCxcclxuICAgICAgICBcclxuICAgICAgICBjb250VGV4dG86IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jcmlhQWx2bygpO1xyXG4gICAgICAgIHRoaXMucG9udHVhY2FvID0gMDtcclxuICAgICAgICB0aGlzLmZhc2UgPSA5O1xyXG4gICAgICAgIHRoaXMuY29udFRleHRvID0gMDtcclxuICAgICAgICB0aGlzLmxpbmhhR2FtZU92ZXIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLmFjY1VwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0SW5wdXRDb250cm9sKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDb21vIHBvZGUgc2VyIHZpc3RvLCBhIGRpZmVyZW7Dp2EgZW50cmUgb3Mgc2luYWlzXFxuXCIrIFxyXG4gICAgICAgICAgICBcIsOpIGJlbSBwZXJjZXB0aXZlbFwiO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy9tb3ZpbWVudGFyIHZpYSB0ZWNsYWRvXHJcbiAgICBzZXRJbnB1dENvbnRyb2w6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8gYWRkIGtleWJvYXJkIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcclxuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXHJcbiAgICAgICAgICAgIC8vIFdoZW4gdGhlcmUgaXMgYSBrZXkgYmVpbmcgcHJlc3NlZCBkb3duLCBqdWRnZSBpZiBpdCdzIHRoZSBkZXNpZ25hdGVkIGRpcmVjdGlvbmFsIGJ1dHRvbiBhbmQgc2V0IHVwIGFjY2VsZXJhdGlvbiBpbiB0aGUgY29ycmVzcG9uZGluZyBkaXJlY3Rpb25cclxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbihrZXlDb2RlLCBldmVudCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS51cDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NVcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgb25LZXlSZWxlYXNlZDogZnVuY3Rpb24oa2V5Q29kZSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChrZXlDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjVXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgc2VsZi5ub2RlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vdmltZW50YXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjVXApIHtcclxuICAgICAgICAgICAgdGhpcy5zb2JlUGxheWVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNjZVBsYXllcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmFjY1JpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy52YWlGcmVudGVQbGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBqb2dhcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmZhc2UgPSAwO1xyXG4gICAgICAgIHRoaXMuZnJlbnRlUGxheWVyKCk7XHJcbiAgICAgICAgdmFyIHR1dG9yaWFsID0gdGhpcy50dXRvcmlhbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0dXRvcmlhbC5wbGF5KFwic29tZVR1dG9yaWFsXCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLypGdW7Dp29lcyB1c2FkYXMgcGFyYSBjaGFtYXIgYSBhw6dhbyBkZSBcclxuICAgIG1vdmltZW50YXIgYSBjb3JkYSBwYXJhIGNpbWEgZW0gZGl2ZXJzYXMgdmVsb2NpZGFkZXMqL1xyXG4gICAgc29iZVBsYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHZhciBzb2JlID0gY2MubW92ZUJ5KDMsIGNjLnAoMCwgMzAwKSk7XHJcbiAgICAgICAgdmFyIGZyZW50ZSA9IGNjLm1vdmVCeSgzMDAsIGNjLnAoMTAwMDAsIDApKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24oY2Muc2VxdWVuY2Uoc29iZSwgZnJlbnRlKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvKkZ1bsOnb2VzIHVzYWRhcyBwYXJhIGNoYW1hciBhIGHDp2FvIGRlIFxyXG4gICAgbW92aW1lbnRhciBhIGNvcmRhIHBhcmEgYmFpeG8gZW0gZGl2ZXJzYXMgdmVsb2NpZGFkZXMqL1xyXG4gICAgZGVzY2VQbGF5ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB2YXIgZGVzY2UgPSBjYy5tb3ZlQnkoMywgY2MucCgwLCAtMzAwKSk7XHJcbiAgICAgICAgdmFyIGZyZW50ZSA9IGNjLm1vdmVCeSgzMDAsIGNjLnAoMTAwMDAsIDApKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoZGVzY2UsIGZyZW50ZSkpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdmFpRnJlbnRlUGxheWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdmFyIGZyZW50ZSA9IGNjLm1vdmVCeSgzMDAsIGNjLnAoMTAwMDAsIDApKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24oZnJlbnRlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZhaVByYUZyZW50ZTogZnVuY3Rpb24oKXtcclxuICAgIHZhciBmcmVudGUgPSBjYy5tb3ZlQnkoMzAwLCBjYy5wKDEwMDAwLCAwKSk7XHJcbiAgICAgICAgcmV0dXJuIGZyZW50ZTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGZyZW50ZVBsYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnZhaVByYUZyZW50ZSA9IHRoaXMudmFpUHJhRnJlbnRlKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKHRoaXMudmFpUHJhRnJlbnRlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNyaWFMaW5oYTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vdmFMaW5oYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluaGEpO1xyXG4gICAgICAgIHRoaXMuYmcuYWRkQ2hpbGQobm92YUxpbmhhKTtcclxuICAgICAgICBub3ZhTGluaGEuc2V0UG9zaXRpb24odGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjcmlhQWx2bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAzMDApICsgMCk7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBsYXllci54ICsgMTAwO1xyXG4gICAgICAgIHZhciB4bGluaGEgPSB4ICsgMjAwO1xyXG4gICAgICAgIHRoaXMuYWx2by5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgICAgICB0aGlzLmxpbmhhR2FtZU92ZXIuc2V0UG9zaXRpb24oeGxpbmhhLCAwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBqdWRnZSB0aGUgZGlzdGFuY2UgYWNjb3JkaW5nIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGxheWVyIG5vZGVcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgQWx2b1BvcyA9IHRoaXMuYWx2by5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbm9kZXMgYWNjb3JkaW5nIHRvIHRoZWlyIHBvc2l0aW9uc1xyXG4gICAgICAgIHZhciBkaXN0ID0gY2MucERpc3RhbmNlKEFsdm9Qb3MsIHBsYXllclBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZUxpbmhhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8ganVkZ2UgdGhlIGRpc3RhbmNlIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIHBsYXllciBub2RlXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIGxpbmhhR2FtZU92ZXJQb3MgPSB0aGlzLmxpbmhhR2FtZU92ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG5vZGVzIGFjY29yZGluZyB0byB0aGVpciBwb3NpdGlvbnNcclxuICAgICAgICB2YXIgZGlzdCA9IGNjLnBEaXN0YW5jZShsaW5oYUdhbWVPdmVyUG9zLCBwbGF5ZXJQb3MpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25QaWNrZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIHN0YXJzIGFyZSBiZWluZyBjb2xsZWN0ZWQsIGludm9rZSB0aGUgaW50ZXJmYWNlIGluIHRoZSBHYW1lIHNjcmlwdCB0byBnZW5lcmF0ZSBhIG5ldyBzdGFyXHJcbiAgICAgICAgdGhpcy5jcmlhQWx2bygpO1xyXG4gICAgICAgIHRoaXMucG9udHVhY2FvICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBsaW1pdGFQbGF5ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKCB0aGlzLnBsYXllci55ID4gdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodC8yKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnkgPSB0aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0LzI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLnkgPCAtdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodC8yKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnkgPSAtdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodC8yO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGVnYUFsdm86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IDYwKSB7XHJcbiAgICAgICAgICAgIC8vIGludm9rZSBjb2xsZWN0aW5nIGJlaGF2aW9yXHJcbiAgICAgICAgICAgIHRoaXMub25QaWNrZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBvbnR1YWNhbyA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZmFzZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGFzc2FMaW5oYTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZUxpbmhhKCkgPCA2MCkge1xyXG4gICAgICAgICAgICAvLyBpbnZva2UgY29sbGVjdGluZyBiZWhhdmlvclxyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucG9udHVhY2FvID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5saW5oYUdhbWVPdmVyLnNldFBvc2l0aW9uKDAsIDIwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdhbWVPdmVyOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlcmJhY2tncm91bmQuc2V0UG9zaXRpb24oMCwwKTtcclxuICAgICAgICB0aGlzLnNjb3JlR2FtZU92ZXIuc3RyaW5nID0gJ0Fsdm9zIEFjZXJ0YWRvczogJyt0aGlzLnBvbnR1YWNhbztcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJ5QWdhaW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UxLTFcIik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVRleHRvMTogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGV4dG8gPSB0aGlzLnRleHRvRmFzZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB2YXIgcHJvZmVzc29yID0gdGhpcy5wcm9mZXNzb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdmFyIGZhY2UgPSB0aGlzLmZhY2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdmFyIGFuaW1hRmFjZSA9IGZhY2UucGxheShcImZhbGFQcm9mZXNzb3IxXCIpO1xyXG4gICAgICAgIGFuaW1hRmFjZS5zcGVlZCA9IDAuNTtcclxuICAgICAgICBhbmltYUZhY2UucmVwZWF0Q291bnQgPSBJbmZpbml0eTtcclxuICAgICAgICBpZih0aGlzLmNvbnRUZXh0byA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHByb2Zlc3Nvci5wbGF5QWRkaXRpdmUoJ2FuaW1hUHJvZmVzc29yMScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk8gc2luYWwgYW5hbG9naWNvIMOpIGdlcmFkbyBjb21vIHVtYSBvbmRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiasOhIHF1ZSBvcyB2YWxvcmVzIHbDo28gc2UgYWx0ZXJhbmRvIG5vIGludGVydmFsbyBkZSB0ZW1wb1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxKXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnYW5pbWFQcm9mZXNzb3IyJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiSsOhIG8gc2luYWwgZGlnaXRhbCDDqSBnZXJhZG8gY29tbyB1bWEgcmV0YVxcblwiK1xyXG4gICAgICAgICAgICBcImrDoSBxdWUgcG9zc3VpIHVtIGNvbmp1bnRvIGRlIHZhbG9yZXMgZW0gdW0gaW50ZXJ2YWxvIGRlIHRlbXBvXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdhbmltYVByb2Zlc3NvcjEnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBIGNhbWFkYSBkZSBhY2Vzc28gYSByZWRlIHRhbWJlbSBmb3JuZWNlXFxuXCIrXHJcbiAgICAgICAgICAgIFwibyBzZXJ2acOnbyBkZSAgdHJhbnNmb3JtYXIgIHVtICBjYW5hbCAgZGUgdHJhbnNtaXNzw6NvICBicnV0YVxcblwiK1xyXG4gICAgICAgICAgICBcImVtICB1bWEgIGxpbmhhICBxdWUgIHBhcmXDp2EgIGxpdnJlICBkZSAgZXJyb3MgIGRlICB0cmFuc21pc3PDo29cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMyl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHByb2Zlc3Nvci5wbGF5QWRkaXRpdmUoJ2FuaW1hUHJvZmVzc29yMicpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk9mZXJlY2VuZG8gZW5xdWFkcmFtZW50byBkZSBiaXRzXFxuXCIrXHJcbiAgICAgICAgICAgIFwidmVyaWZpY2HDp8OjbyBkZSBlcnJvcyBlIHByb3RvY29sb3MgcXVlIGFzc2VndXJlbSBhIGNvcnJlw6dhbyBkZSBlcnJvc1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udFRleHRvID09IDQpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdhbmltYVByb2Zlc3NvcjEnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJWaXN0byBvcyBjb250ZXVkb3MgZGVzdGEgZmFzZSBlIGVtIHNhbGEgZGUgYXVsYVxcblwiK1xyXG4gICAgICAgICAgICBcInJlc3BvbmRhIGFnb3JhIG8gUXVpelwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZhc2UgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbigtNDE4LDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tb3ZpbWVudGFyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5mYXNlID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3Iuc2V0UG9zaXRpb24oMTMwNiwtMjIyKTtcclxuICAgICAgICAgICAgdGhpcy5saW1pdGFQbGF5ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmlhTGluaGEoKTtcclxuICAgICAgICAgICAgdGhpcy5wZWdhQWx2bygpO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3NhTGluaGEoKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZS5zdHJpbmcgPSAnQWx2b3M6ICcrIHRoaXMucG9udHVhY2FvO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmZhc2UgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yLnNldFBvc2l0aW9uKDAsLTIyMik7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdyYXBwZXIuc2V0UG9zaXRpb24oMCwtMjIwKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5mYXNlID09IDIpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uVXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uRG93bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGluaGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhbHZvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNjb3JlR2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmYWNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0bkNvbnRpbnVhcjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuQ29udGludWFyMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpbmhhR2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dHdyYXBwZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHV0b3JpYWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmFzZTogMCxcclxuICAgICAgICBcclxuICAgICAgICBwb250dWFjYW86IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udFRleHRvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNhaUxvb3A6IDAsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5mcmVudGVQbGF5ZXIoKTtcclxuICAgICAgICB0aGlzLmNyaWFBbHZvKCk7XHJcbiAgICAgICAgdGhpcy5idG5Db250aW51YXIyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5saW5oYUdhbWVPdmVyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wb250dWFjYW8gPSAwO1xyXG4gICAgICAgIHRoaXMuZmFzZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgIHRoaXMuYWNjVXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY0Rvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNhaUxvb3AgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0SW5wdXRDb250cm9sKCk7XHJcbiAgICAgICAgdmFyIHRleHRvID0gdGhpcy50ZXh0b0Zhc2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdmFyIHByb2Zlc3NvciA9IHRoaXMucHJvZmVzc29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciBmYWNlID0gdGhpcy5mYWNlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciBhbmltYUZhY2UgPSBmYWNlLnBsYXkoXCJmYWxhUHJvZmVzc29yMVwiKTtcclxuICAgICAgICBhbmltYUZhY2Uuc3BlZWQgPSAwLjU7XHJcbiAgICAgICAgYW5pbWFGYWNlLnJlcGVhdENvdW50ID0gSW5maW5pdHk7XHJcbiAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICBwcm9mZXNzb3IucGxheUFkZGl0aXZlKCdBcGFyZWNlJyk7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJOZXNzZSBNaW5pLUpvZ28sIHZvY2UgYXByZW5kZXJhIGEgZGlmZXJlbsOnYVxcblwiKyBcclxuICAgICAgICAgICAgXCJlbnRyZSBvIHNpbmFsIGFuYWxvZ2ljbyBlIG8gc2luYWwgZGlnaXRhbFwiO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy9tb3ZpbWVudGFyIHZpYSB0ZWNsYWRvXHJcbiAgICBzZXRJbnB1dENvbnRyb2w6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8gYWRkIGtleWJvYXJkIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcclxuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXHJcbiAgICAgICAgICAgIC8vIFdoZW4gdGhlcmUgaXMgYSBrZXkgYmVpbmcgcHJlc3NlZCBkb3duLCBqdWRnZSBpZiBpdCdzIHRoZSBkZXNpZ25hdGVkIGRpcmVjdGlvbmFsIGJ1dHRvbiBhbmQgc2V0IHVwIGFjY2VsZXJhdGlvbiBpbiB0aGUgY29ycmVzcG9uZGluZyBkaXJlY3Rpb25cclxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbihrZXlDb2RlLCBldmVudCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS51cDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NVcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgIG9uS2V5UmVsZWFzZWQ6IGZ1bmN0aW9uKGtleUNvZGUsIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goa2V5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHNlbGYubm9kZSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtb3ZpbWVudGFyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICh0aGlzLmFjY1VwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29iZVBsYXllcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY2VQbGF5ZXIoKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLypGdW7Dp29lcyB1c2FkYXMgcGFyYSBjaGFtYXIgYSBhw6dhbyBkZSBcclxuICAgIG1vdmltZW50YXIgYSBjb3JkYSBwYXJhIGNpbWEgZW0gZGl2ZXJzYXMgdmVsb2NpZGFkZXMqL1xyXG4gICAgc29iZVBsYXllcjogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYodGhpcy5zYWlMb29wID09PSAwKXtcclxuICAgICAgICB2YXIgc29iZSA9IGNjLm1vdmVCeSgzLCBjYy5wKDAsIDMwMCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25Jbk91dCgpKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24oc29iZSk7XHJcbiAgICAgICAgdGhpcy5zYWlMb29wID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zYWlMb29wID09IDEpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvKkZ1bsOnb2VzIHVzYWRhcyBwYXJhIGNoYW1hciBhIGHDp2FvIGRlIFxyXG4gICAgbW92aW1lbnRhciBhIGNvcmRhIHBhcmEgYmFpeG8gZW0gZGl2ZXJzYXMgdmVsb2NpZGFkZXMqL1xyXG4gICAgZGVzY2VQbGF5ZXI6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKHRoaXMuc2FpTG9vcCA9PSAxKXtcclxuICAgICAgICAgICAgdmFyIGRlc2NlID0gY2MubW92ZUJ5KDMsIGNjLnAoMCwgLTMwMCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25Jbk91dCgpKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKGRlc2NlKTtcclxuICAgICAgICAgICAgdGhpcy5zYWlMb29wID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zYWlMb29wID09PSAwKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdmFpUHJhRnJlbnRlOiBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGZyZW50ZSA9IGNjLm1vdmVCeSgzLCBjYy5wKDEwMCwgMCkpO1xyXG4gICAgICAgIHJldHVybiBjYy5yZXBlYXRGb3JldmVyKGZyZW50ZSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBmcmVudGVQbGF5ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy52YWlQcmFGcmVudGUgPSB0aGlzLnZhaVByYUZyZW50ZSgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJ1bkFjdGlvbih0aGlzLnZhaVByYUZyZW50ZSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjcmlhTGluaGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBub3ZhTGluaGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmhhKTtcclxuICAgICAgICB0aGlzLmJnLmFkZENoaWxkKG5vdmFMaW5oYSk7XHJcbiAgICAgICAgbm92YUxpbmhhLnNldFBvc2l0aW9uKHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgY3JpYUFsdm86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMzAwKSArIDApO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wbGF5ZXIueCArIDEwMDtcclxuICAgICAgICB2YXIgeGxpbmhhID0geCArIDIwMDtcclxuICAgICAgICB0aGlzLmFsdm8uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5saW5oYUdhbWVPdmVyLnNldFBvc2l0aW9uKHhsaW5oYSwgMCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGp1ZGdlIHRoZSBkaXN0YW5jZSBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBwbGF5ZXIgbm9kZVxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBBbHZvUG9zID0gdGhpcy5hbHZvLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBub2RlcyBhY2NvcmRpbmcgdG8gdGhlaXIgcG9zaXRpb25zXHJcbiAgICAgICAgdmFyIGRpc3QgPSBjYy5wRGlzdGFuY2UoQWx2b1BvcywgcGxheWVyUG9zKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdldFBsYXllckRpc3RhbmNlTGluaGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBqdWRnZSB0aGUgZGlzdGFuY2UgYWNjb3JkaW5nIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGxheWVyIG5vZGVcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgbGluaGFHYW1lT3ZlclBvcyA9IHRoaXMubGluaGFHYW1lT3Zlci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbm9kZXMgYWNjb3JkaW5nIHRvIHRoZWlyIHBvc2l0aW9uc1xyXG4gICAgICAgIHZhciBkaXN0ID0gY2MucERpc3RhbmNlKGxpbmhhR2FtZU92ZXJQb3MsIHBsYXllclBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBvblBpY2tlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgc3RhcnMgYXJlIGJlaW5nIGNvbGxlY3RlZCwgaW52b2tlIHRoZSBpbnRlcmZhY2UgaW4gdGhlIEdhbWUgc2NyaXB0IHRvIGdlbmVyYXRlIGEgbmV3IHN0YXJcclxuICAgICAgICB0aGlzLmNyaWFBbHZvKCk7XHJcbiAgICAgICAgdGhpcy5wb250dWFjYW8gKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGxpbWl0YVBsYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoIHRoaXMucGxheWVyLnkgPiB0aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0LzIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueSA9IHRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMjtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIueSA8IC10aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0LzIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueSA9IC10aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0LzI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZWdhQWx2bzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgNjApIHtcclxuICAgICAgICAgICAgLy8gaW52b2tlIGNvbGxlY3RpbmcgYmVoYXZpb3JcclxuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucG9udHVhY2FvID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5mYXNlID0gMjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwYXNzYUxpbmhhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlTGluaGEoKSA8IDYwKSB7XHJcbiAgICAgICAgICAgIC8vIGludm9rZSBjb2xsZWN0aW5nIGJlaGF2aW9yXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBvbnR1YWNhbyA9PTEwKXtcclxuICAgICAgICAgICAgdGhpcy5saW5oYUdhbWVPdmVyLnNldFBvc2l0aW9uKDAsIDIwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdhbWVPdmVyOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlcmJhY2tncm91bmQuc2V0UG9zaXRpb24oMCwwKTtcclxuICAgICAgICB0aGlzLnNjb3JlR2FtZU92ZXIuc3RyaW5nID0gJ0Fsdm9zIEFjZXJ0YWRvczogJyt0aGlzLnBvbnR1YWNhbztcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJ5QWdhaW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UxXCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FUZXh0bzE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHRleHRvID0gdGhpcy50ZXh0b0Zhc2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdmFyIHByb2Zlc3NvciA9IHRoaXMucHJvZmVzc29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHZhciBmYWNlID0gdGhpcy5mYWNlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuY29udFRleHRvID09PSAwKXtcclxuICAgICAgICAgICAgcHJvZmVzc29yLnBsYXlBZGRpdGl2ZSgnbW92ZVByb2Zlc3NvckpGMScpO1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICB2YXIgYW5pbWFGYWNlID0gZmFjZS5wbGF5KFwiZmFsYVByb2Zlc3NvcjJcIik7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5zcGVlZCA9IDAuNTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnJlcGVhdENvdW50ID0gSW5maW5pdHk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwidW0gIHNpbmFsICBhbmFsw7NnaWNvICDDqSAgY2FyYWN0ZXJpemFkbyBwb3JcXG5cIisgXHJcbiAgICAgICAgICAgIFwidW1hIGVxdWHDp8OjbyBtYXRlbcOhdGljYSBjb250aW51YS5cXG5cIisgXHJcbiAgICAgICAgICAgIFwiUXVhbmRvIGEgZW50cmFkYSBtdWRhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEpe1xyXG4gICAgICAgICAgICB0ZXh0by5wbGF5QWRkaXRpdmUoJ0FwYXJlY2VUZXh0bycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcImRlIHVtIHZhbG9yIHBhcmEgbyBwcsOzeGltb1xcblwiKyBcclxuICAgICAgICAgICAgXCJmYXogaXNzbyBtb3ZlbmRvIHNlIGF0cmF2w6lzXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZGUgdG9kb3Mgb3MgdmFsb3JlcyBpbnRlcm1lZGnDoXJpb3MuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMil7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVGVudGUgYWNlcnRhciAxMCBhbHZvcyBwYXJhIGF2YW7Dp2FyXFxuXCIrXHJcbiAgICAgICAgICAgIFwicGFyYSBhIHByb3hpbWEgZXRhcGFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMyl7XHJcbiAgICAgICAgICAgIHRleHRvLnBsYXlBZGRpdGl2ZSgnQXBhcmVjZVRleHRvJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiRXZpdGUgc3ViaXIgZGVtYWlzIG91IGRlc2NlciBkZW1haXNcXG5cIitcclxuICAgICAgICAgICAgXCJjYXNvIGlzc28gYWNvbnRlw6dhLCBzZXJhIEdhbWUgT3ZlclwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA0KXtcclxuICAgICAgICAgICAgdGV4dG8ucGxheUFkZGl0aXZlKCdBcGFyZWNlVGV4dG8nKTtcclxuICAgICAgICAgICAgdmFyIHR3ID0gdGhpcy50ZXh0d3JhcHBlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdHcucGxheShcInNvbWVUV0pGMVwiKTtcclxuICAgICAgICAgICAgdmFyIHR1dG9yaWFsID0gdGhpcy50dXRvcmlhbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdHV0b3JpYWwucGxheShcImFwYXJlY2VUdXRvcmlhbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBqb2dhcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkNvbW8gcG9kZSBzZXIgdmlzdG8gbyBzaW5hbCBhbmFsb2dpY28gw6kgZ2VyYWRvIGNvbW9cXG5cIitcclxuICAgICAgICAgICAgXCJ1bSBjb25qdW50byBkZSBvbmRhcywgasOhIHF1ZSBvIHNpbmFsIHBhc3NhIHBvciB0b2RvcyBvcyB2YWxvcmVzXFxuXCIrXHJcbiAgICAgICAgICAgIFwibmFxdWVsZSBpbnRlcnZhbG8gZGUgdGVtcG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gPSA3O1xyXG4gICAgICAgICAgICB0aGlzLmZhc2UgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbigtNDE4LDApO1xyXG4gICAgICAgICAgICB2YXIgdHV0b3JpYWwgPSB0aGlzLnR1dG9yaWFsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB0dXRvcmlhbC5wbGF5KFwic29tZVR1dG9yaWFsXCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FUZXh0bzI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiSsOhIG8gc2luYWwgZGlnaXRhbCDDqSBnZXJhZG8gY29tbyB1bSBjb25qdW50byBkZSByZXRhc1xcblwiK1xyXG4gICAgICAgICAgICBcImrDoSBxdWUgcG9zc3VpIHVtIGNvbmp1bnRvIGxpbWl0YWRvXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZGUgdmFsb3JlcyBlbSB1bSBpbnRlcnZhbG8gZGUgdGVtcG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVGVudGUgYWNlcnRhciAxMCBhbHZvcyBwYXJhIGF2YW7Dp2FyXFxuXCIrXHJcbiAgICAgICAgICAgIFwicGFyYSBhIHByb3hpbWEgZXRhcGFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiRXZpdGUgc3ViaXIgZGVtYWlzIG91IGRlc2NlciBkZW1haXNcXG5cIitcclxuICAgICAgICAgICAgXCJjYXNvIGlzc28gYWNvbnRlw6dhLCBzZXJhIEdhbWUgT3ZlclwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQm9hIFNvcnRlIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZmFzZSA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKC00MTgsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdmltZW50YXIoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmZhc2UgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3Nvci5zZXRQb3NpdGlvbigwLC0yMjIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmZhc2UgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3Iuc2V0UG9zaXRpb24oMTMwNiwtMjIyKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0d3JhcHBlci5zZXRQb3NpdGlvbigxMzA2LC0yMjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkNvbnRpbnVhcjEuc2V0UG9zaXRpb24oMTMwNiwtMjIyKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Db250aW51YXIyLnNldFBvc2l0aW9uKDEzMDYsLTIyMik7XHJcbiAgICAgICAgICAgIHRoaXMubGltaXRhUGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JpYUxpbmhhKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGVnYUFsdm8oKTtcclxuICAgICAgICAgICAgdGhpcy5wYXNzYUxpbmhhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gJ0Fsdm9zOiAnKyB0aGlzLnBvbnR1YWNhbztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5mYXNlID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3Nvci5zZXRQb3NpdGlvbigwLC0yMjIpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHR3cmFwcGVyLnNldFBvc2l0aW9uKDAsLTIyOSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ29udGludWFyMi5zZXRQb3NpdGlvbig3NDcsLTk5KTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Db250aW51YXIxLnNldFBvc2l0aW9uKDMwMDAsMCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ29udGludWFyMi5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuZmFzZSA9PSAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UxLTFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZmVzc29yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHRvRmFzZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm8xOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm80OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzY6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFiUm90OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxibE5vMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuUmVhbGl6YXJTYWx0bzE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuUmVhbGl6YXJTYWx0bzI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuUmVhbGl6YXJTYWx0bzM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuUmVhbGl6YXJTYWx0bzQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuUmVhbGl6YXJTYWx0bzU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuUmVhbGl6YXJTYWx0bzY6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGxheWVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpbmhhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3NvckZyZW50ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2UxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzYWx0b3M6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9udHVhY2FvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLnBvbnR1YWNhbyA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgIHRoaXMuc2FsdG9zID0gNTtcclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9IHRoaXMuc2FsdG9zO1xyXG4gICAgICAgIHRoaXMuc29tZU5vcygpO1xyXG4gICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTmVzc2UgTWluaS1Kb2dvLCB2b2NlIGFwcmVuZGVyYSBhIHJvdGVhclxcblwiKyBcclxuICAgICAgICAgICAgXCJwYWNvdGVzIElQc1wiO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZU5vczogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vMS5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vMi5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vMy5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNC5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNS5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNi5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNvbWVSZWFsaXphU2FsdG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvMS5zZXRQb3NpdGlvbig4OTUsIC0xMDgpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzIuc2V0UG9zaXRpb24oODk1LCAtMTA4KTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG8zLnNldFBvc2l0aW9uKDg5NSwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNC5zZXRQb3NpdGlvbig4OTUsIC0xMDgpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzUuc2V0UG9zaXRpb24oODk1LCAtMTA4KTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG82LnNldFBvc2l0aW9uKDg5NSwgLTEwOCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhcGFyZWNlTm9zOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm8xLnNldFBvc2l0aW9uKC01MywgLTI3KTtcclxuICAgICAgICB0aGlzLm5vMi5zZXRQb3NpdGlvbig2LCAxNDgpO1xyXG4gICAgICAgIHRoaXMubm8zLnNldFBvc2l0aW9uKDE3MiwgLTI3KTtcclxuICAgICAgICB0aGlzLm5vNC5zZXRQb3NpdGlvbigxOTksIDEyNyk7XHJcbiAgICAgICAgdGhpcy5ubzUuc2V0UG9zaXRpb24oMTQ4LCAyNTcpO1xyXG4gICAgICAgIHRoaXMubm82LnNldFBvc2l0aW9uKDM4MCwgMjY5KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vdmVQbGF5ZXI6IGZ1bmN0aW9uICh4LCB5KXtcclxuICAgICAgICB2YXIgbW92ZSA9IGNjLm1vdmVUbygzLCBjYy5wKHgsIHkpKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24obW92ZSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjcmlhTGluaGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBub3ZhTGluaGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmhhKTtcclxuICAgICAgICB0aGlzLmJnLmFkZENoaWxkKG5vdmFMaW5oYSk7XHJcbiAgICAgICAgbm92YUxpbmhhLnNldFBvc2l0aW9uKHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FUZXh0bzE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk9zIHJvdGVhZG9yZXMgc8OjbyB1dGlsaXphZG9zIHBhcmEgaW50ZXJsaWdhclxcblwiK1xyXG4gICAgICAgICAgICBcImFzIHJlZGVzIGbDrXNpY2FzIGVudHJlIHNpLiBFbGVzIG9mZXJlY2VtXFxuXCIrXHJcbiAgICAgICAgICAgIFwibcO6bHRpcGxvcyBjYW1pbmhvcyBwYXJhIGludGVyY29uZWN0YXIgYXMgcmVkZXMgZsOtc2ljYXMuXCI7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBcyB0YWJlbGFzIGRlIHJvdGVhbWVudG8gaW5kaWNhbSBwYXJhIGNhZGEgcm90ZWFkb3JcXG5cIitcclxuICAgICAgICAgICAgXCJjb21vIGVsZSBkZXZlIGVuY2FtaW5oYXIgdW0gcGFjb3RlIGEgZmltIGRlIHF1ZVxcblwiK1xyXG4gICAgICAgICAgICBcImVzdGUgY2hlZ3VlIGEgdW1hIGNlcnRhIHJlZGUgZsOtc2ljYSBkZSBkZXN0aW5vLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBcyB0YWJlbGFzIGRlIHJvdGVhbWVudG8gc8OjbyBwcmVlbmNoaWRhc1xcblwiK1xyXG4gICAgICAgICAgICBcImF1dG9tYXRpY2FtZW50ZSwgYXRyYXbDqXMgZGUgcHJvdG9jb2xvcyBkZSByb3RlYW1lbnRvXFxuXCIrXHJcbiAgICAgICAgICAgIFwicGFkcm9uaXphZG9zLCBjb21vIG8gQkdQIChCb3JkZXIgR2F0ZXdheSBQcm90b2NvbClcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVmVqYSBhZ29yYSB1bSBleGVtcGxvIGRlIHJlZGUhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYXBhcmVjZU5vcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIGNlbmFyaW8gYWNpbWEgZGVtb25zdHJhIHVtYSByZWRlXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY29tIDYgcm90ZWFkb3JlcywgY2FkYSB1bSBkZWxlcyBjb20gc3VhIHRhYmVsYVxcblwiK1xyXG4gICAgICAgICAgICBcImRlIHJvdGVhbWVudG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTm8gcGFwZWwgZGUgdW0gcGFjb3RlLCB2b2NlIHRlcmFcXG5cIitcclxuICAgICAgICAgICAgXCI1IHNhbHRvcyBwYXJhIHNhaXIgZG8gbsOzIDEgZSBjaGVnYXIgYW8gbsOzIDYhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBlIGJvYSBzb3J0ZSEhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZU5vcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy5iZy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMubm8xLnNldFBvc2l0aW9uKC0yNDAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbigtMjEwLCAtMTU0KTtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjApe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZTEuc3RyaW5nID0gXCJQYXJhYsOpbnMsIHZvY2UgY2hlZ291IGFvIG7DsyA2IVxcblwiK1xyXG4gICAgICAgICAgICBcImFwZXNhciBkZSBiYXN0YW50ZSBzaW1wbGlmaWNhZG8gbyBtaW5pLWpvZ28gZGVtb25zdHJvdVxcblwiK1xyXG4gICAgICAgICAgICBcImNvbW8gdW1hIGluZm9ybWHDp8OjbyB0cmFmZWdhIGVtIGRpdmVyc2FzIHJlZGVzIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlMS5zdHJpbmcgPSBcIkNvbSBhcyBpbmZvcm1hw6fDtWVzIHBhc3NhZGFzIG5lc3RhIGZhc2VcXG5cIitcclxuICAgICAgICAgICAgXCJyZXNwb25kYSBhZ29yYSBvIFF1aXohXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBlIGJvYSBzb3J0ZSFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjIpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTJcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxMCl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImpvZ29GYXNlM1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25ObzE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMzIwLCAtMTMwKTtcclxuICAgICAgICB0aGlzLmxibE5vMS5zdHJpbmcgPSBcIk5vIDMgICAgICAgICAyMCVcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJObyAyICAgICAgICAgNzAlXCI7XHJcbiAgICAgICAgdGhpcy5zb21lUmVhbGl6YVNhbHRvKCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvMy5zZXRQb3NpdGlvbigwLCAtMTA4KTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG8yLnNldFBvc2l0aW9uKDAsIC0yMDIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uTm8yOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGFiUm90LnNldFBvc2l0aW9uKDMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5sYmxObzEuc3RyaW5nID0gXCJObyA1ICAgICAgICAgODAlXFxuXCIrXHJcbiAgICAgICAgXCJcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiTm8gNCAgICAgICAgIDcwJVwiO1xyXG4gICAgICAgIHRoaXMuc29tZVJlYWxpemFTYWx0bygpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzUuc2V0UG9zaXRpb24oMCwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNC5zZXRQb3NpdGlvbigwLCAtMjAyKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvbk5vMzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubGJsTm8xLnN0cmluZyA9IFwiTm8gMSAgICAgICAgIDIwJVxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJcXG5cIitcclxuICAgICAgICBcIk5vIDIgICAgICAgICA3MCVcIjtcclxuICAgICAgICB0aGlzLnNvbWVSZWFsaXphU2FsdG8oKTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG8xLnNldFBvc2l0aW9uKDAsIC0xMDgpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzIuc2V0UG9zaXRpb24oMCwgLTIwMik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25ObzQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMzIwLCAtMTMwKTtcclxuICAgICAgICB0aGlzLmxibE5vMS5zdHJpbmcgPSBcIk5vIDUgICAgICAgICA5MCVcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJObyAyICAgICAgICAgNzAlXCI7XHJcbiAgICAgICAgdGhpcy5zb21lUmVhbGl6YVNhbHRvKCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNS5zZXRQb3NpdGlvbigwLCAtMTA4KTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG8yLnNldFBvc2l0aW9uKDAsIC0yMDIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uTm81OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGFiUm90LnNldFBvc2l0aW9uKDMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5sYmxObzEuc3RyaW5nID0gXCJObyA0ICAgICAgICAgNjAlXFxuXCIrXHJcbiAgICAgICAgXCJcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiTm8gNiAgICAgICAgIDMwJVwiO1xyXG4gICAgICAgIHRoaXMuc29tZVJlYWxpemFTYWx0bygpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzQuc2V0UG9zaXRpb24oMCwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNi5zZXRQb3NpdGlvbigwLCAtMjAyKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvbk5vNjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubGJsTm8xLnN0cmluZyA9IFwiTm8gNSAgICAgICAgIDcwJVxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJcXG5cIitcclxuICAgICAgICBcIlwiO1xyXG4gICAgICAgIHRoaXMuc29tZVJlYWxpemFTYWx0bygpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzUuc2V0UG9zaXRpb24oMCwgLTEwOCk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25TYWx0bzE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMTMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy5ubzEuc2V0UG9zaXRpb24oLTI0MCwgLTE4MSk7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgLT0gMTtcclxuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoLTI0MCwgLTE4MSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25TYWx0bzI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMTMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy5ubzIuc2V0UG9zaXRpb24oLTE4MSwgLTYpO1xyXG4gICAgICAgIHRoaXMuc2FsdG9zIC09IDE7XHJcbiAgICAgICAgdGhpcy5tb3ZlUGxheWVyKC0xODEsIC02KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblNhbHRvMzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigxMzIwLCAtMTMwKTtcclxuICAgICAgICB0aGlzLnNvbWVOb3MoKTtcclxuICAgICAgICB0aGlzLm5vMy5zZXRQb3NpdGlvbigtMTUsIC0xODEpO1xyXG4gICAgICAgIHRoaXMuc2FsdG9zIC09IDE7XHJcbiAgICAgICAgdGhpcy5tb3ZlUGxheWVyKC0xNSwgLTE4MSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25TYWx0bzQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMTMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy5ubzQuc2V0UG9zaXRpb24oMTIsIC0yNyk7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgLT0gMTtcclxuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoMTIsIC0yNyk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25TYWx0bzU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMTMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy5ubzUuc2V0UG9zaXRpb24oLTM5LCAxMDMpO1xyXG4gICAgICAgIHRoaXMuc2FsdG9zIC09IDE7XHJcbiAgICAgICAgdGhpcy5tb3ZlUGxheWVyKC0zOSwgMTAzKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblNhbHRvNjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigxMzIwLCAtMTMwKTtcclxuICAgICAgICB0aGlzLnNvbWVOb3MoKTtcclxuICAgICAgICB0aGlzLm5vNi5zZXRQb3NpdGlvbigxOTMsIDExNSk7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgLT0gMTtcclxuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoMTkzLCAxMTUpO1xyXG4gICAgICAgIHRoaXMucHJvZmVzc29yRnJlbnRlLnNldFBvc2l0aW9uKC0xOTksIDApO1xyXG4gICAgICAgIHRoaXMuY29udFRleHRvID0gMjA7XHJcbiAgICB9LFxyXG4gICAgIFxyXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wcm9mZXNzb3JGcmVudGUuc2V0UG9zaXRpb24oLTE5OSwgMCk7XHJcbiAgICAgICAgLy90aGlzLmNvbnRUZXh0byA9IDIwO1xyXG4gICAgICAgIHRoaXMuc29tZU5vcygpO1xyXG4gICAgICAgIHRoaXMudGV4dG9GYXNlMS5zdHJpbmcgPSBcIkluZmVsaXptZW50ZSBhIG1lbnNhZ2VtIHNlIHBlcmRldVxcblwiK1xyXG4gICAgICAgICAgICBcImNsaXF1ZSBlbSBjb250aW51YXIgZSB0ZW50ZSBub3ZhbWVudGUhXCI7XHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT0gMTApe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICB0aGlzLmNyaWFMaW5oYSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc2FsdG9zID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9IFwiU2FsdG9zOiBcIisgdGhpcy5zYWx0b3M7XHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9mZXNzb3I6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dG9GYXNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBiZzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm8yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm81OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vNjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0YWJSb3Q6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3NvckZyZW50ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGUxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBhY290ZTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFjb3RlMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2UxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0YWJyb3Q6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFjb3RlQToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGVCOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBhY290ZUM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFjb3RlQUNvcnJldG86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFjb3RlQkNvcnJldG86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFjb3RlQ0NvcnJldG86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgTGJsQWNlcnRvczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgTGJsRXJyb3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIExibE9yZGVtQ29ycmV0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYWNlcnRvczogMCxcclxuICAgICAgICBcclxuICAgICAgICBlcnJvczogMCxcclxuICAgICAgICBcclxuICAgICAgICBjb250VGV4dG86IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcm90ZWFtZW50b3M6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMTogMCxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24yOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjM6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnJhbmNvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGF6dWw6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmVyZGU6IDAsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY2VydG9zID0gMDtcclxuICAgICAgICB0aGlzLmVycm9zID0gMDtcclxuICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3RlYW1lbnRvcyA9IDA7XHJcbiAgICAgICAgdGhpcy5idXR0b24xID0gMDtcclxuICAgICAgICB0aGlzLmJ1dHRvbjIgPSAwO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMyA9IDA7XHJcbiAgICAgICAgdGhpcy5icmFuY28gPSAwO1xyXG4gICAgICAgIHRoaXMuYXp1bCA9IDA7XHJcbiAgICAgICAgdGhpcy52ZXJkZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJOZXNzZSBNaW5pLUpvZ28sIHZvY2UgYXByZW5kZXJhIGNvbW8gbyBwYWNvdGVcXG5cIisgXHJcbiAgICAgICAgICAgIFwidHJhZmVnYSBuYSByZWRlLCBhdHJhdmVzIGRvIFRDUFwiO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZU5vczogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vMS5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vMi5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vMy5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNC5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNS5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNi5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFwYXJlY2VOb3M6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ubzEuc2V0UG9zaXRpb24oLTI0MCwgLTE4MSk7XHJcbiAgICAgICAgdGhpcy5ubzIuc2V0UG9zaXRpb24oLTE4MSwgLTYpO1xyXG4gICAgICAgIHRoaXMubm8zLnNldFBvc2l0aW9uKC0xNSwgLTE4MSk7XHJcbiAgICAgICAgdGhpcy5ubzQuc2V0UG9zaXRpb24oMTIsIC0yNyk7XHJcbiAgICAgICAgdGhpcy5ubzUuc2V0UG9zaXRpb24oLTM5LCAxMDMpO1xyXG4gICAgICAgIHRoaXMubm82LnNldFBvc2l0aW9uKDE5MywgMTE1KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFwYXJlY2VQYWNvdGVzMTogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYodGhpcy5wYWNvdGUxLnggPT0gMjEzICYmIHRoaXMucGFjb3RlMS55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxNTksIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnNldFBvc2l0aW9uKDIxNSwgMTE3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYWNvdGUzLnggPT0gMjAzICYmIHRoaXMucGFjb3RlMy55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQy5zZXRQb3NpdGlvbigtMywgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMuc2V0UG9zaXRpb24oMjA1LDExNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGFjb3RlMi54ID09IDE5MyAmJiB0aGlzLnBhY290ZTIueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oLTE2NSwgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIuc2V0UG9zaXRpb24oMTk1LCAxMTcpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXBhcmVjZVBhY290ZXMyOiBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZih0aGlzLnBhY290ZTMueCA9PSAyMTMgJiYgdGhpcy5wYWNvdGUzLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKDE1OSwgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMuc2V0UG9zaXRpb24oMjE1LCAxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTIueCA9PSAyMDMgJiYgdGhpcy5wYWNvdGUyLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKC0zLCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5zZXRQb3NpdGlvbigyMDUsMTE3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYWNvdGUxLnggPT0gMTkzICYmIHRoaXMucGFjb3RlMS55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigtMTY1LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigxOTUsIDExNyk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhcGFyZWNlUGFjb3RlczM6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKHRoaXMucGFjb3RlMS54ID09IDIxMyAmJiB0aGlzLnBhY290ZTEueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUEuc2V0UG9zaXRpb24oMTU5LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigyMTUsIDExNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGFjb3RlMi54ID09IDIwMyAmJiB0aGlzLnBhY290ZTIueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oLTMsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnNldFBvc2l0aW9uKDIwNSwxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTMueCA9PSAxOTMgJiYgdGhpcy5wYWNvdGUzLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKC0xNjUsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUzLnNldFBvc2l0aW9uKDE5NSwgMTE3KTtcclxuICAgICAgICB9ICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFwYXJlY2VQYWNvdGVzNDogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYodGhpcy5wYWNvdGUyLnggPT0gMjEzICYmIHRoaXMucGFjb3RlMi55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigxNTksIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnNldFBvc2l0aW9uKDIxNSwgMTE3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYWNvdGUzLnggPT0gMjAzICYmIHRoaXMucGFjb3RlMy55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQy5zZXRQb3NpdGlvbigtMywgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMuc2V0UG9zaXRpb24oMjA1LDExNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGFjb3RlMS54ID09IDE5MyAmJiB0aGlzLnBhY290ZTEueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUEuc2V0UG9zaXRpb24oLTE2NSwgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEuc2V0UG9zaXRpb24oMTk1LCAxMTcpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXBhcmVjZVBhY290ZXM1OiBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZih0aGlzLnBhY290ZTEueCA9PSAyMTMgJiYgdGhpcy5wYWNvdGUxLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDE1OSwgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEuc2V0UG9zaXRpb24oMjE1LCAxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTMueCA9PSAyMDMgJiYgdGhpcy5wYWNvdGUzLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKC0zLCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigyMDUsMTE3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYWNvdGUyLnggPT0gMTkzICYmIHRoaXMucGFjb3RlMi55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigtMTY1LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5zZXRQb3NpdGlvbigxOTUsIDExNyk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtb3ZlUGFjb3RlMTogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgdmFyIHBhY290ZTExID0gY2MubW92ZVRvKDQsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICB2YXIgcGFjb3RlMTIgPSBjYy5tb3ZlVG8oNCwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgIHZhciBwYWNvdGUxMyA9IGNjLm1vdmVUbyg0LCBjYy5wKDIxMywgMTE1KSk7XHJcbiAgICAgICAgdGhpcy5wYWNvdGUxLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUxMSxwYWNvdGUxMixwYWNvdGUxMykpO1xyXG4gICAgICAgIHZhciBwYWNvdGUyMSA9IGNjLm1vdmVUbygyLCBjYy5wKDEyLCAtMzcpKTtcclxuICAgICAgICB2YXIgcGFjb3RlMjIgPSBjYy5tb3ZlVG8oMiwgY2MucCgxOTMsIDExNSkpO1xyXG4gICAgICAgIHRoaXMucGFjb3RlMi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMjEscGFjb3RlMjIpKTtcclxuICAgICAgICB2YXIgcGFjb3RlMzEgPSBjYy5tb3ZlVG8oMiwgY2MucCgxMiwgLTI3KSk7XHJcbiAgICAgICAgdmFyIHBhY290ZTMyID0gY2MubW92ZVRvKDIsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICB2YXIgcGFjb3RlMzMgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgIHZhciBwYWNvdGUzNCA9IGNjLm1vdmVUbygyLCBjYy5wKDIwMywgMTE1KSk7XHJcbiAgICAgICAgdGhpcy5wYWNvdGUzLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUzMSxwYWNvdGUzMixwYWNvdGUzMyxwYWNvdGUzNCkpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW92ZVBhY290ZTI6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gMSl7XHJcbiAgICAgICAgICAgIHZhciBwYWNvdGUzMSA9IGNjLm1vdmVUbyg0LCBjYy5wKC0xODEsIC02KSk7XHJcbiAgICAgICAgICAgIHZhciBwYWNvdGUzMiA9IGNjLm1vdmVUbyg0LCBjYy5wKC0zOSwgMTAzKSk7XHJcbiAgICAgICAgICAgIHZhciBwYWNvdGUzMyA9IGNjLm1vdmVUbyg0LCBjYy5wKDIxMywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMzEscGFjb3RlMzIscGFjb3RlMzMpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTExID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0zNykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMTIgPSBjYy5tb3ZlVG8oMiwgY2MucCgxOTMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTExLHBhY290ZTEyKSk7XHJcbiAgICAgICAgICAgIHZhciBwYWNvdGUyMSA9IGNjLm1vdmVUbygyLCBjYy5wKDEyLCAtMjcpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTIyID0gY2MubW92ZVRvKDIsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTIzID0gY2MubW92ZVRvKDIsIGNjLnAoLTM5LCAxMDMpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTI0ID0gY2MubW92ZVRvKDIsIGNjLnAoMjAzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUyMSxwYWNvdGUyMixwYWNvdGUyMyxwYWNvdGUyNCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnJvdGVhbWVudG9zID09IDIpe1xyXG4gICAgICAgICAgICBwYWNvdGUxMSA9IGNjLm1vdmVUbyg0LCBjYy5wKC0xODEsIC02KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTEyID0gY2MubW92ZVRvKDQsIGNjLnAoLTM5LCAxMDMpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTEzID0gY2MubW92ZVRvKDQsIGNjLnAoMjEzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUxMSxwYWNvdGUxMixwYWNvdGUxMykpO1xyXG4gICAgICAgICAgICBwYWNvdGUzMSA9IGNjLm1vdmVUbygyLCBjYy5wKDEyLCAtMzcpKTtcclxuICAgICAgICAgICAgcGFjb3RlMzIgPSBjYy5tb3ZlVG8oMiwgY2MucCgxOTMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTMxLHBhY290ZTMyKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTIxID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0yNykpO1xyXG4gICAgICAgICAgICBwYWNvdGUyMiA9IGNjLm1vdmVUbygyLCBjYy5wKC0xODEsIC02KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTIzID0gY2MubW92ZVRvKDIsIGNjLnAoLTM5LCAxMDMpKTtcclxuICAgICAgICAgICAgcGFjb3RlMjQgPSBjYy5tb3ZlVG8oMiwgY2MucCgyMDMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTIxLHBhY290ZTIyLHBhY290ZTIzLHBhY290ZTI0KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gMyl7XHJcbiAgICAgICAgICAgIHBhY290ZTIxID0gY2MubW92ZVRvKDQsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICAgICAgcGFjb3RlMjIgPSBjYy5tb3ZlVG8oNCwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgICAgICBwYWNvdGUyMyA9IGNjLm1vdmVUbyg0LCBjYy5wKDIxMywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMjEscGFjb3RlMjIscGFjb3RlMjMpKTtcclxuICAgICAgICAgICAgcGFjb3RlMTEgPSBjYy5tb3ZlVG8oMiwgY2MucCgxMiwgLTM3KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTEyID0gY2MubW92ZVRvKDIsIGNjLnAoMTkzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUxMSxwYWNvdGUxMikpO1xyXG4gICAgICAgICAgICBwYWNvdGUxMSA9IGNjLm1vdmVUbygyLCBjYy5wKDEyLCAtMjcpKTtcclxuICAgICAgICAgICAgcGFjb3RlMTIgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMTgxLCAtNikpO1xyXG4gICAgICAgICAgICBwYWNvdGUxMyA9IGNjLm1vdmVUbygyLCBjYy5wKC0zOSwgMTAzKSk7XHJcbiAgICAgICAgICAgIHZhciBwYWNvdGUxNCA9IGNjLm1vdmVUbygyLCBjYy5wKDIwMywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMTEscGFjb3RlMTIscGFjb3RlMTMscGFjb3RlMTQpKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSA0KXtcclxuICAgICAgICAgICAgcGFjb3RlMTEgPSBjYy5tb3ZlVG8oNCwgY2MucCgtMTgxLCAtNikpO1xyXG4gICAgICAgICAgICBwYWNvdGUxMiA9IGNjLm1vdmVUbyg0LCBjYy5wKC0zOSwgMTAzKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTEzID0gY2MubW92ZVRvKDQsIGNjLnAoMjEzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUxMSxwYWNvdGUxMixwYWNvdGUxMykpO1xyXG4gICAgICAgICAgICBwYWNvdGUyMSA9IGNjLm1vdmVUbygyLCBjYy5wKDEyLCAtMzcpKTtcclxuICAgICAgICAgICAgcGFjb3RlMjIgPSBjYy5tb3ZlVG8oMiwgY2MucCgxOTMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTIxLHBhY290ZTIyKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTMxID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0yNykpO1xyXG4gICAgICAgICAgICBwYWNvdGUzMiA9IGNjLm1vdmVUbygyLCBjYy5wKC0xODEsIC02KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTMzID0gY2MubW92ZVRvKDIsIGNjLnAoLTM5LCAxMDMpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTM0ID0gY2MubW92ZVRvKDIsIGNjLnAoMjAzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUzLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUzMSxwYWNvdGUzMixwYWNvdGUzMyxwYWNvdGUzNCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhVGV4dG8xOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udFRleHRvID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIFRDUCDDqSB1bSBwcm90b2NvbG8gZGUgbsOtdmVsXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZGEgY2FtYWRhIGRlIHRyYW5zcG9ydGUuIE8gUHJvdG9jb2xvIGRlIGNvbnRyb2xlIGRlXFxuXCIrXHJcbiAgICAgICAgICAgIFwidHJhbnNtaXNzw6NvIHByb3bDqiBjb25maWFiaWxpZGFkZSwgZW50cmVnYSBuYSBzZXF1ZW5jaWFcIjsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcImNvcnJldGEgZSB2ZXJpZmljYcOnw6NvIGRlIGVycm9zIHBhY290ZXNcXG5cIitcclxuICAgICAgICAgICAgXCJkZSBkYWRvcywgZW50cmUgb3MgZGlmZXJlbnRlcyBuw7NzIGRhIHJlZGVcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTm8gbWluaSBqb2dvIGEgc2VndWlyLCBjYWRhIGJvbGluaGEgdmVyZGVcXG5cIitcclxuICAgICAgICAgICAgXCJyZXByZXNlbnRhIHVtIG7DsyBuYSByZWRlLCBvIG9iamV0aXZvIGRvIGpvZ28gw6lcXG5cIitcclxuICAgICAgICAgICAgXCJvcmdhbml6YXIgbyBwYWNvdGUgcXVlIHNhaSBkYSBzdWEgb3JpZ2VtIGUgY2hlZ2EgYW8gc2V1IGRlc3Rpbm9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiUGFyYSBpc3NvIGV4aXN0ZSBvIFJJUFxcblwiKyBcclxuICAgICAgICAgICAgXCIoUm91dGluZyBJbmZvcm1hdGlvbiBQcm90b2NvbCkgcXVlIMOpIHVtIHBhZHLDo28gcGFyYVxcblwiK1xyXG4gICAgICAgICAgICBcInRyb2NhIGRlIGluZm9ybWHDp8O1ZXMgZW50cmUgb3MgZ2F0ZXdheXMgZSBob3N0cyBkZSByb3RlYW1lbnRvLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBIHJlZGUgbXVuZGlhbCBkZSBjb21wdXRhZG9yZXMgw6kgb3JnYW5pemFkYVxcblwiK1xyXG4gICAgICAgICAgICBcImNvbW8gdW0gY29uanVudG8gZGUgc2lzdGVtYXMgYXV0w7Rub21vcy5cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTyBSSVAgZW1pdGUgbWVuc2FnZW5zIGRlIGF0dWFsaXphw6fDo29cXG5cIitcclxuICAgICAgICAgICAgXCJkYXMgc3VhcyByb3RhcyAoVGFiZWxhcyBkZSBSb3RlYW1lbnRvKSBlbSBpbnRlcnZhbG9zIHJlZ3VsYXJlc1xcblwiK1xyXG4gICAgICAgICAgICBcIihhIGNhZGEgMzAgc2VndW5kb3MpIGUgcXVhbmRvIGEgdG9wb2xvZ2lhIGRhIHJlZGUgbXVkYXIuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDYpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk9zIHJvdGVhZG9yZXMgZG8gUklQIG1hbnTDqm0gc29tZW50ZVxcblwiK1xyXG4gICAgICAgICAgICBcImEgbWVsaG9yIHJvdGEgw6AgdW0gZGVzdGluby5cXG5cIitcclxuICAgICAgICAgICAgXCJjb20gZXNzYXMgaW5mb3JtYcOnw7VlcyBlbSBtZW50ZSwgdmFtb3MgYW8gbWluaS1qb2dvXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDcpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk5lc3NlIGNlbmFyaW8sIGEgaW5mb3JtYcOnYW8gdmlhamFyYVxcblwiK1xyXG4gICAgICAgICAgICBcImRvIHJvdGVhZG9yIDEgYW8gcm90ZWFkb3IgNiwgbmVzc2UgbWluaS1qb2dvXFxuXCIrXHJcbiAgICAgICAgICAgIFwibyBzZXUgb2JqZXRpdm8gZSBjb2xvY2FyIG9zIHBhY290ZXMgbmEgb3JkZW0gY29ycmV0YVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA4KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJ2aXN1YWxpemUgYSBvcmRlbSBkZSBjaGVnYWRhIGRvcyBwYWNvdGVzXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZSBvcyBvcmdhbml6ZSwgY2xpY2FuZG8gbmVsZXMsIG5hIG9yZGVtIGNvcnJldGFcXG5cIitcclxuICAgICAgICAgICAgXCJkZW1vbnN0cmFkYSBubyBjYW50byBzdXBlcmlvciBkYSB0ZWxhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlRhbWJlbSBkZXZlIHNlciBvYnNlcnZhZG9cXG5cIitcclxuICAgICAgICAgICAgXCJhIG1lbGhvciByb3RhIGEgc2VyIHV0aWxpemFkYVxcblwiK1xyXG4gICAgICAgICAgICBcImNsaXF1ZSBlbSBjb250aW51YXIgcGFyYSBjb21lw6dhclwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmcuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmFwYXJlY2VOb3MoKTtcclxuICAgICAgICAgICAgdGhpcy50YWJyb3Quc2V0UG9zaXRpb24oMzIxLC0xMzApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEuc2V0UG9zaXRpb24oLTI0MCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5zZXRQb3NpdGlvbigtMjMwLCAtMTgxKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUzLnNldFBvc2l0aW9uKC0yMjAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVQYWNvdGUxKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvID0gMjA7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIwKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2UxLnN0cmluZyA9IFwiUGFyYWLDqW5zLCB2b2NlIGNoZWdvdSByb3Rlb3Ugb3MgNSBwYWNvdGVzXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZmF6ZW5kbyBcIit0aGlzLmFjZXJ0b3MrXCIgYWNlcnRvcyBlIFwiK3RoaXMuZXJyb3MrXCIgZXJyb3NcXG5cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjEgJiYgdGhpcy5hY2VydG9zID49IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZTEuc3RyaW5nID0gXCJWb2NlIG9idGV2ZSAzIG91IG1haXMgYWNlcnRvc1xcblwiK1xyXG4gICAgICAgICAgICBcIkNvbSBhcyBpbmZvcm1hw6fDtWVzIHBhc3NhZGFzIG5lc3RhIGZhc2VcXG5cIitcclxuICAgICAgICAgICAgXCJyZXNwb25kYSBhZ29yYSBvIFF1aXohXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBlIGJvYSBzb3J0ZSFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjIgJiYgdGhpcy5hY2VydG9zID49IDMpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTNcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIxICYmIHRoaXMuZXJyb3MgPj0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlMS5zdHJpbmcgPSBcIlZvY2Ugb2J0ZXZlIDMgb3UgbWFpcyBlcnJvc1xcblwiK1xyXG4gICAgICAgICAgICBcInRlbnRlIGFjZXJ0YXIgcGVsbyBtZW5vcyAzIHJvdGVhbWVudG9zXFxuXCIrXHJcbiAgICAgICAgICAgIFwiam9ndWUgbm92YW1lbnRlIVxcblwiK1xyXG4gICAgICAgICAgICBcImNsaXF1ZSBlbSBjb250aW51YXIgZSBib2Egc29ydGUhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIyICYmIHRoaXMuZXJyb3MgPj0gMyl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImpvZ29GYXNlM1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnYW1lT3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLnJvdGVhbWVudG9zID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUEuc2V0UG9zaXRpb24oMTM5MCwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigxMzkwLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKDEzOTAsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEuc2V0UG9zaXRpb24oLTEyNDAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIuc2V0UG9zaXRpb24oLTEyMzAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMuc2V0UG9zaXRpb24oLTEyMjAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3NvckZyZW50ZS5zZXRQb3NpdGlvbigtMTk5LCAwKTtcclxuICAgICAgICAgICAgLy90aGlzLnNvbWVOb3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjb2xvY2FQYWNvdGVzQ29ycmV0b3M6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5yb3RlYW1lbnRvcyA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQUNvcnJldG8uc2V0UG9zaXRpb24oLTEwNywgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5icmFuY28gPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUJDb3JyZXRvLnNldFBvc2l0aW9uKC0xMiwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5henVsID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDQ29ycmV0by5zZXRQb3NpdGlvbig3NSwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJkZSA9IDM7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQ0NvcnJldG8uc2V0UG9zaXRpb24oLTEwNywgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJkZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQUNvcnJldG8uc2V0UG9zaXRpb24oLTEyLCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmJyYW5jbyA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQkNvcnJldG8uc2V0UG9zaXRpb24oNzUsIC01OCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXp1bCA9IDM7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQUNvcnJldG8uc2V0UG9zaXRpb24oLTEwNywgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5icmFuY28gPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUNDb3JyZXRvLnNldFBvc2l0aW9uKC0xMiwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJkZSA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQkNvcnJldG8uc2V0UG9zaXRpb24oNzUsIC01OCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXp1bCA9IDM7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQUNvcnJldG8uc2V0UG9zaXRpb24oLTEwNywgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5icmFuY28gPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUNDb3JyZXRvLnNldFBvc2l0aW9uKC0xMiwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJkZSA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQkNvcnJldG8uc2V0UG9zaXRpb24oNzUsIC01OCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXp1bCA9IDM7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUFDb3JyZXRvLnNldFBvc2l0aW9uKC0xMDcsIC01OCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnJhbmNvID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCQ29ycmV0by5zZXRQb3NpdGlvbigtMTIsIC01OCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXp1bCA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQ0NvcnJldG8uc2V0UG9zaXRpb24oNzUsIC01OCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyZGUgPSAzO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZlcmlpY2FPcmRlbTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmJ1dHRvbjEgPT0gdGhpcy5icmFuY28gJiYgdGhpcy5idXR0b24yID09IHRoaXMuYXp1bCAmJiBcclxuICAgICAgICB0aGlzLmJ1dHRvbjMgPT0gdGhpcy52ZXJkZSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWNlcnRvcyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnJvdGVhbWVudG9zICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxMzkwLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDEzOTAsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTM5MCwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigtMjQwLCAtMTgxKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnNldFBvc2l0aW9uKC0yMzAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMuc2V0UG9zaXRpb24oLTIyMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVBhY290ZTIoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24xID09PSAwIHx8IHRoaXMuYnV0dG9uMiA9PT0gMCB8fCBcclxuICAgICAgICB0aGlzLmJ1dHRvbjMgPT09IDApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24xICE9IHRoaXMuYnJhbmNvIHx8IHRoaXMuYnV0dG9uMiAhPSB0aGlzLmF6dWwgfHwgXHJcbiAgICAgICAgdGhpcy5idXR0b24zICE9IHRoaXMudmVyZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnJvdGVhbWVudG9zICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxMzkwLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDEzOTAsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTM5MCwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigtMjQwLCAtMTgxKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnNldFBvc2l0aW9uKC0yMzAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMuc2V0UG9zaXRpb24oLTIyMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVBhY290ZTIoKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnRuQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuYnV0dG9uMiA9PT0gMCAmJiB0aGlzLmJ1dHRvbjMgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUEuc2V0UG9zaXRpb24oLTEzOSwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMiA9PSAwICYmIHRoaXMuYnV0dG9uMyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDEyLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24yID09IDEgJiYgdGhpcy5idXR0b24zID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUEuc2V0UG9zaXRpb24oMTIsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjIgPT0gMiAmJiB0aGlzLmJ1dHRvbjMgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMSA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxNjMsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjIgPT0gMSAmJiB0aGlzLmJ1dHRvbjMgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMSA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxNjMsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidG5CdXR0b24yOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuYnV0dG9uMSA9PT0gMCAmJiB0aGlzLmJ1dHRvbjMgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oLTEzOSwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMSA9PSAwICYmIHRoaXMuYnV0dG9uMyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDEyLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24xID09IDEgJiYgdGhpcy5idXR0b24zID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oMTIsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgPT0gMiAmJiB0aGlzLmJ1dHRvbjMgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigxNjMsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgPT0gMSAmJiB0aGlzLmJ1dHRvbjMgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigxNjMsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ0bkJ1dHRvbjM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5idXR0b24xID09PSAwICYmIHRoaXMuYnV0dG9uMiA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQy5zZXRQb3NpdGlvbigtMTM5LCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24xID09IDAgJiYgdGhpcy5idXR0b24yID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTIsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgPT0gMSAmJiB0aGlzLmJ1dHRvbjIgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQy5zZXRQb3NpdGlvbigxMiwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMSA9PSAyICYmIHRoaXMuYnV0dG9uMiA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gMztcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKDE2MywgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMSA9PSAxICYmIHRoaXMuYnV0dG9uMiA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gMztcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKDE2MywgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb2xvY2FQYWNvdGVzQ29ycmV0b3MoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5yb3RlYW1lbnRvcyA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYXBhcmVjZVBhY290ZXMxKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuYXBhcmVjZVBhY290ZXMyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMuYXBhcmVjZVBhY290ZXMzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMuYXBhcmVjZVBhY290ZXM0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMuYXBhcmVjZVBhY290ZXM1KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTGJsQWNlcnRvcy5zdHJpbmcgPSBcIkFjZXJ0b3M6IFwiICsgdGhpcy5hY2VydG9zO1xyXG4gICAgICAgIHRoaXMuTGJsRXJyb3Muc3RyaW5nID0gXCJFcnJvczogXCIgKyB0aGlzLmVycm9zO1xyXG4gICAgfSxcclxufSk7IiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9mZXNzb3I6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9ydGExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBvcnRhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwb3J0YTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9ydGE0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBvcnRhNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjaHJvbWU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlsZXppbGxhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZpcmVmb3g6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2t5cGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGh1bmRlcmJpcmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbXlzcWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dG9GYXNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsYmxQb250dWFjYW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBvbnR1YWNhbzogMCxcclxuICAgICAgICBcclxuICAgICAgICBjb250VGV4dG86IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9ydGE6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGVyZ3VudGE6IDAsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb250dWFjYW8gPSAwO1xyXG4gICAgICAgIHRoaXMuY29udFRleHRvID0gMDtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhID0gMDtcclxuICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkEgY2FtYWRhIGRlIHRyYW5zcG9ydGUgdHJhYmFsaGFcXG5cIitcclxuICAgICAgICBcImNvbSBvIGNvbmNlaXRvIGRlIHNvcXVldGVzKHNvY2tldHMpXCI7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhcGFyZWNlUG9ydGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucG9ydGExLnNldFBvc2l0aW9uKC0zOTIsIDE3Mik7XHJcbiAgICAgICAgdGhpcy5wb3J0YTIuc2V0UG9zaXRpb24oLTIxMywgMTcyKTtcclxuICAgICAgICB0aGlzLnBvcnRhMy5zZXRQb3NpdGlvbigtNDEsIDE3Mik7XHJcbiAgICAgICAgdGhpcy5wb3J0YTQuc2V0UG9zaXRpb24oMTUwLCAxNzIpO1xyXG4gICAgICAgIHRoaXMucG9ydGE1LnNldFBvc2l0aW9uKDM1NiwgMTcyKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNvbWVQb3J0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wb3J0YTEuc2V0UG9zaXRpb24oLTEzNDksIDApO1xyXG4gICAgICAgIHRoaXMucG9ydGEyLnNldFBvc2l0aW9uKC0xMzQ5LCAwKTtcclxuICAgICAgICB0aGlzLnBvcnRhMy5zZXRQb3NpdGlvbigtMTM0OSwgMCk7XHJcbiAgICAgICAgdGhpcy5wb3J0YTQuc2V0UG9zaXRpb24oLTEzNDksIDApO1xyXG4gICAgICAgIHRoaXMucG9ydGE1LnNldFBvc2l0aW9uKC0xMzQ5LCAwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNvbWVJY29uZXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5za3lwZS5zZXRQb3NpdGlvbigtMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5maXJlZm94LnNldFBvc2l0aW9uKC0xMzYwLCAwKTtcclxuICAgICAgICB0aGlzLmNocm9tZS5zZXRQb3NpdGlvbigtMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5maWxlemlsbGEuc2V0UG9zaXRpb24oLTEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMudGh1bmRlcmJpcmQuc2V0UG9zaXRpb24oLTEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubXlzcWwuc2V0UG9zaXRpb24oLTEzNjAsIDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FUZXh0bzE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlVtIHNvcXVldGUgZGUgcmVkZSDDqSB1bSBwb250byBmaW5hbCBkZSB1bSBmbHV4byBkZSBjb211bmljYcOnw6NvIFxcblwiK1xyXG4gICAgICAgICAgICBcImVudHJlIHByb2Nlc3NvcyBhdHJhdsOpcyBkZSB1bWEgcmVkZSBkZSBjb21wdXRhZG9yZXMuIEhvamUgZW0gZGlhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYSBtYWlvcmlhIGRhIGNvbXVuaWNhw6fDo28gZW50cmUgY29tcHV0YWRvcmVzIMOpIGJhc2VhZGEgbm8gSVBcIjsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcInBvcnRhbnRvIGEgbWFpb3JpYSBkb3Mgc29xdWV0ZXMgZGUgcmVkZSBzw6NvIHNvcXVldGVzIElQLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJVbSBlbmRlcmXDp28gZGUgc29xdWV0ZSDDqSBhIGNvbWJpbmHDp8OjbyBkZSB1bSBlbmRlcmXDp28gZGUgSVAgZSB1bVxcblwiK1xyXG4gICAgICAgICAgICBcIm7Dum1lcm8gZGEgcG9ydGEsIHBhcmVjaWRvIGNvbSBvIGZpbmFsIGRlIHVtYSBjb25leMOjbyB0ZWxlZsO0bmljYSBxdWUgw6lcXG5cIitcclxuICAgICAgICAgICAgXCJhIGNvbWJpbmHDp8OjbyBkZSB1bSBuw7ptZXJvIGRlIHRlbGVmb25lIGUgdW1hIGRldGVybWluYWRhIGV4dGVuc8Ojby5cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQ29tIGJhc2UgbmVzc2UgZW5kZXJlw6dvLCBzb3F1ZXRlcyBkZSBpbnRlcm5ldFxcblwiK1xyXG4gICAgICAgICAgICBcImVudHJlZ2FtIHBhY290ZXMgZGUgZGFkb3MgZGUgZW50cmFkYSBwYXJhIG8gcHJvY2Vzc28gb3UgdGhyZWFkXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZGUgYXBsaWNhw6fDo28gYXByb3ByaWFkby5cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiSW5zZXJpZG8gbm8gY29uY2VpdG8gZGUgc29ja2V0cywgdGVtb3MgbyBjb25jZWl0byBkZVxcblwiK1xyXG4gICAgICAgICAgICBcInBvcnRhc1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJQb3J0YSDDqSB1bSBwb250byBmw61zaWNvIChoYXJkd2FyZSkgb3UgbMOzZ2ljbyAoc29mdHdhcmUpIG5vIHF1YWxcXG5cIitcclxuICAgICAgICAgICAgXCJwb2RlbSBzZXIgZmVpdGFzIGNvbmV4w7Vlcywgb3Ugc2VqYSwgdW0gY2FuYWwgYXRyYXbDqXMgZG8gcXVhbCBvcyBkYWRvc1xcblwiK1xyXG4gICAgICAgICAgICBcInPDo28gdHJhbnNmZXJpZG9zIGVudHJlIHVtIGRpc3Bvc2l0aXZvIGRlIGVudHJhZGEgZSBvIHByb2Nlc3NhZG9yXCI7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJvdSBlbnRyZSBvIHByb2Nlc3NhZG9yIGUgdW0gZGlzcG9zaXRpdm8gZGUgc2HDrWRhLlxcblwiK1xyXG4gICAgICAgICAgICBcIk91IGFjZXNzbyBwb3IgZGVudHJvIGUgcG9yIGZvcmEgZG8gY29tcHV0YWRvci5cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVW1hIHBvcnRhIGRlIHNvZnR3YXJlIMOpIHVtYSBjb25leMOjbyB2aXJ0dWFsXFxuXCIrXHJcbiAgICAgICAgICAgIFwicXVlIHBvZGUgc2VyIHVzYWRhIG5hIHRyYW5zbWlzc8OjbyBkZSBkYWRvcy4gQXMgbWFpcyBjb211bnMgc8Ojb1xcblwiK1xyXG4gICAgICAgICAgICBcImFzIHBvcnRhcyBwcm90b2NvbGFkYXMgVENQIGUgVURQXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDgpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkFsZ3VtYXMgcG9ydGFzIGZyZXF1ZW50ZW1lbnRlIHVzYWRhcyBzw6NvOlxcblwiK1xyXG4gICAgICAgICAgICBcIlBvcnRhIDgwOiBwYXJhIHByb3RvY29sb3MgSFRUUFxcblwiK1xyXG4gICAgICAgICAgICBcIlBvcnRhIDgxOiBTa3lwZVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA5KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJQb3J0YSAyMDogcGFyYSBwcm90b2NvbG9zIEZUUFxcblwiK1xyXG4gICAgICAgICAgICBcIlBvcnRhIDExMDogcGFyYSBzZXJ2acOnb3MgUE9QMyhFLU1haWwpXFxuXCIrXHJcbiAgICAgICAgICAgIFwiUG9ydGEgMTE4OiBwYXJhIG8gU1FMLCBlbnRyZSB2w6FyaW9zIG91dHJhc1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQ29tIGVzc2EgaW5mb3JtYcOnw6NvIGVtIG3Do29zXFxuXCIrXHJcbiAgICAgICAgICAgIFwidmFtb3MgYW8gbWluaS1qb2dvXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDExKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDb20gb3MgY29uaGVjaW1lbnRvcyBkZSBwb3J0YXMgcGFzc2Fkb3MgYXTDqSBlbnRhb1xcblwiK1xyXG4gICAgICAgICAgICBcImRpcmVjaW9uZSBvIGljb25lIGRhIGFwbGljYcOnYW8gcGFyYSBhIHBvcnRhIGNvcnJldGFcXG5cIitcclxuICAgICAgICAgICAgXCJwYXJhIGlzc28sIGNsaXF1ZSBuYSBwb3J0YSBwYXJhIHF1YWwgZWxlIGRldmUgc2VndWlyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEyKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJGYcOnYSBhIGFzc29jaWHDp8OjbyBjZXJ0YSA1IHZlemVzXFxuXCIrXHJcbiAgICAgICAgICAgIFwicGFyYSBhdmFuw6dhciBwYXJhIG8gcXVpeiFcXG5cIitcclxuICAgICAgICAgICAgXCJjbGlxdWUgZW0gY29udGludWFyIGUgYm9hIHNvcnRlIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxMyl7XHJcbiAgICAgICAgICAgIHRoaXMuYXBhcmVjZVBvcnRhcygpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3Nvci5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5za3lwZS5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gPSAxOTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMTkpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlBhcmFiw6lucyEhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiVm9jw6ogYWNlcnRvdSBhcyBwb3J0YXMgY29ycmV0YXMhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBlIHbDoSBwYXJhIG8gcXVpeiFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjApe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTRcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBvcnRhODA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHZhbG9ycG9ydGEgPSBcIjgwXCI7XHJcbiAgICAgICAgaWYodGhpcy5wb3J0YSA9PSB2YWxvcnBvcnRhKXtcclxuICAgICAgICAgICAgdGhpcy5wb250dWFjYW8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVJY29uZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBvcnRhODE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHZhbG9ycG9ydGEgPSBcIjgxXCI7XHJcbiAgICAgICAgaWYodGhpcy5wb3J0YSA9PSB2YWxvcnBvcnRhKXtcclxuICAgICAgICAgICAgdGhpcy5wb250dWFjYW8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVJY29uZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBvcnRhMjA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHZhbG9ycG9ydGEgPSBcIjIwXCI7XHJcbiAgICAgICAgaWYodGhpcy5wb3J0YSA9PSB2YWxvcnBvcnRhKXtcclxuICAgICAgICAgICAgdGhpcy5wb250dWFjYW8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVJY29uZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBvcnRhMTEwOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB2YWxvcnBvcnRhID0gXCIxMTBcIjtcclxuICAgICAgICBpZih0aGlzLnBvcnRhID09IHZhbG9ycG9ydGEpe1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5zb21lSWNvbmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcG9ydGExMTg6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHZhbG9ycG9ydGEgPSBcIjExOFwiO1xyXG4gICAgICAgIGlmKHRoaXMucG9ydGEgPT0gdmFsb3Jwb3J0YSl7XHJcbiAgICAgICAgICAgIHRoaXMucG9udHVhY2FvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5zb21lSWNvbmVzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVJY29uZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhUGVyZ3VudGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5wZXJndW50YSA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGEgPSBcIjgxXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGVyZ3VudGEgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGEgPSBcIjgwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY2hyb21lLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBlcmd1bnRhID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRhID0gXCIxMTBcIjtcclxuICAgICAgICAgICAgdGhpcy50aHVuZGVyYmlyZC5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiMjBcIjtcclxuICAgICAgICAgICAgdGhpcy5maWxlemlsbGEuc2V0UG9zaXRpb24oMCwgLTIzNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGVyZ3VudGEgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGEgPSBcIjgxXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2t5cGUuc2V0UG9zaXRpb24oMCwgLTIzNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGVyZ3VudGEgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGEgPSBcIjgwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZWZveC5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiMTE4XCI7XHJcbiAgICAgICAgICAgIHRoaXMubXlzcWwuc2V0UG9zaXRpb24oMCwgLTIzNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGVyZ3VudGEgPT0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGEgPSBcIjgxXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXppbGxhLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBlcmd1bnRhID09IDgpe1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRhID0gXCI4MFwiO1xyXG4gICAgICAgICAgICB0aGlzLmNocm9tZS5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSA5KXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODFcIjtcclxuICAgICAgICAgICAgdGhpcy5za3lwZS5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGEgPSBcIjExMFwiO1xyXG4gICAgICAgICAgICB0aGlzLnRodW5kZXJiaXJkLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhID0gMDtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIHRoaXMubXVkYVBlcmd1bnRhKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wb250dWFjYW8gPj0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yLnNldFBvc2l0aW9uKC0xODQsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVJY29uZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5zb21lUG9ydGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGJsUG9udHVhY2FvLnN0cmluZyA9IFwiQWNlcnRvczogXCIrIHRoaXMucG9udHVhY2FvO1xyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbG9nb1Nvbmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRpbWVyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGR1cmFjYW9Mb2dvOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5sb2dvU29uZywgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdmFpUHJhTWFpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+IHRoaXMuZHVyYWNhb0xvZ28pIHtcclxuICAgICAgICAgICAgdGhpcy52YWlQcmFNYWluKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldE9wYWNpdHkoMCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZXNwb3N0YTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBlcmd1bnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMmI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEzYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTRiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhQ2VydGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFeHRyYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZWxhRmluYWxRdWl6OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNDZXJ0YXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0VycmFkYXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvblRyeUFnYWluOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmYWNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZhbGFxdWl6cHJvZjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRpbWVyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3BDZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcEVycjogMCxcclxuICAgICAgICBcclxuICAgICAgICBzYWlBbmltYWNhbzogMCxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNvbWVSZXNwb3N0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXh0cmEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vc3RyYVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMi5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhUmVzcG9zdGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0yNTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKDExMik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGVyZ3VudGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgIHRoaXMuYXBhcmVjZVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVhaXMgb3MgUERVcyhVbmlkYWRlcyBkZSBcXG4nK1xyXG4gICAgICAgICdkYWRvcyBkZSBwcm90b2NvbG9zKSB1c2Fkb3NcXG4nK1xyXG4gICAgICAgICduYSBjYW1hZGEgZGUgYWNlc3NvIGEgcmVkZT8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdTZWdtZW50byc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0RhdGFncmFtYSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0JpdCBlIFF1YWRyb3MoRnJhbWVzKSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1BhY290ZXMnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgIHRoaXMuYXBhcmVjZVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ0Egb25kYSBzZW5vaWRhbCDDqSBhIHJlcHJlc2VudGHDp8Ojb1xcbicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Z1bmRhbWVudGFsIGRlIHVtIHNpbmFsIGFuYWzDs2dpY28uXFxuJytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIE1hcnF1ZSBhIGFsdGVybmF0aXZhIGFiYWl4byBxdWUgTsODT1xcbicrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcHJlc2VudGEgdW1hIGNhcmFjdGVyw61zdGljYVxcbicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RlIG9uZGEgc2Vub2lkYWwuJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnU2luYWxpemHDp8Ojbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0FtcGxpdHVkZSAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdGcmVxdWVuY2lhL1BlcmlvZG8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdGYXNlJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICB0aGlzLmFwYXJlY2VSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdFbSB1bWEgdHJhbnNtaXNzw6NvIGRpZ2l0YWwgXFxuJytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYW8gaW5mb3JtYXIgcXVlIGV4aXN0ZW1cXG4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc0IG7DrXZlaXMgZGUgc2luYWxpemHDp8OjbyBxdWFudG9zIGJpdHNcXG4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlc3TDo28gc2VuZG8gdHJhZmVnYWRvcyBwb3Igc2luYWw/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnMyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJzInO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICc0JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnMSc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgdGhpcy5hcGFyZWNlUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnTyBzaW5hbCBkaWdpdGFsIMOpIGNhcmFjdGVyaXphZG8gcG9yLi4uOic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1NlciBhbHRlcmFkbyBlbSBjb250w61udW8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdTZXIgdW0gc2luYWwgcXVlIG7Do28gcG9zc3VpIGZhbGhhcyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1RlciB1bSBjb25qdW50byBpbmZpbml0byBkZSB2YWxvcmVzXFxuIG51bSBpbnRlcnZhbG8gZGUgdGVtcG8gcXVhbHF1ZXInO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdQb3NzdWlyIGFwZW5hcyB1bVxcbiBjb25qdW50byBsaW1pdGFkbyBkZSB2YWxvcmVzJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICB0aGlzLmFwYXJlY2VSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdBIGxhdMOqbmNpYSDDqSBjYWxjdWxhZGFcXG4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdHJhdsOpcyBkYSBzb21hIGRlIDQgYXRyYXNvcy5cXG4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXJxdWUgYSBhbHRlcm5hdGl2YSBxdWUgYXByZXNlbnRhXFxuJytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3MgNCBhdHJhc29zIHF1ZSBmb3JtYW0gYSBsYXTDqm5jaWE6JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnQXRyYXNvIGRlIHRyYW5zbWlzc8OjbywgYXRyYXNvIGRlIHByb3BhZ2HDp8Ojb1xcbicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F0cmFzbyBkZSBmaWxhLCBhdHJhc28gZGUgcHJvY2Vzc2FtZW50by4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdBdHJhc28gZGUgc2luYWlzLCBhdHJhc28gZGUgcHJvcGFnYcOnw6NvXFxuJytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXRyYXNvIGRlIGZpbGEsIGF0cmFzbyBkZSBwcm9jZXNzYW1lbnRvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnQXRyYXNvIGRlIHRyYW5zbWlzc8OjbywgYXRyYXNvIGRlIHByb3BhZ2HDp8Ojb1xcbicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F0cmFzbyBkZSByZWNlcMOnw6NvLCBhdHJhc28gZGUgcHJvY2Vzc2FtZW50byc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0F0cmFzbyBkZSBtZW5zYWdlbSwgYXRyYXNvIGRlIHByb3BhZ2HDp8Ojb1xcbicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F0cmFzbyBkZSByZWNlcMOnw6NvLCBhdHJhc28gZGUgcHJvY2Vzc2FtZW50by4nO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BDZXJ0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnNhaUFuaW1hY2FvID0gMTtcclxuICAgICAgICB0aGlzLnJlc3BDZXIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwRXJyYWRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMuc2FpQW5pbWFjYW8gPSAxO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdhbWVvdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGVsYUZpbmFsUXVpei5zZXRQb3NpdGlvblgoMCk7XHJcbiAgICAgICAgaWYodGhpcy5yZXNwQ2VyPj0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVHJ5QWdhaW4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLnN0cmluZyA9ICdQYXJhYsOpbnMhXFxuJytcclxuICAgICAgICAgICAgJ1ZvY8OqIHBhc3NvdSBubyBRdWl6ISc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnQWghIHF1ZSBwZW5hIVxcbicrXHJcbiAgICAgICAgICAgICdWb2PDqiBuw6NvIHBhc3NvdSBubyBRdWl6IVxcbicrIFxyXG4gICAgICAgICAgICAndGVudGUgbm92YW1lbnRlISc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGFzQ2VydGFzLnN0cmluZyA9ICdSZXNwb3N0YXMgY29ycmV0YXM6ICcrdGhpcy5yZXNwQ2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGFzRXJyYWRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIEVycmFkYXM6ICcrdGhpcy5yZXNwRXJyOyBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAxMDAwMDA7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5zYWlBbmltYWNhbyA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyID0gMDtcclxuICAgICAgICB0aGlzLnJlc3BFcnIgPSAwO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGFzKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhcGFyZWNlUmVzcG9zdGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuc2FpQW5pbWFjYW8gPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2FpQW5pbWFjYW8gPSAwO1xyXG4gICAgICAgICAgICB2YXIgcmVzcEVycmFkYTEgPSB0aGlzLnJlc3Bvc3RhRXJyYWRhMWIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciByZXNwRXJyYWRhMiA9IHRoaXMucmVzcG9zdGFFcnJhZGEyYi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHJlc3BFcnJhZGEzID0gdGhpcy5yZXNwb3N0YUVycmFkYTNiLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcmVzcEVycmFkYTQgPSB0aGlzLnJlc3Bvc3RhRXJyYWRhNGIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciByZXNwMSA9IHRoaXMucmVzcG9zdGExLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcmVzcDIgPSB0aGlzLnJlc3Bvc3RhMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHJlc3AzID0gdGhpcy5yZXNwb3N0YTMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHZhciByZXNwNCA9IHRoaXMucmVzcG9zdGE0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcmVzcENlcnRhID0gdGhpcy5yZXNwb3N0YUNlcnRhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcmVzcEV4dHJhID0gdGhpcy5yZXNwb3N0YUV4dHJhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgZmFsYSA9IHRoaXMuZmFsYXF1aXpwcm9mLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgZmFjZSA9IHRoaXMuZmFjZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHByb2Zlc3NvciA9IHRoaXMucHJvZmVzc29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwRXJyYWRhMS5wbGF5QWRkaXRpdmUoJ2FwYXJlY2VSZXNwb3N0YTEnKTtcclxuICAgICAgICAgICAgcmVzcEVycmFkYTIucGxheUFkZGl0aXZlKCdhcGFyZWNlUmVzcG9zdGEyJyk7XHJcbiAgICAgICAgICAgIHJlc3BFcnJhZGEzLnBsYXlBZGRpdGl2ZSgnYXBhcmVjZVJlc3Bvc3RhMycpO1xyXG4gICAgICAgICAgICByZXNwRXJyYWRhNC5wbGF5QWRkaXRpdmUoJ2FwYXJlY2VSZXNwb3N0YTQnKTtcclxuICAgICAgICAgICAgcmVzcDEucGxheUFkZGl0aXZlKCdhcGFyZWNlUmVzcG9zdGExJyk7XHJcbiAgICAgICAgICAgIHJlc3AyLnBsYXlBZGRpdGl2ZSgnYXBhcmVjZVJlc3Bvc3RhMicpO1xyXG4gICAgICAgICAgICByZXNwMy5wbGF5QWRkaXRpdmUoJ2FwYXJlY2VSZXNwb3N0YTMnKTtcclxuICAgICAgICAgICAgcmVzcDQucGxheUFkZGl0aXZlKCdhcGFyZWNlUmVzcG9zdGE0Jyk7XHJcbiAgICAgICAgICAgIGZhbGEucGxheUFkZGl0aXZlKCdhcGFyZWNlRmFsYVByb2Zlc3NvcicpO1xyXG4gICAgICAgICAgICB2YXIgYW5pbWFGYWNlID0gZmFjZS5wbGF5KFwiZmFsYVByb2Zlc3NvcjFcIik7XHJcbiAgICAgICAgICAgIGFuaW1hRmFjZS5zcGVlZCA9IDAuNTtcclxuICAgICAgICAgICAgYW5pbWFGYWNlLnJlcGVhdENvdW50ID0gSW5maW5pdHk7XHJcbiAgICAgICAgICAgIHByb2Zlc3Nvci5wbGF5QWRkaXRpdmUoJ2FuaW1hUHJvZmVzc29yMScpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnNhaUFuaW1hY2FvID09PSAwKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0NyZWRpdHM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiY3JlZGl0c1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1vc3RyYVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGltZXIgPCAxKXtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3Bvc3RhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGVyZ3VudGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhQ2VydGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFeHRyYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZWxhRmluYWxRdWl6OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNDZXJ0YXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0VycmFkYXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvblRyeUFnYWluOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3A6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcENlcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwRXJyOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW9zdHJhUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FSZXNwb3N0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTI1OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZXJndW50YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdBIGNhbWFkYSBJbnRlcm5ldCDDqSByZXNwb25zw6F2ZWwgcG9yLi4uJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnQ29udHJvbGFyIGRlIGZvcm1hIGbDrXNpY2EgbyBhY2Vzc28gYSByZWRlJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnR2VyYXIgZSB0cmFuc21pdGlyIG8gc2luYWwgcGVsbyBtZWlvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnRGVmaW5pciBlIHRyYXRhciBvcyBlbmRlcmXDp29zIGzDs2dpY29zXFxuIGRlIG9yaWdlbS9kZXN0aW5vIG5hIHJlZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdBY2Vzc2FyIGEgcmVkZSBlbSBhcGxpY2HDp8O1ZXMgV2ViJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFsIGRvcyBzZWd1aW50ZXMgbsOjbyDDqSB2ZXJkYWRlaXJvXFxuIHNvYnJlIHVtIGVuZGVyZcOnbyBJUD8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdVbSBlbmRlcmXDp28gSVB2NFxcbiBnZXJhbG1lbnRlIMOpIHJlcHJlc2VudGFkbyBubyBmb3JtYXRvXFxuIGhleGFkZWNpbWFsIHBhcmEgbyB1c3XDoXJpbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1VtIGVuZGVyZcOnbyBJUCDDqSB1bSBlbmRlcmXDp28gbMOzZ2ljbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1VtIGVuZGVyZcOnbyBJUCDDqSBnbG9iYWxtZW50ZVxcbiBleGNsdXNpdm8gZW0gdW1hIHJlZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdVbSBlbmRlcmXDp28gSVAgcG9kZSBzZXIgY29uc2lkZXJhZG9cXG4gY29tbyBjb25zaXN0aW5kbyBkZVxcbiB1bWEgcGFydGUgZGUgcmVkZSBlIHVtYSBwYXJ0ZSBkZSBob3N0JztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFsIGRhcyBzZWd1aW50ZXMgbcOhc2NhcmFzIHBhZHLDo29cXG4gZXN0w6EgaW5jb3JyZXRhPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ03DoXNjYXJhIENsYXNzZSBBIDI1NS4wLjAuMCBvdSAvOCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ03DoXNjYXJhIENsYXNzZSBEIDI1NS4yNTUuMjU1LjI1NSBvdSAvMzInO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdNw6FzY2FyYSBDbGFzc2UgQiAyNTUuMjU1LjAuMCBvdSAvMTYnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdNw6FzY2FyYSBjbGFzc2UgQyAyNTUuMjU1LjI1NS4wIG91IC8yNCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnTyBxdWUgZmF6IG8gQVJQIChBZGRyZXNzIFJlc29sdXRpb24gUHJvdG9jb2wpPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1Jlc29sdmUgZW5kZXJlw6dvcyBNQUNcXG4gcGFyYSBlbmRlcmXDp29zIElQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnUmVzb2x2ZSBvIGNhbXBvIFRZUEVcXG4gcGFyYSBvIGVuZGVyZcOnbyBNQUMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdSZXNvbHZlIG8gZW5kZXJlw6dvIE1BQ1xcbiBwYXJhIG8gY2FtcG8gVFlQRSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1Jlc29sdmUgbyBlbmRlcmXDp28gSVBcXG4gcGFyYSBlbmRlcmXDp28gTUFDJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFsIG8gbnVtZXJvIG3DoXhpbW8gZGUgaG9zdHMgcG9zc8OtdmVpc1xcbiBlbSB1bWEgcmVkZSBjbGFzc2UgQz8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICcyNTQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICcxMjgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICcyNTYnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICc2NCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcENlcnRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucmVzcENlciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BFcnJhZG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZW92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50ZWxhRmluYWxRdWl6LnNldFBvc2l0aW9uWCgwKTtcclxuICAgICAgICBpZih0aGlzLnJlc3BDZXI+PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UcnlBZ2Fpbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ1BhcmFiw6lucyFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogcGFzc291IG5vIFF1aXohJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLnN0cmluZyA9ICdBaCEgcXVlIHBlbmEhXFxuJytcclxuICAgICAgICAgICAgJ1ZvY8OqIG7Do28gcGFzc291IG5vIFF1aXohXFxuJysgXHJcbiAgICAgICAgICAgICd0ZW50ZSBub3ZhbWVudGUhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNDZXJ0YXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBjb3JyZXRhczogJyt0aGlzLnJlc3BDZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNFcnJhZGFzLnN0cmluZyA9ICdSZXNwb3N0YXMgRXJyYWRhczogJyt0aGlzLnJlc3BFcnI7IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDEwMDAwMDtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLnJlc3BDZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciA9IDA7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9DcmVkaXRzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImNyZWRpdHNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3N0cmFSZXNwb3N0YSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnRpbWVyIDwgMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGFzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aW1lciAtPSBkdDtcclxuXHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZXNwb3N0YTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBlcmd1bnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUNlcnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXh0cmE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGVsYUZpbmFsUXVpejoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnYW1lT3Zlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFzQ2VydGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNFcnJhZGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b25UcnlBZ2Fpbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRpbWVyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3BDZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcEVycjogMCxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNvbWVSZXNwb3N0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXh0cmEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vc3RyYVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMi5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhUmVzcG9zdGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0yNTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKDExMik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGVyZ3VudGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnQSBjYW1hZGEgdHJhbnNwb3J0ZSDDqSByZXNwb25zw6F2ZWwgcG9yLi4uJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnR2VyZW5jaWFyIG9zIHBhY290ZXMgbmEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0dlcmFyIGUgdHJhbnNtaXRpciBvIHNpbmFsIHBlbG8gbWVpbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0VzdGFiZWxlY2VyIHVtYSBjb25leMOjbyBmaW0gYSBmaW1cXG4gKGNvbmV4w6NvIGNvbmZpw6F2ZWwpZW50cmUgZHVhcyBhcGxpY2HDp8O1ZXMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdBY2Vzc2FyIGEgcmVkZSBlbSBhcGxpY2HDp8O1ZXMgV2ViJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFsIGRlc3RlcyBwcm90b2NvbG9zIG7Do28gcGVydGVuY2VcXG4gYSBjYW1hZGEgZGUgdHJhbnNwb3J0ZT8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdBUlAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdUQ1AnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdVRFAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdTQ1RQJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFsIGEgb3JkZW0gY29ycmV0YVxcbiBkbyBwcm90b2NvbG8gVGhyZWUgV2F5IEhhbmRzaGFrZVxcbiBkbyBUQ1AvSVA/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnU1lOLCBTWU4tU1lOLCBBQ0stQUNLJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnU1lOLCBTWU4tQUNLLCBBQ0snO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdBQ0ssIEFDSy1TWU4sIFNZTic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1NZTiwgQUNLLVNZTiwgQUNLJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdOYSBjYW1hZGEgZGUgdHJhbnNwb3J0ZVxcbiBvIHByb3RvY29sbyBwYXJhIGdhcmFudGlyXFxuIGEgY29uZmlhYmlsaWRhZGUgZS4uLj8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdJUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0ZUUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0hUVFAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdUQ1AnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ09zIHByb3RvY29sb3MgZGUgY2FtYWRhIGRlIHRyYW5zcG9ydGVcXG4gcXVlIGVzdGFiZWxlY2VtIHVtYSBjb25leMOjbyBjb20gb3V0cm8gbsOzXFxuIGFudGVzIGRlIGNvbWXDp2FyZW0gYSB0cmFuc21pdGlyIGRhZG9zXFxuIHPDo28gY29uaGVjaWRvcyBjb21vID8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdQcm90b2NvbG9zIG9yaWVudGFkb3Mgw6AgY29uZXjDo28nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdQcm90b2NvbG9zIHNlbSBjb25leMOjbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1Byb3RvY29sb3Mgb3JpZW50YWRvcyBhIFN5bic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1Byb3RvY29sb3Mgb3JpZW50YWRvcyBwYXJhIEFjayc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcENlcnRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucmVzcENlciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BFcnJhZG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZW92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50ZWxhRmluYWxRdWl6LnNldFBvc2l0aW9uWCgwKTtcclxuICAgICAgICBpZih0aGlzLnJlc3BDZXI+PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UcnlBZ2Fpbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ1BhcmFiw6lucyFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogcGFzc291IG5vIFF1aXohJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLnN0cmluZyA9ICdBaCEgcXVlIHBlbmEhXFxuJytcclxuICAgICAgICAgICAgJ1ZvY8OqIG7Do28gcGFzc291IG5vIFF1aXohXFxuJysgXHJcbiAgICAgICAgICAgICd0ZW50ZSBub3ZhbWVudGUhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNDZXJ0YXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBjb3JyZXRhczogJyt0aGlzLnJlc3BDZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNFcnJhZGFzLnN0cmluZyA9ICdSZXNwb3N0YXMgRXJyYWRhczogJyt0aGlzLnJlc3BFcnI7IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDEwMDAwMDtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLnJlc3BDZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciA9IDA7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9DcmVkaXRzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImNyZWRpdHNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3N0cmFSZXNwb3N0YSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnRpbWVyIDwgMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGFzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aW1lciAtPSBkdDtcclxuXHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZXNwb3N0YTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBlcmd1bnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUNlcnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXh0cmE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGVsYUZpbmFsUXVpejoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnYW1lT3Zlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFzQ2VydGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNFcnJhZGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b25UcnlBZ2Fpbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRpbWVyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3BDZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcEVycjogMCxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNvbWVSZXNwb3N0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXh0cmEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vc3RyYVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMi5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhUmVzcG9zdGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0yNTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKDExMik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGVyZ3VudGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnQSBjYW1hZGEgZGUgYXBsaWNhw6fDo28gw6kgcmVzcG9uc8OhdmVsIHBvci4uLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0dlcmVuY2lhciBvcyBwYWNvdGVzIG5hIHJlZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdFc3RhYmVsZWNlciB1bWEgY29uZXjDo28gZmltIGEgZmltXFxuIChjb25leMOjbyBjb25macOhdmVsKWVudHJlIGEgb3JpZ2VtIGUgbyBkZXN0aW5vXFxuIGRvcyBkYWRvcy4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdHZXJlbmNpYXIgb3MgZGl2ZXJzb3MgcHJvdG9jb2xvc1xcbiBkZSBjb211bmljYcOnw6NvIGRhcyBzdWFzIGFwbGljYcOnw7Vlcyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0FjZXNzYXIgYSByZWRlIGVtIGFwbGljYcOnw7VlcyBXZWInO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ05hIGNhbWFkYSBkZSBhcGxpY2HDp8Ojb1xcbiBvIHByb3RvY29sbyBIVFRQIMOpIHJlc3BvbnNhdmVsIHBvci4uLj8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdUcmFuc2ZlcmlyIGhpcGVydGV4dG9zJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnUmVjZWJlciBhcnF1dm9zIGRlIHZpZGVvIGRhIGludGVybmV0ICc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0V4aWJpciBwYWdpbmFzIHdlYic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0JhaXhhciBhcnF1aXZvcyBUb3JyZW50JztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdPIHByb2dyYW1hIEZpbGV6aWxsYSBlIG8gcHJvdG9jb2xvIEZUUFxcbiBzw6NvIHJlc3BvbnNhdmVpcyBwb3IgJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnU2VndXJhbsOnYSBuYSByZWRlJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnVHJhbnNmZXJlbmNpYSBkZSBhcnF1aXZvcyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0FybWF6ZW5hbWVudG8gZW0gbnV2ZW0nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdDcmlwdG9ncmFmaWEgZGUgZGFkb3MnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgZGVzdGVzIMOpIHVtIHByb3RvY29sb1xcbiBkZSBjYW1hZGEgZGUgYXBsaWNhw6fDo28/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnVENQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnSVAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdFdGhlcm5ldCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0hUVFAnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ08gcXVlIHNpZ25pZmljYVxcbiB1bSBjw7NkaWdvIGRlIHN0YXR1cyBIVFRQIGRlIFwiNDA0XCI/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnRXJybyBkZSBwcm90b2NvbG8gJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnRG9jdW1lbnRvIGZvaSBtb3ZpZG8gJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnUmVjdXBlcmHDp8OjbyBiZW0gc3VjZWRpZGEgZG8gZG9jdW1lbnRvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnRG9jdW1lbnRvIG7Do28gZW5jb250cmFkbyAnO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BDZXJ0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BDZXIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwRXJyYWRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9DcmVkaXRzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImNyZWRpdHNcIik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnYW1lb3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRlbGFGaW5hbFF1aXouc2V0UG9zaXRpb25YKDApO1xyXG4gICAgICAgIGlmKHRoaXMucmVzcENlcj49IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRyeUFnYWluLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnUGFyYWLDqW5zIVxcbicrXHJcbiAgICAgICAgICAgICdWb2PDqiBwYXNzb3Ugbm8gUXVpeiEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ0FoISBxdWUgcGVuYSFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogbsOjbyBwYXNzb3Ugbm8gUXVpeiFcXG4nKyBcclxuICAgICAgICAgICAgJ3RlbnRlIG5vdmFtZW50ZSEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0NlcnRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIGNvcnJldGFzOiAnK3RoaXMucmVzcENlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0VycmFkYXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBFcnJhZGFzOiAnK3RoaXMucmVzcEVycjsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMTAwMDAwO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcENlciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyID0gMDtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9zdHJhUmVzcG9zdGEoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy50aW1lciA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVvdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGltZXIgLT0gZHQ7XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVzcG9zdGExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGE0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwZXJndW50YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFDZXJ0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUV4dHJhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRlbGFGaW5hbFF1aXo6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0NlcnRhczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFzRXJyYWRhczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uVHJ5QWdhaW46IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcDogMCxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMCxcclxuICAgICAgICBcclxuICAgICAgICB0aW1lcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwQ2VyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3BFcnI6IDAsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzb21lUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldE9wYWNpdHkoMCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtb3N0cmFSZXNwb3N0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEzLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXh0cmEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVJlc3Bvc3RhczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7Ly9zZWd1bmRhIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0yNTgpOy8vdWx0aW1hIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xNDYpOy8vdGVyY2VpcmEgb3DDp2FvXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTE0Nik7Ly90ZXJjZWlyYSBvcMOnYW9cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpOy8vcHJpbWVpcmEgb3DDp2FvXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNil7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTE4KTsvL3NlZ3VuZGEgb3DDp2FvXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTsvL3ByaW1laXJhIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDgpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0yNTgpOy8vdWx0aW1hIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7Ly9zZWd1bmRhIG9ww6dhb1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBlcmd1bnRhczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1ZXN0YW8gMTpRdWFsIHByb3RvY29sbyDDqSByZXNwb25zw6F2ZWwgcG9yIHJlc29sdmVyXFxuJytcclxuICAgICAgICAnbyBtYXBlYW1lbnRvIGVudHJlIG9zIGVuZGVyZcOnbyBJUFxcbicrXHJcbiAgICAgICAgJ2Ugb3MgZW5kZXJlw6dvcyBNQUMgZGEgcmVkZT8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdUQ1AnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdESENQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnQVJQJzsvL2NvcnJldGFcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnRE5TJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDI6QXNzaW5hbGUgYSBhbHRlcm5hdGl2YSBxdWUgcmVwcmVzZW50YVxcbicrXHJcbiAgICAgICAgJ28gdGFtYW5obyBlbSBieXRlcyBkb3MgY2FtcG9zIGRlIGVuZGVyZcOnbyBNQUNcXG4nK1xyXG4gICAgICAgICdJUHY0IGUgSVB2NiwgcmVzcGVjdGl2YW1lbnRlLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJzQsIDYsIDE2JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnNiwgNCwgMTYnOy8vY29ycmV0YVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICc0OCwgMzIsIDEyOCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJzE2LCAzMiwgNjQnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1ZXN0YW8gMzogTmEgcGlsaGEgVENQL0lQLCBhIGZ1bsOnw6NvIGRlIGVudmlhclxcbicrXHJcbiAgICAgICAgJ2FvIHRyYW5zbWlzc29yIGRhIGluZm9ybWHDp8OjbyB1bWEgY29uZmlybWHDp8Ojb1xcbicrXHJcbiAgICAgICAgJ2RlIHJlY2ViaW1lbnRvIGRhIG1lbnNhZ2VtKGFjaykgw6kgcmVhbGl6YWRhIHBlbGEgY2FtYWRhOic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1RyYW5zcG9ydGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdBY2Vzc28gYSByZWRlJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnQXBsaWNhw6dhbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0ludGVybmV0JzsvL2NvcnJldGFcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDQ6IEFzc2luYWxlIGEgYWx0ZXJuYXRpdmEgcXVlIGNvbnTDqW0gcHJvdG9jb2xvc1xcbicrXHJcbiAgICAgICAgJ2RhcyBjYW1hZGFzIGRlIGVubGFjZSwgcmVkZSwgdHJhbnNwb3J0ZSBlIGFwbGljYcOnw6NvXFxuJytcclxuICAgICAgICAncmVzcGVjdGl2YW1lbnRlLCBkYSBwaWxoYSBkZSBwcm90b2NvbG9zIFRDUC9JUC4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdBUlAsIElQLCBUQ1AsIElQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnUFBQLCBJQ01QLCBVRFAsIFNOTVAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdFdGhlcm5ldCwgUFBQLCBVRFAsIFNTSCc7Ly9jb3JyZXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0V0aGVybmV0LCBETlMsIFRDUCwgU01UUCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVlc3RhbyA1OiBPIGVuZGVyZcOnbyBkZSB1bSByZWN1cnNvIGRpc3BvbsOtdmVsIGVtIHVtYSByZWRlXFxuJytcclxuICAgICAgICAnc2VqYSBuYSBJbnRlcm5ldCBvdSBudW1hIHJlZGUgY29ycG9yYXRpdmEgSW50cmFuZXRcXG4nK1xyXG4gICAgICAgICd0ZW0gYSBzZWd1aW50ZSBlc3RydXR1cmE6JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAncHJvdG9jb2xvOi8vY2FtaW5oby9yZWN1cnNvL23DoXF1aW5hLiAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdwcm90b2NvbG86Ly9jYW1pbmhvL23DoXF1aW5hL3JlY3Vyc28uICc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ3Byb3RvY29sbzovL23DoXF1aW5hL2NhbWluaG8vcmVjdXJzby4gJzsvL2NvcnJldG9cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnbcOhcXVpbmE6Ly9wcm90b2NvbG8vY2FtaW5oby9yZWN1cnNvLiAnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1ZXN0YW8gNjogTmEgY2xhc3NlIHBhZHLDo28gQ1xcbicrXHJcbiAgICAgICAgJ3F1YW50b3MgYnl0ZXMgc8OjbyByZXNlcnZhZG9zIHBhcmEgcmVkZXM/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnMDEgYnl0ZSc7Ly9jb3JyZXRvXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJzAyIGJ5dGVzJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnMDMgYnl0ZXMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICcwNCBieXRlcyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNil7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVlc3RhbyA3OiBDb21vIMOpIGRlbm9taW5hZG8gbyBwcm90b2NvbG9cXG4nKyBcclxuICAgICAgICAnZGUgY29uZmlndXJhw6fDo28gZGluw6JtaWNhIGRlIElQPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0ZUUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0RIQ1AnOy8vY29ycmV0b1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdIVFRQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnRE5TJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA3KXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDg6IFF1YWwgZGV0c2VzIHByb3RvY29sb3Mgw6kgbWFpcyByw6FwaWRvXFxuJytcclxuICAgICAgICAncG9yw6ltIG1lbm9zIGNvbmZpw6F2ZWw/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnVURQJzsvL2NvcnJldG9cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnRlRQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnU1NIJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnVENQJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA4KXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDk6IFF1YWwgw6kgYSBjbGFzc2UgZGUgZW5kZXJlw6dvIElQXFxuJytcclxuICAgICAgICAncXVlIHV0aWxpemEgYSBtw6FzY2FyYSBwYWRyw6NvIDI1NS4yNTUuMC4wPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0EnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdEJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnQyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0InOy8vY29ycmV0YVxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDkpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1ZXN0YW8gMTA6IE8gY29uanVudG8gZm9ybWFkbyBwb3IgdW0gZW5kZXJlw6dvIElQXFxuJytcclxuICAgICAgICAnZSB1bSBuw7ptZXJvIGRlIHBvcnRhIGNvbnN0aXR1aTonO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdVbWEgY29uZXhhbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1VtIHNvY2tldCc7Ly9jb3JyZXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1VtIGRhdGFncmFtYSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ08gZW5kZXJlw6dvIGRlIGdhdGV3YXknO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BDZXJ0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BDZXIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwRXJyYWRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdhbWVvdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGVsYUZpbmFsUXVpei5zZXRQb3NpdGlvblgoMCk7XHJcbiAgICAgICAgaWYodGhpcy5yZXNwQ2VyPj0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVHJ5QWdhaW4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLnN0cmluZyA9ICdQYXJhYsOpbnMhXFxuJytcclxuICAgICAgICAgICAgJ1ZvY8OqIHBhc3NvdSBubyBRdWl6ISc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnQWghIHF1ZSBwZW5hIVxcbicrXHJcbiAgICAgICAgICAgICdWb2PDqiBuw6NvIHBhc3NvdSBubyBRdWl6IVxcbicrIFxyXG4gICAgICAgICAgICAndGVudGUgbm92YW1lbnRlISc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGFzQ2VydGFzLnN0cmluZyA9ICdSZXNwb3N0YXMgY29ycmV0YXM6ICcrdGhpcy5yZXNwQ2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGFzRXJyYWRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIEVycmFkYXM6ICcrdGhpcy5yZXNwRXJyOyBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAxMDAwMDA7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyID0gMDtcclxuICAgICAgICB0aGlzLnJlc3BFcnIgPSAwO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGFzKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvQ3JlZGl0czogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJjcmVkaXRzXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9zdHJhUmVzcG9zdGEoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy50aW1lciA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIENhbWFkYTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgQ2FtYWRhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBDYW1hZGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIENhbWFkYTQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgQ2FtYWRhNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXN0ZUZpbmFsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMCxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZhaVByYUZyZW50ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgICAgICB2YXIgY2FtYWRhMSA9IHRoaXMuQ2FtYWRhMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhMS5wbGF5QWRkaXRpdmUoJ1ByYUZyZW50ZScpO1xyXG4gICAgICAgICAgICB2YXIgY2FtYWRhMiA9IHRoaXMuQ2FtYWRhMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhMi5wbGF5QWRkaXRpdmUoJ1ByYVRyYXMnKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICBjYW1hZGEyID0gdGhpcy5DYW1hZGEyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGEyLnBsYXlBZGRpdGl2ZSgnUHJhRnJlbnRlJyk7XHJcbiAgICAgICAgICAgIHZhciBjYW1hZGEzID0gdGhpcy5DYW1hZGEzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGEzLnBsYXlBZGRpdGl2ZSgnUHJhVHJhcycpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIGNhbWFkYTMgPSB0aGlzLkNhbWFkYTMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTMucGxheUFkZGl0aXZlKCdQcmFGcmVudGUnKTtcclxuICAgICAgICAgICAgdmFyIGNhbWFkYTQgPSB0aGlzLkNhbWFkYTQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTQucGxheUFkZGl0aXZlKCdQcmFUcmFzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICAgICAgY2FtYWRhNCA9IHRoaXMuQ2FtYWRhNC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhNC5wbGF5QWRkaXRpdmUoJ1ByYUZyZW50ZScpO1xyXG4gICAgICAgICAgICB2YXIgY2FtYWRhNSA9IHRoaXMuQ2FtYWRhNS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhNS5wbGF5QWRkaXRpdmUoJ1ByYVRyYXMnKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICBjYW1hZGE1ID0gdGhpcy5DYW1hZGE1LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGE1LnBsYXlBZGRpdGl2ZSgnUHJhRnJlbnRlJyk7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZhaVByYVRyYXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdmFyIGNhbWFkYTUgPSB0aGlzLkNhbWFkYTUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTUucGxheUFkZGl0aXZlKCdQcmFGcmVudGUnKTtcclxuICAgICAgICAgICAgdmFyIGNhbWFkYTQgPSB0aGlzLkNhbWFkYTQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTQucGxheUFkZGl0aXZlKCdQcmFUcmFzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgLT0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICAgICAgY2FtYWRhNCA9IHRoaXMuQ2FtYWRhNC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhNC5wbGF5QWRkaXRpdmUoJ1ByYUZyZW50ZScpO1xyXG4gICAgICAgICAgICB2YXIgY2FtYWRhMyA9IHRoaXMuQ2FtYWRhMy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhMy5wbGF5QWRkaXRpdmUoJ1ByYVRyYXMnKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciAtPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICBjYW1hZGEzID0gdGhpcy5DYW1hZGEzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGEzLnBsYXlBZGRpdGl2ZSgnUHJhRnJlbnRlJyk7XHJcbiAgICAgICAgICAgIHZhciBjYW1hZGEyID0gdGhpcy5DYW1hZGEyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjYW1hZGEyLnBsYXlBZGRpdGl2ZSgnUHJhVHJhcycpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yIC09IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgICAgIGNhbWFkYTIgPSB0aGlzLkNhbWFkYTIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTIucGxheUFkZGl0aXZlKCdQcmFGcmVudGUnKTtcclxuICAgICAgICAgICAgdmFyIGNhbWFkYTEgPSB0aGlzLkNhbWFkYTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNhbWFkYTEucGxheUFkZGl0aXZlKCdQcmFUcmFzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgLT0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgY2FtYWRhMSA9IHRoaXMuQ2FtYWRhMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY2FtYWRhMS5wbGF5QWRkaXRpdmUoJ1ByYUZyZW50ZScpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDE7XHJcblxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZlcmlmaWNhQ29udGFkb3I6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLnNldFBvc2l0aW9uKC0xMzAwLCAwKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLnNldFBvc2l0aW9uKDEzMDAsIDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5zZXRQb3NpdGlvbigtMzY2LCAwKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLnNldFBvc2l0aW9uKDM2NiwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICB0aGlzLnZlcmlmaWNhQ29udGFkb3IoKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9