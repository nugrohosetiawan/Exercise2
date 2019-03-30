function tambah(val1, val2) {
  var hasil;

  hasil = parseInt(val1) + parseInt(val2);

  document.getElementById("hasil").innerHTML = hasil;
}

function kurang(val1, val2) {
  var hasil;

  hasil = parseInt(val1) - parseInt(val2);

  document.getElementById("hasil").innerHTML = hasil;
}

function kali(val1, val2) {
  var hasil;

  hasil = parseInt(val1) * parseInt(val2);

  document.getElementById("hasil").innerHTML = hasil;
}

function bagi(val1, val2) {
  var hasil;

  hasil = parseInt(val1) / parseInt(val2);

  document.getElementById("hasil").innerHTML = hasil;
}
