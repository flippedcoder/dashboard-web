import { Button } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import { useState } from 'react'

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true)

  const toggleNav = (open: boolean) => setIsNavOpen(open)
  // get allowed options based on user role
  return (
    <>
      <Drawer
        aria-label="main-navigation"
        component="aside"
        anchor="left"
        variant="permanent"
        open={isNavOpen}
        ModalProps={{
          keepMounted: false,
        }}
        onClose={() => toggleNav(false)}
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <nav>Orders</nav>
        <nav>Actions</nav>
        <nav>Products</nav>
        <nav>Settings</nav>
        <nav>Logout</nav>
      </Drawer>
      <Button onClick={() => toggleNav(true)}>Toggle nav</Button>
    </>
  )
}

export default NavBar
