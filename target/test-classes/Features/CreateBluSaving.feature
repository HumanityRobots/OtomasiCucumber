@CreateBluSaving
Feature: Create BluSaving
  @BluSavingRegression
  Scenario Outline: Create BluSaving
    Given    Login test <testing> "Create" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek limit <search> "limit awal"
    And      Cek bluaccount sebelum
#    And      Cek riwayat awal

    And      Pockets <testing>
    And      Berada dihalaman list blusaving
    And      Tambah blusaving
    And      Input nama <namaBlusaving> dan setoran awal <setoranAwal>
    And      Atur Goal <jumlahAturGoal> dan tanggal <tanggal>
    And      Atur autodebit <FrekuensiDebit> dan jumlah debit <JumlahAutoDebit> # progress
    And      Berada dihalaman berhasil membuat blusaving
    And      Berada dihalaman list blusaving
    And      Klik card blusaving
    And      Cek riwayat transaksi blusaving

    And      Cek saldo akhir "saldo akhir"
#    And      Cek notifikasi
    And      Cek bluaccount akhir
#    And      Cek riwayat akhir
    And      Cek limit <search> "limit akhir"
    And      Logout blu <logout>
#    Then     Check saldo awal berkurang, limit awal berkurang
#    Then     Check Bukti transaksi,Mutasi, notifikasi

    Examples:
      | no | nomorHandphone | password    | search | testing      | namaBlusaving | setoranAwal | jumlahAturGoal|    tanggal    | FrekuensiDebit | JumlahAutoDebit | logout                 |
      | 1  | 082211220045   | Password123!| limit  | bluSaving    | Blusaving 1   | 100000      |    1000000    |       1       |       0        |      0          | Masuk dengan Akun Lain |
      | 2  | 082211220045   | Password123!| limit  | bluSaving    | Blusaving 2   | 60000       |      0        |       0       |       1        |    100000       | Masuk dengan Akun Lain |
      | 3  | 082211220045   | Password123!| limit  | bluSaving    | Blusaving 3   | 10000       |    100000     |       0       |       0        |    100000       | Keluar Aplikasi |



#      | 3  | 082211220045   | Password123!| limit  | bluSaving    | Blusaving 3   | 0           |      Y        |       N       |       N        |    100000       | Keluar Aplikasi |
#      | 4  | 082211220045   | Password123!| limit  | bluSaving    | Blusaving 4   | 0           |      N        |       Y       |     1     |      0          | Keluar Aplikasi |
#      | 5  | 082211220045   | Password123!| limit  | bluSaving    | Blusaving 5   | 0           |      Y        |       N       |      1    |    10000        | Keluar Aplikasi |