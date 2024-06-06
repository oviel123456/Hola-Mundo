const holaMundo = require('.Hola-Mundo/index');

test('retorna "Hola Mundo"', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});
