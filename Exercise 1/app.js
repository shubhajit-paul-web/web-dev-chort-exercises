const iplTeams = [
	{
		fullName: "Mumbai Indians",
		shortName: "MI",
		primaryColor: "#045093",
		secondaryColor: "#FFFFFF", 
	},
	{
		fullName: "Chennai Super Kings",
		shortName: "CSK",
		primaryColor: "#F7C948", 
		secondaryColor: "#1B1B1B", 
	},
	{
		fullName: "Royal Challengers Bangalore",
		shortName: "RCB",
		primaryColor: "#DA291C", 
		secondaryColor: "#FFFFFF", 
	},
	{
		fullName: "Kolkata Knight Riders",
		shortName: "KKR",
		primaryColor: "#3A225D", 
		secondaryColor: "#F9D435",
	},
	{
		fullName: "Rajasthan Royals",
		shortName: "RR",
		primaryColor: "#EA1A86",
		secondaryColor: "#FFFFFF",
	},
	{
		fullName: "Sunrisers Hyderabad",
		shortName: "SRH",
		primaryColor: "#FB643E",
		secondaryColor: "#000000",
	},
	{
		fullName: "Delhi Capitals",
		shortName: "DC",
		primaryColor: "#17449B", 
		secondaryColor: "#FFFFFF", 
	},
	{
		fullName: "Lucknow Super Giants",
		shortName: "LSG",
		primaryColor: "#2B9F98", 
		secondaryColor: "#FFFFFF", 
	},
	{
		fullName: "Gujarat Titans",
		shortName: "GT",
		primaryColor: "#0C2340",
		secondaryColor: "#EBD35C", 
	},
	{
		fullName: "Punjab Kings",
		shortName: "PBKS",
		primaryColor: "#C8102E",
		secondaryColor: "#FFFFFF",
	},
];

// Selecting elements
const box = document.querySelector(".winner-team");
const button = document.querySelector("button");
const winnerTeamLogo = document.querySelector(".winner-team img");
const fullTeamName = document.querySelector(".full-team-name");
const shortTeamName = document.querySelector(".short-team-name");

// Generate a random index number
const teamIndex = Math.floor(Math.random() * iplTeams.length);
let flag = true;

button.addEventListener("click", function () {
	if (flag) {
		let teamObj = iplTeams[teamIndex];

		// Change elements contents
		winnerTeamLogo.src = `./images/teams-logo/${teamObj.shortName.toLowerCase()}.png`;
		fullTeamName.textContent = teamObj.fullName;
		shortTeamName.textContent = `(${teamObj.shortName})`;

		// Add CSS
		box.style.backgroundColor = teamObj.primaryColor;
		box.style.color = teamObj.secondaryColor;
		button.style.backgroundColor = "#f18e78";
		button.style.cursor = "not-allowed";

		// Congrates animation
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

		flag = false;
	} else {
		button.disabled = true;
	}
});
