Feature: Update BluGether

  @UpdateBluGether
  Scenario Outline: Update BluGether tambah teman
    Given    Login test <pocket> "Update" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Pockets <pocket>
    And      Berada dihalaman list blugether

#    And      Tambah blugether
#    And      Masukkan nama blugether <namaBluGether> dan setoran awal <setoranAwal>
#    And      Undang member masukkan nomor rekening <noRekUndangan>
#    And      Klik tombol lanjut
#    And      Atur goal jumlah yang ditabung <aturJumlahGoal> dan tanggal pencapaian <tanggalPencapaian>
#    And      Klik tombol buka blugether
#    And      Berada dihalaman berhasil membuat blugether
#    And      Berada dihalaman list blugether
#    And      Klik card blugether creator
#    And      Berada dihalaman detail blugether
#    And      Cek riwayat transaksi blugether

    And      Cek saldo akhir "saldo akhir"
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    | search | pocket      | namaBluGether   | setoranAwal | aturJumlahGoal | tanggalPencapaian | noRekUndangan  | nomorHandphoneUndangan | passwordUndangan | terimaUndangan |  logout                 |
      | 1  | 082211220027   | Password123!| limit  | bluGether   | Blugether 1     |             |                |                   | 000000002983   |    082211220045        |  Password123!    |      ya        |  Masuk dengan Akun Lain |

  @UpdateBluGether
  Scenario Outline: Update BluGether
    Given    Login test <pocket> "Update" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal
    And      Pockets <pocket>
    And      Berada dihalaman list blugether

#    And      Tambah blugether
#    And      Masukkan nama blugether <namaBluGether> dan setoran awal <setoranAwal>
#    And      Undang member masukkan nomor rekening <noRekUndangan>
#    And      Klik tombol lanjut
#    And      Atur goal jumlah yang ditabung <aturJumlahGoal> dan tanggal pencapaian <tanggalPencapaian>
#    And      Klik tombol buka blugether
#    And      Berada dihalaman berhasil membuat blugether
#    And      Berada dihalaman list blugether
#    And      Klik card blugether creator
#    And      Berada dihalaman detail blugether
#    And      Cek riwayat transaksi blugether

    And      Cek saldo akhir "saldo akhir"
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Logout blu <logout>
    And      Login member undangan dengan nomor handphone <nomorHandphoneUndangan> dan password <passwordUndangan>
    And      Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek undangan notifikasi <terimaUndangan>
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    | search | pocket      | namaBluGether   | setoranAwal | aturJumlahGoal | tanggalPencapaian | noRekUndangan  | nomorHandphoneUndangan | passwordUndangan | terimaUndangan |  logout                 |
      | 1  | 082211220027   | Password123!| limit  | bluGether   | Blugether 1     |             |                |                   | 000000002983   |    082211220045        |  Password123!    |      ya        |  Masuk dengan Akun Lain |