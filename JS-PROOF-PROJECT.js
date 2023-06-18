/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
// function mintNFT () {

// }

// // create a "loop" that will go through an "array" of NFT's
// // and print their metadata with console.log()
// function listNFTs () {

// }

// // print the total number of NFTs we have minted to the console
// function getTotalSupply() {

// }

let NFTs=new Set()

class NFT {

    constructor(name, value, currentOwnerID,previousOwnerID,token) {
        this.token =undefined
        this.name = name;
        this.value = value;
        this.currentOwnerID = currentOwnerID;
        this.previousOwnerID = previousOwnerID;
        let num;
        num=Math.floor(Math.random()*1000000).toString(36)+Math.floor(Math.random()*1000000).toString(36)+Math.floor(Math.random()*1000000).toString(36)+Math.floor(Math.random()*1000000).toString(36)
        
        this.token=num
        
        
        NFTs.add(this)
      }
      
  }
  function mintNFT (name, value, currentOwnerID,previousOwnerID) {
    const newNFT = new NFT(name, value, currentOwnerID,previousOwnerID)
    console.log('NFT created');
    return newNFT
  }
  function listNFTs () {
    console.log(NFTs)
  }
  function getTotalSupply() {
    console.log(NFTs.size);
    return NFTs.size
  }

  mintNFT('unicorn',56,2313,undefined)
  mintNFT('unicorn',56,3342,2313)
  mintNFT('azimuth',56,3342,7783)
  
  listNFTs ()
  getTotalSupply()
