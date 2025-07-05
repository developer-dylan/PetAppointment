// Capitalize first letter
const formatText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

// Format price with currency
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 1,
  }).format(price)
}

// Create a product card
export const renderProductCard = (product, onEdit, onDelete) => {
  const div = document.createElement('div')
  div.classList.add('product-card')

  div.innerHTML = `
    <p><strong>Nombre:</strong> ${formatText(product.name)}</p>
    <p><strong>Precio:</strong> ${formatPrice(product.price)}</p>
    <p><strong>Categoría:</strong> ${formatText(product.category)}</p>
    <div class="card-buttons">
      <button class="edit">Editar</button>
      <button class="delete">Eliminar</button>
    </div>
  `

  div.querySelector('.edit').addEventListener('click', () => onEdit(product))
  div.querySelector('.delete').addEventListener('click', () => onDelete(product.id))

  return div
}
