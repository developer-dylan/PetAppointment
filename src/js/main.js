import { createProduct, deleteProduct, getProducts, updateProduct } from './api.js'
import { renderProductCard } from './ui.js'
import { showSuccessAlert, showErrorAlert, showWarningAlert, showConfirmAlert } from './alerts.js'

const form = document.getElementById('productForm')
const productsContainer = document.getElementById('productList')

let editing = false
let editId = null

// Format text: capitalize first letter, lowercase rest
const formatText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

// Render all products in container
const renderProducts = async () => {
  try {
    const products = await getProducts()
    productsContainer.innerHTML = ''
    products.forEach(product => {
      const card = renderProductCard(product, loadForm, removeProduct)
      productsContainer.appendChild(card)
    })
  } catch (error) {
    showErrorAlert(error.message)
  }
}

// Load product data into form for editing
const loadForm = (product) => {
  form['name'].value = product.name
  form['price'].value = product.price
  form['category'].value = product.category
  editing = true
  editId = product.id
}

// Remove product after confirmation
const removeProduct = async (id) => {
  try {
    const confirmed = await showConfirmAlert('Esta acción no se puede deshacer.')
    if (!confirmed) return

    await deleteProduct(id)
    showSuccessAlert('Product deleted successfully.')
    renderProducts()
  } catch (error) {
    showErrorAlert(error.message)
  }
}

// Handle form submit to create or update product
form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const newProduct = {
    name: formatText(form['name'].value.trim()),
    price: form['price'].value,
    category: formatText(form['category'].value.trim())
  }

  try {
    if (!editing) {
      await createProduct(newProduct)
      showSuccessAlert('Producto agregado exitosamente.')
    } else {
      await updateProduct(editId, newProduct)
      showSuccessAlert('Producto actualizado exitosamente.')
      editing = false
      editId = null
    }
    form.reset()
    renderProducts()
  } catch (error) {
    if (error.message.includes('exists')) {
      showWarningAlert(error.message)
    } else {
      showErrorAlert(error.message)
    }
  }
})

// Initial render on page load
window.addEventListener('DOMContentLoaded', renderProducts)
