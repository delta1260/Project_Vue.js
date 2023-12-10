const app = Vue.createApp({
  data() {
    return {
      displayTitle: true,
      index: 0,
      index_package: 0,
      destinations,
      userInput,
      packages,
      hotels,
      rotated: false,
      displayOrder: false,
      total: 0,
    };
  },
  methods: {
    nextItem() {
      this.index = (this.index + 1) % this.destinations.length;
      this.displayTitle = true;
      this.rotated = false;
    },
    prevItem() {
      this.index = (this.index - 1 + this.destinations.length) % this.destinations.length;
      this.displayTitle = true;
      this.rotated = false;
    },
    toggleDisplay() {
      this.displayTitle = !this.displayTitle;
      this.rotated = !this.rotated;
    },
    toggleOrder(i) {
      this.displayOrder = true;
      this.index_package = i;
      this.computeTotal();
    },
    validateOrder() {
      this.exitOrder();
      alert("Thank you for ordering on our website, your order has been validated");
    },
    updateDepartureDate(event) {
      this.userInput.departureDate = event.target.value;
    },
    updateReturnDate(event) {
      this.userInput.returnDate = event.target.value;
    },
    updateTotal() {
      this.computeTotal();
    },
    computeTotal() {
      let basePrice = this.currentPackage.price;
      let checkedBaggageCost = this.userInput.checkedBaggage * 50;
      let carryOnBaggageCost = this.userInput.carryOnBaggage * 30;
      this.total = basePrice + checkedBaggageCost + carryOnBaggageCost;
    },
    exitOrder() {
      this.displayOrder = false;
      this.clearForm();
    },
    clearForm() {
      this.userInput = {
        lastName: "",
        firstName: "",
        selectedDestination: "",
        departureDate: "",
        returnDate: "",
        checkedBaggage: 0,
        carryOnBaggage: 0,
      };
    },
  },
  computed: {
    currentObject() {
      return this.destinations[this.index];
    },
    currentPackage() {
      return this.packages[this.index_package];
    },
  },
  watch: {
    'userInput.checkedBaggage': 'updateTotal',
    'userInput.carryOnBaggage': 'updateTotal',
  },
});


const destinations = [
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
];

const userInput = 
  {
    lastName: "",
    firstName: "",
    selectedDestination: "",
    departureDate: "",
    returnDate: "",
    checkedBaggage: 0,
    carryOnBaggage: 0,

};


const packages = [
  { name: "Basic Package", price: 499.99 },
  { name: "Business Package", price: 999.99 },
  { name: "Premium Package", price: 1499.99 },
];

const hotels = [
  {
      name: "Grand Hotel Riviera",
      img: "./assets/hotel_riviera.png",
      location: "Paris, France",
      stars: 4,
  },
  {
      name: "Royal Plaza Hotel",
      img: "./assets/hotel_royal_plaza.png",
      location: "Venice, Italy",
      stars: 5,
  },
  {
      name: "Sunset Paradise Resort",
      img: "./assets/hotel_sunset_paradise.png",
      location: "Toronto, Canada",
      stars: 3,
  },

];

