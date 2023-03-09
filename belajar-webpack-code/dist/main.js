(() => {
  "use strict";
  const e = (...e) => e.every((e) => "number" == typeof e && !isNaN(e));
  var t, r, n;
  (t = new (class {
    constructor() {
      this.error = document.querySelector("#error");
    }
    tampilkanErrorPenjumlahan = (t, r) => {
      const n = t.reduce((t, n, o) => (e(r[o]) ? t + "" : t + `${n} itu bukan angka! `), "Silahkan masukkan angka yang benar: ");
      this.error.classList.remove("d-none"), (this.error.innerText = n);
    };
    sembunyikanError = () => this.error.classList.add("d-none");
  })()),
    (r = new (class {
      constructor() {
        (this.operand1 = document.querySelector("#operand1")), (this.operand2 = document.querySelector("#operand2")), (this.tombolTambah = document.querySelector("#tombol-tambah")), (this.hasil = document.querySelector("#hasil"));
      }
      getInput() {
        return [this.operand1.value, this.operand2.value];
      }
      setResult(e, t) {
        this.hasil.innerText = e + t;
      }
      onClick(e) {
        this.tombolTambah.addEventListener("click", e);
      }
    })()),
    (n = new (class {
      constructor() {
        (this.tombolJokes = document.querySelector("#jokes-receh")), (this.modalBody = document.querySelector(".modal-body"));
      }
      setModal(e) {
        this.modalBody.innerHTML = e;
      }
      onClick(e) {
        this.tombolJokes.addEventListener("click", e);
      }
    })()),
    t.sembunyikanError(),
    r.onClick(() => {
      t.sembunyikanError();
      const n = r.getInput(),
        o = ((...e) => e.map((e) => parseInt(e)))(...n);
      if (e(...o)) {
        const [e, t] = o;
        r.setResult(e, t);
      } else r.setResult(""), t.tampilkanErrorPenjumlahan(n, o);
    }),
    n.onClick(() => {
      fetch("https://candaan-api.vercel.app/api/text/random")
        .then((e) => e.json())
        .then((e) => {
          n.setModal(e.data);
        });
    });
})();
