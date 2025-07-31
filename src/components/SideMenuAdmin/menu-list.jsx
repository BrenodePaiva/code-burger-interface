import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import BurstModeIcon from '@mui/icons-material/BurstMode'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'

import paths from '../../constants/paths'
const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: LocalMallIcon
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.Products,
    icon: ShoppingCartIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddShoppingCartIcon
  },
  {
    id: 4,
    label: 'Categorias',
    link: paths.Categories,
    icon: BurstModeIcon
  },
  {
    id: 5,
    label: 'Nova Categoria',
    link: paths.NewCategoty,
    icon: AddPhotoAlternateIcon
  }
]

export default listLinks
