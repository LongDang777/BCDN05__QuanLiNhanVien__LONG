var dsnv = new DanhSachNhanVien();
var validation = new Validation();
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

  var isValid = true;
  isValid &=
    validation.checkEmpty(
      taiKhoan,
      "tbTKNV",
      "Tên tài khoản không được để trống"
    ) &&
    validation.checkAcc(
      taiKhoan,
      "tbTKNV",
      "Tên tài khoản không được trùng",
      dsnv.mangNV
    );

  isValid &=
    validation.checkEmpty(ten, "tbTen", "Tên nhân viên không được để trống") &&
    validation.checkName(ten, "tbTen", "Tên nhân viên chỉ chứa kí tự chữ");

  isValid &=
    validation.checkEmpty(email, "tbEmail", "Email không được để trống") &&
    validation.checkEmail(email, "tbEmail", "Email không đúng định dạng");

  isValid &=
    validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không được để trống") &&
    validation.checkPass(
      pass,
      "tbMatKhau",
      "Mật khẩu phải chứa 6-10 kí tự, ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );

  isValid &=
    validation.checkEmpty(ngayLam, "tbNgay", "Ngày làm không được để trống") &&
    validation.checkDay(ngayLam, "tbNgay", "Ngày làm không đúng định dạng");

  isValid &=
    validation.checkEmpty(
      luongCoBan,
      "tbLuongCB",
      "Lương không được để trống"
    ) &&
    validation.checkLuong(luongCoBan, "tbLuongCB", "Lương từ 1tr đến 20tr");

  isValid &= validation.checkSelect("chucvu", "tbChucVu", "Xin Chọn chức vụ");

  isValid &=
    validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không được để trống") &&
    validation.checkTime(gioLam, "tbGiolam", "Giờ làm từ 80 đến 200");

  if (isValid) {
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
  }
};

function hienThiTable(mang) {
  var content = "";
  mang.map(function (nv, index) {
    var tr = `<tr>
            <td style='vertical-align: middle'>${nv.taiKhoanNV}</td>
            <td style='vertical-align: middle'>${nv.tenNV}</td>
            <td style='vertical-align: middle'>${nv.emailNV}</td>
            <td style='vertical-align: middle'>${nv.ngayLamNV}</td>
            <td style='vertical-align: middle'>${nv.chucvuNV}</td>
            <td style='vertical-align: middle'>${nv.tongLuong}</td>
            <td style='vertical-align: middle'>${nv.loai}</td>
            <td style='vertical-align: middle'>
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

  var isValid = true;
  // isValid &= validation.checkEmpty(taiKhoan,'tbTKNV','Tên tài khoản không được để trống') && validation.checkAcc(taiKhoan,'tbTKNV','Tên tài khoản không được trùng',dsnv.mangNV)

  isValid &=
    validation.checkEmpty(ten, "tbTen", "Tên nhân viên không được để trống") &&
    validation.checkName(ten, "tbTen", "Tên nhân viên chỉ chứa kí tự chữ");

  isValid &=
    validation.checkEmpty(email, "tbEmail", "Email không được để trống") &&
    validation.checkEmail(email, "tbEmail", "Email không đúng định dạng");

  isValid &=
    validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không được để trống") &&
    validation.checkPass(
      pass,
      "tbMatKhau",
      "Mật khẩu phải chứa 6-10 kí tự, ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );

  isValid &=
    validation.checkEmpty(ngayLam, "tbNgay", "Ngày làm không được để trống") &&
    validation.checkDay(ngayLam, "tbNgay", "Ngày làm không đúng định dạng");

  isValid &=
    validation.checkEmpty(
      luongCoBan,
      "tbLuongCB",
      "Lương không được để trống"
    ) &&
    validation.checkLuong(luongCoBan, "tbLuongCB", "Lương từ 1tr đến 20tr");

  isValid &= validation.checkSelect("chucvu", "tbChucVu", "Xin Chọn chức vụ");

  isValid &=
    validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không được để trống") &&
    validation.checkTime(gioLam, "tbGiolam", "Giờ làm từ 80 đến 200");
  if (isValid) {
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
  }
};

function resetForm() {
  getELE("formQLNV").reset();
  getELE("tknv").disabled = false;
}
function searchChucVuNV(){
  var keyword = getELE('searchName').value.trim();
  var mangTK = [];
  mangTK = dsnv.searchChucvu(keyword);
  hienThiTable(mangTK);
}
getELE('btnTimNV').addEventListener('click',searchChucVuNV);

getELE('searchName').addEventListener('keyup',searchChucVuNV);
