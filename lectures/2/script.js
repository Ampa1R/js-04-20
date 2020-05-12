
/*
    // Функции генераторы

    const menuItem = {
        color: 'green',
        name: 'Home',
        makeRed: function () {
            this.color = 'red';
        },
    };

    const MenuItem = function(color, name) {
        this.color = color;
        this.name = name;
    }

    MenuItem.prototype.makeRed = function () {
        this.color = 'red';
    };

    const MainMenuItem = function(color, name) {
        MenuItem.call(this, color, name);
    }

    MainMenuItem.prototype = Object.create(MenuItem.prototype);

    MainMenuItem.prototype.constructor = MainMenuItem;
*/


// ES2015 классы
class MenuItem {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }

    makeRed() {
        this.color = 'red';
    }
}

class MainMenuItem extends MenuItem {
    #height;
    #url;

    constructor (color, name, width) {
        super(color, name);
        this.width = width;
        this.#height = 200;
        this.#url = 'https://google.com';
    }

    makeBlue() {
        this.color = 'blue';
    }

    makeTall() {
        this.#height = 500;
    }

    get url() {
        console.log('Call url getter');
        return this.#url.toUpperCase();
    }

    set url(value) {
        this.#url = value.toLowerCase();
    }
}
