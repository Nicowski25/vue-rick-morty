<script>
import CharacterItem from './CharacterItem.vue';
import {store} from '../store'
export default {
    name: "CharactersList",
    components: { CharacterItem },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <section class="container">
        <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-3">
            <!-- characterItem -->
            <CharacterItem :character="character" v-for="character in store.characters" v-if="!store.loading"></CharacterItem>
            <div class="col-12" v-else>
                <div class="loader">
                    Loading...
                </div>
            </div>

        </div>
    </section>
</template>