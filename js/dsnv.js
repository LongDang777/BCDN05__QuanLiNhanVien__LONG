function DanhSachNhanVien() {
  this.mangNV = [];

  this.them = function (nv) {
    this.mangNV.push(nv);
  };

  this.timViTri = function (id) {
    var viTri = -1;
    this.mangNV.map(function (nv, index) {
      if (nv.taiKhoanNV === id) {
        viTri = index;
      }
    });
    return viTri;
  };
  this.xoa = function (id) {
    var viTri = this.timViTri(id);
    if (viTri != -1) {
      this.mangNV.splice(viTri, 1);
    } else {
      console.log("Không tìm thấy nhân viên cần xoá");
    }
  };
  this.capNhat = function (nv) {
    var viTri = this.timViTri(nv.taiKhoanNV);
    if (viTri != -1) {
      this.mangNV[viTri] = nv;
    } else {
      console.log("Không tìm thấy nhân viên để cập nhật");
    }
  };
  this.searchChucvu = function (keyword) {
    var mangTK = [];
    var keywordLower = keyword.toLowerCase();
    this.mangNV.map(function (nv) {
      var chucVuLower = nv.chucvuNV.toLowerCase();
      var indexChucVu = chucVuLower.indexOf(keywordLower);
      if (indexChucVu > -1) {
        mangTK.push(nv);
      }
    });
    return mangTK;
  };
}
