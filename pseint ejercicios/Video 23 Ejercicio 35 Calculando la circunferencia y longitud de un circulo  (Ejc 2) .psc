// Ejercicio 2: Hacer un rograma para ingrear el radio de un circulo y se 
// reporte su area y longitud de la circunferencia.
// area = pi * radio^2
// Longitud = 2 * pi * radio
Proceso Ejercicio2
	Definir radio,area,Lon Como real;
	Escribir "Digite el valor del radio: ";
	Leer radio;
	area <- pi * radio^2;
	lon <- 2 * pi * radio;
	Escribir "El area de la circunferencia es: ",area;
	Escribir "La longitud es: ",lon;
FinProceso
