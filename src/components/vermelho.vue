<template>
    <body class="cor_vermelha">
        <div id="caixa">
            <div id="alocar">
                <h5><font>Qual sentimento consegue sentir olhando esse cenário?</font> </h5>
                <router-link to=""><b-button>Seguinte</b-button></router-link>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#caixa {
border: 100px solid transparent;
border-image: url(img/caixinha.png) 95 stretch;
margin-right: 65%;
position: absolute;
}
#alocar{
  position: relative;
  top: -30px;
}
body{
    background-color: red;
}
h5{
    font-family: "Comic Sans MS";
}
</style>






