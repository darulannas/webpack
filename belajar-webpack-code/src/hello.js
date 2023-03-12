import _ from "lodash";

const mahasiswa = [
  {
    nama: "darul annas",
    email: "darulannas@gmail.com",
    jurusan: "sistem informasi",
  },
];

const mhs = _.find(mahasiswa, { nama: "darul annas" });

console.log(mhs);
