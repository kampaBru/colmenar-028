<div align="center">

<img src="./src/assets/img/header/logo-tran.png" alt="Colmenar 028" width="190">

# Colmenar 028

### Diseño y desarrollo frontend para un proyecto real de apicultura responsable

Proyecto diseñado desde cero en Figma, desarrollado inicialmente con HTML y CSS y posteriormente migrado y refactorizado en React.

**React · Vite · React Router · CSS · Responsive Design · GitHub Actions**

[🌐 Ver proyecto online](https://kampabru.github.io/colmenar-028/)  
[🎨 Ver diseño en Figma](https://www.figma.com/design/AusPn974eZWVwY4I61oi7P/Colmenar-028?node-id=0-1&t=BhoypjPAHFNpJStr-1)

</div>

---

## 🐝 Sobre Colmenar 028

**Colmenar 028** es un proyecto real vinculado a una iniciativa de apicultura responsable en La Alcarria.

La web nace con el objetivo de construir una presencia digital coherente con su identidad: una imagen artesanal, natural y contemporánea, centrada en el paisaje, las abejas, la sostenibilidad y el trabajo realizado alrededor de la colmena.

El proyecto se ha desarrollado desde cero, tanto en la parte de diseño como en la implementación frontend.

Además de resolver una necesidad real, Colmenar 028 se convirtió en un proyecto especialmente importante dentro de mi evolución como desarrolladora, ya que me permitió recorrer distintas etapas de desarrollo sobre una misma base y comprobar cómo cambia la arquitectura de una aplicación a medida que crece.

---

## 🚀 Evolución del proyecto

Colmenar 028 no nació directamente como una aplicación React.

El proceso fue progresivo:

```text
Idea y necesidades del proyecto
        ↓
Identidad visual
        ↓
Diseño en Figma
        ↓
Primera versión HTML + CSS
        ↓
Responsive Design
        ↓
Detección de código repetido
        ↓
Migración a React
        ↓
Componentización
        ↓
Separación de datos e interfaz
        ↓
Refactorización
        ↓
Gestión de assets con Vite
        ↓
Build de producción
        ↓
GitHub Actions
        ↓
GitHub Pages
```

Trabajar de esta manera me permitió entender no solo cómo construir una web, sino también **por qué una solución que funciona inicialmente puede necesitar evolucionar cuando el proyecto crece**.

---

# 🎨 Diseño desde cero en Figma

Antes de empezar a programar desarrollé la interfaz en **Figma**.

[Ver diseño en Figma](https://www.figma.com/design/AusPn974eZWVwY4I61oi7P/Colmenar-028?node-id=0-1&t=BhoypjPAHFNpJStr-1)

El objetivo era transmitir el carácter natural y artesanal del proyecto sin caer en una estética excesivamente tradicional.

Para ello trabajé:

- identidad visual;
- paleta de colores;
- tipografía;
- jerarquía de contenidos;
- composición;
- navegación;
- fotografía;
- iconografía;
- elementos gráficos decorativos;
- versiones responsive.

La paleta está inspirada en tonos vinculados al propio entorno:

- miel;
- tierra;
- madera;
- vegetación;
- tonos naturales claros.

También trabajé el contraste entre una tipografía serif de carácter más editorial y una sans serif más limpia para el contenido.

El diseño en Figma fue el punto de partida, pero trasladarlo al navegador implicó resolver problemas que no existen en un diseño estático:

- diferentes anchuras de pantalla;
- comportamiento entre breakpoints;
- textos con longitud variable;
- elementos reutilizables;
- contenido dinámico;
- imágenes responsive;
- alineaciones;
- composición en móvil, tablet y desktop.

---

# 💻 Primera versión: HTML y CSS

La primera implementación funcional de Colmenar 028 fue desarrollada utilizando **HTML y CSS**.

En esta fase me centré principalmente en trasladar el diseño de Figma al navegador.

Trabajé especialmente:

- HTML semántico;
- Flexbox;
- CSS Grid;
- variables CSS;
- tipografía;
- espaciado;
- imágenes;
- media queries;
- responsive design;
- organización de estilos;
- componentes visuales repetidos.

Esta versión funcionaba correctamente, pero a medida que aparecieron nuevas páginas empecé a detectar un problema.

Había estructuras que se repetían constantemente:

- tarjetas;
- bloques informativos;
- navegación;
- elementos de producto;
- cabeceras;
- grids;
- secciones con icono, título y descripción.

Mantener estas estructuras de forma independiente significaba duplicar código.

Ese fue uno de los principales motivos por los que decidí migrar el proyecto a React.

---

# ⚛️ Migración a React

La migración no consistió en rehacer el proyecto desde cero.

Utilicé la primera implementación como base y fui transformando progresivamente su arquitectura.

Uno de los principales aprendizajes fue empezar a distinguir entre:

- una página;
- un componente;
- un dato;
- una estructura reutilizable;
- un estilo global;
- un estilo específico.

A partir de ahí fueron apareciendo componentes reutilizables como:

```text
Header
Footer
Hero
InfoCard
InfoGrid
ProductCard
ProductGrid
CollectionPreview
OriginPreview
```

Esto permitió reducir código repetido y organizar mejor la aplicación.

---

# 🧩 Componentización

Uno de los ejemplos más claros fue `InfoGrid`.

En distintas páginas necesitaba mostrar conjuntos de información con una estructura similar:

```text
icono
título
texto
```

En lugar de crear un bloque diferente para cada sección, desarrollé un único componente capaz de recibir diferentes datos.

```jsx
<InfoGrid
  items={collectionFeatures}
  columns={2}
/>
```

El mismo componente puede utilizarse posteriormente con otra información:

```jsx
<InfoGrid
  items={productBenefits}
  columns={4}
/>
```

De esta manera, el componente se ocupa de la **presentación**, mientras que los datos se encuentran fuera de él.

---

# 🗂️ Separación entre datos e interfaz

Otra de las mejoras importantes durante la migración fue separar parte del contenido de los componentes.

Por ejemplo:

```js
const collectionFeatures = [
  {
    id: "origen",
    icon: iconFlor,
    title: "Origen natural",
    text: "Cosechas ligadas a la floración de cada temporada."
  },
  {
    id: "artesanal",
    icon: iconAbeja,
    title: "Artesanal",
    text: "Elaboración propia, con respeto por el trabajo de las abejas."
  }
];
```

Los datos pueden almacenarse independientemente y después pasar al componente mediante `props`.

```text
data
 ↓
props
 ↓
component
 ↓
interface
```

Este proceso fue especialmente útil para afianzar conceptos de React relacionados con:

- arrays;
- objetos;
- `map()`;
- props;
- reutilización;
- renderizado dinámico.

---

# 🧭 Navegación con React Router

La aplicación utiliza **React Router** para gestionar las distintas vistas.

Actualmente incluye:

```text
/
├── /origen
├── /coleccion
├── /contacto
└── /product
```

El proyecto está publicado dentro de un subdirectorio de GitHub Pages:

```text
/colmenar-028/
```

Por ese motivo fue necesario coordinar la configuración de Vite con React Router.

En `vite.config.js`:

```js
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/colmenar-028/",
});
```

Y en React:

```jsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
  <App />
</BrowserRouter>
```

Esto permitió mantener correctamente las rutas tanto en desarrollo como en producción.

---

# 📱 Responsive Design

El proyecto está desarrollado para diferentes tamaños de pantalla:

- móvil;
- tablet;
- desktop;
- desktop de gran formato.

El responsive no se ha planteado simplemente como una reducción proporcional del diseño.

Dependiendo del espacio disponible cambian:

- número de columnas;
- distribución de tarjetas;
- anchuras;
- navegación;
- tamaños tipográficos;
- separación entre elementos;
- posición de ilustraciones;
- estructura de determinadas secciones;
- organización del footer.

Uno de los retos fue mantener la personalidad del diseño de Figma sin depender únicamente de posiciones rígidas.

---

# 🖼️ Gestión de imágenes y assets con Vite

Uno de los problemas más importantes apareció al preparar el proyecto para producción.

La primera estructura utilizaba imágenes dentro de `public` con rutas como:

```jsx
<img src="/img/miel-romero.webp" />
```

o:

```css
background-image: url("/img/svg/flor_lineal.svg");
```

Estas rutas podían funcionar localmente, pero comenzaron a dar problemas al publicar la aplicación dentro del subdirectorio utilizado por GitHub Pages.

La solución fue reorganizar los recursos dentro de:

```text
src/assets/
├── icons/
├── img/
└── svg/
```

En JSX, los assets se importan:

```js
import mielRomero from "../assets/img/products/miel-romero.webp";
```

y se utilizan posteriormente:

```jsx
<img
  src={mielRomero}
  alt="Tarro de miel de romero"
/>
```

En CSS utilizo rutas relativas:

```css
background-image: url("../assets/svg/flor_lineal.svg");
```

De esta manera Vite puede procesar y resolver correctamente los recursos durante el build.

---

# 🐛 Problemas encontrados y cómo los solucioné

Una parte importante de este proyecto no ha sido únicamente implementar funcionalidades, sino aprender a **detectar, entender y corregir errores reales**.

## 1. Rutas de imágenes que funcionaban en local pero no en producción

### Problema

Varias imágenes e iconos dejaron de mostrarse al cambiar la configuración del proyecto y preparar el despliegue.

### Causa

Había recursos que todavía utilizaban rutas absolutas dependientes de la antigua carpeta `public`.

```jsx
src="/img/miel-romero.webp"
```

### Solución

Reorganicé los assets dentro de `src/assets` y dejé que Vite gestionara sus rutas mediante imports.

```js
import mielRomero from "../assets/img/products/miel-romero.webp";
```

---

## 2. Confundir una variable con un objeto

Durante la migración de imágenes cometí inicialmente este error:

```js
image: { mielRomero }
```

Al hacerlo estaba creando un objeto:

```js
{
  mielRomero: "ruta..."
}
```

cuando el componente necesitaba recibir directamente la URL de la imagen.

La forma correcta era:

```js
image: mielRomero
```

Este error me ayudó a entender mejor una diferencia fundamental entre JavaScript y JSX.

Las llaves:

```jsx
src={mielRomero}
```

se utilizan dentro de JSX para insertar JavaScript.

Pero dentro de un objeto JavaScript:

```js
image: mielRomero
```

la variable se utiliza directamente.

---

## 3. Imports duplicados

Durante la reorganización de los iconos llegué a declarar dos recursos utilizando el mismo identificador.

```js
import iconFlor from "...";
import iconFlor from "...";
```

JavaScript no permite declarar dos veces el mismo nombre dentro del mismo módulo.

La solución fue utilizar identificadores únicos y descriptivos para cada recurso.

Aunque varios archivos puedan importar el mismo SVG, cada módulo mantiene su propio ámbito.

---

## 4. Entender dónde debe importarse un recurso

Durante la refactorización también apareció otra duda importante.

Si un icono ya estaba importado en una página, ¿por qué había que volver a importarlo en un archivo de datos?

La razón es que cada archivo JavaScript funciona como un **módulo independiente**.

Un import realizado dentro de:

```text
Origen.jsx
```

no existe automáticamente dentro de:

```text
originImpact.js
```

Cada módulo debe declarar sus propias dependencias.

Esto me permitió entender mejor el sistema de módulos de JavaScript.

---

## 5. React Router y el subdirectorio de GitHub Pages

La aplicación funciona en:

```text
https://kampabru.github.io/colmenar-028/
```

y no directamente desde:

```text
https://kampabru.github.io/
```

Inicialmente esto provocó problemas con determinadas rutas.

La solución consistió en utilizar la misma base en Vite y React Router:

```jsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
```

---

## 6. Estilos globales que afectaban a páginas concretas

Durante el desarrollo detecté que algunas reglas globales estaban modificando elementos de páginas específicas.

Un ejemplo fue el separador utilizado en los hero.

La regla global centraba el elemento, mientras que en Collection debía permanecer alineado a la izquierda.

En lugar de modificar el componente completo, utilicé una regla contextual:

```css
.collection-hero .hero__separator {
  margin-left: 0;
  margin-right: 0;
}
```

De esta forma pude mantener el estilo reutilizable y modificar únicamente el comportamiento necesario en esa sección.

---

## 7. Reutilización frente a duplicación

Otro reto fue decidir cuándo crear un nuevo componente y cuándo reutilizar uno existente.

Por ejemplo, `InfoGrid` debía funcionar:

- con dos columnas;
- con cuatro columnas;
- con distintos contenidos;
- en diferentes páginas;
- en diferentes tamaños de pantalla.

En lugar de crear un componente distinto para cada caso, utilicé props y estilos contextuales.

Esto hizo el código más reutilizable y más fácil de mantener.

---

## 8. Organización de los assets

Durante la migración también fui refinando la propia estructura de recursos.

Finalmente los organicé por función:

```text
assets/
├── icons/
├── svg/
└── img/
    ├── contacto/
    ├── footer/
    ├── header/
    ├── hero/
    ├── origen/
    └── products/
```

Esta estructura facilita localizar cada recurso y entender dónde se utiliza.

---

## 9. Build antes del despliegue

Antes de realizar el despliegue final incorporé una comprobación sencilla pero importante al flujo de trabajo:

```bash
npm run build
```

Esto permite comprobar que Vite puede generar correctamente la versión de producción antes de subir los cambios.

También utilicé búsquedas en el proyecto para localizar referencias antiguas a `public`:

```bash
grep -R 'src="/img\|src="/icons\|url("/img\|url("/icons' src
```

Esto me permitió detectar recursos que todavía no habían sido migrados.

---

# 🏗️ Arquitectura del proyecto

La estructura actual separa páginas, componentes, datos y recursos:

```text
src/
├── assets/
│   ├── icons/
│   ├── img/
│   │   ├── contacto/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── origen/
│   │   └── products/
│   └── svg/
│
├── components/
│   ├── CollectionPreview.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── InfoCard.jsx
│   ├── InfoGrid.jsx
│   ├── Manifiesto.jsx
│   ├── OriginPreview.jsx
│   ├── ProductCard.jsx
│   └── ProductGrid.jsx
│
├── data/
│   ├── collectionFeatures.js
│   ├── originImpact.js
│   ├── originProcess.js
│   ├── productBenefits.js
│   └── products.js
│
├── pages/
│   ├── Collection.jsx
│   ├── Contacto.jsx
│   ├── Origen.jsx
│   └── Product.jsx
│
├── App.jsx
└── main.jsx
```

---

# 🛠️ Tecnologías utilizadas

## Diseño

- Figma
- diseño responsive
- sistema visual
- composición
- prototipado

## Frontend

- HTML5
- CSS3
- JavaScript
- React
- React Router
- Vite
- Tailwind CSS

## Control de versiones y despliegue

- Git
- GitHub
- GitHub Actions
- GitHub Pages

## Entorno de trabajo

- VS Code
- Debian / Linux

---

# 🌐 Despliegue

La aplicación se publica mediante **GitHub Pages**.

[Ver Colmenar 028](https://kampabru.github.io/colmenar-028/)

El proceso de despliegue está automatizado mediante **GitHub Actions**.

Cada actualización del proyecto sigue aproximadamente este flujo:

```text
código
 ↓
git commit
 ↓
git push
 ↓
GitHub Actions
 ↓
npm install
 ↓
npm run build
 ↓
dist/
 ↓
GitHub Pages
```

Esto me permitió trabajar también con un flujo más cercano al que se utiliza en proyectos reales.

---

# ⚙️ Instalación local

Clonar el repositorio:

```bash
git clone git@github.com:kampaBru/colmenar-028.git
```

Entrar en el proyecto:

```bash
cd colmenar-028
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Crear la versión de producción:

```bash
npm run build
```

---

# 📚 Qué he aprendido

Colmenar 028 ha sido especialmente importante porque me ha permitido ver la evolución de un proyecto desde distintos puntos de vista.

He trabajado y reforzado especialmente:

- transformar un diseño de Figma en una interfaz real;
- diseñar responsive desde distintos breakpoints;
- organizar CSS;
- detectar código repetido;
- decidir cuándo crear un componente;
- trabajar con props;
- renderizar arrays mediante `map()`;
- separar datos y presentación;
- organizar recursos gráficos;
- utilizar módulos ES;
- gestionar imágenes con Vite;
- trabajar con React Router;
- entender las diferencias entre desarrollo y producción;
- configurar una aplicación publicada en un subdirectorio;
- realizar builds de producción;
- utilizar Git y GitHub;
- automatizar el despliegue con GitHub Actions.

Pero probablemente el aprendizaje más importante ha sido entender que:

> **que el código funcione no significa necesariamente que el trabajo esté terminado.**

Muchas decisiones del proyecto se revisaron después de funcionar por primera vez.

Hubo que volver atrás, reorganizar, eliminar duplicaciones, cambiar estructuras y corregir decisiones que habían sido válidas durante una etapa anterior.

Ese proceso de revisión y refactorización ha sido una de las partes más valiosas del proyecto.

---

# 🔮 Próximos pasos

La versión actual está centrada en el frontend.

La evolución natural de Colmenar 028 sería convertir el proyecto en una aplicación Full Stack incorporando:

- API REST;
- Node.js;
- Express;
- base de datos;
- productos dinámicos;
- carrito de compra;
- persistencia;
- CRUD de productos;
- formulario de contacto funcional;
- área de gestión.

La estructura actual del frontend deja preparada una buena base para continuar esa evolución.

---

# 💡 Decisiones que cambiaría si comenzara hoy

Una de las ventajas de haber desarrollado el proyecto durante varias etapas de aprendizaje es poder mirar hacia atrás y detectar qué haría diferente.

Si comenzara hoy:

- organizaría los assets desde el principio dentro de `src/assets`;
- identificaría antes los patrones reutilizables;
- separaría datos y componentes desde las primeras etapas;
- definiría con mayor antelación los estilos globales y específicos;
- plantearía desde el inicio cómo se va a desplegar la aplicación;
- comprobaría builds de producción durante el desarrollo y no únicamente al final.

No considero estas decisiones iniciales trabajo perdido.

Precisamente haber tenido que corregirlas me permitió comprender mejor **por qué una arquitectura es más adecuada que otra**.

---

# 👩‍💻 Autora

**Yolanda Brunete de la Cruz**

Proyecto diseñado y desarrollado como parte de mi evolución profesional hacia el desarrollo web Full Stack.

[GitHub](https://github.com/kampaBru)  
[LinkedIn](https://www.linkedin.com/in/ybrunete)

---

<div align="center">

### Colmenar 028

**Más que miel, vida.** 🐝

</div>