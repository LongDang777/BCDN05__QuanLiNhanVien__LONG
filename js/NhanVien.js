function NhanVien(taiKhoan, ten, email, pass, ngayLam, luongCoBan, chucVu, gioLam){
    this.taiKhoanNV = taiKhoan;
    this.tenNV      = ten;
    this.emailNV    = email;
    this.matKhau    = pass;
    this.ngayLamNV  = ngayLam;
    this.luongCB    = luongCoBan;
    this.chucvuNV   = chucVu;
    this.giolamNV   = gioLam;
    this.tongLuong  = 0;
    this.loai     = '';

    this.tongLuong = function(tongLuong){
        if(this.chucvuNV == 'Sếp'){
            this.tongLuong = this.luongCB * 3; 
        }else if(this.chucvuNV == 'Trưởng phòng'){
            this.tongLuong = this.luongCB * 2; 
        }else if(this.chucvuNV == 'Nhân viên'){
            this.tongLuong = this.luongCB; 
        }else {
            this.tongLuong = 0;
        }
    }

    this.xepLoai = function(loai){
        if(this.giolamNV >= 192){
            this.loai = 'Nhân viên xuất sắc';
        }else if(this.giolamNV >= 176){
            this.loai = 'Nhân viên giỏi';
        }else if(this.giolamNV >= 160){
            this.loai =  'Nhân viên khá';
        }else if(this.giolamNV < 160){
            this.loai =  'Nhân viên trung bình';
        }else{
            this.loai =  'Không xếp Loại được nhân viên!';
        }
    }
}

