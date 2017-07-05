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
        
        contTexto: 0,
        
    },

    // use this for initialization
    onLoad: function () {
        this.player.setPosition(1360, 0);
        this.pontuacao = 0;
        this.contTexto = 0;
        this.saltos = 5;
        this.score.string = this.saltos;
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
    
    someRealizaSalto: function(){
        this.btnRealizarSalto1.setPosition(895, -108);
        this.btnRealizarSalto2.setPosition(895, -108);
        this.btnRealizarSalto3.setPosition(895, -108);
        this.btnRealizarSalto4.setPosition(895, -108);
        this.btnRealizarSalto5.setPosition(895, -108);
        this.btnRealizarSalto6.setPosition(895, -108);
    },
    
    apareceNos: function(){
        this.no1.setPosition(-240, -181);
        this.no2.setPosition(-181, -6);
        this.no3.setPosition(-15, -181);
        this.no4.setPosition(12, -27);
        this.no5.setPosition(-39, 103);
        this.no6.setPosition(193, 115);
    },
    
    movePlayer: function (x, y){
        var move = cc.moveTo(3, cc.p(x, y));
        this.player.runAction(move);
    },
    
    criaLinha: function() {
        var novaLinha = cc.instantiate(this.linha);
        this.bg.addChild(novaLinha);
        novaLinha.setPosition(this.player.getPosition());
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
            "5 saltos para sair do no 1 e chegar ao no 6!\n"+
            "clique em continuar e boa sorte!!";
            this.contTexto += 1;
        } else if(this.contTexto == 8){
            this.bg.setOpacity(255);
            this.no1.setPosition(-240, -181);
            this.player.setPosition(-210, -154);
            this.contTexto += 1;
        } else if(this.contTexto == 20){
            this.textoFase1.string = "Parabens, voce chegou ao no 6!\n"+
            "apesar de bastante simplificado o mini-jogo demonstrou\n"+
            "como uma informaçao trafega em diversas redes!";
            this.contTexto += 1;
        } else if(this.contTexto == 21){
            this.textoFase1.string = "Com as informaçoes passadas nesta fase\n"+
            "responda agora o Quiz!\n"+
            "clique em continuar e boa sorte!";
            this.contTexto += 1;
        } else if(this.contTexto == 22){
            cc.director.loadScene("quizFase3");
        } else if(this.contTexto == 9){
            this.contTexto += 1;
        } else if(this.contTexto == 10){
            cc.director.loadScene("jogoFase3");
        }
    },
    
    buttonNo1: function(){
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 3         20%\n"+
        "\n"+
        "\n"+
        "No 2         70%";
        this.someRealizaSalto();
        this.btnRealizarSalto3.setPosition(0, -108);
        this.btnRealizarSalto2.setPosition(0, -202);
    },
    
    buttonNo2: function(){
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 5         80%\n"+
        "\n"+
        "\n"+
        "No 4         70%";
        this.someRealizaSalto();
        this.btnRealizarSalto5.setPosition(0, -108);
        this.btnRealizarSalto4.setPosition(0, -202);
    },
    
    buttonNo3: function(){
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 1         20%\n"+
        "\n"+
        "\n"+
        "No 2         70%";
        this.someRealizaSalto();
        this.btnRealizarSalto1.setPosition(0, -108);
        this.btnRealizarSalto2.setPosition(0, -202);
    },
    
    buttonNo4: function(){
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 5         90%\n"+
        "\n"+
        "\n"+
        "No 2         70%";
        this.someRealizaSalto();
        this.btnRealizarSalto5.setPosition(0, -108);
        this.btnRealizarSalto2.setPosition(0, -202);
    },
    
    buttonNo5: function(){
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 4         60%\n"+
        "\n"+
        "\n"+
        "No 6         30%";
        this.someRealizaSalto();
        this.btnRealizarSalto4.setPosition(0, -108);
        this.btnRealizarSalto6.setPosition(0, -202);
    },
    
    buttonNo6: function(){
        this.tabRot.setPosition(320, -130);
        this.lblNo1.string = "No 5         70%\n"+
        "\n"+
        "\n"+
        "";
        this.someRealizaSalto();
        this.btnRealizarSalto5.setPosition(0, -108);
        
    },
    
    buttonSalto1: function(){
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no1.setPosition(-240, -181);
        this.saltos -= 1;
        this.movePlayer(-240, -181);
    },
    
    buttonSalto2: function(){
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no2.setPosition(-181, -6);
        this.saltos -= 1;
        this.movePlayer(-181, -6);
    },
    
    buttonSalto3: function(){
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no3.setPosition(-15, -181);
        this.saltos -= 1;
        this.movePlayer(-15, -181);
    },
    
    buttonSalto4: function(){
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no4.setPosition(12, -27);
        this.saltos -= 1;
        this.movePlayer(12, -27);
    },
    
    buttonSalto5: function(){
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no5.setPosition(-39, 103);
        this.saltos -= 1;
        this.movePlayer(-39, 103);
    },
    
    buttonSalto6: function(){
        this.tabRot.setPosition(1320, -130);
        this.someNos();
        this.no6.setPosition(193, 115);
        this.saltos -= 1;
        this.movePlayer(193, 115);
        this.professorFrente.setPosition(-199, 0);
        this.contTexto = 20;
    },
     
    gameOver: function(){
        this.professorFrente.setPosition(-199, 0);
        //this.contTexto = 20;
        this.someNos();
        this.textoFase1.string = "Infelizmente a mensagem se perdeu\n"+
            "clique em continuar e tente novamente!";
        if(this.contTexto == 10){
            cc.director.loadScene("jogoFase3");
        }
    },
    
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.criaLinha();
        
        if(this.saltos === 0){
            this.gameOver();
        }
        
        this.score.string = "Saltos: "+ this.saltos;
    },
});
