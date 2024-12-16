import { cargarPropiedades } from './utility.js'
import { propiedadesVenta } from './data/propiedades.js'

cargarPropiedades(propiedadesVenta, document.querySelector('#propiedades-venta'))

