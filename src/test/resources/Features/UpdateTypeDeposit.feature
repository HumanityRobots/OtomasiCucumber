Feature: Update Type Deposit

  @UpdateTypeDeposit
  Scenario Outline: Update type deposit
    Given    Login test <pocket> "Update" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal
    And      Pockets <pocket>
    And      Berada dihalaman list bluDeposit
    And      Klik card bludeposit
    And      Berada dihalaman detail bludeposit
    And      Cek pengaturan bludeposit
    And      Update type bludeposit <tipeDeposit>
    And      Berada dihalaman detail bludeposit
    And      Cek saldo akhir "saldo akhir"
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Cek notifikasi
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password     |     pocket      |  logout                  |
      | 1  | 082211220027   | Password123! |    bluDeposit   |  Masuk dengan Akun Lain  |