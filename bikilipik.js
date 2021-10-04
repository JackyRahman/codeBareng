var nama ="budi"
var role = "member baru"
var birthMonth = "asd"
//falsy -> undifine, null, 0
//truty

if (!nama) {
  console.log("Nama tidak boleh kosong!")
} else {
  if (role === "member baru") {
    if (birthMonth === 'Januari') {
      console.log("Selamat "+ nama +' ! Anda berhak mendapatkan voucher diskon sebesar 50%!')
    } else {
      console.log("Maaf "+nama+" voucher diskon hanya untuk yang lahir di bulan Januari.")
    }
  } else if(role ===" member lama") {
    if (birthMonth==="Januari") {
      console.log("Selamat "+nama+"!. Anda berhak mendapatkan voucher diskon sebesar 30%!")
    } else {
      console.log("Maaf "+nama+", voucher diskon hanya untuk yang lahir di bulan Januari.")
    }
  } else {
    console.log("Selamat datang di Bikilipik, "+nama+". Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.")
  }
}