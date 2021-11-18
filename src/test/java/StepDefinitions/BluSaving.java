package StepDefinitions;

import Lib.FunctionalLib;
import Lib.ReadObject;
import Lib.StepLib;
import Runner.Runner;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.ast.Step;
import gherkin.lexer.Th;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class BluSaving extends Runner {

    public AndroidDriver driver = this.connection;
    public ReadObject pars = this.parser;
    public String capturePath = Runner.capturePath;
    public String featureName = Runner.currentFeature;


    // Berada dihalaman list blusaving
    @When("^Berada dihalaman list blusaving$")
    public void berada_dihalaman_list_blusaving() throws Throwable {
        System.out.println("====> Berada dihalaman list blusaving");
        StepLib.loadPage("lblHalamanDaftarBluSaving");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblHalamanDaftarBluSaving");
    }

    //    Create
    @When("^Tambah blusaving$")
    public void tambahBlusaving() throws Throwable {
        System.out.println("CREATE BLUSAVING");
        driver.findElement(pars.getbjectLocator("lblTambahBlusaving")).click();
    }

    // Input nama  dan setor awal
    @When("^Input nama (.*) dan setoran awal (.*)$")
    public void inputNamaSetoranAwal(String nama, String setor) throws Throwable {
        // Input nama
        System.out.println("====> Input nama blusaving");
        driver.findElement(pars.getbjectLocator("lblNamaBluSaving")).sendKeys(nama);

        // setoran awal
        System.out.println("====> Input setoran awal");
        driver.findElement(pars.getbjectLocator("lblSetoranAwal")).sendKeys(setor);

        //Klik tombol lanjut
        System.out.println("====> Klik tombol lanjut");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnLanjut");
        StepLib.timePage("btnLanjut");
        driver.findElement(pars.getbjectLocator("btnLanjut")).click();
        StepLib.loadPage("btnLanjut");
    }

    // Atur Goal dan tanggal pencapaian
    @When("^Atur Goal (.*) dan tanggal (.*)$")
    public void aturGoal(String goal, int tanggal) throws Throwable {
        // Jumlah atur goal
        StepLib.loadPage("lblInputAturGoal");
        System.out.println("====> Jumlah atur goal : " + goal);
        driver.findElement(pars.getbjectLocator("lblInputAturGoal")).sendKeys(goal);
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblInputAturGoal");
        StepLib.timePage("lblInputAturGoal");

        // Tanggal pencapaian
        if (tanggal == 1) {
            System.out.println("====> Tentukan tanggal pencapaian");
            StepLib.loadPage("lblTanggalPencapaian");
            driver.findElement(pars.getbjectLocator("lblTanggalPencapaian")).click();
            FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnPilih");

            System.out.println("====> Tekan tombol pilih");
            driver.findElement(pars.getbjectLocator("btnPilih")).click();
        } else if (tanggal != 1) {
            System.out.println("====> Tidak atur tangal pencapaian");
        }

        //Klik tombol lanjut

        System.out.println("====> Klik tombol lanjut");
        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnLanjut");
        driver.findElement(pars.getbjectLocator("btnLanjut")).click();
    }

    // Atur debit dan tanggal pencapaian
    @When("^Atur autodebit (.*) dan (.*) jumlah debit (.*)$")
    public void atur_autodebit(int frekuensi, int aturDebit, String jumlahDebit) throws Throwable {
        StepLib.loadPage("btnFrekuensi");

        // Frekuensi
        if (frekuensi == 1) {
            System.out.println("====> Pilih Frekuensi");
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnFrekuensi");
            driver.findElement(pars.getbjectLocator("btnFrekuensi")).click();
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnPilih");
            driver.findElement(pars.getbjectLocator("btnPilih")).click();
            StepLib.loadPage("lblJumlahDebit");
        } else if (frekuensi != 1) {
            System.out.println("Tidak atur frekuensi");
        }

         // input jumlah yang didebit
        if (aturDebit == 0) {
            System.out.println("====> Tidak atur jumlah debit");
        } else if (aturDebit != 0) {
            System.out.println("====> Input jumlah yang akan di debit");
            driver.findElement(pars.getbjectLocator("lblJumlahDebit")).sendKeys(jumlahDebit);
        }

        // tombol buka blusaving
        System.out.println("====> Tekan tombol buka blusaving");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnBukaBluSaving");
        driver.findElement(pars.getbjectLocator("btnBukaBluSaving")).click();
    }

    // berada dihalaman berhasil buka blusaving
    @When("^Berada dihalaman berhasil membuat blusaving$")
    public void berada_dihalaman_berhasil_membuat_blusaving() throws Throwable {
        StepLib.loadPage("btnKembaliKedaftarBlusaving");
        System.out.println("====> Halaman berhasil buka blusaving");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnKembaliKedaftarBlusaving");
        driver.findElement(pars.getbjectLocator("btnKembaliKedaftarBlusaving")).click();
        StepLib.loadPage("cardBluSaving");
    }


    @When("^Berada dihalaman detail blusaving$")
    public void berada_dihalaman_detail_blusaving() throws Throwable {
        // berada dihalaman detail blusaving
        System.out.println("====> Berada dihalaman detail blusaving");
        StepLib.loadPage("lblTambahDanaBluSaving");
        StepLib.swipePopDown();
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblTambahDanaBluSaving");
    }

    @When("^Cek riwayat transaksi blusaving$")
    public void cek_riwayat_transaksi_blusaving() throws Throwable {
        // klik tombol more
        StepLib.loadPage("btnMore");
        driver.findElement(pars.getbjectLocator("btnMore")).click();

        // klik riwayat transaksi
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblLihatRiwayatTransaksi");
        driver.findElement(pars.getbjectLocator("lblLihatRiwayatTransaksi")).click();

        // foto halaman riwayat transaksi
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblHalamanRiwayatTransaksi");
        StepLib.timePage("lblHalamanRiwayatTransaksi");
    }




    // Tarik dana
    @When("^Klik tombol tarik dana$")
    public void klik_tombol_tarik_dana() throws Throwable {
        System.out.println("====> Klik tombol tarik dana");
        StepLib.loadPage("lblTarikDanaBluSaving");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblTarikDanaBluSaving");
        driver.findElement(pars.getbjectLocator("lblTarikDanaBluSaving")).click();
    }

    @When("^Input jumlah tarik dana (.*)$")
    public void input_jumlah_tarik_dana(String jmltarikdana) throws Throwable {
        System.out.println("====> Input jumlah Tarik dana");
        driver.findElement(pars.getbjectLocator("lblInputJumlahTarikDana")).sendKeys(jmltarikdana);
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnLanjut");
        driver.findElement(pars.getbjectLocator("btnLanjut")).click();
    }

    @When("^Berada dihalaman konfirmasi tarik dana$")
    public void berada_dihalmaan_konfirmasi_tarik_dana() throws Throwable {
        System.out.println("====> Halaman konfirmasi tarik dana");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnLanjut");
        driver.findElement(pars.getbjectLocator("btnLanjut")).click();
    }

    @When("^Berada dihalaman berhasil tarik dana$")
    public void berada_dihalama_berhasil_tarik_dana() throws Throwable {
        StepLib.loadPage("btnKembali");
        System.out.println("====> Berada dihalaman berhasil tambah dana");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnKembali");
        driver.findElement(pars.getbjectLocator("btnKembali")).click();
    }

    @When("^Halaman detail blusaving$")
    public void halaman_blusaving() throws Throwable {
        System.out.println("====> Berada dihalaman blusaving");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblTarikDanaBluSaving");
    }

    // Tambah dana
    @When("^Klik tombol tambah dana$")
    public void klik_tombol_tambah_dana() throws Throwable {
        System.out.println("TAMBAH DANA BLUSAVING");
        System.out.println("====> Klik tombol tambah dana");
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

    // Update Blusaving
    @When("^Klik tombol pengaturan blusaving$")
    public void klik_tombol_pengaturn_blusaving() throws Throwable {
        System.out.println("====> Klik tombol pengaturan");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblPengaturanBlusaving");
        driver.findElement(pars.getbjectLocator("lblPengaturanBlusaving")).click();
    }

    @When("^Input nama blusaving baru (.*)$")
    public void input_nama_blusaving_baru(String namablusavingbaru) throws Throwable {
        StepLib.swipePopDown();
        StepLib.swipePopDown();
        System.out.println("====> Input nama blusaving baru : " + namablusavingbaru);
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");
        driver.findElement(pars.getbjectLocator("lblEditNamaBlusaving")).clear();
        driver.findElement(pars.getbjectLocator("lblEditNamaBlusaving")).sendKeys(namablusavingbaru);
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");
    }

    @When("^Atur goal baru (.*) jumlah atur goal (.*) tanggal pencapaian (.*)$")
    public void atur_goal_baru_jumlahaturgoal_tanggalpencapaian(int aturGoal, String jumlahGoal, int tanggal) throws Throwable {

        if (aturGoal == 1) {
            StepLib.ubahGoal();
            System.out.println("ATUR GOAL");
            System.out.println("====> Jumlah atur goal");
            driver.findElement(pars.getbjectLocator("lblInputAturGoal")).clear();
            driver.findElement(pars.getbjectLocator("lblInputAturGoal")).sendKeys(jumlahGoal);
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");

            if (tanggal == 1) {
                System.out.println("====> Tentukan tanggal pencapaian");
                driver.findElement(pars.getbjectLocator("lblTanggalPencapaian")).click();
                FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnPilih");

                System.out.println("====> Tekan tombol pilih");
                driver.findElement(pars.getbjectLocator("btnPilih")).click();
            } else if (tanggal != 1) {
                System.out.println("Tidak atur tangal pencapaian");
            }

            System.out.println("====> Klik tombol simpan");
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");
            driver.findElement(pars.getbjectLocator("btnSimpan")).click();

        } else if (aturGoal != 1) {
            System.out.println("====> Tidak update atur goal");
        }
    }
//        switch (aturGoal) {
//            case "Y" :
//                System.out.println("====> Atur goal");
//                driver.findElement(pars.getbjectLocator("btnRadioButtonAturGoal")).click();
//                System.out.println("====> Jumlah atur goal");
//                driver.findElement(pars.getbjectLocator("lblInputAturGoal")).clear();
//                driver.findElement(pars.getbjectLocator("lblInputAturGoal")).sendKeys(jumlahGoal);
//                FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnSimpan");
//
//                // Tanggal pencapaian
//                switch (tanggal) {
//                    case "Y" :
//                        System.out.println("====> Tentukan tanggal pencapaian");
//                        driver.findElement(pars.getbjectLocator("lblTanggalPencapaian")).click();
//                        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnPilih");
//
//                        System.out.println("====> Tekan tombol pilih");
//                        driver.findElement(pars.getbjectLocator("btnPilih")).click();
//                        break;
//                    case "N" :
//                        System.out.println("Tidak atur tangal pencapaian");
//                        break;
//                    default:
//                        System.out.println("Tidak ada keyword");
//                        break;
//                }
//
//                //Klik tombol simpan
//                System.out.println("====> Klik tombol simpan");
//                FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnSimpan");
//                driver.findElement(pars.getbjectLocator("btnSimpan")).click();
//                break;
//            case "N" :
//                System.out.println("====> Tidak update atur goal");
//                break;
//        }
//    }

    @When("^Atur debit (.*) atur frekuensi (.*) atur jumlah yang didebit (.*) (.*)$")
    public void atur_debit_aturfrekuensi_aturjumlahyangdidebit_(String aturDebit, String FrekuensiDebit,String aturJumlahDebit, String jumlahDebit) throws Throwable {
        switch (aturDebit) {
            case "Y" :
                // Frekuensi
                switch (FrekuensiDebit) {
                    case "Y" :
                        System.out.println("====> Update debit");
                        driver.findElement(pars.getbjectLocator("btnRadioButtonAutoDebit")).click();

                        System.out.println("====> Pilih Frekuensi");
                        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnFrekuensi");
                        driver.findElement(pars.getbjectLocator("btnFrekuensi")).click();
                        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnPilih");
                        driver.findElement(pars.getbjectLocator("btnPilih")).click();
                        break;
                    case "N" :
                        System.out.println("====> Tidak atur frekuensi");
                        break;
                }

                // input jumlah yang didebit
                switch (aturJumlahDebit) {
                    case "Y" :
                        System.out.println("====> Input jumlah yang akan di debit");
                        driver.findElement(pars.getbjectLocator("lblJumlahDebit")).clear();
                        driver.findElement(pars.getbjectLocator("lblJumlahDebit")).sendKeys(jumlahDebit);
                        FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblJumlahDebit");
                        break;
                    case "N" :
                        System.out.println("====> Debit otomatis terisi");
                        break;
                }

                //Klik tombol simpan
                System.out.println("====> Klik tombol simpan");
                FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "btnSimpan");
                driver.findElement(pars.getbjectLocator("btnSimpan")).click();
                break;
            case "N" :
                System.out.println("Tidak update debit");
                break;
        }
    }

    @When("^Klik tombol simpan$")
    public void klik_tombol_simpan() throws Throwable {
        System.out.println("====> Klik tombol simpan");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");
        driver.findElement(pars.getbjectLocator("btnSimpan")).click();
    }


    // Close blusaving
    @When("^Klik tombol tutup blusaving$")
    public void klik_tombol_tutup_blusaving() throws Throwable {
        System.out.println("TUTUP BLUSAVING");
        System.out.println("====> Klik tombol tutup blusaving");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnTutupBluSaving");
        driver.findElement(pars.getbjectLocator("btnTutupBluSaving")).click();

        System.out.println("====> Klik tombol yakin");
        StepLib.timePage("btnYakin");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnYakin");
        driver.findElement(pars.getbjectLocator("btnYakin")).click();
    }

    @When("^Berada dihalaman berhasil tutup blusaving$")
    public void berada_dihalaman_berhasil_tutup_blusaving() throws Throwable {
        StepLib.loadPage("btnDetail");
        System.out.println("====> Berada dihalaman berhasil blusaving");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnDetail");
        driver.findElement(pars.getbjectLocator("btnDetail")).click();
        StepLib.swipePopDown();
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnDetail");

        // klik download e statement
        System.out.println("====> Klik tombol download e-statement");
        driver.findElement(pars.getbjectLocator("btnDownloadEStatement")).click();
        StepLib.downloaEStatement();

        // klik tombol ke daftar blusaving
        driver.findElement(pars.getbjectLocator("btnKembaliKedaftarBlusaving")).click();
    }

    // THEN
    @Then("^Check Bukti transaksi,mutasi, notifikasi$")
    public void check_bukti_transaksi_mutasi_notifikasi() throws Throwable {
        // bukti transaksi
        // mutasi
        // notifikasi
        // compare
    }


}
