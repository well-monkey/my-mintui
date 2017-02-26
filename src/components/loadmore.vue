<template>
    <div id="loadmore">
        <h5>loadmore 组件欢迎光临(不会待完善)</h5>

     
            <ul>
                <li v-for="item in list">{{ item }}</li>
            </ul>
   
    </div>
</template>
    
<script>



export default {
    name: 'loadmore',
    data(){
        return{
            list:[1,2,3,4,5,6,7,8,9],
            topStatus: ''
        }
    },
    methods:{
     
    }
 
}
</script>

<style>

</style>
