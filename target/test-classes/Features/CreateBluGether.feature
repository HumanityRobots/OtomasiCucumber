Feature: Create BluGether

  @CreateBluGether
  Scenario Outline: Create blugether 1
    Given    Login test <pocket> "Create" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek limit <search> "limit awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal
    And      Pockets <pocket>
    And      Berada dihalaman list blugether

    And      Tambah blugether
    And      Masukkan nama blugether <namaBluGether> dan setoran awal <setoranAwal>
    And      Undang member masukkan nomor rekening <noRekUndangan>
    And      Klik tombol lanjut
    And      Atur goal jumlah yang ditabung <aturJumlahGoal>
    And      Atur tanggal pencapaian <tanggalPencapaian>
    And      Klik tombol buka blugether
    And      Berada dihalaman berhasil membuat blugether
    And      Klik tombol kembali ke daftar blugether
    And      Berada dihalaman list blugether
    And      Klik card blugether
    And      Berada dihalaman detail blugether
    And      Cek riwayat transaksi blugether

    And      Cek saldo akhir "saldo akhir"
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Cek notifikasi
    And      Cek limit <search> "limit akhir"
    And      Logout blu <logout>
    And      Login member undangan dengan nomor handphone <nomorHandphoneUndangan> dan password <passwordUndangan>
    And      Homescreen blu
    And      Cek notifikasi undangan <terimaUndangan>
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    | search | pocket      | namaBluGether   | setoranAwal | aturJumlahGoal | tanggalPencapaian | noRekUndangan  | nomorHandphoneUndangan | passwordUndangan | terimaUndangan |  logout                 |
      | 1  | 082211220045   | Password123!| limit  | bluGether   | Blugether 1     |             |                |                   |                |                        |                  |                |  Masuk dengan Akun Lain |


  #@CreateBluGether
  Scenario Outline: Create blugether 1
    Given    Login test <pocket> "Create" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek limit <search> "limit awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal
    And      Pockets <pocket>
    And      Berada dihalaman list blugether
    And      Tambah blugether
    And      Masukkan nama blugether <namaBluGether> dan setoran awal <setoranAwal>
    And      Undang member masukkan nomor rekening <noRekUndangan>
    And      Undang member masukkan nomor rekening <noRekUndangan> dan <noRekUndangan2>
    And      Klik tombol lanjut
    And      Atur goal jumlah yang ditabung <aturJumlahGoal>
    And      Atur tanggal pencapaian <tanggalPencapaian>
    And      Klik tombol buka blugether
    And      Berada dihalaman berhasil membuat blugether
    And      Klik tombol kembali ke daftar blugether
    And      Berada dihalaman list blugether
    And      Klik card blugether
    And      Berada dihalaman detail blugether
    And      Cek riwayat transaksi blugether
    And      Cek saldo akhir "saldo akhir"
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Cek notifikasi
    And      Cek limit <search> "limit akhir"
    And      Logout blu <logout>
    And      Login member undangan dengan nomor handphone <nomorHandphoneUndangan> dan password <passwordUndangan>
    And      Homescreen blu
    And      Cek notifikasi undangan <terimaUndangan>
    And      Logout blu <logout>
    And      Login member undangan dengan nomor handphone <nomorHandphoneUndangan2> dan password <passwordUndangan2>
    And      Homescreen blu
    And      Cek notifikasi undangan1 <terimaUndangan1> dan undangan2 <terimaUndangan2>
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    | search | pocket      | namaBluGether   | setoranAwal | aturJumlahGoal | tanggalPencapaian | noRekUndangan  | noRekUndangan2 | nomorHandphoneUndangan | nomorHandphoneUndangan2  | passwordUndangan | passwordUndangan2 | terimaUndangan | terimaUndangan2 |  logout                 |
      | 2  | 082211220045   | Password123!| limit  | bluGether   | Blugether 1     |             |                |                   |                |                |                        |                          |                  |                   |                |                 |  Masuk dengan Akun Lain |