$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TambahDanaBluSaving.feature");
formatter.feature({
  "line": 2,
  "name": "Tambah Dana BluSaving",
  "description": "",
  "id": "tambah-dana-blusaving",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TambahDanaBluSaving"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Tambah Dana BluSaving",
  "description": "",
  "id": "tambah-dana-blusaving;tambah-dana-blusaving",
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
  "name": "Login test \u003ctesting\u003e \"Tarik dana\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
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
  "name": "Cek limit \u003csearch\u003e \"limit awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
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
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Klik tombol tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input jumlah tambah dana \u003cjumlahTambahDana\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Berada dihalaman konfirmasi tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman berhasil tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Berada dihalaman detail blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Cek limit \u003csearch\u003e \"limit akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 27,
      "value": "#    Then     Check saldo awal berkurang, limit awal berkurang"
    }
  ],
  "line": 29,
  "name": "",
  "description": "",
  "id": "tambah-dana-blusaving;tambah-dana-blusaving;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "search",
        "testing",
        "namaBlusaving",
        "jumlahTambahDana",
        "logout"
      ],
      "line": 30,
      "id": "tambah-dana-blusaving;tambah-dana-blusaving;;1"
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
        "Keluar Aplikasi"
      ],
      "line": 31,
      "id": "tambah-dana-blusaving;tambah-dana-blusaving;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Tambah Dana BluSaving",
  "description": "",
  "id": "tambah-dana-blusaving;tambah-dana-blusaving;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TambahDanaBluSaving"
    },
    {
      "line": 4,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Login test bluSaving \"Tarik dana\" no - 1 blu nomor 082211220045 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    4
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
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
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
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Klik tombol tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input jumlah tambah dana 100000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Berada dihalaman konfirmasi tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Berada dihalaman berhasil tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Berada dihalaman detail blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Cek limit limit \"limit akhir\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Logout blu Keluar Aplikasi",
  "matchedColumns": [
    7
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
      "val": "Tarik dana",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 39
    },
    {
      "val": "082211220045",
      "offset": 51
    },
    {
      "val": "Password123!",
      "offset": 77
    }
  ],
  "location": "Keyword.loginBlu(String,String,String,String,String)"
});
formatter.result({
  "duration": 94070934900,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 17051088300,
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
  "duration": 4150961100,
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
  "duration": 20571413700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 4956166200,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2138S88\u0027, ip: \u0027172.17.123.241\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., databaseEnabled: false, desired: {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., deviceName: Realme, noReset: true, platformName: android, udid: 48a33036}, deviceApiLevel: 30, deviceManufacturer: realme, deviceModel: RMX1971, deviceName: 48a33036, deviceScreenDensity: 480, deviceScreenSize: 1080x2340, deviceUDID: 48a33036, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noReset: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 11, statBarHeight: 96, takesScreenshot: true, udid: 48a33036, viewportRect: {height: 2036, left: 0, top: 96, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 52745e25-7f89-440c-a36f-1c3a4d4feb82\n*** Element info: {Using\u003dxpath, value\u003d//../android.view.ViewGroup/child::android.view.ViewGroup[4]/child::android.widget.TextView[@text\u003d\"Simpanan\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:247)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat Lib.FunctionalLib.takeSnapShot(FunctionalLib.java:31)\r\n\tat StepDefinitions.Keyword.cekBluaccountSebelum(Keyword.java:146)\r\n\tat ✽.And Cek bluaccount sebelum(TambahDanaBluSaving.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_awal()"
});
formatter.result({
  "status": "skipped"
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
  "location": "BluSaving.klik_tombol_tambah_dana()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 25
    }
  ],
  "location": "BluSaving.input_jumlah_tambah_dana(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BluSaving.berada_dihalmaan_konfirmasi_tambah_dana()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BluSaving.berada_dihalama_berhasil_tambah_dana()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BluSaving.berada_dihalaman_detail_blusaving()"
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
  "location": "Keyword.cek_notifikasi()"
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
  "location": "Keyword.cek_riwayat_akhir()"
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
      "val": "Keluar Aplikasi",
      "offset": 11
    }
  ],
  "location": "Keyword.logout_blu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Tambah Dana BluSaving",
  "description": "",
  "id": "tambah-dana-blusaving;tambah-dana-blusaving",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Login test \u003ctesting\u003e \"Tarik dana\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Cek limit \u003csearch\u003e \"limit awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Pockets \u003ctesting\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Klik tombol tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Input jumlah tambah dana \u003cjumlahTambahDana\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Berada dihalaman konfirmasi tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Berada dihalaman berhasil tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Berada dihalaman detail blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Cek limit \u003csearch\u003e \"limit akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 56,
      "value": "#    Then     Check saldo awal berkurang, limit awal berkurang"
    }
  ],
  "line": 58,
  "name": "",
  "description": "",
  "id": "tambah-dana-blusaving;tambah-dana-blusaving;",
  "rows": [
    {
      "cells": [
        "no",
        "nomorHandphone",
        "password",
        "search",
        "testing",
        "namaBlusaving",
        "jumlahTambahDana",
        "logout"
      ],
      "line": 59,
      "id": "tambah-dana-blusaving;tambah-dana-blusaving;;1"
    },
    {
      "cells": [
        "2",
        "082211220045",
        "Password123!",
        "limit",
        "bluSaving",
        "Blusaving 2",
        "100000",
        "Keluar Aplikasi"
      ],
      "line": 60,
      "id": "tambah-dana-blusaving;tambah-dana-blusaving;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 60,
  "name": "Tambah Dana BluSaving",
  "description": "",
  "id": "tambah-dana-blusaving;tambah-dana-blusaving;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TambahDanaBluSaving"
    },
    {
      "line": 33,
      "name": "@BluSavingRegression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Login test bluSaving \"Tarik dana\" no - 2 blu nomor 082211220045 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Cek limit limit \"limit awal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Pockets bluSaving",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Berada dihalaman list blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Klik card blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Klik tombol tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Input jumlah tambah dana 100000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Berada dihalaman konfirmasi tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Berada dihalaman berhasil tambah dana",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Berada dihalaman detail blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Cek riwayat transaksi blusaving",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Cek limit limit \"limit akhir\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Logout blu Keluar Aplikasi",
  "matchedColumns": [
    7
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
      "val": "Tarik dana",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 39
    },
    {
      "val": "082211220045",
      "offset": 51
    },
    {
      "val": "Password123!",
      "offset": 77
    }
  ],
  "location": "Keyword.loginBlu(String,String,String,String,String)"
});
formatter.result({
  "duration": 54848734700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
