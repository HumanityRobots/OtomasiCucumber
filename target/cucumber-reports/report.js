$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CloseBluGether.feature");
formatter.feature({
  "line": 1,
  "name": "Close BluGether",
  "description": "",
  "id": "close-blugether",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Close BluGether",
  "description": "",
  "id": "close-blugether;close-blugether",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CloseBluGether"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test \u003cpocket\u003e \"Close\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
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
  "name": "Close blugether",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Berada dihalaman berhasil tutup blugether",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "close-blugether;close-blugether;",
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
      "line": 20,
      "id": "close-blugether;close-blugether;;1"
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
      "line": 21,
      "id": "close-blugether;close-blugether;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Close BluGether",
  "description": "",
  "id": "close-blugether;close-blugether;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CloseBluGether"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test bluGether \"Close\" no - 1 blu nomor 082211220027 dan password Password123!",
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
  "name": "Close blugether",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Berada dihalaman berhasil tutup blugether",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
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
      "val": "Close",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "082211220027",
      "offset": 46
    },
    {
      "val": "Password123!",
      "offset": 72
    }
  ],
  "location": "Keyword.loginBlu(String,String,String,String,String)"
});
formatter.result({
  "duration": 53221513499,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 13327915201,
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
  "duration": 8707559500,
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
  "duration": 10160157901,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 4296300600,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_card_blugether_creator()"
});
formatter.result({
  "duration": 301866400,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.close_blugether()"
});
formatter.result({
  "duration": 38743804701,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_berhasil_tutup_blugether()"
});
formatter.result({
  "duration": 29930294401,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 2904849000,
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
  "duration": 12336601001,
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
  "duration": 16324306100,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2138S88\u0027, ip: \u0027172.17.123.241\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., databaseEnabled: false, desired: {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., deviceName: Realme, noReset: true, platformName: android, udid: 48a33036}, deviceApiLevel: 30, deviceManufacturer: realme, deviceModel: RMX1971, deviceName: 48a33036, deviceScreenDensity: 480, deviceScreenSize: 1080x2340, deviceUDID: 48a33036, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noReset: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 11, statBarHeight: 96, takesScreenshot: true, udid: 48a33036, viewportRect: {height: 2036, left: 0, top: 96, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: d7c42d4c-b25c-4297-9216-6bee48d9b578\n*** Element info: {Using\u003dxpath, value\u003d//../android.widget.TextView[@text\u003d\u0027LANJUT\u0027 or @text\u003d\u0027Lanjut\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:247)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat Lib.StepLib.logout(StepLib.java:456)\r\n\tat StepDefinitions.Keyword.logout_blu(Keyword.java:354)\r\n\tat ✽.And Logout blu Masuk dengan Akun Lain(CloseBluGether.feature:17)\r\n",
  "status": "failed"
});
});