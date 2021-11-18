package StepDefinitions;

import Runner.Runner;

import Lib.FunctionalLib;
import Lib.ReadObject;
import Lib.StepLib;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class Keyword extends Runner {

    public AndroidDriver driver = this.connection;
    public ReadObject pars = this.parser;
    public String capturePath = Runner.capturePath;
    public String featureName = Runner.currentFeature;
    public static HashMap<String, Integer> tempInteger = new HashMap<String, Integer>();
    public static HashMap<String, Boolean> tempValidation = new HashMap<String, Boolean>();
    public static HashMap<String, String> tempVar = new HashMap<String, String>();

    // ............... LOGIN .................
    @Given("^Login test (.*) \"([^\"]*)\" no - (.*) blu nomor (.*) dan password (.*)$")
    public void loginBlu(String test, String feature, String no, String nomor, String password) throws Throwable {
        driver.resetApp();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        intScenarioNum++;
        System.out.println("=============== START TESTING - " + feature + " " + test + " ===============");
        System.out.println("LOGIN scenario - " + no);
//        StepLib.connectionError();
        StepLib.ExistingLoginNoCapture();
        StepLib.ExistingOTP();
        StepLib.loginNoCapture(nomor, password);
    }



    // ............... Homescreen ...........
    @When("^Homescreen blu$")
    public void homescreenBlu() throws Throwable {
        System.out.println("HOMESCREEN");
        StepLib.homescreenBlu();
    }



    // ............... SALDO ...........
    @When("^Cek saldo awal \"([^\"]*)\"$")
    public void cek_saldo_awal(String saldoKet) throws Throwable {
        System.out.println("SALDO AWAL");
        StepLib.btnHidden();

        // get saldo awal
        if(saldoKet.equals("saldo awal")) {
            System.out.println("====> Ambil nominal saldo awal");
            glbVarString.put("varSaldoAwal", driver.findElement(pars.getbjectLocator("imgTampilSymbol")).getText());
        } else if(saldoKet.equals("saldo akhir")) {
            System.out.println("====> Ambil nominal saldo akhir");
            glbVarString.put("varSaldoAkhir", driver.findElement(pars.getbjectLocator("imgTampilSymbol")).getText());
        }

        System.out.println("====> Foto saldo");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "mataBluAccount");
    }

    @When("^Cek saldo akhir \"([^\"]*)\"$")
    public void cek_saldo_akhir(String saldoKet) throws Throwable {
        StepLib.goToDashboard();
        System.out.println("SALDO AWAL");
        StepLib.btnHidden();

        // get saldo awal
        if(saldoKet.equals("saldo awal")) {
            System.out.println("====> Ambil nominal saldo awal");
            glbVarString.put("varSaldoAwal", driver.findElement(pars.getbjectLocator("imgTampilSymbol")).getText());
        } else if(saldoKet.equals("saldo akhir")) {
            System.out.println("====> Ambil nominal saldo akhir");
            glbVarString.put("varSaldoAkhir", driver.findElement(pars.getbjectLocator("imgTampilSymbol")).getText());
        }

        System.out.println("====> Foto saldo");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "mataBluAccount");
    }



    // .............. LIMIT AWAL .............
    @When("^Cek limit (.*) \"([^\"]*)\"$")
    public void cek_limit_awal(String limit, String limitKet) throws Throwable {
        System.out.println("LIMIT AWAL");
        StepLib.Profile();
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "txtCari");
        System.out.println("====> Search limit");
        driver.findElement(pars.getbjectLocator("txtCari")).sendKeys("limit");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnLimitTransaksi");
        System.out.println("====> Click Tombol Limit");
        driver.findElement(pars.getbjectLocator("btnLimitTransaksi")).click();
        System.out.println("====> Foto halaman limit transaksi");

        // get limit awal
        if(limitKet.equals("limit awal")) {
            glbVarString.put("varLimitAwal", driver.findElement(pars.getbjectLocator("lblNominalLimit")).getText());
        } else if(limitKet.equals("limit akhir")) {
            glbVarString.put("varLimitAwal", driver.findElement(pars.getbjectLocator("lblNominalLimit")).getText());
        }


        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "txtLimit");
        StepLib.goToDashboard();
    }



    // ............. BLUACCOUNT SEBELUM ......
    @When("^Cek bluaccount sebelum$")
    public void cekBluaccountSebelum() throws Throwable {
        System.out.println("BLU ACCOUNT SEBELUM");
        System.out.println("====> Klik tombol simpanan");
        driver.findElement(pars.getbjectLocator("btnSimpanan")).click();
        System.out.println("====> Foto halaman simpanan");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpanan");
        // ambil total saldo
        System.out.println("====> Klik bluaccount");
        driver.findElement(pars.getbjectLocator("btnBluAcc")).click();
        StepLib.loadPage("btnPindahkanDana");
        System.out.println("====> Foto halaman bluaccount");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnPindahkanDana");
        StepLib.back();
        driver.findElement(pars.getbjectLocator("btnHome")).click();
    }



    // ............. RIWAYAT AWAL ............
    @When("^Cek riwayat awal$")
    public void cek_riwayat_awal() throws Throwable {
        System.out.println("CEK RIWAYAT AWAL");
        System.out.println("====> Klik tombol Tracker");
//        StepLib.loadPage("btntracker");
        driver.findElement(pars.getbjectLocator("btnTracker")).click();
        StepLib.loadPage("lblLihatSemua");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblLihatSemua");
        System.out.println("====> KLik lihat semua");
        driver.findElement(pars.getbjectLocator("lblLihatSemua")).click();
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblRiwayatTransaksi");
        StepLib.back();
        driver.findElement(pars.getbjectLocator("btnHome")).click();
    }



    // ................ POCKET ...............
    @When("^Pocket blusaving$")
    public void pocket_blusaving() throws Throwable {
        System.out.println("CARD BLUSAVING");
        System.out.println("====> Klik tombol simpanan");
        driver.findElement(pars.getbjectLocator("btnSimpanan")).click();
        StepLib.swipePopDown();
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblRiwayatTransaksi");
    }

    @When("^Pocket blugether$")
    public void pocket_blugether() throws Throwable {
        System.out.println("CARD BLUGETHER");
        System.out.println("====> Klik tombol simpanan");
        driver.findElement(pars.getbjectLocator("btnSimpanan")).click();
        StepLib.swipePopDown();
        StepLib.swipePopDown();
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblRiwayatTransaksi");
    }

    @When("^Pocket bludeposit$")
    public void pocket_bludeposit() throws Throwable {
        System.out.println("CARD BLUDEPOSIT");
        System.out.println("====> Klik tombol simpanan");
        driver.findElement(pars.getbjectLocator("btnSimpanan")).click();
        StepLib.swipePopDown();
        StepLib.swipePopDown();
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblRiwayatTransaksi");
    }



    // ............ BLUACCOUNT AKHIR .........
    @When("^Cek bluaccount akhir$")
    public void cekBluaccountAkhir() throws Throwable {
        System.out.println("BLU ACCOUNT AKHIR");
        System.out.println("====> Klik tombol simpanan");
        driver.findElement(pars.getbjectLocator("btnSimpanan")).click();
        System.out.println("====> Foto halaman simpanan");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpanan");
        // ambil total saldo
        System.out.println("====> Klik bluaccount");
        driver.findElement(pars.getbjectLocator("btnBluAcc")).click();
        StepLib.loadPage("btnPindahkanDana");
        System.out.println("====> Foto halaman bluaccount");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnPindahkanDana");
        StepLib.back();
        driver.findElement(pars.getbjectLocator("btnHome")).click();
    }



    // ............ RIWAYAT AKHIR ............
    @When("^Cek riwayat akhir$")
    public void cek_riwayat_akhir() throws Throwable {
        System.out.println("CEK RIWAYAT AKHIR");
        System.out.println("====> Klik tombol Tracker");
        driver.findElement(pars.getbjectLocator("btnTracker")).click();
        StepLib.loadPage("lblLihatSemua");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblLihatSemua");
        System.out.println("====> KLik lihat semua");
        driver.findElement(pars.getbjectLocator("lblLihatSemua")).click();
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblRiwayatTransaksi");
        System.out.println("====> Klik riwayat terbaru");
        driver.findElement(pars.getbjectLocator("lblRow1")).click();
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblTransaksiBerhasil");
        klik_tombol_share();
        StepLib.goToDashboard();
    }



    // ............ NOTIFIKASI ...............
    @When("^Cek notifikasi$")
    public void cek_notifikasi() throws Throwable {
        System.out.println("CEK NOTIFIKASI");
        Boolean notif = false;

        System.out.println("====> KLik tombol notifikasi");
        driver.findElement(pars.getbjectLocator("btnNotifikasi")).click();
        System.out.println("====> Berada dihalaman inbox");
        driver.findElement(pars.getbjectLocator("lblInbox")).isDisplayed();
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblInbox");
        System.out.println("====> Klik notifikasi");
        driver.findElement(pars.getbjectLocator("btnNotifikasiBlugetherBaru")).click();

        try {
            notif = driver.findElement(pars.getbjectLocator("btnDetail")).isDisplayed();
        } catch (Exception e) {
            notif = false;
        }

        if (notif == true) {
            StepLib.loadPage("lblTotal");
            System.out.println("====> klik detail");
            driver.findElement(pars.getbjectLocator("btnDetail")).click();
            StepLib.swipePopDown();
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblTotal");
            klik_tombol_share();
        } else {
            StepLib.loadPage("lblTotal");
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblTotal");
            klik_tombol_share();
        }
        StepLib.goToDashboard();
    }



    // ............ LIMIT AKHIR ..............
    @When("^Cek limit akhir (.*)$")
    public void klik_tombol_limit_akhir(String limit) throws Throwable {
        System.out.println("LIMIT AKHIR");
        StepLib.Profile();
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "txtCari");
        System.out.println("====> Search limit");
        driver.findElement(pars.getbjectLocator("txtCari")).sendKeys(limit);
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnLimitTransaksi");
        System.out.println("====> Click Tombol Limit");
        driver.findElement(pars.getbjectLocator("btnLimitTransaksi")).click();
        System.out.println("====> Foto halaman limit transaksi");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "txtLimit");
        StepLib.goToDashboard();
    }



    // ........... LOGOUT ....................
    @When("^Logout blu (.*)$")
    public void logout_blu(String out) throws Throwable {
        StepLib.logout(out);
    }





//  .............. KEYWORD ..................

    // .......... SHARE PDF .............
    @When("^Klik tombol share$")
    public void klik_tombol_share() throws Throwable {
        System.out.println("====> Klik tombol share");
        driver.findElement(pars.getbjectLocator("btnShare")).click();
        StepLib.loadPage("btnPDF");
        System.out.println("====> Klik office pdf");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnPDF");
        driver.findElement(pars.getbjectLocator("btnPDF")).click();;
        System.out.println("====> Foto laporan pdf");
        StepLib.loadPage("lblPDF");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblPDF");
        System.out.println("====> Kembali dari office pdf");
        StepLib.back();
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnBackOffice");
        driver.findElement(pars.getbjectLocator("btnBackOffice")).click();
        StepLib.back();
    }

    // .......... Download E-STATEMENT .............
//    @When("^Download e statement$")
//    public void download_estatement() throws Throwable {
//        Boolean office = false;
//        System.out.println("====> Klik Download e-statemnt");
//        driver.findElement(pars.getbjectLocator("btnDownloadEStatement")).click();
//        StepLib.downloaEStatement();
//    }



    // ......... KEMBALI ...................
    @When("^Klik tombol kembali$")
    public void klik_tombol_kembali() throws Throwable {
        System.out.println("====> Klik tombol kembali");
        driver.pressKey(new KeyEvent(AndroidKey.BACK));
    }


    // ........... LIHAT SEMUA ................
    @When("^Klik lihat semua$")
    public void klik_lihat_semua() throws Throwable {
        StepLib.loadPage("lblLihatSemua");
        System.out.println("====> Klik lihat semua");
        driver.findElement(pars.getbjectLocator("lblLihatSemua")).click();
    }


    // ............ TOMBOL SIMPANAN .........
    @When("^Klik tombol simpanan$")
    public void klik_tombol_simpanan() throws Throwable {
        System.out.println("====> Click Tombol Simpanan");
        driver.findElement(pars.getbjectLocator("btnSimpanan")).click();
        StepLib.timePage("btnSimpanan");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpanan");
        StepLib.timePage("btnSimpanan");
    }


    // ........... TOMBOL HOME ..............
    @When("^Klik tombol home$")
    public void klik_tombol_home() throws Throwable {
        StepLib.back();
        System.out.println("====> Click Tombol Home");
        StepLib.loadPage("btnHome");
        driver.findElement(pars.getbjectLocator("btnHome")).click();
    }


    // .......... TOMBOL TRACKER ...........
    @When("^Klik tombol tracker$")
    public void klik_tombol_tracker() throws Throwable {
        System.out.println("====> Klik tombol tracker");
        driver.findElement(pars.getbjectLocator("btnTracker")).click();
    }


    // .......... POCKETS ....................
    @When("^Pockets (.*)$")
    public void pockets(String pocket) throws Throwable {
        System.out.println("POCKET " + pocket);
        System.out.println("====> Klik tombol simpanan");
        driver.findElement(pars.getbjectLocator("btnSimpanan")).click();
        StepLib.pockets(pocket);
    }

    // .......... Setting ....................
    @When("^Klik tombol setting$")
    public void klik_tombol_setting() throws Throwable {
        System.out.println("====> Klik tombol setting");
        StepLib.loadPage("btnMore");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnMore");
        driver.findElement(pars.getbjectLocator("btnMore")).click();
    }

    // card blusaving
    @When("^Klik card blusaving$")
    public void klik_card_blusaving() throws Throwable {
        System.out.println("====> Klik card blusaving");
//        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "cardBluSaving");
        driver.findElement(pars.getbjectLocator("cardBluSaving")).click();

        // berada dihalaman detail blusaving
        System.out.println("====> Berada dihalaman detail blusaving");
    }


    // .......... PINDAH AKUN LAIN ...........
    @When("^Pindah akun lain \"([^\"]*)\"$")
    public void pindah_akun_lain(String pindah) throws Throwable {
        StepLib.swipeinto(pindah);
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnPindahAkun");
        driver.findElement(pars.getbjectLocator("btnPindahAkun")).click();
        System.out.println("====> Foto tombol pindah akun");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnPilihPindahAkun");
        driver.findElement(pars.getbjectLocator("btnPilihPindahAkun")).click();
    }


    // THEN
    @Then("^Check saldo awal berkurang, limit awal berkurang$")
    public void check_saldo_awal_berkurang_limit_awal_berkurang() throws Throwable {
        // saldo
        Integer intSaldoHasil, intSaldoAwal, intSaldoAkhir, intSaldoJumlah;
        intSaldoAwal = Integer.parseInt(glbVarString.get("varSaldoAwal").replace(".","").replace("Rp","").trim());
        intSaldoAkhir = Integer.parseInt(glbVarString.get("varSaldoAkhir").replace(".","").replace("Rp","").trim());
        intSaldoHasil = intSaldoAwal - intSaldoAkhir;


//        intSaldoAwal = Integer.parseInt(glbVarString.get("varSaldoAwal").replace(".","").trim());
//        intSaldoAkhir = Integer.parseInt(glbVarString.get("varSaldoAkhir").replace(".","").trim());


        // limit
//        Integer intLimitHasil, intLimitAwal, intLimitAkhir, intLimitJumlah;
////        intSaldoJumlah = Integer.parseInt(glbVarString.get("varS").replace(".","").replace("Rp","").trim());
//        intLimitAwal = Integer.parseInt(glbVarString.get("varLimitAwal").replace(".","").replace("RP","").replace(".","").replace(",", "").trim());
//        intLimitAkhir = Integer.parseInt(glbVarString.get("varLimitAkhir").replace(".","").replace("RP","").replace(".","").replace(",", "").trim());
//        intLimitHasil = intLimitAwal - intLimitAkhir;

        // bluaccount

        // compare
        // saldo awal berkurang
        assert intSaldoHasil.toString().equals(intSaldoAkhir.toString()) == true;

        // limit awal berkurang
//        assert intLimitHasil.toString().equals(intLimitAkhir.toString()) == true;
    }
}
