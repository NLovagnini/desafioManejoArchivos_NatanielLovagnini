import {promises as fs} from 'fs'

export default class ProductManager{
    constructor(){

    }

    read = async (file) =>{
        let productsArray = []
        try{
            productsArray = JSON.parse(await fs.readFile(file, 'utf-8'));
        } catch (err){
            console.log(err)
        }
        return productsArray
    }

    write = async (file, input) =>{
        try{
            await fs.writeFile(file, JSON.stringify(input, null, 2))
        }catch (err){
            console.log(err)
        }
    }

    save = async (file, newObj) =>{
        try{
            const products = await this.read();
            newObj.id = products.length+1
            products.push({...newObj})
            await this.write(JSON.stringify(file, products, null, 2))
            return newObj.id
        } catch (err) {
            console.log(err)
        }


    }
}

