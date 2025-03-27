const songLink = document.querySelector("a");
const progressBar = document.querySelector("#progress-bar");
const progressCounter = document.querySelector("#progress-counter");
const btn = document.querySelector("button");

let counter = 0;

btn.addEventListener("click", function () {
	btn.textContent = "Downloading...";
	btn.disabled = true;
	btn.style.cursor = "not-allowed";
	btn.style.opacity = 0.6;

	let interval = setInterval(function () {
		counter++;
		progressBar.style.width = `${counter}%`;
		progressCounter.textContent = `${counter}%`;
	}, 60);

	setTimeout(function () {
		clearInterval(interval);
		songLink.click();
		btn.textContent = "Downloaded";
		btn.style = "";
		btn.disabled = false;
		counter = 0;

		// Particles animation
		(function () {
			const end = Date.now() + 5 * 1000;

			// go Buckeyes!
			const colors = ["#bb0000", "#ffffff"];

			(function frame() {
				confetti({
					particleCount: 2,
					angle: 60,
					spread: 55,
					origin: {x: 0},
					colors: colors,
				});

				confetti({
					particleCount: 2,
					angle: 120,
					spread: 55,
					origin: {x: 1},
					colors: colors,
				});

				if (Date.now() < end) {
					requestAnimationFrame(frame);
				}
			})();
		})();
	}, 60 * 100);
});
