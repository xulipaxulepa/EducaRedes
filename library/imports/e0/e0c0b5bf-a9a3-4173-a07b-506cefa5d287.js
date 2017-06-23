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
        } else if (this.buttonCont1 == 6) {
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
        if (this.pontuacao == 6 && this.certo > 3) {
            this.contTexto = 20;
            this.twBG.setPosition(-3, -210);
            this.textoFase.string = "Parabens! voce passou de fase\n" + "responda agora as questoes do quiz!\n" + "clique em continuar para prosseguir";
        } else if (this.pontuacao == 6 && this.errado > 3) {
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