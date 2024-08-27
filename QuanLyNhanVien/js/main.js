var nhanvienArr = [];

// Lấy dữ liệu từ localStorage khi tải trang
// var dataJSON = localStorage.getItem("DSNV_JSON");
// nhanvienArr = JSON.parse(dataJSON);

// renderNV(nhanvienArr);

var dataJSON = localStorage.getItem("DSNV_JSON");
var dataArr = JSON.parse(dataJSON || '[]');
nhanvienArr = dataArr.map((item) =>{
  var nv = new NhanVien(
    item.tknv,
    item.name,
    item.email,
    item.passWord,
    item.datePicker,
    item.luongCB,
    item.chucVu,
    item.gioLam,
  );
    return nv;
});
console.log(nhanvienArr);
renderNV(nhanvienArr);

function themNV() {
  
  var nv = thongTinForm();
  
  var isIdExist = nhanvienArr.some(item => item.tknv === nv.tknv);
  if (isIdExist) {
    alert("Tài khoản nhân viên đã tồn tại! Vui lòng chọn tài khoản khác.");
    return;
  }
  var isValid = validateTaiKhoan(nv.tknv , "tbTKNV") &
  validateName(nv.name, "tbTen") &
  validateEmail(nv.email, "tbEmail") &
  validatePassWord(nv.passWord,"tbMatKhau") &
  validateNgayLam(nv.datePicker, "tbNgay") &
  validateLuongCB(nv.luongCB,"tbLuongCB") &
  validateChucVu(nv.chucVu, "tbChucVu") &
  validateGioLam(nv.gioLam, "tbGiolam");
  console.log(nv);
  if (isValid) {
    nhanvienArr.push(nv);
    var dataJSON = JSON.stringify(nhanvienArr);
    localStorage.setItem("DSNV_JSON", dataJSON);
    renderNV(nhanvienArr);
    console.log(nhanvienArr);
    $("#myModal").modal("hide")
  }
}

function reset(){
  document.getElementById("formQLNV").reset();
  document.getElementById("tknv").disabled = false;
}

function xoaNV(id){
  var index = nhanvienArr.findIndex(function(item){
    return item.tknv === id;
  });
  nhanvienArr.splice(index,1);
  var dataJSON = JSON.stringify(nhanvienArr);
  localStorage.setItem("DSNV_JSON", dataJSON);
  renderNV(nhanvienArr);
}

function suaNV(id){
  var index = nhanvienArr.findIndex(function (item) {
    return item.tknv === id;
  });
  var nv = nhanvienArr[index];
  document.getElementById("tknv").disabled = true;
  hienThiNhanVien(nv);
}

function capNhat(){
  var nv = thongTinForm();
  var isValid = validateTaiKhoan(nv.tknv , "tbTKNV") &
  validateName(nv.name, "tbTen") &
  validateEmail(nv.email, "tbEmail") &
  validatePassWord(nv.passWord,"tbMatKhau") &
  validateNgayLam(nv.datePicker, "tbNgay") &
  validateLuongCB(nv.luongCB,"tbLuongCB") &
  validateChucVu(nv.chucVu, "tbChucVu") &
  validateGioLam(nv.gioLam, "tbGiolam");
  if(isValid){
    var index = nhanvienArr.findIndex(function (item){
      return item.tknv === nv.tknv;
    })
    nhanvienArr[index] = nv;
    console.log(nv);
    var dataJSON = JSON.stringify(nhanvienArr);
    localStorage.setItem("DSNV_JSON", dataJSON);
    renderNV(nhanvienArr);
    // reset();
    $("#myModal").modal("hide");
  }
}

function timKiem(){
  var loaiNV = document.getElementById("searchName").value.trim().toLowerCase();
  if(loaiNV ===""){
    return renderNV(nhanvienArr);
  }else{
    var ketQua = nhanvienArr.filter(nv => nv.xepLoai() === loaiNV);
    return renderNV(ketQua); 
  }
  }
