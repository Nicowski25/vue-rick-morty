import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive ({
    searchText: "",
    loading: true,
    AIP_URL: 'https://rickandmortyapi.com/api/character',
    characters: null,
    info: null,
    fetchCaracters(url) {
        axios
          .get(url)
          .then(response => {
          this.characters = response.data.results
          this.info = response.data.info
          this.loading = false;
          })
          .catch(err => {
            console.log(err);
            console.log(err.message);
          })
    }
})