// Establecer la fecha de destino (1 de julio del 2023 a las 00:00)
const countDownDate = new Date("Jul 1, 2023 00:00:00").getTime();

// Actualizar el contador cada segundo
const x = setInterval(function() {

  // Obtener la fecha y hora actuales
  const now = new Date().getTime();

  // Calcular la diferencia entre la fecha de destino y la fecha actual
  const distance = countDownDate - now;

  // Calculando días, horas, minutos y segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el resultado en un elemento con ID "countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Si la cuenta regresiva ha terminado, mostrar el mensaje "¡Llegó el día!"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "¡Llegó el día!";
  }
}, 1000);
