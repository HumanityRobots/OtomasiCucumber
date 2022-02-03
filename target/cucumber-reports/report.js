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
  "comments": [
    {
      "line": 12,
      "value": "#    And      Tambah bludeposit"
    },
    {
      "line": 13,
      "value": "#    And      Masukkan nama bludeposit \u003cnamaBluDeposit\u003e"
    },
    {
      "line": 14,
      "value": "#    And      Masukkan nominal \u003cnominal\u003e bludeposit"
    },
    {
      "line": 15,
      "value": "#    And      Tentukan tipe bludeposit \u003ctipeDeposit\u003e"
    },
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
    }
  ],
  "line": 20,
  "name": "Klik card bludeposit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Berada dihalaman detail bludeposit",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Cek riwayat transaksi bludeposit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
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
        "search",
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
        "limit",
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
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Berada dihalaman list bluDeposit",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#    And      Tambah bludeposit"
    },
    {
      "line": 13,
      "value": "#    And      Masukkan nama bludeposit \u003cnamaBluDeposit\u003e"
    },
    {
      "line": 14,
      "value": "#    And      Masukkan nominal \u003cnominal\u003e bludeposit"
    },
    {
      "line": 15,
      "value": "#    And      Tentukan tipe bludeposit \u003ctipeDeposit\u003e"
    },
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
    }
  ],
  "line": 20,
  "name": "Klik card bludeposit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Berada dihalaman detail bludeposit",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Cek riwayat transaksi bludeposit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Cek notifikasi",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    9
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
  "duration": 53127391200,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 14089585200,
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
  "duration": 10709520200,
  "status": "passed"
});
formatter.match({
  "location": "BluDeposit.berada_dihalaman_list_bludeposit()"
});
formatter.result({
  "duration": 4870502100,
  "status": "passed"
});
formatter.match({
  "location": "BluDeposit.klik_card_bludeposit()"
});
formatter.result({
  "duration": 344735500,
  "status": "passed"
});
formatter.match({
  "location": "BluDeposit.berada_dihalaman_detail_bludeposit()"
});
formatter.result({
  "duration": 6436659700,
  "status": "passed"
});
formatter.match({
  "location": "BluDeposit.cek_riwayat_transaksi_bludeposit()"
});
formatter.result({
  "duration": 15063267200,
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
  "duration": 13809759700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 5309522100,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2138S88\u0027, ip: \u0027172.17.123.241\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., databaseEnabled: false, desired: {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., deviceName: Realme, noReset: true, platformName: android, udid: 48a33036}, deviceApiLevel: 30, deviceManufacturer: realme, deviceModel: RMX1971, deviceName: 48a33036, deviceScreenDensity: 480, deviceScreenSize: 1080x2340, deviceUDID: 48a33036, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noReset: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 11, statBarHeight: 96, takesScreenshot: true, udid: 48a33036, viewportRect: {height: 2036, left: 0, top: 96, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 7d96ef02-9024-4794-b774-c1342bd7d8b4\n*** Element info: {Using\u003dxpath, value\u003d//../android.widget.TextView[@text\u003d\"bluAccount\"]/following-sibling::android.view.ViewGroup}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:247)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat StepDefinitions.Keyword.cekBluaccountAkhir(Keyword.java:215)\r\n\tat ✽.And Cek bluaccount akhir(CreateBluDeposit.feature:24)\r\n",
  "status": "failed"
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