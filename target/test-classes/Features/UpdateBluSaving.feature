@UpdateBluSaving
Feature: Update BluSaving
#Scenario 2
  @BluSavingRegression
  Scenario Outline: Update BluSaving
    Given    Login test <testing> "Update" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"

    And      Pockets <testing>
    And      Klik card blusaving
    And      Klik tombol setting
    And      Klik tombol pengaturan blusaving
    And      Input nama blusaving baru <namaBlusaving>
    #Progress
    And      Atur goal baru <aturgoal> jumlah atur goal <jumlahAturGoal> tanggal pencapaian <tanggal>
#    And      Atur debit <aturdebit> atur frekuensi <frekuensiDebit> atur jumlah yang didebit <aturJumlahDebit> <jumlahDebit>
    #EndProgress
#    And      Klik tombol simpan
#    And      Halaman detail blusaving


    And      Cek saldo akhir "saldo akhir"W
    And      Logout blu <logout>
    #    Then     Check saldo awal berkurang, limit awal berkurang

    Examples:
      | no | nomorHandphone | password    | testing      | namaBlusaving      | aturgoal | aturdebit |  jumlahAturGoal |    tanggal    | frekuensiDebit |  aturJumlahDebit |     jumlahDebit       | logout                 |
      | 1  | 082211220045   | Password123!| bluSaving    | Blusaving baru 2   |    1     |    1      |    100000       |       1       |        0       |       0          |       100000           | Masuk dengan Akun Lain |
#      | 2  | 082211220045   | Password123!| bluSaving    |                    |    N     |           |100000     |       N       |        N       |       N     | Masuk dengan Akun Lain |