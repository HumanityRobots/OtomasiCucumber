Feature: Tambah Dana BluSaving

  @TambahDanaBluSaving
  Scenario Outline: Tambah Dana BluSaving
    Given    Login test <testing> "Tambah dana" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek limit <search> "limit awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal
    And      Pockets <testing>
    And      Berada dihalaman list blusaving
    And      Klik card blusaving
    And      Klik tombol tambah dana <testing>
    And      Input jumlah tambah dana <jumlahTambahDana>
    And      Berada dihalaman konfirmasi tambah dana
    And      Berada dihalaman berhasil tambah dana
    And      Berada dihalaman detail blusaving
    And      Cek riwayat transaksi blusaving
    And      Cek saldo akhir "saldo akhir"
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Cek notifikasi
    And      Cek limit <search> "limit akhir"
    And      Logout blu <logout>
#    Then     Check saldo awal berkurang, limit awal berkurang

    Examples:
      | no | nomorHandphone | password    | search | testing      |  namaBlusaving |  jumlahTambahDana | logout          |
      | 1  | 082211220027   | Password123!| limit  | bluSaving    |   Blusaving 1  |        100000     | Keluar Aplikasi |

#  @TambahDanaBluSaving
#  Scenario Outline: Tambah Dana BluSaving as creator
#    Given    Login test <testing> "Tambah dana" no - <no> blu nomor <nomorHandphone> dan password <password>
#    When     Homescreen blu
#    And      Cek saldo awal "saldo awal"
#    And      Cek limit <search> "limit awal"
#    And      Cek bluaccount sebelum
#    And      Cek riwayat awal
#    And      Pockets <testing>
#    And      Berada dihalaman list blugether
#    And      Klik card blugether as creator
#    And      Klik tombol tambah dana <testing>
#    And      Input jumlah tambah dana <jumlahTambahDana>
#    And      Berada dihalaman konfirmasi tambah dana
#    And      Berada dihalaman berhasil tambah dana
#    And      Berada dihalaman detail blugether
#    And      Cek riwayat transaksi blugether
#    And      Cek saldo akhir "saldo akhir"
#    And      Cek bluaccount akhir
#    And      Cek riwayat akhir
#    And      Cek notifikasi
#    And      Cek limit <search> "limit akhir"
#    And      Logout blu <logout>
##    Then     Check saldo awal berkurang, limit awal berkurang
#
#    Examples:
#      | no | nomorHandphone | password    | search | testing      |  namaBlusaving |  jumlahTambahDana | logout          |
#      | 2  | 082211220051   | Password123!| limit  | bluGether    |   Blusaving 2  |        100000     | Keluar Aplikasi |
#
##  @TambahDanaBluSaving
#  Scenario Outline: Tambah Dana BluSaving as Member
#    Given    Login test <testing> "Tambah dana" no - <no> blu nomor <nomorHandphone> dan password <password>
#    When     Homescreen blu
##    And      Cek saldo awal "saldo awal"
##    And      Cek limit <search> "limit awal"
##    And      Cek bluaccount sebelum
##    And      Cek riwayat awal
#    And      Pockets <testing>
#    And      Berada dihalaman list blugether
#    And      Klik card blugether as member
#    And      Klik tombol tambah dana <testing>
#    And      Input jumlah tambah dana <jumlahTambahDana>
#    And      Berada dihalaman konfirmasi tambah dana
#    And      Masukkan pin <pin>
#    And      Berada dihalaman berhasil tambah dana
#    And      Berada dihalaman detail blugether
#    And      Cek riwayat transaksi blugether
##    And      Cek saldo akhir "saldo akhir"
##    And      Cek notifikasi
##    And      Cek bluaccount akhir
##    And      Cek riwayat akhir
##    And      Cek limit <search> "limit akhir"
#    And      Logout blu <logout>
##    Then     Check saldo awal berkurang, limit awal berkurang
#
#    Examples:
#      | no | nomorHandphone | password    | search | testing      |  namaBlusaving |  jumlahTambahDana |  pin    | logout          |
#      | 3  | 082211220027   | Password123!| limit  | bluGether    |   Blusaving 3  |        100000     |  183456 | Keluar Aplikasi |