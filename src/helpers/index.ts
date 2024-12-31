const getData = async () => {
    const response = await fetch("https://jsonserver.reactbd.com/phone")
    if (!response.ok) {
        throw new Error('fetch data failed!')
    } return response.json();
};


export const getSingleProduct = async (_id:number) => {
    const item = await getData();
    const singleItem =await item.find ((product:any) => product._id === _id)
    return singleItem;
}