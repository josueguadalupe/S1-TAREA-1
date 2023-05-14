//Ejercicio 1: Calcular la cantidad de segundos que estan incluidos en el

//numero de horas, minutos y segundos ingresados por el usuario.

Proceso Ejercicio1
	
	Definir Horas, minutos, seg Como Entero;
	Definir horas_seg,minutos_seg, total_seg Como Entero;
	
	Escribir "Digite las horas: ";
	
	leer horas;
	
	Escribir "Digite los minutos: ";
	
	Leer minutos;
	
	Escribir "Digite los seg: ";
	
	Leer seg;
	
	Horas_seg <- horas * 3600;
	
	minutos_seg <- minutos * 60;
	
	Total_seg <- horas_seg + minutos_seg + seg;
	
	Escribir "Los segundos equivalentes son: ", total_seg; 
	
FinProceso
