const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const prices = document.querySelectorAll(".price")
	let totalPrice = 0;
	prices.forEach((price) => {
		totalPrice += parseFloat(price.textContent.trim());
	})

	const totalDiv = document.getElementById("ans");
	totalDiv.textContent = `total: Rs${totalPrice}`;
};

getSumBtn.addEventListener("click", getSum);
