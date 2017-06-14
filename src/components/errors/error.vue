<template>
  <div class="not-found" v-if="type === '404'">
    <div class="center-block">
      <p class="alert alert-danger">Oops, we couldn't find the page you were looking for :( </p>
      <router-link to="/home" class="btn btn-primary">Bring me back home</router-link>
    </div>
  </div>
</template>

<style>
  a.btn.btn-primary{
    text-align: center;
    margin: 0 auto;
    width:50%;
    display: block;
  }
</style>

<script>
  export default {
    name: 'notFound',
    data () {
      return {
      }
    },
    computed:{
    	type() {
    		return this.$route.params.type;
      }
    }
  }
</script>

