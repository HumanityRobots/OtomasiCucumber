$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateBluGether.feature");
formatter.feature({
  "line": 1,
  "name": "Create BluGether",
  "description": "",
  "id": "create-blugether",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create blugether 1",
  "description": "",
  "id": "create-blugether;create-blugether-1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CreateBluGether"
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
  "line": 10,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Pockets \u003cpocket\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Tambah blugether",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Masukkan nama blugether \u003cnamaBluGether\u003e dan setoran awal \u003csetoranAwal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Undang member masukkan nomor rekening \u003cnoRekUndangan\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Klik tombol lanjut",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Atur goal jumlah yang ditabung \u003caturJumlahGoal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Atur tanggal pencapaian \u003ctanggalPencapaian\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Klik tombol buka blugether",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Berada dihalaman berhasil membuat blugether",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Klik tombol kembali ke daftar blugether",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Klik card blugether",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Berada dihalaman detail blugether",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Cek riwayat transaksi blugether",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Cek limit \u003csearch\u003e \"limit akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Login member undangan dengan nomor handphone \u003cnomorHandphoneUndangan\u003e dan password \u003cpasswordUndangan\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Homescreen blu",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Cek notifikasi undangan \u003cterimaUndangan\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "create-blugether;create-blugether-1;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "search",
        "pocket",
        "namaBluGether",
        "setoranAwal",
        "aturJumlahGoal",
        "tanggalPencapaian",
        "noRekUndangan",
        "nomorHandphoneUndangan",
        "passwordUndangan",
        "terimaUndangan",
        "logout"
      ],
      "line": 40,
      "id": "create-blugether;create-blugether-1;;1"
    },
    {
      "cells": [
        "1",
        "082211220045",
        "Password123!",
        "limit",
        "bluGether",
        "Blugether 1",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Masuk dengan Akun Lain"
      ],
      "line": 41,
      "id": "create-blugether;create-blugether-1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Create blugether 1",
  "description": "",
  "id": "create-blugether;create-blugether-1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CreateBluGether"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test bluGether \"Create\" no - 1 blu nomor 082211220045 dan password Password123!",
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
  "line": 10,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Pockets bluGether",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Tambah blugether",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Masukkan nama blugether Blugether 1 dan setoran awal ",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Undang member masukkan nomor rekening ",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Klik tombol lanjut",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Atur goal jumlah yang ditabung ",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Atur tanggal pencapaian ",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Klik tombol buka blugether",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Berada dihalaman berhasil membuat blugether",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Klik tombol kembali ke daftar blugether",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Klik card blugether",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Berada dihalaman detail blugether",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Cek riwayat transaksi blugether",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Cek limit limit \"limit akhir\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Login member undangan dengan nomor handphone  dan password ",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Homescreen blu",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Cek notifikasi undangan ",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    13
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
