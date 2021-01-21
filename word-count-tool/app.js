const myApp = Vue.createApp({
    data(){
        return{
            word: "",
            wordLength: undefined
        }
    },
    methods:{
        computeLength: function(){
            this.wordLength = this.word.length
        }
    }
})

myApp.mount("main")
