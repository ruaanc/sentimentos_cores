<template>
<body id="cor">
  <b-container class="bv-example-row">
    <b-row>
      <div id="en">
          <div id="caixa1">
            <div id="alocar1">
              <h5>Tenho 9 anos, nasci na cidade de Rio Tinto, na Universidade Federal da Paraíba - Campus IV.</h5>
              <div align="right"><router-link to="/fala2"><button class="small">Seguinte</button></router-link></div>
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

</script>

<style scoped>
#caixa1 {
  border: 100px solid transparent;
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 500px;
  position: absolute;
}

#alocar1{
  position: relative;
  top: -15px;
  left: -15px;
}
h5{
  font-family: "Comic Sans MS";
  font-size: medium;
  padding: 10px;
}
.runner{
  width: 200px;
  height: 330px;
  background: url(img/1.png);
  background-size: 200px;
  animation-name: run;
  animation-duration: 700ms;
  animation-iteration-count: 7;
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