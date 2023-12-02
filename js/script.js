var app = Vue.createApp({
    data() {
      return {
        displayTitle: true, 
        index: 0,
        destinations: [
          {
            title: "Paris",
            def: "Paris is the capital and most populous city of France. Known as the 'City of Light,' it is renowned for its art, culture, and iconic landmarks such as the Eiffel Tower and Louvre Museum.",
            img: "./assets/paris_france.png"
          },
          {
            title: "Venice",
            def: "Venice is a city in northeastern Italy and the capital of the Veneto region. It is famous for its canals, historic architecture, and unique transportation by gondolas through the picturesque waterways.",
            img: "./assets/venise_italie.png"
          },
          {
            title: "Toronto",
            def: "Toronto is the capital city of the Canadian province of Ontario. It is a major financial and cultural hub, known for its diverse population, iconic CN Tower, and vibrant arts and entertainment scene.",
            img: "./assets/toronto_canada.png"
          },
        ]
      };
    },

    methods: {
      nextItem() {
        this.index = (this.index + 1) % this.destinations.length;
        this.displayTitle = true;

      },
      prevItem() {
        this.index = (this.index - 1 + this.destinations.length) % this.destinations.length;
        this.displayTitle = true;
      },
      toggleDisplay() {
        this.displayTitle = !this.displayTitle;
      }
    },

    computed: {
      currentObject() {
        return this.destinations[this.index];
      }
    }
  });

app.mount('#app');
