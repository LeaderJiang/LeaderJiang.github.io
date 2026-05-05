import GitHubIcon from '@mui/icons-material/GitHub'
import SensorsIcon from '@mui/icons-material/Sensors'
import { alpha, Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]

const navLinkSx = {
  px: 1.5,
  py: 0.8,
  borderBottom: '1px solid transparent',
  color: 'text.secondary',
  textDecoration: 'none',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  transition: 'border-color 180ms ease, color 180ms ease, background-color 180ms ease',
  '&.active': {
    color: 'primary.light',
    borderBottomColor: alpha('#67e8f9', 0.28),
    backgroundColor: alpha('#67e8f9', 0.03),
  },
}

export default function MainLayout() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        '&::before': {
          content: '""',
          position: 'fixed',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(120,160,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(120,160,255,0.06) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(circle at center, black 35%, transparent 90%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', py: { xs: 3, md: 5 } }}>
        <Stack spacing={4}>
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', lg: 'center' }}
            spacing={2}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }}>
              <Chip
                icon={<SensorsIcon />}
                label="Personal Command Interface"
                sx={{
                  bgcolor: 'transparent',
                  color: 'primary.light',
                  border: `1px solid ${alpha('#67e8f9', 0.16)}`,
                }}
              />
              <Typography variant="body2" color="text.secondary">
                SIGNAL STATUS / ONLINE / PORTFOLIO NODE
              </Typography>
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems={{ xs: 'stretch', md: 'center' }}>
              <Stack direction="row" spacing={1}>
                {navItems.map((item) => (
                  <Box
                    key={item.to}
                    component={NavLink}
                    to={item.to}
                    end={item.to === '/'}
                    sx={navLinkSx}
                  >
                    {item.label}
                  </Box>
                ))}
              </Stack>

              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href="https://github.com/LeaderJiang"
                sx={{
                  alignSelf: 'flex-start',
                  borderColor: alpha('#9ed7ff', 0.12),
                  color: 'text.primary',
                  bgcolor: 'transparent',
                }}
              >
                Open GitHub
              </Button>
            </Stack>
          </Stack>

          <Outlet />
        </Stack>
      </Container>
    </Box>
  )
}
