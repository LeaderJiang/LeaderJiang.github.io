import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { alpha, Box, Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { signals } from '../siteData'
import { cutCornerSx, frameSx, hudCodeSx, hudHeaderSx, hudStatRowSx } from '../ui'

export default function HomePage() {
  return (
    <Stack spacing={3}>
      <Paper
        className="page-enter"
        sx={{ p: { xs: 3, md: 4 }, borderRadius: 1.5, ...frameSx, ...cutCornerSx }}
      >
        <Box className="hud-scan" />
        <Box className="hud-scanline" />
        <Box className="hud-corner hud-corner-tl" />
        <Box className="hud-corner hud-corner-tr" />
        <Box className="hud-corner hud-corner-bl" />
        <Box className="hud-corner hud-corner-br" />
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack spacing={2.5}>
              <Box sx={hudHeaderSx}>
                <Typography className="hud-code" sx={hudCodeSx}>NODE 01</Typography>
                <Typography variant="h6">PRIMARY COMMAND DECK</Typography>
                <Typography className="hud-code" sx={hudCodeSx}>LIVE</Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.9rem', md: '7.2rem' }, lineHeight: 0.86 }}
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
                sx={{ maxWidth: 760, fontSize: '1.12rem', lineHeight: 1.8 }}
              >
                我專注於把想法轉成可部署、可維護、可展示的前端產品。這裡不是一般首頁，
                而是把個人品牌、作品訊號與介面能力收進同一個主控制台。
              </Typography>

              <Grid container spacing={1.5} sx={{ pt: 1, maxWidth: 820 }}>
                {[
                  ['01', 'UI SYSTEMS', 'Component architecture tuned for clarity.'],
                  ['02', 'DEPLOYMENT READY', 'Static hosting, routing, and delivery aligned.'],
                  ['03', 'SCI-FI IDENTITY', 'A consistent futuristic interface language.'],
                ].map(([code, title, text]) => (
                  <Grid className={`page-enter-fast delay-${Number(code)}`} key={code} size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{
                        p: 2,
                        minHeight: '100%',
                        border: `1px solid ${alpha('#8ec5ff', 0.11)}`,
                        background: alpha('#081120', 0.16),
                      }}
                    >
                      <Typography className="hud-code" sx={hudCodeSx}>{code}</Typography>
                      <Typography variant="body2" color="primary.light" sx={{ mt: 1 }}>
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
                        {text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
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
                  Open Mission Board
                </Button>
                <Button
                  component={RouterLink}
                  to="/about"
                  variant="outlined"
                  sx={{
                    alignSelf: 'flex-start',
                    borderColor: alpha('#9ed7ff', 0.22),
                    color: 'text.primary',
                  }}
                >
                  Open Identity File
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Paper
              className="page-enter-side delay-1"
              sx={{ p: 3, borderRadius: 1.25, ...frameSx, ...cutCornerSx }}
            >
              <Box className="hud-scan" />
              <Box className="hud-scanline" />
              <Box className="hud-corner hud-corner-tl" />
              <Box className="hud-corner hud-corner-tr" />
              <Box className="hud-corner hud-corner-bl" />
              <Box className="hud-corner hud-corner-br" />
              <Stack spacing={2}>
                <Box sx={hudHeaderSx}>
                  <Typography className="hud-code" sx={hudCodeSx}>SIGNAL</Typography>
                  <Typography variant="h6">SYSTEM SIGNALS</Typography>
                  <Typography variant="body2" color="primary.light">
                    03
                  </Typography>
                </Box>
                {signals.map((item, index) => (
                  <Box key={item.label} sx={hudStatRowSx}>
                    <Typography className="hud-code" sx={hudCodeSx}>0{index + 1}</Typography>
                    <Box>
                      <Typography variant="body2" color="primary.light">
                        {item.label}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 0.5 }}>
                        {item.value}
                      </Typography>
                    </Box>
                    {index < signals.length - 1 ? (
                      <Divider
                        sx={{
                          mt: 1.5,
                          borderColor: alpha('#9ed7ff', 0.08),
                          gridColumn: '1 / -1',
                        }}
                      />
                    ) : null}
                  </Box>
                ))}
                <Divider sx={{ borderColor: alpha('#9ed7ff', 0.08) }} />
                <Grid container spacing={1.25}>
                  {[
                    ['01', 'Portfolio routing active'],
                    ['02', 'GitHub Pages deployment stable'],
                    ['03', 'Multi-page HUD structure online'],
                  ].map(([code, item]) => (
                    <Grid key={code} size={{ xs: 12 }}>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Typography className="hud-code" sx={hudCodeSx}>{code}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  )
}
