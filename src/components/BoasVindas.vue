<template>
<body id="boas">
  <div id="caixa">
    <div id="alocar">
      <h5>Olá, O meu nome é Enzo!</h5>
      <router-link to="/fala1"><b-button>Seguinte</b-button></router-link>
    </div>
  </div>
</body>
</template>

<script>
/* eslint-disable */

export default {

};
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
body {
  background-color: white;
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
}
</style>