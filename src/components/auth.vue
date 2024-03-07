<template>
    <div v-if="auth()" class="text">
        Учетная запись авторизована!
    </div>
    <div v-else class="auth">
        <button @click="$router.push('/login')">войти</button>
        <button @click="$router.push('/reg')">зарегистрироваться</button> 
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        auth() {
            if(localStorage.getItem('token')) {
                return true
            }else {
                return false
            }
        }
    }

}
</script>

<style scoped>
.auth {
    text-align: center;
    align-self: center;
    margin-left: 1%;
}
.auth button:first-child {
    margin-bottom: 5%;
}
button {
    background-color: white;
    color: #024a7a;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 20px;
    padding : 10%;
    transition: all 0.7s;
} 
button:hover {
    background-color:#024a7a;
    color:white;
    transition: all 0.7s;
}
.text {
    color: #024a7a;
    margin-left: 10%;
    font-size: 25px;
}
</style> 