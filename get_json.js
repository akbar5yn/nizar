Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {},
      };
    },
    methods: {
      getHeaderData()
      {
        axios
          .get(
            "https://cdn.statically.io/gh/blinxyt23/tekweb/main/header.json"
          )
          .then((res) => {
            console.log(res.data);
            this.header = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getHeaderData()
    },
  }).mount("#app");
  