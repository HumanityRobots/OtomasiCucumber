package StepDefinitions;

import Lib.StepLib;
import Runner.Runner;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import Lib.FunctionalLib;
import Lib.ReadObject;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class GreetingLogin extends Runner {
    public AndroidDriver driver =this.connection;
    public ReadObject pars = this.parser;
    public String CapturePath = Runner.capturePath;
    public String featureName = Runner.currentFeature;

    // -----------GIVEN---------------
    @Given("^Berada dihalaman onboarding$")
    public void berada_dihalaman_onboarding()throws Throwable {
        driver.resetApp();
        intScenarioNum++;
        StepLib.ExistingLoginNoCapture();
        StepLib.ExistingOTP();
        StepLib.allow();
    }

    // -----------WHEN----------------

    @When("^Klik tombol Yuk Mulai$")
    public void klik_tombol_Yuk_Mulai() throws Throwable {
        System.out.println("LOGIN");
        System.out.println("====> Foto Yuk Mulai");
        FunctionalLib.takeSnapShot(driver,CapturePath,featureName,intScenarioNum, "login_btnYukMulai");
        System.out.println("====> Clik Yuk Mulai");
        driver.findElement(pars.getbjectLocator("login_btnYukMulai")).click();
        StepLib.loadPage("login_btnLanjut");
    }

    @When("^Berada dihalaman nomor telepon$")
    public void berada_dihalaman_nomor_telepon() throws Throwable {
        System.out.println("====> Foto greeting");
        FunctionalLib.takeSnapShot(driver,CapturePath,featureName,intScenarioNum, "login_btnLanjut");
        assert driver.findElement(pars.getbjectLocator("login_btnLanjut")).isDisplayed() == true;
    }

    @When("^Input nomor handphone dengan nomor (.*)$")
    public void input_nomor_handphone_dengan_nomor(String nomor) throws Throwable {
        System.out.println("INPUT NOMOR HANDPHONE");
        System.out.println("====> Clear Nomor Handphone");
        driver.findElement(pars.getbjectLocator("login_txtNoHp")).clear();
        System.out.println("====> Input nomor handphone");
        driver.findElement(pars.getbjectLocator("login_txtNoHp")).sendKeys(nomor);
        FunctionalLib.takeSnapShot(driver,CapturePath,featureName,intScenarioNum, "login_btnLanjut");
        System.out.println("====> Click tombol lanjut");
        driver.findElement(pars.getbjectLocator("login_btnLanjut")).click();
        StepLib.allow();
    }

    @When("^Input nomor otp$")
    public void input_nomor_otp() throws Throwable {
        System.out.println("INPUT NOMOR OTP");
        System.out.println("====> Click OTP");
        StepLib.loadPage("login_btn1");
        driver.findElement(pars.getbjectLocator("login_btn1")).click();
        driver.pressKey(new KeyEvent(AndroidKey.DIGIT_1));
        driver.pressKey(new KeyEvent(AndroidKey.DIGIT_2));
        driver.pressKey(new KeyEvent(AndroidKey.DIGIT_3));
        FunctionalLib.takeSnapShot(driver,CapturePath,featureName,intScenarioNum, "login_btn1");
        driver.pressKey(new KeyEvent(AndroidKey.DIGIT_4));
    }

    @When("^Berada dihalaman password$")
    public void berada_dihalaman_password() throws Throwable {
        System.out.println("====> Foto greeting");
        assert driver.findElement(pars.getbjectLocator("lblGreeting")).isDisplayed() == true;
        FunctionalLib.takeSnapShot(driver,CapturePath,featureName,intScenarioNum, "lblGreeting");
    }

    @When("^Input password (.*)$")
    public void input_password_valid_pada_layar_login(String password) throws Throwable {
        System.out.println("INPUT PASSWORD");
        System.out.println("====> Input password");
        driver.findElement(pars.getbjectLocator("login_txtPassword")).sendKeys(password);
        System.out.println("====> Click tombol masuk");
        driver.findElement(pars.getbjectLocator("login_btnMasuk")).click();
    }

    @When("^Tampil dashboard home$")
    public void tampil_dashboard_home() throws Throwable {
        StepLib.ketentuan();
        assert driver.findElement(pars.getbjectLocator("lblDashboard")).isDisplayed() == true;
    }
}
