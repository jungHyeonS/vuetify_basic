import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({

    //트레스 홀드를 변경해야될 경우 해당부분에 재정의
    // breakpoint:{
    //     mobileBreakpoint : "xs"
    // }
    // theme: {
    //     themes: {
    //         light: {
    //             primary: colors.yellow,
    //             secondary: '#E57373',
    //         }
    //     }
    // }
});
