export default {
  name: 'home',
  data () {
    return {
      messages: {
        origins: '<p>Drie vrienden, één liefde.<br> Fabian Pijl, Kenneth Terriere en Mattias Langens namen in Augustus 2012 het Café over van de voormalige uitbater en baten het sindsdien met veel liefde en plezier uit.</p>',
        about: '<p>Café Farao is een lichtbruin café waar sfeer en amusement niet ver te zoeken zijn. Laat je verassen door onze regelmatig wijzigende bierkaart. Meer zin in sport? Wij beschikken over darts, tafelvoetbal en sport op TV.</p>'
      },
      news: [],
      newsIndex: 0
    }
  },
  mounted(){
    let news = getNews();
    this.$nextTick(function () {
      this.news = news;
    });
  },
  computed: {
    currentNewsItem() {
      if (this.news.length) {
        return this.news[this.newsIndex];
      }
      return {cat: '', news: ''};
    }
  },
  methods: {
    next: function (event) {
      event.preventDefault();
      let self = this;
      $('#news-cat, #news-body').fadeOut(300);
      setTimeout(function () {
        if (self.newsIndex === 0) {
          self.newsIndex = self.news.length - 1;
        } else {
          self.newsIndex--;
        }
        $('#news-cat, #news-body').fadeIn(300);
      }, 300);
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

function getNews() {
  let news = [
    {
      cat: 'Beers',
      news: 'Just in: the new Jupiler NA'
    },
    {
      cat: 'Promos',
      news: 'Nieuwe promotie: Koop 5 shots limonchello en krijg er 1 gratis bij!'
    }
  ];

  return news;
}
