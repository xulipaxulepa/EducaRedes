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
        }
    },

    mudaButton: function mudaButton() {
        this.button1.setPosition(326, -244);
        this.button2.setPosition(596, -244);
        this.button3.setPosition(596, -244);
        this.button4.setPosition(596, -244);
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
        }
    },

    mudaButton: function mudaButton() {
        this.button1.setPosition(596, -244);
        this.button2.setPosition(596, -244);
        this.button3.setPosition(596, -244);
        this.button4.setPosition(326, -244);
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

        contador: 0
    },

    mudaTexto: function mudaTexto() {
        if (this.contador === 0) {
            this.label.string = 'Rede de computadores e um conjunto de computadores\n' + 'autônomos interconectados por uma única tecnologia.';
            this.contador += 1;
        } else if (this.contador == 1) {
            this.label.string = 'Em rede de computadores existem 2 modelos de protocolos\n' + 'O modelo logico OSI\n' + 'e a arquitetura TCP/IP';
            this.contador += 1;
        } else if (this.contador == 2) {
            this.label.string = 'O modelo OSI se baseia em uma proposta desenvolvida\n' + 'pela ISO (International Standards Organization)\n' + 'como um primeiro passo em direção à padronização\n' + 'internacional dos protocolos empregados nas diversas camadas';
            this.contador += 1;
        } else if (this.contador == 3) {
            this.label.string = 'O modelo OSI possui 7 camadas, sao elas:\n' + 'Física\n' + 'Enlace\n' + 'Redes';
            this.contador += 1;
        } else if (this.contador == 4) {
            this.label.string = 'Transporte\n' + 'Sessão\n' + 'Apresentação\n' + 'Aplicação';
            this.contador += 1;
        } else if (this.contador == 5) {
            this.label.string = 'Do modelo logico OSI surgiu a arquitetura TCP/IP\n' + 'O modelo TCP/IP descreve um conjunto de orientações\n' + 'gerais para a concepção e implementação de protocolos de rede\n' + 'específicos para permitir que haja comunicação através de uma rede.';
            this.contador += 1;
        } else if (this.contador == 6) {
            this.label.string = 'A imagem acima demonstra as peculiaridades\n' + 'de um modelo para o outro';
            this.quadro.setPosition(222, 139);
            this.contador += 1;
        } else if (this.contador == 7) {
            this.label.string = 'Como pode ser visto, a arquitetura TCP/IP\n' + 'Possui 4 camadas e eu irei explicar sobre a primeira';
            this.contador += 1;
        } else if (this.contador == 8) {
            this.quadro.setPosition(1360, 139);
            this.label.string = 'A camada de acesso a rede tem como um dos objetivos\n' + 'gerar e transmitir o sinal pelo meio. Seja a tecnologia\n' + 'Ethernet, Wi-fi, Bluetooth, entre outros.';
            this.contador += 1;
        } else if (this.contador == 9) {
            this.label.string = 'Um dos serviços dessa camada é a modulação\n' + 'da informação através de um sinal\n' + 'analógico ou digital';
            this.contador += 1;
        } else if (this.contador == 10) {
            this.label.string = 'O mini-jogo a seguir, demonstra melhor\n' + 'a diferença entre os sinais e os seus conceitos';
            this.contador += 1;
        } else if (this.contador == 11) {
            cc.director.loadScene("jogoFase1");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.contador = 0;
        this.label.string = 'Ola, eu sou o professor Sinaldo!\n' + 'Eu vou te ensinar sobre rede de computadores\n' + 'arquitetura TCP/IP e a camada de acesso a rede';
    }

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
            this.label.string = 'O proximo mini-jogo demonstra como\n' + 'a mensagem viaja entre varios nos ate chegar em seu destino';
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
            this.label.string = 'A camada de aplicação é responsável\n' + 'pelos protocolos de comunicação com\n' + 'as diferentes aplicações é a interface \n' + 'entre os programas e a arquitetura TCP/IP.';
            this.contador += 1;
        } else if (this.contador == 1) {
            this.label.string = 'o dado é passado do programa de rede\n' + 'no formato usado internamente\n' + 'por essa aplicação';
            this.contador += 1;
        } else if (this.contador == 2) {
            this.label.string = 'Um  exemplo  de  serviço  oferecido\n' + 'nessa  camada  é  o  recebimento  de  arquivosHTTP\n' + '(HyperText Transfer Protocol) para a exibição\n' + 'de páginas Web.';
            this.contador += 1;
        } else if (this.contador == 3) {
            cc.director.loadScene("jogoFase4");
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.contador = 0;
        this.label.string = 'Ola, eu sou o professor Geraldo!\n' + 'Eu vou te ensinar sobre a camada Aplicação';
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
        }

    },

    mudaButton: function mudaButton() {
        this.button1.setPosition(596, -244);
        this.button2.setPosition(326, -244);
        this.button3.setPosition(596, -244);
        this.button4.setPosition(596, -244);
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
    onLoad: function onLoad() {}

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
        }

    },

    mudaButton: function mudaButton() {
        this.button1.setPosition(596, -244);
        this.button2.setPosition(596, -244);
        this.button3.setPosition(326, -244);
        this.button4.setPosition(596, -244);
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

        btnContinuar1: {
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

        fase: 0,

        pontuacao: 0,

        contTexto: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.frentePlayer();
        this.criaAlvo();
        this.pontuacao = 0;
        this.fase = 0;
        this.contTexto = 0;
        this.linhaGameOver.setOpacity(0);
        this.textoFase.string = "Como pode ser visto, a diferença entre os sinais\n" + "e bem perceptivel";
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
        if (this.contTexto === 0) {
            this.textoFase.string = "O sinal analogico e gerado como uma onda\n" + "ja que os valores vao se alterando no intervalo de tempo";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            this.textoFase.string = "Ja o sinal digital e gerado como uma reta\n" + "ja que possui um conjunto de valores em um intervalo de tempo";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            this.textoFase.string = "A camada de acesso a rede tambem fornece\n" + "o serviço de  transformar  um  canal  de transmissão  bruta\n" + "em  uma  linha  que  pareça  livre  de  erros  de  transmissão";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            this.textoFase.string = "Oferecendo enquadramento de bits\n" + "verificaçao de erros e protocolos que garantam a correçao de erros";
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
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

        fase: 0,

        pontuacao: 0,

        contTexto: 0
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
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera a diferença\n" + "entre o sinal analogico e o sinal digital";
    },

    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para cima em diversas velocidades*/
    sobePlayer: function sobePlayer() {
        var sobe = cc.moveBy(3, cc.p(0, 300)).easing(cc.easeCubicActionInOut());
        this.player.runAction(sobe);
    },

    /*Funçoes usadas para chamar a açao de 
    movimentar a corda para baixo em diversas velocidades*/
    descePlayer: function descePlayer() {
        var desce = cc.moveBy(3, cc.p(0, -300)).easing(cc.easeCubicActionInOut());
        this.player.runAction(desce);
    },

    vaiPraFrente: function vaiPraFrente() {
        var frente = cc.moveBy(3, cc.p(100, 0));
        return cc.repeatForever(cc.sequence(frente));
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
        if (this.contTexto === 0) {
            this.textoFase.string = "um  sinal  analógico  é  caracterizado por\n" + "uma equação matemática continua. Quando a entrada muda de um valor para o próximo\n" + "faz isso movendo se através de todos os valores intermediários.";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            this.textoFase.string = "Tente acertar 10 alvos para avançar\n" + "para a proxima etapa";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            this.textoFase.string = "Evite subir demais ou descer demais\n" + "caso isso aconteça, sera Game Over";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            this.textoFase.string = "";
            this.contTexto = 0;
            this.fase = 1;
            this.player.setPosition(-418, 0);
        }
    },

    trocaTexto2: function trocaTexto2() {
        if (this.contTexto == 0) {
            this.textoFase.string = "O sinal digital e gerado como um conjunto de retas\n" + "ja que possui um conjunto limitado de valores em um intervalo de tempo";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            this.textoFase.string = "Tente acertar 10 alvos para avançar\n" + "para a proxima etapa";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            this.textoFase.string = "Evite subir demais ou descer demais\n" + "caso isso aconteça, sera Game Over";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            this.textoFase.string = "Boa Sorte!";
            this.contTexto = 0;
            this.fase = 3;
            this.player.setPosition(-418, 0);
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.fase === 0) {
            this.professor.setPosition(0, -222);
            this.player.setOpacity(0);
        } else if (this.fase == 1) {
            this.player.setOpacity(255);
            this.professor.setPosition(1306, -222);
            this.limitaPlayer();
            this.criaLinha();
            this.pegaAlvo();
            this.passaLinha();
            this.score.string = 'Alvos: ' + this.pontuacao;
        } else if (this.fase == 2) {
            this.professor.setPosition(0, -222);
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
cc._RF.push(module, 'e0c0bW/qaNBc6B7UGzvpdKH', 'logicaFase2');
// scripts/logica fases/logicaFase2.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        bg: {
            default: null,
            type: cc.Node
        },

        bgFase2: {
            default: null,
            type: cc.Node
        },

        professor: {
            default: null,
            type: cc.Node
        },

        textoFase: {
            default: null,
            type: cc.Label
        },

        computador1: {
            default: null,
            type: cc.Node
        },

        computador2: {
            default: null,
            type: cc.Node
        },

        computador3: {
            default: null,
            type: cc.Node
        },

        computador4: {
            default: null,
            type: cc.Node
        },

        computador5: {
            default: null,
            type: cc.Node
        },

        computador6: {
            default: null,
            type: cc.Node
        },

        ip1: {
            default: null,
            type: cc.Node
        },

        ip2: {
            default: null,
            type: cc.Node
        },

        ip3: {
            default: null,
            type: cc.Node
        },

        ip4: {
            default: null,
            type: cc.Node
        },

        ip5: {
            default: null,
            type: cc.Node
        },

        ip6: {
            default: null,
            type: cc.Node
        },

        ip7: {
            default: null,
            type: cc.Node
        },

        ip8: {
            default: null,
            type: cc.Node
        },

        tabRoteamento: {
            default: null,
            type: cc.Node
        },

        roteador1: {
            default: null,
            type: cc.Node
        },

        roteador2: {
            default: null,
            type: cc.Node
        },

        roteador3: {
            default: null,
            type: cc.Node
        },

        cabo1: {
            default: null,
            type: cc.Node
        },

        cabo2: {
            default: null,
            type: cc.Node
        },

        twBG: {
            default: null,
            type: cc.Node
        },

        ipTabela1: {
            default: null,
            type: cc.Label
        },

        ipTabela2: {
            default: null,
            type: cc.Label
        },

        pacote: {
            default: null,
            type: cc.Node
        },

        ipPacote: {
            default: null,
            type: cc.Label
        },

        resultado: {
            default: null,
            type: cc.Label
        },

        pontuacao: 0,

        certo: 0,

        errado: 0,

        contTexto: 0,

        buttonCont1: 0,

        buttonCont2: 0,

        ip: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.ip = "192.168.10.6";
        this.pontuacao = 0;
        this.certo = 0;
        this.errado = 0;
        this.contTexto = 0;
        this.buttonCont1 = 0;
        this.buttonCont2 = 0;
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera a rotear\n" + "pacotes IPs";
    },

    button1: function button1() {
        if (this.buttonCont1 === 0) {
            this.ipTabela1.string = "192.168.10.0    255.255.255.0        200.100.50.1";
            this.buttonCont1 += 1;
        } else if (this.buttonCont1 == 1) {
            var ipbutton = "192.168.10.6";
            this.verificaButton11(ipbutton);
        } else if (this.buttonCont1 == 2) {
            ipbutton = "192.168.10.6";
            this.verificaButton11(ipbutton);
            this.errado += 1;
            this.pontuacao += 1;
            this.ip = "192.168.50.2";
            this.ipPacote.string = "IP:192.168.50.2\n" + "Mask:255.255.255.0";
        } else if (this.buttonCont1 == 3) {
            ipbutton = "192.168.10.6";
            this.verificaButton11(ipbutton);
            this.errado += 1;
            this.pontuacao += 1;
            this.ip = "192.168.10.10";
            this.ipPacote.string = "IP:192.168.10.10\n" + "Mask:255.255.255.0";
        } else if (this.buttonCont1 == 4) {
            ipbutton = "192.168.10.10";
            this.verificaButton11(ipbutton);
            this.certo += 1;
            this.pontuacao += 1;
            this.ip = "192.168.10.50";
            this.ipPacote.string = "IP:192.168.10.50\n" + "Mask:255.255.255.0";
        } else if (this.buttonCont1 == 5) {
            ipbutton = "192.168.10.50";
            this.verificaButton11(ipbutton);
            this.certo += 1;
            this.pontuacao += 1;
            this.ip = "192.168.50.50";
            this.ipPacote.string = "IP:192.168.50.50\n" + "Mask:255.255.255.0";
        } else if (this.buttonCont1 == 6) {
            ipbutton = "192.168.10.50";
            this.verificaButton11(ipbutton);
            this.errado += 1;
            this.pontuacao += 1;
            this.ip = "192.168.50.44";
            this.ipPacote.string = "IP:192.168.50.44\n" + "Mask:255.255.255.0";
        } else if (this.buttonCont1 == 7) {
            ipbutton = "192.168.10.50";
            this.verificaButton11(ipbutton);
            this.errado += 1;
            this.pontuacao += 1;
            this.ip = "";
            this.ipPacote.string = "";
        }
    },

    verificaButton11: function verificaButton11(ipbutton) {
        if (this.ip == ipbutton) {
            this.resultado.string = "acertou";
            this.buttonCont1 += 1;
            this.buttonCont2 += 1;
        } else {
            this.resultado.string = "errou!!";
            this.buttonCont1 += 1;
            this.buttonCont2 += 1;
        }
    },

    button2: function button2() {
        if (this.buttonCont2 === 0) {
            this.ipTabela2.string = "192.168.50.0    255.255.255.0        200.100.50.2";
            this.buttonCont2 += 1;
        } else if (this.buttonCont2 == 1) {
            var ipbutton = "192.168.50.5";
            this.verificaButton21(ipbutton);
        } else if (this.buttonCont2 == 2) {
            ipbutton = "192.168.50.5";
            this.verificaButton21(ipbutton);
            this.certo += 1;
            this.pontuacao += 1;
            this.ip = "192.168.50.2";
            this.ipPacote.string = "IP:192.168.50.2\n" + "Mask:255.255.255.0";
        } else if (this.buttonCont2 == 3) {
            ipbutton = "192.168.50.2";
            this.verificaButton21(ipbutton);
            this.certo += 1;
            this.pontuacao += 1;
            this.ip = "192.168.10.10";
            this.ipPacote.string = "IP:192.168.10.10\n" + "Mask:255.255.255.0";
        } else if (this.buttonCont2 == 4) {
            ipbutton = "192.168.50.2";
            this.verificaButton21(ipbutton);
            this.errado += 1;
            this.pontuacao += 1;
            this.ip = "192.168.10.50";
            this.ipPacote.string = "IP:192.168.10.50\n" + "Mask:255.255.255.0";
        } else if (this.buttonCont2 == 5) {
            ipbutton = "192.168.50.2";
            this.verificaButton21(ipbutton);
            this.errado += 1;
            this.pontuacao += 1;
            this.ip = "192.168.50.50";
            this.ipPacote.string = "IP:192.168.50.50\n" + "Mask:255.255.255.0";
        } else if (this.buttonCont2 == 6) {
            ipbutton = "192.168.50.50";
            this.verificaButton21(ipbutton);
            this.certo += 1;
            this.pontuacao += 1;
            this.ip = "192.168.50.44";
            this.ipPacote.string = "IP:192.168.50.44\n" + "Mask:255.255.255.0";
        } else if (this.buttonCont2 == 7) {
            ipbutton = "192.168.50.44";
            this.verificaButton21(ipbutton);
            this.certo += 1;
            this.pontuacao += 1;
            this.ip = "";
            this.ipPacote.string = "";
        }
    },

    verificaButton21: function verificaButton21(ipbutton) {
        if (this.ip == ipbutton) {
            this.resultado.string = "acertou";
            this.buttonCont1 += 1;
            this.buttonCont2 += 1;
        } else {
            this.resultado.string = "errou!!";
            this.buttonCont1 += 1;
            this.buttonCont2 += 1;
        }
    },

    someCenario: function someCenario() {
        this.computador1.setPosition(1360, 0);
        this.computador2.setPosition(1360, 0);
        this.computador3.setPosition(1360, 0);
        this.computador4.setPosition(1360, 0);
        this.computador5.setPosition(1360, 0);
        this.computador6.setPosition(1360, 0);
        this.ip1.setPosition(1360, 0);
        this.ip2.setPosition(1360, 0);
        this.ip3.setPosition(1360, 0);
        this.ip4.setPosition(1360, 0);
        this.ip5.setPosition(1360, 0);
        this.ip6.setPosition(1360, 0);
        this.ip7.setPosition(1360, 0);
        this.ip8.setPosition(1360, 0);
        this.roteador1.setPosition(1360, 0);
        this.roteador2.setPosition(1360, 0);
        this.roteador3.setPosition(1360, 0);
        this.cabo1.setPosition(1360, 0);
        this.cabo2.setPosition(1360, 0);
    },

    apareceCenario: function apareceCenario() {
        this.computador1.setPosition(-379, 9);
        this.computador2.setPosition(-379, 107);
        this.computador3.setPosition(-379, 217);
        this.computador4.setPosition(391, 217);
        this.computador5.setPosition(391, 107);
        this.computador6.setPosition(391, 9);
        this.ip1.setPosition(187, -590);
        this.ip2.setPosition(-363, 60);
        this.ip3.setPosition(-354, 163);
        this.ip4.setPosition(365, 163);
        this.ip5.setPosition(365, -50);
        this.ip6.setPosition(365, 60);
        this.ip7.setPosition(127, 375);
        this.ip8.setPosition(203, 208);
        this.roteador1.setPosition(-166, 133);
        this.roteador2.setPosition(33, 207);
        this.roteador3.setPosition(201, 133);
        this.cabo1.setPosition(-70, 149);
        this.cabo2.setPosition(140, 142);
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
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
            this.bgFase2.setPosition(0, 0);
            this.textoFase.string = "O cenario acima demonstra uma rede\n" + "com 6 maquinas e 3 roteadores, vamos obersava-la por partes";
            this.contTexto += 1;
        } else if (this.contTexto == 5) {
            this.computador1.setPosition(0, 80);
            this.computador1.setScale(0.2, 0.2);
            this.textoFase.string = "Perceba que esta maquina possui\n" + "um endereço de IP utilizado para redes privadas\n" + "tambem possui uma mascara de rede, representado pela /";
            this.contTexto += 1;
        } else if (this.contTexto == 6) {
            this.textoFase.string = "A mascara de rede identifica\n" + "quantos bits sao de rede e quantos estao\n" + "reservados para host!";
            this.contTexto += 1;
        } else if (this.contTexto == 7) {
            this.computador1.setPosition(-379, 9);
            this.computador1.setScale(0.1, 0.1);
            this.roteador1.setScale(0.3, 0.3);
            this.roteador1.setPosition(0, 100);
            this.textoFase.string = "O roteador neste cenario interliga\n" + "a rede local com a rede externa, para que isso ocorra\n" + "o roteador possui uma tabela de roteamento";
            this.contTexto += 1;
        } else if (this.contTexto == 8) {
            this.textoFase.string = "A tabela de roteamento possui\n" + "o endereço da rede, a sua mascara e a qual interface\n" + "ela esta conectada";
            this.contTexto += 1;
        } else if (this.contTexto == 9) {
            this.textoFase.string = "Vamos ver isso na pratica";
            this.contTexto += 1;
        } else if (this.contTexto == 10) {
            this.tabRoteamento.setPosition(312, 24);
            this.textoFase.string = "A tabela de roteamento e preenchida\n" + "a medida que os pacotes de informaçao\n" + "vao chegando ao roteador";
            this.contTexto += 1;
        } else if (this.contTexto == 11) {
            this.textoFase.string = "O mini-jogo a seguir, te coloca na pele\n" + "do roteador, tendo que preencher a tabela de roteamento\n" + "e entregar os pacotes";
            this.contTexto += 1;
        } else if (this.contTexto == 12) {
            this.someCenario();
            this.roteador2.setPosition(33, 260);
            this.tabRoteamento.setPosition(0, 60);
            this.textoFase.string = "A tabela de roteamento do roteador\n" + "começa vazia, porem, o mesmo envia uma mensagem para\n" + "suas interfaces, a fim de identificar as redes";
            this.contTexto += 1;
        } else if (this.contTexto == 13) {
            this.textoFase.string = "Clique nos botoes para\n" + "identificar as redes e depois clique em continuar!";
            this.ipTabela1.string = "Clique para identificar rede";
            this.ipTabela2.string = "Clique para identificar rede";
            this.contTexto += 1;
        } else if (this.contTexto == 14 && this.buttonCont1 == 1 && this.buttonCont2 == 1) {
            this.textoFase.string = "Com a tabela montada o roteador pode\n" + "começar a distribuir os pacotes, clique na rede\n" + "para onde o pacote deve ir,depois clique em continuar";
            this.pacote.setPosition(300, 50);
            this.ipPacote.string = "IP:192.168.10.6\n" + "Mask:255.255.255.0";
            this.contTexto += 1;
        } else if (this.contTexto == 15) {
            this.textoFase.string = "A rede correta para o envio do pacote era\n" + "a rede 192.168.10.0, o seu erro ou acerto pode ser visto\n" + "em cima do pacote";
            this.contTexto += 1;
        } else if (this.contTexto == 16) {
            this.textoFase.string = "Faça o roteamento para os proximos 5 pacotes\n" + "acerte pelo menos 3 para avançar para o quiz!\n" + "clique em continuar para começar!";
            this.contTexto += 1;
        } else if (this.contTexto == 17) {
            this.ipPacote.string = "IP:192.168.50.5\n" + "Mask:255.255.255.0";
            this.ip = "192.168.50.5";
            this.twBG.setPosition(0, -1360);
            this.contTexto += 1;
        } else if (this.contTexto == 20) {
            cc.director.loadScene("quizFase2");
        } else if (this.contTexto == 21) {
            cc.director.loadScene("jogoFase2");
        }
    },

    passouFase: function passouFase() {
        if (this.pontuacao == 6 && this.certo >= 3) {
            this.contTexto = 20;
            this.twBG.setPosition(-3, -210);
            this.textoFase.string = "Parabens! voce passou de fase\n" + "responda agora as questoes do quiz!\n" + "clique em continuar para prosseguir";
        } else if (this.pontuacao == 6 && this.errado >= 3) {
            this.contTexto = 21;
            this.twBG.setPosition(-3, -210);
            this.textoFase.string = "Que pena! voce nao passou de fase\n" + "reveja a explicaçao e tente novamente!\n" + "clique em continuar para prosseguir";
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.passouFase();
    }
});

cc._RF.pop();
},{}],"logicaFase3":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'a3a26F4L01KDIVBtmM1UXE4', 'logicaFase3');
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

        lblNo1: {
            default: null,
            type: cc.Label
        },

        lblNo2: {
            default: null,
            type: cc.Label
        },

        lblNo3: {
            default: null,
            type: cc.Label
        },

        lblNo4: {
            default: null,
            type: cc.Label
        },

        lblNo5: {
            default: null,
            type: cc.Label
        },

        lblNo6: {
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

        pontuacao: 0,

        contTexto: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.pontuacao = 0;
        this.contTexto = 0;
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

    trocaTexto1: function trocaTexto1() {
        if (this.contTexto === 0) {
            this.textoFase.string = "O TCP é um protocolo de nível\n" + "da camada de transporte. O Protocolo de controle de\n" + "transmissão provê confiabilidade, entrega na sequencia";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            this.textoFase.string = "correta e verificação de erros pacotes\n" + "de dados, entre os diferentes nós da rede";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            this.textoFase.string = "No mini jogo a seguir, cada bolinha verde\n" + "representa um no na rede, o objetivo do jogo e\n" + "levar o pacote da sua origem ao seu destino";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            this.textoFase.string = "Para isso existe o RIP\n" + "(Routing Information Protocol) é um padrão para\n" + "troca de informações entre os gateways e hosts de roteamento.";
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
            this.textoFase.string = "No papel de um pacote, voce tera\n" + "6 saltos para sair do no 1 e chegar ao no 6!\n" + "clique em continuar e boa sorte!!";
            this.contTexto += 1;
        } else if (this.contTexto == 8) {
            this.bg.setOpacity(255);
            this.apareceNos();
        }
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

        textoFase: {
            default: null,
            type: cc.Label
        },

        pontuacao: 0,

        contTexto: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.pontuacao = 0;
        this.contTexto = 0;
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera como o pacote\n" + "trafega na rede, atraves do TCP";
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
            this.contTexto += 1;
        } else if (this.contTexto == 4) {
            this.bgFase2.setPosition(0, 0);
            this.textoFase.string = "O cenario acima demonstra uma rede\n" + "com 6 maquinas e 3 roteadores, vamos obersava-la por partes";
            this.contTexto += 1;
        } else if (this.contTexto == 5) {
            this.computador1.setPosition(0, 80);
            this.computador1.setScale(0.2, 0.2);
            this.textoFase.string = "Perceba que esta maquina possui\n" + "um endereço de IP utilizado para redes privadas\n" + "tambem possui uma mascara de rede, representado pela /";
            this.contTexto += 1;
        } else if (this.contTexto == 6) {
            this.textoFase.string = "A mascara de rede identifica\n" + "quantos bits sao de rede e quantos estao\n" + "reservados para host!";
            this.contTexto += 1;
        } else if (this.contTexto == 7) {
            this.computador1.setPosition(-379, 9);
            this.computador1.setScale(0.1, 0.1);
            this.roteador1.setScale(0.3, 0.3);
            this.roteador1.setPosition(0, 100);
            this.textoFase.string = "O roteador neste cenario interliga\n" + "a rede local com a rede externa, para que isso ocorra\n" + "o roteador possui uma tabela de roteamento";
            this.contTexto += 1;
        } else if (this.contTexto == 8) {
            this.textoFase.string = "A tabela de roteamento possui\n" + "o endereço da rede, a sua mascara e a qual interface\n" + "ela esta conectada";
            this.contTexto += 1;
        } else if (this.contTexto == 9) {
            this.textoFase.string = "Vamos ver isso na pratica";
            this.contTexto += 1;
        } else if (this.contTexto == 10) {
            this.tabRoteamento.setPosition(312, 24);
            this.textoFase.string = "A tabela de roteamento e preenchida\n" + "a medida que os pacotes de informaçao\n" + "vao chegando ao roteador";
            this.contTexto += 1;
        } else if (this.contTexto == 11) {
            this.textoFase.string = "O mini-jogo a seguir, te coloca na pele\n" + "do roteador, tendo que preencher a tabela de roteamento\n" + "e entregar os pacotes";
            this.contTexto += 1;
        } else if (this.contTexto == 12) {
            this.someCenario();
            this.roteador2.setPosition(33, 260);
            this.tabRoteamento.setPosition(0, 60);
            this.textoFase.string = "A tabela de roteamento do roteador\n" + "começa vazia, porem, o mesmo envia uma mensagem para\n" + "suas interfaces, a fim de identificar as redes";
            this.contTexto += 1;
        } else if (this.contTexto == 13) {
            this.textoFase.string = "Clique nos botoes para\n" + "identificar as redes e depois clique em continuar!";
            this.ipTabela1.string = "Clique para identificar rede";
            this.ipTabela2.string = "Clique para identificar rede";
            this.contTexto += 1;
        } else if (this.contTexto == 14 && this.buttonCont1 == 1 && this.buttonCont2 == 1) {
            this.textoFase.string = "Com a tabela montada o roteador pode\n" + "começar a distribuir os pacotes, clique na rede\n" + "para onde o pacote deve ir,depois clique em continuar";
            this.pacote.setPosition(300, 50);
            this.ipPacote.string = "IP:192.168.10.6\n" + "Mask:255.255.255.0";
            this.contTexto += 1;
        } else if (this.contTexto == 15) {
            this.textoFase.string = "A rede correta para o envio do pacote era\n" + "a rede 192.168.10.0, o seu erro ou acerto pode ser visto\n" + "em cima do pacote";
            this.contTexto += 1;
        } else if (this.contTexto == 16) {
            this.textoFase.string = "Faça o roteamento para os proximos 5 pacotes\n" + "acerte pelo menos 3 para avançar para o quiz!\n" + "clique em continuar para começar!";
            this.contTexto += 1;
        } else if (this.contTexto == 17) {
            this.ipPacote.string = "IP:192.168.50.5\n" + "Mask:255.255.255.0";
            this.ip = "192.168.50.5";
            this.twBG.setPosition(0, -1360);
            this.contTexto += 1;
        } else if (this.contTexto == 20) {
            cc.director.loadScene("quizFase2");
        } else if (this.contTexto == 21) {
            cc.director.loadScene("jogoFase2");
        }
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
        timer: 0,

        duracaoLogo: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.timer = 0;
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
            this.pergunta.string = 'A camada de acesso a rede e responsável por...';

            this.resposta1.string = 'Identificar os ips da rede';

            this.resposta2.string = 'Controlar o acesso a rede';

            this.resposta3.string = 'estabeleça efetivamente um link físico\n com os meios físicos da rede.';

            this.resposta4.string = 'Acessar a rede em aplicações Web.';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual desses dispositivos não atua\n na camada de acesso a rede?';

            this.resposta1.string = 'Roteador';

            this.resposta2.string = 'HUB';

            this.resposta3.string = 'Switch';

            this.resposta4.string = 'Nenhuma das opções';
        } else if (this.contador == 2) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'O sinal analógico e caracterizado por...:';

            this.resposta1.string = 'Possuir apenas um\n conjunto limitado de valores';

            this.resposta2.string = 'Ter um conjunto infinito de valores\n num intervalo de tempo qualquer';

            this.resposta3.string = 'Ser alterado em contínuo';

            this.resposta4.string = 'Ser um sinal que não possui falhas';
        } else if (this.contador == 3) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'O sinal digital e caracterizado por...:';

            this.resposta1.string = 'Ser alterado em contínuo';

            this.resposta2.string = 'Ser um sinal que não possui falhas';

            this.resposta3.string = 'Ter um conjunto infinito de valores\n num intervalo de tempo qualquer';

            this.resposta4.string = 'Possuir apenas um\n conjunto limitado de valores';
        } else if (this.contador == 4) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Quais desses elementos\n compõem o básico de uma rede?';

            this.resposta1.string = 'transmissores, receptores e o meio';

            this.resposta2.string = 'protocolos e serviços';

            this.resposta3.string = 'informações e usuários';

            this.resposta4.string = 'computador e cabo de rede';
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
            this.gameOver.string = 'Parabens!\n' + 'Voce passou no Quiz!';
        } else {
            this.gameOver.string = 'Ah! que pena!\n' + 'Voce nao passou no Quiz!\n' + 'tente novamente!';
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
            this.pergunta.string = 'A camada Internet e responsável por...';

            this.resposta1.string = 'Controlar o acesso a rede';

            this.resposta2.string = 'Gerar e transmitir o sinal pelo meio';

            this.resposta3.string = 'Gerenciar os pacotes na rede';

            this.resposta4.string = 'Acessar a rede em aplicações Web';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual dos seguintes não é verdadeiro\n sobre um endereço IP?';

            this.resposta1.string = 'Um endereço IP\n geralmente é representado no formato\n hexadecimal para o usuário';

            this.resposta2.string = 'Um endereço IP é um endereço lógico';

            this.resposta3.string = 'Um endereço IP é globalmente\n exclusivo em uma rede';

            this.resposta4.string = 'Um endereço IP pode ser considerado\n como consistindo de\n uma parte de rede e uma parte de host';
        } else if (this.contador == 2) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual das seguintes máscaras padrão\n para os principais\n números de classe está incorreta?';

            this.resposta1.string = 'Máscara Classe A 255.0.0.0 ou /8';

            this.resposta2.string = 'Máscara Classe D 255.255.255.255 ou /32';

            this.resposta3.string = 'Máscara Classe B 255.255.0.0 ou /16';

            this.resposta4.string = 'Máscara classe C 255.255.255.0 ou /24';
        } else if (this.contador == 3) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'O que faz o ARP (Address Resolution Protocol)?';

            this.resposta1.string = 'Resolve o endereço IP\n para endereço MAC';

            this.resposta2.string = 'Resolve o campo TYPE\n para o endereço MAC';

            this.resposta3.string = 'Resolve o endereço MAC\n para o campo TYPE';

            this.resposta4.string = 'Resolve endereços MAC\n para endereços IP';
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
            this.gameOver.string = 'Parabens!\n' + 'Voce passou no Quiz!';
        } else {
            this.gameOver.string = 'Ah! que pena!\n' + 'Voce nao passou no Quiz!\n' + 'tente novamente!';
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
            this.pergunta.string = 'A camada transporte e responsável por...';

            this.resposta1.string = 'Gerenciar os pacotes na rede';

            this.resposta2.string = 'Gerar e transmitir o sinal pelo meio';

            this.resposta3.string = 'Estabelecer uma conexão fim a fim\n (conexão confiável)entre a origem e o destino\n dos dados';

            this.resposta4.string = 'Acessar a rede em aplicações Web';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual destes protocolos nao pertence\n a camada de transporte?';

            this.resposta1.string = 'ARP';

            this.resposta2.string = 'TCP';

            this.resposta3.string = 'IP';

            this.resposta4.string = 'FTP';
        } else if (this.contador == 2) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual destes dispositivos\n atua na camada de transporte?';

            this.resposta1.string = 'Switch';

            this.resposta2.string = 'Roteador';

            this.resposta3.string = 'HUB';

            this.resposta4.string = 'Nenhuma das opções acima';
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
            this.gameOver.string = 'Parabens!\n' + 'Voce passou no Quiz!';
        } else {
            this.gameOver.string = 'Ah! que pena!\n' + 'Voce nao passou no Quiz!\n' + 'tente novamente!';
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
            this.pergunta.string = 'A camada de aplicação e responsável por...';

            this.resposta1.string = 'Gerenciar os pacotes na rede';

            this.resposta2.string = 'Estabelecer uma conexão fim a fim\n (conexão confiável)entre a origem e o destino\n dos dados.';

            this.resposta3.string = 'Protocolos de comunicação\n com as diferentes aplicações';

            this.resposta4.string = 'Acessar a rede em aplicações Web';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Na camada de aplicação\n o protocolo HTTP e responsavel por...?';

            this.resposta1.string = 'Exibir paginas web';

            this.resposta2.string = 'Receber arquvos de video da internet ';

            this.resposta3.string = 'Estabelecer uma conexão segura';

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

            this.resposta2.string = 'DHCP';

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

    gameover: function gameover() {
        this.telaFinalQuiz.setPositionX(0);
        if (this.respCer >= 3) {
            this.buttonTryAgain.destroy();
            this.gameOver.string = 'Parabens!\n' + 'Voce passou no Quiz!';
        } else {
            this.gameOver.string = 'Ah! que pena!\n' + 'Voce nao passou no Quiz!\n' + 'tente novamente!';
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
},{}]},{},["btnCarregarJogo","btnNovoJogo","btnOpcoes","btnPlayCamada1","btnPlayCamada2","btnPlayCamada3","btnPlayCamada4","btnQuiz1","btnQuiz2","btnQuiz3","btnQuiz4","btnAcessoARede","btnAplicacao","btnInternet","btnTransporte","btnContFase1","btnContFase2","btnContFase3","btnContFase4","alvo","logicaFase1-1","logicaFase1","logicaFase2","logicaFase3","logicaFase4","logo","profCamada1","profCamada2","profCamada3","profCamada4","quizFase1","quizFase2","quizFase3","quizFase4"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xvZ2ljYSBmYXNlcy9hbHZvLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGNhbWFkYXMvYnRuQWNlc3NvQVJlZGUuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgY2FtYWRhcy9idG5BcGxpY2FjYW8uanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0bkNhcnJlZ2FySm9nby5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBkaWFsb2d1ZXMvYnRuQ29udEZhc2UxLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGRpYWxvZ3Vlcy9idG5Db250RmFzZTIuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgZGlhbG9ndWVzL2J0bkNvbnRGYXNlMy5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBkaWFsb2d1ZXMvYnRuQ29udEZhc2U0LmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGNhbWFkYXMvYnRuSW50ZXJuZXQuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0bk5vdm9Kb2dvLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idG5PcGNvZXMuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0blBsYXkvYnRuUGxheUNhbWFkYTEuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0blBsYXkvYnRuUGxheUNhbWFkYTIuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0blBsYXkvYnRuUGxheUNhbWFkYTMuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0blBsYXkvYnRuUGxheUNhbWFkYTQuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbiBxdWl6L2J0blF1aXoxLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b24gcXVpei9idG5RdWl6Mi5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9uIHF1aXovYnRuUXVpejMuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbiBxdWl6L2J0blF1aXo0LmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGNhbWFkYXMvYnRuVHJhbnNwb3J0ZS5qcyIsImFzc2V0cy9zY3JpcHRzL2xvZ2ljYSBmYXNlcy9sb2dpY2FGYXNlMS0xLmpzIiwiYXNzZXRzL3NjcmlwdHMvbG9naWNhIGZhc2VzL2xvZ2ljYUZhc2UxLmpzIiwiYXNzZXRzL3NjcmlwdHMvbG9naWNhIGZhc2VzL2xvZ2ljYUZhc2UyLmpzIiwiYXNzZXRzL3NjcmlwdHMvbG9naWNhIGZhc2VzL2xvZ2ljYUZhc2UzLmpzIiwiYXNzZXRzL3NjcmlwdHMvbG9naWNhIGZhc2VzL2xvZ2ljYUZhc2U0LmpzIiwiYXNzZXRzL3NjcmlwdHMvbG9nby5qcyIsImFzc2V0cy9zY3JpcHRzL3Byb2ZzL3Byb2ZDYW1hZGExLmpzIiwiYXNzZXRzL3NjcmlwdHMvcHJvZnMvcHJvZkNhbWFkYTIuanMiLCJhc3NldHMvc2NyaXB0cy9wcm9mcy9wcm9mQ2FtYWRhMy5qcyIsImFzc2V0cy9zY3JpcHRzL3Byb2ZzL3Byb2ZDYW1hZGE0LmpzIiwiYXNzZXRzL3NjcmlwdHMvcXVpeiBmYXNlcy9xdWl6RmFzZTEuanMiLCJhc3NldHMvc2NyaXB0cy9xdWl6IGZhc2VzL3F1aXpGYXNlMi5qcyIsImFzc2V0cy9zY3JpcHRzL3F1aXogZmFzZXMvcXVpekZhc2UzLmpzIiwiYXNzZXRzL3NjcmlwdHMvcXVpeiBmYXNlcy9xdWl6RmFzZTQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0k7O0FBRUE7QUFDSTtBQURROztBQUlaO0FBQ0E7O0FBUks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7QUFwQ0Q7O0FBMENaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFJRDtBQUNBOztBQS9ESzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSztBQXBDRDs7QUEwQ1o7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0E7O0FBN0RLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDSTtBQUNIOztBQUVEO0FBQ0E7O0FBckJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBWFE7O0FBY1o7QUFDSTtBQUNJO0FBRUE7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBSUE7QUFDSDtBQUNHO0FBSUE7QUFDSDtBQUNHO0FBSUE7QUFDSDtBQUNHO0FBSUE7QUFDSDtBQUNHO0FBRUE7QUFDQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFDQTtBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFJSDs7QUF2Rkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFOUTs7QUFTWjtBQUNJO0FBQ0k7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBR0g7O0FBM0RJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBTlE7O0FBU1o7QUFDSTtBQUNJO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUdIOztBQWhESTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQU5ROztBQVNaO0FBQ0k7QUFDSTtBQUlBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUlBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFHSDs7QUF6Q0k7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBcENEOztBQTJDWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDQTs7QUE5REs7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBcENEOztBQTJDWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDQTs7QUE5REs7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkE7O0FBS0o7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDSTtBQUNBO0FBRkk7O0FBS1I7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkU7O0FBS047QUFDSTtBQUNBO0FBRmdCOztBQUtwQjtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjs7QUFFQTs7QUFFQTtBQXRFUTs7QUF5RVo7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQ7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUVBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7QUFwUEk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkE7O0FBS0o7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDSTtBQUNBO0FBRkk7O0FBS1I7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkU7O0FBS047QUFDSTtBQUNBO0FBRmdCOztBQUtwQjtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjs7QUFFQTs7QUFFQTtBQTNFUTs7QUE4RVo7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDs7QUFFRDs7QUFFQTtBQUNJO0FBQ0E7QUFDSDs7QUFFRDs7QUFFQTtBQUNJO0FBQ0E7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUdBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBRUk7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNBO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0g7QUFJSjtBQXZRSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGQTs7QUFLSjtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGUzs7QUFLYjtBQUNJO0FBQ0E7QUFGUzs7QUFLYjtBQUNJO0FBQ0E7QUFGUzs7QUFLYjtBQUNJO0FBQ0E7QUFGUzs7QUFLYjtBQUNJO0FBQ0E7QUFGUzs7QUFLYjtBQUNJO0FBQ0E7QUFGUzs7QUFLYjtBQUNJO0FBQ0E7QUFGQzs7QUFLTDtBQUNJO0FBQ0E7QUFGQzs7QUFLTDtBQUNJO0FBQ0E7QUFGQzs7QUFLTDtBQUNJO0FBQ0E7QUFGQzs7QUFLTDtBQUNJO0FBQ0E7QUFGQzs7QUFLTDtBQUNJO0FBQ0E7QUFGQzs7QUFLTDtBQUNJO0FBQ0E7QUFGQzs7QUFLTDtBQUNJO0FBQ0E7QUFGQzs7QUFLTDtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRTs7QUFLTjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGSTs7QUFLUjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQW5LUTs7QUFzS1o7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBR0E7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUVBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBR0g7QUFDRztBQUNBO0FBQ0E7QUFHSDtBQUNKOztBQUVEO0FBQ0E7QUFDSTtBQUNIO0FBNWVJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZBOztBQUtKO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZlOztBQUtuQjtBQUNJO0FBQ0E7QUFGZTs7QUFLbkI7QUFDSTtBQUNBO0FBRmU7O0FBS25CO0FBQ0k7QUFDQTtBQUZlOztBQUtuQjtBQUNJO0FBQ0E7QUFGZTs7QUFLbkI7QUFDSTtBQUNBO0FBRmU7O0FBS25COztBQUVBOztBQWpIUTs7QUFxSFo7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUdBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUE5TEk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7O0FBRUE7O0FBYlE7O0FBaUJaO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFFSDs7QUFFRDtBQUNJO0FBQ0k7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUdBO0FBQ0E7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBdklJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJOztBQUVBO0FBSFE7O0FBTVo7QUFDQTtBQUNJO0FBRUg7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBRUg7QUFDRDtBQUVIO0FBM0JJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDQTtBQUNJO0FBRUg7O0FBcEJJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDQTtBQUNJO0FBQ0g7O0FBbkJJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDQTtBQUNJO0FBQ0g7O0FBbkJJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDQTtBQUNJO0FBQ0g7O0FBbkJJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBcEZROztBQXVGWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBRUg7QUFDRztBQUdIOztBQUVEOztBQUVBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUVIO0FBeE9JOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBcEZROztBQXVGWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBRUg7QUFDRztBQUdIOztBQUVEOztBQUVBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUVIO0FBeE9JOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBcEZROztBQXVGWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBRUg7QUFDRztBQUdIOztBQUVEOztBQUVBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUVIO0FBeE9JOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBcEZROztBQXVGWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBRUg7QUFDRztBQUdIOztBQUVEOztBQUVBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUVIO0FBeE9JIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwaWNrUmFkaW9zOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYUJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbjEuc2V0UG9zaXRpb24oMzI2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjIuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjMuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjQuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNob3dQcm9mQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucHJvZjEuc2V0T3BhY2l0eSgxMDAwKTtcclxuICAgICAgICB0aGlzLnByb2YyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjQuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLm11ZGFCdXR0b24oKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9mMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24xOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b240OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMi5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMy5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNC5zZXRQb3NpdGlvbigzMjYsIC0yNDQpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd1Byb2ZCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wcm9mMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnByb2YzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mNC5zZXRPcGFjaXR5KDEwMDApO1xyXG4gICAgICAgIHRoaXMubXVkYUJ1dHRvbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9TZWxlY3RGYXNlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdEZhc2VcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBxdWFkcm86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFUZXh0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnUmVkZSBkZSBjb21wdXRhZG9yZXMgZSB1bSBjb25qdW50byBkZSBjb21wdXRhZG9yZXNcXG4nKyBcclxuICAgICAgICAgICAgJ2F1dMO0bm9tb3MgaW50ZXJjb25lY3RhZG9zIHBvciB1bWEgw7puaWNhIHRlY25vbG9naWEuJzsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRW0gcmVkZSBkZSBjb21wdXRhZG9yZXMgZXhpc3RlbSAyIG1vZGVsb3MgZGUgcHJvdG9jb2xvc1xcbicrIFxyXG4gICAgICAgICAgICAnTyBtb2RlbG8gbG9naWNvIE9TSVxcbicrIFxyXG4gICAgICAgICAgICAnZSBhIGFycXVpdGV0dXJhIFRDUC9JUCc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnTyBtb2RlbG8gT1NJIHNlIGJhc2VpYSBlbSB1bWEgcHJvcG9zdGEgZGVzZW52b2x2aWRhXFxuJysgXHJcbiAgICAgICAgICAgICdwZWxhIElTTyAoSW50ZXJuYXRpb25hbCBTdGFuZGFyZHMgT3JnYW5pemF0aW9uKVxcbicrXHJcbiAgICAgICAgICAgICdjb21vIHVtIHByaW1laXJvIHBhc3NvIGVtIGRpcmXDp8OjbyDDoCBwYWRyb25pemHDp8Ojb1xcbicrIFxyXG4gICAgICAgICAgICAnaW50ZXJuYWNpb25hbCBkb3MgcHJvdG9jb2xvcyBlbXByZWdhZG9zIG5hcyBkaXZlcnNhcyBjYW1hZGFzJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIG1vZGVsbyBPU0kgcG9zc3VpIDcgY2FtYWRhcywgc2FvIGVsYXM6XFxuJysgXHJcbiAgICAgICAgICAgICdGw61zaWNhXFxuJytcclxuICAgICAgICAgICAgJ0VubGFjZVxcbicrIFxyXG4gICAgICAgICAgICAnUmVkZXMnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ1RyYW5zcG9ydGVcXG4nKyBcclxuICAgICAgICAgICAgJ1Nlc3PDo29cXG4nK1xyXG4gICAgICAgICAgICAnQXByZXNlbnRhw6fDo29cXG4nKyBcclxuICAgICAgICAgICAgJ0FwbGljYcOnw6NvJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdEbyBtb2RlbG8gbG9naWNvIE9TSSBzdXJnaXUgYSBhcnF1aXRldHVyYSBUQ1AvSVBcXG4nKyBcclxuICAgICAgICAgICAgJ08gbW9kZWxvIFRDUC9JUCBkZXNjcmV2ZSB1bSBjb25qdW50byBkZSBvcmllbnRhw6fDtWVzXFxuJytcclxuICAgICAgICAgICAgJ2dlcmFpcyBwYXJhIGEgY29uY2Vww6fDo28gZSBpbXBsZW1lbnRhw6fDo28gZGUgcHJvdG9jb2xvcyBkZSByZWRlXFxuJysgXHJcbiAgICAgICAgICAgICdlc3BlY8OtZmljb3MgcGFyYSBwZXJtaXRpciBxdWUgaGFqYSBjb211bmljYcOnw6NvIGF0cmF2w6lzIGRlIHVtYSByZWRlLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBpbWFnZW0gYWNpbWEgZGVtb25zdHJhIGFzIHBlY3VsaWFyaWRhZGVzXFxuJysgXHJcbiAgICAgICAgICAgICdkZSB1bSBtb2RlbG8gcGFyYSBvIG91dHJvJztcclxuICAgICAgICAgICAgdGhpcy5xdWFkcm8uc2V0UG9zaXRpb24oMjIyLDEzOSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA3KXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQ29tbyBwb2RlIHNlciB2aXN0bywgYSBhcnF1aXRldHVyYSBUQ1AvSVBcXG4nKyBcclxuICAgICAgICAgICAgJ1Bvc3N1aSA0IGNhbWFkYXMgZSBldSBpcmVpIGV4cGxpY2FyIHNvYnJlIGEgcHJpbWVpcmEnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMucXVhZHJvLnNldFBvc2l0aW9uKDEzNjAsMTM5KTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBjYW1hZGEgZGUgYWNlc3NvIGEgcmVkZSB0ZW0gY29tbyB1bSBkb3Mgb2JqZXRpdm9zXFxuJytcclxuICAgICAgICAgICAgJ2dlcmFyIGUgdHJhbnNtaXRpciBvIHNpbmFsIHBlbG8gbWVpby4gU2VqYSBhIHRlY25vbG9naWFcXG4nKyBcclxuICAgICAgICAgICAgJ0V0aGVybmV0LCBXaS1maSwgQmx1ZXRvb3RoLCBlbnRyZSBvdXRyb3MuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdVbSBkb3Mgc2VydmnDp29zIGRlc3NhIGNhbWFkYSDDqSBhIG1vZHVsYcOnw6NvXFxuJytcclxuICAgICAgICAgICAgJ2RhIGluZm9ybWHDp8OjbyBhdHJhdsOpcyBkZSB1bSBzaW5hbFxcbicrXHJcbiAgICAgICAgICAgICdhbmFsw7NnaWNvIG91IGRpZ2l0YWwnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMTApe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIG1pbmktam9nbyBhIHNlZ3VpciwgZGVtb25zdHJhIG1lbGhvclxcbicrXHJcbiAgICAgICAgICAgICdhIGRpZmVyZW7Dp2EgZW50cmUgb3Mgc2luYWlzIGUgb3Mgc2V1cyBjb25jZWl0b3MnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMTEpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTFcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPbGEsIGV1IHNvdSBvIHByb2Zlc3NvciBTaW5hbGRvIVxcbicrXHJcbiAgICAgICAgJ0V1IHZvdSB0ZSBlbnNpbmFyIHNvYnJlIHJlZGUgZGUgY29tcHV0YWRvcmVzXFxuJytcclxuICAgICAgICAnYXJxdWl0ZXR1cmEgVENQL0lQIGUgYSBjYW1hZGEgZGUgYWNlc3NvIGEgcmVkZSc7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFUZXh0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBjYW1hZGEgaW50ZXJuZXQgZGVmaW5lIHVtIGZvcm1hdG8gZGUgcGFjb3RlXFxuJytcclxuICAgICAgICAgICAgJ29maWNpYWwgZSB1bSBwcm90b2NvbG8gY2hhbWFkbyBJUChJbnRlcm5ldCBQcm90b2NvbCkuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0VuZGVyZcOnbyBJUCwgZGUgZm9ybWEgZ2Vuw6lyaWNhLCDDqSB1bWFcXG4nK1xyXG4gICAgICAgICAgICAnaWRlbnRpZmljYcOnw6NvIGRlIHVtIGRpc3Bvc2l0aXZvIChjb21wdXRhZG9yLCBpbXByZXNzb3JhLCBldGMpXFxuJytcclxuICAgICAgICAgICAgJ2VtIHVtYSByZWRlIGxvY2FsIG91IHDDumJsaWNhLic7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQ2FkYSBjb21wdXRhZG9yIG5hIGludGVybmV0IHBvc3N1aVxcbicrXHJcbiAgICAgICAgICAgICd1bSBJUCAoSW50ZXJuZXQgUHJvdG9jb2wgb3UgUHJvdG9jb2xvIGRlIGludGVybmV0KSDDum5pY29cXG4nK1xyXG4gICAgICAgICAgICAncXVlIMOpIG8gbWVpbyBlbSBxdWUgYXMgbcOhcXVpbmFzIHVzYW1cXG4nK1xyXG4gICAgICAgICAgICAncGFyYSBzZSBjb211bmljYXJlbSBuYSBJbnRlcm5ldC4nOyBcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ08gZW5kZXJlw6dvIElQLCBuYSB2ZXJzw6NvIDQgZG8gSVAgKElQdjQpXFxuJytcclxuICAgICAgICAgICAgJ8OpIHVtIG7Dum1lcm8gZGUgMzIgYml0cyBvZmljaWFsbWVudGUgZXNjcml0b1xcbicrIFxyXG4gICAgICAgICAgICAnY29tIHF1YXRybyBvY3RldG9zIChieXRlcykgcmVwcmVzZW50YWRvcyBubyBmb3JtYXRvXFxuJytcclxuICAgICAgICAgICAgJ2RlY2ltYWwgY29tbywgcG9yIGV4ZW1wbG8sIFwiMTkyLjE2OC4xLjJcIi4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSB0YXJlZmEgZGEgY2FtYWRhIGludGVybmV0IMOpIGVudHJlZ2FyXFxuJytcclxuICAgICAgICAgICAgJ3BhY290ZXMgSVAgb25kZSBlbGVzIHPDo28gbmVjZXNzw6FyaW9zLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIHJvdGVhbWVudG8gZGUgcGFjb3RlcyDDqSB1bWEgcXVlc3TDo29cXG4nK1xyXG4gICAgICAgICAgICAnZGUgZ3JhbmRlIGltcG9ydMOibmNpYSBuZXNzYSBjYW1hZGEsIGFzc2ltIGNvbW9cXG4nK1xyXG4gICAgICAgICAgICAnYSBuZWNlc3NpZGFkZSBkZSBldml0YXIgbyBjb25nZXN0aW9uYW1lbnRvLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDYpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdVbSAgZXhlbXBsbyBkZSAgc2VydmnDp28gIG9mZXJlY2lkb1xcbicrIFxyXG4gICAgICAgICAgICAncG9yICBlc3NhICBjYW1hZGEgIMOpICBvICByb3RlYW1lbnRvICBkZSAgcGFjb3RlcyxcXG4nK1xyXG4gICAgICAgICAgICAnYXRyYXbDqXMgZG9zIGVuZGVyZcOnb3MgZGUgb3JpZ2VtL2Rlc3Rpbm8uJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDcpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTJcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPbGEsIGV1IHNvdSBhIHByb2Zlc3NvcmEgQW5ldHRlIVxcbicrXHJcbiAgICAgICAgJ0V1IHZvdSB0ZSBlbnNpbmFyIHNvYnJlIGEgY2FtYWRhIEludGVybmV0JztcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYVRleHRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBIGZpbmFsaWRhZGUgZGVzc2EgY2FtYWRhIMOpIHBlcm1pdGlyIHF1ZVxcbicrIFxyXG4gICAgICAgICAgICAnYXMgZW50aWRhZGVzIHBhcmVzIGRvcyBob3N0cyBkZSBvcmlnZW0gZSBkZSBkZXN0aW5vXFxuJytcclxuICAgICAgICAgICAgJ21hbnRlbmhhbSB1bWEgY29udmVyc2HDp8Ojbyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRG9pcyBwcm90b2NvbG9zIGZpbSBhIGZpbSBmb3JhbSBkZWZpbmlkb3MgYXF1aS5cXG4nK1xyXG4gICAgICAgICAgICAnTyBwcmltZWlybyBkZWxlcywgbyBUQ1AoVHJhbnNtaXNzaW9uIENvbnRyb2wgUHJvdG9jb2xcXG4nK1xyXG4gICAgICAgICAgICAn4oCUIHByb3RvY29sbyBkZSBjb250cm9sZSBkZSB0cmFuc21pc3PDo28pJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdVbSBwcm90b2NvbG8gb3JpZW50YWRvIGEgY29uZXjDtWVzIGNvbmZpw6F2ZWxcXG4nK1xyXG4gICAgICAgICAgICAncXVlIHBlcm1pdGUgYSBlbnRyZWdhIHNlbSBlcnJvcyBkZSB1bSBmbHV4byBkZSBieXRlc1xcbicrXHJcbiAgICAgICAgICAgICdvcmlnaW7DoXJpbyBkZSB1bWEgZGV0ZXJtaW5hZGEgbcOhcXVpbmEgZW0gcXVhbHF1ZXIgY29tcHV0YWRvcic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRXNzZSBwcm90b2NvbG8gZnJhZ21lbnRhIG8gZmx1eG8gZGUgYnl0ZXMgZGUgZW50cmFkYVxcbicrXHJcbiAgICAgICAgICAgICdlbSBtZW5zYWdlbnMgZGlzY3JldGFzLiBObyBkZXN0aW5vLCBvIHByb2Nlc3NvIFRDUCByZWNlcHRvclxcbicrXHJcbiAgICAgICAgICAgICd2b2x0YSBhIG1vbnRhciBhcyBtZW5zYWdlbnMgcmVjZWJpZGFzIG5vIGZsdXhvIGRlIHNhw61kYS4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ08gcHJveGltbyBtaW5pLWpvZ28gZGVtb25zdHJhIGNvbW9cXG4nKyBcclxuICAgICAgICAgICAgJ2EgbWVuc2FnZW0gdmlhamEgZW50cmUgdmFyaW9zIG5vcyBhdGUgY2hlZ2FyIGVtIHNldSBkZXN0aW5vJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTNcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPbGEsIGV1IHNvdSBvIHByb2Zlc3NvciBQb3J0dHkhXFxuJytcclxuICAgICAgICAnRXUgdm91IHRlIGVuc2luYXIgc29icmUgYSBjYW1hZGEgVHJhbnNwb3J0ZSc7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFUZXh0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBjYW1hZGEgZGUgYXBsaWNhw6fDo28gw6kgcmVzcG9uc8OhdmVsXFxuJytcclxuICAgICAgICAgICAgJ3BlbG9zIHByb3RvY29sb3MgZGUgY29tdW5pY2HDp8OjbyBjb21cXG4nKyBcclxuICAgICAgICAgICAgJ2FzIGRpZmVyZW50ZXMgYXBsaWNhw6fDtWVzIMOpIGEgaW50ZXJmYWNlIFxcbicrXHJcbiAgICAgICAgICAgICdlbnRyZSBvcyBwcm9ncmFtYXMgZSBhIGFycXVpdGV0dXJhIFRDUC9JUC4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnbyBkYWRvIMOpIHBhc3NhZG8gZG8gcHJvZ3JhbWEgZGUgcmVkZVxcbicrXHJcbiAgICAgICAgICAgICdubyBmb3JtYXRvIHVzYWRvIGludGVybmFtZW50ZVxcbicrIFxyXG4gICAgICAgICAgICAncG9yIGVzc2EgYXBsaWNhw6fDo28nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnVW0gIGV4ZW1wbG8gIGRlICBzZXJ2acOnbyAgb2ZlcmVjaWRvXFxuJysgIFxyXG4gICAgICAgICAgICAnbmVzc2EgIGNhbWFkYSAgw6kgIG8gIHJlY2ViaW1lbnRvICBkZSAgYXJxdWl2b3NIVFRQXFxuJytcclxuICAgICAgICAgICAgJyhIeXBlclRleHQgVHJhbnNmZXIgUHJvdG9jb2wpIHBhcmEgYSBleGliacOnw6NvXFxuJysgXHJcbiAgICAgICAgICAgICdkZSBww6FnaW5hcyBXZWIuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTRcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPbGEsIGV1IHNvdSBvIHByb2Zlc3NvciBHZXJhbGRvIVxcbicrXHJcbiAgICAgICAgJ0V1IHZvdSB0ZSBlbnNpbmFyIHNvYnJlIGEgY2FtYWRhIEFwbGljYcOnw6NvJztcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2YxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Y0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMi5zZXRQb3NpdGlvbigzMjYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMy5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNC5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd1Byb2ZCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wcm9mMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjIuc2V0T3BhY2l0eSgxMDAwKTtcclxuICAgICAgICB0aGlzLnByb2YzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mNC5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMubXVkYUJ1dHRvbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9TZWxlY3RGYXNlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdEZhc2VcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvT3Bjb2VzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm9wY29lc1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9GYXNlMTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJmYXNlMVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvRmFzZTI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmFzZTJcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0Zhc2UzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImZhc2UzXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9GYXNlNDogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJmYXNlNFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvUXVpejE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2UxXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9RdWl6MTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTJcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub1F1aXoxOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlM1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvUXVpejE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2U0XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b24xLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24yLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24zLnNldFBvc2l0aW9uKDMyNiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b240LnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzaG93UHJvZkJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnByb2YxLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjMuc2V0T3BhY2l0eSgxMDAwKTtcclxuICAgICAgICB0aGlzLnByb2Y0LnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5tdWRhQnV0dG9uKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiZzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b25VcDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b25Eb3duOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsaW5oYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFsdm86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2FtZU92ZXJiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LCBcclxuICAgICAgICBcclxuICAgICAgICBzY29yZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NvcmVHYW1lT3Zlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0bkNvbnRpbnVhcjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dG9GYXNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsaW5oYUdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZhc2U6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9udHVhY2FvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmZyZW50ZVBsYXllcigpO1xyXG4gICAgICAgIHRoaXMuY3JpYUFsdm8oKTtcclxuICAgICAgICB0aGlzLnBvbnR1YWNhbyA9IDA7XHJcbiAgICAgICAgdGhpcy5mYXNlID0gMDtcclxuICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgdGhpcy5saW5oYUdhbWVPdmVyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDb21vIHBvZGUgc2VyIHZpc3RvLCBhIGRpZmVyZW7Dp2EgZW50cmUgb3Mgc2luYWlzXFxuXCIrIFxyXG4gICAgICAgICAgICBcImUgYmVtIHBlcmNlcHRpdmVsXCI7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvKkZ1bsOnb2VzIHVzYWRhcyBwYXJhIGNoYW1hciBhIGHDp2FvIGRlIFxyXG4gICAgbW92aW1lbnRhciBhIGNvcmRhIHBhcmEgY2ltYSBlbSBkaXZlcnNhcyB2ZWxvY2lkYWRlcyovXHJcbiAgICBzb2JlUGxheWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdmFyIHNvYmUgPSBjYy5tb3ZlQnkoMywgY2MucCgwLCAzMDApKTtcclxuICAgICAgICB2YXIgZnJlbnRlID0gY2MubW92ZUJ5KDMwMCwgY2MucCgxMDAwMCwgMCkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShzb2JlLCBmcmVudGUpKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8qRnVuw6dvZXMgdXNhZGFzIHBhcmEgY2hhbWFyIGEgYcOnYW8gZGUgXHJcbiAgICBtb3ZpbWVudGFyIGEgY29yZGEgcGFyYSBiYWl4byBlbSBkaXZlcnNhcyB2ZWxvY2lkYWRlcyovXHJcbiAgICBkZXNjZVBsYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHZhciBkZXNjZSA9IGNjLm1vdmVCeSgzLCBjYy5wKDAsIC0zMDApKTtcclxuICAgICAgICB2YXIgZnJlbnRlID0gY2MubW92ZUJ5KDMwMCwgY2MucCgxMDAwMCwgMCkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShkZXNjZSwgZnJlbnRlKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB2YWlGcmVudGVQbGF5ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB2YXIgZnJlbnRlID0gY2MubW92ZUJ5KDMwMCwgY2MucCgxMDAwMCwgMCkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJ1bkFjdGlvbihmcmVudGUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdmFpUHJhRnJlbnRlOiBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGZyZW50ZSA9IGNjLm1vdmVCeSgzMDAsIGNjLnAoMTAwMDAsIDApKTtcclxuICAgICAgICByZXR1cm4gZnJlbnRlO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZnJlbnRlUGxheWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudmFpUHJhRnJlbnRlID0gdGhpcy52YWlQcmFGcmVudGUoKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24odGhpcy52YWlQcmFGcmVudGUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgY3JpYUxpbmhhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbm92YUxpbmhhID0gY2MuaW5zdGFudGlhdGUodGhpcy5saW5oYSk7XHJcbiAgICAgICAgdGhpcy5iZy5hZGRDaGlsZChub3ZhTGluaGEpO1xyXG4gICAgICAgIG5vdmFMaW5oYS5zZXRQb3NpdGlvbih0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNyaWFBbHZvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDMwMCkgKyAwKTtcclxuICAgICAgICB2YXIgeCA9IHRoaXMucGxheWVyLnggKyAxMDA7XHJcbiAgICAgICAgdmFyIHhsaW5oYSA9IHggKyAyMDA7XHJcbiAgICAgICAgdGhpcy5hbHZvLnNldFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgIHRoaXMubGluaGFHYW1lT3Zlci5zZXRQb3NpdGlvbih4bGluaGEsIDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGp1ZGdlIHRoZSBkaXN0YW5jZSBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBwbGF5ZXIgbm9kZVxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBBbHZvUG9zID0gdGhpcy5hbHZvLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBub2RlcyBhY2NvcmRpbmcgdG8gdGhlaXIgcG9zaXRpb25zXHJcbiAgICAgICAgdmFyIGRpc3QgPSBjYy5wRGlzdGFuY2UoQWx2b1BvcywgcGxheWVyUG9zKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdldFBsYXllckRpc3RhbmNlTGluaGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBqdWRnZSB0aGUgZGlzdGFuY2UgYWNjb3JkaW5nIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGxheWVyIG5vZGVcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgbGluaGFHYW1lT3ZlclBvcyA9IHRoaXMubGluaGFHYW1lT3Zlci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbm9kZXMgYWNjb3JkaW5nIHRvIHRoZWlyIHBvc2l0aW9uc1xyXG4gICAgICAgIHZhciBkaXN0ID0gY2MucERpc3RhbmNlKGxpbmhhR2FtZU92ZXJQb3MsIHBsYXllclBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBvblBpY2tlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgc3RhcnMgYXJlIGJlaW5nIGNvbGxlY3RlZCwgaW52b2tlIHRoZSBpbnRlcmZhY2UgaW4gdGhlIEdhbWUgc2NyaXB0IHRvIGdlbmVyYXRlIGEgbmV3IHN0YXJcclxuICAgICAgICB0aGlzLmNyaWFBbHZvKCk7XHJcbiAgICAgICAgdGhpcy5wb250dWFjYW8gKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGxpbWl0YVBsYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoIHRoaXMucGxheWVyLnkgPiB0aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0LzIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueSA9IHRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMjtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIueSA8IC10aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0LzIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueSA9IC10aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0LzI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZWdhQWx2bzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgNjApIHtcclxuICAgICAgICAgICAgLy8gaW52b2tlIGNvbGxlY3RpbmcgYmVoYXZpb3JcclxuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucG9udHVhY2FvID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5mYXNlID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwYXNzYUxpbmhhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlTGluaGEoKSA8IDYwKSB7XHJcbiAgICAgICAgICAgIC8vIGludm9rZSBjb2xsZWN0aW5nIGJlaGF2aW9yXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wb250dWFjYW8gPT0gMTApe1xyXG4gICAgICAgICAgICB0aGlzLmxpbmhhR2FtZU92ZXIuc2V0UG9zaXRpb24oMCwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZU92ZXI6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyYmFja2dyb3VuZC5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgIHRoaXMuc2NvcmVHYW1lT3Zlci5zdHJpbmcgPSAnQWx2b3MgQWNlcnRhZG9zOiAnK3RoaXMucG9udHVhY2FvO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cnlBZ2FpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTEtMVwiKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhVGV4dG8xOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udFRleHRvID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIHNpbmFsIGFuYWxvZ2ljbyBlIGdlcmFkbyBjb21vIHVtYSBvbmRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiamEgcXVlIG9zIHZhbG9yZXMgdmFvIHNlIGFsdGVyYW5kbyBubyBpbnRlcnZhbG8gZGUgdGVtcG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiSmEgbyBzaW5hbCBkaWdpdGFsIGUgZ2VyYWRvIGNvbW8gdW1hIHJldGFcXG5cIitcclxuICAgICAgICAgICAgXCJqYSBxdWUgcG9zc3VpIHVtIGNvbmp1bnRvIGRlIHZhbG9yZXMgZW0gdW0gaW50ZXJ2YWxvIGRlIHRlbXBvXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkEgY2FtYWRhIGRlIGFjZXNzbyBhIHJlZGUgdGFtYmVtIGZvcm5lY2VcXG5cIitcclxuICAgICAgICAgICAgXCJvIHNlcnZpw6dvIGRlICB0cmFuc2Zvcm1hciAgdW0gIGNhbmFsICBkZSB0cmFuc21pc3PDo28gIGJydXRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZW0gIHVtYSAgbGluaGEgIHF1ZSAgcGFyZcOnYSAgbGl2cmUgIGRlICBlcnJvcyAgZGUgIHRyYW5zbWlzc8Ojb1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPZmVyZWNlbmRvIGVucXVhZHJhbWVudG8gZGUgYml0c1xcblwiK1xyXG4gICAgICAgICAgICBcInZlcmlmaWNhw6dhbyBkZSBlcnJvcyBlIHByb3RvY29sb3MgcXVlIGdhcmFudGFtIGEgY29ycmXDp2FvIGRlIGVycm9zXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVmlzdG8gb3MgY29udGV1ZG9zIGRlc3RhIGZhc2UgZSBlbSBzYWxhIGRlIGF1bGFcXG5cIitcclxuICAgICAgICAgICAgXCJyZXNwb25kYSBhZ29yYSBvIFF1aXpcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvID0gMDtcclxuICAgICAgICAgICAgdGhpcy5mYXNlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UG9zaXRpb24oLTQxOCwwKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuZmFzZSA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yLnNldFBvc2l0aW9uKDEzMDYsLTIyMik7XHJcbiAgICAgICAgICAgIHRoaXMubGltaXRhUGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JpYUxpbmhhKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGVnYUFsdm8oKTtcclxuICAgICAgICAgICAgdGhpcy5wYXNzYUxpbmhhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gJ0Fsdm9zOiAnKyB0aGlzLnBvbnR1YWNhbztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5mYXNlID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3Nvci5zZXRQb3NpdGlvbigwLC0yMjIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmZhc2UgPT0gMil7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlMVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiZzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b25VcDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b25Eb3duOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsaW5oYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFsdm86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2FtZU92ZXJiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LCBcclxuICAgICAgICBcclxuICAgICAgICBzY29yZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NvcmVHYW1lT3Zlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0bkNvbnRpbnVhcjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuQ29udGludWFyMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpbmhhR2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmFzZTogMCxcclxuICAgICAgICBcclxuICAgICAgICBwb250dWFjYW86IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udFRleHRvOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZnJlbnRlUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5jcmlhQWx2bygpO1xyXG4gICAgICAgIHRoaXMuYnRuQ29udGludWFyMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMubGluaGFHYW1lT3Zlci5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucG9udHVhY2FvID0gMDtcclxuICAgICAgICB0aGlzLmZhc2UgPSAwO1xyXG4gICAgICAgIHRoaXMuY29udFRleHRvID0gMDtcclxuICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk5lc3NlIE1pbmktSm9nbywgdm9jZSBhcHJlbmRlcmEgYSBkaWZlcmVuw6dhXFxuXCIrIFxyXG4gICAgICAgICAgICBcImVudHJlIG8gc2luYWwgYW5hbG9naWNvIGUgbyBzaW5hbCBkaWdpdGFsXCI7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvKkZ1bsOnb2VzIHVzYWRhcyBwYXJhIGNoYW1hciBhIGHDp2FvIGRlIFxyXG4gICAgbW92aW1lbnRhciBhIGNvcmRhIHBhcmEgY2ltYSBlbSBkaXZlcnNhcyB2ZWxvY2lkYWRlcyovXHJcbiAgICBzb2JlUGxheWVyOiBmdW5jdGlvbiAoKXtcclxuICAgICAgICB2YXIgc29iZSA9IGNjLm1vdmVCeSgzLCBjYy5wKDAsIDMwMCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25Jbk91dCgpKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ydW5BY3Rpb24oc29iZSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvKkZ1bsOnb2VzIHVzYWRhcyBwYXJhIGNoYW1hciBhIGHDp2FvIGRlIFxyXG4gICAgbW92aW1lbnRhciBhIGNvcmRhIHBhcmEgYmFpeG8gZW0gZGl2ZXJzYXMgdmVsb2NpZGFkZXMqL1xyXG4gICAgZGVzY2VQbGF5ZXI6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHZhciBkZXNjZSA9IGNjLm1vdmVCeSgzLCBjYy5wKDAsIC0zMDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW5PdXQoKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKGRlc2NlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZhaVByYUZyZW50ZTogZnVuY3Rpb24oKXtcclxuICAgIHZhciBmcmVudGUgPSBjYy5tb3ZlQnkoMywgY2MucCgxMDAsIDApKTtcclxuICAgICAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShmcmVudGUpKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGZyZW50ZVBsYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnZhaVByYUZyZW50ZSA9IHRoaXMudmFpUHJhRnJlbnRlKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKHRoaXMudmFpUHJhRnJlbnRlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNyaWFMaW5oYTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vdmFMaW5oYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluaGEpO1xyXG4gICAgICAgIHRoaXMuYmcuYWRkQ2hpbGQobm92YUxpbmhhKTtcclxuICAgICAgICBub3ZhTGluaGEuc2V0UG9zaXRpb24odGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjcmlhQWx2bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAzMDApICsgMCk7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBsYXllci54ICsgMTAwO1xyXG4gICAgICAgIHZhciB4bGluaGEgPSB4ICsgMjAwO1xyXG4gICAgICAgIHRoaXMuYWx2by5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgICAgICB0aGlzLmxpbmhhR2FtZU92ZXIuc2V0UG9zaXRpb24oeGxpbmhhLCAwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8ganVkZ2UgdGhlIGRpc3RhbmNlIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIHBsYXllciBub2RlXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIEFsdm9Qb3MgPSB0aGlzLmFsdm8uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG5vZGVzIGFjY29yZGluZyB0byB0aGVpciBwb3NpdGlvbnNcclxuICAgICAgICB2YXIgZGlzdCA9IGNjLnBEaXN0YW5jZShBbHZvUG9zLCBwbGF5ZXJQb3MpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2VMaW5oYTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGp1ZGdlIHRoZSBkaXN0YW5jZSBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBwbGF5ZXIgbm9kZVxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBsaW5oYUdhbWVPdmVyUG9zID0gdGhpcy5saW5oYUdhbWVPdmVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBub2RlcyBhY2NvcmRpbmcgdG8gdGhlaXIgcG9zaXRpb25zXHJcbiAgICAgICAgdmFyIGRpc3QgPSBjYy5wRGlzdGFuY2UobGluaGFHYW1lT3ZlclBvcywgcGxheWVyUG9zKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uUGlja2VkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBXaGVuIHRoZSBzdGFycyBhcmUgYmVpbmcgY29sbGVjdGVkLCBpbnZva2UgdGhlIGludGVyZmFjZSBpbiB0aGUgR2FtZSBzY3JpcHQgdG8gZ2VuZXJhdGUgYSBuZXcgc3RhclxyXG4gICAgICAgIHRoaXMuY3JpYUFsdm8oKTtcclxuICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbGltaXRhUGxheWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICggdGhpcy5wbGF5ZXIueSA+IHRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci55ID0gdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodC8yO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci55IDwgLXRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci55ID0gLXRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMjtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBlZ2FBbHZvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCA2MCkge1xyXG4gICAgICAgICAgICAvLyBpbnZva2UgY29sbGVjdGluZyBiZWhhdmlvclxyXG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wb250dWFjYW8gPT0gMTApe1xyXG4gICAgICAgICAgICB0aGlzLmZhc2UgPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBhc3NhTGluaGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2VMaW5oYSgpIDwgNjApIHtcclxuICAgICAgICAgICAgLy8gaW52b2tlIGNvbGxlY3RpbmcgYmVoYXZpb3JcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucG9udHVhY2FvID09MTApe1xyXG4gICAgICAgICAgICB0aGlzLmxpbmhhR2FtZU92ZXIuc2V0UG9zaXRpb24oMCwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZU92ZXI6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyYmFja2dyb3VuZC5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgIHRoaXMuc2NvcmVHYW1lT3Zlci5zdHJpbmcgPSAnQWx2b3MgQWNlcnRhZG9zOiAnK3RoaXMucG9udHVhY2FvO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cnlBZ2FpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTFcIik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVRleHRvMTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRUZXh0byA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwidW0gIHNpbmFsICBhbmFsw7NnaWNvICDDqSAgY2FyYWN0ZXJpemFkbyBwb3JcXG5cIisgXHJcbiAgICAgICAgICAgIFwidW1hIGVxdWHDp8OjbyBtYXRlbcOhdGljYSBjb250aW51YS4gUXVhbmRvIGEgZW50cmFkYSBtdWRhIGRlIHVtIHZhbG9yIHBhcmEgbyBwcsOzeGltb1xcblwiKyBcclxuICAgICAgICAgICAgXCJmYXogaXNzbyBtb3ZlbmRvIHNlIGF0cmF2w6lzIGRlIHRvZG9zIG9zIHZhbG9yZXMgaW50ZXJtZWRpw6FyaW9zLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJUZW50ZSBhY2VydGFyIDEwIGFsdm9zIHBhcmEgYXZhbsOnYXJcXG5cIitcclxuICAgICAgICAgICAgXCJwYXJhIGEgcHJveGltYSBldGFwYVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJFdml0ZSBzdWJpciBkZW1haXMgb3UgZGVzY2VyIGRlbWFpc1xcblwiK1xyXG4gICAgICAgICAgICBcImNhc28gaXNzbyBhY29udGXDp2EsIHNlcmEgR2FtZSBPdmVyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZmFzZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKC00MTgsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FUZXh0bzI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT0gMCl7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIHNpbmFsIGRpZ2l0YWwgZSBnZXJhZG8gY29tbyB1bSBjb25qdW50byBkZSByZXRhc1xcblwiK1xyXG4gICAgICAgICAgICBcImphIHF1ZSBwb3NzdWkgdW0gY29uanVudG8gbGltaXRhZG8gZGUgdmFsb3JlcyBlbSB1bSBpbnRlcnZhbG8gZGUgdGVtcG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVGVudGUgYWNlcnRhciAxMCBhbHZvcyBwYXJhIGF2YW7Dp2FyXFxuXCIrXHJcbiAgICAgICAgICAgIFwicGFyYSBhIHByb3hpbWEgZXRhcGFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiRXZpdGUgc3ViaXIgZGVtYWlzIG91IGRlc2NlciBkZW1haXNcXG5cIitcclxuICAgICAgICAgICAgXCJjYXNvIGlzc28gYWNvbnRlw6dhLCBzZXJhIEdhbWUgT3ZlclwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJCb2EgU29ydGUhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvID0gMDtcclxuICAgICAgICAgICAgdGhpcy5mYXNlID0gMztcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UG9zaXRpb24oLTQxOCwwKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuZmFzZSA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yLnNldFBvc2l0aW9uKDAsLTIyMik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuZmFzZSA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3Nvci5zZXRQb3NpdGlvbigxMzA2LC0yMjIpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbWl0YVBsYXllcigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyaWFMaW5oYSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBlZ2FBbHZvKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc2FMaW5oYSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9ICdBbHZvczogJysgdGhpcy5wb250dWFjYW87XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuZmFzZSA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3Iuc2V0UG9zaXRpb24oMCwtMjIyKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Db250aW51YXIxLnNldFBvc2l0aW9uKDMwMDAsMCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ29udGludWFyMi5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuZmFzZSA9PSAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UxLTFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYmdGYXNlMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mZXNzb3I6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dG9GYXNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb21wdXRhZG9yMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb21wdXRhZG9yMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb21wdXRhZG9yMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb21wdXRhZG9yNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb21wdXRhZG9yNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb21wdXRhZG9yNjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBpcDE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaXAyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlwMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBpcDQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaXA1OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlwNjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBpcDc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaXA4OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhYlJvdGVhbWVudG86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcm90ZWFkb3IxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJvdGVhZG9yMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByb3RlYWRvcjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FibzE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FibzI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHdCRzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBpcFRhYmVsYTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlwVGFiZWxhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFjb3RlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlwUGFjb3RlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXN1bHRhZG86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBvbnR1YWNhbzogMCxcclxuICAgICAgICBcclxuICAgICAgICBjZXJ0bzogMCxcclxuICAgICAgICBcclxuICAgICAgICBlcnJhZG86IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udFRleHRvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbkNvbnQxOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbkNvbnQyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlwOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXAgPSBcIjE5Mi4xNjguMTAuNlwiO1xyXG4gICAgICAgIHRoaXMucG9udHVhY2FvID0gMDtcclxuICAgICAgICB0aGlzLmNlcnRvID0gMDtcclxuICAgICAgICB0aGlzLmVycmFkbyA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udDEgPSAwO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udDIgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTmVzc2UgTWluaS1Kb2dvLCB2b2NlIGFwcmVuZGVyYSBhIHJvdGVhclxcblwiKyBcclxuICAgICAgICAgICAgXCJwYWNvdGVzIElQc1wiO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uMTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmJ1dHRvbkNvbnQxID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5pcFRhYmVsYTEuc3RyaW5nID0gXCIxOTIuMTY4LjEwLjAgICAgMjU1LjI1NS4yNTUuMCAgICAgICAgMjAwLjEwMC41MC4xXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ29udDEgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b25Db250MSA9PSAxKXtcclxuICAgICAgICAgICAgdmFyIGlwYnV0dG9uID0gXCIxOTIuMTY4LjEwLjZcIjtcclxuICAgICAgICAgICAgdGhpcy52ZXJpZmljYUJ1dHRvbjExKGlwYnV0dG9uKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b25Db250MSA9PSAyKXtcclxuICAgICAgICAgICAgaXBidXR0b24gPSBcIjE5Mi4xNjguMTAuNlwiO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhQnV0dG9uMTEoaXBidXR0b24pO1xyXG4gICAgICAgICAgICB0aGlzLmVycmFkbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmlwID0gXCIxOTIuMTY4LjUwLjJcIjtcclxuICAgICAgICAgICAgdGhpcy5pcFBhY290ZS5zdHJpbmcgPSBcIklQOjE5Mi4xNjguNTAuMlxcblwiK1xyXG4gICAgICAgICAgICBcIk1hc2s6MjU1LjI1NS4yNTUuMFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbkNvbnQxID09IDMpe1xyXG4gICAgICAgICAgICBpcGJ1dHRvbiA9IFwiMTkyLjE2OC4xMC42XCI7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWZpY2FCdXR0b24xMShpcGJ1dHRvbik7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyYWRvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucG9udHVhY2FvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuaXAgPSBcIjE5Mi4xNjguMTAuMTBcIjtcclxuICAgICAgICAgICAgdGhpcy5pcFBhY290ZS5zdHJpbmcgPSBcIklQOjE5Mi4xNjguMTAuMTBcXG5cIitcclxuICAgICAgICAgICAgXCJNYXNrOjI1NS4yNTUuMjU1LjBcIjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b25Db250MSA9PSA0KXtcclxuICAgICAgICAgICAgaXBidXR0b24gPSBcIjE5Mi4xNjguMTAuMTBcIjtcclxuICAgICAgICAgICAgdGhpcy52ZXJpZmljYUJ1dHRvbjExKGlwYnV0dG9uKTtcclxuICAgICAgICAgICAgdGhpcy5jZXJ0byArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmlwID0gXCIxOTIuMTY4LjEwLjUwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXBQYWNvdGUuc3RyaW5nID0gXCJJUDoxOTIuMTY4LjEwLjUwXFxuXCIrXHJcbiAgICAgICAgICAgIFwiTWFzazoyNTUuMjU1LjI1NS4wXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uQ29udDEgPT0gNSl7XHJcbiAgICAgICAgICAgIGlwYnV0dG9uID0gXCIxOTIuMTY4LjEwLjUwXCI7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWZpY2FCdXR0b24xMShpcGJ1dHRvbik7XHJcbiAgICAgICAgICAgIHRoaXMuY2VydG8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5wb250dWFjYW8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5pcCA9IFwiMTkyLjE2OC41MC41MFwiO1xyXG4gICAgICAgICAgICB0aGlzLmlwUGFjb3RlLnN0cmluZyA9IFwiSVA6MTkyLjE2OC41MC41MFxcblwiK1xyXG4gICAgICAgICAgICBcIk1hc2s6MjU1LjI1NS4yNTUuMFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbkNvbnQxID09IDYpe1xyXG4gICAgICAgICAgICBpcGJ1dHRvbiA9IFwiMTkyLjE2OC4xMC41MFwiO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhQnV0dG9uMTEoaXBidXR0b24pO1xyXG4gICAgICAgICAgICB0aGlzLmVycmFkbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmlwID0gXCIxOTIuMTY4LjUwLjQ0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXBQYWNvdGUuc3RyaW5nID0gXCJJUDoxOTIuMTY4LjUwLjQ0XFxuXCIrXHJcbiAgICAgICAgICAgIFwiTWFzazoyNTUuMjU1LjI1NS4wXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uQ29udDEgPT0gNyl7XHJcbiAgICAgICAgICAgIGlwYnV0dG9uID0gXCIxOTIuMTY4LjEwLjUwXCI7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWZpY2FCdXR0b24xMShpcGJ1dHRvbik7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyYWRvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucG9udHVhY2FvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuaXAgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmlwUGFjb3RlLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZlcmlmaWNhQnV0dG9uMTE6IGZ1bmN0aW9uKGlwYnV0dG9uKXtcclxuICAgICAgICBpZih0aGlzLmlwID09IGlwYnV0dG9uKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRhZG8uc3RyaW5nID0gXCJhY2VydG91XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ29udDEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25Db250MiArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0YWRvLnN0cmluZyA9IFwiZXJyb3UhIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNvbnQxICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ29udDIgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b24yOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuYnV0dG9uQ29udDIgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmlwVGFiZWxhMi5zdHJpbmcgPSBcIjE5Mi4xNjguNTAuMCAgICAyNTUuMjU1LjI1NS4wICAgICAgICAyMDAuMTAwLjUwLjJcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25Db250MiArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbkNvbnQyID09IDEpe1xyXG4gICAgICAgICAgICB2YXIgaXBidXR0b24gPSBcIjE5Mi4xNjguNTAuNVwiO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhQnV0dG9uMjEoaXBidXR0b24pO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbkNvbnQyID09IDIpe1xyXG4gICAgICAgICAgICBpcGJ1dHRvbiA9IFwiMTkyLjE2OC41MC41XCI7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWZpY2FCdXR0b24yMShpcGJ1dHRvbik7XHJcbiAgICAgICAgICAgIHRoaXMuY2VydG8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5wb250dWFjYW8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5pcCA9IFwiMTkyLjE2OC41MC4yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXBQYWNvdGUuc3RyaW5nID0gXCJJUDoxOTIuMTY4LjUwLjJcXG5cIitcclxuICAgICAgICAgICAgXCJNYXNrOjI1NS4yNTUuMjU1LjBcIjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b25Db250MiA9PSAzKXtcclxuICAgICAgICAgICAgaXBidXR0b24gPSBcIjE5Mi4xNjguNTAuMlwiO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhQnV0dG9uMjEoaXBidXR0b24pO1xyXG4gICAgICAgICAgICB0aGlzLmNlcnRvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucG9udHVhY2FvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuaXAgPSBcIjE5Mi4xNjguMTAuMTBcIjtcclxuICAgICAgICAgICAgdGhpcy5pcFBhY290ZS5zdHJpbmcgPSBcIklQOjE5Mi4xNjguMTAuMTBcXG5cIitcclxuICAgICAgICAgICAgXCJNYXNrOjI1NS4yNTUuMjU1LjBcIjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b25Db250MiA9PSA0KXtcclxuICAgICAgICAgICAgaXBidXR0b24gPSBcIjE5Mi4xNjguNTAuMlwiO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhQnV0dG9uMjEoaXBidXR0b24pO1xyXG4gICAgICAgICAgICB0aGlzLmVycmFkbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmlwID0gXCIxOTIuMTY4LjEwLjUwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXBQYWNvdGUuc3RyaW5nID0gXCJJUDoxOTIuMTY4LjEwLjUwXFxuXCIrXHJcbiAgICAgICAgICAgIFwiTWFzazoyNTUuMjU1LjI1NS4wXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uQ29udDIgPT0gNSl7XHJcbiAgICAgICAgICAgIGlwYnV0dG9uID0gXCIxOTIuMTY4LjUwLjJcIjtcclxuICAgICAgICAgICAgdGhpcy52ZXJpZmljYUJ1dHRvbjIxKGlwYnV0dG9uKTtcclxuICAgICAgICAgICAgdGhpcy5lcnJhZG8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5wb250dWFjYW8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5pcCA9IFwiMTkyLjE2OC41MC41MFwiO1xyXG4gICAgICAgICAgICB0aGlzLmlwUGFjb3RlLnN0cmluZyA9IFwiSVA6MTkyLjE2OC41MC41MFxcblwiK1xyXG4gICAgICAgICAgICBcIk1hc2s6MjU1LjI1NS4yNTUuMFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbkNvbnQyID09IDYpe1xyXG4gICAgICAgICAgICBpcGJ1dHRvbiA9IFwiMTkyLjE2OC41MC41MFwiO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhQnV0dG9uMjEoaXBidXR0b24pO1xyXG4gICAgICAgICAgICB0aGlzLmNlcnRvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucG9udHVhY2FvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuaXAgPSBcIjE5Mi4xNjguNTAuNDRcIjtcclxuICAgICAgICAgICAgdGhpcy5pcFBhY290ZS5zdHJpbmcgPSBcIklQOjE5Mi4xNjguNTAuNDRcXG5cIitcclxuICAgICAgICAgICAgXCJNYXNrOjI1NS4yNTUuMjU1LjBcIjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b25Db250MiA9PSA3KXtcclxuICAgICAgICAgICAgaXBidXR0b24gPSBcIjE5Mi4xNjguNTAuNDRcIjtcclxuICAgICAgICAgICAgdGhpcy52ZXJpZmljYUJ1dHRvbjIxKGlwYnV0dG9uKTtcclxuICAgICAgICAgICAgdGhpcy5jZXJ0byArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmlwID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5pcFBhY290ZS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB2ZXJpZmljYUJ1dHRvbjIxOiBmdW5jdGlvbihpcGJ1dHRvbil7XHJcbiAgICAgICAgaWYodGhpcy5pcCA9PSBpcGJ1dHRvbil7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0YWRvLnN0cmluZyA9IFwiYWNlcnRvdVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNvbnQxICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ29udDIgKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdGFkby5zdHJpbmcgPSBcImVycm91ISFcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25Db250MSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNvbnQyICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZUNlbmFyaW86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5jb21wdXRhZG9yMS5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLmNvbXB1dGFkb3IyLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMuY29tcHV0YWRvcjMuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5jb21wdXRhZG9yNC5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLmNvbXB1dGFkb3I1LnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMuY29tcHV0YWRvcjYuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5pcDEuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5pcDIuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5pcDMuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5pcDQuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5pcDUuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5pcDYuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5pcDcuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5pcDguc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5yb3RlYWRvcjEuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5yb3RlYWRvcjIuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5yb3RlYWRvcjMuc2V0UG9zaXRpb24oMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5jYWJvMS5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLmNhYm8yLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXBhcmVjZUNlbmFyaW86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5jb21wdXRhZG9yMS5zZXRQb3NpdGlvbigtMzc5LCA5KTtcclxuICAgICAgICB0aGlzLmNvbXB1dGFkb3IyLnNldFBvc2l0aW9uKC0zNzksIDEwNyk7XHJcbiAgICAgICAgdGhpcy5jb21wdXRhZG9yMy5zZXRQb3NpdGlvbigtMzc5LCAyMTcpO1xyXG4gICAgICAgIHRoaXMuY29tcHV0YWRvcjQuc2V0UG9zaXRpb24oMzkxLCAyMTcpO1xyXG4gICAgICAgIHRoaXMuY29tcHV0YWRvcjUuc2V0UG9zaXRpb24oMzkxLCAxMDcpO1xyXG4gICAgICAgIHRoaXMuY29tcHV0YWRvcjYuc2V0UG9zaXRpb24oMzkxLCA5KTtcclxuICAgICAgICB0aGlzLmlwMS5zZXRQb3NpdGlvbigxODcsIC01OTApO1xyXG4gICAgICAgIHRoaXMuaXAyLnNldFBvc2l0aW9uKC0zNjMsIDYwKTtcclxuICAgICAgICB0aGlzLmlwMy5zZXRQb3NpdGlvbigtMzU0LCAxNjMpO1xyXG4gICAgICAgIHRoaXMuaXA0LnNldFBvc2l0aW9uKDM2NSwgMTYzKTtcclxuICAgICAgICB0aGlzLmlwNS5zZXRQb3NpdGlvbigzNjUsIC01MCk7XHJcbiAgICAgICAgdGhpcy5pcDYuc2V0UG9zaXRpb24oMzY1LCA2MCk7XHJcbiAgICAgICAgdGhpcy5pcDcuc2V0UG9zaXRpb24oMTI3LCAzNzUpO1xyXG4gICAgICAgIHRoaXMuaXA4LnNldFBvc2l0aW9uKDIwMywgMjA4KTtcclxuICAgICAgICB0aGlzLnJvdGVhZG9yMS5zZXRQb3NpdGlvbigtMTY2LCAxMzMpO1xyXG4gICAgICAgIHRoaXMucm90ZWFkb3IyLnNldFBvc2l0aW9uKDMzLCAyMDcpO1xyXG4gICAgICAgIHRoaXMucm90ZWFkb3IzLnNldFBvc2l0aW9uKDIwMSwgMTMzKTtcclxuICAgICAgICB0aGlzLmNhYm8xLnNldFBvc2l0aW9uKC03MCwgMTQ5KTtcclxuICAgICAgICB0aGlzLmNhYm8yLnNldFBvc2l0aW9uKDE0MCwgMTQyKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhVGV4dG8xOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udFRleHRvID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPcyByb3RlYWRvcmVzIHPDo28gdXRpbGl6YWRvcyBwYXJhIGludGVybGlnYXJcXG5cIitcclxuICAgICAgICAgICAgXCJhcyByZWRlcyBmw61zaWNhcyBlbnRyZSBzaS4gRWxlcyBvZmVyZWNlbVxcblwiK1xyXG4gICAgICAgICAgICBcIm3Dumx0aXBsb3MgY2FtaW5ob3MgcGFyYSBpbnRlcmNvbmVjdGFyIGFzIHJlZGVzIGbDrXNpY2FzLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBcyB0YWJlbGFzIGRlIHJvdGVhbWVudG8gaW5kaWNhbSBwYXJhIGNhZGEgcm90ZWFkb3JcXG5cIitcclxuICAgICAgICAgICAgXCJjb21vIGVsZSBkZXZlIGVuY2FtaW5oYXIgdW0gcGFjb3RlIGEgZmltIGRlIHF1ZVxcblwiK1xyXG4gICAgICAgICAgICBcImVzdGUgY2hlZ3VlIGEgdW1hIGNlcnRhIHJlZGUgZsOtc2ljYSBkZSBkZXN0aW5vLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBcyB0YWJlbGFzIGRlIHJvdGVhbWVudG8gc8OjbyBwcmVlbmNoaWRhc1xcblwiK1xyXG4gICAgICAgICAgICBcImF1dG9tYXRpY2FtZW50ZSwgYXRyYXbDqXMgZGUgcHJvdG9jb2xvcyBkZSByb3RlYW1lbnRvXFxuXCIrXHJcbiAgICAgICAgICAgIFwicGFkcm9uaXphZG9zLCBjb21vIG8gQkdQIChCb3JkZXIgR2F0ZXdheSBQcm90b2NvbClcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVmVqYSBhZ29yYSB1bSBleGVtcGxvIGRlIHJlZGUhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLmJnRmFzZTIuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTyBjZW5hcmlvIGFjaW1hIGRlbW9uc3RyYSB1bWEgcmVkZVxcblwiK1xyXG4gICAgICAgICAgICBcImNvbSA2IG1hcXVpbmFzIGUgMyByb3RlYWRvcmVzLCB2YW1vcyBvYmVyc2F2YS1sYSBwb3IgcGFydGVzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXB1dGFkb3IxLnNldFBvc2l0aW9uKDAsIDgwKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRhZG9yMS5zZXRTY2FsZSgwLjIsIDAuMik7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiUGVyY2ViYSBxdWUgZXN0YSBtYXF1aW5hIHBvc3N1aVxcblwiK1xyXG4gICAgICAgICAgICBcInVtIGVuZGVyZcOnbyBkZSBJUCB1dGlsaXphZG8gcGFyYSByZWRlcyBwcml2YWRhc1xcblwiK1xyXG4gICAgICAgICAgICBcInRhbWJlbSBwb3NzdWkgdW1hIG1hc2NhcmEgZGUgcmVkZSwgcmVwcmVzZW50YWRvIHBlbGEgL1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBIG1hc2NhcmEgZGUgcmVkZSBpZGVudGlmaWNhXFxuXCIrXHJcbiAgICAgICAgICAgIFwicXVhbnRvcyBiaXRzIHNhbyBkZSByZWRlIGUgcXVhbnRvcyBlc3Rhb1xcblwiK1xyXG4gICAgICAgICAgICBcInJlc2VydmFkb3MgcGFyYSBob3N0IVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA3KXtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRhZG9yMS5zZXRQb3NpdGlvbigtMzc5LCA5KTtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRhZG9yMS5zZXRTY2FsZSgwLjEsIDAuMSk7XHJcbiAgICAgICAgICAgIHRoaXMucm90ZWFkb3IxLnNldFNjYWxlKDAuMywgMC4zKTtcclxuICAgICAgICAgICAgdGhpcy5yb3RlYWRvcjEuc2V0UG9zaXRpb24oMCwgMTAwKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIHJvdGVhZG9yIG5lc3RlIGNlbmFyaW8gaW50ZXJsaWdhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYSByZWRlIGxvY2FsIGNvbSBhIHJlZGUgZXh0ZXJuYSwgcGFyYSBxdWUgaXNzbyBvY29ycmFcXG5cIitcclxuICAgICAgICAgICAgXCJvIHJvdGVhZG9yIHBvc3N1aSB1bWEgdGFiZWxhIGRlIHJvdGVhbWVudG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQSB0YWJlbGEgZGUgcm90ZWFtZW50byBwb3NzdWlcXG5cIitcclxuICAgICAgICAgICAgXCJvIGVuZGVyZcOnbyBkYSByZWRlLCBhIHN1YSBtYXNjYXJhIGUgYSBxdWFsIGludGVyZmFjZVxcblwiK1xyXG4gICAgICAgICAgICBcImVsYSBlc3RhIGNvbmVjdGFkYVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA5KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJWYW1vcyB2ZXIgaXNzbyBuYSBwcmF0aWNhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy50YWJSb3RlYW1lbnRvLnNldFBvc2l0aW9uKDMxMiwgMjQpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkEgdGFiZWxhIGRlIHJvdGVhbWVudG8gZSBwcmVlbmNoaWRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYSBtZWRpZGEgcXVlIG9zIHBhY290ZXMgZGUgaW5mb3JtYcOnYW9cXG5cIitcclxuICAgICAgICAgICAgXCJ2YW8gY2hlZ2FuZG8gYW8gcm90ZWFkb3JcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMTEpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk8gbWluaS1qb2dvIGEgc2VndWlyLCB0ZSBjb2xvY2EgbmEgcGVsZVxcblwiK1xyXG4gICAgICAgICAgICBcImRvIHJvdGVhZG9yLCB0ZW5kbyBxdWUgcHJlZW5jaGVyIGEgdGFiZWxhIGRlIHJvdGVhbWVudG9cXG5cIisgXHJcbiAgICAgICAgICAgIFwiZSBlbnRyZWdhciBvcyBwYWNvdGVzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEyKXtcclxuICAgICAgICAgICAgdGhpcy5zb21lQ2VuYXJpbygpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdGVhZG9yMi5zZXRQb3NpdGlvbigzMywgMjYwKTtcclxuICAgICAgICAgICAgdGhpcy50YWJSb3RlYW1lbnRvLnNldFBvc2l0aW9uKDAsIDYwKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBIHRhYmVsYSBkZSByb3RlYW1lbnRvIGRvIHJvdGVhZG9yXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY29tZcOnYSB2YXppYSwgcG9yZW0sIG8gbWVzbW8gZW52aWEgdW1hIG1lbnNhZ2VtIHBhcmFcXG5cIitcclxuICAgICAgICAgICAgXCJzdWFzIGludGVyZmFjZXMsIGEgZmltIGRlIGlkZW50aWZpY2FyIGFzIHJlZGVzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDbGlxdWUgbm9zIGJvdG9lcyBwYXJhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiaWRlbnRpZmljYXIgYXMgcmVkZXMgZSBkZXBvaXMgY2xpcXVlIGVtIGNvbnRpbnVhciFcIjtcclxuICAgICAgICAgICAgdGhpcy5pcFRhYmVsYTEuc3RyaW5nID0gXCJDbGlxdWUgcGFyYSBpZGVudGlmaWNhciByZWRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXBUYWJlbGEyLnN0cmluZyA9IFwiQ2xpcXVlIHBhcmEgaWRlbnRpZmljYXIgcmVkZVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxNCAmJiB0aGlzLmJ1dHRvbkNvbnQxID09IDEgJiYgdGhpcy5idXR0b25Db250MiA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDb20gYSB0YWJlbGEgbW9udGFkYSBvIHJvdGVhZG9yIHBvZGVcXG5cIitcclxuICAgICAgICAgICAgXCJjb21lw6dhciBhIGRpc3RyaWJ1aXIgb3MgcGFjb3RlcywgY2xpcXVlIG5hIHJlZGVcXG5cIitcclxuICAgICAgICAgICAgXCJwYXJhIG9uZGUgbyBwYWNvdGUgZGV2ZSBpcixkZXBvaXMgY2xpcXVlIGVtIGNvbnRpbnVhclwiO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZS5zZXRQb3NpdGlvbigzMDAsIDUwKTtcclxuICAgICAgICAgICAgdGhpcy5pcFBhY290ZS5zdHJpbmcgPSBcIklQOjE5Mi4xNjguMTAuNlxcblwiK1xyXG4gICAgICAgICAgICBcIk1hc2s6MjU1LjI1NS4yNTUuMFwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxNSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQSByZWRlIGNvcnJldGEgcGFyYSBvIGVudmlvIGRvIHBhY290ZSBlcmFcXG5cIitcclxuICAgICAgICAgICAgXCJhIHJlZGUgMTkyLjE2OC4xMC4wLCBvIHNldSBlcnJvIG91IGFjZXJ0byBwb2RlIHNlciB2aXN0b1xcblwiK1xyXG4gICAgICAgICAgICBcImVtIGNpbWEgZG8gcGFjb3RlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDE2KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJGYcOnYSBvIHJvdGVhbWVudG8gcGFyYSBvcyBwcm94aW1vcyA1IHBhY290ZXNcXG5cIitcclxuICAgICAgICAgICAgXCJhY2VydGUgcGVsbyBtZW5vcyAzIHBhcmEgYXZhbsOnYXIgcGFyYSBvIHF1aXohXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBwYXJhIGNvbWXDp2FyIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxNyl7XHJcbiAgICAgICAgICAgIHRoaXMuaXBQYWNvdGUuc3RyaW5nID0gXCJJUDoxOTIuMTY4LjUwLjVcXG5cIitcclxuICAgICAgICAgICAgXCJNYXNrOjI1NS4yNTUuMjU1LjBcIjtcclxuICAgICAgICAgICAgdGhpcy5pcCA9IFwiMTkyLjE2OC41MC41XCI7XHJcbiAgICAgICAgICAgIHRoaXMudHdCRy5zZXRQb3NpdGlvbigwLCAtMTM2MCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIwKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2UyXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMSl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImpvZ29GYXNlMlwiKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGFzc291RmFzZTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLnBvbnR1YWNhbyA9PSA2ICYmIHRoaXMuY2VydG8gPj0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvID0gMjA7XHJcbiAgICAgICAgICAgIHRoaXMudHdCRy5zZXRQb3NpdGlvbigtMywgLTIxMCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiUGFyYWJlbnMhIHZvY2UgcGFzc291IGRlIGZhc2VcXG5cIitcclxuICAgICAgICAgICAgXCJyZXNwb25kYSBhZ29yYSBhcyBxdWVzdG9lcyBkbyBxdWl6IVxcblwiK1xyXG4gICAgICAgICAgICBcImNsaXF1ZSBlbSBjb250aW51YXIgcGFyYSBwcm9zc2VndWlyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucG9udHVhY2FvID09IDYgJiYgdGhpcy5lcnJhZG8gPj0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvID0gMjE7XHJcbiAgICAgICAgICAgIHRoaXMudHdCRy5zZXRQb3NpdGlvbigtMywgLTIxMCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiUXVlIHBlbmEhIHZvY2UgbmFvIHBhc3NvdSBkZSBmYXNlXFxuXCIrXHJcbiAgICAgICAgICAgIFwicmV2ZWphIGEgZXhwbGljYcOnYW8gZSB0ZW50ZSBub3ZhbWVudGUhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBwYXJhIHByb3NzZWd1aXJcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICB0aGlzLnBhc3NvdUZhc2UoKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJnOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm8zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm82OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhYlJvdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsYmxObzE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxibE5vMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGJsTm8zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsYmxObzQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxibE5vNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGJsTm82OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvNjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwb250dWFjYW86IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udFRleHRvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9udHVhY2FvID0gMDtcclxuICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJOZXNzZSBNaW5pLUpvZ28sIHZvY2UgYXByZW5kZXJhIGNvbW8gbyBwYWNvdGVcXG5cIisgXHJcbiAgICAgICAgICAgIFwidHJhZmVnYSBuYSByZWRlLCBhdHJhdmVzIGRvIFRDUFwiO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZU5vczogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vMS5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vMi5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vMy5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNC5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNS5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgICAgICB0aGlzLm5vNi5zZXRQb3NpdGlvbigxMzYwLCAwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFwYXJlY2VOb3M6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ubzEuc2V0UG9zaXRpb24oLTI0MCwgLTE4MSk7XHJcbiAgICAgICAgdGhpcy5ubzIuc2V0UG9zaXRpb24oLTE4MSwgLTYpO1xyXG4gICAgICAgIHRoaXMubm8zLnNldFBvc2l0aW9uKC0xNSwgLTE4MSk7XHJcbiAgICAgICAgdGhpcy5ubzQuc2V0UG9zaXRpb24oMTIsIC0yNyk7XHJcbiAgICAgICAgdGhpcy5ubzUuc2V0UG9zaXRpb24oLTM5LCAxMDMpO1xyXG4gICAgICAgIHRoaXMubm82LnNldFBvc2l0aW9uKDE5MywgMTE1KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhVGV4dG8xOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udFRleHRvID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIFRDUCDDqSB1bSBwcm90b2NvbG8gZGUgbsOtdmVsXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZGEgY2FtYWRhIGRlIHRyYW5zcG9ydGUuIE8gUHJvdG9jb2xvIGRlIGNvbnRyb2xlIGRlXFxuXCIrXHJcbiAgICAgICAgICAgIFwidHJhbnNtaXNzw6NvIHByb3bDqiBjb25maWFiaWxpZGFkZSwgZW50cmVnYSBuYSBzZXF1ZW5jaWFcIjsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcImNvcnJldGEgZSB2ZXJpZmljYcOnw6NvIGRlIGVycm9zIHBhY290ZXNcXG5cIitcclxuICAgICAgICAgICAgXCJkZSBkYWRvcywgZW50cmUgb3MgZGlmZXJlbnRlcyBuw7NzIGRhIHJlZGVcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTm8gbWluaSBqb2dvIGEgc2VndWlyLCBjYWRhIGJvbGluaGEgdmVyZGVcXG5cIitcclxuICAgICAgICAgICAgXCJyZXByZXNlbnRhIHVtIG5vIG5hIHJlZGUsIG8gb2JqZXRpdm8gZG8gam9nbyBlXFxuXCIrXHJcbiAgICAgICAgICAgIFwibGV2YXIgbyBwYWNvdGUgZGEgc3VhIG9yaWdlbSBhbyBzZXUgZGVzdGlub1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJQYXJhIGlzc28gZXhpc3RlIG8gUklQXFxuXCIrIFxyXG4gICAgICAgICAgICBcIihSb3V0aW5nIEluZm9ybWF0aW9uIFByb3RvY29sKSDDqSB1bSBwYWRyw6NvIHBhcmFcXG5cIitcclxuICAgICAgICAgICAgXCJ0cm9jYSBkZSBpbmZvcm1hw6fDtWVzIGVudHJlIG9zIGdhdGV3YXlzIGUgaG9zdHMgZGUgcm90ZWFtZW50by5cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQSByZWRlIG11bmRpYWwgZGUgY29tcHV0YWRvcmVzIMOpIG9yZ2FuaXphZGFcXG5cIitcclxuICAgICAgICAgICAgXCJjb21vIHVtIGNvbmp1bnRvIGRlIHNpc3RlbWFzIGF1dMO0bm9tb3MuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk8gUklQIGVtaXRlIG1lbnNhZ2VucyBkZSBhdHVhbGl6YcOnw6NvXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZGFzIHN1YXMgcm90YXMgKFRhYmVsYXMgZGUgUm90ZWFtZW50bykgZW0gaW50ZXJ2YWxvcyByZWd1bGFyZXNcXG5cIitcclxuICAgICAgICAgICAgXCIoYSBjYWRhIDMwIHNlZ3VuZG9zKSBlIHF1YW5kbyBhIHRvcG9sb2dpYSBkYSByZWRlIG11ZGFyLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPcyByb3RlYWRvcmVzIGRvIFJJUCBtYW50w6ptIHNvbWVudGVcXG5cIitcclxuICAgICAgICAgICAgXCJhIG1lbGhvciByb3RhIMOgIHVtIGRlc3Rpbm8uXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY29tIGVzc2FzIGluZm9ybWHDp8O1ZXMgZW0gbWVudGUsIHZhbW9zIGFvIG1pbmktam9nb1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA3KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJObyBwYXBlbCBkZSB1bSBwYWNvdGUsIHZvY2UgdGVyYVxcblwiK1xyXG4gICAgICAgICAgICBcIjYgc2FsdG9zIHBhcmEgc2FpciBkbyBubyAxIGUgY2hlZ2FyIGFvIG5vIDYhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBlIGJvYSBzb3J0ZSEhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDgpe1xyXG4gICAgICAgICAgICB0aGlzLmJnLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlTm9zKCk7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcbiAgICBcclxuICAgICBcclxuICAgIFxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBcclxuICAgIC8vfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZmVzc29yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHRvRmFzZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9udHVhY2FvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvbnR1YWNhbyA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTmVzc2UgTWluaS1Kb2dvLCB2b2NlIGFwcmVuZGVyYSBjb21vIG8gcGFjb3RlXFxuXCIrIFxyXG4gICAgICAgICAgICBcInRyYWZlZ2EgbmEgcmVkZSwgYXRyYXZlcyBkbyBUQ1BcIjtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhVGV4dG8xOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udFRleHRvID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPcyByb3RlYWRvcmVzIHPDo28gdXRpbGl6YWRvcyBwYXJhIGludGVybGlnYXJcXG5cIitcclxuICAgICAgICAgICAgXCJhcyByZWRlcyBmw61zaWNhcyBlbnRyZSBzaS4gRWxlcyBvZmVyZWNlbVxcblwiK1xyXG4gICAgICAgICAgICBcIm3Dumx0aXBsb3MgY2FtaW5ob3MgcGFyYSBpbnRlcmNvbmVjdGFyIGFzIHJlZGVzIGbDrXNpY2FzLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBcyB0YWJlbGFzIGRlIHJvdGVhbWVudG8gaW5kaWNhbSBwYXJhIGNhZGEgcm90ZWFkb3JcXG5cIitcclxuICAgICAgICAgICAgXCJjb21vIGVsZSBkZXZlIGVuY2FtaW5oYXIgdW0gcGFjb3RlIGEgZmltIGRlIHF1ZVxcblwiK1xyXG4gICAgICAgICAgICBcImVzdGUgY2hlZ3VlIGEgdW1hIGNlcnRhIHJlZGUgZsOtc2ljYSBkZSBkZXN0aW5vLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBcyB0YWJlbGFzIGRlIHJvdGVhbWVudG8gc8OjbyBwcmVlbmNoaWRhc1xcblwiK1xyXG4gICAgICAgICAgICBcImF1dG9tYXRpY2FtZW50ZSwgYXRyYXbDqXMgZGUgcHJvdG9jb2xvcyBkZSByb3RlYW1lbnRvXFxuXCIrXHJcbiAgICAgICAgICAgIFwicGFkcm9uaXphZG9zLCBjb21vIG8gQkdQIChCb3JkZXIgR2F0ZXdheSBQcm90b2NvbClcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVmVqYSBhZ29yYSB1bSBleGVtcGxvIGRlIHJlZGUhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLmJnRmFzZTIuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTyBjZW5hcmlvIGFjaW1hIGRlbW9uc3RyYSB1bWEgcmVkZVxcblwiK1xyXG4gICAgICAgICAgICBcImNvbSA2IG1hcXVpbmFzIGUgMyByb3RlYWRvcmVzLCB2YW1vcyBvYmVyc2F2YS1sYSBwb3IgcGFydGVzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXB1dGFkb3IxLnNldFBvc2l0aW9uKDAsIDgwKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRhZG9yMS5zZXRTY2FsZSgwLjIsIDAuMik7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiUGVyY2ViYSBxdWUgZXN0YSBtYXF1aW5hIHBvc3N1aVxcblwiK1xyXG4gICAgICAgICAgICBcInVtIGVuZGVyZcOnbyBkZSBJUCB1dGlsaXphZG8gcGFyYSByZWRlcyBwcml2YWRhc1xcblwiK1xyXG4gICAgICAgICAgICBcInRhbWJlbSBwb3NzdWkgdW1hIG1hc2NhcmEgZGUgcmVkZSwgcmVwcmVzZW50YWRvIHBlbGEgL1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBIG1hc2NhcmEgZGUgcmVkZSBpZGVudGlmaWNhXFxuXCIrXHJcbiAgICAgICAgICAgIFwicXVhbnRvcyBiaXRzIHNhbyBkZSByZWRlIGUgcXVhbnRvcyBlc3Rhb1xcblwiK1xyXG4gICAgICAgICAgICBcInJlc2VydmFkb3MgcGFyYSBob3N0IVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA3KXtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRhZG9yMS5zZXRQb3NpdGlvbigtMzc5LCA5KTtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRhZG9yMS5zZXRTY2FsZSgwLjEsIDAuMSk7XHJcbiAgICAgICAgICAgIHRoaXMucm90ZWFkb3IxLnNldFNjYWxlKDAuMywgMC4zKTtcclxuICAgICAgICAgICAgdGhpcy5yb3RlYWRvcjEuc2V0UG9zaXRpb24oMCwgMTAwKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIHJvdGVhZG9yIG5lc3RlIGNlbmFyaW8gaW50ZXJsaWdhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYSByZWRlIGxvY2FsIGNvbSBhIHJlZGUgZXh0ZXJuYSwgcGFyYSBxdWUgaXNzbyBvY29ycmFcXG5cIitcclxuICAgICAgICAgICAgXCJvIHJvdGVhZG9yIHBvc3N1aSB1bWEgdGFiZWxhIGRlIHJvdGVhbWVudG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQSB0YWJlbGEgZGUgcm90ZWFtZW50byBwb3NzdWlcXG5cIitcclxuICAgICAgICAgICAgXCJvIGVuZGVyZcOnbyBkYSByZWRlLCBhIHN1YSBtYXNjYXJhIGUgYSBxdWFsIGludGVyZmFjZVxcblwiK1xyXG4gICAgICAgICAgICBcImVsYSBlc3RhIGNvbmVjdGFkYVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA5KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJWYW1vcyB2ZXIgaXNzbyBuYSBwcmF0aWNhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy50YWJSb3RlYW1lbnRvLnNldFBvc2l0aW9uKDMxMiwgMjQpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkEgdGFiZWxhIGRlIHJvdGVhbWVudG8gZSBwcmVlbmNoaWRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYSBtZWRpZGEgcXVlIG9zIHBhY290ZXMgZGUgaW5mb3JtYcOnYW9cXG5cIitcclxuICAgICAgICAgICAgXCJ2YW8gY2hlZ2FuZG8gYW8gcm90ZWFkb3JcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMTEpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk8gbWluaS1qb2dvIGEgc2VndWlyLCB0ZSBjb2xvY2EgbmEgcGVsZVxcblwiK1xyXG4gICAgICAgICAgICBcImRvIHJvdGVhZG9yLCB0ZW5kbyBxdWUgcHJlZW5jaGVyIGEgdGFiZWxhIGRlIHJvdGVhbWVudG9cXG5cIisgXHJcbiAgICAgICAgICAgIFwiZSBlbnRyZWdhciBvcyBwYWNvdGVzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEyKXtcclxuICAgICAgICAgICAgdGhpcy5zb21lQ2VuYXJpbygpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdGVhZG9yMi5zZXRQb3NpdGlvbigzMywgMjYwKTtcclxuICAgICAgICAgICAgdGhpcy50YWJSb3RlYW1lbnRvLnNldFBvc2l0aW9uKDAsIDYwKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJBIHRhYmVsYSBkZSByb3RlYW1lbnRvIGRvIHJvdGVhZG9yXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY29tZcOnYSB2YXppYSwgcG9yZW0sIG8gbWVzbW8gZW52aWEgdW1hIG1lbnNhZ2VtIHBhcmFcXG5cIitcclxuICAgICAgICAgICAgXCJzdWFzIGludGVyZmFjZXMsIGEgZmltIGRlIGlkZW50aWZpY2FyIGFzIHJlZGVzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDbGlxdWUgbm9zIGJvdG9lcyBwYXJhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiaWRlbnRpZmljYXIgYXMgcmVkZXMgZSBkZXBvaXMgY2xpcXVlIGVtIGNvbnRpbnVhciFcIjtcclxuICAgICAgICAgICAgdGhpcy5pcFRhYmVsYTEuc3RyaW5nID0gXCJDbGlxdWUgcGFyYSBpZGVudGlmaWNhciByZWRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXBUYWJlbGEyLnN0cmluZyA9IFwiQ2xpcXVlIHBhcmEgaWRlbnRpZmljYXIgcmVkZVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxNCAmJiB0aGlzLmJ1dHRvbkNvbnQxID09IDEgJiYgdGhpcy5idXR0b25Db250MiA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDb20gYSB0YWJlbGEgbW9udGFkYSBvIHJvdGVhZG9yIHBvZGVcXG5cIitcclxuICAgICAgICAgICAgXCJjb21lw6dhciBhIGRpc3RyaWJ1aXIgb3MgcGFjb3RlcywgY2xpcXVlIG5hIHJlZGVcXG5cIitcclxuICAgICAgICAgICAgXCJwYXJhIG9uZGUgbyBwYWNvdGUgZGV2ZSBpcixkZXBvaXMgY2xpcXVlIGVtIGNvbnRpbnVhclwiO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZS5zZXRQb3NpdGlvbigzMDAsIDUwKTtcclxuICAgICAgICAgICAgdGhpcy5pcFBhY290ZS5zdHJpbmcgPSBcIklQOjE5Mi4xNjguMTAuNlxcblwiK1xyXG4gICAgICAgICAgICBcIk1hc2s6MjU1LjI1NS4yNTUuMFwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxNSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQSByZWRlIGNvcnJldGEgcGFyYSBvIGVudmlvIGRvIHBhY290ZSBlcmFcXG5cIitcclxuICAgICAgICAgICAgXCJhIHJlZGUgMTkyLjE2OC4xMC4wLCBvIHNldSBlcnJvIG91IGFjZXJ0byBwb2RlIHNlciB2aXN0b1xcblwiK1xyXG4gICAgICAgICAgICBcImVtIGNpbWEgZG8gcGFjb3RlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDE2KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJGYcOnYSBvIHJvdGVhbWVudG8gcGFyYSBvcyBwcm94aW1vcyA1IHBhY290ZXNcXG5cIitcclxuICAgICAgICAgICAgXCJhY2VydGUgcGVsbyBtZW5vcyAzIHBhcmEgYXZhbsOnYXIgcGFyYSBvIHF1aXohXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBwYXJhIGNvbWXDp2FyIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxNyl7XHJcbiAgICAgICAgICAgIHRoaXMuaXBQYWNvdGUuc3RyaW5nID0gXCJJUDoxOTIuMTY4LjUwLjVcXG5cIitcclxuICAgICAgICAgICAgXCJNYXNrOjI1NS4yNTUuMjU1LjBcIjtcclxuICAgICAgICAgICAgdGhpcy5pcCA9IFwiMTkyLjE2OC41MC41XCI7XHJcbiAgICAgICAgICAgIHRoaXMudHdCRy5zZXRQb3NpdGlvbigwLCAtMTM2MCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIwKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2UyXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMSl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImpvZ29GYXNlMlwiKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBcclxuICAgIC8vfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgZHVyYWNhb0xvZ286IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcblxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdmFpUHJhTWFpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+IHRoaXMuZHVyYWNhb0xvZ28pIHtcclxuICAgICAgICAgICAgdGhpcy52YWlQcmFNYWluKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldE9wYWNpdHkoMCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZXNwb3N0YTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBlcmd1bnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUNlcnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXh0cmE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGVsYUZpbmFsUXVpejoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnYW1lT3Zlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFzQ2VydGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNFcnJhZGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b25UcnlBZ2Fpbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRpbWVyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3BDZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcEVycjogMCxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNvbWVSZXNwb3N0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXh0cmEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vc3RyYVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMi5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhUmVzcG9zdGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0yNTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKDExMik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGVyZ3VudGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnQSBjYW1hZGEgZGUgYWNlc3NvIGEgcmVkZSBlIHJlc3BvbnPDoXZlbCBwb3IuLi4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdJZGVudGlmaWNhciBvcyBpcHMgZGEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0NvbnRyb2xhciBvIGFjZXNzbyBhIHJlZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdlc3RhYmVsZcOnYSBlZmV0aXZhbWVudGUgdW0gbGluayBmw61zaWNvXFxuIGNvbSBvcyBtZWlvcyBmw61zaWNvcyBkYSByZWRlLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0FjZXNzYXIgYSByZWRlIGVtIGFwbGljYcOnw7VlcyBXZWIuJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFsIGRlc3NlcyBkaXNwb3NpdGl2b3MgbsOjbyBhdHVhXFxuIG5hIGNhbWFkYSBkZSBhY2Vzc28gYSByZWRlPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1JvdGVhZG9yJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnSFVCJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnU3dpdGNoJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnTmVuaHVtYSBkYXMgb3DDp8O1ZXMnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ08gc2luYWwgYW5hbMOzZ2ljbyBlIGNhcmFjdGVyaXphZG8gcG9yLi4uOic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1Bvc3N1aXIgYXBlbmFzIHVtXFxuIGNvbmp1bnRvIGxpbWl0YWRvIGRlIHZhbG9yZXMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdUZXIgdW0gY29uanVudG8gaW5maW5pdG8gZGUgdmFsb3Jlc1xcbiBudW0gaW50ZXJ2YWxvIGRlIHRlbXBvIHF1YWxxdWVyJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnU2VyIGFsdGVyYWRvIGVtIGNvbnTDrW51byc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1NlciB1bSBzaW5hbCBxdWUgbsOjbyBwb3NzdWkgZmFsaGFzJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdPIHNpbmFsIGRpZ2l0YWwgZSBjYXJhY3Rlcml6YWRvIHBvci4uLjonO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdTZXIgYWx0ZXJhZG8gZW0gY29udMOtbnVvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnU2VyIHVtIHNpbmFsIHF1ZSBuw6NvIHBvc3N1aSBmYWxoYXMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdUZXIgdW0gY29uanVudG8gaW5maW5pdG8gZGUgdmFsb3Jlc1xcbiBudW0gaW50ZXJ2YWxvIGRlIHRlbXBvIHF1YWxxdWVyJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnUG9zc3VpciBhcGVuYXMgdW1cXG4gY29uanVudG8gbGltaXRhZG8gZGUgdmFsb3Jlcyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVhaXMgZGVzc2VzIGVsZW1lbnRvc1xcbiBjb21ww7VlbSBvIGLDoXNpY28gZGUgdW1hIHJlZGU/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAndHJhbnNtaXNzb3JlcywgcmVjZXB0b3JlcyBlIG8gbWVpbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ3Byb3RvY29sb3MgZSBzZXJ2acOnb3MnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdpbmZvcm1hw6fDtWVzIGUgdXN1w6FyaW9zJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnY29tcHV0YWRvciBlIGNhYm8gZGUgcmVkZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcENlcnRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucmVzcENlciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BFcnJhZG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZW92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50ZWxhRmluYWxRdWl6LnNldFBvc2l0aW9uWCgwKTtcclxuICAgICAgICBpZih0aGlzLnJlc3BDZXI+PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UcnlBZ2Fpbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ1BhcmFiZW5zIVxcbicrXHJcbiAgICAgICAgICAgICdWb2NlIHBhc3NvdSBubyBRdWl6ISc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnQWghIHF1ZSBwZW5hIVxcbicrXHJcbiAgICAgICAgICAgICdWb2NlIG5hbyBwYXNzb3Ugbm8gUXVpeiFcXG4nKyBcclxuICAgICAgICAgICAgJ3RlbnRlIG5vdmFtZW50ZSEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0NlcnRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIGNvcnJldGFzOiAnK3RoaXMucmVzcENlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0VycmFkYXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBFcnJhZGFzOiAnK3RoaXMucmVzcEVycjsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMTAwMDAwO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcENlciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyID0gMDtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9zdHJhUmVzcG9zdGEoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy50aW1lciA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVvdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGltZXIgLT0gZHQ7XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVzcG9zdGExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGE0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwZXJndW50YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFDZXJ0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUV4dHJhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRlbGFGaW5hbFF1aXo6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0NlcnRhczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFzRXJyYWRhczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uVHJ5QWdhaW46IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcDogMCxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMCxcclxuICAgICAgICBcclxuICAgICAgICB0aW1lcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwQ2VyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3BFcnI6IDAsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzb21lUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldE9wYWNpdHkoMCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtb3N0cmFSZXNwb3N0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEzLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXh0cmEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVJlc3Bvc3RhczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKDExMik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTE4KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMjU4KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBlcmd1bnRhczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ0EgY2FtYWRhIEludGVybmV0IGUgcmVzcG9uc8OhdmVsIHBvci4uLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0NvbnRyb2xhciBvIGFjZXNzbyBhIHJlZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdHZXJhciBlIHRyYW5zbWl0aXIgbyBzaW5hbCBwZWxvIG1laW8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdHZXJlbmNpYXIgb3MgcGFjb3RlcyBuYSByZWRlJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnQWNlc3NhciBhIHJlZGUgZW0gYXBsaWNhw6fDtWVzIFdlYic7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVhbCBkb3Mgc2VndWludGVzIG7Do28gw6kgdmVyZGFkZWlyb1xcbiBzb2JyZSB1bSBlbmRlcmXDp28gSVA/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnVW0gZW5kZXJlw6dvIElQXFxuIGdlcmFsbWVudGUgw6kgcmVwcmVzZW50YWRvIG5vIGZvcm1hdG9cXG4gaGV4YWRlY2ltYWwgcGFyYSBvIHVzdcOhcmlvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnVW0gZW5kZXJlw6dvIElQIMOpIHVtIGVuZGVyZcOnbyBsw7NnaWNvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnVW0gZW5kZXJlw6dvIElQIMOpIGdsb2JhbG1lbnRlXFxuIGV4Y2x1c2l2byBlbSB1bWEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1VtIGVuZGVyZcOnbyBJUCBwb2RlIHNlciBjb25zaWRlcmFkb1xcbiBjb21vIGNvbnNpc3RpbmRvIGRlXFxuIHVtYSBwYXJ0ZSBkZSByZWRlIGUgdW1hIHBhcnRlIGRlIGhvc3QnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgZGFzIHNlZ3VpbnRlcyBtw6FzY2FyYXMgcGFkcsOjb1xcbiBwYXJhIG9zIHByaW5jaXBhaXNcXG4gbsO6bWVyb3MgZGUgY2xhc3NlIGVzdMOhIGluY29ycmV0YT8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdNw6FzY2FyYSBDbGFzc2UgQSAyNTUuMC4wLjAgb3UgLzgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdNw6FzY2FyYSBDbGFzc2UgRCAyNTUuMjU1LjI1NS4yNTUgb3UgLzMyJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnTcOhc2NhcmEgQ2xhc3NlIEIgMjU1LjI1NS4wLjAgb3UgLzE2JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnTcOhc2NhcmEgY2xhc3NlIEMgMjU1LjI1NS4yNTUuMCBvdSAvMjQnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ08gcXVlIGZheiBvIEFSUCAoQWRkcmVzcyBSZXNvbHV0aW9uIFByb3RvY29sKT8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdSZXNvbHZlIG8gZW5kZXJlw6dvIElQXFxuIHBhcmEgZW5kZXJlw6dvIE1BQyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1Jlc29sdmUgbyBjYW1wbyBUWVBFXFxuIHBhcmEgbyBlbmRlcmXDp28gTUFDJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnUmVzb2x2ZSBvIGVuZGVyZcOnbyBNQUNcXG4gcGFyYSBvIGNhbXBvIFRZUEUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdSZXNvbHZlIGVuZGVyZcOnb3MgTUFDXFxuIHBhcmEgZW5kZXJlw6dvcyBJUCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVhbCBvIG51bWVybyBtw6F4aW1vIGRlIGhvc3RzIHBvc3PDrXZlaXNcXG4gZW0gdW1hIHJlZGUgY2xhc3NlIEM/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnMjU0JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnMTI4JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnMjU2JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnNjQnO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BDZXJ0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BDZXIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwRXJyYWRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdhbWVvdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGVsYUZpbmFsUXVpei5zZXRQb3NpdGlvblgoMCk7XHJcbiAgICAgICAgaWYodGhpcy5yZXNwQ2VyPj0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVHJ5QWdhaW4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLnN0cmluZyA9ICdQYXJhYmVucyFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jZSBwYXNzb3Ugbm8gUXVpeiEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ0FoISBxdWUgcGVuYSFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jZSBuYW8gcGFzc291IG5vIFF1aXohXFxuJysgXHJcbiAgICAgICAgICAgICd0ZW50ZSBub3ZhbWVudGUhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNDZXJ0YXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBjb3JyZXRhczogJyt0aGlzLnJlc3BDZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNFcnJhZGFzLnN0cmluZyA9ICdSZXNwb3N0YXMgRXJyYWRhczogJyt0aGlzLnJlc3BFcnI7IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDEwMDAwMDtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLnJlc3BDZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciA9IDA7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1vc3RyYVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGltZXIgPCAxKXtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3Bvc3RhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGVyZ3VudGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhQ2VydGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFeHRyYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZWxhRmluYWxRdWl6OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNDZXJ0YXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0VycmFkYXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvblRyeUFnYWluOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3A6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcENlcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwRXJyOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW9zdHJhUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FSZXNwb3N0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTI1OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZXJndW50YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdBIGNhbWFkYSB0cmFuc3BvcnRlIGUgcmVzcG9uc8OhdmVsIHBvci4uLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0dlcmVuY2lhciBvcyBwYWNvdGVzIG5hIHJlZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdHZXJhciBlIHRyYW5zbWl0aXIgbyBzaW5hbCBwZWxvIG1laW8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdFc3RhYmVsZWNlciB1bWEgY29uZXjDo28gZmltIGEgZmltXFxuIChjb25leMOjbyBjb25macOhdmVsKWVudHJlIGEgb3JpZ2VtIGUgbyBkZXN0aW5vXFxuIGRvcyBkYWRvcyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0FjZXNzYXIgYSByZWRlIGVtIGFwbGljYcOnw7VlcyBXZWInO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgZGVzdGVzIHByb3RvY29sb3MgbmFvIHBlcnRlbmNlXFxuIGEgY2FtYWRhIGRlIHRyYW5zcG9ydGU/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnQVJQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnVENQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnSVAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdGVFAnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgZGVzdGVzIGRpc3Bvc2l0aXZvc1xcbiBhdHVhIG5hIGNhbWFkYSBkZSB0cmFuc3BvcnRlPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1N3aXRjaCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1JvdGVhZG9yJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnSFVCJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnTmVuaHVtYSBkYXMgb3DDp8O1ZXMgYWNpbWEnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ05hIGNhbWFkYSBkZSB0cmFuc3BvcnRlXFxuIG8gcHJvdG9jb2xvIHBhcmEgZ2FyYW50aXJcXG4gYSBjb25maWFiaWxpZGFkZSBlLi4uPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0lQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnRlRQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnSFRUUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1RDUCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnT3MgcHJvdG9jb2xvcyBkZSBjYW1hZGEgZGUgdHJhbnNwb3J0ZVxcbiBxdWUgZXN0YWJlbGVjZW0gdW1hIGNvbmV4w6NvIGNvbSBvdXRybyBuw7NcXG4gYW50ZXMgZGUgY29tZcOnYXJlbSBhIHRyYW5zbWl0aXIgZGFkb3NcXG4gc8OjbyBjb25oZWNpZG9zIGNvbW8gPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1Byb3RvY29sb3Mgb3JpZW50YWRvcyDDoCBjb25leMOjbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1Byb3RvY29sb3Mgc2VtIGNvbmV4w6NvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnUHJvdG9jb2xvcyBvcmllbnRhZG9zIGEgU3luJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnUHJvdG9jb2xvcyBvcmllbnRhZG9zIHBhcmEgQWNrJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwQ2VydG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcEVycmFkbzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BFcnIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnYW1lb3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRlbGFGaW5hbFF1aXouc2V0UG9zaXRpb25YKDApO1xyXG4gICAgICAgIGlmKHRoaXMucmVzcENlcj49IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRyeUFnYWluLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnUGFyYWJlbnMhXFxuJytcclxuICAgICAgICAgICAgJ1ZvY2UgcGFzc291IG5vIFF1aXohJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLnN0cmluZyA9ICdBaCEgcXVlIHBlbmEhXFxuJytcclxuICAgICAgICAgICAgJ1ZvY2UgbmFvIHBhc3NvdSBubyBRdWl6IVxcbicrIFxyXG4gICAgICAgICAgICAndGVudGUgbm92YW1lbnRlISc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGFzQ2VydGFzLnN0cmluZyA9ICdSZXNwb3N0YXMgY29ycmV0YXM6ICcrdGhpcy5yZXNwQ2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGFzRXJyYWRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIEVycmFkYXM6ICcrdGhpcy5yZXNwRXJyOyBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAxMDAwMDA7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyID0gMDtcclxuICAgICAgICB0aGlzLnJlc3BFcnIgPSAwO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGFzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3N0cmFSZXNwb3N0YSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnRpbWVyIDwgMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGFzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aW1lciAtPSBkdDtcclxuXHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZXNwb3N0YTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBlcmd1bnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUNlcnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXh0cmE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGVsYUZpbmFsUXVpejoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnYW1lT3Zlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFzQ2VydGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNFcnJhZGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b25UcnlBZ2Fpbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRpbWVyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3BDZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcEVycjogMCxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNvbWVSZXNwb3N0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXh0cmEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vc3RyYVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMi5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhUmVzcG9zdGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0yNTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKDExMik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGVyZ3VudGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnQSBjYW1hZGEgZGUgYXBsaWNhw6fDo28gZSByZXNwb25zw6F2ZWwgcG9yLi4uJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnR2VyZW5jaWFyIG9zIHBhY290ZXMgbmEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0VzdGFiZWxlY2VyIHVtYSBjb25leMOjbyBmaW0gYSBmaW1cXG4gKGNvbmV4w6NvIGNvbmZpw6F2ZWwpZW50cmUgYSBvcmlnZW0gZSBvIGRlc3Rpbm9cXG4gZG9zIGRhZG9zLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1Byb3RvY29sb3MgZGUgY29tdW5pY2HDp8Ojb1xcbiBjb20gYXMgZGlmZXJlbnRlcyBhcGxpY2HDp8O1ZXMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdBY2Vzc2FyIGEgcmVkZSBlbSBhcGxpY2HDp8O1ZXMgV2ViJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdOYSBjYW1hZGEgZGUgYXBsaWNhw6fDo29cXG4gbyBwcm90b2NvbG8gSFRUUCBlIHJlc3BvbnNhdmVsIHBvci4uLj8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdFeGliaXIgcGFnaW5hcyB3ZWInO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdSZWNlYmVyIGFycXV2b3MgZGUgdmlkZW8gZGEgaW50ZXJuZXQgJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnRXN0YWJlbGVjZXIgdW1hIGNvbmV4w6NvIHNlZ3VyYSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0JhaXhhciBhcnF1aXZvcyBUb3JyZW50JztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdPIHByb2dyYW1hIEZpbGV6aWxsYSBlIG8gcHJvdG9jb2xvIEZUUFxcbiBzw6NvIHJlc3BvbnNhdmVpcyBwb3IgJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnU2VndXJhbsOnYSBuYSByZWRlJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnVHJhbnNmZXJlbmNpYSBkZSBhcnF1aXZvcyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0FybWF6ZW5hbWVudG8gZW0gbnV2ZW0nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdDcmlwdG9ncmFmaWEgZGUgZGFkb3MnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgZGVzdGVzIMOpIHVtIHByb3RvY29sb1xcbiBkZSBjYW1hZGEgZGUgYXBsaWNhw6fDo28/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnVENQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnREhDUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0V0aGVybmV0JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnSFRUUCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnTyBxdWUgc2lnbmlmaWNhXFxuIHVtIGPDs2RpZ28gZGUgc3RhdHVzIEhUVFAgZGUgXCI0MDRcIj8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdFcnJvIGRlIHByb3RvY29sbyAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdEb2N1bWVudG8gZm9pIG1vdmlkbyAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdSZWN1cGVyYcOnw6NvIGJlbSBzdWNlZGlkYSBkbyBkb2N1bWVudG8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdEb2N1bWVudG8gbsOjbyBlbmNvbnRyYWRvICc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcENlcnRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucmVzcENlciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BFcnJhZG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZW92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50ZWxhRmluYWxRdWl6LnNldFBvc2l0aW9uWCgwKTtcclxuICAgICAgICBpZih0aGlzLnJlc3BDZXI+PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UcnlBZ2Fpbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ1BhcmFiZW5zIVxcbicrXHJcbiAgICAgICAgICAgICdWb2NlIHBhc3NvdSBubyBRdWl6ISc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnQWghIHF1ZSBwZW5hIVxcbicrXHJcbiAgICAgICAgICAgICdWb2NlIG5hbyBwYXNzb3Ugbm8gUXVpeiFcXG4nKyBcclxuICAgICAgICAgICAgJ3RlbnRlIG5vdmFtZW50ZSEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0NlcnRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIGNvcnJldGFzOiAnK3RoaXMucmVzcENlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0VycmFkYXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBFcnJhZGFzOiAnK3RoaXMucmVzcEVycjsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMTAwMDAwO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcENlciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyID0gMDtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9zdHJhUmVzcG9zdGEoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy50aW1lciA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVvdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGltZXIgLT0gZHQ7XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=