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
    And      <no> Lakukan update <update> saat update detail input nama <namaBlusaving> Atur goal baru <aturgoal> jumlah atur goal <jumlahAturGoal> tanggal pencapaian <tanggal> Atur debit <aturdebit> atur frekuensi <frekuensiDebit> atur jumlah yang didebit <aturJumlahDebit> <jumlahDebit> kalau update teman input nomor rekening <nomorRekening>
    And      Cek saldo akhir "saldo akhir"
    And      Logout blu <logout>
#        Then     Check saldo awal berkurang, limit awal berkurang

    Examples:
      | no | nomorHandphone | password    | testing      | update  |  namaBlusaving      | nomorRekening | aturgoal | aturdebit |  jumlahAturGoal |    tanggal    | frekuensiDebit |  aturJumlahDebit |     jumlahDebit       | logout                 |
      | 1  | 082211220045   | Password123!| bluSaving    | Detail  |  Sepatu Vans        |               |    1     |    1      |    100000       |       1       |        1       |       1          |       1000          | Masuk dengan Akun Lain |
#      | 2  | 082211220045   | Password123!| bluSaving    | Teman   |                     | 000000004373  |          |           |    100000       |       0       |        0       |       0          |                       | Masuk dengan Akun Lain |

  @BluSavingRegression
  Scenario Outline: Update Teman Blusaving
    Given    Login test <testing> "Update" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Pockets <testing>
    And      Klik card blusaving
    And      Klik tombol setting
    And      <no> Lakukan update <update> saat update detail input nama <namaBlusaving> Atur goal baru <aturgoal> jumlah atur goal <jumlahAturGoal> tanggal pencapaian <tanggal> Atur debit <aturdebit> atur frekuensi <frekuensiDebit> atur jumlah yang didebit <aturJumlahDebit> <jumlahDebit> kalau update teman input nomor rekening <nomorRekening>
    And      Cek saldo akhir "saldo akhir"
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    | testing      | update  |  namaBlusaving      | nomorRekening | aturgoal | aturdebit |  jumlahAturGoal |    tanggal    | frekuensiDebit |  aturJumlahDebit |     jumlahDebit       | logout                 |
#      | 1  | 082211220045   | Password123!| bluSaving    | Detail  |  Sepatu Vans        |               |    1     |    1      |    100000       |       1       |        1       |       1          |       1000          | Masuk dengan Akun Lain |
      | 2  | 082211220045   | Password123!| bluSaving    | Teman   |                     | 000000004373  |          |           |    100000       |       0       |        0       |       0          |                       | Masuk dengan Akun Lain |

