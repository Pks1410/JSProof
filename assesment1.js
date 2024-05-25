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
const nft = [ ]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,hash_id,recieveraddress,domain,rarity){
    const NFT={
        "name:": name,
        "hashid": hash_id,
        "recieveraddress": recieveraddress,
        "domain": domain,
        "rarity": rarity
    }
    nft.push(NFT);
    console.log("Minted for the user named: "+ name);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < nft.length;i++){
        console.log(nft[i]);
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(nft.length);
}
// call your functions below this line
mintNFT("Ruffledzest","123456789x4565","0x558388882552","Literary Works","Rare");
mintNFT("Megatron","7894561325","0x456632147885","Digital Arts","Epic");
mintNFT("Richard","0123025575x4","0231440x2181552","Music","Legendary");
listNFTs();
getTotalSupply();

