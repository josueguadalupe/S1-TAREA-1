// Ejercicio 3: Un maestro desea saber que porcentaje de hombre y que
// porcentaje de mujeres hay en un grupo de estudiantes
Proceso ejercicio3
	Definir num_hombres,num_mujeres Como Entero;
	Definir Total_estudiantes Como Entero;
	Definir porcentajeH,PorcentajeM Como Real;
	Escribir 'Digite el numero de hombres: ';
	Leer num_hombres;
	Escribir 'Digite el numero de mujeres: ';
	Leer num_mujeres;
	Total_estudiantes <- num_hombres+num_mujeres;
	porcentajeH <- num_hombres/Total_estudiantes*100;
	PorcentajeM <- num_mujeres/Total_estudiantes*100;
	Escribir 'EL porcentaje es: ',porcentajeH,'%';
	Escribir 'El porcentaje es: ',PorcentajeM,'%';
FinProceso
