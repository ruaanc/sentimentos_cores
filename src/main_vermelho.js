import Vue from "vue";
import Vermelho from "./components/vermelho.vue";
import router from "./router";


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Vermelho)
}).$mount("#vermelho");