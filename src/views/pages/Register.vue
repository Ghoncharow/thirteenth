<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form>
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input v-model="text1" type="text" class="form-control" placeholder="Username" autocomplete="username" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input v-model="text2" type="text" class="form-control" placeholder="Email" autocomplete="email" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input v-model="text3" type="password" class="form-control" placeholder="Password" autocomplete="new-password" />
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input v-model="text4" type="password" class="form-control" placeholder="Repeat password" autocomplete="new-password" />
                </b-input-group>

                <b-button @click="toggle" variant="success" block>Create Account</b-button>
              </b-form>
            </b-card-body>
            
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import router from '../../router/index';
import Store from '../../store';

export default {
  name: 'Register',
  data() {
    return {
      text1: '',
      text2: '',
      text3: '',
      text4: ''
    }
  },
  methods: {
    toggle() {

      if (this.text1 && this.text2 && this.text3 == this.text4) {
        var user = { name: this.text1, email: this.text2, password: this.text3 };
        Store.postApi(user);
      }
      router.push({ path: '/pages/login' });
      
    }
  }
}
</script>
