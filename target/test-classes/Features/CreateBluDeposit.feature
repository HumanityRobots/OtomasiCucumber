Feature: Create BluDeposit

  @CreateBluDeposit
  Scenario Outline: create blu deposit 1
    Given    Login test <pocket> "Create" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
#    And      Cek saldo awal "saldo awal"
#    And      Cek bluaccount sebelum
#    And      Cek riwayat awal
    And      Pockets <pocket>
    And      Berada dihalaman list bluDeposit
#    And      Tambah bludeposit
#    And      Masukkan nama bludeposit <namaBluDeposit>
#    And      Masukkan nominal <nominal> bludeposit
#    And      Tentukan tipe bludeposit <tipeDeposit>
#    And      Tentukan Tenor <tenor>
#    And      Klik tombol buka bludeposit dan klik lanjut
#    And      Berada dihalaman bludeposit dan klik kembali ke daftar bludeposit
#    And      Berada dihalaman list bluDeposit
    And      Klik card bludeposit
    And      Berada dihalaman detail bludeposit
    And      Cek riwayat transaksi bludeposit
    And      Cek saldo akhir "saldo akhir"
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Cek notifikasi
    And      Logout blu <logout>

    Examples:
    | no | nomorHandphone | password     |search |     pocket     | namaBluDeposit  | nominal   | tenor | tipeDeposit | logout                  |
    | 1  | 082211220045   | Password123! | limit |   bluDeposit   |  Bludepsosit 1  | 1000000   |   4   |   ARO+      | Masuk dengan Akun Lain  |