<template>
    <div id="formComponent">
        <h1>formComponent组件</h1>

        <mt-button type="primary" @click="toCssCom">去css组件</mt-button>
        <mt-button type="primary" @click="toHome">去toHome</mt-button><br>
        <h1>开关switch</h1>
            <mt-switch v-model="value1">{{value1}}</mt-switch>
            <mt-switch v-model="value2">开关{{value2}}</mt-switch>
        <h1>复选框列表Checklist</h1>
           <!--  <mt-checklist
              title="复选框列表"
              v-model="value"
              :options="['选项A', '选项B', '选项C']">
            </mt-checklist>
            <p>您选中的是{{value}}</p> -->
        <!-- 设置禁用选项 -->      
        <mt-checklist v-model="value" :options="options"></mt-checklist>
        <!--设置最大可选数 -->
      <!--   <mt-checklist :max="2"  v-model="value" :options="options"></mt-checklist> -->
        <!-- 选择框右对齐 -->
        <!-- <mt-checklist align="right" title="右对齐" v-model="value" :options="options"></mt-checklist> -->
        <h1>radio</h1>
        <mt-radio
          title="单选框列表"
          v-model="radiovalue"

          :options="['选项A', '选项B', '选项C']">
        </mt-radio>
        <!-- 择框右对齐 -->
        <h1>Field 表单编辑器</h1>
        <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
        <mt-field label="网站" placeholder="请输入网址" type="url"></mt-field>
        <mt-field label="数字" placeholder="请输入数字" type="number"></mt-field>
        <mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
        <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>

        <mt-field label="邮箱" state="success"></mt-field>
        <mt-field label="邮箱" state="error"></mt-field>
        <mt-field label="邮箱" state="warning"></mt-field>

        <mt-field label="验证码">
            <img src="" height="45px" width="100px">
        </mt-field>
        <h1>徽章Badge</h1>
            <mt-badge size="small">30</mt-badge>
            <mt-badge size="normal">10</mt-badge>
            <mt-badge size="large">10</mt-badge>
            <mt-badge type="primary">30</mt-badge>
            <mt-badge type="error">10</mt-badge>
            <mt-badge type="success">10</mt-badge>
            <mt-badge type="warning">10</mt-badge>
            <mt-badge size="small" color="#888">自定义颜色</mt-badge>
    </div>  
</template>

<script>



export default {
    name: 'formComponent',
    data(){
        return{
            value1:true,
            value2:false,
            value:[],
            options:[
                 {
                    label: '被禁用',
                    value: '值F',
                    disabled: true
                  },
                  {
                    label: '选中禁用',
                    value: '选中禁用的值',
                    disabled: true
                  },
                  {
                    label: '选项A',
                    value: '值A'
                  },
                  {
                    label: '选项B',
                    value: '值B'
                  }
            ],
            radiovalue:"",
           
        }
    },
    methods:{
        toHome:function(){
            console.log(1);
            this.$router.push({path:"/"})
        },
        toCssCom:function(){
            this.$router.push({path:"/cssComponent"})
        }
    }
}
</script>

<style>

</style>
