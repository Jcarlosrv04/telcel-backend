const csvFilePath='./Radiobases.csv'
const csv=require('csvtojson')


csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    var traficoArr = []
    var fechaArr1 = []
    var fechaArr1 = []
    var fechaArr1 = []
    var fechaArr1 = []
    var fechaArr1 = []
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
    console.log(traficoArr)

    // console.log(jsonObj[i].TRAFICO)
}})

