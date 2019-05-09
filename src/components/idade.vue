<template>
<body id="cor">
  <b-container class="bv-example-row">
  <b-row>
   <div id="en">
    <div id="caixa5">
     <div id="alocar5">
      <h5>Qual sua idade?</h5>
        <h5>
          <b-form-group label="Escolha uma das opções: ">
           <div id="7"><b-form-radio v-model="selected" name="some-radios" value="vermelhor"><font color="">7 anos</font></b-form-radio></div>
           <div id="8"><b-form-radio v-model="selected" name="some-radios" value="verde"><font color="">8 anos</font></b-form-radio></div>
           <div id="9"><b-form-radio v-model="selected" name="some-radios" value="azul"><font color="">9 anos</font></b-form-radio></div>
           <div id="10"><b-form-radio v-model="selected" name="some-radios" value="azul"><font color="">10 anos</font></b-form-radio></div>
           <div id="11"><b-form-radio v-model="selected" name="some-radios" value="azul"><font color="">11 anos</font></b-form-radio></div>
           <div id="12"><b-form-radio v-model="selected" name="some-radios" value="azul"><font color="">12 anos</font></b-form-radio></div>
          </b-form-group>
        </h5>
      <div align="right"><router-link to="/cor_preferida"><button class="small">Seguinte</button></router-link></div>
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

#caixa5 {
  border: 100px solid transparent;
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 500px;
  position: absolute;
}

#alocar5{
  position: relative;
  top: -5px;
  left: -15px;
}

h5{
  font-family: "Comic Sans MS";
  font-size: medium;
  padding: 10px;
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
  padding-top: 330px;
}
</style>