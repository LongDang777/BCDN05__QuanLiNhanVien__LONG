var dsnv = new DanhSachNhanVien();

getLocalStorage();

function getELE(id) {
  return document.getElementById(id);
}
// taiKhoan, ten, email, pass, ngayLam, luongCoBan, chucVu, gioLam
document.getElementById("btnThemNV").onclick = function themNhanVien() {
  var taiKhoan = getELE("tknv").value;
  var ten = getELE("name").value;
  var email = getELE("email").value;
  var pass = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCoBan = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  var nv = new NhanVien(
    taiKhoan,
    ten,
    email,
    pass,
    ngayLam,
    Number(luongCoBan),
    chucVu,
    Number(gioLam)
  );

  nv.tongLuong();
  nv.xepLoai();
  dsnv.them(nv);
  hienThiTable(dsnv.mangNV);
  setLocalStorage(dsnv.mangNV);
};

function hienThiTable(mang) {
  var content = "";
  mang.map(function (nv, index) {
    var tr = `<tr>
            <td>${nv.taiKhoanNV}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.emailNV}</td>
            <td>${nv.ngayLamNV}</td>
            <td>${nv.chucvuNV}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.loai}</td>
            <td>
                <button class = 'btn btn-danger' onclick = "xoaNV('${nv.taiKhoanNV}')">Xoá</button>
                <button class = 'btn btn-info'type = 'button' data-toggle ='modal'  data-target = #myModal onclick = "xemNV('${nv.taiKhoanNV}')">Xem</button>
            </td>
        </tr>`;
    content += tr;
  });
  getELE("tableDanhSach").innerHTML = content;
}

function setLocalStorage(mang) {
  localStorage.setItem("DSNV", JSON.stringify(mang));
}

function getLocalStorage() {
  if (localStorage.getItem("DSNV") != null) {
    dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
    hienThiTable(dsnv.mangNV);
  }
}

function xoaNV(id) {
  dsnv.xoa(id);
  setLocalStorage(dsnv.mangNV);
  hienThiTable(dsnv.mangNV);
}

function xemNV(id) {
  var viTri = dsnv.timViTri(id);
  console.table(viTri);

  if (viTri != -1) {
    var nv = dsnv.mangNV[viTri];
    console.log(nv);
    getELE("tknv").value = nv.taiKhoanNV;
    getELE("tknv").disabled = true;

    getELE("name").value = nv.tenNV;
    getELE("email").value = nv.emailNV;
    getELE("password").value = nv.matKhau;
    getELE("datepicker").value = nv.ngayLamNV;
    getELE("luongCB").value = nv.luongCB;
    getELE("chucvu").value = nv.chucvuNV;
    getELE("gioLam").value = nv.giolamNV;
  } else {
    console.log("Không tìm thấy nhân viên cần xem");
  }
}

getELE("btnCapNhat").onclick = function capNhatNhanVien() {
  var taiKhoan = getELE("tknv").value;
  var ten = getELE("name").value;
  var email = getELE("email").value;
  var pass = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCoBan = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  var nv = new NhanVien(
    taiKhoan,
    ten,
    email,
    pass,
    ngayLam,
    Number(luongCoBan),
    chucVu,
    Number(gioLam)
  );
  nv.tongLuong();
  nv.xepLoai();
  dsnv.capNhat(nv);
  hienThiTable(dsnv.mangNV);
  setLocalStorage(dsnv.mangNV);
};

function resetForm(){
    getELE("formQLNV").reset()
    getELE("tknv").disabled = false;
  }