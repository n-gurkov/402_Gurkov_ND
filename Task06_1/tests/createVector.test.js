import createVector from '../src/index'

test('toString', () => {
  expect(createVector(-3, 15, 5).toString()).toBe('(-3;15;5)')
})

test('getLength', () => {
  expect(createVector(-3, 7, 5).getLength()).toBe(3)
})

test('add', () => {
  const vector1 = createVector(5, 3, 7)
  const vector2 = createVector(3, 1, 5)
  expect(vector1.add(vector2).toString()).toBe('(8;4;12)')
})

test('sub', () => {
  const vector1 = createVector(5, 3, 7)
  const vector2 = createVector(3, 1, 5)
  expect(vector1.sub(vector2).toString()).toBe('(2;2;2)')
})

test('product', () => {
  expect(createVector(3, 7, -1).product(3).toString()).toBe('(9;21;-3)')
})

test('scalarProduct', () => {
  const vector1 = createVector(2, -3, 0)
  const vector2 = createVector(5, 3, 7)
  expect(vector1.scalarProduct(vector2)).toBe(1)
})

test('vectorProduct', () => {
  const vector1 = createVector(2, -3, 0)
  const vector2 = createVector(5, 3, 7)
  expect(vector1.vectorProduct(vector2).toString()).toBe('(-21;-14;21)')
})
