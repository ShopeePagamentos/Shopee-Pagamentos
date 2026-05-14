function finalizar(){

    // evita criar duplicado
    if(document.getElementById("overlayPagamento")) return;

    // overlay
    const overlay = document.createElement("div");
    overlay.id = "overlayPagamento";

    overlay.innerHTML = `
        <div class="boxLoading">
            <div class="spinnerLoading"></div>
            <p>Aguardando pagamento...</p>
        </div>
    `;

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "#ffffff";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "999999";

    // estilos isolados
    const style = document.createElement("style");

    style.innerHTML = `
        .boxLoading{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
        }

        .spinnerLoading{
            width:55px;
            height:55px;
            border:5px solid #f1f1f1;
            border-top:5px solid #ee4d2d;
            border-radius:50%;
            animation:spinPagamento 1s linear infinite;
            margin-bottom:18px;
        }

        .boxLoading p{
            color:#000;
            font-size:18px;
            font-weight:600;
            font-family:Arial,sans-serif;
            margin:0;
        }

        @keyframes spinPagamento{
            100%{
                transform:rotate(360deg);
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(overlay);

}