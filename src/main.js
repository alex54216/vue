import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$dispatch = function(eventName,value){
  let parent = this.$parent;
  while(parent){
    parent.$emit(eventName,value)
    parent = parent.$parent
  }
}
// 向下触发
Vue.prototype.$broadcast = function(eventName,value){
  let childrenHandle = (children)=>{
    children.forEach(child=>{
      child.$emit(eventName,value)
      if(child.$children){
        childrenHandle(child.$children)
      }
    })
  }
  childrenHandle(this.$children)
}
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
