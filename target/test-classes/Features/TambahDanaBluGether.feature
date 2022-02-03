Feature: Tambah Dana BluGether

  @TambahDanaBluGether
  Scenario Outline: Tambah Dana Blugether
    Given    Login test <pocket> "Tambah Dana" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal
    And      Pockets <pocket>
    And      Berada dihalaman list blugether
    And      Klik card blugether creator
    And      Tambah dana blugether
    And      Input nominal tambah dana <jumlahTambahDana>
    And      Berada dihalaman konfirmasi tarik dana atau tambah dana
    And      Berada dihalaman berhasil tarik dana atau tambah dana
    And      Berada dihalaman detail blugether tambah dana
    And      Berada dihalaman list blugether
    And      Cek saldo akhir "saldo akhir"
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    | pocket      | jumlahTambahDana    |  logout                 |
      | 1  | 082211220027   | Password123!| bluGether   | 20000               |  Masuk dengan Akun Lain |