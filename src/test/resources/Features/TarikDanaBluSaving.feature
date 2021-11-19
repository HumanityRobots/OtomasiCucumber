@TarikDanaBluSaving
Feature: Tarik Dana BluSaving
  @BluSavingRegression
  Scenario Outline: Tarik Dana BluSaving
    Given    Login test <testing> "Tarik Dana" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek limit <search> "limit awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal
    And      Pockets <testing>
    And      Klik card blusaving
    And      Klik tombol tarik dana
    And      Input jumlah tarik dana <jumlahTarikDana>
    And      Berada dihalaman konfirmasi tarik dana
    And      Berada dihalaman berhasil tarik dana
    And      Berada dihalaman detail blusaving
    And      Cek riwayat transaksi blusaving
    And      Cek saldo akhir "saldo akhir"
    And      Cek notifikasi
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Cek limit <search> "limit akhir"
    And      Logout blu <logout>
    #    Then     Check saldo awal berkurang, limit awal berkurang

    Examples:
      | no | nomorHandphone | password    | search | testing      |  jumlahTarikDana | logout          |
      | 1  | 082211220045   | Password123!| limit  | bluSaving    |       5000     | Keluar Aplikasi |
