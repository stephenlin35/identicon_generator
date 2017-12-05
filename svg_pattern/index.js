const randomColor = require('randomcolor');
const crypto = require('crypto');
const generate_rand_str = require('./random_string');
const num_convert = require('./num_conversion');


document.getElementById('randomize').onclick = function() {
    const color_val = randomColor();
    const rand_str = generate_rand_str();

    // Creates and returns a Hash object based on SHA-1 hashing algorithm
    // With the string to perform the hash algorithm on
    const hash = crypto.createHash('sha1').update(rand_str);
    // Return hash in hex 
    const hex_val = hash.digest('hex'); 
    console.log(hex_val);
    const conv_arr = num_convert(hex_val);
    let gen = arr_generator(conv_arr);
    
    // erase
    for (let r = 0; r < 5; r++) {
        for (let s = 0; s < 5; s++) {
            document.getElementsByClassName(`${r}-${s}`)[0].setAttribute('fill', '#efeded');
        }
    }
    
    for (let i = 0; i < 5; i++) {   
        for (let j = 0; j < 3; j++) {
            let val = conv_arr[gen.next().value];
            if (val == 1) {
                document.getElementsByClassName(`${i}-${j}`)[0].setAttribute('fill', `${color_val}`);
                if(j == 0) {
                    let mirror_val = j + 4;
                    document.getElementsByClassName(`${i}-${mirror_val}`)[0].setAttribute('fill', `${color_val}`);
                } else if (j == 1) {
                    let mirror_val = j + 2;
                    document.getElementsByClassName(`${i}-${mirror_val}`)[0].setAttribute('fill', `${color_val}`);
                }
            }
        }
    }
 }

function* arr_generator(arr) {
    let index = 0;
    while (index < 15) {
        yield index++;
    }
}
































