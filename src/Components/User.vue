<template>
    <div>
        <h1>User</h1>
        <hr>
        {{
            this.$route.params.id
        }}
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Francis Jones</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
                <div @click="goToHome">
                    GO TO HOME
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        goToHome(){
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>
