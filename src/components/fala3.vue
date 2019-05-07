<template>
<body id="cor">
  <div id="caixa3">
    <div id="alocar3">
      <h5>Agora eu quero conhecer mais sobre você.</h5>
      <div align="right"><router-link to="/sexo"><button class="small">Seguinte</button></router-link></div>
    </div>
  </div>
</body>
</template>

<script>

</script>

<style scoped>

#caixa3 {
  border: 100px solid transparent;
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 70%;
  position: absolute;
}

#alocar3{
  position: relative;
  top: -15px;
  left: -15px;
}

h5{
  font-family: "Comic Sans MS";
  font-size: medium;
  padding: 10px;
}
</style>