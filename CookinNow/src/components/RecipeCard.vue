<template>
    <div>
        <div class="card">
            <div class="name">{{ recipe }}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "recipeCard",
        props: {
            recipe: Object
        }
        
    }
</script>

<style scoped>

</style>