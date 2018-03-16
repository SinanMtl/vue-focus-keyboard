let FocusKeyboard = require('./FocusKeyboard.vue')

module.exports = {
	component: FocusKeyboard,
	layouts: require('./layout'),
	install(Vue) {
		Vue.component(FocusKeyboard.default.name, FocusKeyboard.default)
	}
}
