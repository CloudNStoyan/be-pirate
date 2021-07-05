const appData = {
    data() {
        return {
            hello: 'hello world',
            insult: '',
            pirateMessage: '',
            inputMessage: ''
        }
    },
    methods: {
        async fetchInsult() {
            let insult = await fetch('https://pirate.monkeyness.com/api/insult').then(response => response.text())
            this.insult = insult
        },
        setPirateMessage: () => fetch(`https://pirate.monkeyness.com/api/translate?english=${app.inputMessage}`).then(response => response.text()).then((pirateMessage) => app.pirateMessage = pirateMessage)
    }
}

const app = Vue.createApp(appData).mount('#app-container')