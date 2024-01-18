/* Navigation */
var nav = document.getElementsByTagName("nav")[0];
var burger = document.getElementsByTagName("burger")[0];
var content = document.getElementsByTagName("content")[0];

burger.onclick = function () {
	nav.classList.toggle("nav-opened");
	content.classList.toggle("content-faded");
};

/* Viewport Alert */
function checkViewportWidth() {
	var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	var wrappers = document.querySelectorAll("wrapper");
	var viewportAlerts = document.querySelectorAll("viewport-alert");
	if (viewportWidth < 360) {
		wrappers.forEach((wrapper) => {
			wrapper.style.display = "none";
		});
		viewportAlerts.forEach((viewportAlert) => {
			viewportAlert.style.display = "flex";
		});
	} else {
		wrappers.forEach((wrapper) => {
			wrapper.style.display = "";
		});
		viewportAlerts.forEach((viewportAlert) => {
			viewportAlert.style.display = "none";
		});
	}
}

checkViewportWidth();
window.addEventListener("resize", function () {
	checkViewportWidth();
});
