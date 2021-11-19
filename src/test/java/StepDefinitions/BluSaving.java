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

    @When("^(.*) Lakukan update (.*) saat update detail input nama (.*) Atur goal baru (.*) jumlah atur goal (.*) tanggal pencapaian (.*) Atur debit (.*) atur frekuensi (.*) atur jumlah yang didebit (.*) (.*) kalau update teman input nomor rekening (.*)$")
    public void lakukan_update_saat_update_detail_input_nama_atur_goal_baru_jumlah_atur_goal_tanggal_pencapaian_atur_debit_atur_frekuensi_atur_jumlah_yang_didebit_kalau_update_teman_input_nomor_rekening(
            int no,
            String update,
            String namablusavingbaru,
            int aturGoal,
            String jumlahGoal,
            int tanggal,
            int aturDebit,
            int FrekuensiDebit,
            int aturJumlahDebit,
            String jumlahDebit,
            String nomorRekening
    ) throws Throwable {
        System.out.println("UPDATE : " + update);

        if (no == 1) {
            // Klik tombol pengaturan blusaving
            System.out.println("====> Klik tombol pengaturan");
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblPengaturanBlusaving");
            driver.findElement(pars.getbjectLocator("lblPengaturanBlusaving")).click();

            // input nama blusaving
            StepLib.swipePopDown();
            StepLib.swipePopDown();
            System.out.println("====> Input nama blusaving baru : " + namablusavingbaru);
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");
            driver.findElement(pars.getbjectLocator("lblEditNamaBlusaving")).clear();
            driver.findElement(pars.getbjectLocator("lblEditNamaBlusaving")).sendKeys(namablusavingbaru);
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");

            // Atur Goal
            if (aturGoal == 1) {
                System.out.println("ATUR GOAL");
                StepLib.ubahGoal();
                System.out.println("====> Jumlah atur goal :" + jumlahGoal);
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

            // Atur Debit
            if (aturDebit == 1) {
                System.out.println("ATUR DEBIT");
                StepLib.ubahDebit();

                // FrekuensiDebit
                if (FrekuensiDebit == 1) {
                    System.out.println("====> Pilih Frekuensi");
                    FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnFrekuensi");
                    driver.findElement(pars.getbjectLocator("btnFrekuensi")).click();
                    FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnPilih");
                    driver.findElement(pars.getbjectLocator("btnPilih")).click();
                } else if (FrekuensiDebit != 1) {
                    System.out.println("====> Tidak Update Frekuensi");
                }

                // JumlahDebit
                if (aturJumlahDebit == 1) {
                    System.out.println("====> Input jumlah yang akan di debit");
                    driver.findElement(pars.getbjectLocator("lblJumlahDebit")).clear();
                    driver.findElement(pars.getbjectLocator("lblJumlahDebit")).sendKeys(jumlahDebit);
                    FunctionalLib.takeSnapShot(driver,capturePath, featureName, intScenarioNum, "lblJumlahDebit");
                } else if (aturJumlahDebit != 1) {
                    System.out.println("====> Tidak Update Jumlah Debit");
                }

                System.out.println("====> Klik tombol simpan");
                FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");
                driver.findElement(pars.getbjectLocator("btnSimpan")).click();

            } else if (aturDebit != 1) {
                System.out.println("====> Tidak Update Debit");
            }

            // klik tombol simpan
            StepLib.loadPage("lblEditNamaBlusaving");
            System.out.println("====> Klik tombol simpan");
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");
            driver.findElement(pars.getbjectLocator("btnSimpan")).click();

            // Halaman detail blusaving
            System.out.println("====> Berada dihalaman blusaving :" + namablusavingbaru);
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblTarikDanaBluSaving");
            StepLib.back();

            // Halaman list blusaving
            System.out.println("====> Berada dihalaman list blusaving");
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblHalamanDaftarBluSaving");
            StepLib.goToDashboard();

        } else if (no == 2) {

            // Klik tombol undang teman (blugether)
            System.out.println("====> Klik tombol undang teman");
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndangTeman");
            driver.findElement(pars.getbjectLocator("btnUndangTeman")).click();

            // Klik tombol lanjut
            System.out.println("====> Klik tombol lanjut");
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnTombolLanjut");
            driver.findElement(pars.getbjectLocator("btnTombolLanjut")).click();

            // Halamam tambah teman
            System.out.println("====> Berada dihalaman ");
            // foto
            // cari norek
            // foto
            // pilih norek
            // foto
            // klik undang
            // foto
            // klik lanjut
            // klik tombol kembali
            // foto
            // klik tombol kembali
            // Berada dihalaman detail blugether
            // foot
            // lihat member
            // foto
            // cari norek
            // foto
            // back
            // Berada dihalaman list blugether
            // foto
            // go to dashboard
        }
    }

    @When("^Klik tombol pengaturan blusaving$")
    public void klik_tombol_pengaturn_blusaving() throws Throwable {
        System.out.println("====> Klik tombol pengaturan");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblPengaturanBlusaving");
        driver.findElement(pars.getbjectLocator("lblPengaturanBlusaving")).click();
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
