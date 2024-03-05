<template>
    <div class="body">
        <section class="auth">
            <button type="button" class="back" @click="$router.push('/')">Назад</button>
            <form class="wrapper" @submit.prevent="auth()">
                <input type="email" placeholder="Новый Логин" v-model="email">
                <input type="password" placeholder="Новый Пароль" v-model="password">
                <button type="submit" class="btn">зарегистрироваться</button>
                <div id="validate">{{ this.resp }}</div>
            </form>
        </section>  
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: '',
            error:'',
            resp:'',
            token:'',
        }
    },
    methods: {
        async auth() {
            await axios.post('http://localhost:5000/auth/login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                this.token = response.data
                console.log(response)
            })
            .catch(error => {
                this.error = error;
                console.log(this.error);
            })
            if(this.error.message == 'Request failed with status code 401') {
                let div = document.getElementById('validate');
                div.classList.toggle('denied');
                this.resp = 'Пользователь с данной почтой уже существует!';
            }else {
                let div = document.getElementById('validate');
                div.classList.toggle('access');
                this.resp = 'Авторизация успешна!';
                localStorage.setItem('token',this.token);
                await setTimeout(() => this.$router.push('/'), 1000)
            }
        }
    }
}
</script>
<style scoped>
.denied {
  color: red;
}
.access {
  color: green;
}
.body {
  background-color: grey;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth {
  position: relative;
  background-color: blanchedalmond;
  width: 25%;
  height: 25%;
  border-radius: 50px;
  display:flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px 3px black;
}
.wrapper {
  max-width: 50%;
}
input {
  width: 100%;
  height: 3.5em;
  border-radius:20px;
  border: 2px solid grey;
  padding-left: 2%;
}
input:first-child {
  margin-bottom: 10%;
}    
.btn {
    float: right;
    margin-top: 10%;
    background-color: white;
    border: 2px solid grey;
    border-radius: 20px;
    padding: 2%;
    transition: all 0.4s;
    font-size: 20px;
}
.btn:hover {
    background-color:aliceblue;
    cursor: pointer;
    transition: all 0.4s;
    font-size: 24px;
}
.back {
    position:absolute;
    margin-right:75%;
    margin-bottom:30%;
    background-color:white;
    border: 2px solid grey;
    padding: 2px;
    font-size: 15px;
    border-radius:5px ;
    transition: all 0.4s;
}
.back:hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: all 0.4s;
    background-color: aliceblue;
}
</style>