<template>
        <div id="caixa">
            <div id="alocar">
                <h5>Agora, iremos tentar expressar o que sentimos com as cores que iremos ver.</h5>
                <div align="right"><a href="/vermelho.html"><button class="small">Seguinte</button></a></div>            
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
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar{
  position: relative;
  top: -10px;
  left: -15px;
}

h5{
  font-family: "Comic Sans MS";
  font-size: medium;
  padding: 10px;
}
</style>


