package Runner;

import Lib.ReadObject;
import Lib.Report;
import Lib.StepLib;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

@CucumberOptions(
        features = {"src/test/resources/Features"},
//        Greeting & Existing login
//          tags={"@GreetingRegression"},
//          tags={"@ExistingLogin"},


//        BluSaving
//        tags = { "@CreateBluSaving" },
//        tags = { "@UpdateBluSaving" },
//        tags = { "@TambahDanaBluSaving" },
//        tags = { "@TarikDanaBluSaving" },
//        tags = { "@CloseBluSaving" },

//        BluGether
//        tags = { "@CreateBluGether"},
//        tags = { "@UpdateBluGether" },
        tags = { "@TambahDanaBluGether" },
//        tags = { "@TarikDanaBluGether" },
//        tags = { "@CloseBluGether" },

//        BluDeposit
//        tags = { "@CreateBluDeposit" },
//        tags = { "@TopUpBluDeposit" },
//        tags = { "@DisburseBluDeposit" },

        glue= {"StepDefinitions"},
        plugin = { "pretty","html:target/cucumber-reports", "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"}
)


public class Runner extends AbstractTestNGCucumberTests {
    protected AndroidDriver<MobileElement> driver;
    //    protected WebDriverWait                wait;
    protected StepLib                mobileActions;
    private TestNGCucumberRunner testNGCucumberRunner;
    public static AndroidDriver connection;
    public static WebDriverWait wait;
    public static ReadObject parser;
    public static String capturePath;
    public static String currentFeature;
    public static Integer intScenarioNum;
    public static HashMap<String, String>glbVarString = new HashMap<>();
    public static HashMap<String,Boolean> glbVarBoolean = new HashMap<>();


    public void BaseScreen(AndroidDriver<MobileElement> driver) {
        this.driver = driver;
        wait = new WebDriverWait(driver, 15);
        mobileActions = new StepLib(driver);
    }

    @BeforeClass(alwaysRun = true)
    public void setUPCucumber() {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());

        String now = LocalDate.now().toString();
        String[] strDateNow = LocalDateTime.now().toString().split("[.]");//(dtf.format(now).toString());
        String strDate = strDateNow[0].replace(":","-");
        capturePath = "C:\\CaptureScreen\\ScreenShoot\\" + strDate + "_" + currentFeature;
    }

    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }

    @BeforeMethod
    @Parameters(value = { "appPackage", "appActivity", "udid" })
    public void setUpCucumber(String appPackage, String appActivity, String udid) throws IOException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("deviceName", "Realme");
        capabilities.setCapability("udid", udid); //Give Device ID of your mobile phone
        capabilities.setCapability("appPackage", appPackage);
        capabilities.setCapability("appActivity", appActivity);
        capabilities.setCapability("noReset", "true");
        capabilities.setCapability("autoWebView", "true");
        capabilities.setCapability("chromedriverExecutable", System.getProperty("user.dir") +"\\chromeDriver\\chromedriver.exe");
        connection = new AndroidDriver<>(new URL("http://0.0.0.0:4723/wd/hub"), capabilities);
        connection.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        wait = new WebDriverWait(connection, 5);
        parser = new ReadObject(System.getProperty("user.dir")+"/src/test/java/objects/object.properties");
        intScenarioNum = 0;
    }

    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        currentFeature = cucumberFeature.toString();
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }

    @AfterMethod
    public void afterMethod() throws IOException{
        System.out.println("After method");
        String folderNameMethod = capturePath+"/"+currentFeature.replace(" ", "_")+"/";
        Report.CreateWPExcel(folderNameMethod, currentFeature,"HORIZONTAL");
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass() {
        testNGCucumberRunner.finish();
        Reporter.loadXMLConfig(new File(System.getProperty("user.dir")+"/src/extent-config.xml"));
    }

//    @BeforeClass(alwaysRun = true)
//    @Parameters(value = { "appPackage", "appActivity", "udid" })
//    public void setUpCucumber(String appPackage, String appActivity, String udid) throws IOException {
//        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
//
//        DesiredCapabilities capabilities = new DesiredCapabilities();
//        capabilities.setCapability("platformName", "Android");
//        capabilities.setCapability("deviceName", "Samsung");
//        capabilities.setCapability("udid", udid); //Give Device ID of your mobile phone
//        capabilities.setCapability("appPackage", appPackage);
//        capabilities.setCapability("appActivity", appActivity);
//        capabilities.setCapability("noReset", "true");
//        capabilities.setCapability("autoWebView", "true");
//        capabilities.setCapability("chromedriverExecutable", System.getProperty("user.dir") +"\\chromeDriver\\chromedriver.exe");
//        connection = new AndroidDriver<>(new URL("http://0.0.0.0:4723/wd/hub"), capabilities);
//        connection.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//        wait = new WebDriverWait(connection, 5);
//        parser = new ReadObject(System.getProperty("user.dir")+"/src/test/java/objects/object.properties");
//    }

//    @DataProvider
//    public Object[][] features() { return testNGCucumberRunner.provideFeatures(); }
//    @BeforeMethod
//    public void beforeClass() throws IOException {
//        intScenarioNum = 0;
//        String now = LocalDate.now().toString();
//        String[] strDateNow = LocalDateTime.now().toString().split("[.]");//(dtf.format(now).toString());
//        String strDate = strDateNow[0].replace(":","-");
//        capturePath = "/CaptureScreen/BLUCUCUMBER/"+strDate;
//    }
}