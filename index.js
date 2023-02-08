import ProductManager from './class.js'
const prodContainer = new ProductManager()
const file = "./products.json"

console.log(typeof file)

const newProd = {
    title: 'Title',
    description: 'Description',
    price: 123,
    thumbnail: 'Route',
    code: '00000',
    stock: 0
}

//get all
const getAllProds = () =>{
    const allProdsArray = prodContainer.read(file)
    return allProdsArray
}

//get by id
const getProdById = (id) =>{
    const allProdsArray = prodContainer.read(file);
    const filteredArray = allProdsArray.filter((prod) => prod.id == id)
    if (filteredArray === undefined) {
        return 'Product not found'
    } else {
        return filteredArray
    }
}

//delete by id
const delProdById = (id) =>{
    const allProdsArray = prodContainer.read(file);
    const newProdsArray = allProdsArray.filter((prod) => prod.id !== id);
    prodContainer.write(file, newProdsArray)
}


//add new prod
const addNewProd = (newProd) =>{
    const isEmpty = Object.values(newProd).some(x => x === null || x === '');
    if(isEmpty){
        console.log("Invalid Product")
    } else{
        prodContainer.save(file, newProd)
    }
}

//delete all
const deleteAll = () =>{
    prodContainer.write(file, '')
}


addNewProd(newProd)
let allProds = getAllProds()