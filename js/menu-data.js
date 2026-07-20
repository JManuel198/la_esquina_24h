/* ============================================================
   La Esquina 24H — Datos del menú (compartidos)
   Un único array de productos por categoría, reutilizado por
   todas las variaciones (1a Clásico, 1b Bento, 1c Urbano...).
   Se expone como global window.MENU para poder cargarlo con
   <script src> incluso al abrir los HTML como file://.
   ============================================================ */

window.MENU = {
  'desayunos': [
    { name: 'Chilaquiles Verdes',    price: '$65', img: '../assets/img/hamburguesa.jpg' },
    { name: 'Huevos al Gusto',        price: '$50', img: '../assets/img/hamburguesa.jpg' },
    { name: 'Molletes con Frijol',    price: '$45', img: '../assets/img/hamburguesa.jpg' },
  ],
  'almuerzos': [
    { name: 'Milanesa con Arroz',     price: '$80', img: '../assets/img/hamburguesa.jpg' },
    { name: 'Enchiladas Rojas',       price: '$75', img: '../assets/img/hamburguesa.jpg' },
    { name: 'Torta de Bistec',        price: '$60', img: '../assets/img/hamburguesa.jpg' },
  ],
  'comida-rapida': [
    { name: 'Doble Carne Especial',     price: '$85', img: '../assets/img/hamburguesa.jpg' },
    { name: 'Papas con Queso y Tocino', price: '$55', img: '../assets/img/hamburguesa.jpg' },
    { name: 'Hot Dog Callejero',        price: '$45', img: '../assets/img/hamburguesa.jpg' },
    { name: 'Alitas BBQ x8',            price: '$95', img: '../assets/img/hamburguesa.jpg' },
    { name: 'Quesadilla Frita',         price: '$60', img: '../assets/img/hamburguesa.jpg' },
    { name: 'Trompo al Pastor',         price: '$50', img: '../assets/img/hamburguesa.jpg' },
  ],
  'promociones': [
    { name: 'Combo Medianoche',       price: '$99', img: '../assets/img/hamburguesa.jpg' },
    { name: '2x1 en Hot Dogs',        price: '$45', img: '../assets/img/hamburguesa.jpg' },
  ],
};

