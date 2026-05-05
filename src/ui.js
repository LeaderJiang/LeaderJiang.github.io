import { alpha } from '@mui/material'

export const frameSx = {
  position: 'relative',
  background: 'transparent',
  border: `1px solid ${alpha('#8ec5ff', 0.08)}`,
  boxShadow: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 28,
    height: 2,
    background: alpha('#67e8f9', 0.82),
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 20,
    height: 1,
    background: alpha('#7dd3fc', 0.45),
  },
}

export const linePanelSx = {
  background: 'transparent',
  border: `1px solid ${alpha('#8ec5ff', 0.07)}`,
  boxShadow: 'none',
}

export const cutCornerSx = {
  clipPath:
    'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
}
