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
      "line": 3,
      "value": "#Scenario 2"
    }
  ],
  "line": 5,
  "name": "Update Detail BluSaving",
  "description": "",
  "id": "update-blusaving;update-detail-blusaving",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Login test \u003ctesting\u003e \"Update\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Pockets \u003ctesting\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Klik tombol setting",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Klik tombol pengaturan blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Lakukan update \u003cupdate\u003e saat update detail input nama \u003cnamaBlusaving\u003e Atur goal baru \u003caturgoal\u003e jumlah atur goal \u003cjumlahAturGoal\u003e tanggal pencapaian \u003ctanggal\u003e Atur debit \u003caturdebit\u003e atur frekuensi \u003cfrekuensiDebit\u003e atur jumlah yang didebit \u003caturJumlahDebit\u003e \u003cjumlahDebit\u003e kalau update teman input nomor rekening \u003cnomorRekening\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "#        Then     Check saldo awal berkurang, limit awal berkurang"
    }
  ],
  "line": 18,
  "name": "",
  "description": "",
  "id": "update-blusaving;update-detail-blusaving;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "testing",
        "update",
        "namaBlusaving",
        "nomorRekening",
        "aturgoal",
        "aturdebit",
        "jumlahAturGoal",
        "tanggal",
        "frekuensiDebit",
        "aturJumlahDebit",
        "jumlahDebit",
        "logout"
      ],
      "line": 19,
      "id": "update-blusaving;update-detail-blusaving;;1"
    },
    {
      "cells": [
        "1",
        "082211220045",
        "Password123!",
        "bluSaving",
        "Detail",
        "Sepatu Vans",
        "",
        "1",
        "1",
        "100000",
        "1",
        "1",
        "1",
        "1000",
        "Masuk dengan Akun Lain"
      ],
      "line": 20,
      "id": "update-blusaving;update-detail-blusaving;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Update Detail BluSaving",
  "description": "",
  "id": "update-blusaving;update-detail-blusaving;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@UpdateBluSaving"
    },
    {
      "line": 4,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Login test bluSaving \"Update\" no - 1 blu nomor 082211220045 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Klik tombol setting",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Klik tombol pengaturan blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Lakukan update Detail saat update detail input nama Sepatu Vans Atur goal baru 1 jumlah atur goal 100000 tanggal pencapaian 1 Atur debit 1 atur frekuensi 1 atur jumlah yang didebit 1 1000 kalau update teman input nomor rekening ",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    14
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
      "val": "1",
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
  "duration": 47439588100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 6759577800,
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
  "duration": 4117798400,
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
  "duration": 6672149400,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 1518065200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_tombol_setting()"
});
formatter.result({
  "duration": 4800967000,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.klik_tombol_pengaturn_blusaving()"
});
formatter.result({
  "duration": 4446470100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Detail",
      "offset": 15
    },
    {
      "val": "Sepatu Vans",
      "offset": 52
    },
    {
      "val": "1",
      "offset": 79
    },
    {
      "val": "100000",
      "offset": 98
    },
    {
      "val": "1",
      "offset": 124
    },
    {
      "val": "1",
      "offset": 137
    },
    {
      "val": "1",
      "offset": 154
    },
    {
      "val": "1",
      "offset": 181
    },
    {
      "val": "1000",
      "offset": 183
    },
    {
      "val": "",
      "offset": 228
    }
  ],
  "location": "BluSaving.lakukan_update_saat_update_detail_input_nama_atur_goal_baru_jumlah_atur_goal_tanggal_pencapaian_atur_debit_atur_frekuensi_atur_jumlah_yang_didebit_kalau_update_teman_input_nomor_rekening(String,String,int,String,int,int,int,int,String,String)"
});
formatter.result({
  "duration": 64400138900,
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
  "duration": 5252992200,
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
  "duration": 16558851200,
  "status": "passed"
});
});