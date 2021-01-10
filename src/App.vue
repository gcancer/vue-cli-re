<template>
  <div> <!--  최상위 태그는 하나만 있어야 함 -->
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
     <app-header 
     v-bind:propsdata="str"
     v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'; // 가급적 .vue를 붙여줘야 바로가기가 깨지지 않고 제공됨

// var AppHeader = {
//   template: '<header><h1>Header</h1></header>'
// }
// new Vue({
//   data: {
//     str: 'hi' 과 같은 표현
//   }
// })
export default {
  data: function(){
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods:{
    renewStr: function(){
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>