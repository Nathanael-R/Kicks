//AIR: price_1MldJvLHVtChsdIFIsZ6hkX9

const productList = [
    {
        id: 'price_1MldJvLHVtChsdIFIsZ6hkX9',
        image: "https://i.ibb.co/2Ns9yqc/redShoe2.png",
        title: 'AIR ZOOM',
        desc: 'MENS SHOES',
        price: 100
    },
    {
        id: 'price_1MldiBLHVtChsdIFjepvhAcm',
        image: "https://i.ibb.co/BBCbHDT/Rectangle-12.png",
        title: 'AIR ZOOM',
        desc: 'MENS SHOES',
        price: 100
    },
    {
        id: 3,
        image: "https://i.ibb.co/XXtFmkB/Rectangle-13.png",
        title: 'AIR ZOOM',
        desc: 'MENS SHOES',
        price: 100
    },
    {
        id: 4,
        image: "https://i.ibb.co/5jrcS3q/Rectangle-14.png",
        title: 'AIR ZOOM',
        desc: 'MENS SHOES',
        price: 100
    },
    {
        id: 5,
        image: "https://i.ibb.co/fdxyjms/Rectangle-15.png",
        title: 'AIR ZOOM',
        desc: 'MENS SHOES',
        price: 100
    },
    {
        id: 6,
        image: "https://i.ibb.co/23fTVLY/Rectangle-16.png",
        title: 'AIR ZOOM',
        desc: 'MENS SHOES',
        price: 100
    },
    {
        id: 7,
        image: "https://i.ibb.co/sqvwz4M/Rectangle-17.png",
        title: 'AIR ZOOM',
        desc: 'MENS SHOES',
        price: 100
    },
    {
        id: 8,
        image: "https://i.ibb.co/nctBB5F/Rectangle-18.png",
        title: 'AIR ZOOM',
        desc: 'MENS SHOES',
        price: 100
    }
]
{/*<img src="https://i.ibb.co/BBCbHDT/Rectangle-12.png" alt="Rectangle-12" border="0">
<img src="https://i.ibb.co/XXtFmkB/Rectangle-13.png" alt="Rectangle-13" border="0">
<img src="https://i.ibb.co/5jrcS3q/Rectangle-14.png" alt="Rectangle-14" border="0">
<img src="https://i.ibb.co/fdxyjms/Rectangle-15.png" alt="Rectangle-15" border="0">
<img src="https://i.ibb.co/23fTVLY/Rectangle-16.png" alt="Rectangle-16" border="0">
<img src="https://i.ibb.co/sqvwz4M/Rectangle-17.png" alt="Rectangle-17" border="0">
<img src="https://i.ibb.co/nctBB5F/Rectangle-18.png" alt="Rectangle-18" border="0"> */}
function getProducts(id){
    let products = productList.find(item => item.id === id)

    if (products === undefined){
        console.log(`This product doesn't exist:` + id)
        return undefined
    }
    return products
}

export {productList, getProducts}