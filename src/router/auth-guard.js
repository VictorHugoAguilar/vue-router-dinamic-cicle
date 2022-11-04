const isAuthGuard = async (to, from, next) => {
    // console.log({ to, from, next });

    return new Promise(() => {
        const random = Math.random() * 100;
        if (random > 60) {
            console.log("autentificado");
            next();
        } else {
            console.warn("bloqueado por el isAuthGuard", random);
            next({ name: "pokemon-home" });
        }
    });
};

export default isAuthGuard;
