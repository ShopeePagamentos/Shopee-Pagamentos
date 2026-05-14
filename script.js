let codigo="00020101021226790014br.gov.bcb.pix2557qrcode.mwbank.com.br/cob/2a0f8edc60384cbfa5193570b8c58bfa5204000053039865802BR5921P D S TECHNOLOGY LTDA6009SAO PAULO62070503***630493A5";

async function carregar(){
    let r=await fetch("dados.json");
    let d=await r.json();

    pedido.innerText=d.pedido;
    vendido.innerText=d.vendido;
    produto.innerText=d.produto;
    subtotal.innerText="R$ "+d.valor;
    total.innerText="R$ "+d.valor;

    codigo=d.pix;

    qrCode.src="https://quickchart.io/qr?size=180&text="+encodeURIComponent(codigo);
}

function copiarPix(){
    navigator.clipboard.writeText(codigo);

    let botao=document.getElementById("botaoPix");

    botao.classList.add("copiado");
    botao.innerText="Código copiado";

    setTimeout(()=>{
        botao.classList.remove("copiado");
        botao.innerText="Copiar Código Pix";
    },2000);
}

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