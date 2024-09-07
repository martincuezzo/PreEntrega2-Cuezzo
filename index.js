// clase para crear los objetos
class ticket {
    constructor(sector, cantidad,) {
      this.sector = sector;
      this.cantidad = cantidad;
    }
  }

// array
const tickets = [];

// almacenar ticket en array
const almacenar = (sector, cantidad) => {
    tickets.push(new ticket(sector, cantidad));
  };

const general=90000
const vip=140000
const servicio=9000


let msj = prompt('Desea comprar un ticket?').toLowerCase()
switch (msj){
    case "si":
        // 👇 FUNCIONALIDAD PARA AGREGAR TICKETS
        while (msj == "si") {
            let sector = prompt('ingrese el sector: GENERAL - VIP').toLowerCase();
            let cantidad = Number(prompt("ingrese la cantidad de entradas requeridas:"));
            almacenar(sector, cantidad);
            msj = prompt('Desea seguir agregando tickets?').toLowerCase();
        }
        // Filtrar los tickets del sector "general"
        const generalTickets = tickets.filter(ticket => ticket.sector === "general");

        // Sumar las cantidades de los tickets filtrados
        const totalCantidadg = generalTickets.reduce((sum, ticket) => sum + ticket.cantidad, 0);

        //calculo de precio final de general
        const totalSectorGeneral=(totalCantidadg*general) +(totalCantidadg*servicio)


        // Filtrar los tickets del sector "vip"
        const vipTickets = tickets.filter(ticket => ticket.sector === "vip");

        // Sumar las cantidades de los tickets filtrados
        const totalCantidadv = vipTickets.reduce((sum, ticket) => sum + ticket.cantidad, 0);

        //calculo de precio final de vip
        const totalSectorVip=(totalCantidadv*vip) +(totalCantidadv*servicio)

        //total final de toda la compra
        const total=totalSectorGeneral+totalSectorVip;

        //alertas de precios finales, primero por sector y luego el total
        alert(`paga: $${totalSectorGeneral},por las entradas GENERALES`)
        alert(`paga: $${totalSectorVip}, por las entradas VIP`)
        alert(`el valor total de todo: $${total}, gracias por su compra!`)

        //Funcionalidad de buscar ticket por cantidad de entradas

        msj=prompt('Desea buscar un ticket por su cantidad?(se mostrara por consola').toLowerCase();
        if (msj =="si") {
            const valor=Number(prompt("ingrese la cantidad de entradas"));
            const ticketEspecifico = tickets.find(ticket => ticket.cantidad === valor);
            console.log(ticketEspecifico);
             
        }
        else{
            console.log("Búsqueda cancelada por el usuario.");
        }
}
