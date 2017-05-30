function ActiveSidebar() {

	let btnSidebar = document.querySelector('#menu');
	let btnCloseSidebar = document.querySelector('#btn-close');
	let sidebarAside = document.querySelector('#sidebar');


	btnSidebar.addEventListener('click', function(){
		sidebarAside.classList.add('sidebar-open');
	});

	btnCloseSidebar.addEventListener('click',function(){
		sidebarAside.classList.remove('sidebar-open');
	});



}

ActiveSidebar();