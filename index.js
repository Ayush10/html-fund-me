// in nodeks
// require()

// in front-end javascript you can't use require
// import
import { ethers } from "./ethers-56.js"
import { abi } from "./constants.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fund")
connectButton.onclick = connect
fundButton.onclick = fund

console.log(ethers)

async function connect() {
    if (typeof window.ethereum != "undefined") {
        console.log("I see a metamask!")
        await window.ethereum.request({ method: "eth_requestAccounts" })
        console.log("Connected!!")
        connectButton.innerHTML = "Connected!"
    } else {
        console.log("No Metamask!!")
        connectButton.innerHTML = "Please install Metamask!"
    }
}

// fund function
async function fund(ethAmount) {
    console.log(`Funding with ${ethAmount}`)
    if (typeof window.ethereum != "undefined") {
        // provider / connection to the blockchain
        // signer / wallet / someone with some gas
        // contract that we are interacting with
        // ^ABI & Address
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        console.log(signer)
        const contract = ""
    }
}

// withdraw
