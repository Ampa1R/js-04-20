Vue.component('my-component', {
    template: `
        <div>
            <h1>My Component!</h1>
            <my-button>{{ foo }}</my-button>
            <my-button>Another button</my-button>
            <my-text :message="message"></my-text>
        </div>
    `,
    data() {
        return {
            foo: 'bar',
            message: 'My Text Component',
        };
    },
});

Vue.component('my-button', {
    template: '<button><slot></slot></button>'
});

Vue.component('my-text', {
    props: ['message'],
    template: `<p>{{ message }}</p>`
});

const app = new Vue({
    el: '#app',
    data: {
        foo: 'bar',
    },
});
