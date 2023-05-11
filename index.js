let hasil = 11;

let x = 3;

do {
  if (x < 5) {
    hasil -= 2;
  }
  x++;
} while (x <= 6);
console.log(hasil);

fetch("http://localhost/api/yo-score-api/public/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "adminyos", password: "1234" }),
})
  .then((data) => data.json())
  .then((data) => console.log(data));
