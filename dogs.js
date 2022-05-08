const link = "https://api.github.com/repos/mattkosack/dogs/contents/images";
let data = null;

function _set_random_image() {
    folder = data[Math.floor(Math.random() * data.length)].url;
    console.log(folder);
    let img = document.getElementById("dog_image");
    fetch(folder).then(response => response.json()).then(data2 => {
        img.src = data2[Math.floor(Math.random() * data2.length)].download_url;
        img.onload = () => {
            //setTimeout(_set_random_image, 2500);
        };
    });
}

function get_random_image(link) {
    if (data !== null) { _set_random_image(); }
    fetch(link).then(response => response.json()).then(data1 => {
        data = data1;
        _set_random_image();
    });
}

function show_image() {
    get_random_image(link);
}