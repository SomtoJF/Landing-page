let i = 0;
let typewriter = document.getElementById('typewriter');
let naturestop = ['N','a','t','u','r','e','S','t','o','p','.'];

function write() {
    if(i < naturestop.length){
        typewriter.textContent += naturestop[i];
        i++;
        setTimeout(write, 200);
    };
}
write();