
class Typing {
    constructor({ el, interval, delay }) {
        this.el = document.querySelector(el);


        this.interval = interval || 500;
        this.delay = delay ?? 1000;

        this.text = this.el.innerHTML.trim();
        this.el.innerHTML = '';
        setTimeout(() => {
            this.write();
        }, this.delay);
    }

    write(i = 0) {
        this.el.innerHTML += this.text[i];
        i++;
        if (i < this.text.length) {
            setTimeout(() => {
                this.write(i);
            }, this.interval);
        }
    }
}

new Typing({
    el: ".intro-title",
    interval: 50,
    delay: 200  
});

new Typing({
    el: ".intro-texts",
    interval: 50,
    delay: 200  
});

new Typing({
    el: ".our-service-title",
    interval: 80,
    delay: 300  
});

new Typing({
    el: ".our-service-text",
    interval: 50,
    delay: 400  
});

new Typing({
    el: ".our-service-section-title",
    interval: 110,
    delay: 500  
});

new Typing({
    el: ".our-service-section-text",
    interval: 20,
    delay: 500  
});





class ImageReset {
    constructor({ el, delay }) {
        this.el = document.querySelector(el);
        this.delay = delay ?? 1000;

        this.hide();
        setTimeout(() => {
            this.reveal();
        }, this.delay);
    }

    hide() {
        this.el.classList.remove('show');
    }

    reveal() {
        this.el.classList.add('show');
    }
}

new ImageReset({
    el: ".intro-img",
    delay: 1000 
});

class ShowButtons {
    constructor({ el, delay }) {
        this.element = document.querySelector(el);
        this.delay = delay || 1000;

        this.showElement();
    }

    showElement() {
        setTimeout(() => {
            this.element.classList.add('show'); 
        }, this.delay);
    }
}

new ShowButtons({
    el: ".intro-btns", 
    delay: 1000 
});

new ShowButtons({
    el: ".our-service-cards", 
    delay: 2000
});

new ShowButtons({
    el: ".our-service-section", 
    delay: 3000 
});
new ShowButtons({
    el: ".our-service-section-2", 
    delay: 4000 
});


