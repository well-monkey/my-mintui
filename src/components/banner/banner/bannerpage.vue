<template>
  <div>
    <div class="bannercom">
       {{msg}}
    </div>
    
  </div>
</template>

<script>

export default {
  name:'bannercom',
  components: {

  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods:{
    tohelloPage:function(){
      this.$router.push({path:"/hello"})
    }
  }
}
</script>

<style>

</style>
