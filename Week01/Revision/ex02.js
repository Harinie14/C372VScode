const paymentStatus = "APPROVED";

if (paymentStatus === "APPROVED") {
    console.log("Pet-care service confirmed");
} else if (paymentStatus === "PENDING") {
    console.log("Payment is being processed");
} else if (paymentStatus === "DECLINED") {
    console.log("Payment unsuccessful");
}


// using switch 

switch (paymentStatus){
    case "APPROVED":
        console.log("Pet-care service confirmed");
        break;
    case "PENDING":
        console.log("Payment is being processed");
        break;
    case "DECLINED":
        console.log("Payment unsuccessful");
        break;
    default:
        console.log("Invalid payment status");
}
