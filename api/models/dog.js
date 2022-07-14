// const dogData = require("../../db/dogs");

//////////////// MONGODB //////////////////

const { init } = require("../initdb");

///////////////////////////////////////////

//////////////// POSTGRESQL //////////////////

// const { pool } = require("../initdb");

///////////////////////////////////////////

// const { pool } = require("../initdb") 

class Dog {
    constructor(data){
        this.id = data._id
        this.title = data.title;
        this.age = data.pseudonym;
        this.post = data.post;
    }
    ///////////////// POSTGRESQL /////////////////////////////
    // static get all(){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             const dogData = await pool.query('SELECT * FROM dogs;')
    //             console.log('*****************************');
    //             console.log(dogData);
    //             console.log('*****************************');
    //             const dogs = dogData.rows.map(d => new Dog(d));
    //             if( !dogs.length ) { throw new Error('No doggos here!')}
    //             resolve(dogs);
    //         } catch (err){
    //             reject(`Error retrieving doggos: ${err.message}`)
    //         }
    //     })
    // }

    // static findByName(name) {
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             const dogData = await pool.query(`SELECT * FROM dogs WHERE name = $1;`, [ name ])
    //             console.log('***********************');
    //             console.log(dogData.rows);
    //             console.log('***********************');
    //             const dog = new Dog(dogData.rows[0])        
    //             if( !dog ) { throw new Error('No doggos here!')}
    //             resolve(dog);
    //         } catch (err){
    //             reject(`Error retrieving doggos: ${err.message}`)
    //         }
    //     })
    // }

    ///////////////// MONGODB ///////////////////////////
    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                console.log("************ This is the db", db);
                const dbData = await db.collection('dogs').find({}).toArray()
                console.log('*****************************');
                console.log(dbData);
                console.log('*****************************');
                const dogs = dbData.map(d => new Dog(d));
                if( !dogs.length ) { throw new Error('No doggos here!')}
                resolve(dogs);
            } catch (err){
                reject(`Error retrieving doggos: ${err.message}`)
            }
        })
    }
}

module.exports = Dog;