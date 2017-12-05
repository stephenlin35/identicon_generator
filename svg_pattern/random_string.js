function generate_rand_string() {
    let text = "";
    let selection =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz";
    let str_length = Math.floor(Math.random() * 40);
    
    for (let i = 0; i < str_length; i++) {
        text += selection.charAt(Math.floor(Math.random() * selection.length));
    } 
    return text;
}

module.exports = generate_rand_string;
