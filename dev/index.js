let FocusKeyboard = require('../src/FocusKeyboard.vue')

module.exports = {
	component: FocusKeyboard,
	layouts: require('../src/layout'),
	install(Vue) {
		Vue.component(FocusKeyboard.default.name, FocusKeyboard.default)
	}
}
