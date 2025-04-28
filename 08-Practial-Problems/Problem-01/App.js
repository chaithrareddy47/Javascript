const increment = document.querySelector("#increment-button");

const decrement = document.querySelector("#decrement-button");

const counts = document.querySelector('p')

let count = 0
increment.addEventListener('click', function () {
    console.log('btn clicked');
    count++
    counts.textContent = count
})
decrement.addEventListener('click', function () {
    console.log('btn clicked');
    if (count > 0) {
        count--;
        counts.textContent = count;
}
})



// counter using oops
/*
class Counter {
    constructor() {
        this.count = 0; // initalizing the count
    }

    inc() {
        this.count++;
        counts.textContent = this.count;

    }
    dec() {
        if (this.count > 0) {
            this.count--;

            counts.textContent = this.count;
        }

    }

    init() {
        increment.addEventListener("click", () => this.inc());
        decrement.addEventListener("click", () => this.dec());
    }


}

const counter = new Counter()
counter.init()
*/