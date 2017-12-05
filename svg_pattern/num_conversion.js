function generate_pattern(hex_val) {            // split hex_val into pairs
    let arr = [];
    for (let i = 0; i < hex_val.length; i+=2) {  
        let dec_val = parseInt(hex_val.substring(i, i + 2), 16);
        let bool_val = is_even(dec_val);
        arr.push(bool_val);
    }
    return arr;
}

function is_even(num) {
    if(num % 2 === 0) {
        return 1;
    } else {
        return 0;
    }
}

/*
function generate_pattern2(hex_val) {           // randomly pick indexes from hex_val
    
}
*/

module.exports = generate_pattern;