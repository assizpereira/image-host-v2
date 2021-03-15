
let wallsurl = [];


    function setup() {
        const sesh = sessionStorage.getItem('wallup');
        
        let nameArr = sesh.split(',');
        for(let x = nameArr.length - 1; x > 0; x--) {
            let j = Math.floor(Math.random() * (x + 1));
            let temp = nameArr[x];
            nameArr[x] = nameArr[j];
            nameArr[j] = temp;

        }


        for(let i = 0; i < nameArr.length; i++){
            let url = nameArr[i].replace(/^"(.*)"$/, '$1');


            wallsurl.push(url);
        }









    

        console.log('wallpaper started!!!!!!!');
for (let i = 0; i < wallsurl.length; i++){
    console.log(wallsurl.length);

        let img = document.createElement('img');
        img.src = wallsurl[i];

        let button = document.createElement('button');
        button.id = "download_btn";
        button.innerHTML = "download";
        button.value = wallsurl[i];

        let div_walls = document.createElement('div');
        div_walls.id = "wrapper_div";


        div_walls.appendChild(img);
        div_walls.appendChild(button);
        let src = document.getElementById("wallpapers");
        src.appendChild(div_walls);
        //let btndown = document.getElementById("download_btn");
        button.addEventListener("click", function () {
            listenforclicks(button.value);
        });

    }

    function listenforclicks(Fileurl) {
        console.log(Fileurl);
        if (Fileurl !== undefined) {
            let filename = 'Wallpapernest Wallpaper Assiz';
            let xhr = new XMLHttpRequest();
            xhr.open('get', Fileurl, true);
            xhr.responseType = 'blob';
            xhr.onload = function() {
                let urlCreator = window.URL || window.webkitURL;
                let imageUrl = urlCreator.createObjectURL(this.response);
                let tag = document.createElement('a');
                tag.href = imageUrl;
                tag.download = filename;
                document.body.appendChild(tag);
                tag.click();
                document.body.removeChild(tag);
            }
                xhr.send();
        }

    }
    
}

setup();


