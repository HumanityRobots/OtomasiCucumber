$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateBluDeposit.feature");
formatter.feature({
  "line": 1,
  "name": "Create BluDeposit",
  "description": "",
  "id": "create-bludeposit",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "create blu deposit 1",
  "description": "",
  "id": "create-bludeposit;create-blu-deposit-1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CreateBluDeposit"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test \u003cpocket\u003e \"Create\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#    And      Cek saldo awal \"saldo awal\""
    },
    {
      "line": 8,
      "value": "#    And      Cek bluaccount sebelum"
    },
    {
      "line": 9,
      "value": "#    And      Cek riwayat awal"
    }
  ],
  "line": 10,
  "name": "Pockets \u003cpocket\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Berada dihalaman list bluDeposit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Tambah bludeposit",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Masukkan nama bludeposit \u003cnamaBluDeposit\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Masukkan nominal \u003cnominal\u003e bludeposit",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Tentukan tipe bludeposit \u003ctipeDeposit\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "#    And      Tentukan Tenor \u003ctenor\u003e"
    },
    {
      "line": 17,
      "value": "#    And      Klik tombol buka bludeposit dan klik lanjut"
    },
    {
      "line": 18,
      "value": "#    And      Berada dihalaman bludeposit dan klik kembali ke daftar bludeposit"
    },
    {
      "line": 19,
      "value": "#    And      Berada dihalaman list bluDeposit"
    },
    {
      "line": 20,
      "value": "#    And      Klik card bludeposit"
    },
    {
      "line": 21,
      "value": "#    And      Berada dihalaman detail bludeposit"
    },
    {
      "line": 22,
      "value": "#    And      Cek riwayat transaksi bludeposit"
    },
    {
      "line": 23,
      "value": "#    And      Cek saldo akhir \"saldo akhir\""
    },
    {
      "line": 24,
      "value": "#    And      Cek bluaccount akhir"
    },
    {
      "line": 25,
      "value": "#    And      Cek riwayat akhir"
    },
    {
      "line": 26,
      "value": "#    And      Cek notifikasi"
    },
    {
      "line": 27,
      "value": "#    And      Logout blu \u003clogout\u003e"
    }
  ],
  "line": 29,
  "name": "",
  "description": "",
  "id": "create-bludeposit;create-blu-deposit-1;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "pocket",
        "namaBluDeposit",
        "nominal",
        "tenor",
        "tipeDeposit",
        "logout"
      ],
      "line": 30,
      "id": "create-bludeposit;create-blu-deposit-1;;1"
    },
    {
      "cells": [
        "1",
        "082211220045",
        "Password123!",
        "bluDeposit",
        "Bludepsosit 1",
        "1000000",
        "4",
        "ARO+",
        "Masuk dengan Akun Lain"
      ],
      "line": 31,
      "id": "create-bludeposit;create-blu-deposit-1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "create blu deposit 1",
  "description": "",
  "id": "create-bludeposit;create-blu-deposit-1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CreateBluDeposit"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test bluDeposit \"Create\" no - 1 blu nomor 082211220045 dan password Password123!",
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
  "comments": [
    {
      "line": 7,
      "value": "#    And      Cek saldo awal \"saldo awal\""
    },
    {
      "line": 8,
      "value": "#    And      Cek bluaccount sebelum"
    },
    {
      "line": 9,
      "value": "#    And      Cek riwayat awal"
    }
  ],
  "line": 10,
  "name": "Pockets bluDeposit",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Berada dihalaman list bluDeposit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Tambah bludeposit",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Masukkan nama bludeposit Bludepsosit 1",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Masukkan nominal 1000000 bludeposit",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Tentukan tipe bludeposit ARO+",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "bluDeposit",
      "offset": 11
    },
    {
      "val": "Create",
      "offset": 23
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "082211220045",
      "offset": 48
    },
    {
      "val": "Password123!",
      "offset": 74
    }
  ],
  "location": "Keyword.loginBlu(String,String,String,String,String)"
});
formatter.result({
  "duration": 53967727500,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 13225228600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bluDeposit",
      "offset": 8
    }
  ],
  "location": "Keyword.pockets(String)"
});
formatter.result({
  "duration": 11178149500,
  "status": "passed"
});
formatter.match({
  "location": "BluDeposit.berada_dihalaman_list_bludeposit()"
});
formatter.result({
  "duration": 5194710200,
  "status": "passed"
});
formatter.match({
  "location": "BluDeposit.tambah_bludeposit()"
});
formatter.result({
  "duration": 384592600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bludepsosit 1",
      "offset": 25
    }
  ],
  "location": "BluDeposit.masukkan_nama_bludeposit(String)"
});
formatter.result({
  "duration": 5809893600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000000",
      "offset": 17
    }
  ],
  "location": "BluDeposit.masukkan_nominal_bludeposit(String)"
});
formatter.result({
  "duration": 8653808000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ARO+",
      "offset": 25
    }
  ],
  "location": "BluDeposit.tentukan_tipe_bludeposit(String)"
});
formatter.result({
  "duration": 6646379400,
  "status": "passed"
});
});