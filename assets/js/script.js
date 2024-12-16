import { propiedadesVenta, propiedadesAlquiler } from './data/propiedades.js'

const propiedadesVentaContainer = document.querySelector('#propiedades-venta')
const propiedadesAlquilerContainer = document.querySelector('#propiedades-alquiler')

const noFumarMessage = `<p class="text-danger">
                            <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>`
const siFumarMessage = `<p class="text-success">
                            <i class="fas fa-smoking"></i> Permitido fumar
                        </p>`
const noMascotasMessage = `<p class="text-danger">
                            <i class="fa-solid fa-ban"></i> No se permiten mascotas
                        </p>`
const siMascotasMessage = `<p class="text-success">
                            <i class="fas fa-paw"></i> Mascotas permitidas
                        </p>`

const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(valor)
}

const cargarPropiedades = (propiedades, container) => {
    propiedades.forEach(e => {
        let cardElement = document.createElement('div')
        let cardContent = `
            <div class="card">
              <img
                src="` + `${e.src}` + `"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">` +
                  `${e.nombre}` +
                `</h5>
                <p class="card-text">` + 
                  `${e.descripcion}` +
                `</p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>` + ` ${e.ubicacion}` +
                `</p>
                <p>
                  <i class="fas fa-bed"></i>` + ` ${e.habitaciones}` + ` Habitaciones |
                  <i class="fas fa-bath"></i>` + ` ${e.baños}` + ` Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>` + ` ${formatearPrecio(e.costo).slice(1)}` + `</p>` +
                `${e.smoke ? siFumarMessage : noFumarMessage}` + 
                `${e.pets ? siMascotasMessage : noMascotasMessage}` + 
              `</div>
            </div>`

        cardElement.classList.add('col-md-4')
        cardElement.classList.add('mb-4')
        cardElement.innerHTML = cardContent

        container.appendChild(cardElement)
    })
}

cargarPropiedades(propiedadesVenta.slice(0, -1), propiedadesVentaContainer)
cargarPropiedades(propiedadesAlquiler.slice(0, -1), propiedadesAlquilerContainer)