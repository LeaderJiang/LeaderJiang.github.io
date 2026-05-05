import { alpha } from '@mui/material'

export const frameSx = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'linear-gradient(180deg, rgba(7, 15, 30, 0.42) 0%, rgba(5, 10, 22, 0.22) 100%)',
  border: `1px solid ${alpha('#8ec5ff', 0.14)}`,
  boxShadow: `inset 0 0 0 1px ${alpha('#67e8f9', 0.03)}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 42,
    height: 2,
    background: alpha('#67e8f9', 0.92),
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    right: 18,
    top: 0,
    width: 72,
    height: 1,
    background:
      'linear-gradient(90deg, transparent 0%, rgba(103, 232, 249, 0.75) 30%, transparent 100%)',
  },
  '& .hud-corner': {
    position: 'absolute',
    width: 16,
    height: 16,
    borderColor: alpha('#7dd3fc', 0.5),
    pointerEvents: 'none',
  },
  '& .hud-corner-tl': {
    top: 8,
    left: 8,
    borderTop: '1px solid',
    borderLeft: '1px solid',
  },
  '& .hud-corner-tr': {
    top: 8,
    right: 8,
    borderTop: '1px solid',
    borderRight: '1px solid',
  },
  '& .hud-corner-bl': {
    bottom: 8,
    left: 8,
    borderBottom: '1px solid',
    borderLeft: '1px solid',
  },
  '& .hud-corner-br': {
    bottom: 8,
    right: 8,
    borderBottom: '1px solid',
    borderRight: '1px solid',
  },
  '& .hud-scan': {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, transparent 0%, rgba(103, 232, 249, 0.035) 48%, transparent 100%)',
    backgroundSize: '100% 18px',
    pointerEvents: 'none',
  },
}

export const linePanelSx = {
  background: 'transparent',
  border: `1px solid ${alpha('#8ec5ff', 0.11)}`,
  boxShadow: 'none',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 18,
    height: 1,
    background: alpha('#67e8f9', 0.72),
  },
}

export const cutCornerSx = {
  clipPath:
    'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
}

export const hudHeaderSx = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
  gap: 1.5,
  mb: 2,
  '&::after': {
    content: '""',
    height: 1,
    background:
      'linear-gradient(90deg, rgba(103, 232, 249, 0.5) 0%, rgba(103, 232, 249, 0.08) 75%, transparent 100%)',
  },
}

export const hudStatRowSx = {
  display: 'grid',
  gridTemplateColumns: '72px 1fr',
  gap: 1.5,
  alignItems: 'start',
}

export const hudCodeSx = {
  fontSize: '0.74rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: alpha('#67e8f9', 0.88),
}
