$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UpdateBluGether.feature");
formatter.feature({
  "line": 1,
  "name": "Update BluGether",
  "description": "",
  "id": "update-blugether",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Update BluGether tambah teman",
  "description": "",
  "id": "update-blugether;update-blugether-tambah-teman",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@UpdateBluGether"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test \u003cpocket\u003e \"Update\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
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
  "name": "Update blugether",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Update nama \u003cnamaBluGether\u003e blugether",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Update daftar teman \u003cdaftarTeman\u003e dengan norek \u003cnoRekUndangan\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Update atur goal \u003cgoal\u003e dan tambah jumlah goal \u003caturJumlahGoal\u003e dan tanggal pencapaian \u003ctanggalPencapaian\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Klik tombol simpan",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Berada dihalaman update detail blugether",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman update list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "update-blugether;update-blugether-tambah-teman;",
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
      "line": 24,
      "id": "update-blugether;update-blugether-tambah-teman;;1"
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
      "line": 25,
      "id": "update-blugether;update-blugether-tambah-teman;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Update BluGether tambah teman",
  "description": "",
  "id": "update-blugether;update-blugether-tambah-teman;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@UpdateBluGether"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test bluGether \"Update\" no - 1 blu nomor 082211220027 dan password Password123!",
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
  "name": "Update blugether",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Update nama Blugether 2 blugether",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Update daftar teman ya dengan norek 000000002983",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Update atur goal ya dan tambah jumlah goal 100000 dan tanggal pencapaian ",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Klik tombol simpan",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Berada dihalaman update detail blugether",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman update list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
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
      "val": "Update",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 35
    },
    {
      "val": "082211220027",
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
  "duration": 49465581400,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 11512770800,
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
  "duration": 7632754900,
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
  "duration": 9510595200,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 4127581000,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_card_blugether_creator()"
});
formatter.result({
  "duration": 257315600,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.update_blugether()"
});
formatter.result({
  "duration": 17425721200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blugether 2",
      "offset": 12
    }
  ],
  "location": "BluGether.update_nama_blugether(String)"
});
formatter.result({
  "duration": 1953931000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ya",
      "offset": 20
    },
    {
      "val": "000000002983",
      "offset": 36
    }
  ],
  "location": "BluGether.update_daftar_teman_dengan_norek(String,String)"
});
formatter.result({
  "duration": 23227683500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ya",
      "offset": 17
    },
    {
      "val": "100000",
      "offset": 43
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "BluGether.update_atur_goal_dan_tambah_jumlah_goal_dan_tanggal_pencapaian(String,String,String)"
});
formatter.result({
  "duration": 11849153000,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_tombol_simpan()"
});
formatter.result({
  "duration": 10598554400,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_update_detail_blugether()"
});
formatter.result({
  "duration": 13544351600,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_update_list_blugether()"
});
formatter.result({
  "duration": 7926204400,
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
  "duration": 6309361300,
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
  "duration": 15714707500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Update BluGether",
  "description": "",
  "id": "update-blugether;update-blugether",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@UpdateBluGether"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Login test \u003cpocket\u003e \"Update\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Pockets \u003cpocket\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Klik card blugether creator",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Update blugether",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Update nama \u003cnamaBluGether\u003e blugether",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Update daftar teman \u003cdaftarTeman\u003e dengan norek \u003cnoRekUndangan\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Update atur goal \u003cgoal\u003e dan tambah jumlah goal \u003caturJumlahGoal\u003e dan tanggal pencapaian \u003ctanggalPencapaian\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Klik tombol simpan",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Berada dihalaman update detail blugether",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Berada dihalaman update list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "update-blugether;update-blugether;",
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
      "line": 48,
      "id": "update-blugether;update-blugether;;1"
    },
    {
      "cells": [
        "2",
        "082211220027",
        "Password123!",
        "bluGether",
        "Blugether 3",
        "ya",
        "150000",
        "",
        "tidak",
        "000000002983",
        "Masuk dengan Akun Lain"
      ],
      "line": 49,
      "id": "update-blugether;update-blugether;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Update BluGether",
  "description": "",
  "id": "update-blugether;update-blugether;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@UpdateBluGether"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Login test bluGether \"Update\" no - 2 blu nomor 082211220027 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Pockets bluGether",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Klik card blugether creator",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Update blugether",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Update nama Blugether 3 blugether",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Update daftar teman tidak dengan norek 000000002983",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Update atur goal ya dan tambah jumlah goal 150000 dan tanggal pencapaian ",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Klik tombol simpan",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Berada dihalaman update detail blugether",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Berada dihalaman update list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
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
      "val": "Update",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 35
    },
    {
      "val": "082211220027",
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
  "duration": 46174790500,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 11712912800,
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
  "duration": 7758305200,
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
  "duration": 8874875200,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 4139368400,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_card_blugether_creator()"
});
formatter.result({
  "duration": 272865300,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.update_blugether()"
});
formatter.result({
  "duration": 19350301800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blugether 3",
      "offset": 12
    }
  ],
  "location": "BluGether.update_nama_blugether(String)"
});
formatter.result({
  "duration": 1295938900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tidak",
      "offset": 20
    },
    {
      "val": "000000002983",
      "offset": 39
    }
  ],
  "location": "BluGether.update_daftar_teman_dengan_norek(String,String)"
});
formatter.result({
  "duration": 120900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ya",
      "offset": 17
    },
    {
      "val": "150000",
      "offset": 43
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "BluGether.update_atur_goal_dan_tambah_jumlah_goal_dan_tanggal_pencapaian(String,String,String)"
});
formatter.result({
  "duration": 10116358000,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_tombol_simpan()"
});
formatter.result({
  "duration": 9879977800,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_update_detail_blugether()"
});
formatter.result({
  "duration": 13179447900,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_update_list_blugether()"
});
formatter.result({
  "duration": 7459275200,
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
  "duration": 6450578400,
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
  "duration": 13514022700,
  "status": "passed"
});
});