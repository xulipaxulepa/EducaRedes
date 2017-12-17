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
        
        gameAudio: {
            default: null,
            url: cc.AudioClip
        },
        
        contador: 0
    },
    
    mudaTexto: function(){
        var texto = this.label.getComponent(cc.Animation);
        var professor = this.professor.getComponent(cc.Animation);
        var face = this.face.getComponent(cc.Animation);
        if(this.contador === 0){
            texto.playAdditive('ApareceTexto');
            professor.play("moveProfessor");
            face.play("falaProfessor3-2");
            this.label.string = 'A finalidade dessa camada é permitir que\n'+ 
            'as entidades pares dos hosts de origem e de destino\n'+
            'mantenham uma conversação';
            this.contador += 1;
        } else if(this.contador == 1){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.label.string = 'Dois protocolos fim a fim foram definidos aqui.\n'+
            'O primeiro deles, o TCP(Transmission Control Protocol\n'+
            '— protocolo de controle de transmissão)';
            this.contador += 1;
        } else if(this.contador == 2){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-1");
            this.label.string = 'Um protocolo orientado a conexões confiável\n'+
            'que permite a entrega sem erros de um fluxo de bytes\n'+
            'originário de uma determinada\n'+
            'máquina em qualquer computador';
            this.contador += 1;
        } else if(this.contador == 3){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-2");
            this.label.string = 'Esse protocolo fragmenta o fluxo de bytes de entrada\n'+
            'em mensagens discretas. No destino, o processo TCP receptor\n'+
            'volta a montar as mensagens recebidas no fluxo de saída.';
            this.contador += 1;
        } else if(this.contador == 4){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.label.string = 'O outro protocolo é o UDP(User Datagram Protocol)\n'+ 
            'O UDP permite que a aplicação\n envie um datagrama encapsulado\n'+
            'num pacote IPv4 ou IPv6, e então enviado ao destino.';
            this.contador += 1;
        } else if(this.contador == 5){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.label.string = 'a mensagem viaja entre vários nós\n'+
            'até chegar em seu destino. \n';
            this.contador += 1;
        } else if(this.contador == 6){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.label.string = 'Mas não há qualquer tipo de garantia\n'+
            'que o pacote irá chegar ou não \n'+
            'O protocolo UDP não é confiável.'; 
            this.contador += 1;
        } else if(this.contador == 7){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.label.string = 'O UDP é um serviço sem conexão\n'+
            'pois não há necessidade de manter\n'+
            'um relacionamento longo entre cliente e o servidor.';
            this.contador += 1;
        } else if(this.contador == 8){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.label.string = 'No entanto, focaremos apenas no TCP\n'+
            'que é o principal protocolo e \n'+
            'o mais utilizado pelas aplicações.';
            this.contador += 1;
        } else if(this.contador == 9){
            texto.playAdditive('ApareceTexto');
            professor.play("animaProfessor");
            face.play("falaProfessor3-3");
            this.label.string = 'O próximo minijogo demonstra como\n'+ 
            'a mensagem viaja entre vários nós\n'+
            ' até chegar em seu destino';
            this.contador += 1;
        }else if(this.contador == 10){
            cc.director.loadScene("jogoFase3");
        } 
    },

    // use this for initialization
    onLoad: function () {
        cc.audioEngine.play(this.gameAudio, true, 0.2);
        this.contador = 0;
        var face = this.face.getComponent(cc.Animation);
        face.play("falaProfessor3-1");
        var professor = this.professor.getComponent(cc.Animation);
        professor.play("Aparece");
        var texto = this.label.getComponent(cc.Animation);
        texto.playAdditive('ApareceTexto');
        this.label.string = 'Olá, eu sou o professor Portty!\n'+
        'Eu vou te ensinar sobre a camada Transporte';
    },
    
    onDestroy: function () {
        cc.audioEngine.pauseAll();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
