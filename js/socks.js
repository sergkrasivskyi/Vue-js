const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      inStock: true,
      details: ["50% cotton", "30% polyester", "20% wool", "100% naturally"],
      image: "./../assets/images/socks_green.jpg",
      variants: [
        {
          id: 1221,
          color: "green",
          image: "./../assets/images/socks_green.jpg",
        },
        { id: 1222, color: "blue", image: "./../assets/images/socks_blue.jpg" },
      ],
      inventory: 11,
      onSale: true,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      alt: "colored socks",
      url: "https://www.freecodecamp.org",
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      } else {
        alert("The Cart is empty");
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
