import Drawer from '@mui/material/Drawer'

const NavBar = () => {
  // get allowed options based on user role
  return (
    <Drawer
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
      <div>Items</div>
    </Drawer>
  )
}

export default NavBar
