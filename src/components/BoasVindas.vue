<template>
<div id="esquerda">
  <div id="caixa">
    <div id="alocar">
      <div id="direita">
        <h5>Olá, O meu nome é Enzo!</h5>
        <div align="right"><router-link to="/fala1"><button class="small">Seguinte</button></router-link></div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
/* eslint-disable */

export default {

};
</script>

<style scoped>
#caixa {
  border: 100px solid transparent;
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 70%;
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