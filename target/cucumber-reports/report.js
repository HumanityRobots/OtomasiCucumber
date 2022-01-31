$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CloseBluGether.feature");
formatter.feature({
  "line": 1,
  "name": "Close BluGether",
  "description": "",
  "id": "close-blugether",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Close BluGether",
  "description": "",
  "id": "close-blugether;close-blugether",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CloseBluGether"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test \u003cpocket\u003e \"Close\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Pockets \u003cpocket\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Klik card blugether creator",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Close blugether",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Berada dihalaman berhasil tutup blugether",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "close-blugether;close-blugether;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "pocket",
        "namaBluGether",
        "goal",
        "aturJumlahGoal",
        "tanggalPencapaian",
        "daftarTeman",
        "noRekUndangan",
        "logout"
      ],
      "line": 20,
      "id": "close-blugether;close-blugether;;1"
    },
    {
      "cells": [
        "1",
        "082211220027",
        "Password123!",
        "bluGether",
        "Blugether 2",
        "ya",
        "100000",
        "",
        "ya",
        "000000002983",
        "Masuk dengan Akun Lain"
      ],
      "line": 21,
      "id": "close-blugether;close-blugether;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Close BluGether",
  "description": "",
  "id": "close-blugether;close-blugether;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CloseBluGether"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test bluGether \"Close\" no - 1 blu nomor 082211220027 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Pockets bluGether",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Klik card blugether creator",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Close blugether",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Berada dihalaman berhasil tutup blugether",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "bluGether",
      "offset": 11
    },
    {
      "val": "Close",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "082211220027",
      "offset": 46
    },
    {
      "val": "Password123!",
      "offset": 72
    }
  ],
  "location": "Keyword.loginBlu(String,String,String,String,String)"
});
formatter.result({
  "duration": 51778566400,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 11647130500,
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
  "duration": 7809438800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bluGether",
      "offset": 8
    }
  ],
  "location": "Keyword.pockets(String)"
});
formatter.result({
  "duration": 8925452000,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 4266966400,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_card_blugether_creator()"
});
formatter.result({
  "duration": 335867800,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.close_blugether()"
});
formatter.result({
  "duration": 32115221000,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_berhasil_tutup_blugether()"
});
formatter.result({
  "duration": 38088548800,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 2894718600,
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
  "duration": 10069607400,
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
  "duration": 16108041400,
  "status": "passed"
});
});