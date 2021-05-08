// Vue.createApp({
//     data() {
//         return{
//             author: {
//                 name: 'John Doe',
//                 books: [

//                 ]
//             }
//         }
//     },
//     computed: {
//         publishedBooksMessage() {
//             return this.author.books.length > 0 ? 'Yes' : 'No'
//         }
//     }
// }).mount('#computed-basics')

const watchExampleVM = Vue.createApp({
    data() {
        return {
            question: '',
            answer: 'Questions usually contain a question mark. ;-)'
        }
    },
    watch: {
        question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf('?') > -1) {
                this.getAnswer()
            }
        }
    },
    methods: {
        getAnswer() {
            this.answer = 'Thinking...'
            axios
                .get('https://yesno.wtf/api')
                .then(response => {
                    this.answer = response.data.answer
                })
                .catch(error => {
                    this.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
}).mount('#whatch-example')