export default function ApaItuOOP() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">
        Apa Itu Dependent Dropdown?
      </h2>
      <p>
        Dependent dropdown (atau dropdown terikat/pilihan terkait) adalah
        komponen dalam antarmuka pengguna yang memungkinkan pengguna memilih
        nilai dari daftar dropdown yang kedua (atau lebih) berdasarkan pilihan
        yang dibuat di dropdown pertama. Ini berarti bahwa opsi yang tersedia di
        dropdown kedua akan berubah tergantung pada pilihan yang dibuat di
        dropdown pertama.
      </p>
      <h2 className="text-2xl font-semibold mb-5 mt-7">
        Kapan Dependent Dropdown Digunakan?
      </h2>
      <p>
        Dependent dropdown (atau dropdown terikat/pilihan terkait) digunakan
        ketika data yang tersedia terkait satu sama lain dan ingin memungkinkan
        pengguna untuk memilih data yang relevan berdasarkan pilihan sebelumnya.
        Contoh yang umum adalah data yang terkait seperti alamat. Dalam kasus
        tersebut, dapat menggunakan dependent dropdown untuk memungkinkan
        pengguna memilih kabupaten berdasarkan provinsi yang dipilih, kecamatan
        berdasarkan kabupaten, dan desa berdasarkan kecamatan.
      </p>
    </div>
  );
}
