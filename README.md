# Signos Zodiacales

## HTML

### ID
Es un identificador unico para un elemento dentro del HTML. Se usa para dar formato a un elemento dentro del style sheet mientras que en JavaScript se utiliza para acceder y manipular el elemento con ese ID específico.

```
<!DOCTYPE html>
<html>
  <head>
    <style>
      #myHeader {
        background-color: lightblue;
        color: black;
        padding: 40px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1 id="myHeader">My Header</h1>
  </body>
</html>
```

### CLASS
Similar al ID, la diferencia con el ID es que múltiples elementos pueden compartir la misma clase.
```
<!DOCTYPE html>
<html>
  <head>
    <style>
      .city {
        background-color: tomato;
        color: white;
        border: 2px solid black;
        margin: 20px;
        padding: 20px;
      }
    </style>
  < /head>
  <body>
    <div class="city">
      <h2>London</h2>
      <p>London is the capital of England.</p>
    </div>
    <div class="city">
      <h2>Paris</h2>
      <p>Paris is the capital of France.</p>
    </div>
    <div class="city">
      <h2>Tokyo</h2>
      <p>Tokyo is the capital of Japan.</p>
    </div>
  </body>
</html>
```
Como se puede observar, los div comparten la clase "city", por lo que estos elementos tendrán el mismo estilo

## JavaScript

### if
La palabra reservada *if* permite al programa tomar "decisiciones" en base a las condiciones. Las sintaxis es la siguiente:
```
if(<condicion>){
  // código
}
```
El funcionamiento se basa en la idea de *verdadero* y *falso*, donde si se cumple la condición se obtiene un resultado con valor lógico verdadero o *True* y se ejecutan las líneas que estén dentro de este código, mientras que si es falso o *False*, se saltarán dicho bloque de código.
