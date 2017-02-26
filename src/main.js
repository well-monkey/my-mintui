// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './page/index.vue'
import formComponent from './page/formComponent.vue'
import cssComponent from './page/cssComponent.vue'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint);
Vue.$messagebox = Vue.prototype.$messagebox = Mint.MessageBox
Vue.$toast = Vue.prototype.$toast = Mint.Toast
Vue.$indicator = Vue.prototype.$indicator = Mint.Indicator
Vue.$loadmore = Vue.prototype.$loadmore = Mint.Loadmore
Vue.$actionsheet = Vue.prototype.$actionsheet = Mint.Actionsheet 
Vue.$picker = Vue.prototype.$picker = Mint.Picker 
Vue.$datetimepicker = Vue.prototype.$datetimepicker = Mint.DatetimePicker 
Vue.$indexlist = Vue.prototype.$indexlist = Mint.IndexList
//css
Vue.$header = Vue.prototype.$header = Mint.Header 
Vue.$tabbar = Vue.prototype.$tabbar = Mint.Tabbar 
Vue.$tabitem  = Vue.prototype.$tabitem  = Mint.TabItem
Vue.$cell  = Vue.prototype.$cell  = Mint.Cell  
Vue.$cellswipe  = Vue.prototype.$cellswipe  = Mint.CellSwipe
Vue.$spinner = Vue.prototype.$spinner  = Mint.Spinner   
Vue.$tabcontainer = Vue.prototype.$tabcontainer  = Mint.TabContainer 
Vue.$tabcontainerttem = Vue.prototype.$tabcontaineritem   = Mint.TabContainerItem  
Vue.$search = Vue.prototype.$search  = Mint.Search   
//form
Vue.$switch = Vue.prototype.$switch = Mint.Switch    
Vue.$checklist  = Vue.prototype.$checklist = Mint.Checklist     
Vue.$radio  = Vue.prototype.$radio  = Mint.Radio    
Vue.$field  = Vue.prototype.$field   = Mint.Field     
Vue.$badge  = Vue.prototype.$badge   = Mint.Badge 

const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",component:Index},
		{path:"/cssComponent",component:cssComponent},
		{path:"/formComponent",component:formComponent},
		{path:"*",component:Index}
	]
})
/* eslint-disable no-new */
var vm = new Vue({
  router,
  template: `
	<div>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
  `
}).$mount("#app")
