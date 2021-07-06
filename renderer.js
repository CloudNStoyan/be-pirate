let pirateMessageCache = {}

const core = {
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
        async fetchPirateMessage() {
            if (this.inputMessage.length === 0 || !this.inputMessage.trim()) {
                this.inputMessage = 'I forgot to write a message!'
            }

            if (pirateMessageCache[this.inputMessage]) {
                this.pirateMessage = pirateMessageCache[this.inputMessage]
                return
            }

            let pirateMessage = await fetch(`https://pirate.monkeyness.com/api/translate?english=${this.inputMessage}`).then(response => response.text())
            this.pirateMessage = pirateMessage
            pirateMessageCache[this.inputMessage] = pirateMessage
        }
    }
}

const app = Vue.createApp(core).mount('#app-container')