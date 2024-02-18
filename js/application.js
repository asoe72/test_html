function initApplication() {

	$('#print-book').click(function(){
		printBook();
		this.blur();
	});
	
}


///@brief	서버에 print-book 요청 송신
function printBook() {

	const url = 'https://raw.githubusercontent.com/hyundai-robotics/doc-hi6-operation/korean-tp630/book.html';
	$.ajax({
		type: 'GET',
		url: url,
		success: function (res) {
			let html = res;
			//var wnd = window.open("https://www.google.com", '_blank');
			var wnd = window.open("about:blank", '_blank');
			wnd.document.write(html);
			wnd.document.close();
			wnd.focus();
			//console.log(res);
		}
	});

	//var win = window.open('out/book.html', '_blank');
}
