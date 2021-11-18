package Lib;

import Runner.Runner;
import io.appium.java_client.android.AndroidDriver;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;

public class FunctionalLib extends Runner {

    public static void takeSnapShot(AndroidDriver driver, String Path, String feature, Integer intSceNum, String Object) throws Exception {

        String folderName = Path+"/"+feature.replace(" ","_");

        Timestamp timestamp = new Timestamp(System.currentTimeMillis());

        File f = new File(folderName);
        if (! f.exists()) {
            createFolder(folderName);
        }

        if(!Object.equals("")) {
            wait.until(ExpectedConditions.visibilityOf(driver.findElement(parser.getbjectLocator(Object))));
        }

        TakesScreenshot scrShot =(driver);
        File SrcFile=scrShot.getScreenshotAs(OutputType.FILE);
        File DestFile=new File(folderName+"\\"+intSceNum+"_"+timestamp.toString().replace(":",""+intSceNum)+".jpeg");
        FileUtils.copyFile(SrcFile, DestFile);
        Thread.sleep(2000);
    }


    public static void createFolder(String folderName){
        try {
            Path path = Paths.get(folderName);
            //java.nio.file.Files;
            Files.createDirectories(path);
            System.out.println("====> Directory is created! : " + folderName);
        } catch (IOException e) {
            System.err.println("====> Failed to create directory!" + e.getMessage());
        }
    }
}
