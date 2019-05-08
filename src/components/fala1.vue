<template>
<body id="cor">
  <b-container class="bv-example-row">
    <b-row>
      <div id="en">
          <div id="caixa1">
            <div id="alocar1">
              <h5>Tenho 9 anos, nasci na cidade de Rio Tinto, na Universidade Federal da Paraíba do campus IV.</h5>
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
  width: 150px;
  height: 200px;
  background: url(img/enzo.png);
  background-size: 980px;
  animation: run 1100ms steps(4);
  padding-top: 280px;
  padding-right: 20px;
  padding-left: 200px;
}
@keyframes run {
  100% { background-position: -17650px; }
}
#en{
  padding-left: 200px;
}
#in{
  padding-top: 250px;
}
</style>