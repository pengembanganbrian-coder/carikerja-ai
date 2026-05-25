export type CareerArticle = {
  title: string;
  slug: string;
  category: string;
  description: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
  tip: string;
};

export const careerArticles: CareerArticle[] = [
  {
    title: "Contoh CV Fresh Graduate agar Lebih Menarik Recruiter",
    slug: "contoh-cv-fresh-graduate",
    category: "Panduan CV",
    description: "Cara menyusun CV fresh graduate agar tetap terlihat kuat meskipun belum punya banyak pengalaman kerja.",
    intro: "Fresh graduate sering merasa CV-nya kosong karena belum punya pengalaman kerja formal. Padahal, pengalaman organisasi, magang, proyek kuliah, pelatihan, dan kemampuan teknis tetap bisa ditulis dengan cara yang menarik.",
    sections: [
      {
        heading: "1. Mulai dari Profil Singkat yang Jelas",
        body: "Tulis ringkasan singkat tentang latar belakang pendidikan, minat karier, dan kemampuan utama. Hindari kalimat terlalu umum seperti pekerja keras dan bertanggung jawab tanpa bukti pendukung."
      },
      {
        heading: "2. Masukkan Pengalaman Magang atau Organisasi",
        body: "Pengalaman magang, kepanitiaan, organisasi, volunteer, atau proyek kuliah bisa menunjukkan kemampuan kerja sama, komunikasi, analisis, dan tanggung jawab."
      },
      {
        heading: "3. Tulis Skill yang Relevan dengan Posisi",
        body: "Pilih skill yang sesuai dengan lowongan. Misalnya Excel, komunikasi, riset, desain, administrasi, analisis data, atau penggunaan tools tertentu."
      },
      {
        heading: "4. Fokus pada Bukti dan Hasil",
        body: "Jika pernah membuat laporan, mengelola acara, melakukan riset, atau memimpin tim kecil, tuliskan hasil konkretnya agar CV terlihat lebih kuat."
      }
    ],
    tip: "Untuk fresh graduate, CV tidak harus panjang. Satu halaman yang padat, rapi, dan relevan lebih baik daripada dua halaman yang isinya umum."
  },
  {
    title: "Cara Menulis Summary LinkedIn yang Profesional",
    slug: "cara-menulis-summary-linkedin",
    category: "LinkedIn",
    description: "Panduan menulis bagian About atau Summary LinkedIn agar lebih menarik bagi recruiter.",
    intro: "LinkedIn bisa menjadi etalase profesional. Bagian summary membantu recruiter memahami siapa kamu, bidang yang kamu minati, dan nilai yang bisa kamu tawarkan.",
    sections: [
      {
        heading: "1. Jelaskan Identitas Profesionalmu",
        body: "Mulailah dengan bidang atau peran yang kamu tekuni, misalnya HR, data analyst, content writer, finance, software engineer, atau fresh graduate psikologi."
      },
      {
        heading: "2. Tulis Keahlian Utama",
        body: "Sebutkan beberapa kemampuan yang relevan, seperti recruitment, training, data analysis, writing, project management, atau customer service."
      },
      {
        heading: "3. Tampilkan Pengalaman yang Mendukung",
        body: "Ceritakan pengalaman magang, pekerjaan, organisasi, proyek, atau pencapaian yang menunjukkan kemampuanmu secara nyata."
      },
      {
        heading: "4. Tutup dengan Arah Karier",
        body: "Akhiri dengan bidang yang sedang kamu cari atau peluang yang terbuka untuk kamu eksplorasi."
      }
    ],
    tip: "Gunakan bahasa profesional tapi tetap natural. Hindari menulis summary yang terlalu kaku seperti surat resmi."
  },
  {
    title: "Contoh Jawaban Ceritakan Tentang Diri Anda Saat Interview",
    slug: "jawaban-ceritakan-tentang-diri-anda",
    category: "Interview",
    description: "Cara menjawab pertanyaan pembuka interview dengan struktur yang rapi dan meyakinkan.",
    intro: "Pertanyaan ceritakan tentang diri Anda sering muncul di awal interview. Jawaban yang baik sebaiknya singkat, relevan, dan langsung mengarah ke posisi yang dilamar.",
    sections: [
      {
        heading: "1. Mulai dari Latar Belakang Singkat",
        body: "Sebutkan pendidikan atau pengalaman terakhir yang paling relevan dengan posisi. Tidak perlu menceritakan seluruh riwayat hidup."
      },
      {
        heading: "2. Hubungkan dengan Pengalaman",
        body: "Ceritakan pengalaman kerja, magang, organisasi, atau proyek yang menunjukkan kemampuan sesuai kebutuhan posisi."
      },
      {
        heading: "3. Sebutkan Skill Utama",
        body: "Pilih dua atau tiga skill yang paling relevan, misalnya komunikasi, analisis data, rekrutmen, administrasi, atau problem solving."
      },
      {
        heading: "4. Tutup dengan Alasan Melamar",
        body: "Jelaskan mengapa posisi tersebut sesuai dengan minat, pengalaman, dan rencana pengembangan kariermu."
      }
    ],
    tip: "Jawaban ideal biasanya 60 sampai 90 detik. Jangan terlalu panjang agar recruiter tetap menangkap poin utamanya."
  },
  {
    title: "Cara Menjawab Kelebihan dan Kekurangan Saat Interview",
    slug: "menjawab-kelebihan-dan-kekurangan",
    category: "Interview",
    description: "Strategi menjawab pertanyaan kelebihan dan kekurangan tanpa terdengar dibuat-buat.",
    intro: "Pertanyaan tentang kelebihan dan kekurangan digunakan recruiter untuk melihat kesadaran diri, cara berpikir, dan kemampuan kandidat dalam mengembangkan diri.",
    sections: [
      {
        heading: "1. Pilih Kelebihan yang Relevan",
        body: "Jangan memilih kelebihan yang terlalu umum. Hubungkan dengan kebutuhan posisi, misalnya teliti, komunikatif, mampu menyusun prioritas, atau terbiasa bekerja dengan data."
      },
      {
        heading: "2. Berikan Contoh Nyata",
        body: "Setelah menyebutkan kelebihan, beri contoh situasi ketika kelebihan itu membantu pekerjaan atau aktivitasmu."
      },
      {
        heading: "3. Pilih Kekurangan yang Masih Bisa Dikembangkan",
        body: "Hindari kekurangan yang langsung bertentangan dengan posisi. Pilih area pengembangan yang realistis dan tunjukkan usaha perbaikannya."
      },
      {
        heading: "4. Tunjukkan Cara Mengatasinya",
        body: "Jawaban kekurangan sebaiknya diakhiri dengan langkah konkret yang sedang kamu lakukan untuk memperbaikinya."
      }
    ],
    tip: "Jangan menjawab kekurangan dengan kalimat terlalu perfeksionis jika tidak bisa memberi contoh nyata."
  },
  {
    title: "Tips Melamar Kerja Lewat Email agar Terlihat Profesional",
    slug: "tips-melamar-kerja-lewat-email",
    category: "Lamaran Kerja",
    description: "Panduan menulis email lamaran kerja yang rapi, sopan, dan mudah dipahami recruiter.",
    intro: "Email lamaran kerja adalah kesan pertama sebelum recruiter membuka CV. Email yang rapi membantu lamaran terlihat lebih serius dan profesional.",
    sections: [
      {
        heading: "1. Gunakan Subject yang Jelas",
        body: "Tulis subject seperti Lamaran Posisi HR Officer - Nama Lengkap. Hindari subject kosong atau terlalu singkat."
      },
      {
        heading: "2. Tulis Pembuka Singkat",
        body: "Sampaikan bahwa kamu ingin melamar posisi tertentu dan mengetahui informasi lowongan dari sumber tertentu."
      },
      {
        heading: "3. Ringkas Kualifikasi Utama",
        body: "Tuliskan dua atau tiga hal yang paling relevan dari pengalaman atau kemampuanmu. Jangan menyalin seluruh isi CV ke email."
      },
      {
        heading: "4. Lampirkan File dengan Nama Rapi",
        body: "Gunakan nama file seperti CV_Nama_Posisi.pdf. Pastikan file bisa dibuka dan ukurannya tidak terlalu besar."
      }
    ],
    tip: "Sebelum mengirim, cek kembali alamat email, subject, lampiran, dan typo di isi email."
  },
  {
    title: "Cara Membaca Deskripsi Lowongan Kerja dengan Tepat",
    slug: "cara-membaca-deskripsi-lowongan",
    category: "Strategi Melamar",
    description: "Cara memahami job description agar tidak asal melamar dan bisa menyesuaikan CV dengan lebih baik.",
    intro: "Banyak pelamar hanya melihat judul posisi, padahal informasi penting justru ada di bagian tanggung jawab, kualifikasi, dan skill yang diminta.",
    sections: [
      {
        heading: "1. Baca Tanggung Jawab Utama",
        body: "Perhatikan pekerjaan harian yang akan dilakukan. Ini membantu kamu memahami apakah pengalamanmu benar-benar sesuai."
      },
      {
        heading: "2. Bedakan Kualifikasi Wajib dan Tambahan",
        body: "Kualifikasi wajib biasanya menjadi syarat utama. Kualifikasi tambahan bisa menjadi nilai plus, tetapi tidak selalu mutlak."
      },
      {
        heading: "3. Tandai Kata Kunci Skill",
        body: "Catat skill yang sering muncul seperti Excel, komunikasi, analisis, sales, recruitment, content, atau project management."
      },
      {
        heading: "4. Cek Lokasi, Sistem Kerja, dan Jenjang",
        body: "Pastikan lokasi, remote atau on-site, level jabatan, dan ekspektasi pengalaman sesuai dengan kondisi dan target kariermu."
      }
    ],
    tip: "Semakin baik kamu membaca deskripsi lowongan, semakin mudah kamu menyesuaikan CV dan jawaban interview."
  },
  {
    title: "Skill yang Banyak Dicari Perusahaan Saat Ini",
    slug: "skill-yang-dicari-perusahaan",
    category: "Pengembangan Karier",
    description: "Daftar skill umum yang sering dicari perusahaan dan cara menampilkannya di CV.",
    intro: "Setiap posisi memiliki kebutuhan berbeda, tetapi ada beberapa kemampuan yang sering dicari karena relevan di banyak bidang kerja.",
    sections: [
      {
        heading: "1. Komunikasi",
        body: "Kemampuan menyampaikan ide, menulis laporan, berdiskusi, dan berkoordinasi sangat penting di hampir semua pekerjaan."
      },
      {
        heading: "2. Analisis Data",
        body: "Kemampuan membaca data, membuat kesimpulan, dan menyusun rekomendasi semakin dibutuhkan, bahkan untuk posisi non-teknis."
      },
      {
        heading: "3. Problem Solving",
        body: "Perusahaan membutuhkan kandidat yang tidak hanya menjalankan tugas, tetapi juga mampu mencari solusi saat menghadapi kendala."
      },
      {
        heading: "4. Adaptabilitas",
        body: "Lingkungan kerja cepat berubah. Kandidat yang bisa belajar hal baru dan menyesuaikan diri biasanya lebih bernilai."
      }
    ],
    tip: "Di CV, jangan hanya menulis daftar skill. Tunjukkan skill itu melalui pengalaman dan pencapaian."
  },
  {
    title: "Tips Cari Kerja untuk Fresh Graduate",
    slug: "tips-cari-kerja-fresh-graduate",
    category: "Fresh Graduate",
    description: "Strategi sederhana untuk fresh graduate agar lebih terarah dalam mencari pekerjaan pertama.",
    intro: "Mencari pekerjaan pertama bisa terasa membingungkan. Kuncinya adalah memahami kekuatan diri, memilih lowongan yang realistis, dan konsisten memperbaiki lamaran.",
    sections: [
      {
        heading: "1. Tentukan Bidang Prioritas",
        body: "Pilih beberapa bidang yang paling sesuai dengan jurusan, pengalaman, dan minatmu. Jangan melamar semua posisi tanpa arah."
      },
      {
        heading: "2. Bangun CV yang Spesifik",
        body: "Sesuaikan CV dengan posisi. CV untuk HR sebaiknya berbeda penekanannya dengan CV untuk marketing atau data analyst."
      },
      {
        heading: "3. Manfaatkan Magang dan Proyek",
        body: "Jika belum punya pengalaman kerja, gunakan pengalaman magang, organisasi, proyek kuliah, atau sertifikasi untuk menunjukkan kemampuan."
      },
      {
        heading: "4. Catat Lamaran yang Dikirim",
        body: "Buat daftar posisi, perusahaan, tanggal melamar, dan status proses. Ini membantu kamu melakukan follow up dengan lebih rapi."
      }
    ],
    tip: "Untuk pekerjaan pertama, fokus pada peluang belajar dan pengalaman yang bisa memperkuat karier jangka panjang."
  },
  {
    title: "Kesalahan Umum Saat Membuat CV",
    slug: "kesalahan-umum-membuat-cv",
    category: "Panduan CV",
    description: "Beberapa kesalahan CV yang sering membuat lamaran kurang menarik di mata recruiter.",
    intro: "CV yang kurang rapi bisa membuat pengalaman bagus terlihat biasa saja. Karena itu, penting untuk menghindari kesalahan dasar saat menyusun CV.",
    sections: [
      {
        heading: "1. CV Terlalu Panjang",
        body: "CV sebaiknya fokus pada informasi yang relevan. Hindari memasukkan semua pengalaman yang tidak berhubungan dengan posisi."
      },
      {
        heading: "2. Tidak Ada Pencapaian",
        body: "Banyak CV hanya berisi tugas. Tambahkan hasil kerja, kontribusi, atau capaian agar recruiter melihat dampak dari pengalamanmu."
      },
      {
        heading: "3. Format Tidak Konsisten",
        body: "Gunakan format tanggal, heading, bullet, dan ukuran font yang konsisten agar CV mudah dibaca."
      },
      {
        heading: "4. Tidak Disesuaikan dengan Lowongan",
        body: "CV yang sama untuk semua posisi biasanya kurang kuat. Sesuaikan kata kunci dan pengalaman dengan deskripsi pekerjaan."
      }
    ],
    tip: "Sebelum mengirim CV, baca ulang dari sudut pandang recruiter: apakah informasi terpenting mudah ditemukan dalam 10 detik?"
  },
  {
    title: "Cara Follow Up Lamaran Kerja dengan Sopan",
    slug: "cara-follow-up-lamaran-kerja",
    category: "Lamaran Kerja",
    description: "Panduan follow up lamaran kerja tanpa terlihat memaksa atau terlalu agresif.",
    intro: "Follow up bisa menunjukkan keseriusan kandidat, tetapi perlu dilakukan dengan waktu dan bahasa yang tepat agar tetap profesional.",
    sections: [
      {
        heading: "1. Tunggu Waktu yang Wajar",
        body: "Biasanya follow up bisa dilakukan sekitar satu sampai dua minggu setelah melamar, kecuali perusahaan sudah memberi timeline tertentu."
      },
      {
        heading: "2. Gunakan Bahasa yang Sopan",
        body: "Sampaikan bahwa kamu ingin menanyakan perkembangan proses seleksi, bukan menuntut jawaban segera."
      },
      {
        heading: "3. Sertakan Informasi Lamaran",
        body: "Tuliskan posisi yang dilamar, nama lengkap, dan tanggal melamar agar recruiter mudah mengecek data."
      },
      {
        heading: "4. Tetap Singkat",
        body: "Email follow up tidak perlu panjang. Cukup satu atau dua paragraf yang jelas dan sopan."
      }
    ],
    tip: "Jika tidak ada balasan setelah follow up, tetap lanjut mencari peluang lain. Jangan menggantungkan proses pada satu lamaran saja."
  }

  ,
  {
    title: "Cara Mengenali Lowongan Kerja Palsu",
    slug: "cara-mengenali-lowongan-kerja-palsu",
    category: "Strategi Melamar",
    description: "Panduan mengenali ciri-ciri lowongan kerja palsu agar pencari kerja lebih aman saat melamar.",
    intro: "Lowongan kerja palsu masih sering ditemukan di internet. Karena itu, pencari kerja perlu lebih teliti sebelum mengirimkan CV, data pribadi, atau mengikuti instruksi dari pihak yang mengaku sebagai recruiter.",
    sections: [
      {
        heading: "1. Waspadai Permintaan Uang",
        body: "Perusahaan yang kredibel umumnya tidak meminta biaya administrasi, biaya seragam, biaya pelatihan, atau transfer dana sebagai syarat mengikuti proses rekrutmen."
      },
      {
        heading: "2. Cek Alamat Email dan Website",
        body: "Perhatikan apakah email recruiter menggunakan domain resmi perusahaan. Jika hanya memakai email gratis tanpa identitas jelas, kamu perlu lebih berhati-hati."
      },
      {
        heading: "3. Perhatikan Bahasa Lowongan",
        body: "Lowongan palsu sering menggunakan bahasa yang terlalu bombastis, menjanjikan gaji sangat besar tanpa kualifikasi jelas, atau meminta respons sangat cepat."
      },
      {
        heading: "4. Verifikasi ke Situs Resmi",
        body: "Sebelum mengirim data pribadi, cek kembali apakah lowongan tersebut juga tersedia di situs resmi perusahaan atau kanal rekrutmen yang terpercaya."
      }
    ],
    tip: "Jika sebuah lowongan meminta uang atau data pribadi sensitif terlalu awal, lebih baik berhenti dan verifikasi ulang."
  },
  {
    title: "Cara Membuat Portofolio untuk Melamar Kerja",
    slug: "cara-membuat-portofolio-untuk-melamar-kerja",
    category: "Strategi Melamar",
    description: "Cara menyusun portofolio sederhana agar pengalaman dan hasil kerja lebih mudah dinilai recruiter.",
    intro: "Portofolio membantu recruiter melihat bukti kemampuanmu secara konkret. Tidak hanya untuk desainer, portofolio juga bisa dibuat oleh penulis, analis data, HR, marketer, programmer, dan fresh graduate.",
    sections: [
      {
        heading: "1. Pilih Karya yang Paling Relevan",
        body: "Jangan memasukkan semua hasil kerja. Pilih karya atau proyek yang paling sesuai dengan posisi yang kamu incar."
      },
      {
        heading: "2. Jelaskan Peranmu dalam Proyek",
        body: "Tuliskan konteks proyek, tugas yang kamu lakukan, tools yang digunakan, dan hasil yang dicapai agar recruiter memahami kontribusimu."
      },
      {
        heading: "3. Gunakan Format yang Mudah Dibuka",
        body: "Portofolio bisa dibuat dalam bentuk PDF, website sederhana, Google Drive, Notion, GitHub, atau platform lain yang mudah diakses."
      },
      {
        heading: "4. Tampilkan Dampak atau Hasil",
        body: "Jika memungkinkan, tambahkan angka, insight, atau hasil nyata seperti peningkatan engagement, jumlah peserta, efisiensi proses, atau output yang berhasil dibuat."
      }
    ],
    tip: "Portofolio yang baik bukan yang paling banyak isinya, tetapi yang paling relevan dengan posisi yang dilamar."
  },
  {
    title: "Tips Negosiasi Gaji untuk Pemula",
    slug: "tips-negosiasi-gaji-untuk-pemula",
    category: "Interview",
    description: "Panduan sederhana melakukan negosiasi gaji dengan sopan, realistis, dan tetap profesional.",
    intro: "Negosiasi gaji sering terasa menegangkan, terutama bagi fresh graduate atau kandidat yang belum terbiasa. Padahal, negosiasi bisa dilakukan dengan tetap sopan dan berbasis data.",
    sections: [
      {
        heading: "1. Cari Tahu Kisaran Gaji Posisi",
        body: "Sebelum interview, cari informasi kisaran gaji untuk posisi, lokasi, industri, dan level pengalaman yang serupa."
      },
      {
        heading: "2. Pahami Nilai yang Kamu Tawarkan",
        body: "Hubungkan ekspektasi gaji dengan pengalaman, skill, sertifikasi, pencapaian, atau tanggung jawab yang akan kamu jalankan."
      },
      {
        heading: "3. Gunakan Rentang Gaji",
        body: "Alih-alih menyebut satu angka kaku, kamu bisa menyampaikan rentang gaji yang realistis dan masih membuka ruang diskusi."
      },
      {
        heading: "4. Tetap Sopan dan Fleksibel",
        body: "Jika penawaran belum sesuai, tanyakan komponen lain seperti tunjangan, bonus, kesempatan belajar, sistem kerja, atau evaluasi setelah masa tertentu."
      }
    ],
    tip: "Negosiasi gaji yang baik bukan sekadar meminta angka lebih tinggi, tetapi menjelaskan alasan secara profesional."
  },
  {
    title: "Cara Menjelaskan Career Gap Saat Interview",
    slug: "cara-menjelaskan-career-gap-saat-interview",
    category: "Interview",
    description: "Cara menjawab pertanyaan tentang jeda karier tanpa terlihat defensif atau tidak siap.",
    intro: "Career gap atau jeda karier bisa terjadi karena banyak alasan, seperti melanjutkan studi, merawat keluarga, mencari arah karier baru, kesehatan, atau proses mencari pekerjaan yang cukup panjang.",
    sections: [
      {
        heading: "1. Jawab dengan Jujur dan Singkat",
        body: "Tidak perlu menjelaskan terlalu detail. Sampaikan alasan utama secara wajar, lalu arahkan pembicaraan ke kesiapanmu untuk kembali bekerja."
      },
      {
        heading: "2. Tunjukkan Aktivitas Produktif",
        body: "Jika selama jeda karier kamu mengikuti kursus, freelance, volunteer, belajar skill baru, atau mengerjakan proyek pribadi, sampaikan hal tersebut."
      },
      {
        heading: "3. Hubungkan dengan Posisi yang Dilamar",
        body: "Jelaskan mengapa saat ini kamu siap dan tertarik dengan posisi tersebut, serta bagaimana pengalaman sebelumnya tetap relevan."
      },
      {
        heading: "4. Hindari Nada Terlalu Membela Diri",
        body: "Jawaban yang tenang, jujur, dan fokus ke masa depan biasanya lebih baik daripada jawaban yang terlalu panjang dan defensif."
      }
    ],
    tip: "Career gap bukan akhir dari peluang kerja. Yang penting adalah bagaimana kamu menjelaskan kesiapan dan relevansi dirimu."
  },
  {
    title: "Tips Career Switch ke Bidang Baru",
    slug: "tips-career-switch-ke-bidang-baru",
    category: "Pengembangan Karier",
    description: "Strategi berpindah bidang karier dengan lebih terarah dan realistis.",
    intro: "Career switch bisa menjadi langkah besar dalam perjalanan karier. Agar lebih realistis, kamu perlu memahami skill yang sudah dimiliki, skill yang perlu ditambah, dan posisi transisi yang bisa menjadi jembatan.",
    sections: [
      {
        heading: "1. Identifikasi Transferable Skills",
        body: "Transferable skills adalah kemampuan yang bisa dipakai di banyak bidang, seperti komunikasi, analisis, manajemen proyek, riset, pelayanan, atau problem solving."
      },
      {
        heading: "2. Pelajari Skill Teknis yang Dibutuhkan",
        body: "Setelah menentukan bidang baru, pelajari tools, istilah, dan kemampuan teknis yang paling sering muncul di lowongan bidang tersebut."
      },
      {
        heading: "3. Buat Proyek Kecil",
        body: "Jika belum punya pengalaman langsung, buat proyek kecil untuk membuktikan kemampuan. Misalnya portofolio, studi kasus, tulisan, dashboard, atau aplikasi sederhana."
      },
      {
        heading: "4. Cari Posisi Jembatan",
        body: "Kadang perpindahan karier lebih mudah lewat posisi yang masih memakai pengalaman lama, tetapi mulai membuka jalan ke bidang baru."
      }
    ],
    tip: "Career switch lebih mudah jika kamu bisa menunjukkan hubungan antara pengalaman lama dan kebutuhan bidang baru."
  }

  ,
  {
    title: "Cara Mengenali Lowongan Kerja Palsu",
    slug: "cara-mengenali-lowongan-kerja-palsu",
    category: "Strategi Melamar",
    description: "Panduan mengenali ciri-ciri lowongan kerja palsu agar pencari kerja lebih aman saat melamar.",
    intro: "Lowongan kerja palsu masih sering ditemukan di internet. Karena itu, pencari kerja perlu lebih teliti sebelum mengirimkan CV, data pribadi, atau mengikuti instruksi dari pihak yang mengaku sebagai recruiter.",
    sections: [
      {
        heading: "1. Waspadai Permintaan Uang",
        body: "Perusahaan yang kredibel umumnya tidak meminta biaya administrasi, biaya seragam, biaya pelatihan, atau transfer dana sebagai syarat mengikuti proses rekrutmen."
      },
      {
        heading: "2. Cek Alamat Email dan Website",
        body: "Perhatikan apakah email recruiter menggunakan domain resmi perusahaan. Jika hanya memakai email gratis tanpa identitas jelas, kamu perlu lebih berhati-hati."
      },
      {
        heading: "3. Perhatikan Bahasa Lowongan",
        body: "Lowongan palsu sering menggunakan bahasa yang terlalu bombastis, menjanjikan gaji sangat besar tanpa kualifikasi jelas, atau meminta respons sangat cepat."
      },
      {
        heading: "4. Verifikasi ke Situs Resmi",
        body: "Sebelum mengirim data pribadi, cek kembali apakah lowongan tersebut juga tersedia di situs resmi perusahaan atau kanal rekrutmen yang terpercaya."
      }
    ],
    tip: "Jika sebuah lowongan meminta uang atau data pribadi sensitif terlalu awal, lebih baik berhenti dan verifikasi ulang."
  },
  {
    title: "Cara Membuat Portofolio untuk Melamar Kerja",
    slug: "cara-membuat-portofolio-untuk-melamar-kerja",
    category: "Strategi Melamar",
    description: "Cara menyusun portofolio sederhana agar pengalaman dan hasil kerja lebih mudah dinilai recruiter.",
    intro: "Portofolio membantu recruiter melihat bukti kemampuanmu secara konkret. Tidak hanya untuk desainer, portofolio juga bisa dibuat oleh penulis, analis data, HR, marketer, programmer, dan fresh graduate.",
    sections: [
      {
        heading: "1. Pilih Karya yang Paling Relevan",
        body: "Jangan memasukkan semua hasil kerja. Pilih karya atau proyek yang paling sesuai dengan posisi yang kamu incar."
      },
      {
        heading: "2. Jelaskan Peranmu dalam Proyek",
        body: "Tuliskan konteks proyek, tugas yang kamu lakukan, tools yang digunakan, dan hasil yang dicapai agar recruiter memahami kontribusimu."
      },
      {
        heading: "3. Gunakan Format yang Mudah Dibuka",
        body: "Portofolio bisa dibuat dalam bentuk PDF, website sederhana, Google Drive, Notion, GitHub, atau platform lain yang mudah diakses."
      },
      {
        heading: "4. Tampilkan Dampak atau Hasil",
        body: "Jika memungkinkan, tambahkan angka, insight, atau hasil nyata seperti peningkatan engagement, jumlah peserta, efisiensi proses, atau output yang berhasil dibuat."
      }
    ],
    tip: "Portofolio yang baik bukan yang paling banyak isinya, tetapi yang paling relevan dengan posisi yang dilamar."
  },
  {
    title: "Tips Negosiasi Gaji untuk Pemula",
    slug: "tips-negosiasi-gaji-untuk-pemula",
    category: "Interview",
    description: "Panduan sederhana melakukan negosiasi gaji dengan sopan, realistis, dan tetap profesional.",
    intro: "Negosiasi gaji sering terasa menegangkan, terutama bagi fresh graduate atau kandidat yang belum terbiasa. Padahal, negosiasi bisa dilakukan dengan tetap sopan dan berbasis data.",
    sections: [
      {
        heading: "1. Cari Tahu Kisaran Gaji Posisi",
        body: "Sebelum interview, cari informasi kisaran gaji untuk posisi, lokasi, industri, dan level pengalaman yang serupa."
      },
      {
        heading: "2. Pahami Nilai yang Kamu Tawarkan",
        body: "Hubungkan ekspektasi gaji dengan pengalaman, skill, sertifikasi, pencapaian, atau tanggung jawab yang akan kamu jalankan."
      },
      {
        heading: "3. Gunakan Rentang Gaji",
        body: "Alih-alih menyebut satu angka kaku, kamu bisa menyampaikan rentang gaji yang realistis dan masih membuka ruang diskusi."
      },
      {
        heading: "4. Tetap Sopan dan Fleksibel",
        body: "Jika penawaran belum sesuai, tanyakan komponen lain seperti tunjangan, bonus, kesempatan belajar, sistem kerja, atau evaluasi setelah masa tertentu."
      }
    ],
    tip: "Negosiasi gaji yang baik bukan sekadar meminta angka lebih tinggi, tetapi menjelaskan alasan secara profesional."
  },
  {
    title: "Cara Menjelaskan Career Gap Saat Interview",
    slug: "cara-menjelaskan-career-gap-saat-interview",
    category: "Interview",
    description: "Cara menjawab pertanyaan tentang jeda karier tanpa terlihat defensif atau tidak siap.",
    intro: "Career gap atau jeda karier bisa terjadi karena banyak alasan, seperti melanjutkan studi, merawat keluarga, mencari arah karier baru, kesehatan, atau proses mencari pekerjaan yang cukup panjang.",
    sections: [
      {
        heading: "1. Jawab dengan Jujur dan Singkat",
        body: "Tidak perlu menjelaskan terlalu detail. Sampaikan alasan utama secara wajar, lalu arahkan pembicaraan ke kesiapanmu untuk kembali bekerja."
      },
      {
        heading: "2. Tunjukkan Aktivitas Produktif",
        body: "Jika selama jeda karier kamu mengikuti kursus, freelance, volunteer, belajar skill baru, atau mengerjakan proyek pribadi, sampaikan hal tersebut."
      },
      {
        heading: "3. Hubungkan dengan Posisi yang Dilamar",
        body: "Jelaskan mengapa saat ini kamu siap dan tertarik dengan posisi tersebut, serta bagaimana pengalaman sebelumnya tetap relevan."
      },
      {
        heading: "4. Hindari Nada Terlalu Membela Diri",
        body: "Jawaban yang tenang, jujur, dan fokus ke masa depan biasanya lebih baik daripada jawaban yang terlalu panjang dan defensif."
      }
    ],
    tip: "Career gap bukan akhir dari peluang kerja. Yang penting adalah bagaimana kamu menjelaskan kesiapan dan relevansi dirimu."
  },
  {
    title: "Tips Career Switch ke Bidang Baru",
    slug: "tips-career-switch-ke-bidang-baru",
    category: "Pengembangan Karier",
    description: "Strategi berpindah bidang karier dengan lebih terarah dan realistis.",
    intro: "Career switch bisa menjadi langkah besar dalam perjalanan karier. Agar lebih realistis, kamu perlu memahami skill yang sudah dimiliki, skill yang perlu ditambah, dan posisi transisi yang bisa menjadi jembatan.",
    sections: [
      {
        heading: "1. Identifikasi Transferable Skills",
        body: "Transferable skills adalah kemampuan yang bisa dipakai di banyak bidang, seperti komunikasi, analisis, manajemen proyek, riset, pelayanan, atau problem solving."
      },
      {
        heading: "2. Pelajari Skill Teknis yang Dibutuhkan",
        body: "Setelah menentukan bidang baru, pelajari tools, istilah, dan kemampuan teknis yang paling sering muncul di lowongan bidang tersebut."
      },
      {
        heading: "3. Buat Proyek Kecil",
        body: "Jika belum punya pengalaman langsung, buat proyek kecil untuk membuktikan kemampuan. Misalnya portofolio, studi kasus, tulisan, dashboard, atau aplikasi sederhana."
      },
      {
        heading: "4. Cari Posisi Jembatan",
        body: "Kadang perpindahan karier lebih mudah lewat posisi yang masih memakai pengalaman lama, tetapi mulai membuka jalan ke bidang baru."
      }
    ],
    tip: "Career switch lebih mudah jika kamu bisa menunjukkan hubungan antara pengalaman lama dan kebutuhan bidang baru."
  }
];