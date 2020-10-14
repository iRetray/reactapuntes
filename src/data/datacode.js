export const htmlComponent= `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />

    // Cargat React -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    //<--
    <title>Curso de React</title>
  </head>
  <body>

    <div id="root"></div>
    
    <script type="text/babel">

      const h1Tag=<h1> Hola Mundo </h1>

      const divRoot = docuement.querySelector("#root")
      ReactDOM.render(h1Tag,divRoot)


    </script>

  </body>
</html> `
 