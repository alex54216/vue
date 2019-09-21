<template>
    <div>
        son:{{value}}
        <button @click="add">change</button>
        孙子：{{$attrs}}
        <grundson1 :value='value' @say='say' v-bind="$attrs" v-on="$listeners"></grundson1>
    </div>
</template>

<script>
import grundson1 from '@/components/grundson1.vue';
    export default {
       props:['value'],
       inheritAttr:false,
       components:{
           grundson1
       },
       methods:{
           add(){
               this.$emit('input',200)
           },
           say(){
               console.log('zlcastle')
           }
       } 
    }
</script>

<style lang="lass" scoped>

</style>