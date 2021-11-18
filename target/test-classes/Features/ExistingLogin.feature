Feature: Existing Login

  @ExistingLogin
  Scenario Outline: Existing Login
    Given Login test <testing> "Create" no - <no> blu nomor <nomorHandphone> dan password <password>
    When  Homescreen blu
    And   Cek saldo awal
    And   Keluar Aplikasi <logout>
    Then  Berada dihalaman existing login <password>
    And   Homescreen blu
    And   Cek saldo awal
    And   Keluar Aplikasi <logout>

    Examples:
    | no | testing        | nomorHandphone | password       | logout            |
    | 1  | Existing login | 082211220045   | Password123!   | Keluar Aplikasi   |