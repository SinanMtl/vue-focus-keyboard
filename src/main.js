import Vue from 'vue'
import App from '@/App'

import FocusKeyboard from '../dist/vue-focus-keyboard'

console.log(FocusKeyboard)

Vue.use(FocusKeyboard)

export default new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})
