Feature: Update BluGether

  @UpdateBluGether
  Scenario Outline: Update BluGether tambah teman
    Given    Login test <pocket> "Update" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Pockets <pocket>
    And      Berada dihalaman list blugether
    And      Klik card blugether creator

    And      Update blugether
    And      Update nama <namaBluGether> blugether
    And      Update daftar teman <daftarTeman> dengan norek <noRekUndangan>
    And      Update atur goal <goal> dan tambah jumlah goal <aturJumlahGoal> dan tanggal pencapaian <tanggalPencapaian>
    And      Klik tombol simpan
    And      Berada dihalaman update detail blugether
    And      Berada dihalaman update list blugether

    And      Cek saldo akhir "saldo akhir"
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    |  pocket      | namaBluGether   |   goal   | aturJumlahGoal | tanggalPencapaian | daftarTeman  |  noRekUndangan  |   logout                 |
      | 1  | 082211220027   | Password123!|  bluGether   | Blugether 2     |    ya    |   100000       |                   |     ya       |   000000002983  |   Masuk dengan Akun Lain |

  @UpdateBluGether
  Scenario Outline: Update BluGether
    Given    Login test <pocket> "Update" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Pockets <pocket>
    And      Berada dihalaman list blugether
    And      Klik card blugether creator

    And      Update blugether
    And      Update nama <namaBluGether> blugether
    And      Update daftar teman <daftarTeman> dengan norek <noRekUndangan>
    And      Update atur goal <goal> dan tambah jumlah goal <aturJumlahGoal> dan tanggal pencapaian <tanggalPencapaian>
    And      Klik tombol simpan
    And      Berada dihalaman update detail blugether
    And      Berada dihalaman update list blugether

    And      Cek saldo akhir "saldo akhir"
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    |  pocket      | namaBluGether   |   goal   | aturJumlahGoal | tanggalPencapaian | daftarTeman  |  noRekUndangan  |   logout                 |
      | 2  | 082211220027   | Password123!|  bluGether   | Blugether 3     |    ya    |   150000       |                   |    tidak     |   000000002983  |   Masuk dengan Akun Lain |