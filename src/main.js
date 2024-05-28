import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import your components/pages
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Shop from './pages/Shop.vue'
import Details from './pages/Details.vue'
import Cart from './pages/Cart.vue'
import About from './pages/About.vue'
import Home from './pages/Home.vue'

// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/cart', component: Cart },
  { path: '/details', component: Details },
  { path: '/about', component: About },
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Create and mount the app
const app = createApp(App)
app.use(router)
app.component('FooterComponent', Footer)
app.component('HeaderComponent', Header)
app.mount('#app')
