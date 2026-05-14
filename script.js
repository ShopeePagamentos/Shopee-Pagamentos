function finalizar(){

    // cria tela de carregamento
    let tela = document.createElement("div");

    tela.innerHTML = `
        <div class="loader"></div>
        <p>Aguardando pagamento...</p>
    `;

    tela.style.position = "fixed";
    tela.style.top = "0";
    tela.style.left = "0";
    tela.style.width = "100%";
    tela.style.height = "100%";
    tela.style.background = "#ffffff";
    tela.style.display = "flex";
    tela.style.flexDirection = "column";
    tela.style.justifyContent = "center";
    tela.style.alignItems = "center";
    tela.style.zIndex = "999999";

    // loading
    let style = document.createElement("style");

    style.innerHTML = `
        .loader{
            width:55px;
            height:55px;
            border:5px solid #f1f1f1;
            border-top:5px solid #ff7a00;
            border-radius:50%;
            animation:girar 1s linear infinite;
            margin-bottom:18px;
        }

        @keyframes girar{
            100%{
                transform:rotate(360deg);
            }
        }

        .loader + p{
            color:#000;
            font-size:18px;
            font-weight:600;
            font-family:Arial,sans-serif;
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(tela);

}