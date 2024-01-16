import Drawer from '@mui/material/Drawer'

const NavBar = () => {
  // get allowed options based on user role
  return (
    <Drawer
      aria-label="main-navigation"
      component="aside"
      variant="permanent"
      ModalProps={{
        keepMounted: false,
      }}
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          backgroundColor: '#F2F2F2',
          boxSizing: 'border-box',
          width: '240px',
        },
      }}
    >
      <nav>Orders</nav>
      <nav>Actions</nav>
      <nav>Products</nav>
      <nav>Settings</nav>
      <nav>Logout</nav>
    </Drawer>
  )
}

export default NavBar
