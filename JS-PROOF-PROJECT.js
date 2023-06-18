
let NFTS=new Set()

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
        
        
        NFTS.add(this)
      }
      
  }
  function mintNFT (name, value, currentOwnerID,previousOwnerID) {
    const newNFT = new NFT(name, value, currentOwnerID,previousOwnerID)
    console.log('NFT created');
    return newNFT
  }
  function listNFTs () {
    console.log(NFTS)
  }
  function getTotalSupply() {
    console.log(NFTS.size);
    return NFTS.size
  }

  mintNFT('unicorn',56,2313,undefined)
  mintNFT('unicorn',56,3342,2313)
  mintNFT('azimuth',56,3342,7783)
  
  listNFTs ()
  getTotalSupply()
