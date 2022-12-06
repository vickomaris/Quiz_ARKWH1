//VICKO MARIS SEPTIADI

const arkFood = (harga, promo, jarak, pajak) => {

    let biayaAntar = 5000;
    let potongan= 0; 
    
    let pot1 = harga * 50 / 100 ; //‘ARKAFOOD5’
        if(pot1 >= 50000){
            pot1=50000;
        };
    let pot2 = harga * 60 / 100 ; //‘DITRAKTIRDEMY’
        if(pot2 >= 25000){
            pot2=30000;
        };
    
    // promo
        if(promo == "ARKAFOOD5"){
            potongan=pot1;
        }else if(promo == "DITRAKTIRDEMY"){
            potongan=pot2;
        }else{
            console.log("kode promo salah / tidak menggunakan kode promo")
        };
        
    //biaya antar
    if(jarak <= 2){
        biayaAntar = 5000;
    }
    //console.log(biayaAntar);
    else{
        for(let i = 3; i<=jarak; i++){
            biayaAntar = biayaAntar + 3000;
        }
    }
    
    //pajak
    if(pajak == true){
        hitPajak = harga * 5 / 100;
    }else{
        hitPajak = harga * 0;
    }
    
    let subTotal = harga + biayaAntar + hitPajak - potongan;
    
    console.log("Total Harga : ", harga);
    console.log("potongan :", potongan);
    console.log("Biaya Antar :", biayaAntar);
    console.log("Pajak :", hitPajak);
    console.log("Sub Total : ",subTotal);
    
    }
    
    arkFood(75000, 'ARKAFOOD5', 5, true) 
    
    //promo ARKAFOOD5(50% maks 50k) DITRAKTIRDEMY(60% maks 30k)