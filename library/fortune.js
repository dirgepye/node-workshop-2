var fortunes = ["watch your step", "you will not find true love", "it's about to go from bad to worse", "this is about as good as it gets", "buy a lottery ticket", "don't eat the chicken"]

function getFortune() {
    return fortunes[Math.floor(Math.random()*fortunes.length)];
}

console.log(getFortune());


//  var stuff = ['Grass', 'rocks', 'water'];
//     this.types = stuff[Math.floor(Math.random()*stuff.length)];