import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { Grid, Card, Divider, CardMedia, CardContent, CardActions, Item, IconButton, AppBar, Toolbar, Box, Typography, BottomNavigation, BottomNavigationAction, List, ListItem, ListItemAvatar, Avatar, ListItemText, Paper, Pagination } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { AddShoppingCart, ShoppingCart, ArrowBack, RemoveShoppingCart } from '@mui/icons-material';
import RestoreIcon from '@mui/icons-material/Restore'
import ShoppingCartIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useState, useRef, Fragment } from 'react';

const products = [
  {
    title: 'Christmas Mystery Box',
    description: "A random Christmas mystery box containing assorted items up to $500 in value!",
    imageUrl: 'https://th.bing.com/th?id=OPHS.z%2bqhvcKpP38Y4A474C474&w=248&h=248&o=5&pid=21.1',
    price: 419.31
  },
  {
    title: 'Hand-Made Christmas Sweater',
    description: "Our finest-quality Christmas sweater",
    imageUrl: 'https://images.halloweencostumes.ca/products/57248/1-1/gremlins-gizmo-claus-ugly-christmas-sweater-update1.jpg',
    price: 71.41
  },
  {
    title: 'Festive Mug',
    description: "Celebrate the holidays with a warm drink in a cool mug!",
    imageUrl: 'data:image/jpeg;base64,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',
    price: 14.51
  }, {
    title: 'Christmas Sweater 2',
    description: "Cozy up with another sweater!",
    imageUrl: 'https://th.bing.com/th/id/OIP.xfluj_Nr38LPoJTb38dFBQHaKl?w=203&h=289&c=7&r=0&o=5&pid=1.7',
    price: 19.13
  },
  {
    title: 'Christmas Sweater 3',
    description: "Cozy up with another sweater!",
    imageUrl: 'https://th.bing.com/th/id/OIP.OsuEhk183us-jVaLo1XqXwHaI7?w=203&h=245&c=7&r=0&o=5&pid=1.7',
    price: 89.81
  },
];

const ProductList = ({ cart, setCart, products }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={6} sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={product.imageUrl}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', padding: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography fontSize={20}>${product.price}</Typography>
                {cart?.some(cartItem => cartItem.title === product.title) ? <Typography>Added ✓</Typography> : <Button onClick={() => setCart([...(cart || []), product])} variant="contained" endIcon={<AddShoppingCart />} size="small">Add to Cart</Button>}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination count={10} />
    </Box>
  )
}

const CartDetails = ({ setPage, cart, setCart }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Button onClick={() => setPage('product')} startIcon={<ArrowBack />}>Back to Shopping</Button>
      </Box>
      <Typography variant="h3">Cart:</Typography>
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        {cart.map(cartItem =>
          <ListItem secondaryAction={
            <IconButton onClick={() => setCart(cart.filter(newCartItem => newCartItem.title !== cartItem.title))} edge="end" aria-label="comments">
              <RemoveShoppingCart />
            </IconButton>
          } alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={cartItem.imageUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={cartItem.title}
              secondary={
                <Fragment>
                  {cartItem.description}
                </Fragment>
              }
            />
          </ListItem>)}
      </List>
      <Box sx={{ display: 'flex', width: 500, flexDirection: 'row-reverse', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', width: 150, justifyContent: 'space-between' }}>
            <Typography>Subtotal: </Typography>
            <Typography>${(cart.map(cartItem => cartItem.price).reduce((accumulator, currentValue) => {
              return accumulator + currentValue
            }, 0)).toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', width: 150, justifyContent: 'space-between' }}>
            <Typography>Tax: </Typography>
            <Typography>${(cart.map(cartItem => cartItem.price).reduce((accumulator, currentValue) => {
              return accumulator + currentValue
            }, 0) * 0.13).toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', width: 150, justifyContent: 'space-between' }}>
            <Typography>Total: </Typography>
            <Typography>${(cart.map(cartItem => cartItem.price).reduce((accumulator, currentValue) => {
              return accumulator + currentValue
            }, 0) * 1.13).toFixed(2)}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function App() {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState('product')
  const [cart, setCart] = useState([])
  const ref = useRef(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EComm
          </Typography>
          <Button onClick={() => setPage('cart')} variant="outlined" endIcon={<AddShoppingCart />} color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1 }}>
        {page === 'product' ? <ProductList cart={cart} setCart={setCart} products={products} /> : <CartDetails setPage={setPage} cart={cart} setCart={setCart} />}
      </Box>
    </Box>
  );
}

export default App;
