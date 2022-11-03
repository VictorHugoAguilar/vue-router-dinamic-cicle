<template>
    <div class="container">
        <router-link to="/">Pokemon List</router-link>
        <router-link to="/id">Pokemon Por Id</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>

<style scoped>
.container {
    padding: 0 50px;
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