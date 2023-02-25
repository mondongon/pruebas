function calculateTransferTime() {
	var fileSize = parseFloat(document.getElementById("filesize").value);
	var transferRate = parseFloat(document.getElementById("transferRate").value);
	
	var fileSizeMB = fileSize / 8; // Convertir el tamaño del archivo a megabytes
	var transferRateMbps = transferRate / 8; // Convertir la tasa de transferencia a megabits por segundo
	var transferTimeSeconds = fileSizeMB / transferRateMbps; // Calcular el tiempo de transferencia en segundos
	var transferTimeMinutes = transferTimeSeconds / 60; // Convertir el tiempo de transferencia a minutos
	
	// Mostrar el resultado en la página HTML
	document.getElementById("transferTime").innerHTML = transferTimeMinutes.toFixed(2) + " minutos";
  }
  