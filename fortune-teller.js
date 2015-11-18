var yourFortune = require('./library/fortune.js').fortune;

for (var i = 0; i < process.argv[2]; i++ ) {
    yourFortune();
}