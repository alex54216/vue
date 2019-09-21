<template>
    <div>
        孙子：{{value}}
        <button @click="change">改变数据</button>
        爷传孙：{{$attrs}}
        inject:{{this.paren.hhh}}
    </div>
</template>

<script>
    export default {
        props:['value'],
        inject:['paren'],
       methods: {
           change() {
            this.$dispatch('input',500) 
           },

       }, 
       mounted(){
           this.$listeners.zl()
           this.$bus.$on('onzlcastle',function(val){
               console.log(val)
           })
       }
    }
</script>

<style lang="less" scoped>

</style>