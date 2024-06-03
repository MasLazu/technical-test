export default function KonsepUtamaOOP() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5 mt-7">
        Bagaimana Konsep Utama dalam OOP
      </h2>
      <p>Berikut ini adalah beberapa konsep utama dalam OOP:</p>
      <ul className="list-disc pl-8 mt-5">
        <li>
          <h3 className="font-semibold">Encapsulation</h3>
          <p>
            Encapsulation adalah metode untuk mengatur struktur pada class.
            dengan tujuan untuk menentukan hak akses pada property atau method.
            ini bertujuan untuk menyembunyikan informasi dari method dan
            property dengan alasan keamanan.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Inheritance</h3>
          <p>
            Inheritance merupakan mekanisme di mana sebuah kelas subclass dapat
            mewarisi sifat dan perilaku dari kelas lain superclass. Ini
            memungkinkan kode untuk digunakan kembali dan memperluas
            fungsionalitas tanpa menduplikasi kode.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Polymorphism</h3>
          <p>
            Polymorphism memungkinkan objek dari kelas yang berbeda untuk
            diinteraksikan melalui antarmuka yang sama. Ini memungkinkan satu
            fungsi untuk bekerja dengan cara yang berbeda berdasarkan objek yang
            memanggilnya. Polymorphism biasanya dicapai melalui method
            overriding atau overloading.
          </p>
        </li>
      </ul>
    </div>
  );
}
