export default class category {
    constructor(categorythmbnail, category_alt) {
        this.catthumburl = categorythmbnail;
        this.category_alt = category_alt;
        this.populateThumbnail();
    }   

populateThumbnail() {
    let allImages = '';

    for (let i = 0; i < this.catthumburl.length; i++){
        allImages = new Image();
        allImages.src = this.catthumburl[i];
        allImages.alt = this.category_alt[i];
        console.log(allImages);
        let src = document.getElementById("category_img");
        src.appendChild(allImages);
    }

}


}