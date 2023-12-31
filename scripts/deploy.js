async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const mtok = await ethers.getContractFactory("mtok");
  const contract = await mtok.deploy();

  console.log("Contract deployed at:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });