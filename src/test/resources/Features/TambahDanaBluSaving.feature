@TambahDanaBluSaving
Feature: Tambah Dana BluSaving
  @BluSavingRegression
  Scenario Outline: Tambah Dana BluSaving
    Given    Login test <testing> "Tarik dana" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek limit <search> "limit awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal

    And      Pockets <testing>
    And      Berada dihalaman list blusaving
    And      Klik card blusaving
    And      Klik tombol tambah dana
    And      Input jumlah tambah dana <jumlahTambahDana>
    And      Berada dihalaman konfirmasi tambah dana
    And      Berada dihalaman berhasil tambah dana
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
      | no | nomorHandphone | password    | search | testing      |  namaBlusaving |  jumlahTambahDana | logout          |
      | 1  | 082211220045   | Password123!| limit  | bluSaving    |   Blusaving 1  |        100000     | Keluar Aplikasi |
#      | 2  | 082211220045   | Password123!| limit  | bluSaving    |   Blusaving 2  |        100000     | Keluar Aplikasi |
#      | 3  | 082211220045   | Password123!| limit  | bluSaving    |   Blusaving 3  |        100000     | Keluar Aplikasi |