// document.getElementById("audio").autoplay = true;


 // var source = "sounds/bintangkehidupan.mp3"
 // var audio = document.createElement("audio");
 // //
 // audio.autoplay = true;
 // //
 // audio.load();

 // audio.addEventListener("load", function() { 
 //     audio.play(); 
 // }, true);


 // audio.src = source;

 var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'sounds/bintangkehidupan.mp3');
audioElement.load()
audioElement.addEventListener("load", function() { 
  audioElement.play(); 
}, true);


var nama = prompt('Masukkan Nama Anda ', 'Saepul Hidayat');

alert('Selamat Datang ' + nama);


var judul = document.querySelector('.rainbow ');

judul.addEventListener('click', function(){
	alert('Kenapa Di Klik Sikh ^_^');
})

const nomerHp = 6282216501151;

var submit = document.getElementById('submit');


submit.addEventListener('click', function(){
	var nama = document.getElementById('nama').value;
	var kelas = document.getElementById('kelas').value;
	var npm = document.getElementById('npm').value;
	var pesan = document.getElementById('pesan').value;

	// console.log(nama);
	// console.log(kelas);
	window.open('http://api.whatsapp.com/send?phone=' + nomerHp + '&text=Nama%20%3A%20' + nama + '%0AKelas%20%3A%20' + kelas + '%0ANPM%20%3A%20' + npm +'%0APesan%20%3A%20' + pesan);
	// window.location.href = 'http://api.whatsapp.com/send?phone=' + nomerHp + '&text=Nama%20%3A%20' + nama + '&text=Kelas%20%3A%20' + kelas + '&text=NPM%20%3A%20' + npm +'%0APesan%20%3A%20' + pesan;
})