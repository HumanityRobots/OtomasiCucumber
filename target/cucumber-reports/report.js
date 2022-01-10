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
  "comments": [
    {
      "line": 7,
      "value": "#    And      Cek saldo awal \"saldo awal\""
    },
    {
      "line": 8,
      "value": "#    And      Cek limit \u003csearch\u003e \"limit awal\""
    },
    {
      "line": 9,
      "value": "#    And      Cek bluaccount sebelum"
    },
    {
      "line": 10,
      "value": "#    And      Cek riwayat awal"
    }
  ],
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
  "name": "Klik tombol buka blugether",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Berada dihalaman berhasil membuat blugether",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Klik card blugether",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Berada dihalaman detail blugether",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Cek riwayat transaksi blugether",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Cek limit \u003csearch\u003e \"limit akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Login member undangan dengan nomor handphone \u003cnomorHandphoneUndangan\u003e dan password \u003cpasswordUndangan\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Homescreen blu",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Cek notifikasi undangan \u003cterimaUndangan\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
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
      "line": 38,
      "id": "create-blugether;create-blugether-1;;1"
    },
    {
      "cells": [
        "1",
        "082211220027",
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
      "line": 39,
      "id": "create-blugether;create-blugether-1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
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
  "name": "Login test bluGether \"Create\" no - 1 blu nomor 082211220027 dan password Password123!",
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
  "comments": [
    {
      "line": 7,
      "value": "#    And      Cek saldo awal \"saldo awal\""
    },
    {
      "line": 8,
      "value": "#    And      Cek limit \u003csearch\u003e \"limit awal\""
    },
    {
      "line": 9,
      "value": "#    And      Cek bluaccount sebelum"
    },
    {
      "line": 10,
      "value": "#    And      Cek riwayat awal"
    }
  ],
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
  "name": "Klik tombol buka blugether",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Berada dihalaman berhasil membuat blugether",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Klik card blugether",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Berada dihalaman detail blugether",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Cek riwayat transaksi blugether",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Cek limit limit \"limit akhir\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Login member undangan dengan nomor handphone  dan password ",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Homescreen blu",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Cek notifikasi undangan ",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
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
  "duration": 57550648200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 18308839100,
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
  "duration": 9856092900,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 5173119100,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.tambahBluGether()"
});
formatter.result({
  "duration": 715760500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blugether 1",
      "offset": 24
    },
    {
      "val": "",
      "offset": 53
    }
  ],
  "location": "BluGether.masukkan_nama_blugether_dan_setoran_awal(String,String)"
});
formatter.result({
  "duration": 5773212900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 38
    }
  ],
  "location": "BluGether.undang_member_masukkan_nomor_rekening(String)"
});
formatter.result({
  "duration": 21421452200,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_tombol_lanjut()"
});
formatter.result({
  "duration": 9004497600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "BluGether.atur_goal_jumlah_yang_ditabung(String)"
});
formatter.result({
  "duration": 5077636900,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_tombol_buka_blugether()"
});
formatter.result({
  "duration": 3567986300,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_berhasil_membuat_blugether()"
});
formatter.result({
  "duration": 7385204300,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 5016891200,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_card_blugether()"
});
formatter.result({
  "duration": 3578243300,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2138S88\u0027, ip: \u0027172.17.123.241\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., databaseEnabled: false, desired: {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., deviceName: Realme, noReset: true, platformName: android, udid: 48a33036}, deviceApiLevel: 30, deviceManufacturer: realme, deviceModel: RMX1971, deviceName: 48a33036, deviceScreenDensity: 480, deviceScreenSize: 1080x2340, deviceUDID: 48a33036, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noReset: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 11, statBarHeight: 96, takesScreenshot: true, udid: 48a33036, viewportRect: {height: 2036, left: 0, top: 96, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 0e1c4790-4479-4fc7-acaf-a95887d121a7\n*** Element info: {Using\u003dxpath, value\u003d//../android.widget.TextView[@resource-id\u003d\"savings_sub_shared_label\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:247)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat StepDefinitions.BluGether.klik_card_blugether(BluGether.java:120)\r\n\tat ✽.And Klik card blugether(CreateBluGether.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_detail_blugether()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BluGether.cek_riwayat_transaksi_blugether()"
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
  "location": "Keyword.cek_riwayat_akhir()"
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
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "Keyword.loginUndanganMember(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "BluGether.cek_notifikasi_undangan(String)"
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
});