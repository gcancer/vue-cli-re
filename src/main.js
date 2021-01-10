import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 위와 아래의 역할은 같다
// var App ={
//   template : '<div>app</div>'
// }
new Vue({
  render: h => h(App), //render: Vue 내부함수 (template이라는 속성을 정의했을 때 render 함수가 실행된다)
  // components: {
  //   'app': App
  // } //같은 내용
}).$mount('#app')


// new Vue({
//   el : '#app',
//   render: h => h(App), // render : App 이라는 싱글 컴포넌트를 불러와서 집어넣고 render를 했다.
// })

