$('.page-scroll').on('click', function (e) {
  var tujuan = $(this).attr('href');
  var elemenTujuan = $(tujuan);
  $('html, body').animate({
      // scroll top = jarak sebuah elemen, elemen mana yang di klik
      scrollTop: elemenTujuan.offset().top - 70
      // memberikan waktu scroll dan animasi swing atau linier
  }, 900, 'swing');
  // ketika di klik href nya ga jalan
  e.preventDefault();
});



$(document).on('click', '.send', function () {
  /* Inputan Formulir */
  var input_name = $("#name").val(),
    input_phone = $("#phone").val(),
    input_address = $("#address").val(),
    input_description = $("#description").val()

  /* Pengaturan Whatsapp */
  var walink = 'https://web.whatsapp.com/send',
    phone = '6281910053673',
    text = 'Halo saya ingin memesan ',
    text_yes = 'Pesanan Anda berhasil terkirim.',
    text_no = 'Isilah formulir terlebih dahulu.';

  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
  }

  if (input_name != "" && input_phone != "" && input_address != "") {
    /* Whatsapp URL */
    var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
      'Nama : ' + input_name + '%0A' +
      'Nomor Kontak / Whatsapp : ' + input_phone + '%0A' +
      'Alamat Rumah : ' + input_address + '%0A' +
      'Deskripsi Produk : ' + input_description + '%0A';

    /* Whatsapp Window Open */
    window.open(checkout_whatsapp, '_blank');
    document.getElementById("text-info").innerHTML = '<div class="alert alert-success">' + text_yes + '</div>';
  } else {
    document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">' + text_no + '</div>';
  } 
});
