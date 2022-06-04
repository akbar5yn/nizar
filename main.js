Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {
        title: "Muhammad Nizar Taufiqurah",
        description:
          "Ini adalah tempat saya untuk berbagi segala pengetahuan yang saya peroleh tentang koding dan teknologi.",
        social: {
          ig: {
            url: "https://instagram.com/mnizar_t",
            title: "mnizar_t",
          },
         
          },
          yt: {
            url: "https://www.youtube.com/channel/UC8GBH6hewlRM1q252mSMyXg",
            title: "LuckyBlyue",
          },
        },
        imageProfile:
          "",
      },
      articles [
        {
          title: 'The Magic of Vue',
          description: "This is your first looping using Vue",
          thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
        }
      ]
    },
  
  mounted:()=>{    
    axios.get("https://raw.githubusercontent.com/blinxyt23/tekweb/main/header.json")
    .then((res)=>{
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}).mount("#app");
