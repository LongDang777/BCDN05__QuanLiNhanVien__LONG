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
    

    this.tongLuong = function(){
        if(this.chucvuNV == 'Giám đốc'){
            this.tongLuong = this.luongCB * 3; 
        }else if(this.chucvuNV == 'Trưởng phòng'){
            this.tongLuong = this.luongCB * 2; 
        }else if(this.chucvuNV == 'Nhân viên'){
            this.tongLuong = this.luongCB; 
        }else {
            this.tongLuong = 0;
        }
    }

    this.xepLoai = function(){
        if(this.giolamNV >= 192){
            this.loai = 'Xuất sắc';
        }else if(this.giolamNV >= 176){
            this.loai = 'Giỏi';
        }else if(this.giolamNV >= 160){
            this.loai =  'Khá';
        }else if(this.giolamNV < 160){
            this.loai =  'Trung bình';
        }else{
            this.loai =  'Không xếp Loại được nhân viên!';
        }
    }
}

