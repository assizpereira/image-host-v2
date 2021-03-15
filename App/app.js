import category from './component/category.js';


let category_thumbnail = [];
let category_alt = [];
let wallurls = [];
let database;

var firebaseConfig = {
    apiKey: "AIzaSyDAIn4j55QfF2Oo-KCpBT2pEKNCyW6ybok",
    authDomain: "wallpapernest.firebaseapp.com",
    databaseURL: "https://wallpapernest.firebaseio.com",
    projectId: "wallpapernest",
    storageBucket: "wallpapernest.appspot.com",
    messagingSenderId: "819954093074",
    appId: "1:819954093074:web:393d10d72ea637d46fdccb"
};
firebase.initializeApp(firebaseConfig);
database = firebase.database();
// category_thumbnail.push('dkalwdjaljd');

// console.log(category_thumbnail);

loadFirebase();


  function loadFirebase() {
       let ref = database.ref("categories");
       ref.on("value", gotData, errData);
   }

   function errData(error) {
       alert(error);
   }

   //to get the data as an object
   function gotData(data) {
       let users = data.val();
       let keys = Object.keys(users);
       //leave data here for now but populate side nav later on
   

   for (let i = 0; i < keys.length; i++) {
       let k = keys[i];
       let type = users[k].thumbnail;
       console.log(type);
       category_thumbnail.push(type);
       category_alt.push(k);
   }
   const Category = new category(category_thumbnail, category_alt);
}


    let categoryname;
    document.getElementById('category_img').addEventListener('click', function (e){
        categoryname = (e.target.alt);
        if (categoryname == "Prospective Wallappers"){
            this.prospective_wallpapers();
        }
        else {
            let ref = database.ref("images/" + categoryname);
            ref.on("value", Gotimages, errData);
            
        }
    });


    function Gotimages(data) {
         console.log("data val" + data.val());
    
        let images = data.val();
        let keys = Object.keys(images);
        console.log(keys);
    
        for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            let url = images[k].url;
            //adding image links to array
            wallurls.push(url);
            console.log(url);
            console.log(keys[i])        
        }
        
    console.log(wallurls);
   sessionStorage.setItem("wallup", wallurls);
   window.open('wallpapers.html', '_self', false);

   // const Wallpapers = new wallpapers(wallurls);
        
        }
        

      


   
