package Lib;

import Runner.Runner;
import com.sun.javafx.scene.traversal.Direction;
import io.appium.java_client.MobileElement;
import io.appium.java_client.PerformsTouchActions;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.ElementOption;
import io.appium.java_client.touch.offset.PointOption;
import java.time.Duration;
import java.util.concurrent.TimeUnit;
import static io.appium.java_client.touch.TapOptions.tapOptions;
import static io.appium.java_client.touch.WaitOptions.waitOptions;
import static io.appium.java_client.touch.offset.ElementOption.element;
import static java.time.Duration.ofMillis;

import io.cucumber.java.an.E;
import io.cucumber.java.sl.In;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Rectangle;


public class StepLib extends Runner {

    io.appium.java_client.android.AndroidDriver AndroidDriver;
    public static AndroidDriver<MobileElement> driver = connection;
    public static ReadObject pars = parser;
    public static String capturePath = Runner.capturePath;
    public static String featureName = Runner.currentFeature;
//    pulbic static String noFeature = Runner.

    public StepLib(AndroidDriver driver) {
        this.AndroidDriver = driver;
    }

    // ------------ Login ----------------

    public static void loginNoCapture(String nomor, String password) throws Exception {
        Boolean boolVerif = false, boolPSWD = false, lblDashboard = false;

        // Allow
        allow();

        // Klik mulai
        System.out.println("====> Click mulai");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "login_btnYukMulai");
        driver.findElement(pars.getbjectLocator("login_btnYukMulai")).click();
        System.out.println("====> Clear no handphone");
        driver.findElement(pars.getbjectLocator("login_txtNoHp")).clear();
        System.out.println("====> Isi no handphone : " + nomor);
        driver.findElement(pars.getbjectLocator("login_txtNoHp")).sendKeys(nomor);
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "login_txtNoHp");
        System.out.println("====> Click Lanjut");
        driver.findElement(pars.getbjectLocator("login_btnLanjut")).click();

        // Allow Address
        allow();

        // OTP
        do{
            try {
                boolVerif = driver.findElement(pars.getbjectLocator("login_btn1")).isDisplayed();
            } catch(Exception e) {
                boolVerif = false;
            }
        }while (boolVerif == false);

        System.out.println("====> Input OTP");
        driver.findElement(pars.getbjectLocator("login_btn1")).click();
        driver.pressKey(new KeyEvent(AndroidKey.DIGIT_1));
        driver.pressKey(new KeyEvent(AndroidKey.DIGIT_2));
        driver.pressKey(new KeyEvent(AndroidKey.DIGIT_3));
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "login_btn1");
        driver.pressKey(new KeyEvent(AndroidKey.DIGIT_4));


        // PASSWORD
        loadPage("login_txtPassword");
        System.out.println("====> Input password : " + password);
        driver.findElement(pars.getbjectLocator("login_txtPassword")).sendKeys(password);
        System.out.println("====> Click tombol masuk");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "login_btnMasuk");
        driver.findElement(pars.getbjectLocator("login_btnMasuk")).click();
    }

    public static void homescreenBlu() throws Exception {

        // pemberitahuan keamanan
//        StepLib.keamanan();

        // notif invalid
        StepLib.notifValid();

        // jika koneksi terputus
//        StepLib.connectionLost();

        // syarat ketentuan
//        StepLib.ketentuan();

        // BIOMETRIK
//        StepLib.biometrik();

        // DASHBOARD
        StepLib.loadPage("lblDashboard");
    }

    public static void Profile() throws InterruptedException {
        System.out.println("====> Click tombol profile");
        driver.findElement(pars.getbjectLocator("btnProfile")).click();
        System.out.println("====> Foto halaman profile");
    }

    public static void biometrik() throws InterruptedException {
        Boolean checkBio = false;
        try {
            System.out.println("====> CEK BIO");
            checkBio = driver.findElement(pars.getbjectLocator("lblHalamanBio")).isDisplayed();
        } catch (Exception e) {
            checkBio = false;
        }

        if (checkBio == true) {
            System.out.println("====> Click tombol nanti biometrik");
            driver.findElement(pars.getbjectLocator("btnBiometrik")).click();
        } else {
            System.out.println("====> Bio sudah aktif");
        }
    }

    public static void ketentuan() throws InterruptedException {
        Boolean terms = false;

        try {
            terms = driver.findElement(pars.getbjectLocator("lblTerms")).isDisplayed();
        } catch(Exception e) {
            terms = false;
        }

        if(terms == true) {
            System.out.println("====> Click tombol scroll terms");
            driver.findElement(pars.getbjectLocator("btnTerms")).click();
            System.out.println("====> Click tombol setuju terms");
            driver.findElement(pars.getbjectLocator("btnSetujuTerms")).click();
        } else {
            System.out.println("====> Terms Tidak ditampilkan");
        }
    }

    public static void ExistingLoginNoCapture() throws InterruptedException {
        Boolean checkExist = false;

        try {
            checkExist = driver.findElement(pars.getbjectLocator("btnLoginDenganAkunLain")).isDisplayed();
        } catch (Exception e) {
            checkExist = false;
        }

        if(checkExist == true) {
            driver.hideKeyboard();
            System.out.println("====> Klik tombol login dengan akun lain");
            driver.findElement(pars.getbjectLocator("btnLoginDenganAkunLain")).click();
            driver.findElement(pars.getbjectLocator("btnLoginDenganAkunLain")).click();
            System.out.println("====> Klik tombol lanjut");
            driver.findElement(pars.getbjectLocator("login_btnLanjut")).click();
        } else {
            System.out.println("====> Tidak masuk dengan akun lain");
        }
    }

    public static void ExistingOTP() throws InterruptedException {
        Boolean checkOTP = false;

        try {
            checkOTP = driver.findElement(pars.getbjectLocator("lblOtp")).isDisplayed();
        } catch (Exception e) {
            checkOTP = false;
        }

        if (checkOTP == true) {
            System.out.println("====> Kembali ke halaman mulai dari otp");
            StepLib.back();
        } else {
            System.out.println("====> Tidak masukkan OTP");
        }
    }

    public static void allow() throws  InterruptedException {
      Boolean boolAllowAddress = false, boolAllowPhone = false;

        try {
            boolAllowPhone = driver.findElement(pars.getbjectLocator("lblAllow")).isDisplayed();
        } catch (Exception e) {
            boolAllowPhone = false;
        }

        try {
            boolAllowAddress = driver.findElement(pars.getbjectLocator("lblAllowAddress")).isDisplayed();
        } catch (Exception e) {
            boolAllowAddress = false;
        }

        if(boolAllowAddress == true) {
            System.out.println("====> Click Allow Addres");
            driver.findElement(pars.getbjectLocator("lblAllowAddress")).click();
        } else if(boolAllowPhone == true){
            System.out.println("====> Klik tombol allow");
            driver.findElement(pars.getbjectLocator("lblAllow")).click();
        } else {
            System.out.println("====> Allow Tidak ada!");
        }
    }

    public static void keamanan() throws InterruptedException {
        Boolean page = false;

        try {
            page = driver.findElement(pars.getbjectLocator("btnMengerti")).isDisplayed();
           System.out.println("====> Berada dihalaman keamanan");
        } catch (Exception e) {
            page = false;
        }

        if(page == true) {
            System.out.println("====> Klik tombol saya mengerti");
            driver.findElement(pars.getbjectLocator("btnMengerti")).click();
        } else {
            System.out.println("====> Halaman keamanan tidak terdapat");
        }
    }

    public static void notifValid() throws InterruptedException {
        Boolean notif = false;

        try {
            notif = driver.findElement(pars.getbjectLocator("lblNotifInvalid")).isDisplayed();
            System.out.println("====> Muncul notifikasi invalid");
        } catch (Exception e) {
            notif = false;
        }

        if(notif == true) {
            System.out.println("====> Klik tombol oke");
            driver.findElement(pars.getbjectLocator("btnOke")).click();
            StepLib.goToDashboard();
        } else {
            System.out.println("====> Halaman notif invalid tidak ada");
        }
    }

    public static void connectionLost() throws InterruptedException {
        Boolean con;
        try {
            con = driver.findElement(pars.getbjectLocator("lblConnectionLost")).isDisplayed();
        } catch (Exception e) {
            con = false;
        }

        if(con == true) {
            System.out.println("====> Koneksi bermasalah");
            driver.findElement(pars.getbjectLocator("btnConnectionLost")).click();
        } else {
            System.out.println("====> Koneksi Lancar Jaya!!");
        }
    }

    public static void connectionError() throws InterruptedException {
        Boolean con = false;
        try {
            con = driver.findElement(pars.getbjectLocator("btnOke")).isDisplayed();
        } catch (Exception e) {
            con = false;
        }

        if(con == true) {
            System.out.println("====> terjadi kesalahan");
            driver.findElement(pars.getbjectLocator("btnOke")).click();
        } else {
            System.out.println("====> Tidak terjadi kesalahan");
        }
    }

    public static void btnHidden() throws Throwable {
        Boolean symbol;

        try {
            symbol = driver.findElement(pars.getbjectLocator("imgSymbolSaldo")).isDisplayed();
        } catch (Exception e) {
            symbol = false;
        }

        if (symbol == false) {
            System.out.println("====> Saldo masih hidden");
            driver.findElement(pars.getbjectLocator("mataBluAccount")).click();
        } else {
            System.out.println("====> Saldo sudah tampil");
        }
    }

    // -------------------- Pockets -------------------------
    public static void pockets(String Pocket) throws Throwable {
        Boolean saving, gether, deposit;

        switch (Pocket) {
            case "bluSaving" :
                try {
                    saving = driver.findElement(pars.getbjectLocator("btnOpenBlusaving")).isDisplayed();
                } catch (Exception e) {
                    saving = false;
                }

                if(saving == true) {
                    System.out.println("====> Click open " + Pocket);
                    FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnOpenBlusaving");
                    driver.findElement(pars.getbjectLocator("btnCardBlusaving")).click();
                    FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnOpenBlusaving");
                    driver.findElement(pars.getbjectLocator("btnOpenBlusaving")).click();
                } else if(saving == false){
                    System.out.println("====> Click lihat semua pockets " + Pocket);
                    FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnCardBlusaving");
                    driver.findElement(pars.getbjectLocator("btnCardBlusaving")).click();
                }
                break;
            case "bluGether" :
                swipePopDown();
                try {
                    gether = driver.findElement(pars.getbjectLocator("btnOpenBlugether")).isDisplayed();
                } catch (Exception e) {
                    gether = false;
                }

                if(gether == true) {
                    System.out.println("====> Click open " + Pocket);
                    FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnOpenBlugether");
                    driver.findElement(pars.getbjectLocator("btnOpenBlugether")).click();
                    FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnOpenBlugether");
                    driver.findElement(pars.getbjectLocator("btnOpenBlugether")).click();
                    createBlugether();
                }else if(gether == false) {
                    System.out.println("====> Click lihat semua pockets " + Pocket);
                    FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnCardBlugether");
                    driver.findElement(pars.getbjectLocator("btnCardBlugether")).click();
                }
                break;
            case "bluDeposit" :
                swipePopDown();
                swipePopDown();
                try {
                    deposit = driver.findElement(pars.getbjectLocator("btnOpenBludeposit")).isDisplayed();
                } catch (Exception e) {
                    deposit = false;
                }

                if (deposit ==  true){
                    System.out.println("====> Click open " + Pocket);
                    FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnOpenBludeposit");
                    driver.findElement(pars.getbjectLocator("btnOpenBludeposit")).click();
                    FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnOpenBludeposit");
                    driver.findElement(pars.getbjectLocator("btnOpenBlusaving")).click();
                    createBludeposit();
                }else if (deposit == false) {
                    System.out.println("====> Click lihat semua pockets " + Pocket);
                    FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnCardBludeposit");
                    driver.findElement(pars.getbjectLocator("btnCardBludeposit")).click();
                }
                break;
            default :
                System.out.println("====> Pocket tidak ada!");
                break;
        }
    }

    public static void createBlugether() throws Throwable {
        Boolean addblugether = false;
        try {
            addblugether = driver.findElement(pars.getbjectLocator("lblTambahBlugether")).isDisplayed();
        } catch (Exception e) {
            addblugether = false;
        }

        if(addblugether == true) {
            System.out.println("====> Klik tombol tambah");
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblTambahBlugether");
            driver.findElement(pars.getbjectLocator("lblTambahBlugether")).click();
        } else {
            System.out.println("====> Tombol tambah tidak ditemukan");
        }
    }

    public static void createBludeposit() throws Throwable {
        Boolean add = false;
        try {
            add = driver.findElement(pars.getbjectLocator("lblTambahBludeposit")).isDisplayed();
        } catch (Exception e) {
            add = false;
        }

        if(add == true) {
            System.out.println("====> Klik tombol tambah");
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblTambahBludeposit");
            driver.findElement(pars.getbjectLocator("lblTambahBludeposit")).click();
            System.out.println("Berhasil");
        } else {
            System.out.println("====> Tombol tambah tidak ditemukan");
        }
    }

    public static void ubahGoal() throws Throwable {
        Boolean ubah;

        try {
            ubah = driver.findElement(pars.getbjectLocator("btnUbahGoal")).isDisplayed();
        } catch (Exception e) {
            ubah = false;
        }

        if(ubah == true) {
            System.out.println("====> Klik tombol ubah");
            driver.findElement(pars.getbjectLocator("btnUbahGoal")).click();
        } else {
            System.out.println("Klik tombol button");
            driver.findElement(pars.getbjectLocator("btnRadioButtonAturGoal")).click();
        }
    }

    public static void ubahDebit() throws Throwable {
        Boolean ubah;

        try {
            ubah = driver.findElement(pars.getbjectLocator("btnUbahGoal")).isDisplayed();
        } catch (Exception e) {
            ubah = false;
        }

        if(ubah == true) {
            System.out.println("====> Klik tombol ubah");
            driver.findElement(pars.getbjectLocator("btnUbahGoal")).click();
        } else {
            System.out.println("Klik tombol button");
            driver.findElement(pars.getbjectLocator("btnRadioButtonAturGoal")).click();
        }
    }

    public static void logout(String out) throws Throwable {
        switch (out) {
            case "Keluar Aplikasi" :
                System.out.println(out);
                StepLib.Profile();
                StepLib.swipeinto(out);
                System.out.println("====> Foto tombol keluar");
                FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnKeluar");
                driver.findElement(pars.getbjectLocator("btnKeluar")).click();
                StepLib.loadPage("btnPilihKeluar");
                FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnPilihKeluar");
                driver.findElement(pars.getbjectLocator("btnPilihKeluar")).click();
                break;
            case "Masuk dengan Akun Lain" :
                System.out.println(out);
                StepLib.Profile();
                StepLib.swipeinto(out);
                System.out.println("====> Foto tombol Masuk dengan akun lain");
                FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnPindahAkun");
                driver.findElement(pars.getbjectLocator("btnPindahAkun")).click();
                FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnPilihPindahAkun");
                driver.findElement(pars.getbjectLocator("btnPilihPindahAkun")).click();
                break;
            default :
                System.out.println("Perintah tidak ada");
                break;
        }
    }









































    public static void swipeUpSection() throws InterruptedException {
        swipePopup();
        swipePopup();
        swipePopup();
        swipePopup();
        swipePopup();
        swipePopup();
    }

    public static void goToDashboard() throws InterruptedException {
        connection.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);

        try {
            driver.findElement(pars.getbjectLocator("lblHighlights")).isDisplayed();
        } catch (Exception e) {
            Boolean checkBool = false;
            do {
                back();
                try {
                    driver.findElement(pars.getbjectLocator("btnHome")).isDisplayed();
                    checkBool = true;
                } catch (Exception ex) {
                    checkBool = false;
                }
            } while(checkBool == false);
            driver.findElement(pars.getbjectLocator("btnHome")).click();
        }

        connection.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
    }

    public static void loadPage(String varObject) throws InterruptedException {
        Boolean boolData = false;
        do {
            try {
                boolData = driver.findElement(pars.getbjectLocator(varObject)).isDisplayed();
            } catch (Exception e) {
                boolData = false;
            }
        } while(boolData == false);
    }

    public static void timePage(String time) throws InterruptedException {
        do {
            Thread.sleep(5000);
        }while(driver.findElement(pars.getbjectLocator(time)).isDisplayed() == false);
    }

    public static void scrollToText(AndroidDriver<MobileElement> driver, String text) {
        MobileElement el = (MobileElement) driver.findElementByAndroidUIAutomator("new UiScrollable("+"new UiSelector().scrollable(true)).scrollIntoView(" + "new UiSelector().text(\""+text+"\"));");
    }

    public static void swipePopup() throws InterruptedException {
        Thread.sleep(500);
        //SWIPING AREA
        Dimension windowSizePopUp = driver.manage().window().getSize();

        Integer widthPopUp = windowSizePopUp.getWidth();
        Integer heightPopUp = windowSizePopUp.getHeight();

        //Bulan
        Integer xPopUp = (widthPopUp/3*2)-widthPopUp/5;
        Integer yPopUp = heightPopUp/2+heightPopUp/4;


        new TouchAction((PerformsTouchActions) driver)
                .press(PointOption.point(xPopUp, yPopUp))
                .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(xPopUp, yPopUp+150))
                .release().perform();
    }

    public static void clickBio() throws InterruptedException {
        System.out.println("Mengklik tombol bio");
        driver.findElement(pars.getbjectLocator("btnNantiBio")).click();
    }

    public static void swipeinto(String strValue) throws InterruptedException {
//         Swipping into
        driver.findElementByAndroidUIAutomator("new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text(\""+strValue+"\").instance(0))");
    }

    public static void swipePopDown() throws InterruptedException {
        Thread.sleep(500);
        //SWIPING AREA
        Dimension windowSizePopDown = driver.manage().window().getSize();

        Integer widthPopDown = windowSizePopDown.getWidth();
        Integer heightPopDown = windowSizePopDown.getHeight();

        //Bulan
        Integer xPopDown = (widthPopDown/3*2)-widthPopDown/5;
        Integer yPopDown = heightPopDown/2+heightPopDown/4;


        new TouchAction((PerformsTouchActions) driver)
                .press(PointOption.point(xPopDown, yPopDown))
                .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(xPopDown, yPopDown-heightPopDown/2))
                .release().perform();
    }

    public static void back() throws InterruptedException{
        System.out.println("====> Klik tombol kembali");
        driver.pressKey(new KeyEvent(AndroidKey.BACK));
    }

    public static void swipeBack() throws InterruptedException {
        //SWIPING AREA
        Dimension windowSizePopBack = driver.manage().window().getSize();

        Integer widthPopBack = windowSizePopBack.getWidth();
        Integer heightPopBack = windowSizePopBack.getHeight();

        Integer xPopUpBack = widthPopBack/2+widthPopBack/3;
        Integer yPopUpBack = heightPopBack/2;


        new TouchAction((PerformsTouchActions) driver)
                .press(PointOption.point(0, yPopUpBack))
                .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(xPopUpBack, yPopUpBack))
                .release().perform();
    }

    public static void swipeLeft() throws InterruptedException {
        //SWIPING AREA
        Dimension windowSizePopBack = driver.manage().window().getSize();

        Integer widthPopBack = windowSizePopBack.getWidth();
        Integer heightPopBack = windowSizePopBack.getHeight();

        Integer xPopUpBack = widthPopBack/2+widthPopBack/3;
        Integer yPopUpBack = heightPopBack/3;


        new TouchAction((PerformsTouchActions) driver)
                .press(PointOption.point(0, yPopUpBack))
                .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(xPopUpBack, yPopUpBack))
                .release().perform();
    }

    public static void swipeRight() throws InterruptedException {
        //SWIPING AREA
        Dimension windowSizePopBack = driver.manage().window().getSize();

        Integer widthPopBack = windowSizePopBack.getWidth();
        Integer heightPopBack = windowSizePopBack.getHeight();

        Integer xPopUpBack = widthPopBack/2+widthPopBack/3;
        Integer yPopUpBack = heightPopBack/3;


        new TouchAction((PerformsTouchActions) driver)
                .press(PointOption.point(widthPopBack, yPopUpBack))
                .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(widthPopBack/2, yPopUpBack))
                .release().perform();
    }

    public static void pinTransaksi(String PIN) throws InterruptedException {
        try {
            switch (PIN) {
                case "1" :
                    driver.findElement(pars.getbjectLocator("PIN_btn1")).click();
                    break;
                case "2" :
                    driver.findElement(pars.getbjectLocator("PIN_btn2")).click();
                    break;
                case "3" :
                    driver.findElement(pars.getbjectLocator("PIN_btn3")).click();
                    break;
                case "4" :
                    driver.findElement(pars.getbjectLocator("PIN_btn4")).click();
                    break;
                case "5" :
                    driver.findElement(pars.getbjectLocator("PIN_btn5")).click();
                    break;
                case "6" :
                    driver.findElement(pars.getbjectLocator("PIN_btn6")).click();
                    break;
                case "7" :
                    driver.findElement(pars.getbjectLocator("PIN_btn7")).click();
                    break;
                case "8" :
                    driver.findElement(pars.getbjectLocator("PIN_btn8")).click();
                    break;
                case "9" :
                    driver.findElement(pars.getbjectLocator("PIN_btn9")).click();
                    break;
                case "0" :
                    driver.findElement(pars.getbjectLocator("PIN_btn0")).click();
                    break;
            }
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("Gagal");
        }
    }

    public static void LogoutFeature() throws InterruptedException {
        System.out.println("====> Click Tombol Pengaturan");
        driver.findElement(pars.getbjectLocator("btnProfile")).click();
        StepLib.swipeinto("Masuk dengan Akun Lain");
        System.out.println("====> Click Tombol Keluar");
        driver.findElement(pars.getbjectLocator("btnKeluar")).click();
        System.out.println("====> Click pilih keluar");
        driver.findElement(pars.getbjectLocator("btnPilihKeluar")).click();
    }

    public static void downloaEStatement() throws Throwable {
        Boolean office = false;

        allow();

        System.out.println("====> Klik tombol download e-statement");
        driver.findElement(pars.getbjectLocator("btnDownloadEStatement")).click();
        System.out.println("====> Klik office pdf");
        driver.findElement(pars.getbjectLocator("btnOffice")).click();;
        System.out.println("====> Foto laporan pdf");
        StepLib.loadPage("lblPdf");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblPdf");
        System.out.println("====> Kembali dari office pdf");
        StepLib.back();
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnBackOffice");
        driver.findElement(pars.getbjectLocator("btnBackOffice")).click();
        StepLib.back();
    }










//    public static void checkAutoDebit() throws InterruptedException {
//        Boolean check = false;
//        try {
//            check = driver.findElement(pars.getbjectLocator("btnUbahDebit")).isDisplayed();
//        } catch(Exception e) {
//            check = false;
//        }
//
//        if(check == true) {
//            System.out.println("====> Klik ubah autodebit");
//            driver.findElement(pars.getbjectLocator("btnUbahDebit")).click();
//            System.out.println("====> Klik tombol frekuensi");
//            driver.findElement(pars.getbjectLocator("btnFrekuensi")).click();
//            System.out.println("====> Klik pilih frekuensi");
//            driver.findElement(pars.getbjectLocator("btnPilihFrekuensi")).click();
//            System.out.println("====> Pilih simpan perubahan blusaving");
//            driver.findElement(pars.getbjectLocator("btnSimpanBlusaving")).click();
////            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum);
//            StepLib.timePage("lblHalamanFrekuensi");
//        } else {
//            System.out.println("====> Klik check autodebit");
//            driver.findElement(pars.getbjectLocator("btnRadioButtonAutoDebit")).click();
//            System.out.println("====> Klik tombol frekuensi");
//            driver.findElement(pars.getbjectLocator("btnFrekuensi")).click();
//            System.out.println("====> Klik pilih frekuensi");
//            driver.findElement(pars.getbjectLocator("btnPilihFrekuensi")).click();
//            System.out.println("====> Pilih simpan perubahan blusaving");
//            driver.findElement(pars.getbjectLocator("btnSimpanBlusaving")).click();
////            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum);
//            StepLib.timePage("lblHalamanFrekuensi");
//        }
//    }
//
//    public static void HapusMember() throws InterruptedException {
//
//    }
//
//    public static void dateUpdate(AndroidElement androidElement) throws InterruptedException {
//        new TouchAction(driver)
//                .tap(tapOptions().withElement(element(androidElement)))
//                .waitAction(waitOptions(ofMillis(250))).perform();
//    }
//    public static void ExistingBlusaving() throws InterruptedException {
//        driver.findElement(pars.getbjectLocator("btnExistingBlusaving")).click();
//        back();
//        driver.findElement(pars.getbjectLocator("btnHome")).click();
//        LogoutFeature();
//    }
//
//    public static void OpenBluSaving() throws InterruptedException {
//        System.out.println("====> Click Card blusaving");
//        driver.findElement(pars.getbjectLocator("btnOpenCardBlusaving")).click();
//        System.out.println("====> Click tombol blusaving");
//        driver.findElement(pars.getbjectLocator("btnBukaBlusaving")).click();
//    }
//
//    public static void tambahBlusaving() throws Throwable {
//        Boolean data = false;
//
//        System.out.println("====> Foto halaman blusaving");
//        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblTambahBluSaving");
//        System.out.println("====> Klik tambah blusaving");
//        driver.findElement(pars.getbjectLocator("lblTambahBlusaving")).click();
//
//        try {
//            data = driver.findElement(pars.getbjectLocator("btnExistingBlusaving")).isDisplayed();
//        } catch(Exception e) {
//            data = false;
//        }
//
//        if (data == true) {
//            System.out.println("====> Blusaving sudah penuh");
//        }
//    }
//
//    public static void OpenBluGether() throws InterruptedException {
//        System.out.println("====> Click Card blugether");
//        driver.findElement(pars.getbjectLocator("btnOpenCardBluGether")).click();
//        System.out.println("====> Click tombol blusaving");
//        driver.findElement(pars.getbjectLocator("btnBukaBlusaving")).click();
//    }
//
//    public static void tambahBlugether() throws InterruptedException {
//        Boolean data;
//
//        System.out.println("====> Klik tambah blusaving");
//        driver.findElement(pars.getbjectLocator("lblLihatSemuaSimpanan")).click();
//
//        try {
//            data = driver.findElement(pars.getbjectLocator("btnExistingBlusaving")).isDisplayed();
//        } catch(Exception e) {
//            data = false;
//        }
//
//        if (data == true) {
//            System.out.println("====> Blusaving sudah penuh");
//        }
//    }
}
