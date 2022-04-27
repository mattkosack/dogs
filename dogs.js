function get_random_image() {
    let link = "https://api.github.com/repos/mattkosack/dogs";
    var images = []
    var random_index = Math.floor(Math.random() * images.length);
    return images[random_index];
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



// Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
