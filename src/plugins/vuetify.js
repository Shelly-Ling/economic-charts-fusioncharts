import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader


Vue.use(Vuetify);

export default new Vuetify({

  icons: {
    iconfont: 'fa4',
  },
})
