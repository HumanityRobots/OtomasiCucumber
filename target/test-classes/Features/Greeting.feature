Feature: Test Login Greeting

  @GreetingRegression
  Scenario Outline: Customer Greeting
    Given   Berada dihalaman onboarding
    When    Klik tombol Yuk Mulai
    And     Berada dihalaman nomor telepon
    And     Input nomor handphone dengan nomor <nomor>
    And     Input nomor otp
    And     Berada dihalaman password
    And     Input password <password>
    And     Homescreen blu
    And     Tampil dashboard home
    And     Cek saldo awal "#"
    And     Logout blu <logout>


    Examples:
    | nomor        | password     | logout          |
    | 081211155551 |   Password123! | Keluar Aplikasi |

