import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { alpha, Box, Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { signals } from '../siteData'
import { cutCornerSx, frameSx } from '../ui'

export default function HomePage() {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }} alignItems="start">
      <Grid size={{ xs: 12, md: 8 }}>
        <Stack spacing={2.5} sx={{ pt: { md: 2 } }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.8rem', md: '6.8rem' }, lineHeight: 0.88 }}
          >
            LEADER
            <br />
            JIANG
          </Typography>
          <Typography
            variant="h5"
            color="primary.light"
            sx={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}
          >
            React Engineer / Interface Architect / Digital Builder
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 720, fontSize: '1.15rem', lineHeight: 1.75 }}
          >
            我專注於把想法轉成可部署、可維護、可展示的前端產品。這個站點現在已經是多頁結構，
            可延伸成作品站、履歷站或品牌首頁。
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              component={RouterLink}
              to="/projects"
              variant="contained"
              startIcon={<RocketLaunchIcon />}
              sx={{
                alignSelf: 'flex-start',
                color: '#02111f',
                background: 'linear-gradient(135deg, #67e8f9 0%, #7dd3fc 42%, #818cf8 100%)',
                boxShadow: `0 12px 40px ${alpha('#67e8f9', 0.24)}`,
              }}
            >
              View Projects
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              variant="outlined"
              sx={{
                alignSelf: 'flex-start',
                borderColor: alpha('#9ed7ff', 0.2),
                color: 'text.primary',
              }}
            >
              About Me
            </Button>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Paper sx={{ p: 3, borderRadius: 1.25, ...frameSx, ...cutCornerSx }}>
          <Box className="hud-scan" />
          <Box className="hud-corner hud-corner-tl" />
          <Box className="hud-corner hud-corner-tr" />
          <Box className="hud-corner hud-corner-bl" />
          <Box className="hud-corner hud-corner-br" />
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">SYSTEM SIGNALS</Typography>
              <Typography variant="body2" color="primary.light">
                03
              </Typography>
            </Stack>
            {signals.map((item, index) => (
              <Box key={item.label}>
                <Typography variant="body2" color="primary.light">
                  {item.label}
                </Typography>
                <Typography variant="body1" sx={{ mt: 0.5 }}>
                  {item.value}
                </Typography>
                {index < signals.length - 1 ? (
                  <Divider sx={{ mt: 1.5, borderColor: alpha('#9ed7ff', 0.08) }} />
                ) : null}
              </Box>
            ))}
            <Typography variant="caption" color="text.secondary">
              FEED / STABLE / PAGE NODE HOME
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  )
}
