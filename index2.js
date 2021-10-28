const user = {
    username: "w",
    weight: "54kg",
    height: "175cm",
};

const weight = "54";
const height = "175";

const bmi = (10000*(weight/(height*height)))
console.log(bmi);

if (bmi < 14) {
    console.log("twig type beat");
} else if (bmi < 18.5) {
    console.log("underweight");
} else if (bmi < 24.9) {
    console.log("healthy");
} else if (bmi < 29.9) {
    console.log("unhealthy");
} else if (bmi > 29.9) {
    console.log("god damn what are you eating");
}


function report(abcdefg) {
    return `the ${username} weighs ${weight} kg ${height} cm`;
}

console.log(report(user))
