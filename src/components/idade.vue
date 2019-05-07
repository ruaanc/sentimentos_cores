<template>
<body id="cor">
  <div id="caixa5">
    <div id="alocar5">
      <h5>Qual sua idade?</h5>
        <h5>
            <b-form-input v-model="text" placeholder="Digite"></b-form-input>
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
        text: ''
      }
    }
  }

</script>

<style scoped>

#caixa5 {
  border: 100px solid transparent;
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar5{
  position: relative;
  top: -15px;
  left: -15px;
}

h5{
  font-family: "Comic Sans MS";
  font-size: medium;
  padding: 10px;
  margin-left: - 10px;
}
</style>