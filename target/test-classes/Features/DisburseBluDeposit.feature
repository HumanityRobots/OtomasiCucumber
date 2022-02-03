Feature: Disburse BluDeposit

  @DisburseBluDeposit
  Scenario Outline: Disburse BluDeposit
    Given    Login test <pocket> "Create" no - <no> blu nomor <nomorHandphone> dan password <password>
    When     Homescreen blu
    And      Cek saldo awal "saldo awal"
    And      Cek limit <search> "limit awal"
    And      Cek bluaccount sebelum
    And      Cek riwayat awal
    And      Pockets <pocket>
    And      Berada dihalaman list bluDeposit
    And      Tambah bludeposit
    And      Masukkan nama bludeposit <namaBluDeposit>
    And      Masukkan nominal <nominal> bludeposit
    And      Klik tombol lanjut
    And      Tentukan tipe bludeposit <tipeDeposit>
    And      Tentukan Tenor <tenor>
    And      Klik tombol bludeposit dan klik lanjut
    And      Berada dihalaman bludeposit dan klik kembali ke daftar bludeposit
    And      Berada dihalaman list bluDeposit
    And      Klik card bludeposit
    And      Berada dihalaman detail bludeposit
    And      Cek riwayat transaksi bludeposit
    And      Cek saldo akhir "saldo akhir"
    And      Cek bluaccount akhir
    And      Cek riwayat akhir
    And      Cek notifikasi
    And      Cek limit <search> "limit akhir"
    And      Logout blu <logout>

    Examples:
      | no | nomorHandphone | password     |search |     pocket     | namaBluDeposit  | nominal | tenor | tipeDeposit | logout |
      | 1  | 082211220045   | Password123! | limit |   bluDeposit   |  Bludepsosit 1  |         |       |             |        |