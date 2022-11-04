import { createRouter, createWebHashHistory } from "vue-router";
// 1. Define route components. These can be imported from other files
// 2. Define some routes Each route should map to a component. We'll talk about nested routes later.
const routes = [
    {
        path: "/",
        redirect: "/pokemon",
    },
    // Pokemons Layout
    {
        path: "/pokemon",
        name: "pokemon",
        component: () =>
            import(
                /* webpackChunkName: "PokemonLayout" */ "@/modules/pokemon/layouts/PokemonLayout"
            ),
        children: [
            {
                path: "home",
                name: "pokemon-home",
                component: () =>
                    import(/* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage"),
            },
            {
                path: "about",
                name: "pokemon-about",
                component: () =>
                    import(/* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage"),
            },
            {
                path: "pokemon-id/:id",
                name: "pokemon-id",
                component: () =>
                    import(
                        /* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"
                    ),
                props: (route) => {
                    const id = Number(route.params.id);
                    return isNaN(id) ? { id: 1 } : { id };
                },
            },
            {
                path: "",
                name: "redirect-pokemon",
                redirect: { name: "pokemon-home" },
            },
        ],
    },
    // DBZ Layout
    {
        path: "/dbz",
        name: "dbz",
        component: () =>
            import(
                /* webpackChunkName: "DragonBallLayout" */ "@/modules/dbz/layout/DragonBallLayout"
            ),
        children: [
            {
                path: "characters",
                name: "dbz-characters",
                component: () =>
                    import(/* webpackChunkName: "Characters" */ "@/modules/dbz/pages/Characters"),
            },
            {
                path: "about",
                name: "dbz-about",
                component: () =>
                    import(/* webpackChunkName: "About" */ "@/modules/dbz/pages/About"),
            },
            {
                path: "",
                name: "redirect-dbz",
                redirect: { name: "dbz-characters" },
            },
        ],
    },

    {
        path: "/:pathMatch(.*)*",
        component: () => import(/* webpackChunkName: "NoPageFound" */ "@/shared/pages/NoPageFound"),
        // redirect: "/home"
    },
];

// 3. Create the router instance and pass the `routes` option You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

// GUARD GLOBAL - Sync
// router.beforeEach((to, from, next) => {
//     console.log({ to, from, next });

//     const random = Math.random() * 100;
//     if (random > 50) {
//         console.log("autentificado");
//         next();
//     } else {
//         console.warn("no autentificado", random);
//         next({ name: "pokemon-home" });
//     }
// });

// GUARD GLOBAL - Async
const canAccess = () => {
    return new Promise((resolve) => {
        const random = Math.random() * 100;
        if (random > 50) {
            console.log("autenticado");
            resolve(true);
        } else {
            console.warn("no autentificado", random);
            resolve(false);
        }
    });
};

router.beforeEach(async (to, from, next) => {
    const auth = await canAccess();
    auth ? next() : next({ name: "pokemon-home" });
});

export default router;
