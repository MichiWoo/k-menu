<template lang="pug">
  div(class='home max-w-full md:max-w-screen-md mx-auto xl:max-w-screen-lg px-5 pb-4 sm:pb-0 w-full mx-auto flex-1 mb-4 sm:mb-0')
    div(class='w-full flex flex-col justify-center')
      h1(class='text-lg font-bold mb-2 mt-8 text-light-text dark:text-dark-primary')
        | Lleva tu negocio al siguiente nivel!
      h4(class="text-light-text dark:text-dark-accent")
        | Crea menús digitales, tus clientes te lo agradecerán.
      div.flex.justify-center.items-center.my-6
        Img1(class='w-3/4')
      h2(class='text-lg font-bold mb-2 mt-8 text-light-text dark:text-dark-primary')
        | ¿Qué es K-Menu?
      span(class="text-light-text dark:text-dark-accent")
        | Es una  aplicación gratuita para la creación de menús web. Sólo registrate, agrega tus negocios, crea un menú y publícalo.
      div.flex.justify-center.items-center.my-6
        Button(text="Crea tu primer Menú" linkTo="/login")
      h2(class='text-lg font-bold mb-1 mt-6 text-light-text dark:text-dark-primary')
        | Ventajas
      div.flex.justify-center.items-center
        div.flex.flex-col.justify-center.justify-center
          div.flex.flex-start
            h3(class='text-lg font-bold text-light-text dark:text-dark-text')
          div.flex.justify-start
            p(class="text-light-text dark:text-dark-danger")
              font-awesome-icon(:icon="['fas', 'link']")
              | &nbspLink Personalizado
          div.flex.flex-start
            p(class="text-sm text-justify text-light-text dark:text-dark-accent") Obtendrás un link con tu menú el cuál  puede ser accedido mediante código qr y ser compartido en tus redes sociales.
          div.flex.justify-center.items-center.my-2
            Img1(class='w-3/4')
      div.flex.justify-center.items-center
        div.flex.flex-col.justify-center.justify-center
          div.flex.flex-start
            h3(class='text-lg font-bold text-light-text dark:text-dark-text')
          div.flex.justify-start
            p(class="text-light-text dark:text-dark-danger")
              font-awesome-icon(:icon="['fas', 'gift']")
              | &nbspGratuito
          div.flex.flex-start
            p(class="text-sm text-justify text-light-text dark:text-dark-accent") La publicación del menú es gratuita. Apoyamos a los negocios para cuidar a la gente.
          div.flex.justify-center.items-center.my-2
            Img1(class='w-3/4')
      div.flex.justify-center.items-center
        div.flex.flex-col.justify-center.justify-center
          div.flex.flex-start
            h3(class='text-lg font-bold text-light-text dark:text-dark-text')
          div.flex.justify-start
            p(class="text-light-text dark:text-dark-danger")
              font-awesome-icon(:icon="['fas', 'people-arrows']")
              | &nbspCero Contacto
          div.flex.flex-start
            p(class="text-sm text-justify text-light-text dark:text-dark-accent") Tu cliente puede visualizar el menú desde la aplicación. Evitando contacto físico lo más posible.
          div.flex.justify-center.items-center.my-2
            Img1(class='w-3/4')
      h2(class='text-lg font-bold mb-1 mt-6 text-light-text dark:text-dark-primary')
        | Premiun
      div.flex.justify-center.items-center
        div.flex.flex-col.justify-center.justify-center
          div.flex.flex-start
            h3(class='text-lg font-bold text-light-text dark:text-dark-text')
          div.flex.justify-start
            p(class="text-light-text dark:text-dark-danger")
              font-awesome-icon(:icon="['fas', 'people-arrows']")
              | &nbspPedidos Online
          div.flex.flex-start
            p(class="text-sm text-justify text-light-text dark:text-dark-accent") Clientes pordrán realizar pedidos desde la app.
          div.flex.justify-center.items-center.my-2
            Img1(class='w-3/4')
      div.flex.justify-center.items-center
        div.flex.flex-col.justify-center.justify-center
          div.flex.flex-start
            h3(class='text-lg font-bold text-light-text dark:text-dark-text')
          div.flex.justify-start
            p(class="text-light-text dark:text-dark-danger")
              font-awesome-icon(:icon="['fas', 'people-arrows']")
              | &nbspReportes
          div.flex.flex-start
            p(class="text-sm text-justify text-light-text dark:text-dark-accent") Podrás generar la estadística de tus ventas, diarias, semanales, mensuales, exportando a excel y pdf.
          div.flex.justify-center.items-center.my-2
            Img1(class='w-3/4')
      div.flex.justify-center.items-center
        div.flex.flex-col.justify-center.justify-center
          div.flex.flex-start
            h3(class='text-lg font-bold text-light-text dark:text-dark-text')
          div.flex.justify-start
            p(class="text-light-text dark:text-dark-danger")
              font-awesome-icon(:icon="['fas', 'people-arrows']")
              | &nbspEstadísticas
          div.flex.flex-start
            p(class="text-sm text-justify text-light-text dark:text-dark-accent") Obtendrás las estadísticas de tus ventas,  redes sociales, tienda, etc.
          div.flex.justify-center.items-center.my-2
            Img1(class='w-3/4')
      div.flex.justify-center.items-center
        div.flex.flex-col.justify-center.justify-center
          div.flex.flex-start
            h3(class='text-lg font-bold text-light-text dark:text-dark-text')
          div.flex.justify-start
            p(class="text-light-text dark:text-dark-danger")
              font-awesome-icon(:icon="['fas', 'people-arrows']")
              | &nbspGestor de entregas a domicilio
          div.flex.flex-start
            p(class="text-sm text-justify text-light-text dark:text-dark-accent") Podrás administrar las órdenes y entregas de tus pedidos.
          div.flex.justify-center.items-center.my-2
            Img1(class='w-3/4')
      div.flex.justify-center.items-center.my-6
        Button(text="Empezamos !!!" linkTo="/login")
</template>

<script>
export default {
  name: 'Home',
  components: {
    Img1: () => import('./images/Img1'),
    Button: () => import('./Button')
  }
}
</script>

<style lang="scss" scoped></style>
