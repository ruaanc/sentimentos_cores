<template>
        <div id="caixa">
            <div id="alocar">
                <h5>Agora, iremos tentar expressar o que sentimos com as cores que iremos ver.</h5>
                <a href="/vermelho.html"><b-button>Seguinte</b-button></a>
            </div>
        </div>  
</template>
<script>
export default {
    
}
</script>

<style scoped>
#caixa {
  border: 100px solid transparent;
  border-image: url(img/caixinha.png) 95 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar{
  position: relative;
  top: -30px;
}

h5{
    font-family: "Comic Sans MS";
}
</style>


