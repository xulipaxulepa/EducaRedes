cc.Class({
    extends: cc.Component,

    properties: {
        professor: {
            default: null,
            type: cc.Node
        },
        
        face1: {
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
        
        face2: {
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
        
        tutorial: {
            default: null,
            type: cc.Node
        },
        
        textWrapper: {
            default: null,
            type: cc.Node
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
        
        verde: 0,
        
    },

    // use this for initialization
    onLoad: function () {
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
        var face = this.face1.getComponent(cc.Animation);
        face.play("falaProfessor3-1");
        var professor = this.professor.getComponent(cc.Animation);
        professor.play("Aparece");
        var texto = this.textoFase.getComponent(cc.Animation);
        texto.playAdditive('ApareceTexto');
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
    
    aparecePacotes1: function (){
        if(this.pacote1.x == 213 && this.pacote1.y == 115){
            this.pacoteA.setPosition(159, 3);
            this.pacote1.setPosition(215, 117);
        } else if(this.pacote3.x == 203 && this.pacote3.y == 115){
            this.pacoteC.setPosition(-3, 3);
            this.pacote3.setPosition(205,117);
        } else if(this.pacote2.x == 193 && this.pacote2.y == 115){
            this.pacoteB.setPosition(-165, 3);
            this.pacote2.setPosition(195, 117);
        }  
    },
    
    aparecePacotes2: function (){
        if(this.pacote3.x == 213 && this.pacote3.y == 115){
            this.pacoteC.setPosition(159, 3);
            this.pacote3.setPosition(215, 117);
        } else if(this.pacote2.x == 203 && this.pacote2.y == 115){
            this.pacoteB.setPosition(-3, 3);
            this.pacote2.setPosition(205,117);
        } else if(this.pacote1.x == 193 && this.pacote1.y == 115){
            this.pacoteA.setPosition(-165, 3);
            this.pacote1.setPosition(195, 117);
        }  
    },
    
    aparecePacotes3: function (){
        if(this.pacote1.x == 213 && this.pacote1.y == 115){
            this.pacoteA.setPosition(159, 3);
            this.pacote1.setPosition(215, 117);
        } else if(this.pacote2.x == 203 && this.pacote2.y == 115){
            this.pacoteB.setPosition(-3, 3);
            this.pacote2.setPosition(205,117);
        } else if(this.pacote3.x == 193 && this.pacote3.y == 115){
            this.pacoteC.setPosition(-165, 3);
            this.pacote3.setPosition(195, 117);
        }  
    },
    
    aparecePacotes4: function (){
        if(this.pacote2.x == 213 && this.pacote2.y == 115){
            this.pacoteB.setPosition(159, 3);
            this.pacote2.setPosition(215, 117);
        } else if(this.pacote3.x == 203 && this.pacote3.y == 115){
            this.pacoteC.setPosition(-3, 3);
            this.pacote3.setPosition(205,117);
        } else if(this.pacote1.x == 193 && this.pacote1.y == 115){
            this.pacoteA.setPosition(-165, 3);
            this.pacote1.setPosition(195, 117);
        }  
    },
    
    aparecePacotes5: function (){
        if(this.pacote1.x == 213 && this.pacote1.y == 115){
            this.pacoteA.setPosition(159, 3);
            this.pacote1.setPosition(215, 117);
        } else if(this.pacote3.x == 203 && this.pacote3.y == 115){
            this.pacoteC.setPosition(-3, 3);
            this.pacote3.setPosition(205,117);
        } else if(this.pacote2.x == 193 && this.pacote2.y == 115){
            this.pacoteB.setPosition(-165, 3);
            this.pacote2.setPosition(195, 117);
        }  
    },
    
    movePacote1: function (){
        var pacote11 = cc.moveTo(4, cc.p(-181, -6));
        var pacote12 = cc.moveTo(4, cc.p(-39, 103));
        var pacote13 = cc.moveTo(4, cc.p(213, 115));
        this.pacote1.runAction(cc.sequence(pacote11,pacote12,pacote13));
        var pacote21 = cc.moveTo(2, cc.p(12, -37));
        var pacote22 = cc.moveTo(2, cc.p(193, 115));
        this.pacote2.runAction(cc.sequence(pacote21,pacote22));
        var pacote31 = cc.moveTo(2, cc.p(12, -27));
        var pacote32 = cc.moveTo(2, cc.p(-181, -6));
        var pacote33 = cc.moveTo(2, cc.p(-39, 103));
        var pacote34 = cc.moveTo(2, cc.p(203, 115));
        this.pacote3.runAction(cc.sequence(pacote31,pacote32,pacote33,pacote34));
    },
    
    movePacote2: function (){
        if(this.roteamentos == 1){
            var pacote31 = cc.moveTo(4, cc.p(-181, -6));
            var pacote32 = cc.moveTo(4, cc.p(-39, 103));
            var pacote33 = cc.moveTo(4, cc.p(213, 115));
            this.pacote3.runAction(cc.sequence(pacote31,pacote32,pacote33));
            var pacote11 = cc.moveTo(2, cc.p(12, -37));
            var pacote12 = cc.moveTo(2, cc.p(193, 115));
            this.pacote1.runAction(cc.sequence(pacote11,pacote12));
            var pacote21 = cc.moveTo(2, cc.p(12, -27));
            var pacote22 = cc.moveTo(2, cc.p(-181, -6));
            var pacote23 = cc.moveTo(2, cc.p(-39, 103));
            var pacote24 = cc.moveTo(2, cc.p(203, 115));
            this.pacote2.runAction(cc.sequence(pacote21,pacote22,pacote23,pacote24));
        } else if(this.roteamentos == 2){
            pacote11 = cc.moveTo(4, cc.p(-181, -6));
            pacote12 = cc.moveTo(4, cc.p(-39, 103));
            var pacote13 = cc.moveTo(4, cc.p(213, 115));
            this.pacote1.runAction(cc.sequence(pacote11,pacote12,pacote13));
            pacote31 = cc.moveTo(2, cc.p(12, -37));
            pacote32 = cc.moveTo(2, cc.p(193, 115));
            this.pacote3.runAction(cc.sequence(pacote31,pacote32));
            pacote21 = cc.moveTo(2, cc.p(12, -27));
            pacote22 = cc.moveTo(2, cc.p(-181, -6));
            pacote23 = cc.moveTo(2, cc.p(-39, 103));
            pacote24 = cc.moveTo(2, cc.p(203, 115));
            this.pacote2.runAction(cc.sequence(pacote21,pacote22,pacote23,pacote24));
        } else if(this.roteamentos == 3){
            pacote21 = cc.moveTo(4, cc.p(-181, -6));
            pacote22 = cc.moveTo(4, cc.p(-39, 103));
            pacote23 = cc.moveTo(4, cc.p(213, 115));
            this.pacote2.runAction(cc.sequence(pacote21,pacote22,pacote23));
            pacote11 = cc.moveTo(2, cc.p(12, -37));
            pacote12 = cc.moveTo(2, cc.p(193, 115));
            this.pacote1.runAction(cc.sequence(pacote11,pacote12));
            pacote11 = cc.moveTo(2, cc.p(12, -27));
            pacote12 = cc.moveTo(2, cc.p(-181, -6));
            pacote13 = cc.moveTo(2, cc.p(-39, 103));
            var pacote14 = cc.moveTo(2, cc.p(203, 115));
            this.pacote3.runAction(cc.sequence(pacote11,pacote12,pacote13,pacote14));
        } else if(this.roteamentos == 4){
            pacote11 = cc.moveTo(4, cc.p(-181, -6));
            pacote12 = cc.moveTo(4, cc.p(-39, 103));
            pacote13 = cc.moveTo(4, cc.p(213, 115));
            this.pacote1.runAction(cc.sequence(pacote11,pacote12,pacote13));
            pacote21 = cc.moveTo(2, cc.p(12, -37));
            pacote22 = cc.moveTo(2, cc.p(193, 115));
            this.pacote2.runAction(cc.sequence(pacote21,pacote22));
            pacote31 = cc.moveTo(2, cc.p(12, -27));
            pacote32 = cc.moveTo(2, cc.p(-181, -6));
            pacote33 = cc.moveTo(2, cc.p(-39, 103));
            var pacote34 = cc.moveTo(2, cc.p(203, 115));
            this.pacote3.runAction(cc.sequence(pacote31,pacote32,pacote33,pacote34));
        }
    },
    
    jogar: function(){
        this.apareceNos();
        this.tabrot.setPosition(321,-130);
        this.pacote1.setPosition(-240, -181);
        this.pacote2.setPosition(-230, -181);
        this.pacote3.setPosition(-220, -181);
        this.movePacote1();
        this.tutorial.setPosition(2000,0);
    },
    
    trocaTexto1: function(){
        var texto = this.textoFase.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face1.getComponent(cc.Animation);
        var texto1 = this.textoFase1.getComponent(cc.Animation);
        if(this.contTexto === 0){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-2");
            this.textoFase.string = "O TCP é um protocolo de nível\n"+
            "da camada de transporte. O Protocolo de controle de\n"+
            "transmissão provê confiabilidade, entrega na sequencia"; 
            this.contTexto += 1;
        } else if(this.contTexto == 1){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.textoFase.string = "correta e verificação de erros nos pacotes\n"+
            "de dados, entre os diferentes nós da rede";
            this.contTexto += 1;
        } else if(this.contTexto == 2){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-1");
            this.textoFase.string = "No mini jogo a seguir, cada roteador\n"+
            "representa um nó na rede, o objetivo do jogo é\n"+
            "organizar o pacote que sai da sua origem\n"+
            "e chega ao seu destino";
            this.contTexto += 1;
        } else if(this.contTexto == 3){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-2");
            this.textoFase.string = "As informações trafegarão através do RIP\n"+ 
            "(Routing Information Protocol) que é um padrão para\n"+
            "troca de informações entre os gateways\n"+ 
            "e hosts de roteamento.";
            this.contTexto += 1;
        } else if(this.contTexto == 4){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.textoFase.string = "A rede mundial de computadores é organizada\n"+
            "como um conjunto de sistemas autônomos.";
            this.contTexto += 1;
        } else if(this.contTexto == 5){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-1");
            this.textoFase.string = "O RIP emite mensagens de atualização\n"+
            "das suas rotas (Tabelas de Roteamento)\n"+ 
            "em intervalos regulares(a cada 30 segundos)\n"+ 
            "e quando a topologia da rede mudar.";
            this.contTexto += 1;
        } else if(this.contTexto == 6){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-2");
            this.textoFase.string = "Os roteadores do RIP mantêm somente\n"+
            "a melhor rota à um destino.\n"+
            "com essas informações em mente, vamos ao mini-jogo";
            this.contTexto += 1;
        } else if(this.contTexto == 7){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.textoFase.string = "Nesse cenario, a informaçao viajara\n"+
            "do roteador 1 ao roteador 6, nesse mini-jogo\n"+
            "o seu objetivo e colocar os pacotes na ordem correta";
            this.contTexto += 1;
        } else if(this.contTexto == 8){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-1");
            this.textoFase.string = "visualize a ordem de chegada dos pacotes\n"+
            "e os organize, clicando neles, na ordem correta\n"+
            "demonstrada no canto superior da tela";
            this.contTexto += 1;
        } else if(this.contTexto == 9){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.textoFase.string = "clique em continuar para começar";
            this.contTexto += 1;
        } else if(this.contTexto == 10){
            this.bg.setOpacity(255);
            this.tutorial.setPosition(0,0);
            this.textoFase1.string = "Parabéns, voce roteou os 5 pacotes\n"+
            "fazendo "+this.acertos+" acertos e "+this.erros+" erros\n";
            this.contTexto = 20;
        } else if(this.contTexto == 20){
            texto1.playAdditive('ApareceTexto');
            this.contTexto += 1;
        } else if(this.contTexto == 21 && this.acertos >= 3){
            texto1.playAdditive('ApareceTexto');
            this.textoFase1.string = "Voce obteve 3 ou mais acertos\n"+
            "Com as informações passadas nesta fase\n"+
            "responda agora o Quiz!\n"+
            "clique em continuar e boa sorte!";
            this.contTexto += 1;
        } else if(this.contTexto == 22 && this.acertos >= 3){
            cc.director.loadScene("quizFase3");
        } else if(this.contTexto == 21 && this.erros >= 3){
            texto1.playAdditive('ApareceTexto');
            this.textoFase1.string = "Voce obteve 3 ou mais erros\n"+
            "tente acertar pelo menos 3 roteamentos\n"+
            "jogue novamente!\n"+
            "clique em continuar e boa sorte!";
            this.contTexto += 1;
        } else if(this.contTexto == 22 && this.erros >= 3){
            cc.director.loadScene("jogoFase3");
        }
    },
    
    gameOver: function(){
        if(this.roteamentos == 5){
            this.roteamentos = 6;
            this.pacoteA.setPosition(1390, -150);
            this.pacoteB.setPosition(1390, -150);
            this.pacoteC.setPosition(1390, -150);
            this.pacote1.setPosition(-1240, -181);
            this.pacote2.setPosition(-1230, -181);
            this.pacote3.setPosition(-1220, -181);
            var professor = this.professorFrente.getComponent(cc.Animation);
            var face = this.face2.getComponent(cc.Animation);
            var tw = this.textWrapper.getComponent(cc.Animation);
            tw.play("apareceTW!");
            professor.play("Aparece");
            face.play("falaProfessor3-1");
            //this.someNos();
        }
    },
    
    colocaPacotesCorretos: function(){
        if(this.roteamentos === 0){
            this.pacoteACorreto.setPosition(-107, -58);
            this.branco = 1;
            this.pacoteBCorreto.setPosition(-12, -58);
            this.azul = 2;
            this.pacoteCCorreto.setPosition(75, -58);
            this.verde = 3;
        } else if(this.roteamentos == 1){
            this.pacoteCCorreto.setPosition(-107, -58);
            this.verde = 1;
            this.pacoteACorreto.setPosition(-12, -58);
            this.branco = 2;
            this.pacoteBCorreto.setPosition(75, -58);
            this.azul = 3;
        } else if(this.roteamentos == 2){
            this.pacoteACorreto.setPosition(-107, -58);
            this.branco = 1;
            this.pacoteCCorreto.setPosition(-12, -58);
            this.verde = 2;
            this.pacoteBCorreto.setPosition(75, -58);
            this.azul = 3;
        } else if(this.roteamentos == 3){
            this.pacoteACorreto.setPosition(-107, -58);
            this.branco = 1;
            this.pacoteCCorreto.setPosition(-12, -58);
            this.verde = 2;
            this.pacoteBCorreto.setPosition(75, -58);
            this.azul = 3;
        } else if(this.roteamentos === 4){
            this.pacoteACorreto.setPosition(-107, -58);
            this.branco = 1;
            this.pacoteBCorreto.setPosition(-12, -58);
            this.azul = 2;
            this.pacoteCCorreto.setPosition(75, -58);
            this.verde = 3;
        }
    },
    
    veriicaOrdem: function(){
        if(this.button1 == this.branco && this.button2 == this.azul && 
        this.button3 == this.verde){
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
        } else if(this.button1 === 0 || this.button2 === 0 || 
        this.button3 === 0){
            
        } else if(this.button1 != this.branco || this.button2 != this.azul || 
        this.button3 != this.verde) {
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
    
    btnButton: function(){
        if(this.button2 === 0 && this.button3 === 0){
            this.button1 = 1;
            this.pacoteA.setPosition(-139, -150);
            this.veriicaOrdem();
        } else if(this.button2 == 0 && this.button3 == 1){
            this.button1 = 2;
            this.pacoteA.setPosition(12, -150);
            this.veriicaOrdem();
        } else if(this.button2 == 1 && this.button3 == 0){
            this.button1 = 2;
            this.pacoteA.setPosition(12, -150);
            this.veriicaOrdem();
        } else if(this.button2 == 2 && this.button3 == 1){
            this.button1 = 3;
            this.pacoteA.setPosition(163, -150);
            this.veriicaOrdem();
        } else if(this.button2 == 1 && this.button3 == 2){
            this.button1 = 3;
            this.pacoteA.setPosition(163, -150);
            this.veriicaOrdem();
        } 
    },
    
    btnButton2: function(){
        if(this.button1 === 0 && this.button3 === 0){
            this.button2 = 1;
            this.pacoteB.setPosition(-139, -150);
            this.veriicaOrdem();
        } else if(this.button1 == 0 && this.button3 == 1){
            this.button2 = 2;
            this.pacoteB.setPosition(12, -150);
            this.veriicaOrdem();
        } else if(this.button1 == 1 && this.button3 == 0){
            this.button2 = 2;
            this.pacoteB.setPosition(12, -150);
            this.veriicaOrdem();
        } else if(this.button1 == 2 && this.button3 == 1){
            this.button2 = 3;
            this.pacoteB.setPosition(163, -150);
            this.veriicaOrdem();
        } else if(this.button1 == 1 && this.button3 == 2){
            this.button2 = 3;
            this.pacoteB.setPosition(163, -150);
            this.veriicaOrdem();
        }
    },
    
    btnButton3: function(){
        if(this.button1 === 0 && this.button2 === 0){
            this.button3 = 1;
            this.pacoteC.setPosition(-139, -150);
            this.veriicaOrdem();
        } else if(this.button1 == 0 && this.button2 == 1){
            this.button3 = 2;
            this.pacoteC.setPosition(12, -150);
            this.veriicaOrdem();
        } else if(this.button1 == 1 && this.button2 == 0){
            this.button3 = 2;
            this.pacoteC.setPosition(12, -150);
            this.veriicaOrdem();
        } else if(this.button1 == 2 && this.button2 == 1){
            this.button3 = 3;
            this.pacoteC.setPosition(163, -150);
            this.veriicaOrdem();
        } else if(this.button1 == 1 && this.button2 == 2){
            this.button3 = 3;
            this.pacoteC.setPosition(163, -150);
            this.veriicaOrdem();
        }
    },
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
        this.colocaPacotesCorretos();
        
        this.gameOver();
        
        if(this.roteamentos === 0){
            this.aparecePacotes1();
        } else if(this.roteamentos == 1){
            this.aparecePacotes2();
        } else if(this.roteamentos == 2){
            this.aparecePacotes3();
        } else if(this.roteamentos == 3){
            this.aparecePacotes4();
        } else if(this.roteamentos == 4){
            this.aparecePacotes5();
        }
        
        this.LblAcertos.string = "Acertos: " + this.acertos;
        this.LblErros.string = "Erros: " + this.erros;
    },
});