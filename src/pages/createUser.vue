<template lang="ru">
    <div class="body">
      <aside>
        <ul>
          <li @click="$router.push('/admin')">Создать роль</li>
          <li @click="$router.push('/GetRole')">Получить роль</li>
          <li @click="$router.push('/CreateUser')">Создать пользователя</li>
          <li @click="$router.push('/GetAllUsers')">Получить всех пользователей</li>
          <li @click="$router.push('/')">На главную</li>
        </ul>
      </aside>
      <section>
        <form class="wrapper" @submit.prevent="send()">
          <input v-model="email" type="email" placeholder="Почта" required>
          <input v-model="password" type="password" placeholder="Пароль" required>
          <button type="submit" class="btn">Создать</button>
          <div id="validate">{{ this.send_error }}</div>
        </form>
        <div class="response">{{ this.resp }}</div>
      </section>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email:'',
      password:'',
      resp:'',
      error:'',
      send_error:'',
    }
  },
  methods: {
    async send() {
      await axios.post('http://localhost:5000/users', {
            email: this.email,
            password: this.password
      })
      .then(response => {
        this.resp = response.data
        console.log(response)
      })
      .catch(error => {
        this.error = error;
        console.log(this.error);
      })
      if(this.error.message == 'Network Error') {
        let div = document.getElementById('validate');
        div.classList.add('denied');
        this.send_error = 'Сервер в данный момент выключен';
      }else {
        let div = document.getElementById('validate');
        div.classList.add('access');
        this.send_error = 'Пользователь успешно создан!';
      }
    }
  },
};
</script>

<style scoped>
.body {
  background-color: grey;
  height: 100vh;
  display: flex;
}
aside {
  height: 100vh;
  width: 15vw;
  background-color: orange;
  border-radius: 0 25px 25px 0;
}
ul {
  display: flex;
  flex-direction:column;
  max-width: 80%;
  margin: auto;
  gap: 10px;
  padding-top: 10px;
}
li {
  color:blueviolet;
  display: block;
  background-color: black;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
}
section {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.wrapper {
  max-width: 20%;
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
.denied {
  color: red;
}
.access {
  color: green;
}
.response {
  margin: 20px;
  background-color: white;
  border-radius: 10px;
  align-self: center;
}
</style>
