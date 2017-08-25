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

        contador: 0
    },

    mudaTexto: function mudaTexto() {
        if (this.contador === 0) {
            this.label.string = 'Rede de computadores é um conjunto de computadores\n' + 'autônomos interconectados por uma única tecnologia.';
            this.contador += 1;
        } else if (this.contador == 1) {
            this.label.string = 'Em rede de computadores existem 2 modelos de protocolos\n' + 'O modelo logico OSI\n' + 'e a arquitetura TCP/IP';
            this.contador += 1;
        } else if (this.contador == 2) {
            this.label.string = 'O modelo OSI se baseia em uma proposta desenvolvida\n' + 'pela ISO (International Standards Organization)\n' + 'como um primeiro passo em direção à padronização\n' + 'internacional dos protocolos empregados nas diversas camadas';
            this.contador += 1;
        } else if (this.contador == 3) {
            this.label.string = 'O modelo OSI possui 7 camadas, são elas:\n' + 'Física\n' + 'Enlace\n' + 'Redes';
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
        this.textoFase.string = "Como pode ser visto, a diferença entre os sinais\n" + "é bem perceptivel";
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
            this.textoFase.string = "O sinal analogico é gerado como uma onda\n" + "já que os valores vão se alterando no intervalo de tempo";
            this.contTexto += 1;
        } else if (this.contTexto == 1) {
            this.textoFase.string = "Já o sinal digital é gerado como uma reta\n" + "já que possui um conjunto de valores em um intervalo de tempo";
            this.contTexto += 1;
        } else if (this.contTexto == 2) {
            this.textoFase.string = "A camada de acesso a rede tambem fornece\n" + "o serviço de  transformar  um  canal  de transmissão  bruta\n" + "em  uma  linha  que  pareça  livre  de  erros  de  transmissão";
            this.contTexto += 1;
        } else if (this.contTexto == 3) {
            this.textoFase.string = "Oferecendo enquadramento de bits\n" + "verificação de erros e protocolos que assegurem a correçao de erros";
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
            this.textoFase.string = "O sinal digital é gerado como um conjunto de retas\n" + "já que possui um conjunto limitado de valores em um intervalo de tempo";
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
            this.pergunta.string = 'A camada de acesso a rede é responsável por...';

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
            this.pergunta.string = 'O sinal analógico é caracterizado por...:';

            this.resposta1.string = 'Possuir apenas um\n conjunto limitado de valores';

            this.resposta2.string = 'Ter um conjunto infinito de valores\n num intervalo de tempo qualquer';

            this.resposta3.string = 'Ser alterado em contínuo';

            this.resposta4.string = 'Ser um sinal que não possui falhas';
        } else if (this.contador == 3) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'O sinal digital é caracterizado por...:';

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

            this.resposta3.string = 'Estabelecer uma conexão fim a fim\n (conexão confiável)entre a origem e o destino\n dos dados';

            this.resposta4.string = 'Acessar a rede em aplicações Web';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Qual destes protocolos não pertence\n a camada de transporte?';

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

            this.resposta3.string = 'Protocolos de comunicação\n com as diferentes aplicações';

            this.resposta4.string = 'Acessar a rede em aplicações Web';
        } else if (this.contador == 1) {
            this.someResposta();
            this.trocaRespostas();
            this.pergunta.string = 'Na camada de aplicação\n o protocolo HTTP é responsavel por...?';

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
},{}]},{},["btnCarregarJogo","btnNovoJogo","btnOpcoes","btnPlayCamada1","btnPlayCamada2","btnPlayCamada3","btnPlayCamada4","btnPlayCamada5","btnQuiz1","btnQuiz2","btnQuiz3","btnQuiz4","btnQuiz5","btnAcessoARede","btnAplicacao","btnInternet","btnTesteFinal","btnTransporte","btnContFase1","btnContFase2","btnContFase3","btnContFase4","btnContFase5","creditroll","alvo","logicaFase1-1","logicaFase1","logicaFase2","logicaFase3","logicaFase4","logo","profCamada1","profCamada2","profCamada3","profCamada4","quizFase1","quizFase2","quizFase3","quizFase4","quizFase5"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xvZ2ljYSBmYXNlcy9hbHZvLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGNhbWFkYXMvYnRuQWNlc3NvQVJlZGUuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgY2FtYWRhcy9idG5BcGxpY2FjYW8uanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0bkNhcnJlZ2FySm9nby5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBkaWFsb2d1ZXMvYnRuQ29udEZhc2UxLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGRpYWxvZ3Vlcy9idG5Db250RmFzZTIuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgZGlhbG9ndWVzL2J0bkNvbnRGYXNlMy5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBkaWFsb2d1ZXMvYnRuQ29udEZhc2U0LmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGRpYWxvZ3Vlcy9idG5Db250RmFzZTUuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbnMgY2FtYWRhcy9idG5JbnRlcm5ldC5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuTm92b0pvZ28uanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J0bk9wY29lcy5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhMS5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhMi5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhMy5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhNC5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnRuUGxheS9idG5QbGF5Q2FtYWRhNS5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9uIHF1aXovYnRuUXVpejEuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbiBxdWl6L2J0blF1aXoyLmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b24gcXVpei9idG5RdWl6My5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9uIHF1aXovYnRuUXVpejQuanMiLCJhc3NldHMvc2NyaXB0cy9idXR0b25zL2J1dHRvbiBxdWl6L2J0blF1aXo1LmpzIiwiYXNzZXRzL3NjcmlwdHMvYnV0dG9ucy9idXR0b25zIGNhbWFkYXMvYnRuVGVzdGVGaW5hbC5qcyIsImFzc2V0cy9zY3JpcHRzL2J1dHRvbnMvYnV0dG9ucyBjYW1hZGFzL2J0blRyYW5zcG9ydGUuanMiLCJhc3NldHMvc2NyaXB0cy9jcmVkaXRyb2xsLmpzIiwiYXNzZXRzL3NjcmlwdHMvbG9naWNhIGZhc2VzL2xvZ2ljYUZhc2UxLTEuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTEuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTIuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTMuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dpY2EgZmFzZXMvbG9naWNhRmFzZTQuanMiLCJhc3NldHMvc2NyaXB0cy9sb2dvLmpzIiwiYXNzZXRzL3NjcmlwdHMvcHJvZnMvcHJvZkNhbWFkYTEuanMiLCJhc3NldHMvc2NyaXB0cy9wcm9mcy9wcm9mQ2FtYWRhMi5qcyIsImFzc2V0cy9zY3JpcHRzL3Byb2ZzL3Byb2ZDYW1hZGEzLmpzIiwiYXNzZXRzL3NjcmlwdHMvcHJvZnMvcHJvZkNhbWFkYTQuanMiLCJhc3NldHMvc2NyaXB0cy9xdWl6IGZhc2VzL3F1aXpGYXNlMS5qcyIsImFzc2V0cy9zY3JpcHRzL3F1aXogZmFzZXMvcXVpekZhc2UyLmpzIiwiYXNzZXRzL3NjcmlwdHMvcXVpeiBmYXNlcy9xdWl6RmFzZTMuanMiLCJhc3NldHMvc2NyaXB0cy9xdWl6IGZhc2VzL3F1aXpGYXNlNC5qcyIsImFzc2V0cy9zY3JpcHRzL3F1aXogZmFzZXMvcXVpekZhc2U1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNJOztBQUVBO0FBQ0k7QUFEUTs7QUFJWjtBQUNBOztBQVJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZLO0FBekNEOztBQStDWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFJRDtBQUNBOztBQXJFSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSztBQXpDRDs7QUErQ1o7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDQTs7QUFuRUs7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTs7QUFyQks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkk7O0FBS1I7QUFYUTs7QUFjWjtBQUNJO0FBQ0k7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFFQTtBQUNBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUNBO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUlIOztBQXZGSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQU5ROztBQVNaO0FBQ0k7QUFDSTtBQUVBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUlBO0FBQ0g7QUFDRztBQUlBO0FBQ0g7QUFDRztBQUVBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUdBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFFSDs7QUExREk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFOUTs7QUFTWjtBQUNJO0FBQ0k7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBRUg7O0FBL0NJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBTlE7O0FBU1o7QUFDSTtBQUNJO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFJRDtBQUNBO0FBQ0k7QUFDQTtBQUdIOztBQXRESTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQTFCUTs7QUE2Qlo7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUVBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFFQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFJSDs7QUFyRUk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBekNEOztBQWdEWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBOztBQXBFSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0k7QUFDSDs7QUFFRDtBQUNBOztBQXJCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSztBQXpDRDs7QUErQ1o7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBSUQ7QUFDQTs7QUFyRUs7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRkc7O0FBS1A7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBS1Q7QUFDSTtBQUNBO0FBRks7O0FBekNEOztBQWdEWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBOztBQXBFSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQVRROztBQVlaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBRUg7O0FBRUQ7QUFDSDtBQXpDSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGQTs7QUFLSjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGSTs7QUFLUjtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRTs7QUFLTjtBQUNJO0FBQ0E7QUFGZ0I7O0FBS3BCO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZXOztBQUtmOztBQUVBOztBQUVBO0FBdEVROztBQXlFWjtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDs7QUFFRDs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBRUE7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNBO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjtBQXBQSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGQTs7QUFLSjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGSTs7QUFLUjtBQUNJO0FBQ0E7QUFGRzs7QUFLUDtBQUNJO0FBQ0E7QUFGRTs7QUFLTjtBQUNJO0FBQ0E7QUFGZ0I7O0FBS3BCO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZXOztBQUtmOztBQUVBOztBQUVBO0FBM0VROztBQThFWjtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVIOztBQUVEOztBQUVBO0FBQ0k7QUFDQTtBQUNIOztBQUVEOztBQUVBO0FBQ0k7QUFDQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBR0E7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBRUE7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFFSTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDSDtBQUlKO0FBdlFJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZBOztBQUtKO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZlOztBQUtuQjtBQUNJO0FBQ0E7QUFGZTs7QUFLbkI7QUFDSTtBQUNBO0FBRmU7O0FBS25CO0FBQ0k7QUFDQTtBQUZlOztBQUtuQjtBQUNJO0FBQ0E7QUFGZTs7QUFLbkI7QUFDSTtBQUNBO0FBRmU7O0FBS25CO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjs7QUFFQTs7QUFFQTs7QUFuSFE7O0FBdUhaO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBSUE7QUFDQTtBQUVIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSTtBQUNIO0FBQ0o7O0FBR0Q7QUFDQTtBQUNJOztBQUVBO0FBQ0k7QUFDSDs7QUFFRDtBQUNIO0FBNVdJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZBOztBQUtKO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZDOztBQUtMO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGSTs7QUFLUjtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGSzs7QUFLVDtBQUNJO0FBQ0E7QUFGWTs7QUFLaEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCO0FBQ0k7QUFDQTtBQUZZOztBQUtoQjtBQUNJO0FBQ0E7QUFGUTs7QUFLWjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBckpROztBQXlKWjtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFJQTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBSUE7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFLRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0E7O0FBRUk7O0FBRUE7O0FBRUE7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUNBO0FBQ0g7QUE1a0JJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZJOztBQUtSO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZLOztBQUtUO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZTOztBQUtiO0FBQ0k7QUFDQTtBQUZHOztBQUtQO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZVOztBQUtkOztBQUVBOztBQUVBOztBQUVBOztBQTdFUTs7QUFpRlo7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFFQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFHQTtBQUNIO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBR0E7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNKOztBQUlEO0FBQ0E7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0g7QUFoVEk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7O0FBRUE7QUFIUTs7QUFNWjtBQUNBO0FBQ0k7QUFFSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFFSDtBQUNEO0FBRUg7QUEzQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFFSDs7QUFwQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFDSDs7QUFuQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFDSDs7QUFuQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0k7QUFDSDs7QUFuQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZjOztBQUtsQjtBQUNJO0FBQ0E7QUFGWTs7QUFLaEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFwRlE7O0FBdUZaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNJO0FBQ0E7QUFFSDtBQUNHO0FBR0g7O0FBRUQ7O0FBRUE7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUVIO0FBNU9JOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBcEZROztBQXVGWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBRUg7QUFDRztBQUdIOztBQUVEOztBQUVBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7O0FBRUQ7QUFFSDtBQTVPSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGVzs7QUFLZjtBQUNJO0FBQ0E7QUFGTTs7QUFLVjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmM7O0FBS2xCO0FBQ0k7QUFDQTtBQUZZOztBQUtoQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQXBGUTs7QUF1Rlo7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDSjs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0k7QUFDQTtBQUVIO0FBQ0c7QUFHSDs7QUFFRDs7QUFFQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIOztBQUVEO0FBRUg7QUE1T0k7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk87O0FBS1g7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRlc7O0FBS2Y7QUFDSTtBQUNBO0FBRk07O0FBS1Y7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZjOztBQUtsQjtBQUNJO0FBQ0E7QUFGWTs7QUFLaEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFwRlE7O0FBdUZaO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBRUg7QUFDRztBQUdIOztBQUVEOztBQUVBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDs7QUFFRDtBQUVIO0FBNU9JOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZPOztBQUtYO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYTs7QUFLakI7QUFDSTtBQUNBO0FBRmE7O0FBS2pCO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZXOztBQUtmO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZhOztBQUtqQjtBQUNJO0FBQ0E7QUFGYzs7QUFLbEI7QUFDSTtBQUNBO0FBRlk7O0FBS2hCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBcEZROztBQXVGWjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0k7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7QUFDRztBQUNIO0FBQ0o7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNEO0FBQ0E7QUFDQTs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBOztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNBO0FBRUg7QUFDRztBQUdIOztBQUVEOztBQUVBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEO0FBQ0k7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDSTtBQUNIO0FBQ0c7QUFDSDtBQUNHO0FBQ0g7O0FBRUQ7QUFFSDtBQWpVSSIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGlja1JhZGlvczogMCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2YxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Y0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYUJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbjEuc2V0UG9zaXRpb24oMzI2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjIuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjMuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjQuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjUuc2V0UG9zaXRpb24oNTk2LCAtMjQ0KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNob3dQcm9mQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucHJvZjEuc2V0T3BhY2l0eSgxMDAwKTtcclxuICAgICAgICB0aGlzLnByb2YyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjQuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLm11ZGFCdXR0b24oKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9mMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24xOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b240OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b24xLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24yLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24zLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b240LnNldFBvc2l0aW9uKDMyNiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b241LnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzaG93UHJvZkJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnByb2YxLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjMuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnByb2Y0LnNldE9wYWNpdHkoMTAwMCk7XHJcbiAgICAgICAgdGhpcy5tdWRhQnV0dG9uKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub1NlbGVjdEZhc2U6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2VsZWN0RmFzZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHF1YWRybzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYVRleHRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdSZWRlIGRlIGNvbXB1dGFkb3JlcyDDqSB1bSBjb25qdW50byBkZSBjb21wdXRhZG9yZXNcXG4nKyBcclxuICAgICAgICAgICAgJ2F1dMO0bm9tb3MgaW50ZXJjb25lY3RhZG9zIHBvciB1bWEgw7puaWNhIHRlY25vbG9naWEuJzsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRW0gcmVkZSBkZSBjb21wdXRhZG9yZXMgZXhpc3RlbSAyIG1vZGVsb3MgZGUgcHJvdG9jb2xvc1xcbicrIFxyXG4gICAgICAgICAgICAnTyBtb2RlbG8gbG9naWNvIE9TSVxcbicrIFxyXG4gICAgICAgICAgICAnZSBhIGFycXVpdGV0dXJhIFRDUC9JUCc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnTyBtb2RlbG8gT1NJIHNlIGJhc2VpYSBlbSB1bWEgcHJvcG9zdGEgZGVzZW52b2x2aWRhXFxuJysgXHJcbiAgICAgICAgICAgICdwZWxhIElTTyAoSW50ZXJuYXRpb25hbCBTdGFuZGFyZHMgT3JnYW5pemF0aW9uKVxcbicrXHJcbiAgICAgICAgICAgICdjb21vIHVtIHByaW1laXJvIHBhc3NvIGVtIGRpcmXDp8OjbyDDoCBwYWRyb25pemHDp8Ojb1xcbicrIFxyXG4gICAgICAgICAgICAnaW50ZXJuYWNpb25hbCBkb3MgcHJvdG9jb2xvcyBlbXByZWdhZG9zIG5hcyBkaXZlcnNhcyBjYW1hZGFzJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIG1vZGVsbyBPU0kgcG9zc3VpIDcgY2FtYWRhcywgc8OjbyBlbGFzOlxcbicrIFxyXG4gICAgICAgICAgICAnRsOtc2ljYVxcbicrXHJcbiAgICAgICAgICAgICdFbmxhY2VcXG4nKyBcclxuICAgICAgICAgICAgJ1JlZGVzJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdUcmFuc3BvcnRlXFxuJysgXHJcbiAgICAgICAgICAgICdTZXNzw6NvXFxuJytcclxuICAgICAgICAgICAgJ0FwcmVzZW50YcOnw6NvXFxuJysgXHJcbiAgICAgICAgICAgICdBcGxpY2HDp8Ojbyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRG8gbW9kZWxvIGxvZ2ljbyBPU0kgc3VyZ2l1IGEgYXJxdWl0ZXR1cmEgVENQL0lQXFxuJysgXHJcbiAgICAgICAgICAgICdPIG1vZGVsbyBUQ1AvSVAgZGVzY3JldmUgdW0gY29uanVudG8gZGUgb3JpZW50YcOnw7Vlc1xcbicrXHJcbiAgICAgICAgICAgICdnZXJhaXMgcGFyYSBhIGNvbmNlcMOnw6NvIGUgaW1wbGVtZW50YcOnw6NvIGRlIHByb3RvY29sb3MgZGUgcmVkZVxcbicrIFxyXG4gICAgICAgICAgICAnZXNwZWPDrWZpY29zIHBhcmEgcGVybWl0aXIgcXVlIGhhamEgY29tdW5pY2HDp8OjbyBhdHJhdsOpcyBkZSB1bWEgcmVkZS4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNil7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0EgaW1hZ2VtIGFjaW1hIGRlbW9uc3RyYSBhcyBwZWN1bGlhcmlkYWRlc1xcbicrIFxyXG4gICAgICAgICAgICAnZGUgdW0gbW9kZWxvIHBhcmEgbyBvdXRybyc7XHJcbiAgICAgICAgICAgIHRoaXMucXVhZHJvLnNldFBvc2l0aW9uKDIyMiwxMzkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0NvbW8gcG9kZSBzZXIgdmlzdG8sIGEgYXJxdWl0ZXR1cmEgVENQL0lQXFxuJysgXHJcbiAgICAgICAgICAgICdQb3NzdWkgNCBjYW1hZGFzIGUgZXUgaXJlaSBleHBsaWNhciBzb2JyZSBhIHByaW1laXJhJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDgpe1xyXG4gICAgICAgICAgICB0aGlzLnF1YWRyby5zZXRQb3NpdGlvbigxMzYwLDEzOSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0EgY2FtYWRhIGRlIGFjZXNzbyBhIHJlZGUgdGVtIGNvbW8gdW0gZG9zIG9iamV0aXZvc1xcbicrXHJcbiAgICAgICAgICAgICdnZXJhciBlIHRyYW5zbWl0aXIgbyBzaW5hbCBwZWxvIG1laW8uIFNlamEgYSB0ZWNub2xvZ2lhXFxuJysgXHJcbiAgICAgICAgICAgICdFdGhlcm5ldCwgV2ktZmksIEJsdWV0b290aCwgZW50cmUgb3V0cm9zLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA5KXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnVW0gZG9zIHNlcnZpw6dvcyBkZXNzYSBjYW1hZGEgw6kgYSBtb2R1bGHDp8Ojb1xcbicrXHJcbiAgICAgICAgICAgICdkYSBpbmZvcm1hw6fDo28gYXRyYXbDqXMgZGUgdW0gc2luYWxcXG4nK1xyXG4gICAgICAgICAgICAnYW5hbMOzZ2ljbyBvdSBkaWdpdGFsJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnTyBtaW5pLWpvZ28gYSBzZWd1aXIsIGRlbW9uc3RyYSBtZWxob3JcXG4nK1xyXG4gICAgICAgICAgICAnYSBkaWZlcmVuw6dhIGVudHJlIG9zIHNpbmFpcyBlIG9zIHNldXMgY29uY2VpdG9zJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDExKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UxXCIpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnT2xhLCBldSBzb3UgbyBwcm9mZXNzb3IgU2luYWxkbyFcXG4nK1xyXG4gICAgICAgICdFdSB2b3UgdGUgZW5zaW5hciBzb2JyZSByZWRlIGRlIGNvbXB1dGFkb3Jlc1xcbicrXHJcbiAgICAgICAgJ2FycXVpdGV0dXJhIFRDUC9JUCBlIGEgY2FtYWRhIGRlIGFjZXNzbyBhIHJlZGUnO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhVGV4dG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0EgY2FtYWRhIGludGVybmV0IGRlZmluZSB1bSBmb3JtYXRvIGRlIHBhY290ZVxcbicrXHJcbiAgICAgICAgICAgICdvZmljaWFsIGUgdW0gcHJvdG9jb2xvIGNoYW1hZG8gSVAoSW50ZXJuZXQgUHJvdG9jb2wpLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdFbmRlcmXDp28gSVAsIGRlIGZvcm1hIGdlbsOpcmljYSwgw6kgdW1hXFxuJytcclxuICAgICAgICAgICAgJ2lkZW50aWZpY2HDp8OjbyBkZSB1bSBkaXNwb3NpdGl2byAoY29tcHV0YWRvciwgaW1wcmVzc29yYSwgZXRjKVxcbicrXHJcbiAgICAgICAgICAgICdlbSB1bWEgcmVkZSBsb2NhbCBvdSBww7pibGljYS4nOyBcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0NhZGEgY29tcHV0YWRvciBuYSBpbnRlcm5ldCBwb3NzdWlcXG4nK1xyXG4gICAgICAgICAgICAndW0gSVAgKEludGVybmV0IFByb3RvY29sIG91IFByb3RvY29sbyBkZSBpbnRlcm5ldCkgw7puaWNvXFxuJytcclxuICAgICAgICAgICAgJ3F1ZSDDqSBvIG1laW8gZW0gcXVlIGFzIG3DoXF1aW5hcyB1c2FtXFxuJytcclxuICAgICAgICAgICAgJ3BhcmEgc2UgY29tdW5pY2FyZW0gbmEgSW50ZXJuZXQuJzsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIGVuZGVyZcOnbyBJUCwgbmEgdmVyc8OjbyA0IGRvIElQIChJUHY0KVxcbicrXHJcbiAgICAgICAgICAgICfDqSB1bSBuw7ptZXJvIGRlIDMyIGJpdHMgb2ZpY2lhbG1lbnRlIGVzY3JpdG9cXG4nKyBcclxuICAgICAgICAgICAgJ2NvbSBxdWF0cm8gb2N0ZXRvcyAoYnl0ZXMpIHJlcHJlc2VudGFkb3Mgbm8gZm9ybWF0b1xcbicrXHJcbiAgICAgICAgICAgICdkZWNpbWFsIGNvbW8sIHBvciBleGVtcGxvLCBcIjE5Mi4xNjguMS4yXCIuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0EgdGFyZWZhIGRhIGNhbWFkYSBpbnRlcm5ldCDDqSBlbnRyZWdhclxcbicrXHJcbiAgICAgICAgICAgICdwYWNvdGVzIElQIG9uZGUgZWxlcyBzw6NvIG5lY2Vzc8Ohcmlvcy4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnTyByb3RlYW1lbnRvIGRlIHBhY290ZXMgw6kgdW1hIHF1ZXN0w6NvXFxuJytcclxuICAgICAgICAgICAgJ2RlIGdyYW5kZSBpbXBvcnTDom5jaWEgbmVzc2EgY2FtYWRhLCBhc3NpbSBjb21vXFxuJytcclxuICAgICAgICAgICAgJ2EgbmVjZXNzaWRhZGUgZGUgZXZpdGFyIG8gY29uZ2VzdGlvbmFtZW50by4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWRvciA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnVW0gIGV4ZW1wbG8gZGUgIHNlcnZpw6dvICBvZmVyZWNpZG9cXG4nKyBcclxuICAgICAgICAgICAgJ3BvciAgZXNzYSAgY2FtYWRhICDDqSAgbyAgcm90ZWFtZW50byAgZGUgIHBhY290ZXMsXFxuJytcclxuICAgICAgICAgICAgJ2F0cmF2w6lzIGRvcyBlbmRlcmXDp29zIGRlIG9yaWdlbS9kZXN0aW5vLic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA3KXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UyXCIpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnT2xhLCBldSBzb3UgYSBwcm9mZXNzb3JhIEFuZXR0ZSFcXG4nK1xyXG4gICAgICAgICdFdSB2b3UgdGUgZW5zaW5hciBzb2JyZSBhIGNhbWFkYSBJbnRlcm5ldCc7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbXVkYVRleHRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBIGZpbmFsaWRhZGUgZGVzc2EgY2FtYWRhIMOpIHBlcm1pdGlyIHF1ZVxcbicrIFxyXG4gICAgICAgICAgICAnYXMgZW50aWRhZGVzIHBhcmVzIGRvcyBob3N0cyBkZSBvcmlnZW0gZSBkZSBkZXN0aW5vXFxuJytcclxuICAgICAgICAgICAgJ21hbnRlbmhhbSB1bWEgY29udmVyc2HDp8Ojbyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRG9pcyBwcm90b2NvbG9zIGZpbSBhIGZpbSBmb3JhbSBkZWZpbmlkb3MgYXF1aS5cXG4nK1xyXG4gICAgICAgICAgICAnTyBwcmltZWlybyBkZWxlcywgbyBUQ1AoVHJhbnNtaXNzaW9uIENvbnRyb2wgUHJvdG9jb2xcXG4nK1xyXG4gICAgICAgICAgICAn4oCUIHByb3RvY29sbyBkZSBjb250cm9sZSBkZSB0cmFuc21pc3PDo28pJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdVbSBwcm90b2NvbG8gb3JpZW50YWRvIGEgY29uZXjDtWVzIGNvbmZpw6F2ZWxcXG4nK1xyXG4gICAgICAgICAgICAncXVlIHBlcm1pdGUgYSBlbnRyZWdhIHNlbSBlcnJvcyBkZSB1bSBmbHV4byBkZSBieXRlc1xcbicrXHJcbiAgICAgICAgICAgICdvcmlnaW7DoXJpbyBkZSB1bWEgZGV0ZXJtaW5hZGEgbcOhcXVpbmEgZW0gcXVhbHF1ZXIgY29tcHV0YWRvcic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRXNzZSBwcm90b2NvbG8gZnJhZ21lbnRhIG8gZmx1eG8gZGUgYnl0ZXMgZGUgZW50cmFkYVxcbicrXHJcbiAgICAgICAgICAgICdlbSBtZW5zYWdlbnMgZGlzY3JldGFzLiBObyBkZXN0aW5vLCBvIHByb2Nlc3NvIFRDUCByZWNlcHRvclxcbicrXHJcbiAgICAgICAgICAgICd2b2x0YSBhIG1vbnRhciBhcyBtZW5zYWdlbnMgcmVjZWJpZGFzIG5vIGZsdXhvIGRlIHNhw61kYS4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ08gcHJveGltbyBtaW5pLWpvZ28gZGVtb25zdHJhIGNvbW9cXG4nKyBcclxuICAgICAgICAgICAgJ2EgbWVuc2FnZW0gdmlhamEgZW50cmUgdmFyaW9zIG7Ds3MgYXRlIGNoZWdhciBlbSBzZXUgZGVzdGlubyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UzXCIpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnT2xhLCBldSBzb3UgbyBwcm9mZXNzb3IgUG9ydHR5IVxcbicrXHJcbiAgICAgICAgJ0V1IHZvdSB0ZSBlbnNpbmFyIHNvYnJlIGEgY2FtYWRhIFRyYW5zcG9ydGUnO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFUZXh0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnQSBjYW1hZGEgZGUgYWNlc3NvIGEgcmVkZSB0ZW0gcG9yIG9iamV0aXZvXFxuJytcclxuICAgICAgICAgICAgJ2dlcmFyIGUgdHJhbnNtaXRpciBvIHNpbmFsIHBlbG8gbWVpby5cXG4nKyBcclxuICAgICAgICAgICAgJ1NlamEgYSB0ZWNub2xvZ2lhIEV0aGVybmV0LCBXaS1maSwgQmx1ZXRvb3RoLCBlbnRyZSBvdXRyb3MuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBIGNhbWFkYSBJbnRlcm5ldCB0ZW0gY29tbyBvYmpldGl2b1xcbicrXHJcbiAgICAgICAgICAgICdnZXJlbmNpYXIgcGFjb3RlcyBuYSByZWRlLCBpZGVudGlmaWNhbmRvIHN1YSBvcmlnZW0vZGVzdGlub1xcbicrXHJcbiAgICAgICAgICAgICdlIHJlZGVzIHBhcmEgZW50cmVnYS4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0EgY2FtYWRhIGRlIHRyYW5zcG9ydGUgZXN0YWJlbGVjZSB1bWEgY29uZXjDo28gZmltIGEgZmltXFxuJytcclxuICAgICAgICAgICAgJyhjb25leMOjbyBjb25macOhdmVsKSBlbnRyZSBhIG9yaWdlbSBlIG8gZGVzdGlubyBkb3MgZGFkb3MuJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdQb3IgZmltLCB0ZW1vcyBhIGNhbWFkYSBkZSBhcGxpY2HDp2FvXFxuJytcclxuICAgICAgICAgICAgJ0EgY2FtYWRhIGRlIGFwbGljYcOnw6NvIGNvbnTDqW0gdG9kb3Mgb3MgcHJvdG9jb2xvcyBkZSBuw612ZWwgbWFpcyBhbHRvLlxcbicrXHJcbiAgICAgICAgICAgICdEZW50cmUgZWxlcyBlc3TDo28gbyBwcm90b2NvbG8gZGUgdGVybWluYWwgdmlydHVhbChURUxORVQpJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIHByb3RvY29sbyBkZSB0cmFuc2ZlcsOqbmNpYSBkZSBhcnF1aXZvcyhGVFApIGVcXG4nK1xyXG4gICAgICAgICAgICAnbyBwcm90b2NvbG8gZGUgY29ycmVpbyBlbGV0csO0bmljbyhTTVRQKSc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnTXVpdG9zIG91dHJvcyBwcm90b2NvbG9zIGZvcmFtIGluY2x1w61kb3MgY29tIG8gZGVjb3JyZXIgZG9zIGFub3NcXG4nK1xyXG4gICAgICAgICAgICAnY29tbyBvIEROUyhEb21haW4gTmFtZSBTZXJ2aWNlKSwgcXVlIG1hcGVpYSBvcyBub21lc1xcbicrXHJcbiAgICAgICAgICAgICdkZSBob3N0cyBwYXJhIHNldXMgcmVzcGVjdGl2b3MgZW5kZXJlw6dvcyBkZSByZWRlJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDYpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTRcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnT2xhLCBldSBzb3UgbyBwcm9mZXNzb3IgR2VyYWxkbyFcXG4nK1xyXG4gICAgICAgICdWYW1vcyByZWNhcGl0dWxhciB0dWRvIHF1ZSBmb2kgdmlzdG8gYXRlIGVudGFvJztcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mZXNzb3IxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3NvcjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mZXNzb3I0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhVGV4dG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yMS5zZXRQb3NpdGlvbigtMTMwMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yMi5zZXRQb3NpdGlvbigtMjY3LCAtODkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPIHRlc3RlIGZpbmFsIGNvbnNpc3RlIGRlIHVtIHF1aXogY29tIDEwIHBlcmd1bnRhc1xcbicrIFxyXG4gICAgICAgICAgICAncmVmZXJlbnRlcyBhcyA0IGNhbWFkYXMgZGEgYXJxdWl0ZXR1cmEgVENQL0lQJzsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3IyLnNldFBvc2l0aW9uKC0xMzAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3IzLnNldFBvc2l0aW9uKC0yNjcsIC04OSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ1BhcmEgcGFzc2FyIG5lc3NlIHRlc3RlLCB2b2NlIGRldmUgYWNlcnRhciBwZWxvIG1lbm9zXFxuJysgXHJcbiAgICAgICAgICAgICc3IGRhcyAxMCBxdWVzdG9lcyBhcHJlc2VudGFkYXMnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yMy5zZXRQb3NpdGlvbigtMTMwMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yNC5zZXRQb3NpdGlvbigtMjY3LCAtODkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdDb25zaWRlcmUgZXNzZSBxdWl6IGNvbW8gdW1hIHByb3ZhIGZpbmFsXFxuJysgXHJcbiAgICAgICAgICAgICduYW8gdGVuaGEgcHJlc3NhIGVtIHJlc3BvbmRlciBhcyBxdWVzdG9lc1xcbicrXHJcbiAgICAgICAgICAgICdlIGFuYWxpc2UgY29tIGN1aWRhZG8gYXMgb3DDp29lcyBhcHJlc2VudGFkYXMnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yNC5zZXRQb3NpdGlvbigtMTMwMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yMS5zZXRQb3NpdGlvbigtMjY3LCAtODkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdCb2Egc29ydGUhJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTVcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdPbGEsIGJlbSB2aW5kbyBhbyB0ZXN0ZSBmaW5hbCFcXG4nK1xyXG4gICAgICAgICdlc3RhIHVsdGltYSBmYXNlIHRlc3RhcmEgdG9kbyBvIHNldSBjb25oZWNpbWVudG9cXG4nK1xyXG4gICAgICAgICdhZHF1aXJpZG8gYXRlIGVudGFvLCBlbSBqb2dvIGUgbmEgZGlzY2lwbGluYSc7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9mMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwcm9mNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24xOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b240OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMi5zZXRQb3NpdGlvbigzMjYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMy5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNC5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd1Byb2ZCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wcm9mMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjIuc2V0T3BhY2l0eSgxMDAwKTtcclxuICAgICAgICB0aGlzLnByb2YzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mNC5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMubXVkYUJ1dHRvbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9TZWxlY3RGYXNlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdEZhc2VcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvT3Bjb2VzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm9wY29lc1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9GYXNlMTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJmYXNlMVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvRmFzZTI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmFzZTJcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0Zhc2UzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImZhc2UzXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9GYXNlNDogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJmYXNlNFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvRmFzZTQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmFzZTVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub1F1aXoxOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlMVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvUXVpejE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2UyXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9RdWl6MTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub1F1aXoxOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlNFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvUXVpejE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicXVpekZhc2U1XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b241OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtdWRhQnV0dG9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMS5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMi5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMy5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNC5zZXRQb3NpdGlvbig1OTYsIC0yNDQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uNS5zZXRQb3NpdGlvbigzMjYsIC0yNDQpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd1Byb2ZCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wcm9mMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnByb2YzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mNC5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMubXVkYUJ1dHRvbigpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2YxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2YzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Y0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFCdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b24xLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24yLnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24zLnNldFBvc2l0aW9uKDMyNiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b240LnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICAgICAgdGhpcy5idXR0b241LnNldFBvc2l0aW9uKDU5NiwgLTI0NCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzaG93UHJvZkJ1dHRvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnByb2YxLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5wcm9mMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucHJvZjMuc2V0T3BhY2l0eSgxMDAwKTtcclxuICAgICAgICB0aGlzLnByb2Y0LnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5tdWRhQnV0dG9uKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxyXG4gICAgICAgIC8vIG1haW4gY2hhcmFjdGVyJ3MganVtcCBkdXJhdGlvblxyXG4gICAgICAgIGp1bXBEdXJhdGlvbjogMCxcclxuICAgICAgICAvLyBtYXhpbWFsIG1vdmVtZW50IHNwZWVkXHJcbiAgICAgICAgbWF4TW92ZVNwZWVkOiAwLFxyXG4gICAgICAgIC8vIGFjY2VsZXJhdGlvblxyXG4gICAgICAgIGFjY2VsOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRpbWVyOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2V0SnVtcEFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGp1bXAgdXBcclxuICAgICAgICB2YXIganVtcFVwID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy5wKDAsIHRoaXMuanVtcEhlaWdodCkpO1xyXG4gICAgICAgIC8vIHJlcGVhdFxyXG4gICAgICAgIHJldHVybiBjYy5yZXBlYXRGb3JldmVyKGp1bXBVcCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDE1O1xyXG4gICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNlbGVjdFN0YWdlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdEZhc2VcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDwgMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFN0YWdlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uVXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uRG93bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGluaGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhbHZvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNjb3JlR2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5Db250aW51YXIxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHRvRmFzZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGluaGFHYW1lT3Zlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmYXNlOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBvbnR1YWNhbzogMCxcclxuICAgICAgICBcclxuICAgICAgICBjb250VGV4dG86IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5mcmVudGVQbGF5ZXIoKTtcclxuICAgICAgICB0aGlzLmNyaWFBbHZvKCk7XHJcbiAgICAgICAgdGhpcy5wb250dWFjYW8gPSAwO1xyXG4gICAgICAgIHRoaXMuZmFzZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgIHRoaXMubGluaGFHYW1lT3Zlci5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQ29tbyBwb2RlIHNlciB2aXN0bywgYSBkaWZlcmVuw6dhIGVudHJlIG9zIHNpbmFpc1xcblwiKyBcclxuICAgICAgICAgICAgXCLDqSBiZW0gcGVyY2VwdGl2ZWxcIjtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8qRnVuw6dvZXMgdXNhZGFzIHBhcmEgY2hhbWFyIGEgYcOnYW8gZGUgXHJcbiAgICBtb3ZpbWVudGFyIGEgY29yZGEgcGFyYSBjaW1hIGVtIGRpdmVyc2FzIHZlbG9jaWRhZGVzKi9cclxuICAgIHNvYmVQbGF5ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB2YXIgc29iZSA9IGNjLm1vdmVCeSgzLCBjYy5wKDAsIDMwMCkpO1xyXG4gICAgICAgIHZhciBmcmVudGUgPSBjYy5tb3ZlQnkoMzAwLCBjYy5wKDEwMDAwLCAwKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHNvYmUsIGZyZW50ZSkpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLypGdW7Dp29lcyB1c2FkYXMgcGFyYSBjaGFtYXIgYSBhw6dhbyBkZSBcclxuICAgIG1vdmltZW50YXIgYSBjb3JkYSBwYXJhIGJhaXhvIGVtIGRpdmVyc2FzIHZlbG9jaWRhZGVzKi9cclxuICAgIGRlc2NlUGxheWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdmFyIGRlc2NlID0gY2MubW92ZUJ5KDMsIGNjLnAoMCwgLTMwMCkpO1xyXG4gICAgICAgIHZhciBmcmVudGUgPSBjYy5tb3ZlQnkoMzAwLCBjYy5wKDEwMDAwLCAwKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGRlc2NlLCBmcmVudGUpKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZhaUZyZW50ZVBsYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHZhciBmcmVudGUgPSBjYy5tb3ZlQnkoMzAwLCBjYy5wKDEwMDAwLCAwKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKGZyZW50ZSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB2YWlQcmFGcmVudGU6IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgZnJlbnRlID0gY2MubW92ZUJ5KDMwMCwgY2MucCgxMDAwMCwgMCkpO1xyXG4gICAgICAgIHJldHVybiBmcmVudGU7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBmcmVudGVQbGF5ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy52YWlQcmFGcmVudGUgPSB0aGlzLnZhaVByYUZyZW50ZSgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJ1bkFjdGlvbih0aGlzLnZhaVByYUZyZW50ZSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjcmlhTGluaGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBub3ZhTGluaGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmhhKTtcclxuICAgICAgICB0aGlzLmJnLmFkZENoaWxkKG5vdmFMaW5oYSk7XHJcbiAgICAgICAgbm92YUxpbmhhLnNldFBvc2l0aW9uKHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgY3JpYUFsdm86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMzAwKSArIDApO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wbGF5ZXIueCArIDEwMDtcclxuICAgICAgICB2YXIgeGxpbmhhID0geCArIDIwMDtcclxuICAgICAgICB0aGlzLmFsdm8uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5saW5oYUdhbWVPdmVyLnNldFBvc2l0aW9uKHhsaW5oYSwgMCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8ganVkZ2UgdGhlIGRpc3RhbmNlIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIHBsYXllciBub2RlXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIEFsdm9Qb3MgPSB0aGlzLmFsdm8uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG5vZGVzIGFjY29yZGluZyB0byB0aGVpciBwb3NpdGlvbnNcclxuICAgICAgICB2YXIgZGlzdCA9IGNjLnBEaXN0YW5jZShBbHZvUG9zLCBwbGF5ZXJQb3MpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2VMaW5oYTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGp1ZGdlIHRoZSBkaXN0YW5jZSBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBwbGF5ZXIgbm9kZVxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBsaW5oYUdhbWVPdmVyUG9zID0gdGhpcy5saW5oYUdhbWVPdmVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBub2RlcyBhY2NvcmRpbmcgdG8gdGhlaXIgcG9zaXRpb25zXHJcbiAgICAgICAgdmFyIGRpc3QgPSBjYy5wRGlzdGFuY2UobGluaGFHYW1lT3ZlclBvcywgcGxheWVyUG9zKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uUGlja2VkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBXaGVuIHRoZSBzdGFycyBhcmUgYmVpbmcgY29sbGVjdGVkLCBpbnZva2UgdGhlIGludGVyZmFjZSBpbiB0aGUgR2FtZSBzY3JpcHQgdG8gZ2VuZXJhdGUgYSBuZXcgc3RhclxyXG4gICAgICAgIHRoaXMuY3JpYUFsdm8oKTtcclxuICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbGltaXRhUGxheWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICggdGhpcy5wbGF5ZXIueSA+IHRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci55ID0gdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodC8yO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci55IDwgLXRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci55ID0gLXRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMjtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBlZ2FBbHZvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCA2MCkge1xyXG4gICAgICAgICAgICAvLyBpbnZva2UgY29sbGVjdGluZyBiZWhhdmlvclxyXG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wb250dWFjYW8gPT0gMTApe1xyXG4gICAgICAgICAgICB0aGlzLmZhc2UgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBhc3NhTGluaGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2VMaW5oYSgpIDwgNjApIHtcclxuICAgICAgICAgICAgLy8gaW52b2tlIGNvbGxlY3RpbmcgYmVoYXZpb3JcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBvbnR1YWNhbyA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMubGluaGFHYW1lT3Zlci5zZXRQb3NpdGlvbigwLCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnYW1lT3ZlcjpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJiYWNrZ3JvdW5kLnNldFBvc2l0aW9uKDAsMCk7XHJcbiAgICAgICAgdGhpcy5zY29yZUdhbWVPdmVyLnN0cmluZyA9ICdBbHZvcyBBY2VydGFkb3M6ICcrdGhpcy5wb250dWFjYW87XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyeUFnYWluOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImpvZ29GYXNlMS0xXCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FUZXh0bzE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk8gc2luYWwgYW5hbG9naWNvIMOpIGdlcmFkbyBjb21vIHVtYSBvbmRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiasOhIHF1ZSBvcyB2YWxvcmVzIHbDo28gc2UgYWx0ZXJhbmRvIG5vIGludGVydmFsbyBkZSB0ZW1wb1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJKw6EgbyBzaW5hbCBkaWdpdGFsIMOpIGdlcmFkbyBjb21vIHVtYSByZXRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiasOhIHF1ZSBwb3NzdWkgdW0gY29uanVudG8gZGUgdmFsb3JlcyBlbSB1bSBpbnRlcnZhbG8gZGUgdGVtcG9cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQSBjYW1hZGEgZGUgYWNlc3NvIGEgcmVkZSB0YW1iZW0gZm9ybmVjZVxcblwiK1xyXG4gICAgICAgICAgICBcIm8gc2VydmnDp28gZGUgIHRyYW5zZm9ybWFyICB1bSAgY2FuYWwgIGRlIHRyYW5zbWlzc8OjbyAgYnJ1dGFcXG5cIitcclxuICAgICAgICAgICAgXCJlbSAgdW1hICBsaW5oYSAgcXVlICBwYXJlw6dhICBsaXZyZSAgZGUgIGVycm9zICBkZSAgdHJhbnNtaXNzw6NvXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk9mZXJlY2VuZG8gZW5xdWFkcmFtZW50byBkZSBiaXRzXFxuXCIrXHJcbiAgICAgICAgICAgIFwidmVyaWZpY2HDp8OjbyBkZSBlcnJvcyBlIHByb3RvY29sb3MgcXVlIGFzc2VndXJlbSBhIGNvcnJlw6dhbyBkZSBlcnJvc1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY29udFRleHRvID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlZpc3RvIG9zIGNvbnRldWRvcyBkZXN0YSBmYXNlIGUgZW0gc2FsYSBkZSBhdWxhXFxuXCIrXHJcbiAgICAgICAgICAgIFwicmVzcG9uZGEgYWdvcmEgbyBRdWl6XCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZmFzZSA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKC00MTgsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmZhc2UgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3Nvci5zZXRQb3NpdGlvbigxMzA2LC0yMjIpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbWl0YVBsYXllcigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyaWFMaW5oYSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBlZ2FBbHZvKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc2FMaW5oYSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9ICdBbHZvczogJysgdGhpcy5wb250dWFjYW87XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuZmFzZSA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3Iuc2V0UG9zaXRpb24oMCwtMjIyKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5mYXNlID09IDIpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJxdWl6RmFzZTFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uVXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uRG93bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGluaGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhbHZvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNjb3JlR2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5Db250aW51YXIxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0bkNvbnRpbnVhcjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dG9GYXNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsaW5oYUdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZhc2U6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9udHVhY2FvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmZyZW50ZVBsYXllcigpO1xyXG4gICAgICAgIHRoaXMuY3JpYUFsdm8oKTtcclxuICAgICAgICB0aGlzLmJ0bkNvbnRpbnVhcjIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLmxpbmhhR2FtZU92ZXIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnBvbnR1YWNhbyA9IDA7XHJcbiAgICAgICAgdGhpcy5mYXNlID0gMDtcclxuICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJOZXNzZSBNaW5pLUpvZ28sIHZvY2UgYXByZW5kZXJhIGEgZGlmZXJlbsOnYVxcblwiKyBcclxuICAgICAgICAgICAgXCJlbnRyZSBvIHNpbmFsIGFuYWxvZ2ljbyBlIG8gc2luYWwgZGlnaXRhbFwiO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLypGdW7Dp29lcyB1c2FkYXMgcGFyYSBjaGFtYXIgYSBhw6dhbyBkZSBcclxuICAgIG1vdmltZW50YXIgYSBjb3JkYSBwYXJhIGNpbWEgZW0gZGl2ZXJzYXMgdmVsb2NpZGFkZXMqL1xyXG4gICAgc29iZVBsYXllcjogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgdmFyIHNvYmUgPSBjYy5tb3ZlQnkoMywgY2MucCgwLCAzMDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW5PdXQoKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKHNvYmUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLypGdW7Dp29lcyB1c2FkYXMgcGFyYSBjaGFtYXIgYSBhw6dhbyBkZSBcclxuICAgIG1vdmltZW50YXIgYSBjb3JkYSBwYXJhIGJhaXhvIGVtIGRpdmVyc2FzIHZlbG9jaWRhZGVzKi9cclxuICAgIGRlc2NlUGxheWVyOiBmdW5jdGlvbiAoKXtcclxuICAgICAgICB2YXIgZGVzY2UgPSBjYy5tb3ZlQnkoMywgY2MucCgwLCAtMzAwKSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluT3V0KCkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJ1bkFjdGlvbihkZXNjZSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB2YWlQcmFGcmVudGU6IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgZnJlbnRlID0gY2MubW92ZUJ5KDMsIGNjLnAoMTAwLCAwKSk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnJlcGVhdEZvcmV2ZXIoZnJlbnRlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGZyZW50ZVBsYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnZhaVByYUZyZW50ZSA9IHRoaXMudmFpUHJhRnJlbnRlKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucnVuQWN0aW9uKHRoaXMudmFpUHJhRnJlbnRlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNyaWFMaW5oYTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vdmFMaW5oYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluaGEpO1xyXG4gICAgICAgIHRoaXMuYmcuYWRkQ2hpbGQobm92YUxpbmhhKTtcclxuICAgICAgICBub3ZhTGluaGEuc2V0UG9zaXRpb24odGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjcmlhQWx2bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAzMDApICsgMCk7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBsYXllci54ICsgMTAwO1xyXG4gICAgICAgIHZhciB4bGluaGEgPSB4ICsgMjAwO1xyXG4gICAgICAgIHRoaXMuYWx2by5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgICAgICB0aGlzLmxpbmhhR2FtZU92ZXIuc2V0UG9zaXRpb24oeGxpbmhhLCAwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8ganVkZ2UgdGhlIGRpc3RhbmNlIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIHBsYXllciBub2RlXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIEFsdm9Qb3MgPSB0aGlzLmFsdm8uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG5vZGVzIGFjY29yZGluZyB0byB0aGVpciBwb3NpdGlvbnNcclxuICAgICAgICB2YXIgZGlzdCA9IGNjLnBEaXN0YW5jZShBbHZvUG9zLCBwbGF5ZXJQb3MpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2VMaW5oYTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGp1ZGdlIHRoZSBkaXN0YW5jZSBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBwbGF5ZXIgbm9kZVxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBsaW5oYUdhbWVPdmVyUG9zID0gdGhpcy5saW5oYUdhbWVPdmVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBub2RlcyBhY2NvcmRpbmcgdG8gdGhlaXIgcG9zaXRpb25zXHJcbiAgICAgICAgdmFyIGRpc3QgPSBjYy5wRGlzdGFuY2UobGluaGFHYW1lT3ZlclBvcywgcGxheWVyUG9zKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uUGlja2VkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBXaGVuIHRoZSBzdGFycyBhcmUgYmVpbmcgY29sbGVjdGVkLCBpbnZva2UgdGhlIGludGVyZmFjZSBpbiB0aGUgR2FtZSBzY3JpcHQgdG8gZ2VuZXJhdGUgYSBuZXcgc3RhclxyXG4gICAgICAgIHRoaXMuY3JpYUFsdm8oKTtcclxuICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbGltaXRhUGxheWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICggdGhpcy5wbGF5ZXIueSA+IHRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci55ID0gdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodC8yO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci55IDwgLXRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci55ID0gLXRoaXMucGxheWVyLnBhcmVudC5oZWlnaHQvMjtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBlZ2FBbHZvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCA2MCkge1xyXG4gICAgICAgICAgICAvLyBpbnZva2UgY29sbGVjdGluZyBiZWhhdmlvclxyXG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wb250dWFjYW8gPT0gMTApe1xyXG4gICAgICAgICAgICB0aGlzLmZhc2UgPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBhc3NhTGluaGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2VMaW5oYSgpIDwgNjApIHtcclxuICAgICAgICAgICAgLy8gaW52b2tlIGNvbGxlY3RpbmcgYmVoYXZpb3JcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucG9udHVhY2FvID09MTApe1xyXG4gICAgICAgICAgICB0aGlzLmxpbmhhR2FtZU92ZXIuc2V0UG9zaXRpb24oMCwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZU92ZXI6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyYmFja2dyb3VuZC5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgIHRoaXMuc2NvcmVHYW1lT3Zlci5zdHJpbmcgPSAnQWx2b3MgQWNlcnRhZG9zOiAnK3RoaXMucG9udHVhY2FvO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cnlBZ2FpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTFcIik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVRleHRvMTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRUZXh0byA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwidW0gIHNpbmFsICBhbmFsw7NnaWNvICDDqSAgY2FyYWN0ZXJpemFkbyBwb3JcXG5cIisgXHJcbiAgICAgICAgICAgIFwidW1hIGVxdWHDp8OjbyBtYXRlbcOhdGljYSBjb250aW51YS4gUXVhbmRvIGEgZW50cmFkYSBtdWRhIGRlIHVtIHZhbG9yIHBhcmEgbyBwcsOzeGltb1xcblwiKyBcclxuICAgICAgICAgICAgXCJmYXogaXNzbyBtb3ZlbmRvIHNlIGF0cmF2w6lzIGRlIHRvZG9zIG9zIHZhbG9yZXMgaW50ZXJtZWRpw6FyaW9zLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJUZW50ZSBhY2VydGFyIDEwIGFsdm9zIHBhcmEgYXZhbsOnYXJcXG5cIitcclxuICAgICAgICAgICAgXCJwYXJhIGEgcHJveGltYSBldGFwYVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJFdml0ZSBzdWJpciBkZW1haXMgb3UgZGVzY2VyIGRlbWFpc1xcblwiK1xyXG4gICAgICAgICAgICBcImNhc28gaXNzbyBhY29udGXDp2EsIHNlcmEgR2FtZSBPdmVyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZmFzZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKC00MTgsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FUZXh0bzI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT0gMCl7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIHNpbmFsIGRpZ2l0YWwgw6kgZ2VyYWRvIGNvbW8gdW0gY29uanVudG8gZGUgcmV0YXNcXG5cIitcclxuICAgICAgICAgICAgXCJqw6EgcXVlIHBvc3N1aSB1bSBjb25qdW50byBsaW1pdGFkbyBkZSB2YWxvcmVzIGVtIHVtIGludGVydmFsbyBkZSB0ZW1wb1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJUZW50ZSBhY2VydGFyIDEwIGFsdm9zIHBhcmEgYXZhbsOnYXJcXG5cIitcclxuICAgICAgICAgICAgXCJwYXJhIGEgcHJveGltYSBldGFwYVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJFdml0ZSBzdWJpciBkZW1haXMgb3UgZGVzY2VyIGRlbWFpc1xcblwiK1xyXG4gICAgICAgICAgICBcImNhc28gaXNzbyBhY29udGXDp2EsIHNlcmEgR2FtZSBPdmVyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkJvYSBTb3J0ZSFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZhc2UgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbigtNDE4LDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5mYXNlID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3Iuc2V0UG9zaXRpb24oMCwtMjIyKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5mYXNlID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yLnNldFBvc2l0aW9uKDEzMDYsLTIyMik7XHJcbiAgICAgICAgICAgIHRoaXMubGltaXRhUGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JpYUxpbmhhKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGVnYUFsdm8oKTtcclxuICAgICAgICAgICAgdGhpcy5wYXNzYUxpbmhhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gJ0Fsdm9zOiAnKyB0aGlzLnBvbnR1YWNhbztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5mYXNlID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnByb2Zlc3Nvci5zZXRQb3NpdGlvbigwLC0yMjIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkNvbnRpbnVhcjEuc2V0UG9zaXRpb24oMzAwMCwwKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Db250aW51YXIyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5mYXNlID09IDMpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJqb2dvRmFzZTEtMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9mZXNzb3I6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dG9GYXNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBiZzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm8yOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm81OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vNjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0YWJSb3Q6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGJsTm8xOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidG5SZWFsaXphclNhbHRvNjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGluaGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzY29yZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yRnJlbnRlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHRvRmFzZTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNhbHRvczogMCxcclxuICAgICAgICBcclxuICAgICAgICBwb250dWFjYW86IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udFRleHRvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMucG9udHVhY2FvID0gMDtcclxuICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDA7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgPSA1O1xyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gdGhpcy5zYWx0b3M7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJOZXNzZSBNaW5pLUpvZ28sIHZvY2UgYXByZW5kZXJhIGEgcm90ZWFyXFxuXCIrIFxyXG4gICAgICAgICAgICBcInBhY290ZXMgSVBzXCI7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzb21lTm9zOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm8xLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm8yLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm8zLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm80LnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm81LnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm82LnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVJlYWxpemFTYWx0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG8xLnNldFBvc2l0aW9uKDg5NSwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvMi5zZXRQb3NpdGlvbig4OTUsIC0xMDgpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzMuc2V0UG9zaXRpb24oODk1LCAtMTA4KTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG80LnNldFBvc2l0aW9uKDg5NSwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNS5zZXRQb3NpdGlvbig4OTUsIC0xMDgpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzYuc2V0UG9zaXRpb24oODk1LCAtMTA4KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFwYXJlY2VOb3M6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ubzEuc2V0UG9zaXRpb24oLTUzLCAtMjcpO1xyXG4gICAgICAgIHRoaXMubm8yLnNldFBvc2l0aW9uKDYsIDE0OCk7XHJcbiAgICAgICAgdGhpcy5ubzMuc2V0UG9zaXRpb24oMTcyLCAtMjcpO1xyXG4gICAgICAgIHRoaXMubm80LnNldFBvc2l0aW9uKDE5OSwgMTI3KTtcclxuICAgICAgICB0aGlzLm5vNS5zZXRQb3NpdGlvbigxNDgsIDI1Nyk7XHJcbiAgICAgICAgdGhpcy5ubzYuc2V0UG9zaXRpb24oMzgwLCAyNjkpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW92ZVBsYXllcjogZnVuY3Rpb24gKHgsIHkpe1xyXG4gICAgICAgIHZhciBtb3ZlID0gY2MubW92ZVRvKDMsIGNjLnAoeCwgeSkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJ1bkFjdGlvbihtb3ZlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNyaWFMaW5oYTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vdmFMaW5oYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluaGEpO1xyXG4gICAgICAgIHRoaXMuYmcuYWRkQ2hpbGQobm92YUxpbmhhKTtcclxuICAgICAgICBub3ZhTGluaGEuc2V0UG9zaXRpb24odGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVRleHRvMTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRUZXh0byA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiT3Mgcm90ZWFkb3JlcyBzw6NvIHV0aWxpemFkb3MgcGFyYSBpbnRlcmxpZ2FyXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYXMgcmVkZXMgZsOtc2ljYXMgZW50cmUgc2kuIEVsZXMgb2ZlcmVjZW1cXG5cIitcclxuICAgICAgICAgICAgXCJtw7psdGlwbG9zIGNhbWluaG9zIHBhcmEgaW50ZXJjb25lY3RhciBhcyByZWRlcyBmw61zaWNhcy5cIjsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkFzIHRhYmVsYXMgZGUgcm90ZWFtZW50byBpbmRpY2FtIHBhcmEgY2FkYSByb3RlYWRvclxcblwiK1xyXG4gICAgICAgICAgICBcImNvbW8gZWxlIGRldmUgZW5jYW1pbmhhciB1bSBwYWNvdGUgYSBmaW0gZGUgcXVlXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZXN0ZSBjaGVndWUgYSB1bWEgY2VydGEgcmVkZSBmw61zaWNhIGRlIGRlc3Rpbm8uXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkFzIHRhYmVsYXMgZGUgcm90ZWFtZW50byBzw6NvIHByZWVuY2hpZGFzXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYXV0b21hdGljYW1lbnRlLCBhdHJhdsOpcyBkZSBwcm90b2NvbG9zIGRlIHJvdGVhbWVudG9cXG5cIitcclxuICAgICAgICAgICAgXCJwYWRyb25pemFkb3MsIGNvbW8gbyBCR1AgKEJvcmRlciBHYXRld2F5IFByb3RvY29sKVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJWZWphIGFnb3JhIHVtIGV4ZW1wbG8gZGUgcmVkZSFcIjtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlTm9zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk8gY2VuYXJpbyBhY2ltYSBkZW1vbnN0cmEgdW1hIHJlZGVcXG5cIitcclxuICAgICAgICAgICAgXCJjb20gNiByb3RlYWRvcmVzLCBjYWRhIHVtIGRlbGVzIGNvbSBzdWEgdGFiZWxhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZGUgcm90ZWFtZW50b1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJObyBwYXBlbCBkZSB1bSBwYWNvdGUsIHZvY2UgdGVyYVxcblwiK1xyXG4gICAgICAgICAgICBcIjUgc2FsdG9zIHBhcmEgc2FpciBkbyBuw7MgMSBlIGNoZWdhciBhbyBuw7MgNiFcXG5cIitcclxuICAgICAgICAgICAgXCJjbGlxdWUgZW0gY29udGludWFyIGUgYm9hIHNvcnRlISFcIjtcclxuICAgICAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDYpe1xyXG4gICAgICAgICAgICB0aGlzLmJnLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5ubzEuc2V0UG9zaXRpb24oLTI0MCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKC0yMTAsIC0xNTQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlMS5zdHJpbmcgPSBcIlBhcmFiw6lucywgdm9jZSBjaGVnb3UgYW8gbsOzIDYhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYXBlc2FyIGRlIGJhc3RhbnRlIHNpbXBsaWZpY2FkbyBvIG1pbmktam9nbyBkZW1vbnN0cm91XFxuXCIrXHJcbiAgICAgICAgICAgIFwiY29tbyB1bWEgaW5mb3JtYcOnw6NvIHRyYWZlZ2EgZW0gZGl2ZXJzYXMgcmVkZXMhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIxKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2UxLnN0cmluZyA9IFwiQ29tIGFzIGluZm9ybWHDp8O1ZXMgcGFzc2FkYXMgbmVzdGEgZmFzZVxcblwiK1xyXG4gICAgICAgICAgICBcInJlc3BvbmRhIGFnb3JhIG8gUXVpeiFcXG5cIitcclxuICAgICAgICAgICAgXCJjbGlxdWUgZW0gY29udGludWFyIGUgYm9hIHNvcnRlIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMil7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlMlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEwKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvbk5vMTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubGJsTm8xLnN0cmluZyA9IFwiTm8gMyAgICAgICAgIDIwJVxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJcXG5cIitcclxuICAgICAgICBcIk5vIDIgICAgICAgICA3MCVcIjtcclxuICAgICAgICB0aGlzLnNvbWVSZWFsaXphU2FsdG8oKTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG8zLnNldFBvc2l0aW9uKDAsIC0xMDgpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzIuc2V0UG9zaXRpb24oMCwgLTIwMik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25ObzI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMzIwLCAtMTMwKTtcclxuICAgICAgICB0aGlzLmxibE5vMS5zdHJpbmcgPSBcIk5vIDUgICAgICAgICA4MCVcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJObyA0ICAgICAgICAgNzAlXCI7XHJcbiAgICAgICAgdGhpcy5zb21lUmVhbGl6YVNhbHRvKCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNS5zZXRQb3NpdGlvbigwLCAtMTA4KTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG80LnNldFBvc2l0aW9uKDAsIC0yMDIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uTm8zOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGFiUm90LnNldFBvc2l0aW9uKDMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5sYmxObzEuc3RyaW5nID0gXCJObyAxICAgICAgICAgMjAlXFxuXCIrXHJcbiAgICAgICAgXCJcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiTm8gMiAgICAgICAgIDcwJVwiO1xyXG4gICAgICAgIHRoaXMuc29tZVJlYWxpemFTYWx0bygpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzEuc2V0UG9zaXRpb24oMCwgLTEwOCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvMi5zZXRQb3NpdGlvbigwLCAtMjAyKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvbk5vNDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMubGJsTm8xLnN0cmluZyA9IFwiTm8gNSAgICAgICAgIDkwJVxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJcXG5cIitcclxuICAgICAgICBcIk5vIDIgICAgICAgICA3MCVcIjtcclxuICAgICAgICB0aGlzLnNvbWVSZWFsaXphU2FsdG8oKTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG81LnNldFBvc2l0aW9uKDAsIC0xMDgpO1xyXG4gICAgICAgIHRoaXMuYnRuUmVhbGl6YXJTYWx0bzIuc2V0UG9zaXRpb24oMCwgLTIwMik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25ObzU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50YWJSb3Quc2V0UG9zaXRpb24oMzIwLCAtMTMwKTtcclxuICAgICAgICB0aGlzLmxibE5vMS5zdHJpbmcgPSBcIk5vIDQgICAgICAgICA2MCVcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiXFxuXCIrXHJcbiAgICAgICAgXCJObyA2ICAgICAgICAgMzAlXCI7XHJcbiAgICAgICAgdGhpcy5zb21lUmVhbGl6YVNhbHRvKCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNC5zZXRQb3NpdGlvbigwLCAtMTA4KTtcclxuICAgICAgICB0aGlzLmJ0blJlYWxpemFyU2FsdG82LnNldFBvc2l0aW9uKDAsIC0yMDIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uTm82OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGFiUm90LnNldFBvc2l0aW9uKDMyMCwgLTEzMCk7XHJcbiAgICAgICAgdGhpcy5sYmxObzEuc3RyaW5nID0gXCJObyA1ICAgICAgICAgNzAlXFxuXCIrXHJcbiAgICAgICAgXCJcXG5cIitcclxuICAgICAgICBcIlxcblwiK1xyXG4gICAgICAgIFwiXCI7XHJcbiAgICAgICAgdGhpcy5zb21lUmVhbGl6YVNhbHRvKCk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFsaXphclNhbHRvNS5zZXRQb3NpdGlvbigwLCAtMTA4KTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblNhbHRvMTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigxMzIwLCAtMTMwKTtcclxuICAgICAgICB0aGlzLnNvbWVOb3MoKTtcclxuICAgICAgICB0aGlzLm5vMS5zZXRQb3NpdGlvbigtMjQwLCAtMTgxKTtcclxuICAgICAgICB0aGlzLnNhbHRvcyAtPSAxO1xyXG4gICAgICAgIHRoaXMubW92ZVBsYXllcigtMjQwLCAtMTgxKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblNhbHRvMjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigxMzIwLCAtMTMwKTtcclxuICAgICAgICB0aGlzLnNvbWVOb3MoKTtcclxuICAgICAgICB0aGlzLm5vMi5zZXRQb3NpdGlvbigtMTgxLCAtNik7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgLT0gMTtcclxuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoLTE4MSwgLTYpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uU2FsdG8zOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGFiUm90LnNldFBvc2l0aW9uKDEzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMuc29tZU5vcygpO1xyXG4gICAgICAgIHRoaXMubm8zLnNldFBvc2l0aW9uKC0xNSwgLTE4MSk7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgLT0gMTtcclxuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoLTE1LCAtMTgxKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblNhbHRvNDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigxMzIwLCAtMTMwKTtcclxuICAgICAgICB0aGlzLnNvbWVOb3MoKTtcclxuICAgICAgICB0aGlzLm5vNC5zZXRQb3NpdGlvbigxMiwgLTI3KTtcclxuICAgICAgICB0aGlzLnNhbHRvcyAtPSAxO1xyXG4gICAgICAgIHRoaXMubW92ZVBsYXllcigxMiwgLTI3KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblNhbHRvNTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRhYlJvdC5zZXRQb3NpdGlvbigxMzIwLCAtMTMwKTtcclxuICAgICAgICB0aGlzLnNvbWVOb3MoKTtcclxuICAgICAgICB0aGlzLm5vNS5zZXRQb3NpdGlvbigtMzksIDEwMyk7XHJcbiAgICAgICAgdGhpcy5zYWx0b3MgLT0gMTtcclxuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoLTM5LCAxMDMpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uU2FsdG82OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGFiUm90LnNldFBvc2l0aW9uKDEzMjAsIC0xMzApO1xyXG4gICAgICAgIHRoaXMuc29tZU5vcygpO1xyXG4gICAgICAgIHRoaXMubm82LnNldFBvc2l0aW9uKDE5MywgMTE1KTtcclxuICAgICAgICB0aGlzLnNhbHRvcyAtPSAxO1xyXG4gICAgICAgIHRoaXMubW92ZVBsYXllcigxOTMsIDExNSk7XHJcbiAgICAgICAgdGhpcy5wcm9mZXNzb3JGcmVudGUuc2V0UG9zaXRpb24oLTE5OSwgMCk7XHJcbiAgICAgICAgdGhpcy5jb250VGV4dG8gPSAyMDtcclxuICAgIH0sXHJcbiAgICAgXHJcbiAgICBnYW1lT3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnByb2Zlc3NvckZyZW50ZS5zZXRQb3NpdGlvbigtMTk5LCAwKTtcclxuICAgICAgICAvL3RoaXMuY29udFRleHRvID0gMjA7XHJcbiAgICAgICAgdGhpcy5zb21lTm9zKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0b0Zhc2UxLnN0cmluZyA9IFwiSW5mZWxpem1lbnRlIGEgbWVuc2FnZW0gc2UgcGVyZGV1XFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBlIHRlbnRlIG5vdmFtZW50ZSFcIjtcclxuICAgICAgICBpZih0aGlzLmNvbnRUZXh0byA9PSAxMCl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImpvZ29GYXNlM1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIHRoaXMuY3JpYUxpbmhhKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5zYWx0b3MgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gXCJTYWx0b3M6IFwiKyB0aGlzLnNhbHRvcztcclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJnOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm8zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBubzU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm82OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhYlJvdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzY29yZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZmVzc29yRnJlbnRlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBhY290ZTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFjb3RlMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGUzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHRvRmFzZTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhYnJvdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGVBOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBhY290ZUI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFjb3RlQzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGVBQ29ycmV0bzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGVCQ29ycmV0bzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYWNvdGVDQ29ycmV0bzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBMYmxBY2VydG9zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBMYmxFcnJvczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgTGJsT3JkZW1Db3JyZXRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhY2VydG9zOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGVycm9zOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgICAgICBcclxuICAgICAgICByb3RlYW1lbnRvczogMCxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24xOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbjI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uMzogMCxcclxuICAgICAgICBcclxuICAgICAgICBicmFuY286IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXp1bDogMCxcclxuICAgICAgICBcclxuICAgICAgICB2ZXJkZTogMCxcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjZXJ0b3MgPSAwO1xyXG4gICAgICAgIHRoaXMuZXJyb3MgPSAwO1xyXG4gICAgICAgIHRoaXMuY29udFRleHRvID0gMDtcclxuICAgICAgICB0aGlzLnJvdGVhbWVudG9zID0gMDtcclxuICAgICAgICB0aGlzLmJ1dHRvbjEgPSAwO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMiA9IDA7XHJcbiAgICAgICAgdGhpcy5idXR0b24zID0gMDtcclxuICAgICAgICB0aGlzLmJyYW5jbyA9IDA7XHJcbiAgICAgICAgdGhpcy5henVsID0gMDtcclxuICAgICAgICB0aGlzLnZlcmRlID0gMDtcclxuICAgICAgICB0aGlzLnNvbWVOb3MoKTtcclxuICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk5lc3NlIE1pbmktSm9nbywgdm9jZSBhcHJlbmRlcmEgY29tbyBvIHBhY290ZVxcblwiKyBcclxuICAgICAgICAgICAgXCJ0cmFmZWdhIG5hIHJlZGUsIGF0cmF2ZXMgZG8gVENQXCI7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzb21lTm9zOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm8xLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm8yLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm8zLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm80LnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm81LnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMubm82LnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXBhcmVjZU5vczogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vMS5zZXRQb3NpdGlvbigtMjQwLCAtMTgxKTtcclxuICAgICAgICB0aGlzLm5vMi5zZXRQb3NpdGlvbigtMTgxLCAtNik7XHJcbiAgICAgICAgdGhpcy5ubzMuc2V0UG9zaXRpb24oLTE1LCAtMTgxKTtcclxuICAgICAgICB0aGlzLm5vNC5zZXRQb3NpdGlvbigxMiwgLTI3KTtcclxuICAgICAgICB0aGlzLm5vNS5zZXRQb3NpdGlvbigtMzksIDEwMyk7XHJcbiAgICAgICAgdGhpcy5ubzYuc2V0UG9zaXRpb24oMTkzLCAxMTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXBhcmVjZVBhY290ZXMxOiBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZih0aGlzLnBhY290ZTEueCA9PSAyMTMgJiYgdGhpcy5wYWNvdGUxLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDE1OSwgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEuc2V0UG9zaXRpb24oMjE1LCAxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTMueCA9PSAyMDMgJiYgdGhpcy5wYWNvdGUzLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKC0zLCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigyMDUsMTE3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYWNvdGUyLnggPT0gMTkzICYmIHRoaXMucGFjb3RlMi55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigtMTY1LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5zZXRQb3NpdGlvbigxOTUsIDExNyk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhcGFyZWNlUGFjb3RlczI6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKHRoaXMucGFjb3RlMy54ID09IDIxMyAmJiB0aGlzLnBhY290ZTMueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTU5LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigyMTUsIDExNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGFjb3RlMi54ID09IDIwMyAmJiB0aGlzLnBhY290ZTIueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oLTMsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnNldFBvc2l0aW9uKDIwNSwxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTEueCA9PSAxOTMgJiYgdGhpcy5wYWNvdGUxLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKC0xNjUsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnNldFBvc2l0aW9uKDE5NSwgMTE3KTtcclxuICAgICAgICB9ICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFwYXJlY2VQYWNvdGVzMzogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYodGhpcy5wYWNvdGUxLnggPT0gMjEzICYmIHRoaXMucGFjb3RlMS55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxNTksIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnNldFBvc2l0aW9uKDIxNSwgMTE3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYWNvdGUyLnggPT0gMjAzICYmIHRoaXMucGFjb3RlMi55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigtMywgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIuc2V0UG9zaXRpb24oMjA1LDExNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGFjb3RlMy54ID09IDE5MyAmJiB0aGlzLnBhY290ZTMueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oLTE2NSwgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMuc2V0UG9zaXRpb24oMTk1LCAxMTcpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXBhcmVjZVBhY290ZXM0OiBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZih0aGlzLnBhY290ZTIueCA9PSAyMTMgJiYgdGhpcy5wYWNvdGUyLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDE1OSwgNTcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIuc2V0UG9zaXRpb24oMjE1LCAxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTMueCA9PSAyMDMgJiYgdGhpcy5wYWNvdGUzLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKC0zLCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigyMDUsMTE3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYWNvdGUxLnggPT0gMTkzICYmIHRoaXMucGFjb3RlMS55ID09IDExNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigtMTY1LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigxOTUsIDExNyk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhcGFyZWNlUGFjb3RlczU6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKHRoaXMucGFjb3RlMS54ID09IDIxMyAmJiB0aGlzLnBhY290ZTEueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUEuc2V0UG9zaXRpb24oMTU5LCA1Nyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigyMTUsIDExNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGFjb3RlMy54ID09IDIwMyAmJiB0aGlzLnBhY290ZTMueSA9PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oLTMsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUzLnNldFBvc2l0aW9uKDIwNSwxMTcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhY290ZTIueCA9PSAxOTMgJiYgdGhpcy5wYWNvdGUyLnkgPT0gMTE1KXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKC0xNjUsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnNldFBvc2l0aW9uKDE5NSwgMTE3KTtcclxuICAgICAgICB9ICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vdmVQYWNvdGUxOiBmdW5jdGlvbiAoKXtcclxuICAgICAgICB2YXIgcGFjb3RlMTEgPSBjYy5tb3ZlVG8oNCwgY2MucCgtMTgxLCAtNikpO1xyXG4gICAgICAgIHZhciBwYWNvdGUxMiA9IGNjLm1vdmVUbyg0LCBjYy5wKC0zOSwgMTAzKSk7XHJcbiAgICAgICAgdmFyIHBhY290ZTEzID0gY2MubW92ZVRvKDQsIGNjLnAoMjEzLCAxMTUpKTtcclxuICAgICAgICB0aGlzLnBhY290ZTEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTExLHBhY290ZTEyLHBhY290ZTEzKSk7XHJcbiAgICAgICAgdmFyIHBhY290ZTIxID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0zNykpO1xyXG4gICAgICAgIHZhciBwYWNvdGUyMiA9IGNjLm1vdmVUbygyLCBjYy5wKDE5MywgMTE1KSk7XHJcbiAgICAgICAgdGhpcy5wYWNvdGUyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUyMSxwYWNvdGUyMikpO1xyXG4gICAgICAgIHZhciBwYWNvdGUzMSA9IGNjLm1vdmVUbygyLCBjYy5wKDEyLCAtMjcpKTtcclxuICAgICAgICB2YXIgcGFjb3RlMzIgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMTgxLCAtNikpO1xyXG4gICAgICAgIHZhciBwYWNvdGUzMyA9IGNjLm1vdmVUbygyLCBjYy5wKC0zOSwgMTAzKSk7XHJcbiAgICAgICAgdmFyIHBhY290ZTM0ID0gY2MubW92ZVRvKDIsIGNjLnAoMjAzLCAxMTUpKTtcclxuICAgICAgICB0aGlzLnBhY290ZTMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTMxLHBhY290ZTMyLHBhY290ZTMzLHBhY290ZTM0KSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtb3ZlUGFjb3RlMjogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAxKXtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTMxID0gY2MubW92ZVRvKDQsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTMyID0gY2MubW92ZVRvKDQsIGNjLnAoLTM5LCAxMDMpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTMzID0gY2MubW92ZVRvKDQsIGNjLnAoMjEzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUzLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUzMSxwYWNvdGUzMixwYWNvdGUzMykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMTEgPSBjYy5tb3ZlVG8oMiwgY2MucCgxMiwgLTM3KSk7XHJcbiAgICAgICAgICAgIHZhciBwYWNvdGUxMiA9IGNjLm1vdmVUbygyLCBjYy5wKDE5MywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMTEscGFjb3RlMTIpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTIxID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0yNykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMjIgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMTgxLCAtNikpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMjMgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMjQgPSBjYy5tb3ZlVG8oMiwgY2MucCgyMDMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTIxLHBhY290ZTIyLHBhY290ZTIzLHBhY290ZTI0KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gMil7XHJcbiAgICAgICAgICAgIHBhY290ZTExID0gY2MubW92ZVRvKDQsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICAgICAgcGFjb3RlMTIgPSBjYy5tb3ZlVG8oNCwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMTMgPSBjYy5tb3ZlVG8oNCwgY2MucCgyMTMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTExLHBhY290ZTEyLHBhY290ZTEzKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTMxID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0zNykpO1xyXG4gICAgICAgICAgICBwYWNvdGUzMiA9IGNjLm1vdmVUbygyLCBjYy5wKDE5MywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMzEscGFjb3RlMzIpKTtcclxuICAgICAgICAgICAgcGFjb3RlMjEgPSBjYy5tb3ZlVG8oMiwgY2MucCgxMiwgLTI3KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTIyID0gY2MubW92ZVRvKDIsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICAgICAgcGFjb3RlMjMgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgICAgICBwYWNvdGUyNCA9IGNjLm1vdmVUbygyLCBjYy5wKDIwMywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMjEscGFjb3RlMjIscGFjb3RlMjMscGFjb3RlMjQpKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAzKXtcclxuICAgICAgICAgICAgcGFjb3RlMjEgPSBjYy5tb3ZlVG8oNCwgY2MucCgtMTgxLCAtNikpO1xyXG4gICAgICAgICAgICBwYWNvdGUyMiA9IGNjLm1vdmVUbyg0LCBjYy5wKC0zOSwgMTAzKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTIzID0gY2MubW92ZVRvKDQsIGNjLnAoMjEzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUyMSxwYWNvdGUyMixwYWNvdGUyMykpO1xyXG4gICAgICAgICAgICBwYWNvdGUxMSA9IGNjLm1vdmVUbygyLCBjYy5wKDEyLCAtMzcpKTtcclxuICAgICAgICAgICAgcGFjb3RlMTIgPSBjYy5tb3ZlVG8oMiwgY2MucCgxOTMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTExLHBhY290ZTEyKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTExID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0yNykpO1xyXG4gICAgICAgICAgICBwYWNvdGUxMiA9IGNjLm1vdmVUbygyLCBjYy5wKC0xODEsIC02KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTEzID0gY2MubW92ZVRvKDIsIGNjLnAoLTM5LCAxMDMpKTtcclxuICAgICAgICAgICAgdmFyIHBhY290ZTE0ID0gY2MubW92ZVRvKDIsIGNjLnAoMjAzLCAxMTUpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUzLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShwYWNvdGUxMSxwYWNvdGUxMixwYWNvdGUxMyxwYWNvdGUxNCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnJvdGVhbWVudG9zID09IDQpe1xyXG4gICAgICAgICAgICBwYWNvdGUxMSA9IGNjLm1vdmVUbyg0LCBjYy5wKC0xODEsIC02KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTEyID0gY2MubW92ZVRvKDQsIGNjLnAoLTM5LCAxMDMpKTtcclxuICAgICAgICAgICAgcGFjb3RlMTMgPSBjYy5tb3ZlVG8oNCwgY2MucCgyMTMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTExLHBhY290ZTEyLHBhY290ZTEzKSk7XHJcbiAgICAgICAgICAgIHBhY290ZTIxID0gY2MubW92ZVRvKDIsIGNjLnAoMTIsIC0zNykpO1xyXG4gICAgICAgICAgICBwYWNvdGUyMiA9IGNjLm1vdmVUbygyLCBjYy5wKDE5MywgMTE1KSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UocGFjb3RlMjEscGFjb3RlMjIpKTtcclxuICAgICAgICAgICAgcGFjb3RlMzEgPSBjYy5tb3ZlVG8oMiwgY2MucCgxMiwgLTI3KSk7XHJcbiAgICAgICAgICAgIHBhY290ZTMyID0gY2MubW92ZVRvKDIsIGNjLnAoLTE4MSwgLTYpKTtcclxuICAgICAgICAgICAgcGFjb3RlMzMgPSBjYy5tb3ZlVG8oMiwgY2MucCgtMzksIDEwMykpO1xyXG4gICAgICAgICAgICB2YXIgcGFjb3RlMzQgPSBjYy5tb3ZlVG8oMiwgY2MucCgyMDMsIDExNSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHBhY290ZTMxLHBhY290ZTMyLHBhY290ZTMzLHBhY290ZTM0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FUZXh0bzE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250VGV4dG8gPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIk8gVENQIMOpIHVtIHByb3RvY29sbyBkZSBuw612ZWxcXG5cIitcclxuICAgICAgICAgICAgXCJkYSBjYW1hZGEgZGUgdHJhbnNwb3J0ZS4gTyBQcm90b2NvbG8gZGUgY29udHJvbGUgZGVcXG5cIitcclxuICAgICAgICAgICAgXCJ0cmFuc21pc3PDo28gcHJvdsOqIGNvbmZpYWJpbGlkYWRlLCBlbnRyZWdhIG5hIHNlcXVlbmNpYVwiOyBcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiY29ycmV0YSBlIHZlcmlmaWNhw6fDo28gZGUgZXJyb3MgcGFjb3Rlc1xcblwiK1xyXG4gICAgICAgICAgICBcImRlIGRhZG9zLCBlbnRyZSBvcyBkaWZlcmVudGVzIG7Ds3MgZGEgcmVkZVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJObyBtaW5pIGpvZ28gYSBzZWd1aXIsIGNhZGEgYm9saW5oYSB2ZXJkZVxcblwiK1xyXG4gICAgICAgICAgICBcInJlcHJlc2VudGEgdW0gbsOzIG5hIHJlZGUsIG8gb2JqZXRpdm8gZG8gam9nbyDDqVxcblwiK1xyXG4gICAgICAgICAgICBcIm9yZ2FuaXphciBvIHBhY290ZSBxdWUgc2FpIGRhIHN1YSBvcmlnZW0gZSBjaGVnYSBhbyBzZXUgZGVzdGlub1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJQYXJhIGlzc28gZXhpc3RlIG8gUklQXFxuXCIrIFxyXG4gICAgICAgICAgICBcIihSb3V0aW5nIEluZm9ybWF0aW9uIFByb3RvY29sKSBxdWUgw6kgdW0gcGFkcsOjbyBwYXJhXFxuXCIrXHJcbiAgICAgICAgICAgIFwidHJvY2EgZGUgaW5mb3JtYcOnw7VlcyBlbnRyZSBvcyBnYXRld2F5cyBlIGhvc3RzIGRlIHJvdGVhbWVudG8uXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkEgcmVkZSBtdW5kaWFsIGRlIGNvbXB1dGFkb3JlcyDDqSBvcmdhbml6YWRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY29tbyB1bSBjb25qdW50byBkZSBzaXN0ZW1hcyBhdXTDtG5vbW9zLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJPIFJJUCBlbWl0ZSBtZW5zYWdlbnMgZGUgYXR1YWxpemHDp8Ojb1xcblwiK1xyXG4gICAgICAgICAgICBcImRhcyBzdWFzIHJvdGFzIChUYWJlbGFzIGRlIFJvdGVhbWVudG8pIGVtIGludGVydmFsb3MgcmVndWxhcmVzXFxuXCIrXHJcbiAgICAgICAgICAgIFwiKGEgY2FkYSAzMCBzZWd1bmRvcykgZSBxdWFuZG8gYSB0b3BvbG9naWEgZGEgcmVkZSBtdWRhci5cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNil7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiT3Mgcm90ZWFkb3JlcyBkbyBSSVAgbWFudMOqbSBzb21lbnRlXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYSBtZWxob3Igcm90YSDDoCB1bSBkZXN0aW5vLlxcblwiK1xyXG4gICAgICAgICAgICBcImNvbSBlc3NhcyBpbmZvcm1hw6fDtWVzIGVtIG1lbnRlLCB2YW1vcyBhbyBtaW5pLWpvZ29cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiTmVzc2UgY2VuYXJpbywgYSBpbmZvcm1hw6dhbyB2aWFqYXJhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZG8gcm90ZWFkb3IgMSBhbyByb3RlYWRvciA2LCBuZXNzZSBtaW5pLWpvZ29cXG5cIitcclxuICAgICAgICAgICAgXCJvIHNldSBvYmpldGl2byBlIGNvbG9jYXIgb3MgcGFjb3RlcyBuYSBvcmRlbSBjb3JyZXRhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDgpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcInZpc3VhbGl6ZSBhIG9yZGVtIGRlIGNoZWdhZGEgZG9zIHBhY290ZXNcXG5cIitcclxuICAgICAgICAgICAgXCJlIG9zIG9yZ2FuaXplLCBjbGljYW5kbyBuZWxlcywgbmEgb3JkZW0gY29ycmV0YVxcblwiK1xyXG4gICAgICAgICAgICBcImRlbW9uc3RyYWRhIG5vIGNhbnRvIHN1cGVyaW9yIGRhIHRlbGFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVGFtYmVtIGRldmUgc2VyIG9ic2VydmFkb1xcblwiK1xyXG4gICAgICAgICAgICBcImEgbWVsaG9yIHJvdGEgYSBzZXIgdXRpbGl6YWRhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBwYXJhIGNvbWXDp2FyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5iZy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBhcmVjZU5vcygpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYnJvdC5zZXRQb3NpdGlvbigzMjEsLTEzMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigtMjQwLCAtMTgxKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUyLnNldFBvc2l0aW9uKC0yMzAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTMuc2V0UG9zaXRpb24oLTIyMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVBhY290ZTEoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gPSAyMDtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjApe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZTEuc3RyaW5nID0gXCJQYXJhYsOpbnMsIHZvY2UgY2hlZ291IHJvdGVvdSBvcyA1IHBhY290ZXNcXG5cIitcclxuICAgICAgICAgICAgXCJmYXplbmRvIFwiK3RoaXMuYWNlcnRvcytcIiBhY2VydG9zIGUgXCIrdGhpcy5lcnJvcytcIiBlcnJvc1xcblwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMSAmJiB0aGlzLmFjZXJ0b3MgPj0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlMS5zdHJpbmcgPSBcIlZvY2Ugb2J0ZXZlIDMgb3UgbWFpcyBhY2VydG9zXFxuXCIrXHJcbiAgICAgICAgICAgIFwiQ29tIGFzIGluZm9ybWHDp8O1ZXMgcGFzc2FkYXMgbmVzdGEgZmFzZVxcblwiK1xyXG4gICAgICAgICAgICBcInJlc3BvbmRhIGFnb3JhIG8gUXVpeiFcXG5cIitcclxuICAgICAgICAgICAgXCJjbGlxdWUgZW0gY29udGludWFyIGUgYm9hIHNvcnRlIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMiAmJiB0aGlzLmFjZXJ0b3MgPj0gMyl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlM1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjEgJiYgdGhpcy5lcnJvcyA+PSAzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2UxLnN0cmluZyA9IFwiVm9jZSBvYnRldmUgMyBvdSBtYWlzIGVycm9zXFxuXCIrXHJcbiAgICAgICAgICAgIFwidGVudGUgYWNlcnRhciBwZWxvIG1lbm9zIDMgcm90ZWFtZW50b3NcXG5cIitcclxuICAgICAgICAgICAgXCJqb2d1ZSBub3ZhbWVudGUhXFxuXCIrXHJcbiAgICAgICAgICAgIFwiY2xpcXVlIGVtIGNvbnRpbnVhciBlIGJvYSBzb3J0ZSFcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMjIgJiYgdGhpcy5lcnJvcyA+PSAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiam9nb0Zhc2UzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdhbWVPdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMucm90ZWFtZW50b3MgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxMzkwLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDEzOTAsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTM5MCwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMS5zZXRQb3NpdGlvbigtMTI0MCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMi5zZXRQb3NpdGlvbigtMTIzMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigtMTIyMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yRnJlbnRlLnNldFBvc2l0aW9uKC0xOTksIDApO1xyXG4gICAgICAgICAgICAvL3RoaXMuc29tZU5vcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNvbG9jYVBhY290ZXNDb3JyZXRvczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLnJvdGVhbWVudG9zID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBQ29ycmV0by5zZXRQb3NpdGlvbigtMTA3LCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmJyYW5jbyA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQkNvcnJldG8uc2V0UG9zaXRpb24oLTEyLCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmF6dWwgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUNDb3JyZXRvLnNldFBvc2l0aW9uKDc1LCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmRlID0gMztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDQ29ycmV0by5zZXRQb3NpdGlvbigtMTA3LCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmRlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBQ29ycmV0by5zZXRQb3NpdGlvbigtMTIsIC01OCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnJhbmNvID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCQ29ycmV0by5zZXRQb3NpdGlvbig3NSwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5henVsID0gMztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBQ29ycmV0by5zZXRQb3NpdGlvbigtMTA3LCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmJyYW5jbyA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQ0NvcnJldG8uc2V0UG9zaXRpb24oLTEyLCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmRlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCQ29ycmV0by5zZXRQb3NpdGlvbig3NSwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5henVsID0gMztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBQ29ycmV0by5zZXRQb3NpdGlvbigtMTA3LCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmJyYW5jbyA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQ0NvcnJldG8uc2V0UG9zaXRpb24oLTEyLCAtNTgpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmRlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCQ29ycmV0by5zZXRQb3NpdGlvbig3NSwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5henVsID0gMztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQUNvcnJldG8uc2V0UG9zaXRpb24oLTEwNywgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5icmFuY28gPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUJDb3JyZXRvLnNldFBvc2l0aW9uKC0xMiwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy5henVsID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDQ29ycmV0by5zZXRQb3NpdGlvbig3NSwgLTU4KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJkZSA9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdmVyaWljYU9yZGVtOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuYnV0dG9uMSA9PSB0aGlzLmJyYW5jbyAmJiB0aGlzLmJ1dHRvbjIgPT0gdGhpcy5henVsICYmIFxyXG4gICAgICAgIHRoaXMuYnV0dG9uMyA9PSB0aGlzLnZlcmRlKXtcclxuICAgICAgICAgICAgdGhpcy5hY2VydG9zICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucm90ZWFtZW50b3MgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDEzOTAsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oMTM5MCwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQy5zZXRQb3NpdGlvbigxMzkwLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnNldFBvc2l0aW9uKC0yNDAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIuc2V0UG9zaXRpb24oLTIzMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigtMjIwLCAtMTgxKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlUGFjb3RlMigpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgPT09IDAgfHwgdGhpcy5idXR0b24yID09PSAwIHx8IFxyXG4gICAgICAgIHRoaXMuYnV0dG9uMyA9PT0gMCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgIT0gdGhpcy5icmFuY28gfHwgdGhpcy5idXR0b24yICE9IHRoaXMuYXp1bCB8fCBcclxuICAgICAgICB0aGlzLmJ1dHRvbjMgIT0gdGhpcy52ZXJkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9zICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucm90ZWFtZW50b3MgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDEzOTAsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oMTM5MCwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQy5zZXRQb3NpdGlvbigxMzkwLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGUxLnNldFBvc2l0aW9uKC0yNDAsIC0xODEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZTIuc2V0UG9zaXRpb24oLTIzMCwgLTE4MSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlMy5zZXRQb3NpdGlvbigtMjIwLCAtMTgxKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlUGFjb3RlMigpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidG5CdXR0b246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5idXR0b24yID09PSAwICYmIHRoaXMuYnV0dG9uMyA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigtMTM5LCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24yID09IDAgJiYgdGhpcy5idXR0b24zID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUEuc2V0UG9zaXRpb24oMTIsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjIgPT0gMSAmJiB0aGlzLmJ1dHRvbjMgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMSA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQS5zZXRQb3NpdGlvbigxMiwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMiA9PSAyICYmIHRoaXMuYnV0dG9uMyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gMztcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDE2MywgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMiA9PSAxICYmIHRoaXMuYnV0dG9uMyA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gMztcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVBLnNldFBvc2l0aW9uKDE2MywgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ0bkJ1dHRvbjI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5idXR0b24xID09PSAwICYmIHRoaXMuYnV0dG9uMyA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigtMTM5LCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24xID09IDAgJiYgdGhpcy5idXR0b24zID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUIuc2V0UG9zaXRpb24oMTIsIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgPT0gMSAmJiB0aGlzLmJ1dHRvbjMgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQi5zZXRQb3NpdGlvbigxMiwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMSA9PSAyICYmIHRoaXMuYnV0dG9uMyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gMztcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDE2MywgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMSA9PSAxICYmIHRoaXMuYnV0dG9uMyA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gMztcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVCLnNldFBvc2l0aW9uKDE2MywgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnRuQnV0dG9uMzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmJ1dHRvbjEgPT09IDAgJiYgdGhpcy5idXR0b24yID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKC0xMzksIC0xNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlpY2FPcmRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJ1dHRvbjEgPT0gMCAmJiB0aGlzLmJ1dHRvbjIgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMucGFjb3RlQy5zZXRQb3NpdGlvbigxMiwgLTE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWljYU9yZGVtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYnV0dG9uMSA9PSAxICYmIHRoaXMuYnV0dG9uMiA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wYWNvdGVDLnNldFBvc2l0aW9uKDEyLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24xID09IDIgJiYgdGhpcy5idXR0b24yID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTYzLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5idXR0b24xID09IDEgJiYgdGhpcy5idXR0b24yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLnBhY290ZUMuc2V0UG9zaXRpb24oMTYzLCAtMTUwKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJpaWNhT3JkZW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbG9jYVBhY290ZXNDb3JyZXRvcygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnJvdGVhbWVudG9zID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUGFjb3RlczEoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUGFjb3RlczIoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUGFjb3RlczMoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUGFjb3RlczQoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5yb3RlYW1lbnRvcyA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUGFjb3RlczUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5MYmxBY2VydG9zLnN0cmluZyA9IFwiQWNlcnRvczogXCIgKyB0aGlzLmFjZXJ0b3M7XHJcbiAgICAgICAgdGhpcy5MYmxFcnJvcy5zdHJpbmcgPSBcIkVycm9zOiBcIiArIHRoaXMuZXJyb3M7XHJcbiAgICB9LFxyXG59KTsiLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2Zlc3Nvcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwb3J0YTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9ydGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBvcnRhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwb3J0YTQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9ydGE1OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNocm9tZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmaWxlemlsbGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlyZWZveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBza3lwZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0aHVuZGVyYmlyZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBteXNxbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0b0Zhc2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxibFBvbnR1YWNhbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9udHVhY2FvOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRUZXh0bzogMCxcclxuICAgICAgICBcclxuICAgICAgICBwb3J0YTogMCxcclxuICAgICAgICBcclxuICAgICAgICBwZXJndW50YTogMCxcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvbnR1YWNhbyA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250VGV4dG8gPSAwO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQSBjYW1hZGEgZGUgdHJhbnNwb3J0ZSB0cmFiYWxoYVxcblwiK1xyXG4gICAgICAgIFwiY29tIG8gY29uY2VpdG8gZGUgc29xdWV0ZXMoc29ja2V0cylcIjtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFwYXJlY2VQb3J0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wb3J0YTEuc2V0UG9zaXRpb24oLTM5MiwgMTcyKTtcclxuICAgICAgICB0aGlzLnBvcnRhMi5zZXRQb3NpdGlvbigtMjEzLCAxNzIpO1xyXG4gICAgICAgIHRoaXMucG9ydGEzLnNldFBvc2l0aW9uKC00MSwgMTcyKTtcclxuICAgICAgICB0aGlzLnBvcnRhNC5zZXRQb3NpdGlvbigxNTAsIDE3Mik7XHJcbiAgICAgICAgdGhpcy5wb3J0YTUuc2V0UG9zaXRpb24oMzU2LCAxNzIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVBvcnRhczogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnBvcnRhMS5zZXRQb3NpdGlvbigtMTM0OSwgMCk7XHJcbiAgICAgICAgdGhpcy5wb3J0YTIuc2V0UG9zaXRpb24oLTEzNDksIDApO1xyXG4gICAgICAgIHRoaXMucG9ydGEzLnNldFBvc2l0aW9uKC0xMzQ5LCAwKTtcclxuICAgICAgICB0aGlzLnBvcnRhNC5zZXRQb3NpdGlvbigtMTM0OSwgMCk7XHJcbiAgICAgICAgdGhpcy5wb3J0YTUuc2V0UG9zaXRpb24oLTEzNDksIDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZUljb25lczogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnNreXBlLnNldFBvc2l0aW9uKC0xMzYwLCAwKTtcclxuICAgICAgICB0aGlzLmZpcmVmb3guc2V0UG9zaXRpb24oLTEzNjAsIDApO1xyXG4gICAgICAgIHRoaXMuY2hyb21lLnNldFBvc2l0aW9uKC0xMzYwLCAwKTtcclxuICAgICAgICB0aGlzLmZpbGV6aWxsYS5zZXRQb3NpdGlvbigtMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy50aHVuZGVyYmlyZC5zZXRQb3NpdGlvbigtMTM2MCwgMCk7XHJcbiAgICAgICAgdGhpcy5teXNxbC5zZXRQb3NpdGlvbigtMTM2MCwgMCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVRleHRvMTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRUZXh0byA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiVW0gc29xdWV0ZSBkZSByZWRlIMOpIHVtIHBvbnRvIGZpbmFsIGRlIHVtIGZsdXhvIGRlIGNvbXVuaWNhw6fDo28gXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZW50cmUgcHJvY2Vzc29zIGF0cmF2w6lzIGRlIHVtYSByZWRlIGRlIGNvbXB1dGFkb3Jlcy4gSG9qZSBlbSBkaWFcXG5cIitcclxuICAgICAgICAgICAgXCJhIG1haW9yaWEgZGEgY29tdW5pY2HDp8OjbyBlbnRyZSBjb21wdXRhZG9yZXMgw6kgYmFzZWFkYSBubyBJUFwiOyBcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwicG9ydGFudG8gYSBtYWlvcmlhIGRvcyBzb3F1ZXRlcyBkZSByZWRlIHPDo28gc29xdWV0ZXMgSVAuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlVtIGVuZGVyZcOnbyBkZSBzb3F1ZXRlIMOpIGEgY29tYmluYcOnw6NvIGRlIHVtIGVuZGVyZcOnbyBkZSBJUCBlIHVtXFxuXCIrXHJcbiAgICAgICAgICAgIFwibsO6bWVybyBkYSBwb3J0YSwgcGFyZWNpZG8gY29tIG8gZmluYWwgZGUgdW1hIGNvbmV4w6NvIHRlbGVmw7RuaWNhIHF1ZSDDqVxcblwiK1xyXG4gICAgICAgICAgICBcImEgY29tYmluYcOnw6NvIGRlIHVtIG7Dum1lcm8gZGUgdGVsZWZvbmUgZSB1bWEgZGV0ZXJtaW5hZGEgZXh0ZW5zw6NvLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDb20gYmFzZSBuZXNzZSBlbmRlcmXDp28sIHNvcXVldGVzIGRlIGludGVybmV0XFxuXCIrXHJcbiAgICAgICAgICAgIFwiZW50cmVnYW0gcGFjb3RlcyBkZSBkYWRvcyBkZSBlbnRyYWRhIHBhcmEgbyBwcm9jZXNzbyBvdSB0aHJlYWRcXG5cIitcclxuICAgICAgICAgICAgXCJkZSBhcGxpY2HDp8OjbyBhcHJvcHJpYWRvLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJJbnNlcmlkbyBubyBjb25jZWl0byBkZSBzb2NrZXRzLCB0ZW1vcyBvIGNvbmNlaXRvIGRlXFxuXCIrXHJcbiAgICAgICAgICAgIFwicG9ydGFzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlBvcnRhIMOpIHVtIHBvbnRvIGbDrXNpY28gKGhhcmR3YXJlKSBvdSBsw7NnaWNvIChzb2Z0d2FyZSkgbm8gcXVhbFxcblwiK1xyXG4gICAgICAgICAgICBcInBvZGVtIHNlciBmZWl0YXMgY29uZXjDtWVzLCBvdSBzZWphLCB1bSBjYW5hbCBhdHJhdsOpcyBkbyBxdWFsIG9zIGRhZG9zXFxuXCIrXHJcbiAgICAgICAgICAgIFwic8OjbyB0cmFuc2Zlcmlkb3MgZW50cmUgdW0gZGlzcG9zaXRpdm8gZGUgZW50cmFkYSBlIG8gcHJvY2Vzc2Fkb3JcIjsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDYpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIm91IGVudHJlIG8gcHJvY2Vzc2Fkb3IgZSB1bSBkaXNwb3NpdGl2byBkZSBzYcOtZGEuXFxuXCIrXHJcbiAgICAgICAgICAgIFwiT3UgYWNlc3NvIHBvciBkZW50cm8gZSBwb3IgZm9yYSBkbyBjb21wdXRhZG9yLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSA3KXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJVbWEgcG9ydGEgZGUgc29mdHdhcmUgw6kgdW1hIGNvbmV4w6NvIHZpcnR1YWxcXG5cIitcclxuICAgICAgICAgICAgXCJxdWUgcG9kZSBzZXIgdXNhZGEgbmEgdHJhbnNtaXNzw6NvIGRlIGRhZG9zLiBBcyBtYWlzIGNvbXVucyBzw6NvXFxuXCIrXHJcbiAgICAgICAgICAgIFwiYXMgcG9ydGFzIHByb3RvY29sYWRhcyBUQ1AgZSBVRFBcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiQWxndW1hcyBwb3J0YXMgZnJlcXVlbnRlbWVudGUgdXNhZGFzIHPDo286XFxuXCIrXHJcbiAgICAgICAgICAgIFwiUG9ydGEgODA6IHBhcmEgcHJvdG9jb2xvcyBIVFRQXFxuXCIrXHJcbiAgICAgICAgICAgIFwiUG9ydGEgODE6IFNreXBlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIlBvcnRhIDIwOiBwYXJhIHByb3RvY29sb3MgRlRQXFxuXCIrXHJcbiAgICAgICAgICAgIFwiUG9ydGEgMTEwOiBwYXJhIHNlcnZpw6dvcyBQT1AzKEUtTWFpbClcXG5cIitcclxuICAgICAgICAgICAgXCJQb3J0YSAxMTg6IHBhcmEgbyBTUUwsIGVudHJlIHbDoXJpb3Mgb3V0cmFzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0b0Zhc2Uuc3RyaW5nID0gXCJDb20gZXNzYSBpbmZvcm1hw6fDo28gZW0gbcOjb3NcXG5cIitcclxuICAgICAgICAgICAgXCJ2YW1vcyBhbyBtaW5pLWpvZ29cIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMTEpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkNvbSBvcyBjb25oZWNpbWVudG9zIGRlIHBvcnRhcyBwYXNzYWRvcyBhdMOpIGVudGFvXFxuXCIrXHJcbiAgICAgICAgICAgIFwiZGlyZWNpb25lIG8gaWNvbmUgZGEgYXBsaWNhw6dhbyBwYXJhIGEgcG9ydGEgY29ycmV0YVxcblwiK1xyXG4gICAgICAgICAgICBcInBhcmEgaXNzbywgY2xpcXVlIG5hIHBvcnRhIHBhcmEgcXVhbCBlbGUgZGV2ZSBzZWd1aXJcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250VGV4dG8gKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250VGV4dG8gPT0gMTIpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRvRmFzZS5zdHJpbmcgPSBcIkZhw6dhIGEgYXNzb2NpYcOnw6NvIGNlcnRhIDUgdmV6ZXNcXG5cIitcclxuICAgICAgICAgICAgXCJwYXJhIGF2YW7Dp2FyIHBhcmEgbyBxdWl6IVxcblwiK1xyXG4gICAgICAgICAgICBcImNsaXF1ZSBlbSBjb250aW51YXIgZSBib2Egc29ydGUhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udFRleHRvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udFRleHRvID09IDEzKXtcclxuICAgICAgICAgICAgdGhpcy5hcGFyZWNlUG9ydGFzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmVzc29yLnNldFBvc2l0aW9uKDEzNjAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNreXBlLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byA9IDE5O1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAxOSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dG9GYXNlLnN0cmluZyA9IFwiUGFyYWLDqW5zISFcXG5cIitcclxuICAgICAgICAgICAgXCJWb2PDqiBhY2VydG91IGFzIHBvcnRhcyBjb3JyZXRhcyFcXG5cIitcclxuICAgICAgICAgICAgXCJjbGlxdWUgZW0gY29udGludWFyIGUgdsOhIHBhcmEgbyBxdWl6IVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRUZXh0byArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRUZXh0byA9PSAyMCl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInF1aXpGYXNlNFwiKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcG9ydGE4MDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdmFsb3Jwb3J0YSA9IFwiODBcIjtcclxuICAgICAgICBpZih0aGlzLnBvcnRhID09IHZhbG9ycG9ydGEpe1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5zb21lSWNvbmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcG9ydGE4MTogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdmFsb3Jwb3J0YSA9IFwiODFcIjtcclxuICAgICAgICBpZih0aGlzLnBvcnRhID09IHZhbG9ycG9ydGEpe1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5zb21lSWNvbmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcG9ydGEyMDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdmFsb3Jwb3J0YSA9IFwiMjBcIjtcclxuICAgICAgICBpZih0aGlzLnBvcnRhID09IHZhbG9ycG9ydGEpe1xyXG4gICAgICAgICAgICB0aGlzLnBvbnR1YWNhbyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5zb21lSWNvbmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcG9ydGExMTA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHZhbG9ycG9ydGEgPSBcIjExMFwiO1xyXG4gICAgICAgIGlmKHRoaXMucG9ydGEgPT0gdmFsb3Jwb3J0YSl7XHJcbiAgICAgICAgICAgIHRoaXMucG9udHVhY2FvICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5zb21lSWNvbmVzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVJY29uZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwb3J0YTExODogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdmFsb3Jwb3J0YSA9IFwiMTE4XCI7XHJcbiAgICAgICAgaWYodGhpcy5wb3J0YSA9PSB2YWxvcnBvcnRhKXtcclxuICAgICAgICAgICAgdGhpcy5wb250dWFjYW8gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVJY29uZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIG11ZGFQZXJndW50YTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLnBlcmd1bnRhID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODFcIjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODBcIjtcclxuICAgICAgICAgICAgdGhpcy5jaHJvbWUuc2V0UG9zaXRpb24oMCwgLTIzNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGVyZ3VudGEgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGEgPSBcIjExMFwiO1xyXG4gICAgICAgICAgICB0aGlzLnRodW5kZXJiaXJkLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBlcmd1bnRhID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRhID0gXCIyMFwiO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGV6aWxsYS5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODFcIjtcclxuICAgICAgICAgICAgdGhpcy5za3lwZS5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODBcIjtcclxuICAgICAgICAgICAgdGhpcy5maXJlZm94LnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBlcmd1bnRhID09IDYpe1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRhID0gXCIxMThcIjtcclxuICAgICAgICAgICAgdGhpcy5teXNxbC5zZXRQb3NpdGlvbigwLCAtMjM3KTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wZXJndW50YSA9PSA3KXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiODFcIjtcclxuICAgICAgICAgICAgdGhpcy5maWxlemlsbGEuc2V0UG9zaXRpb24oMCwgLTIzNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGVyZ3VudGEgPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGEgPSBcIjgwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY2hyb21lLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBlcmd1bnRhID09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRhID0gXCI4MVwiO1xyXG4gICAgICAgICAgICB0aGlzLnNreXBlLnNldFBvc2l0aW9uKDAsIC0yMzcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBlcmd1bnRhID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YSA9IFwiMTEwXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bmRlcmJpcmQuc2V0UG9zaXRpb24oMCwgLTIzNyk7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGEgPSAwO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgdGhpcy5tdWRhUGVyZ3VudGEoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnBvbnR1YWNhbyA+PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5wcm9mZXNzb3Iuc2V0UG9zaXRpb24oLTE4NCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZUljb25lcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWVQb3J0YXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYmxQb250dWFjYW8uc3RyaW5nID0gXCJBY2VydG9zOiBcIisgdGhpcy5wb250dWFjYW87XHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0aW1lcjogMCxcclxuICAgICAgICBcclxuICAgICAgICBkdXJhY2FvTG9nbzogMCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB2YWlQcmFNYWluOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5kdXJhY2FvTG9nbykge1xyXG4gICAgICAgICAgICB0aGlzLnZhaVByYU1haW4oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0T3BhY2l0eSgwKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldE9wYWNpdHkoMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldE9wYWNpdHkoMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldE9wYWNpdHkoMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3Bvc3RhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGVyZ3VudGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhQ2VydGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFeHRyYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZWxhRmluYWxRdWl6OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNDZXJ0YXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0VycmFkYXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvblRyeUFnYWluOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3A6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcENlcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwRXJyOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW9zdHJhUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FSZXNwb3N0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTI1OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZXJndW50YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdBIGNhbWFkYSBkZSBhY2Vzc28gYSByZWRlIMOpIHJlc3BvbnPDoXZlbCBwb3IuLi4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdJZGVudGlmaWNhciBvcyBpcHMgZGEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0NvbnRyb2xhciBvIGFjZXNzbyBhIHJlZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdlc3RhYmVsZcOnYSBlZmV0aXZhbWVudGUgdW0gbGluayBmw61zaWNvXFxuIGNvbSBvcyBtZWlvcyBmw61zaWNvcyBkYSByZWRlLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0FjZXNzYXIgYSByZWRlIGVtIGFwbGljYcOnw7VlcyBXZWIuJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFsIGRlc3NlcyBkaXNwb3NpdGl2b3MgbsOjbyBhdHVhXFxuIG5hIGNhbWFkYSBkZSBhY2Vzc28gYSByZWRlPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1JvdGVhZG9yJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnSFVCJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnU3dpdGNoJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnTmVuaHVtYSBkYXMgb3DDp8O1ZXMnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ08gc2luYWwgYW5hbMOzZ2ljbyDDqSBjYXJhY3Rlcml6YWRvIHBvci4uLjonO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdQb3NzdWlyIGFwZW5hcyB1bVxcbiBjb25qdW50byBsaW1pdGFkbyBkZSB2YWxvcmVzJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnVGVyIHVtIGNvbmp1bnRvIGluZmluaXRvIGRlIHZhbG9yZXNcXG4gbnVtIGludGVydmFsbyBkZSB0ZW1wbyBxdWFscXVlcic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1NlciBhbHRlcmFkbyBlbSBjb250w61udW8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdTZXIgdW0gc2luYWwgcXVlIG7Do28gcG9zc3VpIGZhbGhhcyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnTyBzaW5hbCBkaWdpdGFsIMOpIGNhcmFjdGVyaXphZG8gcG9yLi4uOic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1NlciBhbHRlcmFkbyBlbSBjb250w61udW8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdTZXIgdW0gc2luYWwgcXVlIG7Do28gcG9zc3VpIGZhbGhhcyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1RlciB1bSBjb25qdW50byBpbmZpbml0byBkZSB2YWxvcmVzXFxuIG51bSBpbnRlcnZhbG8gZGUgdGVtcG8gcXVhbHF1ZXInO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdQb3NzdWlyIGFwZW5hcyB1bVxcbiBjb25qdW50byBsaW1pdGFkbyBkZSB2YWxvcmVzJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFpcyBkZXNzZXMgZWxlbWVudG9zXFxuIGNvbXDDtWVtIG8gYsOhc2ljbyBkZSB1bWEgcmVkZT8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICd0cmFuc21pc3NvcmVzLCByZWNlcHRvcmVzIGUgbyBtZWlvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAncHJvdG9jb2xvcyBlIHNlcnZpw6dvcyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ2luZm9ybWHDp8O1ZXMgZSB1c3XDoXJpb3MnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdjb21wdXRhZG9yIGUgY2FibyBkZSByZWRlJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwQ2VydG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcEVycmFkbzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BFcnIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnYW1lb3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRlbGFGaW5hbFF1aXouc2V0UG9zaXRpb25YKDApO1xyXG4gICAgICAgIGlmKHRoaXMucmVzcENlcj49IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRyeUFnYWluLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnUGFyYWLDqW5zIVxcbicrXHJcbiAgICAgICAgICAgICdWb2PDqiBwYXNzb3Ugbm8gUXVpeiEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ0FoISBxdWUgcGVuYSFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogbsOjbyBwYXNzb3Ugbm8gUXVpeiFcXG4nKyBcclxuICAgICAgICAgICAgJ3RlbnRlIG5vdmFtZW50ZSEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0NlcnRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIGNvcnJldGFzOiAnK3RoaXMucmVzcENlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0VycmFkYXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBFcnJhZGFzOiAnK3RoaXMucmVzcEVycjsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMTAwMDAwO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcENlciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyID0gMDtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0NyZWRpdHM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiY3JlZGl0c1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1vc3RyYVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGltZXIgPCAxKXtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3Bvc3RhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGVyZ3VudGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhQ2VydGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFeHRyYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZWxhRmluYWxRdWl6OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNDZXJ0YXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0VycmFkYXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvblRyeUFnYWluOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3A6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcENlcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwRXJyOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW9zdHJhUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FSZXNwb3N0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTI1OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZXJndW50YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdBIGNhbWFkYSBJbnRlcm5ldCDDqSByZXNwb25zw6F2ZWwgcG9yLi4uJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnQ29udHJvbGFyIG8gYWNlc3NvIGEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0dlcmFyIGUgdHJhbnNtaXRpciBvIHNpbmFsIHBlbG8gbWVpbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0dlcmVuY2lhciBvcyBwYWNvdGVzIG5hIHJlZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdBY2Vzc2FyIGEgcmVkZSBlbSBhcGxpY2HDp8O1ZXMgV2ViJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFsIGRvcyBzZWd1aW50ZXMgbsOjbyDDqSB2ZXJkYWRlaXJvXFxuIHNvYnJlIHVtIGVuZGVyZcOnbyBJUD8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdVbSBlbmRlcmXDp28gSVBcXG4gZ2VyYWxtZW50ZSDDqSByZXByZXNlbnRhZG8gbm8gZm9ybWF0b1xcbiBoZXhhZGVjaW1hbCBwYXJhIG8gdXN1w6FyaW8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdVbSBlbmRlcmXDp28gSVAgw6kgdW0gZW5kZXJlw6dvIGzDs2dpY28nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdVbSBlbmRlcmXDp28gSVAgw6kgZ2xvYmFsbWVudGVcXG4gZXhjbHVzaXZvIGVtIHVtYSByZWRlJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnVW0gZW5kZXJlw6dvIElQIHBvZGUgc2VyIGNvbnNpZGVyYWRvXFxuIGNvbW8gY29uc2lzdGluZG8gZGVcXG4gdW1hIHBhcnRlIGRlIHJlZGUgZSB1bWEgcGFydGUgZGUgaG9zdCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVhbCBkYXMgc2VndWludGVzIG3DoXNjYXJhcyBwYWRyw6NvXFxuIHBhcmEgb3MgcHJpbmNpcGFpc1xcbiBuw7ptZXJvcyBkZSBjbGFzc2UgZXN0w6EgaW5jb3JyZXRhPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ03DoXNjYXJhIENsYXNzZSBBIDI1NS4wLjAuMCBvdSAvOCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ03DoXNjYXJhIENsYXNzZSBEIDI1NS4yNTUuMjU1LjI1NSBvdSAvMzInO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdNw6FzY2FyYSBDbGFzc2UgQiAyNTUuMjU1LjAuMCBvdSAvMTYnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdNw6FzY2FyYSBjbGFzc2UgQyAyNTUuMjU1LjI1NS4wIG91IC8yNCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnTyBxdWUgZmF6IG8gQVJQIChBZGRyZXNzIFJlc29sdXRpb24gUHJvdG9jb2wpPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1Jlc29sdmUgbyBlbmRlcmXDp28gSVBcXG4gcGFyYSBlbmRlcmXDp28gTUFDJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnUmVzb2x2ZSBvIGNhbXBvIFRZUEVcXG4gcGFyYSBvIGVuZGVyZcOnbyBNQUMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdSZXNvbHZlIG8gZW5kZXJlw6dvIE1BQ1xcbiBwYXJhIG8gY2FtcG8gVFlQRSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1Jlc29sdmUgZW5kZXJlw6dvcyBNQUNcXG4gcGFyYSBlbmRlcmXDp29zIElQJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA0KXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFsIG8gbnVtZXJvIG3DoXhpbW8gZGUgaG9zdHMgcG9zc8OtdmVpc1xcbiBlbSB1bWEgcmVkZSBjbGFzc2UgQz8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICcyNTQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICcxMjgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICcyNTYnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICc2NCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcENlcnRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucmVzcENlciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BFcnJhZG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZW92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50ZWxhRmluYWxRdWl6LnNldFBvc2l0aW9uWCgwKTtcclxuICAgICAgICBpZih0aGlzLnJlc3BDZXI+PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UcnlBZ2Fpbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ1BhcmFiw6lucyFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogcGFzc291IG5vIFF1aXohJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLnN0cmluZyA9ICdBaCEgcXVlIHBlbmEhXFxuJytcclxuICAgICAgICAgICAgJ1ZvY8OqIG7Do28gcGFzc291IG5vIFF1aXohXFxuJysgXHJcbiAgICAgICAgICAgICd0ZW50ZSBub3ZhbWVudGUhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNDZXJ0YXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBjb3JyZXRhczogJyt0aGlzLnJlc3BDZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YXNFcnJhZGFzLnN0cmluZyA9ICdSZXNwb3N0YXMgRXJyYWRhczogJyt0aGlzLnJlc3BFcnI7IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDEwMDAwMDtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gMDtcclxuICAgICAgICB0aGlzLnJlc3BDZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciA9IDA7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9DcmVkaXRzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImNyZWRpdHNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3N0cmFSZXNwb3N0YSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnRpbWVyIDwgMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZ3VudGFzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aW1lciAtPSBkdDtcclxuXHJcbiAgICB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZXNwb3N0YTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBlcmd1bnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUNlcnRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXh0cmE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGVsYUZpbmFsUXVpejoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnYW1lT3Zlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFzQ2VydGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNFcnJhZGFzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBidXR0b25UcnlBZ2Fpbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhZG9yOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRpbWVyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3BDZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcEVycjogMCxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNvbWVSZXNwb3N0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXh0cmEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG1vc3RyYVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMi5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTMuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRyb2NhUmVzcG9zdGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgtMTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0yNTgpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKDExMik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcGVyZ3VudGFzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDApe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnQSBjYW1hZGEgdHJhbnNwb3J0ZSDDqSByZXNwb25zw6F2ZWwgcG9yLi4uJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnR2VyZW5jaWFyIG9zIHBhY290ZXMgbmEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0dlcmFyIGUgdHJhbnNtaXRpciBvIHNpbmFsIHBlbG8gbWVpbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0VzdGFiZWxlY2VyIHVtYSBjb25leMOjbyBmaW0gYSBmaW1cXG4gKGNvbmV4w6NvIGNvbmZpw6F2ZWwpZW50cmUgYSBvcmlnZW0gZSBvIGRlc3Rpbm9cXG4gZG9zIGRhZG9zJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnQWNlc3NhciBhIHJlZGUgZW0gYXBsaWNhw6fDtWVzIFdlYic7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMSl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVhbCBkZXN0ZXMgcHJvdG9jb2xvcyBuw6NvIHBlcnRlbmNlXFxuIGEgY2FtYWRhIGRlIHRyYW5zcG9ydGU/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnQVJQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnVENQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnSVAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdGVFAnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1YWwgZGVzdGVzIGRpc3Bvc2l0aXZvc1xcbiBhdHVhIG5hIGNhbWFkYSBkZSB0cmFuc3BvcnRlPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1N3aXRjaCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1JvdGVhZG9yJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnSFVCJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnTmVuaHVtYSBkYXMgb3DDp8O1ZXMgYWNpbWEnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ05hIGNhbWFkYSBkZSB0cmFuc3BvcnRlXFxuIG8gcHJvdG9jb2xvIHBhcmEgZ2FyYW50aXJcXG4gYSBjb25maWFiaWxpZGFkZSBlLi4uPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0lQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnRlRQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnSFRUUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ1RDUCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnT3MgcHJvdG9jb2xvcyBkZSBjYW1hZGEgZGUgdHJhbnNwb3J0ZVxcbiBxdWUgZXN0YWJlbGVjZW0gdW1hIGNvbmV4w6NvIGNvbSBvdXRybyBuw7NcXG4gYW50ZXMgZGUgY29tZcOnYXJlbSBhIHRyYW5zbWl0aXIgZGFkb3NcXG4gc8OjbyBjb25oZWNpZG9zIGNvbW8gPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1Byb3RvY29sb3Mgb3JpZW50YWRvcyDDoCBjb25leMOjbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1Byb3RvY29sb3Mgc2VtIGNvbmV4w6NvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnUHJvdG9jb2xvcyBvcmllbnRhZG9zIGEgU3luJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnUHJvdG9jb2xvcyBvcmllbnRhZG9zIHBhcmEgQWNrJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwQ2VydG86IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDM7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyICs9IDE7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciArPSAxO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnV0dG9uUmVzcEVycmFkbzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BFcnIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnYW1lb3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRlbGFGaW5hbFF1aXouc2V0UG9zaXRpb25YKDApO1xyXG4gICAgICAgIGlmKHRoaXMucmVzcENlcj49IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRyeUFnYWluLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnUGFyYWLDqW5zIVxcbicrXHJcbiAgICAgICAgICAgICdWb2PDqiBwYXNzb3Ugbm8gUXVpeiEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ0FoISBxdWUgcGVuYSFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogbsOjbyBwYXNzb3Ugbm8gUXVpeiFcXG4nKyBcclxuICAgICAgICAgICAgJ3RlbnRlIG5vdmFtZW50ZSEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0NlcnRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIGNvcnJldGFzOiAnK3RoaXMucmVzcENlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0VycmFkYXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBFcnJhZGFzOiAnK3RoaXMucmVzcEVycjsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMTAwMDAwO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcENlciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyID0gMDtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29Ub0NyZWRpdHM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiY3JlZGl0c1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1vc3RyYVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGltZXIgPCAxKXtcclxuICAgICAgICAgICAgdGhpcy5wZXJndW50YXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3Bvc3RhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGEyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGVyZ3VudGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGEzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhQ2VydGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFeHRyYToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0ZWxhRmluYWxRdWl6OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbWVPdmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YXNDZXJ0YXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0VycmFkYXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvblRyeUFnYWluOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3A6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFkb3I6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcENlcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwRXJyOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc29tZVJlc3Bvc3RhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGExLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFeHRyYS5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbW9zdHJhUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEyLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMy5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHJvY2FSZXNwb3N0YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTI1OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwZXJndW50YXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdBIGNhbWFkYSBkZSBhcGxpY2HDp8OjbyDDqSByZXNwb25zw6F2ZWwgcG9yLi4uJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnR2VyZW5jaWFyIG9zIHBhY290ZXMgbmEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0VzdGFiZWxlY2VyIHVtYSBjb25leMOjbyBmaW0gYSBmaW1cXG4gKGNvbmV4w6NvIGNvbmZpw6F2ZWwpZW50cmUgYSBvcmlnZW0gZSBvIGRlc3Rpbm9cXG4gZG9zIGRhZG9zLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1Byb3RvY29sb3MgZGUgY29tdW5pY2HDp8Ojb1xcbiBjb20gYXMgZGlmZXJlbnRlcyBhcGxpY2HDp8O1ZXMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdBY2Vzc2FyIGEgcmVkZSBlbSBhcGxpY2HDp8O1ZXMgV2ViJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdOYSBjYW1hZGEgZGUgYXBsaWNhw6fDo29cXG4gbyBwcm90b2NvbG8gSFRUUCDDqSByZXNwb25zYXZlbCBwb3IuLi4/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnRXhpYmlyIHBhZ2luYXMgd2ViJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnUmVjZWJlciBhcnF1dm9zIGRlIHZpZGVvIGRhIGludGVybmV0ICc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ0VzdGFiZWxlY2VyIHVtYSBjb25leMOjbyBzZWd1cmEnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICdCYWl4YXIgYXJxdWl2b3MgVG9ycmVudCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gMil7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnTyBwcm9ncmFtYSBGaWxlemlsbGEgZSBvIHByb3RvY29sbyBGVFBcXG4gc8OjbyByZXNwb25zYXZlaXMgcG9yICc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1NlZ3VyYW7Dp2EgbmEgcmVkZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1RyYW5zZmVyZW5jaWEgZGUgYXJxdWl2b3MnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdBcm1hemVuYW1lbnRvIGVtIG51dmVtJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnQ3JpcHRvZ3JhZmlhIGRlIGRhZG9zJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWFsIGRlc3RlcyDDqSB1bSBwcm90b2NvbG9cXG4gZGUgY2FtYWRhIGRlIGFwbGljYcOnw6NvPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1RDUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0RIQ1AnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdFdGhlcm5ldCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0hUVFAnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDQpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ08gcXVlIHNpZ25pZmljYVxcbiB1bSBjw7NkaWdvIGRlIHN0YXR1cyBIVFRQIGRlIFwiNDA0XCI/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnRXJybyBkZSBwcm90b2NvbG8gJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnRG9jdW1lbnRvIGZvaSBtb3ZpZG8gJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnUmVjdXBlcmHDp8OjbyBiZW0gc3VjZWRpZGEgZG8gZG9jdW1lbnRvJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnRG9jdW1lbnRvIG7Do28gZW5jb250cmFkbyAnO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BDZXJ0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BDZXIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwRXJyYWRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvVG9DcmVkaXRzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImNyZWRpdHNcIik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnYW1lb3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRlbGFGaW5hbFF1aXouc2V0UG9zaXRpb25YKDApO1xyXG4gICAgICAgIGlmKHRoaXMucmVzcENlcj49IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRyeUFnYWluLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnUGFyYWLDqW5zIVxcbicrXHJcbiAgICAgICAgICAgICdWb2PDqiBwYXNzb3Ugbm8gUXVpeiEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIuc3RyaW5nID0gJ0FoISBxdWUgcGVuYSFcXG4nK1xyXG4gICAgICAgICAgICAnVm9jw6ogbsOjbyBwYXNzb3Ugbm8gUXVpeiFcXG4nKyBcclxuICAgICAgICAgICAgJ3RlbnRlIG5vdmFtZW50ZSEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0NlcnRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIGNvcnJldGFzOiAnK3RoaXMucmVzcENlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3Rhc0VycmFkYXMuc3RyaW5nID0gJ1Jlc3Bvc3RhcyBFcnJhZGFzOiAnK3RoaXMucmVzcEVycjsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMTAwMDAwO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzcENlciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwRXJyID0gMDtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9zdHJhUmVzcG9zdGEoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy50aW1lciA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVvdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGltZXIgLT0gZHQ7XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVzcG9zdGExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGE0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwZXJndW50YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFFcnJhZGExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3RhRXJyYWRhMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUVycmFkYTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFDZXJ0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZXNwb3N0YUV4dHJhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRlbGFGaW5hbFF1aXo6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2FtZU92ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3Bvc3Rhc0NlcnRhczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9zdGFzRXJyYWRhczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uVHJ5QWdhaW46IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcDogMCxcclxuICAgICAgICBcclxuICAgICAgICBjb250YWRvcjogMCxcclxuICAgICAgICBcclxuICAgICAgICB0aW1lcjogMCxcclxuICAgICAgICBcclxuICAgICAgICByZXNwQ2VyOiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3BFcnI6IDAsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzb21lUmVzcG9zdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTEuc2V0T3BhY2l0eSgwKTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMi5zZXRPcGFjaXR5KDApO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEzLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUV4dHJhLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldE9wYWNpdHkoMCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBtb3N0cmFSZXNwb3N0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXJyYWRhMS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YUVycmFkYTIuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFFcnJhZGEzLnNldE9wYWNpdHkoMjU1KTtcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhRXh0cmEuc2V0T3BhY2l0eSgyNTUpO1xyXG4gICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRPcGFjaXR5KDI1NSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0cm9jYVJlc3Bvc3RhczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7Ly9zZWd1bmRhIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0yNTgpOy8vdWx0aW1hIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xNDYpOy8vdGVyY2VpcmEgb3DDp2FvXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTE0Nik7Ly90ZXJjZWlyYSBvcMOnYW9cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb3N0YUNlcnRhLnNldFBvc2l0aW9uWSgxMTIpOy8vcHJpbWVpcmEgb3DDp2FvXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNil7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoLTE4KTsvL3NlZ3VuZGEgb3DDp2FvXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9zdGFDZXJ0YS5zZXRQb3NpdGlvblkoMTEyKTsvL3ByaW1laXJhIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDgpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0yNTgpOy8vdWx0aW1hIG9ww6dhb1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bvc3RhQ2VydGEuc2V0UG9zaXRpb25ZKC0xOCk7Ly9zZWd1bmRhIG9ww6dhb1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBlcmd1bnRhczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAwKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1ZXN0YW8gMTpRdWFsIHByb3RvY29sbyDDqSByZXNwb25zw6F2ZWwgcG9yIHJlc29sdmVyXFxuJytcclxuICAgICAgICAnbyBtYXBlYW1lbnRvIGVudHJlIG9zIGVuZGVyZcOnbyBJUFxcbicrXHJcbiAgICAgICAgJ2Ugb3MgZW5kZXJlw6dvcyBNQUMgZGEgcmVkZT8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdUQ1AnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdESENQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnQVJQJzsvL2NvcnJldGFcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnRE5TJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAxKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDI6QXNzaW5hbGUgYSBhbHRlcm5hdGl2YSBxdWUgcmVwcmVzZW50YVxcbicrXHJcbiAgICAgICAgJ28gdGFtYW5obyBlbSBieXRlcyBkb3MgY2FtcG9zIGRlIGVuZGVyZcOnbyBNQUNcXG4nK1xyXG4gICAgICAgICdJUHY0IGUgSVB2NiwgcmVzcGVjdGl2YW1lbnRlLic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJzQsIDYsIDE2JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnNiwgNCwgMTYnOy8vY29ycmV0YVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICc0OCwgMzIsIDEyOCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJzE2LCAzMiwgNjQnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDIpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1ZXN0YW8gMzogTmEgcGlsaGEgVENQL0lQLCBhIGZ1bsOnw6NvIGRlIGVudmlhclxcbicrXHJcbiAgICAgICAgJ2FvIHRyYW5zbWlzc29yIGRhIGluZm9ybWHDp8OjbyB1bWEgY29uZmlybWHDp8Ojb1xcbicrXHJcbiAgICAgICAgJ2RlIHJlY2ViaW1lbnRvIGRhIG1lbnNhZ2VtKGFjaykgw6kgcmVhbGl6YWRhIHBlbGEgY2FtYWRhOic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ1RyYW5zcG9ydGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdBY2Vzc28gYSByZWRlJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnQXBsaWNhw6dhbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0ludGVybmV0JzsvL2NvcnJldGFcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSAzKXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDQ6IEFzc2luYWxlIGEgYWx0ZXJuYXRpdmEgcXVlIGNvbnTDqW0gcHJvdG9jb2xvc1xcbicrXHJcbiAgICAgICAgJ2RhcyBjYW1hZGFzIGRlIGVubGFjZSwgcmVkZSwgdHJhbnNwb3J0ZSBlIGFwbGljYcOnw6NvXFxuJytcclxuICAgICAgICAncmVzcGVjdGl2YW1lbnRlLCBkYSBwaWxoYSBkZSBwcm90b2NvbG9zIFRDUC9JUC4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdBUlAsIElQLCBUQ1AsIElQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnUFBQLCBJQ01QLCBVRFAsIFNOTVAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdFdGhlcm5ldCwgUFBQLCBVRFAsIFNTSCc7Ly9jb3JyZXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0V0aGVybmV0LCBETlMsIFRDUCwgU01UUCc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNCl7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVlc3RhbyA1OiBPIGVuZGVyZcOnbyBkZSB1bSByZWN1cnNvIGRpc3BvbsOtdmVsIGVtIHVtYSByZWRlXFxuJytcclxuICAgICAgICAnc2VqYSBuYSBJbnRlcm5ldCBvdSBudW1hIHJlZGUgY29ycG9yYXRpdmEgSW50cmFuZXRcXG4nK1xyXG4gICAgICAgICd0ZW0gYSBzZWd1aW50ZSBlc3RydXR1cmE6JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAncHJvdG9jb2xvOi8vY2FtaW5oby9yZWN1cnNvL23DoXF1aW5hLiAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdwcm90b2NvbG86Ly9jYW1pbmhvL23DoXF1aW5hL3JlY3Vyc28uICc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ3Byb3RvY29sbzovL23DoXF1aW5hL2NhbWluaG8vcmVjdXJzby4gJzsvL2NvcnJldG9cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnbcOhcXVpbmE6Ly9wcm90b2NvbG8vY2FtaW5oby9yZWN1cnNvLiAnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDUpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1ZXN0YW8gNjogTmEgY2xhc3NlIHBhZHLDo28gQ1xcbicrXHJcbiAgICAgICAgJ3F1YW50b3MgYnl0ZXMgc8OjbyByZXNlcnZhZG9zIHBhcmEgcmVkZXM/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnMDEgYnl0ZSc7Ly9jb3JyZXRvXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJzAyIGJ5dGVzJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnMDMgYnl0ZXMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGE0LnN0cmluZyA9ICcwNCBieXRlcyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udGFkb3IgPT0gNil7XHJcbiAgICAgICAgdGhpcy5zb21lUmVzcG9zdGEoKTtcclxuICAgICAgICB0aGlzLnRyb2NhUmVzcG9zdGFzKCk7XHJcbiAgICAgICAgdGhpcy5wZXJndW50YS5zdHJpbmcgPSAnUXVlc3RhbyA3OiBDb21vIMOpIGRlbm9taW5hZG8gbyBwcm90b2NvbG9cXG4nKyBcclxuICAgICAgICAnZGUgY29uZmlndXJhw6fDo28gZGluw6JtaWNhIGRlIElQPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0ZUUCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ0RIQ1AnOy8vY29ycmV0b1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEzLnN0cmluZyA9ICdIVFRQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnRE5TJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA3KXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDg6IFF1YWwgZGV0c2VzIHByb3RvY29sb3Mgw6kgbWFpcyByw6FwaWRvXFxuJytcclxuICAgICAgICAncG9yw6ltIG1lbm9zIGNvbmZpw6F2ZWw/JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMS5zdHJpbmcgPSAnVURQJzsvL2NvcnJldG9cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMi5zdHJpbmcgPSAnRlRQJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnU1NIJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhNC5zdHJpbmcgPSAnVENQJztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250YWRvciA9PSA4KXtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudHJvY2FSZXNwb3N0YXMoKTtcclxuICAgICAgICB0aGlzLnBlcmd1bnRhLnN0cmluZyA9ICdRdWVzdGFvIDk6IFF1YWwgw6kgYSBjbGFzc2UgZGUgZW5kZXJlw6dvIElQXFxuJytcclxuICAgICAgICAncXVlIHV0aWxpemEgYSBtw6FzY2FyYSBwYWRyw6NvIDI1NS4yNTUuMC4wPyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTEuc3RyaW5nID0gJ0EnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGEyLnN0cmluZyA9ICdEJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3Bvc3RhMy5zdHJpbmcgPSAnQyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ0InOy8vY29ycmV0YVxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDkpe1xyXG4gICAgICAgIHRoaXMuc29tZVJlc3Bvc3RhKCk7XHJcbiAgICAgICAgdGhpcy50cm9jYVJlc3Bvc3RhcygpO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGEuc3RyaW5nID0gJ1F1ZXN0YW8gMTA6IE8gY29uanVudG8gZm9ybWFkbyBwb3IgdW0gZW5kZXJlw6dvIElQXFxuJytcclxuICAgICAgICAnZSB1bSBuw7ptZXJvIGRlIHBvcnRhIGNvbnN0aXR1aTonO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGExLnN0cmluZyA9ICdVbWEgY29uZXhhbyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTIuc3RyaW5nID0gJ1VtIHNvY2tldCc7Ly9jb3JyZXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTMuc3RyaW5nID0gJ1VtIGRhdGFncmFtYSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNwb3N0YTQuc3RyaW5nID0gJ08gZW5kZXJlw6dvIGRlIGdhdGV3YXknO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ1dHRvblJlc3BDZXJ0bzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB0aGlzLnJlc3BDZXIgKz0gMTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yICs9IDE7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidXR0b25SZXNwRXJyYWRvOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucmVzcEVyciArPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFkb3IgKz0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdhbWVvdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGVsYUZpbmFsUXVpei5zZXRQb3NpdGlvblgoMCk7XHJcbiAgICAgICAgaWYodGhpcy5yZXNwQ2VyPj0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVHJ5QWdhaW4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLnN0cmluZyA9ICdQYXJhYsOpbnMhXFxuJytcclxuICAgICAgICAgICAgJ1ZvY8OqIHBhc3NvdSBubyBRdWl6ISc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlci5zdHJpbmcgPSAnQWghIHF1ZSBwZW5hIVxcbicrXHJcbiAgICAgICAgICAgICdWb2PDqiBuw6NvIHBhc3NvdSBubyBRdWl6IVxcbicrIFxyXG4gICAgICAgICAgICAndGVudGUgbm92YW1lbnRlISc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGFzQ2VydGFzLnN0cmluZyA9ICdSZXNwb3N0YXMgY29ycmV0YXM6ICcrdGhpcy5yZXNwQ2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzcG9zdGFzRXJyYWRhcy5zdHJpbmcgPSAnUmVzcG9zdGFzIEVycmFkYXM6ICcrdGhpcy5yZXNwRXJyOyBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNvbWVSZXNwb3N0YSgpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAxMDAwMDA7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNwQ2VyID0gMDtcclxuICAgICAgICB0aGlzLnJlc3BFcnIgPSAwO1xyXG4gICAgICAgIHRoaXMucGVyZ3VudGFzKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb1RvQ3JlZGl0czogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJjcmVkaXRzXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9zdHJhUmVzcG9zdGEoKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy50aW1lciA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBlcmd1bnRhcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRhZG9yID09IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9