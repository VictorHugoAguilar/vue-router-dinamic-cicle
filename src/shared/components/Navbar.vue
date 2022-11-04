<template>
    <div class="container">
        <!-- <router-link :to="{ name: 'pokemon-home' }">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }">Pokemon Por Id</router-link>
        <router-link :to="{ name: 'pokemon-about' }">About</router-link> -->
        <CustomLink v-for="link in links" :key="link.to" :link=link />
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemons' },
                { to: 'pokemon-id', name: 'Por id', id: 100 },
                { to: 'pokemon-about', name: 'PK About' },

                { to: 'dbz-characters', name: 'Personajes' },
                { to: 'dbz-about', name: 'DBZ About' },

                { to: 'https://google.com', name: 'Google' },
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

<style scoped>
.container {
    padding: 0 10px;
    margin-bottom: 10px;
}

.container a {
    margin: 0px 20px;
    border: thin solid #2c3e50;
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    text-transform: uppercase;
}

.container a:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

a.router-link-exact-active {
    color: #42b983
}
</style>