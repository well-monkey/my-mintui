<template>
    <div id="cssComponent">
        <h1>路由</h1>
         <mt-button type="primary" @click="toHome">去toHome</mt-button>
        <mt-button type="primary" @click="toForm">去form页</mt-button>
        <h1>按钮</h1>
            <mt-button type="default">default</mt-button>
            <mt-button type="primary">primary</mt-button>
            <mt-button type="danger">danger</mt-button>
            <mt-button size="small">small</mt-button>
            <mt-button size="large">large</mt-button>
            <mt-button size="normal">normal</mt-button>
            <mt-button disabled>禁用disabled</mt-button>
            <mt-button plain>幽灵plain</mt-button>
            <mt-button icon="back">back</mt-button>
            <mt-button icon="more">更多</mt-button>

        <h1>cell</h1>
            <mt-cell title="基础用法"></mt-cell>
            <mt-cell title="基础用法" value="说明文字"></mt-cell>
            <mt-cell
              title="可点击的链接"
              to="//github.com"
              is-link
              value="带链接">
            </mt-cell>
            <mt-cell title="带图标" icon="more" value="带 icon"></mt-cell>
            <mt-cell title="标题文字">
              <span>icon 是图片</span>
              <img slot="icon" src="" width="24" height="24">
            </mt-cell>
            <mt-cell title="自定义内容" is-link>
              <span style="color: green">这里是元素</span>
            </mt-cell>
            <mt-cell title="标题" label="描述信息" is-link></mt-cell>

        <h1>cellswipe</h1>
            <mt-cell-swipe
              title="标题文字"
              :right="[
                {
                  content: 'Delete',
                  style: { background: 'red', color: '#fff' },
                  handler: () => this.$messagebox('delete')
                }
              ]">
              </mt-cell-swipe>

        <h1>Spinner</h1>  
            <mt-spinner type="snake"></mt-spinner>
            <mt-spinner type="double-bounce"></mt-spinner>
            <mt-spinner type="triple-bounce"></mt-spinner>
            <mt-spinner type="fading-circle"></mt-spinner>
            <!-- 或者接受传入类型的序号 -->
            <mt-spinner :type="0"></mt-spinner>
            <mt-spinner :type="1"></mt-spinner>
            <mt-spinner :type="2"></mt-spinner>
            <mt-spinner :type="3"></mt-spinner>
            <mt-spinner color="#26a2ff"></mt-spinner>
            <mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
            <mt-spinner color="yellow"></mt-spinner>
            <mt-spinner :size="60" color="red" type="double-bounce"></mt-spinner>

        <h1>tabcontainer</h1>
            <mt-button type="default"  v-for='item in items' @click="activeShow(item)">tab{{item.num}}</mt-button>
 
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="tab-container1">
                    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container3">
                    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>   
        <h1>search ?和后台结合方法？请求ajax？</h1>    
           <!--  <mt-search
              v-model="value"
              cancel-text="取消"
              placeholder="搜索">
            </mt-search> -->
            <!--要暂时隐藏 否则会阻碍上面的点击事件-->
            <!-- <mt-search v-model="value">
              <mt-cell
                v-for="item in result"
                :title="item.title"
                :value="item.value">
              </mt-cell>
            </mt-search> -->


    </div>  
</template>

<script>



export default {
  name: 'cssComponent',
  data(){
    return{
        active:"tab-container1",
        items: [{
            content: 'tab-container1',
            num: 1
          }, {
            content: 'tab-container2',
            num: 2
          }, {
            content: 'tab-container3',
            num: 3
          }],
        value:"搜搜我",
        result:[{
            title:"title1",
            value:"value1"
        },{
            title:"title2",
            value:"value2"
        },{
            title:"title3",
            value:"value3"
        }
        ]
    }
  },
  methods:{
    toHome:function(){
        console.log(1);
        this.$router.push({path:"/"})
    },
    toForm:function(){
        this.$router.push({path:"/formComponent"})
    },
    activeShow:function(item){
        this.active = item.content
    }
  }
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
