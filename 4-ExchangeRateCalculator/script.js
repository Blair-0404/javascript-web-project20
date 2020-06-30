// fetch 연습
// 아래처럼 바로 res.json()을 하면 promise pending상태가 찍힌다.
// function calculate() {
//     fetch("items.json").then((res) => console.log(res.json()));
//   }

// function calculate() {
//   fetch("items.json")
//     .then((res) => res.json()) // 이렇게 받은 응답값을json해주고
//     .then((data) => console.log(data)); // 다시 .then로 접근해서 데이터를 받아와야 한다.
// }

// function calculate() {
//   fetch("items.json")
//     .then((res) => res.json()) // 이렇게 받은 응답값을json해주고
//     .then((data) => (document.body.innerHTML = data[0].title)); // 다시 .then로 접근해서 데이터를 받아와야 한다.
// }

const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(
    `https://prime.exchangerate-api.com/v5/41107fa766884b9aae24d76b/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two];

      rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
