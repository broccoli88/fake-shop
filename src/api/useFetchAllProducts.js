export const useFetchAllProducts = async () => {
    const url = 'https://fakestoreapi.com/products'

    try {
        const response = await fetch(url)

        if (!response.ok) throw new Error(`Status error: ${response.status}`)

        const products = await response.json()
        return products
    } catch (error) {
        console.log(error)
    }
}