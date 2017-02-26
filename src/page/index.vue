<template>
  <div id="index">
     <h3>路由</h3>
    
    <mt-button type="primary" @click="toCssCom">去css组件</mt-button>
    <mt-button type="primary" @click="toForm">去form页</mt-button><br>
    
    <h1>toast indicator messagebox</h1> 
    <button @click="toastClick">toast Click Me</button><br>
    <button @click="indicatorClick">indicator Click Me</button><br>
    <button @click="messageboxClick">messagebox Click Me</button><br>
    
    <h3>Action sheet操作表，从屏幕下方移入。</h3>
  
    
    <h3>日期时间选择器，支持自定义类型。</h3>
      

    <h3>Index List索引列表，可由右侧索引导航快速定位到相应的内容</h3>
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      ...
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>  
</template>

<script>

import Hello from '../components/hello'
import Loadmore from '../components/loadmore'

export default {
  name: 'index',
  data(){
    return{
        pickerValue:""
    }
  },
  components: {
    Hello,Loadmore
  },
  methods:{
    toCssCom:function(){
        this.$router.push({path:"/cssComponent"})
    },
    toForm:function(){
        this.$router.push({path:"/formComponent"})
    },
    toastClick:function(){
      this.$toast({                       //传入
        message: 'Upload Complete',
        position: 'bottom',
        duration: 5000
      });
    },
    indicatorClick:function(){
      this.$indicator.open();   //indicator 
    },
    messageboxClick:function(){
       this.$messagebox({      //message传入
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      });
    },
    openPicker:function() {
        this.$refs.picker.open();
    }


  }
 
}
</script>

<style>

</style>
