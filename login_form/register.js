function submitData () {
	var nameTag = document.getElementById("name")
	localStorage.setItem("name", nameTag.value)

	var ageTag = document.getElementById("age")
	localStorage.setItem("age", ageTag.value)

	var emailTag = document.getElementById("email")
	localStorage.setItem("email", mailTag.value)
}

function showData() {
	name = localStorage.getItem("name")
	age = localStorage.getItem("age")
	email = localStorage.getItem("email")

	document.getElementById("data").innerHTML +=
	`
		<tr>
			<td>${name}</td>
			<td>${age}</td>
			<td>${email}</td>
		</tr>
	`
}