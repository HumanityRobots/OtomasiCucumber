@CloseBluSaving
Feature: Close BluSaving
  @BluSavingRegression
  Scenario Outline: Close BluSaving
    Given    Login test <testing> "Close" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek limit <search> "limit awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal

    And      Pockets <testing>
    And      Klik card blusaving
    And      Klik tombol setting
    And      Klik tombol tutup blusaving
    And      Berada dihalaman berhasil tutup blusaving
    And      Berada dihalaman list blusaving

    And      Cek saldo akhir "saldo akhir"
    And      Cek notifikasi
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Cek limit <search> "limit akhir"
    And      Logout blu <logout>
#    Then     Check saldo awal berkurang, limit awal berkurang

    Examples:
      | no | nomorHandphone | password    | search | testing      |   logout          |
      | 1  | 082211220045   | Password123!| limit  | bluSaving    |   Keluar Aplikasi |