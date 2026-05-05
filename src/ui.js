import { alpha } from '@mui/material'

export const frameSx = {
  position: 'relative',
  background: 'transparent',
  border: `1px solid ${alpha('#8ec5ff', 0.12)}`,
  boxShadow: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 56,
    height: 1,
    background: alpha('#67e8f9', 0.75),
  },
}

export const linePanelSx = {
  background: 'transparent',
  border: `1px solid ${alpha('#8ec5ff', 0.12)}`,
  boxShadow: 'none',
}

export const cutCornerSx = {
  clipPath:
    'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
}
