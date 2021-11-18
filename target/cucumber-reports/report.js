$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateBluSaving.feature");
formatter.feature({
  "line": 2,
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
  "line": 4,
  "name": "Create BluSaving",
  "description": "",
  "id": "create-blusaving;create-blusaving",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test \u003ctesting\u003e \"Create\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
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
  "name": "Cek limit \u003csearch\u003e \"limit awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#    And      Cek riwayat awal"
    }
  ],
  "line": 12,
  "name": "Pockets \u003ctesting\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input nama \u003cnamaBlusaving\u003e dan setoran awal \u003csetoranAwal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Atur Goal \u003cjumlahAturGoal\u003e dan tanggal \u003ctanggal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Atur autodebit \u003cFrekuensiDebit\u003e dan \u003cAturJumlahDebit\u003e jumlah debit \u003cJumlahAutoDebit\u003e # progress",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#    And      Cek notifikasi"
    }
  ],
  "line": 25,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#    And      Cek riwayat akhir"
    }
  ],
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
  "id": "create-blusaving;create-blusaving;",
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
      "id": "create-blusaving;create-blusaving;;1"
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
      "id": "create-blusaving;create-blusaving;;2"
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
      "line": 35,
      "id": "create-blusaving;create-blusaving;;3"
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
      "line": 36,
      "id": "create-blusaving;create-blusaving;;4"
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
        "0",
        "10000",
        "Masuk dengan Akun Lain"
      ],
      "line": 37,
      "id": "create-blusaving;create-blusaving;;5"
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
      "line": 38,
      "id": "create-blusaving;create-blusaving;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Create BluSaving",
  "description": "",
  "id": "create-blusaving;create-blusaving;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    },
    {
      "line": 3,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 5,
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
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#    And      Cek riwayat awal"
    }
  ],
  "line": 12,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input nama Blusaving 1 dan setoran awal 100000",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Atur Goal 1000000 dan tanggal 1",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Atur autodebit 1 dan 0 jumlah debit 0 # progress",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#    And      Cek notifikasi"
    }
  ],
  "line": 25,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#    And      Cek riwayat akhir"
    }
  ],
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
  "duration": 58819086300,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 6416461100,
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
  "duration": 3987419000,
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
  "duration": 20061836400,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 11311393600,
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
  "duration": 5467474000,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4719227400,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 240642700,
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
  "duration": 11667088500,
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
  "duration": 19990601400,
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
  "duration": 13533555900,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 11572348000,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3094752900,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 242713700,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 16802950400,
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
  "duration": 12119967800,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 9918776600,
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
  "duration": 19855933100,
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
  "duration": 15705511800,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Create BluSaving",
  "description": "",
  "id": "create-blusaving;create-blusaving;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    },
    {
      "line": 3,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 5,
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
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#    And      Cek riwayat awal"
    }
  ],
  "line": 12,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input nama Blusaving 2 dan setoran awal 6000",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Atur Goal 1500000 dan tanggal 1",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Atur autodebit 1 dan 1 jumlah debit 0 # progress",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#    And      Cek notifikasi"
    }
  ],
  "line": 25,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#    And      Cek riwayat akhir"
    }
  ],
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
  "duration": 72589638100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 7502593600,
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
  "duration": 3754830900,
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
  "duration": 19036891200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 11941944100,
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
  "duration": 5368284800,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4274008200,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 238493800,
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
  "duration": 12206945500,
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
  "duration": 19972226600,
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
  "duration": 15334626500,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 15985813800,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3141500800,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 531764300,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 16681416300,
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
  "duration": 12203828300,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 10223882900,
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
  "duration": 20740076600,
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
  "duration": 13875574500,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Create BluSaving",
  "description": "",
  "id": "create-blusaving;create-blusaving;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    },
    {
      "line": 3,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 5,
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
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#    And      Cek riwayat awal"
    }
  ],
  "line": 12,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input nama No Autodebet dan setoran awal 0",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Atur Goal 0 dan tanggal 0",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Atur autodebit 0 dan 0 jumlah debit 0 # progress",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#    And      Cek notifikasi"
    }
  ],
  "line": 25,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#    And      Cek riwayat akhir"
    }
  ],
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
  "duration": 44986349600,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 6510324200,
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
  "duration": 3942945800,
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
  "duration": 21734301600,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 11265681400,
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
  "duration": 4836785100,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4655939000,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 287388900,
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
  "duration": 12256243500,
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
  "duration": 13456740400,
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
  "duration": 4799219100,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 8105048300,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3074565100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 252518800,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 15358200900,
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
  "duration": 13059492200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 10108519300,
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
  "duration": 19857760400,
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
  "duration": 13542801900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Create BluSaving",
  "description": "",
  "id": "create-blusaving;create-blusaving;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    },
    {
      "line": 3,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 5,
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
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#    And      Cek riwayat awal"
    }
  ],
  "line": 12,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input nama AutoDebet Nominal dan setoran awal 0",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Atur Goal 40000 dan tanggal 0",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Atur autodebit 1 dan 0 jumlah debit 10000 # progress",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#    And      Cek notifikasi"
    }
  ],
  "line": 25,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#    And      Cek riwayat akhir"
    }
  ],
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
  "duration": 46077614100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 4836459100,
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
  "duration": 3944001800,
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
  "duration": 19860243500,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 10120872900,
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
  "duration": 5844712400,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4280555100,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 235388400,
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
  "duration": 12246091100,
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
  "duration": 14534095900,
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
      "val": "10000 # progress",
      "offset": 36
    }
  ],
  "location": "BluSaving.atur_autodebit(int,int,String)"
});
formatter.result({
  "duration": 13067818600,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 19050528000,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3077871100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 786125700,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 16089590000,
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
  "duration": 12408039100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 10065632200,
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
  "duration": 21454244500,
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
  "duration": 15192004200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Create BluSaving",
  "description": "",
  "id": "create-blusaving;create-blusaving;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateBluSaving"
    },
    {
      "line": 3,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 5,
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
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#    And      Cek riwayat awal"
    }
  ],
  "line": 12,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Tambah blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input nama AutoDebet Goal dan setoran awal 0",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Atur Goal 0 dan tanggal 1",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Atur autodebit 1 dan 1 jumlah debit 10000 # progress",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman berhasil membuat blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#    And      Cek notifikasi"
    }
  ],
  "line": 25,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#    And      Cek riwayat akhir"
    }
  ],
  "line": 27,
  "name": "Cek limit limit \"limit akhir\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
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
  "duration": 44891721300,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 6361851900,
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
  "duration": 4223697500,
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
  "duration": 19547418300,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 11175771300,
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
  "duration": 5617147000,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4416497300,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 732464100,
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
  "duration": 12221774800,
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
  "duration": 20356778000,
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
  "duration": 14151863900,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 8137072900,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3578186700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 226088500,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 15594822100,
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
  "duration": 13436133700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 9949842600,
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
  "duration": 20220524900,
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
  "duration": 14177500000,
  "status": "passed"
});
});