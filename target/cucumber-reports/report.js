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
        "Blugether 1",
        "ya",
        "100000",
        "",
        "ya",
        "Y",
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
  "name": "Update nama Blugether 1 blugether",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Update daftar teman ya dengan norek Y",
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
  "duration": 124681364100,
  "status": "passed"
});
formatter.match({
  "location": "Keyword.homescreenBlu()"
});
formatter.result({
  "duration": 20505011500,
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
  "duration": 4154489100,
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
  "duration": 8729492300,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_list_blugether()"
});
formatter.result({
  "duration": 5125141600,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.klik_card_blugether_creator()"
});
formatter.result({
  "duration": 319290200,
  "status": "passed"
});
formatter.match({
  "location": "BluGether.update_blugether()"
});
formatter.result({
  "duration": 20153964000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blugether 1",
      "offset": 12
    }
  ],
  "location": "BluGether.update_nama_blugether(String)"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ya",
      "offset": 20
    },
    {
      "val": "Y",
      "offset": 36
    }
  ],
  "location": "BluGether.update_daftar_teman_dengan_norek(String,String)"
});
formatter.result({
  "duration": 84800,
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
  "location": "BluGether.update_atur_goal_dan_tambah_jumlah_goal_dan_tanggal_pencapaian()"
});
formatter.result({
  "duration": 375300,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027StepDefinitions.BluGether.update_atur_goal_dan_tambah_jumlah_goal_dan_tanggal_pencapaian() in file:/C:/Users/NB01/OneDrive/Documents/SQA/Work/Otomasi/Project/OtomasiCucumber/target/test-classes/\u0027 with pattern [^Update atur goal (.*) dan tambah jumlah goal (.*) dan tanggal pencapaian (.*)$] is declared with 0 parameters. However, the gherkin step has 3 arguments [ya, 100000, ]. \nStep: And Update atur goal ya dan tambah jumlah goal 100000 dan tanggal pencapaian \r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat Runner.Runner.feature(Runner.java:114)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BluGether.klik_tombol_simpan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_update_detail_blugether()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BluGether.berada_dihalaman_update_list_blugether()"
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