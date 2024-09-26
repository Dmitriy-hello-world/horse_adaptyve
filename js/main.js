window.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector("header img")
	const mobileMenu = document.querySelector(".header__nav_mobile")
	const hiddenElement = document.querySelector(".hidden")
	let isMenuOpen = false

	const openMenu = () => {
		mobileMenu.classList.add("header__nav_mobile_active")
		document.body.style.overflow = 'hidden'
		hiddenElement.classList.add("hidden__active")
		burger.setAttribute("src", "images/close.svg")
		isMenuOpen = true
	}

	const closeMenu = () => {
		mobileMenu.classList.remove("header__nav_mobile_active")
		document.body.style.overflow = ''
		hiddenElement.classList.remove("hidden__active")
		burger.setAttribute("src", "images/menu.svg")
		isMenuOpen = false
	}

	burger.addEventListener("click", () => {
		if (isMenuOpen) {
			closeMenu()
		} else {
			openMenu()
		}
	})
})