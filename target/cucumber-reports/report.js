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
  "name": "Atur autodebit \u003cFrekuensiDebit\u003e dan jumlah debit \u003cJumlahAutoDebit\u003e # progress",
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
        "60000",
        "0",
        "0",
        "1",
        "100000",
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
        "Blusaving 3",
        "10000",
        "100000",
        "0",
        "0",
        "100000",
        "Keluar Aplikasi"
      ],
      "line": 36,
      "id": "create-blusaving;create-blusaving;;4"
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
  "name": "Atur autodebit 0 dan jumlah debit 0 # progress",
  "matchedColumns": [
    9,
    10
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
    11
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
  "duration": 49731137600,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 5020188200,
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
  "duration": 5346746000,
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
  "duration": 21226142200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 12914689200,
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
  "duration": 6395358200,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 4410145600,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 286973100,
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
  "duration": 12389176200,
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
  "duration": 20287028800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 15
    },
    {
      "val": "0 # progress",
      "offset": 34
    }
  ],
  "location": "BluSaving.atur_autodebit(int,int)"
});
formatter.result({
  "duration": 4685547600,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "duration": 12437655400,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3194282500,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "duration": 359391600,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "duration": 18077080200,
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
  "duration": 13316195400,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 10867157500,
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
  "duration": 21691055400,
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
  "duration": 18346108700,
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
  "name": "Input nama Blusaving 2 dan setoran awal 60000",
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
  "name": "Atur autodebit 1 dan jumlah debit 100000 # progress",
  "matchedColumns": [
    9,
    10
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
    11
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
  "duration": 45591675600,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 7250332300,
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
  "duration": 4849286400,
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
  "duration": 20785389300,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 11505717000,
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
  "duration": 6344428900,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "duration": 3188064500,
  "status": "passed"
});
formatter.match({
  "location": "BluSaving.tambahBlusaving()"
});
formatter.result({
  "duration": 328178000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blusaving 2",
      "offset": 11
    },
    {
      "val": "60000",
      "offset": 40
    }
  ],
  "location": "BluSaving.inputNamaSetoranAwal(String,String)"
});
formatter.result({
  "duration": 12293793700,
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
  "duration": 14663428700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "100000 # progress",
      "offset": 34
    }
  ],
  "location": "BluSaving.atur_autodebit(int,int)"
});
formatter.result({
  "duration": 10882347400,
  "error_message": "org.openqa.selenium.InvalidElementStateException: Cannot set the element to \u0027100000\u0027. Did you interact with the correct element?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2138S88\u0027, ip: \u0027172.17.123.241\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., databaseEnabled: false, desired: {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., deviceName: Realme, noReset: true, platformName: android, udid: 48a33036}, deviceApiLevel: 30, deviceManufacturer: realme, deviceModel: RMX1971, deviceName: 48a33036, deviceScreenDensity: 480, deviceScreenSize: 1080x2340, deviceUDID: 48a33036, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noReset: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 11, statBarHeight: 96, takesScreenshot: true, udid: 48a33036, viewportRect: {height: 2036, left: 0, top: 96, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: cf66b9bd-10ba-4b8f-8dc7-559a46f2a114\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:247)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat StepDefinitions.BluSaving.atur_autodebit(BluSaving.java:110)\r\n\tat ✽.And Atur autodebit 1 dan jumlah debit 100000 # progress(CreateBluSaving.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_berhasil_membuat_blusaving()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_list_blusaving()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Keyword.klik_card_blusaving()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BluSaving.cek_riwayat_transaksi_blusaving()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "name": "Input nama Blusaving 3 dan setoran awal 10000",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Atur Goal 100000 dan tanggal 0",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Atur autodebit 0 dan jumlah debit 100000 # progress",
  "matchedColumns": [
    9,
    10
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
    11
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
