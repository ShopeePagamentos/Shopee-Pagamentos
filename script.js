<button id="btnOk">OK</button>

<div id="loadingScreen" class="loading-screen">
    <div class="loader"></div>
    <p>Aguardando pagamento...</p>
</div>

<style>
.loading-screen{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(255,255,255,0.98);
    display:none;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    z-index:99999;
    font-family:Arial,sans-serif;
}

.loader{
    width:55px;
    height:55px;
    border:5px solid #e5e5e5;
    border-top:5px solid #00a650;
    border-radius:50%;
    animation:spin 1s linear infinite;
    margin-bottom:18px;
}

@keyframes spin{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}

.loading-screen p{
    font-size:18px;
    font-weight:600;
    color:#333;
}
</style>

<script>
document.getElementById("btnOk").addEventListener("click", function(){

    // desativa botão
    this.disabled = true;

    // mostra carregamento
    document.getElementById("loadingScreen").style.display = "flex";

    // redireciona após 3 segundos
    setTimeout(function(){

        window.location.href = "aguardando.html";

    }, 3000);

});
</script>