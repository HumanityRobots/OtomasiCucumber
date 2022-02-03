Feature: Close BluGether

  @CloseBluGether
  Scenario Outline: Close BluGether
    Given    Login test <pocket> "Close" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Pockets <pocket>
    And      Berada dihalaman list blugether
    And      Klik card blugether creator

    And      Close blugether
    And      Berada dihalaman berhasil tutup blugether

    And      Berada dihalaman list blugether
    And      Cek saldo akhir "saldo akhir"
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password    |  pocket      |    logout                 |
      | 1  | 082211220027   | Password123!|  bluGether   |    Masuk dengan Akun Lain |