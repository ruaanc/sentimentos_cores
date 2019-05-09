<template>
<body id="boas">
 <b-container class="bv-example-row">
  <b-row>
  <div id="en">
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
      <div align="right"><router-link to="/aviso"><button class="small">Seguinte</button></router-link></div>
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
  margin-right: 500px;
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
.runner{
  width: 200px;
  height: 330px;
  background: url(img/1.png);
  background-size: 200px;
  animation-name: run;
  animation-duration: 700ms;
  animation-iteration-count: 1;
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
  padding-top: 300px;
}
</style>