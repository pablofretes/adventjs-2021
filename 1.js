export default function contarOvejas(ovejas) {
  const filter = ovejas.filter(
    (oveja) => oveja.color === 'rojo' && 
    oveja.name.toLowerCase().includes('n') &&
    oveja.name.toLowerCase().includes('a'))
  return filter
}