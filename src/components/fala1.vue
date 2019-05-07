<template>
<body id="cor">
  <div id="caixa1">
    <div id="alocar1">
      <h5>Tenho 9 anos, nasci na cidade de Rio Tinto, na Universidade Federal da Paraíba do campus IV.</h5>
      <router-link to="/fala2"><b-button>Seguinte</b-button></router-link>
    </div>
  </div>
</body>
</template>

<script>

</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 300px;
  height: 300px;
}

.borda {
  border: 10px solid black;
  border-radius: 30px;
  padding: 3%;
}

input {
  border: solid 1px solid;
  border-radius: 15px;
  height: 20px;
  display: block;
}

#input-small {
  border: 3px solid;
  border-radius: 30px;
}

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
</style>