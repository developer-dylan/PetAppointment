// Format text: capitalize first letter, lowercase rest
const formatText = (text) => {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

// Format price as Colombian Peso currency
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 1,
  }).format(price)
}

// Create product card DOM element
export const renderProductCard = (product, onEdit, onDelete) => {
  const div = document.createElement('div')
  div.classList.add('product-card')

  div.innerHTML = `
    <p><strong>Producto:</strong> ${formatText(product.name)}</p>
    <p><strong>Precio:</strong> ${formatPrice(product.price)}</p>
    <p><strong>Categoria:</strong> ${formatText(product.category)}</p>
    <div class="card-buttons">
      <button class="edit">Editar</button>
      <button class="delete">Eliminar</button>
    </div>
  `

  div.querySelector('.edit').addEventListener('click', () => onEdit(product))
  div.querySelector('.delete').addEventListener('click', () => onDelete(product.id))

  return div
}
