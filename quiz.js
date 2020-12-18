document.getElementById("btnquiz").addEventListener("click", function() {
    let suara = document.getElementById("quizayam")
    document.getElementById("qzayam").style.display = "inline-block";
    document.getElementById("qzkucing").style.display = "inline-block";
    document.getElementById("btnquiz").style.display = "none";
    suara.play()
})

document.getElementById("qzayam").addEventListener("click", function() {
    let suara = document.getElementById("quizbenar")
    document.getElementById("qzayam").style.display = "none";
    document.getElementById("qzkucing").style.display = "none";
    document.getElementById("btnquiz").style.display = "block";
    suara.play()
})

document.getElementById("qzkucing").addEventListener("click", function() {
    let suara = document.getElementById("quizsalah")
    document.getElementById("qzayam").style.display = "none";
    document.getElementById("qzkucing").style.display = "none";
    document.getElementById("btnquiz").style.display = "block";
    suara.play()
})

document.getElementById("backquiz").addEventListener("click", function(){
    location.replace("./index.html")
})