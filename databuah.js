document.getElementById("imgapel").addEventListener("click", function(){
    let apel = document.getElementById("apel");
    apel.play()
});

document.getElementById("imgjeruk").addEventListener("click", function(){
  let jeruk = document.getElementById("jeruk");
  jeruk.play()
});

document.getElementById("imgsemangka").addEventListener("click", function(){
  let semangka = document.getElementById("semangka");
  semangka.play()
});

document.getElementById("imgpisang").addEventListener("click", function(){
  let pisang = document.getElementById("pisang");
  pisang.play()
});

document.getElementById("imgmangga").addEventListener("click", function(){
  let mangga = document.getElementById("mangga");
  mangga.play()
});

document.getElementById("backbuah").addEventListener("click", function(){
  location.replace("./index.html")
})