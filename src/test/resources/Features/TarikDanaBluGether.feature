Feature: Tarik Dana BluGether

  @TarikDanaBluGether
  Scenario Outline: Tarik Dana Blugether
    Given    Login test <pocket> "Tarik" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal
    And      Pockets <pocket>
    And      Berada dihalaman list blugether
    And      Klik card blugether creator

    And      Tarik dana blugether
    And      Input jumlah Tarik dana <jumlahDanaBlugether>
    And      Berada dihalaman konfirmasi
    And      Berada dihalaman berhasil tarik dana
    And      Berada dihalaman detail blugether
    And      Berada dihalaman list blugether

    And      Cek saldo akhir "saldo akhir"
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    | pocket      | jumlahDanaBlugether |  logout                 |
      | 1  | 082211220027   | Password123!| bluGether   | 10000               |  Masuk dengan Akun Lain |