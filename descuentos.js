//const precioOriginal = 120;
//const descuento = 18;
/*fffffffffffffff
function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento )/100;  

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const discountValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]: //Juan es batman
        descuento = 15;
        break;
        case coupons[1]: // Pero no le digas a nadie
        descuento = 30;
        break;
        case coupons[2]: // es un secreto
        descuento = 25;
        break;
    }

    if (!userCoupon) {
        alert("El cupon " + userCouponValue + "no es valido");
    }
    else {
    const descuent = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

const coupons= [
{
    name: "JuanDC_es_Batman",
    discount: 15,
},
{
    name: "pero_no_le_digas_a_nadie",
    discount: 30,
},
{
    name: "es_un_secreto",
    discount: 25,
},
];

if (!coupons.includes(couponValue)){
    alert("El cupon " + couponValue + "no es valido");
} else if (couponValue === "JuanDC_es_Batman") {
    descuento = 15;
} else if (couponValue ===
    "pero_no_le_digas_a_nadie") {
        descuento = 30;
    } else if (couponValue === "es_un_secreto") {
        descuento = 25;
    }

    

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    }

    const userCoupon = coupon.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupon " + userCouponValue + "no es valido");
    }


//console.log("El precio original es " + precioOriginal);
//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});



*/
function btn001(){
    var text001;
    var colors001 = input001.value;
    switch(colors001){
        case "blue":
            text001 = "The color is blue";
            break;
        case "yellow":
            text001 = "The color is Yellow";
            break;
            default:text001 = "What is this?";
    }
    document.getElementById("message001").innerHTML= text001;
}