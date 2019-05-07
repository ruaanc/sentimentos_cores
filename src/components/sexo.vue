<template>
<body id="cor">
  <div id="caixa4">
    <div id="alocar4">
      <h5>Você é do sexo masculino ou feminino?</h5>
      <div>
        <b-form-group label="Escolha uma das opções: ">
            <b-form-radio v-model="selected" name="some-radios" value="masculino">Masculino</b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="feminino">Feminino</b-form-radio>
        </b-form-group>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      </div>
      <router-link to="/idade"><b-button>Seguinte</b-button></router-link>
    </div>
  </div>
</body>
</template>

<script>

  export default {
    data() {
      return {
        selected: ''
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

#caixa4 {
  border: 100px solid transparent;
  border-image: url(img/caixinha.png) 95 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar4{
  position: relative;
  top: -30px;
}

h5{
    font-family: "Comic Sans MS";
}
</style>