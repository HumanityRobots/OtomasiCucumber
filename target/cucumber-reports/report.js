$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ExistingLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Existing Login",
  "description": "",
  "id": "existing-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Existing Login",
  "description": "",
  "id": "existing-login;existing-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ExistingLogin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test \u003ctesting\u003e \"Run\" no - \u003cno\u003e blu nomor \u003cnomorHandphone\u003e dan password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Homescreen blu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Berada dihalaman existing login \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Homescreen blu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Logout blu \u003clogout\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "existing-login;existing-login;",
  "rows": [
    {
      "cells": [
        "no",
        "testing",
        "nomorHandphone",
        "password",
        "logout"
      ],
      "line": 13,
      "id": "existing-login;existing-login;;1"
    },
    {
      "cells": [
        "1",
        "Existing login",
        "082211220045",
        "Password123!",
        "Keluar Aplikasi"
      ],
      "line": 14,
      "id": "existing-login;existing-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Existing Login",
  "description": "",
  "id": "existing-login;existing-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ExistingLogin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login test Existing login \"Run\" no - 1 blu nomor 082211220045 dan password Password123!",
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
  "name": "Logout blu Keluar Aplikasi",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Berada dihalaman existing login Password123!",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Homescreen blu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Logout blu Keluar Aplikasi",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Existing login",
      "offset": 11
    },
    {
      "val": "Run",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "082211220045",
      "offset": 49
    },
    {
      "val": "Password123!",
      "offset": 75
    }
  ],
  "location": "Keyword.loginBlu(String,String,String,String,String)"
});
formatter.result({
  "duration": 46944386700,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 5110108500,
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
  "duration": 56448393000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123!",
      "offset": 32
    }
  ],
  "location": "ExistingLogin.input_nama_blusaving_dan_setoran_awal_klik_lanjut(String)"
});
formatter.result({
  "duration": 7713581300,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 4814327500,
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
  "duration": 47631210500,
  "status": "passed"
});
});