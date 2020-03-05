<template>
    <div>
        <h1>404 Error</h1>
       <p>Page not Found,

           Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam autem 
           accusantium.
            Aperiam sunt voluptatem quod dolore facere dolorem ex deserunt aliquam vel 
            maiores consequatur reprehenderit earum sapiente, excepturi recusandae voluptas, 
            accusantium nam adipisci natus ducimus. Ad nobis, 
           illum aspernatur vel odio alias quidem reprehenderit odit? In debitis enim quibusdam!
       </p>
        <router-link :to="{name:'home'}">Go to Home</router-link>
    </div>
</template>

<style scoped>
    h1{
        margin: 0 auto;
        color: blue;
        font-size: 100%;
    }
    p{
        color: red;
    }
</style>