<template>
    <h1>About Page</h1>
    <h2>{{ name }}</h2>
    <button @click="onChangeName">Cambiar Nombre</button>
</template>


<script>
export default {
    data() {
        return {
            name: 'victor'
        }
    },
    methods: {
        onChangeName() {
            this.name = 'victor hugo'
        }
    },
    /**
    * @method beforeCreate
    * 
    * Se llama inmediatamente cuando se inicializa la instancia, 
    * después de la resolución de accesorios, antes de procesar 
    * otras opciones como data()o computed.
    * 
    * Tenga en cuenta que el enlace de la setup()API de composición se
    * llama antes que cualquier enlace de la API de opciones, incluso beforeCreate().
    * Su uso puede ser para validaciones antes de que se cree el elemento
    */
    beforeCreate() {
        console.log('beforeCreate');
    },
    /**
     * @method created
     * 
     * Se llama después de que la instancia haya terminado de procesar todas las opciones 
     * relacionadas con el estado.
     * 
     * Cuando se llama a este enlace, se ha configurado lo siguiente: datos reactivos, 
     * propiedades calculadas, métodos y observadores. Sin embargo, la fase de montaje 
     * no se ha iniciado y la $elpropiedad aún no estará disponible.
     * Su uso puede ser para peticiones HTTP
     */
    created() {
        console.log('created');
    },
    /**
     * @method beforeMount
     * 
     * Se llama justo antes de montar el componente.
     * 
     * Cuando se llama a este enlace, el componente ha terminado de configurar su estado 
     * reactivo, pero aún no se han creado nodos DOM. Está a punto de ejecutar su efecto 
     * de renderizado DOM por primera vez.
     * 
     * Este enlace no se llama durante la representación del lado del servidor.
     */
    beforeMount() {
        console.log('beforeMount');
    },
    /**
     * @method mounted
     * Se llama después de que se haya montado el componente.
     * 
     * Un componente se considera montado después de:
     * 
     * Se han montado todos sus componentes secundarios síncronos 
     * (no incluye componentes asíncronos ni componentes dentro de <Suspense>árboles).
     * 
     * Se ha creado su propio árbol DOM y se ha insertado en el contenedor principal.
     * Tenga en cuenta que solo garantiza que el árbol DOM del componente esté en el 
     * documento si el contenedor raíz de la aplicación también está en el documento.
     * 
     * Este enlace se usa normalmente para realizar efectos secundarios que necesitan acceso 
     * al DOM renderizado del componente, o para limitar el código relacionado con el DOM al 
     * cliente en una aplicación renderizada por el servidor .
     * 
     * Este enlace no se llama durante la representación del lado del servidor.
     */
    mounted() {
        console.log('mounted');
    },
    /**
     * @method beforeUpdate
     * 
     * Llamado justo antes de que el componente esté a punto de actualizar su árbol DOM 
     * debido a un cambio de estado reactivo.
     * 
     * Este enlace se puede usar para acceder al estado DOM antes de que Vue actualice 
     * el DOM. También es seguro modificar el estado del componente dentro de este gancho.
     * 
     * Este enlace no se llama durante la representación del lado del servidor.
     */
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    /**
     * @method updated
     * 
     * Llamado después de que el componente haya actualizado su árbol DOM debido a un 
     * cambio de estado reactivo.
     * 
     * El enlace actualizado de un componente principal se llama después del de sus 
     * componentes secundarios.
     * 
     * Este enlace se llama después de cualquier actualización de DOM del componente, 
     * que puede deberse a diferentes cambios de estado. Si necesita acceder al DOM 
     * actualizado después de un cambio de estado específico, use nextTick() en su lugar.
     * 
     * Este enlace no se llama durante la representación del lado del servidor.
     * 
     * No cambie el estado del componente en el enlace actualizado; 
     * ¡esto probablemente conducirá a un ciclo de actualización infinito!
     */
    updated() {
        console.log('updated');
    },
    /**
  * @method activated
  * 
  * Se llama después de que la instancia del componente se inserta en el 
  * DOM como parte de un árbol almacenado en caché por <KeepAlive>.
  * 
  * Este enlace no se llama durante la representación del lado del servidor.
  */
    activated() {
        console.log('activated');
    },
    /**
  * @method deactivated
  * 
  * Llamado después de que la instancia del componente se elimine del DOM 
  * como parte de un árbol almacenado en caché por <KeepAlive>.
  * 
  * Este enlace no se llama durante la representación del lado del servidor.
  */
    deactivated() {
        console.log('deactivated');
    },
    /**
  * @method beforeUnmount
  * 
  * Llamado justo antes de que se desmonte una instancia de componente.
  * 
  * Cuando se llama a este enlace, la instancia del componente sigue siendo
  * completamente funcional.
  * 
  * Este enlace no se llama durante la representación del lado del servidor.
  */
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    /**
  * @method unmounted
  * 
  * Se llama después de que se haya desmontado el componente.
  * 
  * Un componente se considera desmontado después de:
  * 
  * Todos sus componentes secundarios se han desmontado.
  * 
  * setup()Se han detenido todos sus efectos reactivos asociados 
  * (efecto de renderizado y computado/observadores creados durante ).
  * 
  * Use este enlace para limpiar los efectos secundarios creados manualmente, 
  * como temporizadores, detectores de eventos DOM o conexiones de servidor.
  * 
  * Este enlace no se llama durante la representación del lado del servidor.
  */
    unmounted() {
        console.log('unmounted');
    },
    /**
  * @method errorCaptured
  * 
  * Se llama cuando se captura un error que se propaga desde un componente descendiente.
  * 
  * Los errores se pueden capturar de las siguientes fuentes:
  * Representaciones de componentes
  * Controladores de eventos
  * Ganchos de ciclo de vida
  * setup()función
  * Vigilantes
  * Ganchos de directiva personalizados
  * Ganchos de transición
  */
    errorCaptured() {
        console.log('errorCaptured');
    },
    /**
  * @method renderTracked
  * 
  * Se llama cuando el efecto de representación del componente ha rastreado una 
  * dependencia reactiva.
  * 
  * Este enlace es solo para el modo de desarrollo y no se llama durante la representación 
  * del lado del servidor.
  */
    renderTracked() {
        console.log('renderTracked');
    },
    /**
  * @method renderTriggered
  * 
  * Se llama cuando una dependencia reactiva activa el efecto de representación del
  * componente para que se vuelva a ejecutar.
  * 
  * Este enlace es solo para el modo de desarrollo y no se llama durante la 
  * representación del lado del servidor.
  */
    renderTriggered() {
        console.log('renderTriggered');
    }
}
</script>