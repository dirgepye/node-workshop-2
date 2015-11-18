//first of string

function firstOfString(string, cb) {
    cb(string[0])
};

firstOfString("ffdfsda", function(result) {
    console.log(result);
});

//last of string

function lastOfString(string,cb) {
    cb(string[string.length -1])
};

lastOfString("poiuluj", function(result) {
    console.log(result);
});

//first AND last of string


function getFirstAndLast (string, cb) {
    cb(string[0] + string[string.length -1]);
};

getFirstAndLast("george clooney", function (newStr) {
    console.log(newStr);
});

//





