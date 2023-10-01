export const useFetchProduct = async (productId) => {
    const url = `https://fakestoreapi.com/products/${productId}`

    try {
        const response = await fetch(url)

        if (!response.ok) throw new Error(`Error status: ${response.status}`)

        const product = await response.json()
        return product
    } catch (error) {
        console.error(error)
    }
}