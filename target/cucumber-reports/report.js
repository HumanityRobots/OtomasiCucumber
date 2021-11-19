$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateBluSaving.feature");
formatter.feature({
  "line": 3,
  "name": "Create BluSaving",
  "description": "",
  "id": "create-blusaving",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Create Blusaving 1",
  "description": "",
  "id": "create-blusaving;create-blusaving-1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Login test \u003ctesting\u003e \"Create\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Cek limit \u003csearch\u003e \"limit awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Pockets \u003ctesting\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input nama \u003cnamaBlusaving\u003e dan setoran awal \u003csetoranAwal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Atur Goal \u003cjumlahAturGoal\u003e dan tanggal \u003ctanggal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Atur autodebit \u003cFrekuensiDebit\u003e dan \u003cAturJumlahDebit\u003e jumlah debit \u003cJumlahAutoDebit\u003e # progress",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Cek limit \u003csearch\u003e \"limit akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 29,
      "value": "#    Then     Check saldo awal berkurang, limit awal berkurang"
    },
    {
      "line": 30,
      "value": "#    Then     Check Bukti transaksi,Mutasi, notifikasi"
    }
  ],
  "line": 32,
  "name": "",
  "description": "",
  "id": "create-blusaving;create-blusaving-1;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "search",
        "testing",
        "namaBlusaving",
        "setoranAwal",
        "jumlahAturGoal",
        "tanggal",
        "FrekuensiDebit",
        "AturJumlahDebit",
        "JumlahAutoDebit",
        "logout"
      ],
      "line": 33,
      "id": "create-blusaving;create-blusaving-1;;1"
    },
    {
      "cells": [
        "1",
        "082211220045",
        "Password123!",
        "limit",
        "bluSaving",
        "Blusaving 1",
        "100000",
        "1000000",
        "1",
        "1",
        "0",
        "0",
        "Masuk dengan Akun Lain"
      ],
      "line": 34,
      "id": "create-blusaving;create-blusaving-1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Create Blusaving 1",
  "description": "",
  "id": "create-blusaving;create-blusaving-1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    },
    {
      "line": 5,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Login test bluSaving \"Create\" no - 1 blu nomor 082211220045 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input nama Blusaving 1 dan setoran awal 100000",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Atur Goal 1000000 dan tanggal 1",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Atur autodebit 1 dan 0 jumlah debit 0 # progress",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Cek limit limit \"limit akhir\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    12
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
      "val": "Create",
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
  "duration": 148260467400,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 4790850900,
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
  "duration": 4321037000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit",
      "offset": 10
    },
    {
      "val": "limit awal",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_limit_awal(String,String)"
});
formatter.result({
  "duration": 23018925800,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 10978517500,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_awal()"
});
formatter.result({
  "duration": 12945192600,
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
  "duration": 5135564900,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4537198300,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 321206400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blusaving 1",
      "offset": 11
    },
    {
      "val": "100000",
      "offset": 40
    }
  ],
  "location": "BluSaving.inputNamaSetoranAwal(String,String)"
});
formatter.result({
  "duration": 12647282600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000000",
      "offset": 10
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "BluSaving.aturGoal(String,int)"
});
formatter.result({
  "duration": 21105177800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "0",
      "offset": 21
    },
    {
      "val": "0 # progress",
      "offset": 36
    }
  ],
  "location": "BluSaving.atur_autodebit(int,int,String)"
});
formatter.result({
  "duration": 13310800700,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 79892661600,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3324810400,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 364716100,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 16390257100,
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
  "duration": 14130878200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_notifikasi()"
});
formatter.result({
  "duration": 33931712600,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 10657008100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_akhir()"
});
formatter.result({
  "duration": 43673390800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit",
      "offset": 10
    },
    {
      "val": "limit akhir",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_limit_awal(String,String)"
});
formatter.result({
  "duration": 23864747800,
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
  "duration": 16776817900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Create Blusaving 2",
  "description": "",
  "id": "create-blusaving;create-blusaving-2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Login test \u003ctesting\u003e \"Create\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Cek limit \u003csearch\u003e \"limit awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Pockets \u003ctesting\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Input nama \u003cnamaBlusaving\u003e dan setoran awal \u003csetoranAwal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Atur Goal \u003cjumlahAturGoal\u003e dan tanggal \u003ctanggal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Atur autodebit \u003cFrekuensiDebit\u003e dan \u003cAturJumlahDebit\u003e jumlah debit \u003cJumlahAutoDebit\u003e # progress",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Cek limit \u003csearch\u003e \"limit akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 61,
      "value": "#    Then     Check saldo awal berkurang, limit awal berkurang"
    },
    {
      "line": 62,
      "value": "#    Then     Check Bukti transaksi,Mutasi, notifikasi"
    }
  ],
  "line": 64,
  "name": "",
  "description": "",
  "id": "create-blusaving;create-blusaving-2;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "search",
        "testing",
        "namaBlusaving",
        "setoranAwal",
        "jumlahAturGoal",
        "tanggal",
        "FrekuensiDebit",
        "AturJumlahDebit",
        "JumlahAutoDebit",
        "logout"
      ],
      "line": 65,
      "id": "create-blusaving;create-blusaving-2;;1"
    },
    {
      "cells": [
        "2",
        "082211220045",
        "Password123!",
        "limit",
        "bluSaving",
        "Blusaving 2",
        "6000",
        "1500000",
        "1",
        "1",
        "1",
        "0",
        "Masuk dengan Akun Lain"
      ],
      "line": 66,
      "id": "create-blusaving;create-blusaving-2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 66,
  "name": "Create Blusaving 2",
  "description": "",
  "id": "create-blusaving;create-blusaving-2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    },
    {
      "line": 37,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Login test bluSaving \"Create\" no - 2 blu nomor 082211220045 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Input nama Blusaving 2 dan setoran awal 6000",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Atur Goal 1500000 dan tanggal 1",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Atur autodebit 1 dan 1 jumlah debit 0 # progress",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Cek limit limit \"limit akhir\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    12
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
      "val": "Create",
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
  "duration": 71647858100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 4802354300,
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
  "duration": 4668317500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit",
      "offset": 10
    },
    {
      "val": "limit awal",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_limit_awal(String,String)"
});
formatter.result({
  "duration": 21432980600,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 11191971900,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_awal()"
});
formatter.result({
  "duration": 13936584800,
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
  "duration": 5826644500,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4619792100,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 743027300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blusaving 2",
      "offset": 11
    },
    {
      "val": "6000",
      "offset": 40
    }
  ],
  "location": "BluSaving.inputNamaSetoranAwal(String,String)"
});
formatter.result({
  "duration": 12438482700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500000",
      "offset": 10
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "BluSaving.aturGoal(String,int)"
});
formatter.result({
  "duration": 20630318800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "0 # progress",
      "offset": 36
    }
  ],
  "location": "BluSaving.atur_autodebit(int,int,String)"
});
formatter.result({
  "duration": 15661251200,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 83352617900,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3453267900,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 824592900,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 16215719700,
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
  "duration": 14174715400,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_notifikasi()"
});
formatter.result({
  "duration": 34051171100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 10627030700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_akhir()"
});
formatter.result({
  "duration": 43633843500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit",
      "offset": 10
    },
    {
      "val": "limit akhir",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_limit_awal(String,String)"
});
formatter.result({
  "duration": 22649958300,
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
  "duration": 19444477500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 69,
  "name": "Create BluSaving No Autodebet",
  "description": "",
  "id": "create-blusaving;create-blusaving-no-autodebet",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 68,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "Login test \u003ctesting\u003e \"Create\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Cek limit \u003csearch\u003e \"limit awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Pockets \u003ctesting\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Input nama \u003cnamaBlusaving\u003e dan setoran awal \u003csetoranAwal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Atur Goal \u003cjumlahAturGoal\u003e dan tanggal \u003ctanggal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Atur autodebit \u003cFrekuensiDebit\u003e dan \u003cAturJumlahDebit\u003e jumlah debit \u003cJumlahAutoDebit\u003e # progress",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Cek limit \u003csearch\u003e \"limit akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 92,
      "value": "#    Then     Check saldo awal berkurang, limit awal berkurang"
    },
    {
      "line": 93,
      "value": "#    Then     Check Bukti transaksi,Mutasi, notifikasi"
    }
  ],
  "line": 95,
  "name": "",
  "description": "",
  "id": "create-blusaving;create-blusaving-no-autodebet;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "search",
        "testing",
        "namaBlusaving",
        "setoranAwal",
        "jumlahAturGoal",
        "tanggal",
        "FrekuensiDebit",
        "AturJumlahDebit",
        "JumlahAutoDebit",
        "logout"
      ],
      "line": 96,
      "id": "create-blusaving;create-blusaving-no-autodebet;;1"
    },
    {
      "cells": [
        "3",
        "082211220045",
        "Password123!",
        "limit",
        "bluSaving",
        "No Autodebet",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "Masuk dengan Akun Lain"
      ],
      "line": 97,
      "id": "create-blusaving;create-blusaving-no-autodebet;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 97,
  "name": "Create BluSaving No Autodebet",
  "description": "",
  "id": "create-blusaving;create-blusaving-no-autodebet;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    },
    {
      "line": 68,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "Login test bluSaving \"Create\" no - 3 blu nomor 082211220045 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Input nama No Autodebet dan setoran awal 0",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Atur Goal 0 dan tanggal 0",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Atur autodebit 0 dan 0 jumlah debit 0 # progress",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Cek limit limit \"limit akhir\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    12
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
      "val": "Create",
      "offset": 22
    },
    {
      "val": "3",
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
  "duration": 90369931100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 5313021200,
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
  "duration": 4731781600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit",
      "offset": 10
    },
    {
      "val": "limit awal",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_limit_awal(String,String)"
});
formatter.result({
  "duration": 20755099500,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 10169565200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_awal()"
});
formatter.result({
  "duration": 13038565700,
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
  "duration": 5236460300,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4636343200,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 357883500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Autodebet",
      "offset": 11
    },
    {
      "val": "0",
      "offset": 41
    }
  ],
  "location": "BluSaving.inputNamaSetoranAwal(String,String)"
});
formatter.result({
  "duration": 12905196000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 10
    },
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "BluSaving.aturGoal(String,int)"
});
formatter.result({
  "duration": 14533531600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 15
    },
    {
      "val": "0",
      "offset": 21
    },
    {
      "val": "0 # progress",
      "offset": 36
    }
  ],
  "location": "BluSaving.atur_autodebit(int,int,String)"
});
formatter.result({
  "duration": 5066945800,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 49383903600,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3278152700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 360276200,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 16668430700,
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
  "duration": 13976707700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_notifikasi()"
});
formatter.result({
  "duration": 34407184200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 10965546200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_akhir()"
});
formatter.result({
  "duration": 42541087100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit",
      "offset": 10
    },
    {
      "val": "limit akhir",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_limit_awal(String,String)"
});
formatter.result({
  "duration": 21048291800,
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
  "duration": 15325647900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 100,
  "name": "Create BluSaving AutoDebet Nominal",
  "description": "",
  "id": "create-blusaving;create-blusaving-autodebet-nominal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "Login test \u003ctesting\u003e \"Create\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "Cek limit \u003csearch\u003e \"limit awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Pockets \u003ctesting\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Input nama \u003cnamaBlusaving\u003e dan setoran awal \u003csetoranAwal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Atur Goal \u003cjumlahAturGoal\u003e dan tanggal \u003ctanggal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Atur autodebit \u003cFrekuensiDebit\u003e dan \u003cAturJumlahDebit\u003e jumlah debit \u003cJumlahAutoDebit\u003e # progress",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "Cek limit \u003csearch\u003e \"limit akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 123,
      "value": "#    Then     Check saldo awal berkurang, limit awal berkurang"
    },
    {
      "line": 124,
      "value": "#    Then     Check Bukti transaksi,Mutasi, notifikasi"
    }
  ],
  "line": 126,
  "name": "",
  "description": "",
  "id": "create-blusaving;create-blusaving-autodebet-nominal;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "search",
        "testing",
        "namaBlusaving",
        "setoranAwal",
        "jumlahAturGoal",
        "tanggal",
        "FrekuensiDebit",
        "AturJumlahDebit",
        "JumlahAutoDebit",
        "logout"
      ],
      "line": 127,
      "id": "create-blusaving;create-blusaving-autodebet-nominal;;1"
    },
    {
      "cells": [
        "4",
        "082211220045",
        "Password123!",
        "limit",
        "bluSaving",
        "AutoDebet Nominal",
        "0",
        "40000",
        "0",
        "1",
        "1",
        "10000",
        "Masuk dengan Akun Lain"
      ],
      "line": 128,
      "id": "create-blusaving;create-blusaving-autodebet-nominal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 128,
  "name": "Create BluSaving AutoDebet Nominal",
  "description": "",
  "id": "create-blusaving;create-blusaving-autodebet-nominal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    },
    {
      "line": 99,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "Login test bluSaving \"Create\" no - 4 blu nomor 082211220045 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Input nama AutoDebet Nominal dan setoran awal 0",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Atur Goal 40000 dan tanggal 0",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Atur autodebit 1 dan 1 jumlah debit 10000 # progress",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "Cek limit limit \"limit akhir\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    12
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
      "val": "Create",
      "offset": 22
    },
    {
      "val": "4",
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
  "duration": 71852176700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 47329256500,
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
  "duration": 4172182300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit",
      "offset": 10
    },
    {
      "val": "limit awal",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_limit_awal(String,String)"
});
formatter.result({
  "duration": 20907631400,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 11355550900,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_awal()"
});
formatter.result({
  "duration": 121686281800,
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
  "duration": 5743642400,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4630364500,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 323237000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AutoDebet Nominal",
      "offset": 11
    },
    {
      "val": "0",
      "offset": 46
    }
  ],
  "location": "BluSaving.inputNamaSetoranAwal(String,String)"
});
formatter.result({
  "duration": 12457064300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 10
    },
    {
      "val": "0",
      "offset": 28
    }
  ],
  "location": "BluSaving.aturGoal(String,int)"
});
formatter.result({
  "duration": 14756764900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "10000 # progress",
      "offset": 36
    }
  ],
  "location": "BluSaving.atur_autodebit(int,int,String)"
});
formatter.result({
  "duration": 16120201600,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 93122092200,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3310554200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 378186000,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 16172309000,
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
  "duration": 14353810800,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_notifikasi()"
});
formatter.result({
  "duration": 38710838700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 11743842400,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_akhir()"
});
formatter.result({
  "duration": 35806191600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit",
      "offset": 10
    },
    {
      "val": "limit akhir",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_limit_awal(String,String)"
});
formatter.result({
  "duration": 21701801000,
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
  "duration": 16056032300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 131,
  "name": "Create BluSaving AutoDebet Goal",
  "description": "",
  "id": "create-blusaving;create-blusaving-autodebet-goal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 130,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 132,
  "name": "Login test \u003ctesting\u003e \"Create\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Cek limit \u003csearch\u003e \"limit awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "Pockets \u003ctesting\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Input nama \u003cnamaBlusaving\u003e dan setoran awal \u003csetoranAwal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Atur Goal \u003cjumlahAturGoal\u003e dan tanggal \u003ctanggal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Atur autodebit \u003cFrekuensiDebit\u003e dan \u003cAturJumlahDebit\u003e jumlah debit \u003cJumlahAutoDebit\u003e # progress",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Cek limit \u003csearch\u003e \"limit akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 154,
      "value": "#    Then     Check saldo awal berkurang, limit awal berkurang"
    },
    {
      "line": 155,
      "value": "#    Then     Check Bukti transaksi,Mutasi, notifikasi"
    }
  ],
  "line": 157,
  "name": "",
  "description": "",
  "id": "create-blusaving;create-blusaving-autodebet-goal;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "search",
        "testing",
        "namaBlusaving",
        "setoranAwal",
        "jumlahAturGoal",
        "tanggal",
        "FrekuensiDebit",
        "AturJumlahDebit",
        "JumlahAutoDebit",
        "logout"
      ],
      "line": 158,
      "id": "create-blusaving;create-blusaving-autodebet-goal;;1"
    },
    {
      "cells": [
        "5",
        "082211220045",
        "Password123!",
        "limit",
        "bluSaving",
        "AutoDebet Goal",
        "0",
        "0",
        "1",
        "1",
        "1",
        "10000",
        "Keluar Aplikasi"
      ],
      "line": 159,
      "id": "create-blusaving;create-blusaving-autodebet-goal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 159,
  "name": "Create BluSaving AutoDebet Goal",
  "description": "",
  "id": "create-blusaving;create-blusaving-autodebet-goal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    },
    {
      "line": 130,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 132,
  "name": "Login test bluSaving \"Create\" no - 5 blu nomor 082211220045 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Input nama AutoDebet Goal dan setoran awal 0",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Atur Goal 0 dan tanggal 1",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Atur autodebit 1 dan 1 jumlah debit 10000 # progress",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Cek limit limit \"limit akhir\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "Logout blu Keluar Aplikasi",
  "matchedColumns": [
    12
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
      "val": "Create",
      "offset": 22
    },
    {
      "val": "5",
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
  "duration": 83656165100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 6568506100,
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
  "duration": 4623500400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit",
      "offset": 10
    },
    {
      "val": "limit awal",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_limit_awal(String,String)"
});
formatter.result({
  "duration": 20138872200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 11826983700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_awal()"
});
formatter.result({
  "duration": 13749730100,
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
  "duration": 5922602100,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4671668000,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 819786100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AutoDebet Goal",
      "offset": 11
    },
    {
      "val": "0",
      "offset": 43
    }
  ],
  "location": "BluSaving.inputNamaSetoranAwal(String,String)"
});
formatter.result({
  "duration": 12776074000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 10
    },
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "BluSaving.aturGoal(String,int)"
});
formatter.result({
  "duration": 20378599800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "10000 # progress",
      "offset": 36
    }
  ],
  "location": "BluSaving.atur_autodebit(int,int,String)"
});
formatter.result({
  "duration": 15692307200,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 58853399200,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3371766600,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 292997500,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 15557782700,
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
  "duration": 14300283700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_notifikasi()"
});
formatter.result({
  "duration": 36050144300,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 10718193300,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_akhir()"
});
formatter.result({
  "duration": 35519655900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit",
      "offset": 10
    },
    {
      "val": "limit akhir",
      "offset": 17
    }
  ],
  "location": "Keyword.cek_limit_awal(String,String)"
});
formatter.result({
  "duration": 21538736100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keluar Aplikasi",
      "offset": 11
    }
  ],
  "location": "Keyword.logout_blu(String)"
});
formatter.result({
  "duration": 15473853800,
  "status": "passed"
});
});