import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../config/fierbase'
import router from '../router/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userProfile: {}
    },

    mutations: {
        setUserProfile(state, val) {
            state.userProfile = val
        }
    },

    actions: {
        async login({ dispatch }, form) {
            const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
            dispatch('fetchUserProfile', user)
        },

        async signup({ dispatch }, form) {

            const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
            await fb.usersCollection.doc(user.uid).set({
                name: form.name,
                phone: form.phone
            })
            dispatch('fetchUserProfile', user)
        },

        async fetchUserProfile({ commit }, user) {
            const userProfile = await fb.usersCollection.doc(user.uid).get()
            commit('setUserProfile', userProfile.data())
            if (router.currentRoute.path === '/login' || router.currentRoute.path === '/register' ) {
                router.push('/')
            }
        },

        async logout({ commit }) {
            await fb.auth.signOut()
            commit('setUserProfile', {})
            router.push('/login')
        },
    }
})

export default store
