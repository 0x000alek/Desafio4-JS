import { cargarPropiedades } from './utility.js'
import { propiedadesVenta, propiedadesAlquiler } from './data/propiedades.js'

cargarPropiedades(propiedadesVenta.slice(0, -1), document.querySelector('#propiedades-venta'))
cargarPropiedades(propiedadesAlquiler.slice(0, -1), document.querySelector('#propiedades-alquiler'))