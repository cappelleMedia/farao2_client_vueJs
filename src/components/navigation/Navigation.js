export default {

  name: 'navigation',
  data () {
    return {
      menu: []
    }
  },
  computed: {
    menuWidth(){
      return 100 / this.menu.length + '%';
    }
  },
  mounted() {
    let menuRoutes = [],
      nonRoutes = ['error']

    let allRoutes = this.$router.options.routes;


    allRoutes.forEach(route => {
      if (route.name && !_.includes(nonRoutes, route.name) && !route.redirect) {
        menuRoutes.push(route);
      }
    });

    this.menu = menuRoutes;
  }
}
