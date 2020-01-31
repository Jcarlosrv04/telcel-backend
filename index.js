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






const PORT = process.env.PORT || 4001;


app.get('/telcel',(req,res)=>{
    csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    var trafico1= []
    var trafico2= []
    var trafico3= []
    var trafico4= []
    var trafico5= []
    var trafico6= []
    var trafico7= []
    var trafico8= []
    var trafico9= [] 
    var trafico10= []
    var fechas = []


    for(i = 0; i < jsonObj.length; i++){
        // console.log(jsonObj[i].TRAFICO)
        // var radiobases = jsonObj[i].RADIOBASE
        fechas.push(jsonObj[i].FECHA)
        
        // fechaArr.push(jsonObj[i].FECHA)
        // regionArr.push(jsonObj[i].REGION)
        // console.log(jsonObj[i].TRAFICO)
    }
    
    for(x=0; x < jsonObj.length; x++){
        if(fechas[x] === "2019-08-05"  )
        trafico1.push(jsonObj[x].TRAFICO)
    }
    for(a=0; a < jsonObj.length; a++){
        if(fechas[a] === "2019-08-06"  )
        trafico2.push(jsonObj[a].TRAFICO)
    }
    /*   ----10 dias----
    for(a=0; a < jsonObj.length; a++){
        if(fechas[a] === "2019-08-06"  )
        trafico3.push(jsonObj[a].TRAFICO)
    }
    for(a=0; a < jsonObj.length; a++){
        if(fechas[a] === "2019-08-06"  )
        trafico4.push(jsonObj[a].TRAFICO)
    }
    for(a=0; a < jsonObj.length; a++){
        if(fechas[a] === "2019-08-06"  )
        trafico5.push(jsonObj[a].TRAFICO)
    }
    for(a=0; a < jsonObj.length; a++){
        if(fechas[a] === "2019-08-06"  )
        trafico6.push(jsonObj[a].TRAFICO)
    }
    for(a=0; a < jsonObj.length; a++){
        if(fechas[a] === "2019-08-06"  )
        trafico7.push(jsonObj[a].TRAFICO)
    }
    for(a=0; a < jsonObj.length; a++){
        if(fechas[a] === "2019-08-06"  )
        trafico8.push(jsonObj[a].TRAFICO)
    }
    for(a=0; a < jsonObj.length; a++){
        if(fechas[a] === "2019-08-06"  )
        trafico9.push(jsonObj[a].TRAFICO)
    }
    for(a=0; a < jsonObj.length; a++){
        if(fechas[a] === "2019-08-06"  )
        trafico10.push(jsonObj[a].TRAFICO)
    }*/



    console.log(trafico1,'//////' , trafico2)

    var compresionTrafico= [trafico1, trafico2]
    var superCompresion = [jsonObj, compresionTrafico]

    res.send(jsonObj)

})
})

app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
});