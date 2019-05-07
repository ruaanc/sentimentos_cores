<template>
<body id="cor">
  <div id="caixa1">
    <div id="alocar1">
      <h5>Tenho 9 anos, nasci na cidade de Rio Tinto, na Universidade Federal da Paraíba do campus IV.</h5>
      <div align="right"><router-link to="/fala2"><button class="small">Seguinte</button></router-link></div>
    </div>
  </div>
</body>
</template>

<script>

</script>

<style scoped>
#caixa1 {
  border: 100px solid transparent;
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar1{
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