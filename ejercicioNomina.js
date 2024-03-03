const readlineSync = require('readline-sync');


// se declaran las variables 

var cantHijosempleado = 0;                     // cuantos hijos tiene el empleado
var Estrato;                                   // estrato del empleado
var Esextranjero = "";                              // si es extranjero o no 
var EsDelSectorRural = "";                          // si es del sector rural o no 
var SalarioDelEmpleado = 0;                    // salario del empleado
var NivelAcademicohijo = "";                        // nivel academico del hijo
let CantidadEmpleados = 0;                     // cantidad de empleados
var PrecioVuelo = 70000;                           // precio del vuelo
var HoM;                                       // si es hombre o mujer 
let ValorX = 0;                                // valor x
let ValorZ = 0;                                // valor z
let ValorY = 0;                                // valor y
var TotalNomina = 0;                           // total nomina 
var NominaH = 0;                               // nomina hombre
var NominaM = 0;                               // nomina mujer
var empleadoMasCostoso = 0;                        // empleado mas costoso
var SubsidioHijosSecundaria = 0;                  // subisidios para los hijos en secundaria
var pasajesEmpleadoEstranjero = 0;             // pasajes para los empleados extranjeros


CantidadEmpleados = +readlineSync.question("ingrese la cantidad de empleados:"); 
ValorX = +readlineSync.question("ingrese el valor X : ")
ValorZ = +readlineSync.question("ingrese el valor Z :")
ValorY = +readlineSync.question("ingrese el valor Y :")

for (let i = 1; i <= CantidadEmpleados; i++) {
    HoM = +readlineSync.question(`el empleado  ${i} es hombre o mujer : `);
    SalarioDelEmpleado = +readlineSync.question(`salario del empleado ${i}  : `);
    Estrato = +readlineSync.question(` cual es el estrato del empleado  ${i} es estrato 1, 2 o 3  : `);
    cantHijosempleado = +readlineSync.question(` cuantos hijos tiene el empleado ${i}  : `);
    Esextranjero = +readlineSync.question(` el empleado ${i} es extranjero si o no: `);
    EsDelSectorRural = +readlineSync.question(` el empleado ${i} es del sector rural si o no: `);


    if(Estrato == "1" ){
        SalarioDelEmpleado = (SalarioDelEmpleado * 0.15) + SalarioDelEmpleado
    }
    else if (Estrato == "2") {
        SalarioDelEmpleado = (SalarioDelEmpleado * 0.10) + SalarioDelEmpleado
    }
    else if (Estrato == "3") {
        SalarioDelEmpleado = (SalarioDelEmpleado * 0.05) + SalarioDelEmpleado
    }

    if(EsDelSectorRural == "si"){
        SalarioDelEmpleado = (SalarioDelEmpleado + 35000) 
    }

    if(Esextranjero == "si"){
        SalarioDelEmpleado += PrecioVuelo * 2;
        pasajesEmpleadoEstranjero += PrecioVuelo * 2;
    } 


    if(cantHijosempleado > 0){
        for (let i = 1; i <= cantHijosempleado; i++) {
            NivelAcademicohijo = +readlineSync.question("cual es el nivel academico de su hijo primaria, secundaria o universidad  :")
            if(NivelAcademicohijo = "primaria"){
                SalarioDelEmpleado = SalarioDelEmpleado + ValorX
            }
            else if(NivelAcademicohijo = "secundaria"){
                SalarioDelEmpleado = SalarioDelEmpleado + ValorZ

                SubsidioHijosSecundaria = SubsidioHijosSecundaria + ValorZ
            }
            else if(NivelAcademicohijo = "universidad"){
                SalarioDelEmpleado = SalarioDelEmpleado + ValorY
            } 
        
        
        }
    }

    TotalNomina = TotalNomina + SalarioDelEmpleado;
    if(HoM = "hombre"){
        NominaH = NominaH + SalarioDelEmpleado;
    } else if(HoM = "mujer"){
        NominaM = NominaM + SalarioDelEmpleado;
    }

    if(!empleadoMasCostoso || SalarioDelEmpleado > empleadoMasCostoso.salario){
        empleadoMasCostoso = {id: i, salario: SalarioDelEmpleado};
    }
    
}


console.log(`El costo total de la nomina es: ${TotalNomina}`);
console.log(`El costo de la nomina de los hombres es: ${NominaH}`);
console.log(`El costo de la nomina de las mujeres es: ${NominaM}`);
console.log(`El empleado que mas dinero cuesta es el empleado ${empleadoMasCostoso.id} con un salario de ${empleadoMasCostoso.salario}`);
console.log(`El total de subsidios para hijos en secundaria es: ${SubsidioHijosSecundaria}`);
console.log(`El total gastado en pasajes para empleados extranjeros es: ${pasajesEmpleadoEstranjero}`);


