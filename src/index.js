import 'regenerator-runtime/runtime';
import './style.css'
import '@riotjs/hot-reload'
import '@riotjs/observable'
import { mount } from 'riot'
import registerGlobalComponents from './register-global-components'

// register
registerGlobalComponents()

// mount all the global components found in this page
mount('[data-riot-component]')
