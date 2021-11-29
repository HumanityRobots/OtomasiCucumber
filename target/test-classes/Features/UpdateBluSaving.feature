@UpdateBluSaving
Feature: Update BluSaving

#Scenario 2
  @BluSavingRegression
  Scenario Outline: Update Detail BluSaving
    Given    Login test <testing> "Update" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Pockets <testing>
    And      Klik card blusaving
    And      Klik tombol setting
    And      Klik tombol pengaturan blusaving
    And      Input nama blusaving <namaBlusaving>
    And      Atur goal <aturgoal> isi jumlah goal <jumlahAturGoal> dan tanggal pencapaian <tanggal>
    And      Atur frekuensi <aturdebit> pilih frekuensi <frekuensiDebit> dan Atur jumlah debit <aturJumlahDebit> isi jumlah debit <jumlahDebit>
    And      Klik tombol simpan update blusaving
    And      Berada dihalaman detail blusaving baru
    And      Berada dihalaman list blusaving baru
    And      Cek saldo akhir "saldo akhir"
    And      Logout blu <logout>
#        Then     Check saldo awal berkurang, limit awal berkurang

    Examples:
      | no | nomorHandphone | password    | testing      |   namaBlusaving      |  aturgoal | aturdebit |  jumlahAturGoal |    tanggal    | frekuensiDebit |  aturJumlahDebit |     jumlahDebit       | logout                 |
      | 1  | 082211220045   | Password123!| bluSaving    |   Sepatu Vans        |     1     |    1      |    110000       |       1       |        1       |       1          |       10000          | Masuk dengan Akun Lain |


  @BluSavingRegression
  Scenario Outline: Update Teman Blusaving
    Given    Login test <testing> "Update" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Pockets <testing>
    And      Klik card blusaving
    And      Klik tombol setting

    And      Klik tombol undang teman blugether
    And      Berada dihalaman tambah teman
    And      Cari teman yang akan ditambahkan <nomorRekening>
    And      Klik tombol undang
    And      Berada dihalaman berhasil tambahkan teman
    And      Berada dihalaman detail blugether update
    And      Berada dihalaman list blugether

    And      Cek saldo akhir "saldo akhir"
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    | testing      | nomorRekening |  logout                 |
      | 2  | 082211220045   | Password123!| bluSaving    | 000000004373  |  Masuk dengan Akun Lain |

