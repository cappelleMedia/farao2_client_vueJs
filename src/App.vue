<template>
  <div id="app">
    <navigation v-if="showMenu"></navigation>
    <div id="view">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/navigation/Navigation.vue';
  export default {
    name: 'app',
    data () {
      return {}
    },
    computed: {
      showMenu() {
        if (this.$route.name === 'error') {
          return false;
        }
        return true;
      }
    },
    components: {
      'navigation': Navigation
    }
  }
</script>

