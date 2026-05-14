<div id="loading" class="loading">
  <div class="spinner"></div>
  <p>Processando pagamento...</p>
</div>

<style>
.loading{
  position:fixed;
  inset:0;
  background:#fff;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-family:Arial;
}

.spinner{
  width:50px;
  height:50px;
  border:5px solid #eee;
  border-top:5px solid orange;
  border-radius:50%;
  animation:spin 1s linear infinite;
}

@keyframes spin{
  to{transform:rotate(360deg);}
}
</style>