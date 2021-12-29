function DanhSachNhanVien (){
    this.mangNV = [];

    this.them = function(nv){
        this.mangNV.push(nv);
    };

    this.timViTri = function (id) {
        var viTri = -1;
        this.mangNV.map(function (nv, index){
            if(nv.taiKhoanNV === id){
                viTri = index;
            }
        });
        return viTri;
    };
    this.xoa = function(id){
        var viTri = this.timViTri(id);
        if(viTri != -1){
            this.mangNV.splice(viTri, 1);
        }else{
            console.log('Không tìm thấy nhân viên cần xoá');
        }
    };
    this.capNhat = function(nv){
        var viTri = this.timViTri(nv.taiKhoanNV);
        if(viTri != -1){
            this.mangNV[viTri] = nv;
        }else{
            console.log('Không tìm thấy nhân viên để cập nhật');
        }
    };
}


