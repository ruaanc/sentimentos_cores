<template>
<body id="cor">
  <div id="caixa4">
    <div id="alocar4">
      <h5>Você é do sexo masculino ou feminino?</h5>
        <h5>
          <b-form-group label="Escolha uma das opções: ">
            <b-form-radio v-model="selected" name="some-radios" value="masculino">Masculino</b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="feminino">Feminino</b-form-radio>
          </b-form-group>
        </h5>     
      <div align="right"><router-link to="/idade"><button class="small">Seguinte</button></router-link></div>
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

#caixa4 {
  border: 100px solid transparent;
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar4{
  position: relative;
  top: -15px;
  left: -15px;
}

h5{
  font-family: "Comic Sans MS";
  font-size: medium;
  padding: 5px;
  margin-left: - 10px;
}
</style>