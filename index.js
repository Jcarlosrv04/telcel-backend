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
    var fechas= []
    var fechaArr1 = []
    var fechaArr2 = []
    var fechaArr3 = []
    var fechaArr4 = []
    var fechaArr5 = []
    var numeroArr = []
    var regionArr = []
    // console.log(jsonObj)

for(i = 0; i < jsonObj.length; i++){
    // console.log(jsonObj[i].TRAFICO)
    // var radiobases = jsonObj[i].RADIOBASE
    fechas.push(jsonObj[i].FECHA)
    
    // fechaArr.push(jsonObj[i].FECHA)
    
    numeroArr.push(jsonObj[i].RADIOBASE)
    regionArr.push(jsonObj[i].REGION)
    // console.log(jsonObj[i].TRAFICO)
}


for(x=0;  x < jsonObj.length; x ++){
    if(fechas[x] === "2019-08-05" )
    fechaArr1.push(fechas[x])
    // console.log(fechas[x])
}
for(z=0;  z < jsonObj.length; z ++){
    if(fechas[z] === "2019-08-06" )
    fechaArr2.push(fechas[z])
    // console.log(fechas[z])
}
for(y=0;  y < jsonObj.length; y ++){
    if(fechas[y] === "2019-08-07" )
    fechaArr3.push(fechas[y])

    // console.log(fechas[y])
}
for(a=0;  a < jsonObj.length; a ++){
    if(fechas[a] === "2019-08-08" )
    fechaArr4.push(fechas[a])

    // console.log(fechas[a])
}
for(b=0;  b < jsonObj.length; b ++){
    if(fechas[b] === "2019-08-09" )
    fechaArr5.push(fechas[b])

    // console.log(fechas[b])
}

console.log(fechaArr1, fechaArr2)

var compresionFechas = [fechaArr1, fechaArr2, fechaArr3, fechaArr4, fechaArr5]
var compresion = [traficoArr , compresionFechas , numeroArr , regionArr]

// console.log(fechaArr1)

// console.log(fechaArr)
res.send(compresion)

})
});

app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
});