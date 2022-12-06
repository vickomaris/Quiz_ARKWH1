//VICKO MARIS SEPTIADI
function discount(jmlItem, harga) {
    let totalHarga = harga * jmlItem;
    let discount = (totalHarga * 35 / 100);
    if (discount > 50000) {
        discount = 50000
    };

    if (totalHarga >= 60000) {
        potongan = (discount);
        //potongan = ((35 / 100) * totalHarga);
        subTotal = (totalHarga - potongan);
        console.log("Total Harga : ",totalHarga);
        console.log("potongan", potongan);
        console.log("Sub Total : ",subTotal);
    }
    else {
        potongan = (discount * 0);
        //potongan = ((35 / 100) * 0);
        subTotal = (totalHarga - potongan);
        console.log("Total Harga : ",totalHarga);
        console.log("potongan", potongan);
        console.log("Sub Total : ",subTotal);
    }
}
discount(4, 60000);
