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
        
        computador: {
            default: null,
            type: cc.Node
        },
        
        roteador: {
            default: null,
            type: cc.Node
        },
        
        pontuacao: 0,
        
        contTexto: 0,
    },

    // use this for initialization
    onLoad: function () {
        this.pontuacao = 0;
        this.contTexto = 0;
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera a rotear\n"+ 
            "pacotes IPs";
    },
    
    tryAgain: function(){
        cc.director.loadScene("jogoFase1");
    },
    
    trocaTexto1: function(){
        if(this.contTexto === 0){
            this.textoFase.string = "Os roteadores são utilizados para interligar\n"+
            "as redes físicas entre si. Eles oferecem\n"+
            "múltiplos caminhos para interconectar as redes físicas.";
            this.contTexto += 1;
        } else if(this.contTexto == 1){
            this.textoFase.string = "As tabelas de roteamento indicam para cada roteador\n"+
            "como ele deve encaminhar um pacote a fim de que\n"+
            "este chegue a uma certa rede física de destino.";
            this.contTexto += 1;
        } else if(this.contTexto == 2){
            this.textoFase.string = "As tabelas de roteamento são preenchidas\n"+
            "automaticamente, através de protocolos de roteamento\n"+
            "padronizados, como o BGP (Border Gateway Protocol)";
            this.contTexto += 1;
        } else if(this.contTexto == 3){
            this.textoFase.string = "Veja agora um exemplo de rede!";
            this.contTexto += 1;
        } else if(this.contTexto == 4){
            this.bgFase2.setPosition(0, 0);
            this.textoFase.string = "O cenario acima demonstra uma rede\n"+
            "com 6 maquinas e 3 roteadores, vamos obersava-la por partes";
            this.contTexto += 1;
        } else if(this.contTexto == 5){
            this.computador.setPosition(0, 80);
            this.computador.setScale(0.2, 0.2);
            this.textoFase.string = "Perceba que esta maquina possui\n"+
            "um endereço de IP utilizado para redes privadas\n"+
            "tambem possui uma mascara de rede, representado pela /";
            this.contTexto += 1;
        } else if(this.contTexto == 6){
            this.textoFase.string = "A mascara de rede identifica\n"+
            "quantos bits sao de rede e quantos estao\n"+
            "reservados para host!";
            this.contTexto += 1;
        } else if(this.contTexto == 7){
            this.computador.setPosition(-379, 9);
            this.computador.setScale(0.1, 0.1);
            this.textoFase.string = "O roteador...";
            this.contTexto += 1;
        }
    },

    // called every frame, uncomment this function to activate update callback
    //update: function (dt) {
        
    //},
});