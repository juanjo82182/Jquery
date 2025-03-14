# Jquery

## Descripción General
Este repositorio contiene dos proyectos desarrollados durante la carrera, utilizando jQuery para manipulación del DOM y dinámicas de interfaz de usuario.

## Contenido
1. [Ejercicio 1 - Tabla de Estudiantes](#ejercicio-1---tabla-de-estudiantes)
2. [Ejercicio 2 - Formulario de Registro](#ejercicio-2---formulario-de-registro)

## Ejercicio 1 - Tabla de Estudiantes
En este ejercicio, se inserta una tabla que muestra información de 5 estudiantes generados aleatoriamente. La tabla incluye los siguientes campos:
- Año de Nacimiento
- Edad
- Género (con una imagen correspondiente)
- Notas Aleatorias
- Promedio de Notas
- Imagen de Aprobado o Rechazado según el promedio

### Estructura de la Tabla
| Nombre       | Año de Nacimiento | Edad | Género      | Nota 1 | Nota 2 | Nota 3 | Promedio | Estado       |
|--------------|-------------------|------|-------------|--------|--------|--------|----------|--------------|
| Estudiante 1 | 1998              | 25   | Masculino ♀️  | 85     | 90     | 88     | 87.7     | Aprobado ✅   |
| Estudiante 2 | 2000              | 23   | Femenino ️♂️ | 70     | 65     | 80     | 71.7     | Rechazado ❌ |
| ...          | ...               | ...  | ...         | ...    | ...    | ...    | ...      | ...          |


# Formulario de Registro

## Descripción
En este ejercicio, se implementa un formulario que permite a los usuarios ingresar sus datos, los cuales se muestran en una tabla justo debajo del formulario. Los datos ingresados son:
- Nombre
- Apellido
- Fecha de Nacimiento

El formulario genera una tabla que muestra:
- Nombre 
- Edad
- Correo institucional (formato: inicial + apellido + año de nacimiento + `@elpoli.edu.co`)

## Estructura de la Tabla
| Nombre Completo     | Edad | Correo Institucional          |
|---------------------|------|-------------------------------|
| Juan Pérez          | 25   | jperez2000@elpoli.edu.co      |
| Ana Gómez           | 22   | agomez2002@elpoli.edu.co      |
| ...                 | ...  | ...                           |

