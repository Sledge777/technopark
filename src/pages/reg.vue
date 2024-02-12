<template>
    <div class="body">
        <section class="auth">
            <button type="button" class="back" @click="$router.push('/')">Назад</button>
            <div class="wrapper">
                <input type="text" placeholder="Новый Логин" v-model="login">
                <input type="text" placeholder="Новый Пароль" v-model="password">
                <button type="submit" class="btn" @click="reg()">зарегистрироваться</button>
            </div>
        </section>  
    </div>
</template>
<script>
export default {
    data() {
        return {
            login: '',
            password: '',
        }
    },
    methods: {
        async reg(login,password) {
            try {
                const response = await axios.post('/api/login', login,password);
                const token = response.data.token;
                localStorage.setItem('token', token);
                return true; 
            } catch {}
        }
    }
}
</script>
<style scoped>
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