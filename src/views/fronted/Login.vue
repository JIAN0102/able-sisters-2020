<template>
  <main>
    <Loading :isLoading="isLoading" />
    <div class="p-login">
      <div class="p-login__main">
        <div class="l-wrapper-tiny">
          <ValidationObserver
            tag="div"
            class="c-form"
            v-slot="{ invalid }"
          >
            <form
              @submit.prevent="signin"
            >
              <div class="u-mb-10 u-text-center">
                <h1 class="u-text-xl u-font-medium">
                  登入後台
                </h1>
              </div>
              <ValidationProvider
                tag="div"
                class="c-form__group"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <input
                  id="inputEmail"
                  type="email"
                  class="c-form__control"
                  :class="classes"
                  name="Email"
                  v-model="user.email"
                  placeholder="Email address"
                >
                <span class="c-form__error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                tag="div"
                class="c-form__group"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <input
                  id="inputPassword"
                  type="password"
                  class="c-form__control"
                  :class="classes"
                  v-model="user.password"
                  placeholder="Password"
                >
                <span class="c-form__error">{{ errors[0] }}</span>
              </ValidationProvider>
              <div class="u-mt-10 u-text-right">
                <button
                  class="c-btn c-btn--primary"
                  type="submit"
                  :disabled="invalid"
                >
                  登入
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/auth/login`;

      this.$http.post(api, this.user).then((res) => {
        const { token } = res.data;
        const { expired } = res.data;

        // 登入成功將回傳的 token 以及 expired 寫入 cookie
        this.$cookies.set('token', token, new Date(expired * 1000));

        this.$bus.$emit('message', `${res.data.message}`, 'success');

        this.isLoading = false;

        this.$router.push('/admin');
      }).catch((err) => {
        this.$bus.$emit('message', `${err.response.data.message}`, 'danger');

        this.isLoading = false;
      });
    },
  },
};
</script>

<style>
</style>
