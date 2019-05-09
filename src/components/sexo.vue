<template>
<body id="cor">
 <b-container class="bv-example-row">
  <b-row>
  <div id="en">
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
  </div>
  </b-row>
 </b-container> 
 <b-container class="bv-example-row">
  <b-row>
    <div id="in"><b-col><div class="runner"></div></b-col></div>
  </b-row>
 </b-container>
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
  margin-right: 500px;
  position: absolute;
}

#alocar4{
  position: relative;
  top: -5px;
  left: -15px;
}

h5{
  font-family: "Comic Sans MS";
  font-size: medium;
  padding: 5px;
  margin-left: - 10px;
}
.runner{
  width: 200px;
  height: 330px;
  background: url(img/1.png);
  background-size: 200px;
  animation-name: run;
  animation-duration: 700ms;
  animation-iteration-count: 2;
}
@keyframes run {
  0% {
    background: url(img/2.png);
    background-size: 200px;
    }
  25% {
    background: url(img/3.png);
    background-size: 200px;
    }
  50%  {
    background: url(img/4.png);
    background-size: 200px;
    }
  100% {
    background: url(img/5.png);
    background-size: 200px;
    }
  
}
#en{
  padding-left: 200px;
}
#in{
  padding-top: 250px;
}
</style>