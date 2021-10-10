import Vue from 'vue';
import langEn from './mock/en.js'
import langChs from './mock/zh.js'
import VueI18n from './vue-i18n.min'
import store from '@/store/index.js';
import {SET_LOCALE} from "@/store/actionsType.js";
Vue.use(VueI18n)
//语言切换，默认语言设置
if (['zh-cn', 'en-us'].indexOf(plus.storage.getItem('locale')) == -1) {
	plus.storage.setItem('locale', 'zh-cn')
	store.dispatch(SET_LOCALE,'zh-cn');
}
plus.storage.setItem('locale', 'zh-cn')
store.dispatch(SET_LOCALE,'zh-cn');
const i18n = new VueI18n({
	locale: plus.storage.getItem('locale') || 'zh-cn', // 默认选择的语言
	messages: {
		'en-us': langEn,
		'zh-cn': langChs
	}
})
//选择语言并存缓存
function toggleLang(fn) {
	return new Promise(function(resolve, reject) {
		uni.showActionSheet({
			itemList: ['中文简体', 'English'],
			success: (e) => {
				let lang = 'zh-cn'
				switch (e.tapIndex) {
					case 0:
						lang = 'zh-cn'
						break;3
					case 1:
						lang = 'en-us'
						break;
					default:
						lang = 'zh-cn'
						break;
				}
				//切换后直接修改他的语言
				i18n.locale = lang
				plus.storage.setItem('locale', lang)
				store.dispatch(SET_LOCALE,lang);
				resolve({
					code: 1
				})
				fn()
			}
		})
	})
}
Vue.prototype.$toggleLang = toggleLang;

export default i18n
