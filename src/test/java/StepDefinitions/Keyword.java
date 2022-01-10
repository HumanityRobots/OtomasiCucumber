package StepDefinitions;

import Runner.Runner;

import Lib.FunctionalLib;
import Lib.ReadObject;
import Lib.StepLib;

import gherkin.ast.Step;
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
        StepLib.connectionError();
        StepLib.ExistingLoginNoCapture();
        StepLib.ExistingOTP();
        StepLib.loginNoCapture(nomor, password);
    }

    @Given("^Login member undangan dengan nomor handphone (.*) dan password (.*)$")
    public void loginUndanganMember(String nomorHandphone, String password) throws Throwable {
        driver.resetApp();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        System.out.println("LOGIN AKUN MEMBER - " + nomorHandphone);
        StepLib.connectionError();
        StepLib.ExistingLoginNoCapture();
        StepLib.ExistingOTP();
        StepLib.loginNoCapture(nomorHandphone, password);
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
        System.out.println("====> Search limit");
        driver.findElement(pars.getbjectLocator("txtCari")).sendKeys("limit");
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
        System.out.println("====> Foto halaman bluaccount");
        StepLib.loadPage("lblBluAccount");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblBluAccount");
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
        driver.findElement(pars.getbjectLocator("btnNotifikasiDashboard")).click();
        System.out.println("====> Berada dihalaman inbox");
        driver.findElement(pars.getbjectLocator("lblInbox")).isDisplayed();
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblInbox");
        System.out.println("====> Klik notifikasi");
        StepLib.loadPage("btnNotifikasiBlugetherBaru");
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

    @When("^Cek undangan notifikasi (.*)$")
    public void cek_undangan_notifikasi(String approve) throws Throwable {
        System.out.println("CEK NOTIFIKASI");
        Boolean notif = false;

        System.out.println("====> KLik tombol notifikasi");
        driver.findElement(pars.getbjectLocator("btnNotifikasiDashboard")).click();
        System.out.println("====> Berada dihalaman inbox");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblInbox");

        System.out.println("====> Klik notifikasi undangan");
        StepLib.loadPage("lblUndanganMember");
        driver.findElement(pars.getbjectLocator("lblUndanganMember")).click();

        if (approve.equalsIgnoreCase("ya")) {
            System.out.println("====> Berada dihalaman undangan member");
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnApprove");

            // klik tombol terima
            System.out.println("====> Klik tombol terima");
            driver.findElement(pars.getbjectLocator("btnApprove")).click();

            // Halaman berhasil menjadi member
            System.out.println("====> Berada dihalaman berhasil menjadi member");
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnKembali");
            System.out.println("====> Klik tombol Lihat daftar blugether");
            driver.findElement(pars.getbjectLocator("btnLihatBluGether")).click();
            StepLib.swipeinto("bluGether Member");
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblBlugetherMember");
            System.out.println("====> Klik card member");
            driver.findElement(pars.getbjectLocator("btnCardBlugetherMember")).click();
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblTambahDanaBluGether");
        } else if (approve.equalsIgnoreCase("tidak")) {
            System.out.println("====> Berada dihalaman undangan member");
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnTolak");

            // klik tombol tolak
            System.out.println("====> Klik tombol tolak");
            driver.findElement(pars.getbjectLocator("btnTolak")).click();

            // Halaman tolak menjadi member
            System.out.println("====> Berada dihalaman menolak menjadi member");
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnKembali");
            System.out.println("====> Klik tombol kembali");
            driver.findElement(pars.getbjectLocator("btnKembali")).click();
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
        Boolean share;

        try {
            share = driver.findElement(pars.getbjectLocator("btnShare")).isDisplayed() == true;
        } catch(Exception e) {
            share = false;
        }

        if (share == true) {
            System.out.println("====> Klik tombol share");
            driver.findElement(pars.getbjectLocator("btnShare")).click();
            StepLib.loadPage("btnPDF");
            System.out.println("====> Klik office pdf");
            driver.findElement(pars.getbjectLocator("btnPDF")).click();;
            System.out.println("====> Foto laporan pdf");
            StepLib.loadPage("lblPDF");
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblPDF");
            System.out.println("====> Kembali dari office pdf");
            StepLib.back();
            driver.findElement(pars.getbjectLocator("btnBackOffice")).click();
            StepLib.back();
        } else {
            System.out.println("Tidah ada share");
        }
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

    // ..........TAMBAH DANA POCKET BLUSAVING & BLUGETHER
    // Tambah dana
    @When("^Klik tombol tambah dana (.*)$")
    public void klik_tombol_tambah_dana(String tambahDana) throws Throwable {
        System.out.println("TAMBAH DANA" + tambahDana);
        System.out.println("====> Klik tombol tambah dana");
        StepLib.loadPage("lblTambahDanaBluSaving");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblTambahDanaBluSaving");
        driver.findElement(pars.getbjectLocator("lblTambahDanaBluSaving")).click();
    }

    @When("^Input jumlah tambah dana (.*)$")
    public void input_jumlah_tambah_dana(String jmlTambahdana) throws Throwable {
        System.out.println("====> Input jumlah Tambah dana");
        driver.findElement(pars.getbjectLocator("lblInputJumlahTambahDana")).sendKeys(jmlTambahdana);
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnLanjut");
        driver.findElement(pars.getbjectLocator("btnLanjut")).click();
    }

    @When("^Berada dihalaman konfirmasi tambah dana$")
    public void berada_dihalmaan_konfirmasi_tambah_dana() throws Throwable {
        System.out.println("====> Halaman konfirmasi tambah dana");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnLanjut");
        driver.findElement(pars.getbjectLocator("btnLanjut")).click();
    }

    @When("^Berada dihalaman berhasil tambah dana$")
    public void berada_dihalama_berhasil_tambah_dana() throws Throwable {
        StepLib.loadPage("btnKembali");
        System.out.println("====> Berada dihalaman berhasil tambah dana");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnKembali");
        driver.findElement(pars.getbjectLocator("btnKembali")).click();
    }

    // .......... Setting ....................
    @When("^Klik tombol setting$")
    public void klik_tombol_setting() throws Throwable {
        System.out.println("====> Klik tombol setting");
        StepLib.loadPage("btnMore");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnMore");
        driver.findElement(pars.getbjectLocator("btnMore")).click();
    }

    // ......... PIN ..............
    @When("^Masukkan pin (.*)$")
    public void masukkan_pin(int pin) throws Throwable {
        StepLib.timePage("PIN_btn1");
        System.out.println("====> Masukkan Pin :" + pin);
        StepLib.pinTransaksi(pin);
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
