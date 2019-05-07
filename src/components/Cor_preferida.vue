<template>
<body id="boas">
  <div id="caixa6">
    <div id="alocar6">
      <h5>Qual sua cor preferida?</h5>
        <h5>
          <b-form-group label="Escolha uma das opções: ">
           <div id="vermelho"><b-form-radio v-model="selected" name="some-radios" value="vermelhor"><font color="white">Vermelho</font></b-form-radio></div>
           <div id="verde"><b-form-radio v-model="selected" name="some-radios" value="verde"><font color="white">Verde</font></b-form-radio></div>
           <div id="azul"><b-form-radio v-model="selected" name="some-radios" value="azul"><font color="white">Azul</font></b-form-radio></div>
          </b-form-group>
        </h5>
      <div align="right"><router-link to="/cor_preferida"><button class="small">Seguinte</button></router-link></div>
    </div>
  </div>
</body>
</template>

<script>
/* eslint-disable */

export default {
    data() {
      return {
        selected: ''
      }
    }
}
</script>

<style scoped>

#caixa6 {
  border: 100px solid transparent;
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 65%;
  position: absolute;
}

#alocar6{
  position: relative;
  top: -15px;
  left: -15px;
}

#vermelho{
    background-color: red;
    padding: 5px;
    padding-left: 10px;
    margin-bottom: 5px;
    border-radius: 20px
}

#verde{
    background-color: green;
    padding: 5px;
    padding-left: 10px;
    margin-bottom: 5px;
    border-radius: 20px
}

#azul{
    background-color: blue;
    padding: 5px;
    padding-left: 10px;
    margin-bottom: 5px;
    border-radius: 20px
}

h5{
  font-family: "Comic Sans MS";
  font-size: medium;
  padding: 5px;
  margin-left: - 10px;
}
</style>