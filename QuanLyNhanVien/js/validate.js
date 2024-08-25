function validateTaiKhoan(value, idErr) {
	if(!value){
		document.getElementById(idErr).innerHTML ="Nội dung không được để trống";
		document.getElementById(idErr).style.display = "block";
		return false;
	}
	const regexTaiKhoan = /^\d{4,6}$/;
	let isCheckTaiKhoan = regexTaiKhoan.test(value);
	if (!isCheckTaiKhoan) {
		document.getElementById(idErr).innerHTML ="Chưa đúng định dạng tài khoản";
		document.getElementById(idErr).style.display = "block";
		return false;
	}
	document.getElementById(idErr).innerHTML = "";
	return true;
}

function validateEmail(value, idErr) {
	if(!value){
		document.getElementById(idErr).innerHTML ="Nội dung không được để trống";
		document.getElementById(idErr).style.display = "block";
		return false;
	}
	const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	let isCheckEmail = regexEmail.test(value);
	if (!isCheckEmail) {
		document.getElementById(idErr).innerHTML = "Chưa đúng định dạng email";
		document.getElementById(idErr).style.display = "block";
		return false;
	}
	document.getElementById(idErr).innerHTML = "";
	return true;
}

function validateName(value, idErr) {
	if(!value){
		document.getElementById(idErr).innerHTML ="Nội dung không được để trống";
		document.getElementById(idErr).style.display = "block";
		return false;
	}
	const regexName = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
	let isCheckName = regexName.test(value);
	if (!isCheckName) {
		document.getElementById(idErr).innerHTML ="Chưa đúng định dạng tên nhân viên";
		document.getElementById(idErr).style.display = "block";
		return false;
	}
	    document.getElementById(idErr).innerHTML = "";
	    return true;
}

function validatePassWord(value, idErr) {
	if(!value){
		document.getElementById(idErr).innerHTML ="Nội dung không được để trống";
		document.getElementById(idErr).style.display = "block";
		return false;
	}
	const regexPassWord =/^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/;
	let isCheckPassWord = regexPassWord.test(value);
	if (!isCheckPassWord) {
		document.getElementById(idErr).innerHTML =
			"Mật Khẩu từ 6-10 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
			document.getElementById(idErr).style.display = "block";
		return false;
	}
	    document.getElementById(idErr).innerHTML = "";
	    return true;
}

function validateNgayLam(ngayLam, idErr) {
	if(!ngayLam){
		document.getElementById(idErr).innerHTML ="Nội dung không được để trống";
		document.getElementById(idErr).style.display = "block";
		return false;
	}
  	var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
	if (!regex.test(ngayLam)) {
	  document.getElementById(idErr).innerHTML = "Ngày làm phải có định dạng mm/dd/yyyy.";
	  document.getElementById(idErr).style.display = "block";
	  return false;
	}
  
	document.getElementById(idErr).innerHTML = "";
	document.getElementById(idErr).style.display = "none";
	return true;
  }

  function validateLuongCB(luongCB, idErr) {
    if (luongCB === 0) {
        document.getElementById(idErr).innerHTML = "Nội dung không được để trống";
        document.getElementById(idErr).style.display = "block";
        return false;
    }

    var luong = parseFloat(luongCB);
    if (isNaN(luong) || luong < 1000000 || luong > 20000000) {
        document.getElementById(idErr).innerHTML = "Lương cơ bản phải từ 1.000.000 đến 20.000.000.";
        document.getElementById(idErr).style.display = "block";
        return false;
    }

    document.getElementById(idErr).innerHTML = "";
    document.getElementById(idErr).style.display = "none";
    return true;
}

function validateChucVu(chucVu, idErr) {
	var validChucVu = ["Sếp", "Trưởng phòng", "Nhân viên"];
	
	if (!validChucVu.includes(chucVu)) {
	  document.getElementById(idErr).innerHTML = "Chức vụ không hợp lệ. Vui lòng chọn Giám đốc, Trưởng Phòng, hoặc Nhân Viên.";
	  document.getElementById(idErr).style.display = "block";
	  return false;
	}
  
	document.getElementById(idErr).innerHTML = "";
	document.getElementById(idErr).style.display = "none";
	return true;
  }

  function validateGioLam(value, idErr){
	if(!value){
		document.getElementById(idErr).innerHTML = "Nội dung không được để trống";
		document.getElementById(idErr).style.display = "block";
		return false;
	}
	if(isNaN(value) || value < 80 || value > 200){
		document.getElementById(idErr).innerHTML = "Số giờ phải tứ 80 đến 200";
		document.getElementById(idErr).style.display = "block";
		return false;
	}

	document.getElementById(idErr).innerHTML = "";
	document.getElementById(idErr).style.display = "none";
	return true;
  }

  $(document).ready(function () {
	  // Khi modal bị ẩn (đóng), gọi hàm reset
	  $('#myModal').on('hide.bs.modal', function () {
		reset(); // Gọi hàm reset form
	  });
	});		  
