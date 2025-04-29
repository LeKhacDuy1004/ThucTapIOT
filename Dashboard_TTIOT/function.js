// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#led1');
let btn2 = document.querySelector('#btn2');
// functions nut bam
btn1.addEventListener('click', ()=>{
    img1.src = 'image/denmo.jpg'; 
    firebase.database().ref('${currentZone}/thietbi1').set({led1: 1})
})
btn2.addEventListener('click', ()=>{
    img1.src ='image/dentat.jpg';
    firebase.database().ref('${currentZone}/thietbi1').set({led1: 0})
})


// khoi tao cac thong so
let btn3 = document.querySelector('#btn3');
let img2 = document.querySelector('#led2');
let btn4 = document.querySelector('#btn4');
// functions nut bam
btn3.addEventListener('click', ()=>{
    img2.src = 'image/denmo.jpg'; 
    firebase.database().ref('${currentZone}/thietbi2').set({led2:1})
})
btn4.addEventListener('click', ()=>{
    img2.src = 'image/dentat.jpg';
    firebase.database().ref('${currentZone}/thietbi2').set({led2:0})
})



// khoi tao cac thong so
let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#led3');
let btn6 = document.querySelector('#btn6');
// functions nut bam
btn5.addEventListener('click', ()=>{
     img3.src = 'image/denmo.jpg' ;
     firebase.database().ref('${currentZone}/thietbi3').set({led3:1})

})
btn6.addEventListener('click', ()=>{
    img3.src = 'image/dentat.jpg';
    firebase.database().ref('${currentZone}/thietbi3').set({led3: 0})

})

let currentZone = "khuA"; // Mặc định là khu A

function loadDeviceState(zone) {
    firebase.database().ref(zone).once('value', snapshot => {
        let data = snapshot.val() || { led1: 0, led2: 0, led3: 0 }; // Nếu chưa có dữ liệu, mặc định tất cả tắt

        img1.src = data.led1 ? 'image/denmo.jpg' : 'image/dentat.jpg';
        img2.src = data.led2 ? 'image/denmo.jpg' : 'image/dentat.jpg';
        img3.src = data.led3 ? 'image/denmo.jpg' : 'image/dentat.jpg';
    });
}