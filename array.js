let data = [3, 4, 2, 8, 10, 6];
let i = 0;
const len = data.length;

console.log("Menggunakan Perulangan For")
for (i ;i < len; i++) {
    console.log(data[i]);
}

console.log("Menggunakan Perulangan While");
i = 0;
while (i < 5) {
    console.log(data[i]);
    i++;
}

console.log("Menggunakan Perulangan Do-While");
i = 0;
do {
    console.log(data[i]);
    i++;
} while (i < 5);