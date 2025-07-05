export const apiServer = 'http://localhost:3000/products'

// Get all products
export const getProducts = async () => {
  try {
    const res = await fetch(apiServer)
    if (!res.ok) throw new Error('Failed to fetch products')
    return await res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

// Create a new product with unique name
export const createProduct = async (product) => {
  try {
    const existing = await getProducts()
    const nameExists = existing.some(p => p.name.toLowerCase() === product.name.toLowerCase())
    if (nameExists) {
      alert('Ya existe un producto con ese nombre.')
      return
    }

    const res = await fetch(apiServer, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    return await res.json()
  } catch (error) {
    console.error('Error creating product:', error)
  }
}

// Update an existing product
export const updateProduct = async (id, updatedProduct) => {
  try {
    const res = await fetch(`${apiServer}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
    return await res.json()
  } catch (error) {
    console.error('Error updating product:', error)
  }
}

// Delete a product
export const deleteProduct = async (id) => {
  try {
    await fetch(`${apiServer}/${id}`, {
      method: 'DELETE'
    })
  } catch (error) {
    console.error('Error deleting product:', error)
  }
}
