<template>
<body id="cor">
  <div id="caixa2">
    <div id="alocar2">
      <h5>Eu gosto muito das cores, porque elas conseguem transmitir sentimentos.</h5>
      <router-link to="/fala3"><button>Seguinte</button></router-link>
    </div>
  </div>
</body>
</template>

<script>

</script>

<style scoped>
#caixa2 {
  border: 100px solid transparent;
  border-image: url(img/caixinha.png) 95 stretch;
  margin-right: 70%;
  position: absolute;
}

#alocar2{
  position: relative;
  top: -30px;
}

h5{
    font-family: "Comic Sans MS";
    font-size: medium;
}
</style>