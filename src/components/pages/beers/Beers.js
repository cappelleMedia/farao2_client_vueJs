export default {
  name: 'beers',
  data () {
    return {
      beers: [],
      beerIndex: 0
    }
  },
  mounted(){
    let beers = getBeers();
    this.$nextTick(function () {
      this.beers = beers;
    });
  },
  computed: {
    loadedBeers() {
      let middle = 1,
        loadedBeers = [];
      if(this.beerIndex) {
        middle = this.beerIndex
      }
      if(this.beers && this.beers.length){

      }
      return loadedBeers;
    }
  },
  methods: {
    next: function (event) {
      event.preventDefault();
      let self = this;

    },
    prev: function (event) {
      event.preventDefault();
      let self = this;
      $('#news-cat, #news-body').fadeOut(300);
      setTimeout(function () {
        if (self.newsIndex === self.news.length - 1) {
          self.newsIndex = 0;
        } else {
          self.newsIndex++;
        }
        $('#news-cat, #news-body').fadeIn(300);
      }, 300);
    }
  }
}

function getBeers() {
  let beers = [
    {
      id: 'someID',
      name: '',
      deg: '',
      brew: '',
      url: '',
      desc: ''
    },
    {
      id: '',
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
