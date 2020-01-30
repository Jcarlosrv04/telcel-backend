const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();

/* 
5d9fd25d239485333f62158a
5d9fd2d577f77a350a49c5e6
5d9fd31e7a4457356efb018d
*/

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const csvFilePath='./Radiobases.csv'
const csv=require('csvtojson')






const PORT = process.env.PORT || 4000;


app.get('/telcel',(req,res)=>{
    csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    var traficoArr = []
    var fechaArr = []
    var numeroArr = []
    var regionArr = []
    console.log(jsonObj)

for(i = 0; i < jsonObj.length; i++){
    // console.log(jsonObj[i].TRAFICO)
    // var radiobases = jsonObj[i].RADIOBASE
    traficoArr.push(jsonObj[i].TRAFICO)
    fechaArr.push(jsonObj[i].FECHA)
    numeroArr.push(jsonObj[i].RADIOBASE)
    regionArr.push(jsonObj[i].REGION)
    var compresion = [traficoArr , fechaArr , numeroArr , regionArr]
    // console.log(jsonObj[i].TRAFICO)
}
console.log(traficoArr)
res.send(compresion)

})
});

app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
});