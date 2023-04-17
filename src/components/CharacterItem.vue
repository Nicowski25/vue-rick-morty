<script>

    export default {
        name: 'CharacterItem',
        props: {
            character: Object,
        }
    }

</script>

<template>
    <div class="col">
        <div class="character">
            <img class="rounded-cirlce img-fluid" :src="character.image" alt="">
            <div class="text">
                <h3>{{ character.name }}</h3>
                <div class="status"> {{ character.status }} </div>
                <div class="species"> {{ character.species }} </div>
            </div>
        </div>
    </div>
</template>