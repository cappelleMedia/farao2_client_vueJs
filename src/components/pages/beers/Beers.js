export default {
  name: 'beers',
  data () {
    return {
      beers: []
    }
  },
  mounted(){
    let beers = getBeers();
    this.$nextTick(function () {
      this.beers = beers;
    });
  },
  computed: {
  },
  methods: {
  }
}

function getBeers() {
  let beers = [
    {
      name: '',
      deg: '',
      brew: '',
      url: '',
      desc: ''
    },
    {
      name: '',
      deg: '',
      brew: '',
      url: '',
      desc: ''
    },
    {
      name: '',
      deg: '',
      brew: '',
      url: '',
      desc: ''
    },
    {
      name: '',
      deg: '',
      brew: '',
      url: '',
      desc: ''
    },
    {
      name: '',
      deg: '',
      brew: '',
      url: '',
      desc: ''
    },
  ];

  return beers;
}
