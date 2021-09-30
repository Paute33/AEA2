require("colors");
const argv = require("./config/yargs.js").argv;

const { llistarTaula } = require("./helpers/multiplica");
const { crearFitxer } = require("./helpers/multiplica");

console.clear();
//console.log(argv);

let param = argv._[0];

switch (param) {
  case "llistar":
    llistarTaula(argv.b, argv.l);
    break;
  case "crear":
    crearFitxer(argv.b, argv.l);
    break;
  default:
    console.log("comanda no reconeguda");
}