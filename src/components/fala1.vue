<template>
<body id="cor">
  <div id="caixa1">
    <div id="alocar1">
      <h5>Tenho 9 anos, nasci na cidade de Rio Tinto, na Universidade Federal da Paraíba do campus IV.</h5>
      <router-link to="/fala2"><button>Seguinte</button></router-link>
    </div>
  </div>
</body>
</template>

<script>

</script>

<style scoped>
#caixa1 {
  border: 100px solid transparent;
  border-image: url(img/caixinha.png) 95 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar1{
  position: relative;
  top: -30px;
}
h5{
  font-size: medium;
}
</style>