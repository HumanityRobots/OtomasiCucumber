$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TambahDanaBluGether.feature");
formatter.feature({
  "line": 1,
  "name": "Tambah Dana BluGether",
  "description": "",
  "id": "tambah-dana-blugether",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Tambah Dana Blugether",
  "description": "",
  "id": "tambah-dana-blugether;tambah-dana-blugether",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TambahDanaBluGether"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test \u003cpocket\u003e \"Tambah Dana\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
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
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Pockets \u003cpocket\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Klik card blugether creator",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Tambah dana blugether",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input nominal tambah dana \u003cjumlahTambahDana\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Berada dihalaman konfirmasi tarik dana atau tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Berada dihalaman berhasil tarik dana atau tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman detail blugether tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "tambah-dana-blugether;tambah-dana-blugether;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "pocket",
        "jumlahTambahDana",
        "logout"
      ],
      "line": 27,
      "id": "tambah-dana-blugether;tambah-dana-blugether;;1"
    },
    {
      "cells": [
        "1",
        "082211220027",
        "Password123!",
        "bluGether",
        "10000",
        "Masuk dengan Akun Lain"
      ],
      "line": 28,
      "id": "tambah-dana-blugether;tambah-dana-blugether;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Tambah Dana Blugether",
  "description": "",
  "id": "tambah-dana-blugether;tambah-dana-blugether;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TambahDanaBluGether"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test bluGether \"Tambah Dana\" no - 1 blu nomor 082211220027 dan password Password123!",
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
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Pockets bluGether",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Klik card blugether creator",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Tambah dana blugether",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input nominal tambah dana 10000",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Berada dihalaman konfirmasi tarik dana atau tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Berada dihalaman berhasil tarik dana atau tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman detail blugether tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    5
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
      "val": "Tambah Dana",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 40
    },
    {
      "val": "082211220027",
      "offset": 52
    },
    {
      "val": "Password123!",
      "offset": 78
    }
  ],
  "location": "Keyword.loginBlu(String,String,String,String,String)"
});
formatter.result({
  "duration": 55100450800,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 14017159200,
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
  "duration": 8618678800,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 10700589500,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_awal()"
});
formatter.result({
  "duration": 13297106400,
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
  "duration": 10280715600,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 4621710400,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_card_blugether_creator()"
});
formatter.result({
  "duration": 416954200,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.tambah_dana_blugether()"
});
formatter.result({
  "duration": 9018144700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 26
    }
  ],
  "location": "BluGether.input_nominal_tambah_dana(String)"
});
formatter.result({
  "duration": 5108026300,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_konfirmasi_tarik_dana_atau_tambah_dana()"
});
formatter.result({
  "duration": 10969927700,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_berhasil_tarik_dana_atau_tambah_dana()"
});
formatter.result({
  "duration": 5809356500,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_detail_blugether_tambah_dana()"
});
formatter.result({
  "duration": 15558976100,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 4371894500,
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
  "duration": 11582765100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 10264065800,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_akhir()"
});
formatter.result({
  "duration": 33834994400,
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
  "duration": 16206061000,
  "status": "passed"
});
});