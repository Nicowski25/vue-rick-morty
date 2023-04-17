<script>
import CharactersList from './CharactersList.vue';

export default {
    name: 'AppMain',
    props: {
        characters: Array
    },
    components: { CharactersList }
}

</script>

<template>
    <main>
        <!-- characterList -->
        <CharactersList :characters="characters"></CharactersList>

    </main>
</template>