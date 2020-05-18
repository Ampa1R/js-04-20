const app = new Vue({
    el: '#app',
    data: {
        currentName: 'John',
        inputValue: 'Matt',
        newName: '',
        names: ['John', 'David', 'Sam'],
        user: {
            name: 'GeekBrains',
            age: 30,
            gender: 'male',
        } 
    },
    methods: {
        changeName(e) {
            this.currentName = this.inputValue;
        },
        addName() {
            if (this.newName.length === 0) {
                return;
            }
            this.names.push(this.newName);
            this.newName = '';
        }
    },
    computed: {
        upperCaseName() {
            return this.currentName.toUpperCase();
        },
    },
    watch: {
       inputValue(val, prevVal) {
           console.log(val, prevVal);
       },
    },
    mounted() {
        console.log('mounted');
    },
});
