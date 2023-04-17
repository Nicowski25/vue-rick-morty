<script>
import {store} from '../store'
export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }
}

</script>

<template>
   <footer class="text-center py-5">
    <p v-if="store.characters " >Characters: {{ store.characters.length }} </p>
   </footer> 
</template>