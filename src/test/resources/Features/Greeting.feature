@Greeting
Feature: Test Login Greeting

  @GreetingRegression
  Scenario: Customer Greeting
    Given   Berada dihalaman onboarding
    When    Klik tombol Yuk Mulai
    Then    Tampil layar input nomor handphone

  @GreetingRegression
  Scenario Outline: Input nomor handphone
    Given   Berada dihalaman nomor telepon
    When    Input nomor handphone dengan nomor <nomor>
    And     Input nomor otp
    Then    Tampil customer greeting

    Examples:
    | nomor        |
    | 081211155551 |

  @GreetingRegression
  Scenario Outline: Input Password
    Given   Berada dihalaman password
    When    Input password <password>
    And     Homescreen blu
    Then    Tampil dashboard home
    And     Cek saldo awal
    And     Keluar Aplikasi <logout>

    Examples:
    | password     | logout          |
    | Password123! | Keluar Aplikasi |