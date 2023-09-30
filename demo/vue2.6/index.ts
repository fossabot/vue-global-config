import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import { KiFormDialog, KiImage, KiImageUpload, KiPopButton, KiPopSwitch, KiSelect } from 'kikimore'
import App from './App.vue'
import YourComponent from './YourComponent.vue'

Vue.use(VueCompositionAPI)
Vue.use(ElementUI)
Vue.use(KiFormDialog, {
  // 全局配置
})
Vue.use(KiImage, {
  // 全局配置
})
Vue.use(KiImageUpload, {
  // 全局配置
})
Vue.use(KiPopButton, {
  // 全局配置
})
Vue.use(KiPopSwitch, {
  // 全局配置
})
Vue.use(KiSelect, {
  // 全局配置
})
Vue.use(YourComponent, {
  // Global Prop
  'title': 'Global Title',

  // Global Attr
  'data': [
    { key: 1, label: 'Global Option 1' },
    { key: 2, label: 'Global Option 2' },
  ],

  // Global Listener
  '@left-check-change': function () {
    console.log('Global LeftCheckChange')
  },

  // Global Hook
  '@hook:mounted': function () {
    console.log('Global Mounted')
  },

  // Global Slot
  '#left-footer': () => ({ render: h => h('span', undefined, 'Global Slot') }),

  // Global Scoped Slot
  '#default': ({ option }) => ({ render: h => h('span', undefined, `${option.label} (From Global Scoped Slot)`) }),
})

new Vue({
  render: h => h(App),
}).$mount('#app')
