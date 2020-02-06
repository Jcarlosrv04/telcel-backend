const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const csvFilePath='./Radiobases.csv'
const csv=require('csvtojson')

const PORT = process.env.PORT || 4002;

app.get('/telcel',(req,res)=>{
    csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{

    // var compresion =[]
    var arreglo = []
    var numeroArr=[]
    for(i = 0; i <390; i++)
    {

        var arreglo = jsonObj[i].RADIOBASE
        numeroArr.push(jsonObj[i].RADIOBASE)

      
    }
    compresion=[jsonObj,numeroArr]
    //console.log(compresion)

     res.send(compresion)
})

})


app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
});