const imgapi = `https://api.unsplash.com/photos/random?client_id=RpU2tJuSofohzPe1uA3xv7pVeaxDiksQq0HW2WqnqIo&count=15`;
const galleryDiv = document.querySelector('.gallery');
const hamburger = document.getElementById("menu");
const searchbar = document.getElementById("searchinput");

searchbar.addEventListener("input", function() {
    const searchTerm = searchbar.value.trim();
    if (searchTerm !== "") {
        searchImages(searchTerm);
    }
});
document.body.addEventListener("dblclick",()=>{
    hamburger.style.display = "none";

})
// const api = 'https://picsum.photos/v1/list?page=1&limit=10';
// async function call() {
//     try {
//         const response = await fetch(api);
//         const data = await response.json();
//         const images = data.map(image => ({
//             id: image.id,
//             url: image.download_url,
//             author: image.author
//         }));
//         data.forEach(image => {
//             const img = document.createElement('img');
//             img.src = image.download_url;
//             galleryDiv.appendChild(img);
//         });

//         console.log(images);
//     } catch (error) {
//         console.log("Error :", error);
//     }
// }


// call();

async function searchImages(searchTerm) {
    try {
        const response = await fetch(`${imgapi}&query=${searchTerm}`);
        const data = await response.json();
        clearGallery();
        data.forEach(image => {
            const img = document.createElement('img');
            img.src = image.urls.regular;
            img.alt = image.alt_description;
            galleryDiv.appendChild(img);
        });
    } catch (error) {
        console.log('Error', error);
    }
}

async function get() {
    try {
        const response = await fetch(imgapi);
        const data = await response.json();
        data.forEach(image => {
            const img = document.createElement('img');
            img.src = image.urls.regular;
            img.alt = image.alt_description;
            galleryDiv.appendChild(img);
        });
    } catch (error) {
        console.log('Error', error);
    }
}

function clearGallery() {
    galleryDiv.innerHTML = "";
}

get();

document.getElementById("open").addEventListener("click", () => {
    if (hamburger.style.display === "none") {
        hamburger.style.display = "block";
    } else {
        hamburger.style.display = "none";
    }
});