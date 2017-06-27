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
        
        contTexto: 0,
        
    },

    // use this for initialization
    onLoad: function () {
        this.pontuacao = 0;
        this.contTexto = 0;
        this.someNos();
        this.textoFase.string = "Nesse Mini-Jogo, voce aprendera como o pacote\n"+ 
            "trafega na rede, atraves do TCP";
    },
    
    someNos: function(){
        this.no1.setPosition(1360, 0);
        this.no2.setPosition(1360, 0);
        this.no3.setPosition(1360, 0);
        this.no4.setPosition(1360, 0);
        this.no5.setPosition(1360, 0);
        this.no6.setPosition(1360, 0);
    },
    
    apareceNos: function(){
        this.no1.setPosition(-240, -181);
        this.no2.setPosition(-181, -6);
        this.no3.setPosition(-15, -181);
        this.no4.setPosition(12, -27);
        this.no5.setPosition(-39, 103);
        this.no6.setPosition(193, 115);
    },
    
    trocaTexto1: function(){
        if(this.contTexto === 0){
            this.textoFase.string = "O TCP é um protocolo de nível\n"+
            "da camada de transporte. O Protocolo de controle de\n"+
            "transmissão provê confiabilidade, entrega na sequencia"; 
            this.contTexto += 1;
        } else if(this.contTexto == 1){
            this.textoFase.string = "correta e verificação de erros pacotes\n"+
            "de dados, entre os diferentes nós da rede";
            this.contTexto += 1;
        } else if(this.contTexto == 2){
            this.textoFase.string = "No mini jogo a seguir, cada bolinha verde\n"+
            "representa um no na rede, o objetivo do jogo e\n"+
            "levar o pacote da sua origem ao seu destino";
            this.contTexto += 1;
        } else if(this.contTexto == 3){
            this.textoFase.string = "Para isso existe o RIP\n"+ 
            "(Routing Information Protocol) é um padrão para\n"+
            "troca de informações entre os gateways e hosts de roteamento.";
            this.contTexto += 1;
        } else if(this.contTexto == 4){
            this.textoFase.string = "A rede mundial de computadores é organizada\n"+
            "como um conjunto de sistemas autônomos.";
            this.contTexto += 1;
        } else if(this.contTexto == 5){
            this.textoFase.string = "O RIP emite mensagens de atualização\n"+
            "das suas rotas (Tabelas de Roteamento) em intervalos regulares\n"+
            "(a cada 30 segundos) e quando a topologia da rede mudar.";
            this.contTexto += 1;
        } else if(this.contTexto == 6){
            this.textoFase.string = "Os roteadores do RIP mantêm somente\n"+
            "a melhor rota à um destino.\n"+
            "com essas informações em mente, vamos ao mini-jogo";
            this.contTexto += 1;
        } else if(this.contTexto == 7){
            this.textoFase.string = "No papel de um pacote, voce tera\n"+
            "6 saltos para sair do no 1 e chegar ao no 6!\n"+
            "clique em continuar e boa sorte!!";
            this.contTexto += 1;
        } else if(this.contTexto == 8){
            this.bg.setOpacity(255);
            this.apareceNos();
        } 
    },
    
     
    
    // called every frame, uncomment this function to activate update callback
    //update: function (dt) {
        
    //},
});
