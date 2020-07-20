
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!!");
    const favoriteFood = process.env.FAV_FOOD;
    console.log(`My favorite food is ${favoriteFood}`);
    await sleep(5000);
  }
}

main();
