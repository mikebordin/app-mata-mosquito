        //DEFININDO ÁREA ÚTIL DO JOGO

        var altura = 0
        var largura = 0
        var vidas = 1 
        var tempo = 15

        var criaMosquitoTempo = 1500

        var nivel = window.location.search
        nivel = nivel.replace('?','')

        if(nivel === 'normal'){
            //1500
            criaMosquitoTempo = 1500
        }else if(nivel ==='dificil'){
            //1000
            criaMosquitoTempo = 1000
        }else if(nivel ==='chucknorris'){
            //750
            criaMosquitoTempo = 750
        }

        function ajustaTamanhoPalcoJogo(){
            altura = window.innerHeight
            largura = window.innerWidth
            console.log(altura,largura)
        }
        ajustaTamanhoPalcoJogo()
    
        var cronometro = setInterval(function(){

            tempo -= 1

            if(tempo < 0){
                clearInterval(cronometro)
                clearInterval(criaMosca)
                window.location.href = 'vitoria.html'
            }else{
                document.getElementById('cronometro').innerHTML = tempo
            }
        },1000)   

        function posicaoRandomica(){

            //remover mosquito anterior(caso exista) - testar com IF
            if(document.getElementById('mosquito')){
                document.getElementById('mosquito').remove()
                if(vidas > 3){
                    window.location.href = 'fimDeJogo.html'

                }else{                
                    //SERVE PARA DIMINUIR AS VIDAS
                    //concatenando v + variável vidas declarada no início
                    console.log('elemento selecionado: v'+vidas)
                    document.getElementById('v'+vidas).src="img/coracao_vazio.png"
                    vidas++
                }
            }

            /*
            Definir variáveis para eixo x e y
            Math.floor = arrendonda número para baixo
            Math.random = escolhe um número randômico 
            no intervalo altura e largura
            */
            var posicaoX = Math.floor(Math.random() * largura) - 50
            var posicaoY = Math.floor(Math.random()* altura) - 50

            /*
            operador ternário caso a posição seja menor que 0,
            pois caso seja 0, menos 90, ela sairia da página.
            */
            posicaoX = posicaoX < 0 ? 0 : posicaoX
            posicaoY = posicaoY < 0 ? 0 : posicaoY
            console.log(posicaoX,posicaoY)

            //criar elemento HTML
            var mosquito = document.createElement('img')
            mosquito.src = 'img/mosquito.png'
            mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
            mosquito.style.left = posicaoX + 'px'
            mosquito.style.top = posicaoY + 'px'
            mosquito.style.position = 'absolute'
            mosquito.id = 'mosquito'
            mosquito.onclick = function(){
                this.remove()
            }

            //adiciona elemento filho = appendChild
            document.body.appendChild(mosquito)
            console.log(tamanhoAleatorio())
            console.log(ladoAleatorio())

        }
        //tamanho do mosquito aleatório 
        function tamanhoAleatorio(){
            var classe = Math.floor(Math.random() * 3)
            /*
            valores entre 0 e 2, identificando o mosquito
            e aplicando o estilo de acordo
            */
            switch(classe){
                case 0: 
                    return 'mosquito1'
                case 1: 
                    return 'mosquito2'
                case 2: 
                    return 'mosquito3'
            }
        }
        /* 
        mudar lado do mosquito 
        tamanho entre 0 e 1, 
        aplicando o estilo de acordo 
        */
        function ladoAleatorio(){
            var classe = Math.floor(Math.random() * 2)

            switch(classe){
                case 0: 
                    return 'ladoA'
                case 1: 
                    return 'ladoB'
            }
        }
       