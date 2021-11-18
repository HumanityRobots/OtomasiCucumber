package StepDefinitions;

import Lib.FunctionalLib;
import Lib.ReadObject;
import Lib.StepLib;
import Runner.Runner;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.android.AndroidDriver;

public class ExistingLogin extends Runner {
    public AndroidDriver driver = this.connection;
    public ReadObject pars = this.parser;
    public String capturePath = Runner.capturePath;
    public String featureName = Runner.currentFeature;

    @Then("^Berada dihalaman existing login (.*)$")
    public void input_nama_blusaving_dan_setoran_awal_klik_lanjut(String nomor) throws Throwable {
        StepLib.loadPage("btnLoginDenganAkunLain");
        System.out.println("=====> Berada dihalaman existing login");
        System.out.println("=====> Input password");
        driver.findElement(pars.getbjectLocator("login_txtPassword")).sendKeys(nomor);
        System.out.println("=====> Foto halaman existing login");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnLoginDenganAkunLain");
        System.out.println("=====> Klik tombol masuk");
        driver.findElement(pars.getbjectLocator("login_btnMasuk")).click();
    }
}
