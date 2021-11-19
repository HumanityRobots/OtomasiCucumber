$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UpdateBluSaving.feature");
formatter.feature({
  "line": 2,
  "name": "Update BluSaving",
  "description": "",
  "id": "update-blusaving",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UpdateBluSaving"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "##Scenario 2"
    },
    {
      "line": 5,
      "value": "#  @BluSavingRegression"
    },
    {
      "line": 6,
      "value": "#  Scenario Outline: Update Detail BluSaving"
    },
    {
      "line": 7,
      "value": "#    Given    Login test \u003ctesting\u003e \"Update\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e"
    },
    {
      "line": 8,
      "value": "#    When     Homescreen blu"
    },
    {
      "line": 9,
      "value": "#    And      Cek saldo awal \"saldo awal\""
    },
    {
      "line": 10,
      "value": "#    And      Pockets \u003ctesting\u003e"
    },
    {
      "line": 11,
      "value": "#    And      Klik card blusaving"
    },
    {
      "line": 12,
      "value": "#    And      Klik tombol setting"
    },
    {
      "line": 13,
      "value": "#    And      Klik tombol pengaturan blusaving"
    },
    {
      "line": 14,
      "value": "#    And      Input nama blusaving \u003cnamaBlusaving\u003e"
    },
    {
      "line": 15,
      "value": "#    And      Atur goal \u003caturgoal\u003e isi jumlah goal \u003cjumlahAturGoal\u003e dan tanggal pencapaian \u003ctanggal\u003e"
    },
    {
      "line": 16,
      "value": "#    And      Atur frekuensi \u003caturdebit\u003e pilih frekuensi \u003cfrekuensiDebit\u003e dan Atur jumlah debit \u003caturJumlahDebit\u003e isi jumlah debit \u003cjumlahDebit\u003e"
    },
    {
      "line": 17,
      "value": "#    And      Klik tombol simpan update blusaving"
    },
    {
      "line": 18,
      "value": "#    And      Berada dihalaman detail blusaving baru"
    },
    {
      "line": 19,
      "value": "#    And      Berada dihalaman list blusaving baru"
    },
    {
      "line": 20,
      "value": "#    And      Cek saldo akhir \"saldo akhir\""
    },
    {
      "line": 21,
      "value": "#    And      Logout blu \u003clogout\u003e"
    },
    {
      "line": 22,
      "value": "##        Then     Check saldo awal berkurang, limit awal berkurang"
    },
    {
      "line": 23,
      "value": "#"
    },
    {
      "line": 24,
      "value": "#    Examples:"
    },
    {
      "line": 25,
      "value": "#      | no | nomorHandphone | password    | testing      |   namaBlusaving      |  aturgoal | aturdebit |  jumlahAturGoal |    tanggal    | frekuensiDebit |  aturJumlahDebit |     jumlahDebit       | logout                 |"
    },
    {
      "line": 26,
      "value": "#      | 1  | 082211220045   | Password123!| bluSaving    |   Sepatu Vans        |     1     |    1      |    110000       |       1       |        1       |       1          |       10000          | Masuk dengan Akun Lain |"
    }
  ],
  "line": 30,
  "name": "Update Teman Blusaving",
  "description": "",
  "id": "update-blusaving;update-teman-blusaving",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Login test \u003ctesting\u003e \"Update\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Pockets \u003ctesting\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Klik tombol setting",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Klik tombol undang teman blugether",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Berada dihalaman tambah teman",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Cari teman yang akan ditambahkan \u003cnomorRekening\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Klik tombol undang",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Berada dihalaman berhasil tambahkan teman",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Berada dihalaman detail blugether update",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "update-blusaving;update-teman-blusaving;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "testing",
        "nomorRekening",
        "logout"
      ],
      "line": 50,
      "id": "update-blusaving;update-teman-blusaving;;1"
    },
    {
      "cells": [
        "2",
        "082211220045",
        "Password123!",
        "bluSaving",
        "000000004373",
        "Masuk dengan Akun Lain"
      ],
      "line": 51,
      "id": "update-blusaving;update-teman-blusaving;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 51,
  "name": "Update Teman Blusaving",
  "description": "",
  "id": "update-blusaving;update-teman-blusaving;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@UpdateBluSaving"
    },
    {
      "line": 29,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Login test bluSaving \"Update\" no - 2 blu nomor 082211220045 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Klik tombol setting",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Klik tombol undang teman blugether",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Berada dihalaman tambah teman",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Cari teman yang akan ditambahkan 000000004373",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Klik tombol undang",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Berada dihalaman berhasil tambahkan teman",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Berada dihalaman detail blugether update",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "bluSaving",
      "offset": 11
    },
    {
      "val": "Update",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 35
    },
    {
      "val": "082211220045",
      "offset": 47
    },
    {
      "val": "Password123!",
      "offset": 73
    }
  ],
  "location": "Keyword.loginBlu(String,String,String,String,String)"
});
formatter.result({
  "duration": 49013489300,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 20191168300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saldo awal",
      "offset": 16
    }
  ],
  "location": "Keyword.cek_saldo_awal(String)"
});
formatter.result({
  "duration": 4063772500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bluSaving",
      "offset": 8
    }
  ],
  "location": "Keyword.pockets(String)"
});
formatter.result({
  "duration": 6681625300,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 1569289600,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_tombol_setting()"
});
formatter.result({
  "duration": 4559062300,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.klik_tombol_undang_teman_blugether()"
});
formatter.result({
  "duration": 8883420900,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_tambah_teman()"
});
formatter.result({
  "duration": 8474113200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "000000004373",
      "offset": 33
    }
  ],
  "location": "BluSaving.cari_teman_yang_akan_ditambahkan(String)"
});
formatter.result({
  "duration": 5227786200,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.klik_tombol_undang()"
});
formatter.result({
  "duration": 11092912700,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_tambahkan_teman()"
});
formatter.result({
  "duration": 9947089300,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_detail_blugether_update()"
});
formatter.result({
  "duration": 12865463900,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 7805918000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saldo akhir",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_saldo_akhir(String)"
});
formatter.result({
  "duration": 25333294700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masuk dengan Akun Lain",
      "offset": 11
    }
  ],
  "location": "Keyword.logout_blu(String)"
});
formatter.result({
  "duration": 15336555000,
  "status": "passed"
});
});