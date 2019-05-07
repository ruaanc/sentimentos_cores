<template>
<body id="cor">
  <div id="caixa2">
    <div id="alocar2">
      <h5>Eu gosto muito das cores, porque elas conseguem transmitir sentimentos.</h5>
      <div align="right"><router-link to="/fala3"><button class="small">Seguinte</button></router-link></div>
    </div>
  </div>
</body>
</template>

<script>

</script>

<style scoped>
#caixa2 {
  border: 100px solid transparent;
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar2{
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