const publish = async () => {
	if (document.querySelector("#c-ta").value) {
		alert("Published Successfully");
	} else {
		alert("Title Missing");
	}
};

const user_url = `https://tripotodb.herokuapp.com/users/Activity`;

const addContent = async () => {
	let content = document.querySelector("#text-div").textContent;
	console.log(content);

	content = JSON.stringify(content);
	let res = await fetch(user_url, {
		method: "POST",
		body: content,
		headers: {
			"Content-type": "application/json",
		},
	});

	let data = await res.json();
	console.log(data);
};
