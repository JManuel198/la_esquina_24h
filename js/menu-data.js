/* ============================================================
   La Esquina 24H — Datos del menú (compartidos)
   Un único array de productos por categoría, reutilizado por
   todas las variaciones (1a Clásico, 1b Bento, 1c Urbano...).
   Se expone como global window.MENU para poder cargarlo con
   <script src> incluso al abrir los HTML como file://.
   ============================================================ */

window.MENU = {
  'desayunos': [
    { name: 'Chilaquiles Verdes',    price: '$65', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=1' },
    { name: 'Huevos al Gusto',        price: '$50', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=2' },
    { name: 'Molletes con Frijol',    price: '$45', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=3' },
  ],
  'almuerzos': [
    { name: 'Milanesa con Arroz',     price: '$80', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=1' },
    { name: 'Enchiladas Rojas',       price: '$75', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=2' },
    { name: 'Torta de Bistec',        price: '$60', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=3' },
  ],
  'comida-rapida': [
    { name: 'Doble Carne Especial',     price: '$85', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=1' },
    { name: 'Papas con Queso y Tocino', price: '$55', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=2' },
    { name: 'Hot Dog Callejero',        price: '$45', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=3' },
    { name: 'Alitas BBQ x8',            price: '$95', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=4' },
    { name: 'Quesadilla Frita',         price: '$60', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=5' },
    { name: 'Trompo al Pastor',         price: '$50', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=6' },
  ],
  'promociones': [
    { name: 'Combo Medianoche',       price: '$99', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=1' },
    { name: '2x1 en Hot Dogs',        price: '$45', img: 'https://placehold.co/72x72/1a1a1a/E63232?text=2' },
  ],
};

