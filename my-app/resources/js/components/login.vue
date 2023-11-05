<script>
export default {
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',

    nameRules: [
      value => {
        if (/[0-9]/.test(value)) return 'Name cannot contain digits.';
        if (value?.length < 4) return 'Name must be at least 4 characters.';
        return true;
      },
    ],

    emailRules: [
      value => {
        if (/[^ @]*@[^ @]/.test(value)) return true;
        return 'Please enter a valid email address.';
      },
    ],

    passwordRules: [
      value => {
        if (!/(?=.*[0-9])(?=.*[a-z])/.test(value)) return 'Password must contain numbers and letters.';
        if (!/^[a-zA-Z0-9]{8,32}$/.test(value)) return 'Password must be 8 to 32 characters long.';
        return true;
      }
    ]
  }),

  methods: {
    login() {
      // Assuming you're using Axios for HTTP requests
      axios.post('/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        // Handle successful login
        console.log('Logged in successfully', response.data);

        // Assuming your backend sends a token upon successful login,
        // you can save it to localStorage or Vuex for authentication.
        // Example:
        // localStorage.setItem('token', response.data.token);

        // You can also redirect the user to another page here.
      })
      .catch(error => {
        console.error('Login failed', error.response.data);
      });
    }
  }
}
</script>

<template>
  <v-dialog width="700">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" variant="tonal" text="Sign-up"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <div id="close">
          <v-btn @click="isActive.value = false">X</v-btn>
        </div>

        <div id="heading">
          <h2>Sign-up form</h2>
        </div>

        <v-sheet width="300" class="mx-auto">
          <v-form fast-fail @submit.prevent="login" action="">
            <v-text-field v-model="firstName" label="First name" variant="outlined" :rules="nameRules"></v-text-field>
            <v-text-field v-model="lastName" label="Last name" variant="outlined" :rules="nameRules"></v-text-field>
            <v-text-field v-model="email" label="Email" variant="outlined" :rules="emailRules"></v-text-field>
            <v-text-field v-model="password" label="Password" variant="outlined" :rules="passwordRules" type="password"></v-text-field>

            <v-btn type="submit" block class="mb-5 bg-red">Submit</v-btn>
          </v-form>
        </v-sheet>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
#heading, #close {
  display: flex;
  justify-content: center;
  margin: 0;
}

.fieled {
  width: 500px;
  margin-left: -100px;
  margin-top: 20px;
}
</style>



            <!-- <h3>Choose which language do you know</h3>
            <lable for="java">Java</lable>
            <input type="checkbox" id="java" value="java" v-model="technology" />
            <lable for="java script">java script</lable>
            <input type="checkbox" id="java script" value="java script" v-model="technology" />
            <lable for="php">php</lable>
            <input type="checkbox" id="php" value="php" v-model="technology" />

            <br /><br />

            <h3>Who you are</h3>
            <input type="radio" id="student" name="radio" value="student" v-model="who" />
            <lable for="student">Student</lable><br />
            <input type="radio" id="developer" value="developer" name="radio" v-model="who" />
            <lable for="developer">Develorer</lable><br /> -->

            <!-- <h2>You choose in languages: {{ technology }}</h2>
            <h2>You are a : {{ who }}</h2> -->