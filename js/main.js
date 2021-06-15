const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');

let field = new Starfield(ctx);
field.initialize();
field.start();