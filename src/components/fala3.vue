<template>
<body id="cor">
  <div id="caixa3">
    <div id="alocar3">
      <h5>Agora eu quero conhecer mais sobre você.</h5>
      <router-link to="/sexo"><b-button>Seguinte</b-button></router-link>
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

#caixa3 {
  border: 100px solid transparent;
  border-image: url(img/caixinha.png) 95 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar3{
  position: relative;
  top: -30px;
}

h5{
    font-family: "Comic Sans MS";
}
</style>