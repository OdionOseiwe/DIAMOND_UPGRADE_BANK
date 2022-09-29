/* global ethers */
/* eslint prefer-const: "off" */

const { getSelectors, FacetCutAction } = require('./libraries/diamond.js')

async function deployDiamond () {
  // deploy facets
  console.log('......................................................................')
  console.log('removing facets')
  const diamondAdress = "0xB7b7D958ED591ed4FCA08552A654B685800aB29E"
  const facet = await ethers.getContractAt('Bankupgrade', diamondAdress)
    const cut =[{
      facetAddress: "0x247A35Bd1f1c6e42Fded50687B10505bfad00Cd1",
      action: FacetCutAction.Remove,
      functionSelectors: getSelectors(facet)
    }]

  // upgrade diamond with facets
  console.log('......................................upgrading .................................')
  console.log('Diamond Cut:', cut)
  const diamondCut = await ethers.getContractAt('IDiamondCut', diamondAdress)
  let tx
  let receipt
  // call 
  const addressZero = ethers.constants.AddressZero ;
  const calldataBtyes = "0x";
  tx = await diamondCut.diamondCut(cut, addressZero, calldataBtyes,  {gasLimit: "5000000"});
  console.log('Diamond cut tx: ', tx.hash)
  receipt = await tx.wait()
  if (!receipt.status) {
    throw Error(`Diamond upgrade failed: ${tx.hash}`)
  }
  console.log('Completed diamond cut')
  return ;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
  deployDiamond()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error)
      process.exit(1)
    })
}

exports.deployDiamond = deployDiamond

// DiamondCutFacet deployed: 0xE7D6F05141E0B904aD5CeEc74579fD519adb3605
// Diamond deployed: 
// DiamondInit deployed: 0x25C0ca4Bf5Ce735445A86Be75f9B151916bbc0b7

// Deploying facets
// DiamondLoupeFacet deployed: 0xA19e6ac1AB5bf17f4fACd5e77b4d9867A49B9093
// OwnershipFacet deployed: 0x8D4f636EdDa1A166EcB45ca477e559Ee683Ce0A4
// Bank deployed: 0xF072EBf8E4721c3297A18c5278781233beB1be63
