const link = "";

function get_dog() {
    let img = document.getElementById("dog_image");
    fetch(link).then(response => response).then(data => {
        img.src = data;
        console.log(data);
        // img.onload = () => {
        //     setTimeout(get_dog, 2500);
        // };
    });
}

function show_image() {
    get_dog();
}