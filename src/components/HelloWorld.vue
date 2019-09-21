<template>
    <div>
      <div>
        parent:{{mony}}
        <button @click="hhh">hhh</button>
      </div>
      <!-- <son1 :daMon="mony" @input="change"></son1> -->
      <son1 v-model='mony' :zlcastle="hhh" @zl="zlcashandle"></son1>
    </div>
</template>

<script>
import son1 from '@/components/son1.vue';
export default {
  name: 'HelloWorld',
  provide(){
    return {
      paren:this
    }
  },
  data(){
    return {
      mony:1000,
      hhh:'hhhh'
    }
  },
  methods:{
    change(val){
      this.mony = val;
    },
    zlcashandle(){
      console.log('我是父组件直接给孙子的')
    },
    hhh(){
       this.$broadcast('say','hhhh')
    }
  },
  components:{
    son1
  },
  mounted(){
    this.$nextTick(()=>{
      this.$bus.$emit('onzlcastle','mmm')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
