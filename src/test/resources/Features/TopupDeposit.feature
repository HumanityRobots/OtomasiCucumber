Feature: Topup Deposit

  @TopupDeposit
  Scenario Outline: Topup Deposit
    Given    Login test <pocket> "Create" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
#    And      Cek saldo awal "saldo awal"
#    And      Cek bluaccount sebelum
#    And      Cek riwayat awal
    And      Pockets <pocket>
    And      Berada dihalaman list bluDeposit
    And      Klik card bludeposit
    And      Berada dihalaman detail bludeposit

    # progress
    And      Klik topup dana blueposit
    And      Input topup dana <topupdana>
    And      Berada dihalaman berhasil topup dana
    And      Berada dihalaman detail bludeposit
    And      Cek riwayat transaksi bludeposit
    And      Kembali ke halaman list bludeposit

    And      Cek saldo akhir "saldo akhir"
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password     |     pocket     | topupdana      |  logout                   |
      | 1  | 082211220045   | Password123! |   bluDeposit   |  1000000       |  Masuk dengan Akun Lain   |