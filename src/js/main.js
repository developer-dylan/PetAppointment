import { createProduct, deleteProduct, getProducts, updateProduct } from './api.js'
import { renderProductCard } from './ui.js'

const form = document.getElementById('productForm')
const productsContainer = document.getElementById('productList')

let editing = false
let editId = null

// Capitalize first letter
const formatText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

// Render all products
const renderProducts = async () => {
  const products = await getProducts()
  productsContainer.innerHTML = ''
  products.forEach(product => {
    const card = renderProductCard(product, loadForm, removeProduct)
    productsContainer.appendChild(card)
  })
}

// Load data into the form
const loadForm = (product) => {
  form['name'].value = product.name
  form['price'].value = product.price
  form['category'].value = product.category
  editing = true
  editId = product.id
}

// Delete a product
const removeProduct = async (id) => {
  await deleteProduct(id)
  renderProducts()
}

// Handle form submit
form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const newProduct = {
    name: formatText(form['name'].value.trim()),
    price: form['price'].value,
    category: formatText(form['category'].value.trim())
  }

  if (!editing) {
    await createProduct(newProduct)
  } else {
    await updateProduct(editId, newProduct)
    editing = false
    editId = null
  }

  form.reset()
  renderProducts()
})

// Initial render
window.addEventListener('DOMContentLoaded', renderProducts)
