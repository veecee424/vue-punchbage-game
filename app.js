let data = {
    health: 100,
    gameOn: true,
    ended: false
}

let methods = {
    punch: function () {
        this.health -= 10;
        if (this.health <= 0) {
            this.gameOn = false;
            this.ended = true;
        }
    },
    restart: function () {
        this.health = 100;
        this.gameOn = true;
        this.ended = false
    }
}




let vue = new Vue({
    el: '#game',
    data,
    methods
})