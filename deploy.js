//console.log("hi");
//await can be used only in async function, promise based function
// await waits for one function to be comleted then begins the other
//etherjs is one of the most popular javascript based tooling kits that allow us to interact with different blockchains
const ethers = require("ethers");
const fs = require("fs-extra");
async function main() {
  //HTTP://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider(
    "//HTTP://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "5cbf9cb0159f7cd772c7626794e60c794b7c693b9cce00e3708ff886fca0c9e8"
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
