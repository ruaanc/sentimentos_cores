<template>
  <div id="caixa">
    <div id="alocar">
      <h5>Olá, O meu nome é Enzo!</h5>
      <router-link to="/fala1"><button>Seguinte</button></router-link>
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
  border-image: url(img/caixinha.png) 95 stretch;
  margin-right: 75%;
  position: absolute;
}

#alocar{
  position: relative;
  top: -30px;
}
h5{
    font-family: "Comic Sans MS";
    font-size: medium;
}
</style>