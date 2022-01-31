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

public class BluGether extends Runner {

    public AndroidDriver driver = this.connection;
    public ReadObject pars = this.parser;
    public String capturePath = Runner.capturePath;
    public String featureName = Runner.currentFeature;

//  CREATE BLUGETHER

    // Berada dihalaman list blugether
    @When("^Berada dihalaman list blugether$")
    public void berada_dihalaman_list_blugether() throws Throwable {
        System.out.println("====> Berada dihalaman list blugether");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblHalamanListBlugether");
    }

    // Tambah blugether
    @When("^Tambah blugether$")
    public void tambahBluGether() throws Throwable {
        System.out.println("CREATE BLUGETHER");
        driver.findElement(pars.getbjectLocator("lblTambahBlugether")).click();
    }

    // Masukkan nama blugether dan setoran awal
    @When("^Masukkan nama blugether (.*) dan setoran awal (.*)$")
    public void masukkan_nama_blugether_dan_setoran_awal(String namaBlugether, String setoranAwal) throws Throwable {
        // foto pas kosong
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnLanjut");

        System.out.println("====> Masukkan Nama blugether :" + namaBlugether);
        driver.findElement(pars.getbjectLocator("lblTambahNamaBlugether")).sendKeys(namaBlugether);

        System.out.println("====> Masukkan setoran awal : " + setoranAwal);
        driver.findElement(pars.getbjectLocator("lblSetoranAwal")).sendKeys(setoranAwal);

    }


    // undang member
    @When("^Undang member masukkan nomor rekening (.*)$")
    public void undang_member_masukkan_nomor_rekening(String norek) throws Throwable {
        System.out.println("====> Klik tombol tambah member");
        driver.findElement(pars.getbjectLocator("lblTambahMember")).click();

        // foto halaman tambah teman
        StepLib.loadPage("lblTambahTeman");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");

        // cari member
        System.out.println("====> cari member dengan nomor rekening : " + norek);
        driver.findElement(pars.getbjectLocator("lblCariMember")).sendKeys(norek);
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");

        // pilih member
        System.out.println("====> Pilih member");
        driver.findElement(pars.getbjectLocator("btnBaris1")).click();

        // foto saat undangan sudah di klik
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");
        System.out.println("====> Klik undang member");
        driver.findElement(pars.getbjectLocator("btnUndang")).click();

        klik_tombol_lanjut();
    }

    // undang member ke dua
    @When("^Undang member kedua masukkan nomor rekening (.*)$")
    public void undang_member_kedua_masukkan_nomor_rekening(String norek2) throws Throwable {
        System.out.println("====> Klik lihat member dan tambah member");
        driver.findElement(pars.getbjectLocator("lblLihatMember")).click();

        // foto halaman tambah teman
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");

        // cari member
        System.out.println("====> cari member dengan nomor rekening : " + norek2);
        driver.findElement(pars.getbjectLocator("lblCariMember")).sendKeys(norek2);
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");

        // pilih member
        System.out.println("====> Pilih member");
        driver.findElement(pars.getbjectLocator("btnBaris1")).click();

        // foto saat undangan sudah di klik
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");
        System.out.println("====> Klik undang member");
        driver.findElement(pars.getbjectLocator("btnUndang")).click();

        klik_tombol_lanjut();
    }

    // klik tombol lanjut
    @When("^Klik tombol lanjut$")
    public void klik_tombol_lanjut() throws Throwable {
        StepLib.timePage("btnLanjut");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnLanjut");
        System.out.println("====> Klik tombol lanjut");
        driver.findElement(pars.getbjectLocator("btnLanjut")).click();
    }

    // atur goal yang ingin ditabung
    @When("^Atur goal jumlah yang ditabung (.*) dan tanggal pencapaian (.*)$")
    public void atur_goal_jumlah_yang_ditabung(String jumlahGoal, String tanggal) throws Throwable {
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnBukaBlugether");
        driver.findElement(pars.getbjectLocator("lblInputAturGoal")).sendKeys(jumlahGoal);

        StepLib.tanggalPencapaian(tanggal);
    }

    // klik tombol buka blugether
    @When("^Klik tombol buka blugether$")
    public void klik_tombol_buka_blugether() throws Throwable {
        System.out.println("====> Klik tombol buka blugether");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnBukaBlugether");
        driver.findElement(pars.getbjectLocator("btnBukaBlugether")).click();
    }

    // berada dihalaman berhasil membuat blugether
    @When("^Berada dihalaman berhasil membuat blugether$")
    public void berada_dihalaman_berhasil_membuat_blugether() throws Throwable {
        System.out.println("====> Berhasil membuat blugether");
        StepLib.loadPage("btnKembaliKeDaftarBlugether");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnKembaliKeDaftarBlugether");
        System.out.println("====> klik tombol kembali ke daftar blugether");
        driver.findElement(pars.getbjectLocator("btnKembaliKeDaftarBlugether")).click();
    }

    // klik card blugether creator
    @When("^Klik card blugether creator$")
    public void klik_card_blugether_creator() throws Throwable {
        System.out.println("====> Klik Blugether yang baru dibuat");
        driver.findElement(pars.getbjectLocator("btnCardBlugetherCreator")).click();
    }

    // klik card blugether member
    @When("^Klik card blugether member$")
    public void klik_card_blugether_member() throws Throwable {
        System.out.println("====> Klik Blugether yang baru dibuat");
        driver.findElement(pars.getbjectLocator("btnCardBlugetherMember")).click();
    }

    // berada dihalaman detail blugether
    @When("^Berada dihalaman detail blugether$")
    public void berada_dihalaman_detail_blugether() throws Throwable {
        System.out.println("====> Berada di detail blugether");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblDanaSaatIni");

        // lihat  member
        System.out.println("====> Klik lihat member");
        driver.findElement(pars.getbjectLocator("btnLihatMember")).click();
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblMemberBlugether");
        StepLib.back();
    }

    // cek riwayat transaksi blugether
    @When("^Cek riwayat transaksi blugether$")
    public void cek_riwayat_transaksi_blugether() throws Throwable {
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnMore");

        System.out.println("====> Cek riwayat blugether");
        driver.findElement(pars.getbjectLocator("btnMore")).click();

        System.out.println("====> Klik tombol lihat riwayat transaksi");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblLihatRiwayatTransaksi");
        driver.findElement(pars.getbjectLocator("lblLihatRiwayatTransaksi")).click();

        System.out.println("====> Berada dihalaman riwayat transaksi");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblHalamanRiwayatTransaksi");
        StepLib.goToDashboard();

    }


    //  update blugether
    @When("^Update blugether$")
    public void update_blugether() throws Throwable {
        Boolean lihatMember = false;

        // foto tambah dana
        StepLib.loadPage("lblTambahDana");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblTambahDana");

        // lihat member & foto member
        try {
            lihatMember = driver.findElement(pars.getbjectLocator("lblLihatMember")).isDisplayed() == true;
        } catch (Exception e) {
            lihatMember = false;
        }

        if (lihatMember == true) {
            System.out.println("====> Klik lihat member dan tambah member");
            driver.findElement(pars.getbjectLocator("lblLihatMember")).click();

            // foto halaman tambah teman
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");
            StepLib.back();
        } else {
            System.out.println("====> Belum mempunyai member");
        }

        // Klik more & foto pengaturan
        driver.findElement(pars.getbjectLocator("btnMore")).click();
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnPengaturanBlugether");

        // Klik pengaturan
        driver.findElement(pars.getbjectLocator("btnPengaturanBlugether")).click();

        // Foto halaman pengaturan blugether
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblPengaturan");
    }

    @When("^Update nama (.*) blugether$")
    public void update_nama_blugether(String namaBlugetherBaru) throws Throwable {
        // hapus nama blugether
        driver.findElement(pars.getbjectLocator("lblTambahNamaBlugether")).clear();

        // set nama blugether
        driver.findElement(pars.getbjectLocator("lblTambahNamaBlugether")).sendKeys(namaBlugetherBaru);
    }

    @When("^Update daftar teman (.*) dengan norek (.*)$")
    public void update_daftar_teman_dengan_norek(String daftarTeman, String norek) throws Throwable {
        Boolean tambahTeman = false;

        // cek kondisi daftar teman atau tidak
        if (daftarTeman.equalsIgnoreCase("ya")) {
            try {
                tambahTeman = driver.findElement(pars.getbjectLocator("btnTambahMember")).isDisplayed();
            } catch (Exception e) {
                tambahTeman = false;
            }

            if (tambahTeman == true) {
                System.out.println("====> Klik tombol tambah member");
                driver.findElement(pars.getbjectLocator("btnTambahMember")).click();
            } else if (tambahTeman == false) {
                System.out.println("====> Klik lihat member");
                // lihat member
                System.out.println("====> Klik tombol lihat member");
                driver.findElement(pars.getbjectLocator("btnLihat")).click();
            }

            // Foto halaman member
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");

            // cari member
            System.out.println("====> cari member dengan nomor rekening : " + norek);
            driver.findElement(pars.getbjectLocator("lblCariMember")).sendKeys(norek);
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");

            // pilih member
            System.out.println("====> Pilih member");
            driver.findElement(pars.getbjectLocator("btnBaris1")).click();

            // foto saat undangan sudah di klik
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");
            System.out.println("====> Klik undang member");
            driver.findElement(pars.getbjectLocator("btnUndang")).click();

            klik_tombol_lanjut();
        } else {
            System.out.println("====> Tidak tambah member");
        }
    }

    @When("^Update atur goal (.*) dan tambah jumlah goal (.*) dan tanggal pencapaian (.*)$")
    public void update_atur_goal_dan_tambah_jumlah_goal_dan_tanggal_pencapaian(String goal, String jumlahGoal, String tanggal) throws Throwable {
        // cek kondisi atur goal
        if (goal.equalsIgnoreCase("ya")) {
            Boolean btnUbah = false;
            try {
                btnUbah = driver.findElement(pars.getbjectLocator("btnUbahGoal")).isDisplayed();
            } catch (Exception e) {
                btnUbah = false;
            }

            if (btnUbah == true) {
                System.out.println("====> Klik tombol ubah");
                driver.findElement(pars.getbjectLocator("btnUbahGoal")).click();
            } else {
                System.out.println("====> Klik tombol radio button");
                driver.findElement(pars.getbjectLocator("btnRadioButtonAturGoal")).click();
            }

            // atur jumlah goal
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");
            System.out.println("====> Atur jumlah goal" + jumlahGoal);
            driver.findElement(pars.getbjectLocator("lblJumlahGoal")).clear();
            driver.findElement(pars.getbjectLocator("lblJumlahGoal")).sendKeys(jumlahGoal);

            // atur tanggal
            // empty

            // klik tombol simpan
            StepLib.swipePopDown();
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");
            driver.findElement(pars.getbjectLocator("btnSimpan")).click();

        } else {
            System.out.println("====> Tidak atur goal");
        }
    }

    @When("^Klik tombol simpan$")
    public void klik_tombol_simpan() throws Throwable {
        // klik tombol simpan
        StepLib.timePage("btnSimpan");
        StepLib.swipePopDown();
        System.out.println("====> Klik tombol simpan");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnSimpan");
        driver.findElement(pars.getbjectLocator("btnSimpan")).click();
    }

    @When("^Berada dihalaman update detail blugether")
    public void berada_dihalaman_update_detail_blugether() throws Throwable {
        // foto halaman
        System.out.println("====> Berada dihalaman detail blugether");
        StepLib.loadPage("lblUbahPage");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblUbahPage");

        // lihat member
        System.out.println("====> Lihat member");
        Boolean tambahTeman = false;
        try {
            tambahTeman = driver.findElement(pars.getbjectLocator("btnTambahMember")).isDisplayed();
        } catch (Exception e) {
            tambahTeman = false;
        }

        if (tambahTeman == true) {
            System.out.println("====> Member belum ada yang terdaftar");
        } else if (tambahTeman == false) {
            System.out.println("====> Klik lihat member");
            // lihat member
            System.out.println("====> Klik tombol lihat member");
            driver.findElement(pars.getbjectLocator("btnLihat")).click();
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblMemberBlugether");
            StepLib.back();
            StepLib.back();
        }
    }

    @When("^Berada dihalaman update list blugether$")
    public void berada_dihalaman_update_list_blugether() throws Throwable {
        // foto halaman
        System.out.println("====> Berada dihalaman list blugether");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblHalamanListBlugether");

        // kembali ke dashboard
        StepLib.goToDashboard();
    }

    // Tambah dana blugether



    // Tarik dana blugether


//  close blugeter

    @When("^Close blugether$")
    public void close_blugether() throws Throwable {
        Boolean lihatMember = false;

        // foto tambah dana
        StepLib.loadPage("lblTambahDana");
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblTambahDana");

        // lihat member & foto member
        try {
            lihatMember = driver.findElement(pars.getbjectLocator("lblLihatMember")).isDisplayed() == true;
        } catch (Exception e) {
            lihatMember = false;
        }

        if (lihatMember == true) {
            System.out.println("====> Klik lihat member dan hapus member");
            driver.findElement(pars.getbjectLocator("lblLihatMember")).click();

            // foto halaman tambah teman
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnUndang");

            //   hapus halaman member
            // pilih trash member
            driver.findElement(pars.getbjectLocator("btnIconHapus")).click();

            // pilih semua member
            driver.findElement(pars.getbjectLocator("btnIconHapus")).click();

            // foto halaman member
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblHapus");

            // klik tombol hapus member
            driver.findElement(pars.getbjectLocator("lblHapus")).click();

            // foto tombol hapus
            FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "lblHapus");

            // klik tombol hapus
            driver.findElement(pars.getbjectLocator("lblHapus")).click();

        } else {
            System.out.println("====> Belum mempunyai member");
        }

        // Klik more & foto tutup blugether
        StepLib.loadPage("btnMore");
        driver.findElement(pars.getbjectLocator("btnMore")).click();
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnTutupBlugether");

        // Klik tombol blugether
        driver.findElement(pars.getbjectLocator("btnTutupBlugether")).click();

        // foto yakin hapus & klik tombol yakin
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnYakin");
        driver.findElement(pars.getbjectLocator("btnYakin")).click();

    }


    @When("^Berada dihalaman berhasil tutup blugether$")
    public void berada_dihalaman_berhasil_tutup_blugether() throws Throwable {
        StepLib.loadPage("btnKembaliKeBeranda");
        StepLib.swipePopDown();

        // foto tombol kembali ke daftar blugether
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnKembaliKedaftarBlugether");

        // klik tombol detail
        driver.findElement(pars.getbjectLocator("btnDetail")).click();
        StepLib.swipePopDown();

        // foto detail
        FunctionalLib.takeSnapShot(driver, capturePath, featureName, intScenarioNum, "btnDetail");

        // download statement
        StepLib.downloaEStatement();

        // kembali ke daftar blugether
        driver.findElement(pars.getbjectLocator("btnKembaliKedaftarBlugether")).click();
    }
}