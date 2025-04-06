const profiles = [
	{
		fullName: "Wade Wilson",
		title: "UI/UX Designer",
		price: "$55/hr",
		availability: true,
		company: "Epic Coders",
		tags: ["UI", "UX", "Photoshop", "+4"],
		bio: "Wade is a 32-year-old UI/UX designer with an impressive portfolio behind him.",
		avatar: "img1.jpg",
	},
	{
		fullName: "Maria Petrescu",
		title: "Mobile Designer",
		price: "$32/hr",
		availability: false,
		company: "Freelancer",
		tags: ["PHP", "Android", "iOS", "+2"],
		bio: "Maria is an Android and iOS developer who worked at Apple for 6 years.",
		avatar: "img2.jpg",
	},
	{
		fullName: "Alexandra Morgan",
		title: "Mobile Designer",
		price: "$42/hr",
		availability: false,
		company: "Freelancer",
		tags: ["PHP", "Android", "iOS", "+12"],
		bio: "Alexandra is a dedicated developer for mobile platforms and is very good at it.",
		avatar: "img3.jpg",
	},
	{
		fullName: "Jennifer Smith",
		title: "Interactive Designer",
		price: "$44/hr",
		availability: false,
		company: "Freelancer",
		tags: ["PHP", "Android", "iOS", "+2"],
		bio: "Jennifer is an interactive designer who is really awesome at what she does.",
		avatar: "img4.jpg",
	},
	{
		fullName: "Svetlana Anyukova",
		title: "Mobile Designer",
		price: "$40/hr",
		availability: true,
		company: "Freelancer",
		tags: ["PHP", "Android", "iOS", "+2"],
		bio: "Svetlana is an Android and iOS designer with advanced knowledge in coding.",
		avatar: "img5.jpg",
	},
	{
		fullName: "Marko van Kooh",
		title: "Web Designer",
		price: "$30/hr",
		availability: false,
		company: "Visual Madness",
		tags: ["UI", "UX", "Photoshop", "+4"],
		bio: "Marko is a 25-year-old web designer with an impressive portfolio behind him.",
		avatar: "img6.jpg",
	},
	{
		fullName: "Pawel Koszentka",
		title: "UX Designer",
		price: "$50/hr",
		availability: false,
		company: "Apple Inc.",
		tags: ["UI", "UX", "Photoshop", "+4"],
		bio: "Pawel is a 32-year-old UX designer with over 10 years of experience.",
		avatar: "img7.jpg",
	},
	{
		fullName: "Sonia Simionov",
		title: "Mobile Designer",
		price: "$32/hr",
		availability: false,
		company: "Freelancer",
		tags: ["PHP", "Android", "iOS", "+2"],
		bio: "Sonia is an Android and iOS developer who worked at Apple for 6 years.",
		avatar: "img8.jpg",
	},
	{
		fullName: "Jonathan Wayne",
		title: "Photographer",
		price: "$40/hr",
		availability: false,
		company: "Epic Coders",
		tags: ["UI", "UX", "Photoshop", "+4"],
		bio: "Jonathan is a 28-year-old photographer from London with a real talent for what he does.",
		avatar: "img9.jpg",
	},
	{
		fullName: "Batman",
		title: "Superhero",
		price: "Free",
		availability: false,
		company: "Freelancer",
		tags: ["Tech", "IT", "Martial Arts", "+4"],
		bio: "I'm Batman!",
		avatar: "img10.jpg",
	},
	{
		fullName: "Georgiana Suclea",
		title: "Mobile Designer",
		price: "$39/hr",
		availability: false,
		company: "Freelancer",
		tags: ["PHP", "Android", "iOS", "+2"],
		bio: "Georgiana is an Android and iOS developer who worked at Apple for 6 years.",
		avatar: "img11.jpg",
	},
	{
		fullName: "Gregory Johnes",
		title: "UI/UX Designer",
		price: "$45/hr",
		availability: false,
		company: "Epic Coders",
		tags: ["UI", "UX", "Photoshop", "+4"],
		bio: "Gregory is a 32-year-old UI/UX designer, with an impressive portfolio behind him.",
		avatar: "img12.jpg",
	},
];

let profilesCards = "";

profiles.forEach(function (profile) {
	profilesCards += `
		<div class="profile">
			<div class="upper">
				<div class="profile-top-1">
					<div class="${profile.availability ? "availability" : "no-availability"}">available</div>
					<div class="price">${profile.price}</div>
				</div>
				<div class="profile-img">
					<img src="./images/${profile.avatar}" alt="${profile.avatar} is not loaded.." />
				</div>
				<div class="profile-details">
					<div class="full-name">${profile.fullName}</div>
					<div class="title">${profile.title}</div>
					<div class="company ${profile.company === "Freelancer" ? "freelancer" : ""}">
						<i class="${profile.company === "Freelancer" ? "ri-user-3-line" : "ri-building-line"}"></i> 
						${profile.company}
					</div>
					<ul class="tags">
						${profile.tags.reduce(function (acc, tag) {
							return (acc += `<li>${tag}</li>`);
						}, "")}
					</ul>
					<p class="bio">
						${profile.bio.length > 85 ? profile.bio.slice(0, 85) + "..." : profile.bio}
					</p>
					<div class="line-break"></div>
				</div>
			</div>
			<button class="view-profile-btn">View Profile</button>
		</div>
	`;
});

document.body.innerHTML = profilesCards;
