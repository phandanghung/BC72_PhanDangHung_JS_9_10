//hàm lấy thông tin
function thongTinForm(){
  var tknv = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var passWord = document.getElementById("password").value;
  var datePicker = document.getElementById("datepicker").value ;
  var luongCB = document.getElementById("luongCB").value * 1;
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value;
  return nv = new NhanVien(tknv, name, email, passWord, datePicker, luongCB, chucVu,gioLam );
}

function hienThiNhanVien(data){
  document.getElementById("tknv").value = data.tknv;
  document.getElementById("name").value = data.name;
  document.getElementById("email").value = data.email;
  document.getElementById("password").value = data.passWord;
  document.getElementById("datepicker").value = data.datePicker;
  document.getElementById("luongCB").value = data.luongCB * 1;
  document.getElementById("chucvu").value = data.chucVu;
  document.getElementById("gioLam").value = data.gioLam * 1;
}



function renderNV(nhanvienArr) {
  var contentHTML = "";

    nhanvienArr.forEach( nv => {
          var trString = `<tr>
                              <td>${nv.tknv}</td>
                              <td>${nv.name}</td>
                              <td>${nv.email}</td>
                              <td>${nv.datePicker}</td>
                              <td>${nv.chucVu}</td>
                              <td>${nv.tongLuong()}</td>
                              <td>${nv.xepLoai()}</td>
                              <td>
                                  <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="suaNV('${nv.tknv}')">Sửa</button>
                                  <button class="btn btn-danger" onclick="xoaNV('${nv.tknv}')">Xóa</button>
                              </td>
                          </tr>`;
          contentHTML += trString;
  });

  // nhanvienArr.forEach(nv => {

  // });

  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

