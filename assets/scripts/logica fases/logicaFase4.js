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
        
        contTexto: 0,
        
    },

    // use this for initialization
    onLoad: function () {
        this.pontuacao = 0;
        this.contTexto = 0;
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera como o pacote\n"+ 
            "trafega na rede, atraves do TCP";
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
            this.computador1.setPosition(0, 80);
            this.computador1.setScale(0.2, 0.2);
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
            this.computador1.setPosition(-379, 9);
            this.computador1.setScale(0.1, 0.1);
            this.roteador1.setScale(0.3, 0.3);
            this.roteador1.setPosition(0, 100);
            this.textoFase.string = "O roteador neste cenario interliga\n"+
            "a rede local com a rede externa, para que isso ocorra\n"+
            "o roteador possui uma tabela de roteamento";
            this.contTexto += 1;
        } else if(this.contTexto == 8){
            this.textoFase.string = "A tabela de roteamento possui\n"+
            "o endereço da rede, a sua mascara e a qual interface\n"+
            "ela esta conectada";
            this.contTexto += 1;
        } else if(this.contTexto == 9){
            this.textoFase.string = "Vamos ver isso na pratica";
            this.contTexto += 1;
        } else if(this.contTexto == 10){
            this.tabRoteamento.setPosition(312, 24);
            this.textoFase.string = "A tabela de roteamento e preenchida\n"+
            "a medida que os pacotes de informaçao\n"+
            "vao chegando ao roteador";
            this.contTexto += 1;
        } else if(this.contTexto == 11){
            this.textoFase.string = "O mini-jogo a seguir, te coloca na pele\n"+
            "do roteador, tendo que preencher a tabela de roteamento\n"+ 
            "e entregar os pacotes";
            this.contTexto += 1;
        } else if(this.contTexto == 12){
            this.someCenario();
            this.roteador2.setPosition(33, 260);
            this.tabRoteamento.setPosition(0, 60);
            this.textoFase.string = "A tabela de roteamento do roteador\n"+
            "começa vazia, porem, o mesmo envia uma mensagem para\n"+
            "suas interfaces, a fim de identificar as redes";
            this.contTexto += 1;
        } else if(this.contTexto == 13){
            this.textoFase.string = "Clique nos botoes para\n"+
            "identificar as redes e depois clique em continuar!";
            this.ipTabela1.string = "Clique para identificar rede";
            this.ipTabela2.string = "Clique para identificar rede";
            this.contTexto += 1;
        } else if(this.contTexto == 14 && this.buttonCont1 == 1 && this.buttonCont2 == 1){
            this.textoFase.string = "Com a tabela montada o roteador pode\n"+
            "começar a distribuir os pacotes, clique na rede\n"+
            "para onde o pacote deve ir,depois clique em continuar";
            this.pacote.setPosition(300, 50);
            this.ipPacote.string = "IP:192.168.10.6\n"+
            "Mask:255.255.255.0";
            this.contTexto += 1;
        } else if(this.contTexto == 15){
            this.textoFase.string = "A rede correta para o envio do pacote era\n"+
            "a rede 192.168.10.0, o seu erro ou acerto pode ser visto\n"+
            "em cima do pacote";
            this.contTexto += 1;
        } else if(this.contTexto == 16){
            this.textoFase.string = "Faça o roteamento para os proximos 5 pacotes\n"+
            "acerte pelo menos 3 para avançar para o quiz!\n"+
            "clique em continuar para começar!";
            this.contTexto += 1;
        } else if(this.contTexto == 17){
            this.ipPacote.string = "IP:192.168.50.5\n"+
            "Mask:255.255.255.0";
            this.ip = "192.168.50.5";
            this.twBG.setPosition(0, -1360);
            this.contTexto += 1;
        } else if(this.contTexto == 20){
            cc.director.loadScene("quizFase2");
        } else if(this.contTexto == 21){
            cc.director.loadScene("jogoFase2");
        } 
    },
    
    // called every frame, uncomment this function to activate update callback
    //update: function (dt) {
        
    //},
});
