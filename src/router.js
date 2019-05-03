import Vue from 'vue'
import Router from 'vue-router'
import BoasVindas from './components/BoasVindas.vue'
import fala1 from './components/fala1.vue'
import fala2 from './components/fala2.vue'
import fala3 from './components/fala3.vue'
import sexo from './components/sexo.vue'
import idade from './components/idade.vue'
import cor_preferida from './components/Cor_preferida.vue'
import aviso from './components/aviso.vue'
import vermelho from './components/vermelho.vue'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: BoasVindas
    },{
        path: '/fala1',
        component: fala1
    },{
        path: '/fala2',
        component: fala2
    },{
        path: '/fala3',
        component: fala3
    },{
        path: '/sexo',
        component: sexo
    },{
        path: '/idade',
        component: idade
    },{
        path: '/cor_preferida',
        component: cor_preferida
    },{
        path: '/aviso',
        component: aviso
    },{
        path: '/vermelho',
        component: vermelho
    }]
})