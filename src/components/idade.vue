<template>
<body id="cor">
  <div id="caixa5">
    <div id="alocar5">
      <h5>Qual sua idade?</h5>
        <div>
            <b-form-input v-model="text" placeholder="Digite"></b-form-input>
            <div class="mt-2">Value: {{ text }}</div>
        </div>
      <br>
      <router-link to="/cor_preferida"><b-button>Seguinte</b-button></router-link>
    </div>
  </div>
</body>
</template>

<script>

  export default {
    data() {
      return {
        text: ''
      }
    }
  }

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

#input-small {
  border: 3px solid;
  border-radius: 30px;
}

#caixa5 {
  border: 100px solid transparent;
  border-image: url(img/caixinha.png) 95 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar5{
  position: relative;
  top: -30px;
}

h5{
    font-family: "Comic Sans MS";
}
</style>