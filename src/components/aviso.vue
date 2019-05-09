<template>
  <body>
    <b-container class="bv-example-row">
     <b-row>
      <div id="en">
        <div id="caixa">
          <div id="alocar">
            <h5>Agora, iremos tentar expressar o que sentimos com as cores que iremos ver.</h5>
            <div align="right"><a href="/vermelho.html"><button class="small">Seguinte</button></a></div>            
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
    
}
</script>

<style scoped>
#caixa {
  border: 100px solid transparent;
  border-image: url(img/balao1.png) 250 stretch;
  margin-right: 500px;
  position: absolute;
}

#alocar{
  position: relative;
  top: -10px;
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
  padding-top: 200px;
}
</style>


