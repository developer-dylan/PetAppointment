export const apiServer = 'http://localhost:3000/products'

// Fetch all products
export const getProducts = async () => {
  try {
    const res = await fetch(apiServer)
    if (!res.ok) throw new Error('Failed to fetch products')
    return await res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to load products.')
  }
}

// Create a new product ensuring unique name
export const createProduct = async (product) => {
  const existing = await getProducts()
  const nameExists = existing.some(p => p.name.toLowerCase() === product.name.toLowerCase())
  if (nameExists) {
    throw new Error('Product with this name already exists.')
  }

  try {
    const res = await fetch(apiServer, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    if (!res.ok) throw new Error('Failed to add product.')
    const newProduct = await res.json()
    return newProduct
  } catch (error) {
    console.error('Error creating product:', error)
    throw new Error('Failed to add product.')
  }
}

// Update existing product by id
export const updateProduct = async (id, updatedProduct) => {
  try {
    const res = await fetch(`${apiServer}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct)
    })
    if (!res.ok) throw new Error('Failed to update product.')
    const updated = await res.json()
    return updated
  } catch (error) {
    console.error('Error updating product:', error)
    throw new Error('Failed to update product.')
  }
}

// Delete product by id
export const deleteProduct = async (id) => {
  try {
    const res = await fetch(`${apiServer}/${id}`, {
      method: 'DELETE'
    })
    if (!res.ok) throw new Error('Failed to delete product.')
    return true
  } catch (error) {
    console.error('Error deleting product:', error)
    throw new Error('Failed to delete product.')
  }
}
