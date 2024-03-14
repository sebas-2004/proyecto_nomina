const readlineSync = require('readline-sync');


var cantHijosempleado = 0;
var Estrato = "";
var Esextranjero = "";
var EsDelSectorRural = "";
var SalarioDelEmpleado = 0;
var NivelAcademicohijo = "";
let CantidadEmpleados = 0;
var PrecioVuelo = 70000;
let HombreoMujer = "";
let ValorX = 0;
let ValorZ = 0;
let ValorY = 0;
var TotalNomina = 0;
var NominaH = 0;
var NominaM = 0;
var empleadoMasCostoso = { salario: 0 };
var SubsidioHijosSecundaria = 0;
var pasajesEmpleadoEstranjero = 0;

CantidadEmpleados = +readlineSync.question("Ingrese la cantidad de empleados: ");
ValorX = +readlineSync.question("Ingrese el valor X: ");
ValorZ = +readlineSync.question("Ingrese el valor Z: ");
ValorY = +readlineSync.question("Ingrese el valor Y: ");

for (let i = 1; i <= CantidadEmpleados; i++) {
    HombreoMujer = readlineSync.question(`El empleado ${i} es m/f: `);
    SalarioDelEmpleado = +readlineSync.question(`Salario del empleado ${i}: `);
    Estrato = readlineSync.question(`Cual es el estrato del empleado ${i} (1, 2 o 3): `);
    cantHijosempleado = +readlineSync.question(`Cuantos hijos tiene el empleado ${i}: `);
    Esextranjero = readlineSync.question(`El empleado ${i} es extranjero (si o no): `);
    EsDelSectorRural = readlineSync.question(`El empleado ${i} es del sector rural (si o no): `);

    if (Estrato === "1") {
        SalarioDelEmpleado += SalarioDelEmpleado * 0.15;
    } else if (Estrato === "2") {
        SalarioDelEmpleado += SalarioDelEmpleado * 0.10;
    } else if (Estrato === "3") {
        SalarioDelEmpleado += SalarioDelEmpleado * 0.05;
    }

    if (EsDelSectorRural === "si") {
        SalarioDelEmpleado += 35000;
    }

    if (Esextranjero === "si") {
        SalarioDelEmpleado += PrecioVuelo * 2;
        pasajesEmpleadoEstranjero += PrecioVuelo * 2;
    }

    if (cantHijosempleado > 0) {
        for (let i = 1; i <= cantHijosempleado; i++) {
            NivelAcademicohijo = readlineSync.question(`Cual es el nivel academico del hijo ${j} (primaria, secundaria o universidad): `);
            if (NivelAcademicohijo === "primaria") {
                SalarioDelEmpleado += ValorX;
            } else if (NivelAcademicohijo === "secundaria") {
                SalarioDelEmpleado += ValorZ;
                SubsidioHijosSecundaria += ValorZ; // Sumar el subsidio para hijos en secundaria
            } else if (NivelAcademicohijo === "universidad") {
                SalarioDelEmpleado += ValorY;
            }
        }
    }

    TotalNomina += SalarioDelEmpleado;
    if (HombreoMujer === "m") {
        NominaH += SalarioDelEmpleado;
    } else {
        NominaM += SalarioDelEmpleado;
    }

    if (SalarioDelEmpleado > empleadoMasCostoso.salario) {
        empleadoMasCostoso = { id: i, salario: SalarioDelEmpleado };
    }
}

console.log(`El costo total de la nomina es: ${TotalNomina}`);
console.log(`El costo de la nomina de los hombres es: ${NominaH}`);
console.log(`El costo de la nomina de las mujeres es: ${NominaM}`);
console.log(`El empleado que mas dinero cuesta es el empleado ${empleadoMasCostoso.id} con un salario de ${empleadoMasCostoso.salario}`);
console.log(`El total de subsidios para hijos en secundaria es: ${SubsidioHijosSecundaria}`);
console.log(`El total gastado en pasajes para empleados extranjeros es: ${pasajesEmpleadoEstranjero}`);


