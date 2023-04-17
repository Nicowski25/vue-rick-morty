<script>
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
  export default {
    components: {
      AppHeader,
      AppMain,
      AppFooter
  },
  data() {
    return {
      store
    }
  },
  methods: {
/*     callApi(url) {
      axios
        .get(url)
        .then(response => {
        console.log(response.data);
        this.store.characters = response.data.results
        this.store.info = response.data.info
        store.loading = false;
        })
        .catch(err => {
          console.log(err);
          console.log(err.message);
        })
    } */
  },
  mounted() {
    store.fetchCaracters(store.AIP_URL)
  }
}
</script>


<template>

  <AppHeader></AppHeader>

  <AppMain></AppMain>

  <AppFooter></AppFooter>

</template>


<style lang="scss" scoped>

</style>
