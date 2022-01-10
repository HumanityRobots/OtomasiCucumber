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
  "comments": [
    {
      "line": 11,
      "value": "#    And      Tambah blugether"
    },
    {
      "line": 12,
      "value": "#    And      Masukkan nama blugether \u003cnamaBluGether\u003e dan setoran awal \u003csetoranAwal\u003e"
    },
    {
      "line": 13,
      "value": "#    And      Undang member masukkan nomor rekening \u003cnoRekUndangan\u003e"
    },
    {
      "line": 14,
      "value": "#    And      Klik tombol lanjut"
    },
    {
      "line": 15,
      "value": "#    And      Atur goal jumlah yang ditabung \u003caturJumlahGoal\u003e dan tanggal pencapaian \u003ctanggalPencapaian\u003e"
    },
    {
      "line": 16,
      "value": "#    And      Klik tombol buka blugether"
    },
    {
      "line": 17,
      "value": "#    And      Berada dihalaman berhasil membuat blugether"
    },
    {
      "line": 18,
      "value": "#    And      Berada dihalaman list blugether"
    },
    {
      "line": 19,
      "value": "#    And      Klik card blugether creator"
    },
    {
      "line": 20,
      "value": "#    And      Berada dihalaman detail blugether"
    },
    {
      "line": 21,
      "value": "#    And      Cek riwayat transaksi blugether"
    }
  ],
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "update-blugether;update-blugether-tambah-teman;",
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
      "line": 27,
      "id": "update-blugether;update-blugether-tambah-teman;;1"
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
        "000000002983",
        "082211220045",
        "Password123!",
        "ya",
        "Masuk dengan Akun Lain"
      ],
      "line": 28,
      "id": "update-blugether;update-blugether-tambah-teman;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
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
  "name": "Pockets bluGether",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#    And      Tambah blugether"
    },
    {
      "line": 12,
      "value": "#    And      Masukkan nama blugether \u003cnamaBluGether\u003e dan setoran awal \u003csetoranAwal\u003e"
    },
    {
      "line": 13,
      "value": "#    And      Undang member masukkan nomor rekening \u003cnoRekUndangan\u003e"
    },
    {
      "line": 14,
      "value": "#    And      Klik tombol lanjut"
    },
    {
      "line": 15,
      "value": "#    And      Atur goal jumlah yang ditabung \u003caturJumlahGoal\u003e dan tanggal pencapaian \u003ctanggalPencapaian\u003e"
    },
    {
      "line": 16,
      "value": "#    And      Klik tombol buka blugether"
    },
    {
      "line": 17,
      "value": "#    And      Berada dihalaman berhasil membuat blugether"
    },
    {
      "line": 18,
      "value": "#    And      Berada dihalaman list blugether"
    },
    {
      "line": 19,
      "value": "#    And      Klik card blugether creator"
    },
    {
      "line": 20,
      "value": "#    And      Berada dihalaman detail blugether"
    },
    {
      "line": 21,
      "value": "#    And      Cek riwayat transaksi blugether"
    }
  ],
  "line": 23,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 48083058900,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 12479284400,
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
  "duration": 4620550100,
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
  "duration": 10485654600,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 3060372100,
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
  "duration": 8102481900,
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
  "duration": 16143258400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Update BluGether",
  "description": "",
  "id": "update-blugether;update-blugether",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@UpdateBluGether"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Login test \u003cpocket\u003e \"Update\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Pockets \u003cpocket\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#    And      Tambah blugether"
    },
    {
      "line": 41,
      "value": "#    And      Masukkan nama blugether \u003cnamaBluGether\u003e dan setoran awal \u003csetoranAwal\u003e"
    },
    {
      "line": 42,
      "value": "#    And      Undang member masukkan nomor rekening \u003cnoRekUndangan\u003e"
    },
    {
      "line": 43,
      "value": "#    And      Klik tombol lanjut"
    },
    {
      "line": 44,
      "value": "#    And      Atur goal jumlah yang ditabung \u003caturJumlahGoal\u003e dan tanggal pencapaian \u003ctanggalPencapaian\u003e"
    },
    {
      "line": 45,
      "value": "#    And      Klik tombol buka blugether"
    },
    {
      "line": 46,
      "value": "#    And      Berada dihalaman berhasil membuat blugether"
    },
    {
      "line": 47,
      "value": "#    And      Berada dihalaman list blugether"
    },
    {
      "line": 48,
      "value": "#    And      Klik card blugether creator"
    },
    {
      "line": 49,
      "value": "#    And      Berada dihalaman detail blugether"
    },
    {
      "line": 50,
      "value": "#    And      Cek riwayat transaksi blugether"
    }
  ],
  "line": 52,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Login member undangan dengan nomor handphone \u003cnomorHandphoneUndangan\u003e dan password \u003cpasswordUndangan\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Homescreen blu",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Cek undangan notifikasi \u003cterimaUndangan\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "update-blugether;update-blugether;",
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
      "line": 63,
      "id": "update-blugether;update-blugether;;1"
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
        "000000002983",
        "082211220045",
        "Password123!",
        "ya",
        "Masuk dengan Akun Lain"
      ],
      "line": 64,
      "id": "update-blugether;update-blugether;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 64,
  "name": "Update BluGether",
  "description": "",
  "id": "update-blugether;update-blugether;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@UpdateBluGether"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Login test bluGether \"Update\" no - 1 blu nomor 082211220027 dan password Password123!",
  "matchedColumns": [
    0,
    1,
    2,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Cek bluaccount sebelum",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Cek riwayat awal",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Pockets bluGether",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Berada dihalaman list blugether",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#    And      Tambah blugether"
    },
    {
      "line": 41,
      "value": "#    And      Masukkan nama blugether \u003cnamaBluGether\u003e dan setoran awal \u003csetoranAwal\u003e"
    },
    {
      "line": 42,
      "value": "#    And      Undang member masukkan nomor rekening \u003cnoRekUndangan\u003e"
    },
    {
      "line": 43,
      "value": "#    And      Klik tombol lanjut"
    },
    {
      "line": 44,
      "value": "#    And      Atur goal jumlah yang ditabung \u003caturJumlahGoal\u003e dan tanggal pencapaian \u003ctanggalPencapaian\u003e"
    },
    {
      "line": 45,
      "value": "#    And      Klik tombol buka blugether"
    },
    {
      "line": 46,
      "value": "#    And      Berada dihalaman berhasil membuat blugether"
    },
    {
      "line": 47,
      "value": "#    And      Berada dihalaman list blugether"
    },
    {
      "line": 48,
      "value": "#    And      Klik card blugether creator"
    },
    {
      "line": 49,
      "value": "#    And      Berada dihalaman detail blugether"
    },
    {
      "line": 50,
      "value": "#    And      Cek riwayat transaksi blugether"
    }
  ],
  "line": 52,
  "name": "Cek saldo akhir \"saldo akhir\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Cek bluaccount akhir",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Cek riwayat akhir",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Logout blu Masuk dengan Akun Lain",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Login member undangan dengan nomor handphone 082211220045 dan password Password123!",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Homescreen blu",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Cek saldo awal \"saldo awal\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Cek undangan notifikasi ya",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
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
  "duration": 50198587600,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 11381049800,
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
  "duration": 4641501000,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountSebelum()"
});
formatter.result({
  "duration": 10007329800,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cek_riwayat_awal()"
});
formatter.result({
  "duration": 12297610100,
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
  "duration": 11367661400,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 4457745000,
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
  "duration": 8519903100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.cekBluaccountAkhir()"
});
formatter.result({
  "duration": 5522307400,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2138S88\u0027, ip: \u0027172.17.123.241\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., databaseEnabled: false, desired: {appActivity: com.bcadigital.blu.MainActi..., appPackage: com.bcadigital.blu.uat, autoWebView: true, chromedriverExecutable: C:\\Users\\NB01\\OneDrive\\Docu..., deviceName: Realme, noReset: true, platformName: android, udid: 48a33036}, deviceApiLevel: 30, deviceManufacturer: realme, deviceModel: RMX1971, deviceName: 48a33036, deviceScreenDensity: 480, deviceScreenSize: 1080x2340, deviceUDID: 48a33036, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noReset: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 11, statBarHeight: 96, takesScreenshot: true, udid: 48a33036, viewportRect: {height: 2036, left: 0, top: 96, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: ba48d9fd-eac3-422c-ad6a-464ad7d250e7\n*** Element info: {Using\u003dxpath, value\u003d//../android.widget.TextView[@text\u003d\"bluAccount\"]/following-sibling::android.view.ViewGroup}\r\n\tat sun.reflect.GeneratedConstructorAccessor14.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:247)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat StepDefinitions.Keyword.cekBluaccountAkhir(Keyword.java:215)\r\n\tat ✽.And Cek bluaccount akhir(UpdateBluGether.feature:53)\r\n",
  "status": "failed"
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
      "val": "082211220045",
      "offset": 45
    },
    {
      "val": "Password123!",
      "offset": 71
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
      "val": "saldo awal",
      "offset": 16
    }
  ],
  "location": "Keyword.cek_saldo_awal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ya",
      "offset": 24
    }
  ],
  "location": "Keyword.cek_undangan_notifikasi(String)"
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