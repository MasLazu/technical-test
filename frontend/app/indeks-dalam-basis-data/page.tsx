export default function IndexDalamBasisData() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">
        Apa yang Dimaksud dengan Indeks dalam Basis Data
      </h2>
      <p>
        Indeks dalam basis data adalah struktur data khusus yang digunakan untuk
        mempercepat pengambilan data dari tabel. Indeks memungkinkan sistem
        basis data menemukan baris dengan cepat tanpa harus memindai seluruh
        tabel.
      </p>
      <h2 className="text-2xl font-semibold mb-5 mt-7">
        Bagaimana Penggunaannya Dapat Meningkatkan Performa Query
      </h2>
      <p>
        Indeks menggunakan struktur data tambahan yang menyimpan sebagian dari
        data tabel dalam bentuk yang dioptimalkan untuk pencarian cepat. ada
        beberapa jenis indeks antara lain:
      </p>
      <ul>
        <li>
          <h3 className="font-semibold">Indeks B-Tree:</h3>
          <p>
            Jenis indeks yang paling umum digunakan, cocok untuk pencarian,
            penyisipan, penghapusan, dan pembaruan dengan kinerja yang
            konsisten.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Indeks Full-Text:</h3>
          <p>Dioptimalkan untuk pencarian teks dalam kolom besar teks.</p>
        </li>
      </ul>
    </div>
  );
}
