<template>
    <h1>Pokemon Page</h1>
    <h4>ID: {{ id }}</h4>
    <template v-if="pokemon">
        <h3>Name: {{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" />
        <img :src="pokemon.sprites.back_default" />
    </template>

    <router-link class="router" to="/">
        ⬅
    </router-link>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,
        },

    },
    data() {
        return {
            // id: this.$route.params.id
            pokemon: null
        }
    },

    created() {
        // const { id } = this.$route.params
        // console.log(this.$route);
        // this.id = id;
        // console.log(this.$attrs)
        this.getPokemon();
    },

    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                    .then(r => r.json());
                console.log(pokemon)
                this.pokemon = pokemon;
            } catch (error) {
                console.log(error);
                this.$router.push('/')
            }
        }
    },

    watch: {
        id() {
            this.getPokemon();
        }
    }
}
</script>

<style scoped>
.router {
    text-decoration: none;
    font-size: xx-large;
    color: #42b983;
    position: absolute;
    bottom: 50px;
    right: 50px;
}

.router:hover {
    text-shadow: 2px 2px 2px #2c3e50;
}
</style>

