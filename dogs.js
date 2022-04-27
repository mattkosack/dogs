function get_image_folders(link) {
    fetch(link)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => console.error(error))
}


function get_random_image() {
    let link = "https://api.github.com/repos/mattkosack/dogs/contents";
    let folders = get_image_folders(link);
    console.log(folders);

    // var images = []
    // var random_index = Math.floor(Math.random() * images.length);
    // return images[random_index];
    return "images/n02091467-Norwegian_elkhound/n02091467_92.jpg"
}


function show_image() {
    let img = document.createElement("img");
    // set img.src to random file in images/directory
    img.src = get_random_image();
    // img.src = "images/n02091467-Norwegian_elkhound/n02091467_92.jpg";
    img.width = 150;
    img.height = 150;
    // img.alt = alt;
    document.body.appendChild(img);
}