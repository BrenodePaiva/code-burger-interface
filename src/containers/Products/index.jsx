import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import ProductsImage from '../../assets/products-logo.svg'
import { CardProducts } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  CategoryButton,
  CategoryMenu,
  Container,
  ProductsContainer,
  ProductsImg
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const addcat = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(addcat)
    }

    async function loadProducts() {
      const { data } = await api.get('products')

      const formatedData = data.map(product => ({
        ...product,
        formatedPrice: formatCurrency(product.price)
      }))

      setProducts(formatedData)
    }

    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products)
    } else {
      const newFilteredProduct = products.filter(
        product => product.category_id === activeCategory
      )

      setFilterProducts(newFilteredProduct)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsImg src={ProductsImage} alt="products-banner" />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
              isActive={activeCategory === category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>

      <ProductsContainer>
        {filterProducts &&
          filterProducts.map(product => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
