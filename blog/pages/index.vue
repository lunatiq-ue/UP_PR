<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <intro title="My latest posts"/>
    <postsList :posts="postsLoaded" />
    <contacts />

  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'

export default {
    components: {
      promo,
      contacts
    },
    // asyncData (contex) {
    //   return new Promise ((resolve, reject)=>{
    //     setTimeout (() =>{
    //       resolve({
    //           postsLoaded:  [
    //         {
    //         id: 1,
    //          title: 'First Post',
    //          descr: 'Tree Sunset',
    //          img: 'https://www.office.xerox.com/business-resources/1024x1024_wallpaper_nature5.jpg'
    //        },
    //         {
    //          id: 2,
    //          title: 'Second Post',
    //          descr: 'Beutiful Fog',
    //          img: 'https://www.setaswall.com/wp-content/uploads/2019/03/Mountains-Fog-Peaks-Wallpaper-1024x1024.jpg'
    //        },
    //        {
    //          id: 3,
    //          title: 'Third Post',
    //          descr: 'Sea Sunset',
    //          img: 'https://www.silver.ru/upload/iblock/9bd/9bdc8f5b181ac73d3cda500585bb3ec4.jpg'
    //        },
    //        {
    //          id: 4,
    //          title: 'Fourth Post',
    //          descr: 'Bright Comet',
    //          img: 'https://icdn.lenta.ru/images/2020/07/23/01/20200723012049060/square_1024_726e87a4e6e8146bd04ec428d1787a3c.jpg'
    //        },
    //        {
    //          id: 5,
    //          title: 'Fifth Post',
    //          descr: 'Island',
    //          img: 'https://www.office.xerox.com/business-resources/1024x1024_wallpaper_tropical4.jpg'
    //        },
    //        {
    //          id: 6,
    //          title: 'Sixth Post',
    //          descr: 'Night Sky',
    //          img: 'https://cdn.hipwallpaper.com/i/48/39/AmayFB.jpg'
    //        }
    //                   ]
    //       })
    //     }, 1500)
    //   })
    //   .then(data =>{
    //     return data
    //   })
    //   .catch (e => {
    //     contex
    //   })
    // },
    computed: {
      postsLoaded () {
        return this.$store.getters.getPostsLoaded
      }    
    }
  }
  
</script>

