import MemoryIcon from '@mui/icons-material/Memory'
import { alpha, Box, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material'
import { featuredProject, projects } from '../siteData'
import { frameSx, hudCodeSx, hudHeaderSx, linePanelSx } from '../ui'

export default function ProjectsPage() {
  return (
    <Stack spacing={3}>
      <Card className="page-enter" sx={{ borderRadius: 1.5, ...frameSx }}>
        <Box className="hud-scan" />
        <Box className="hud-scanline" />
        <Box className="hud-corner hud-corner-tl" />
        <Box className="hud-corner hud-corner-tr" />
        <Box className="hud-corner hud-corner-bl" />
        <Box className="hud-corner hud-corner-br" />
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Box sx={hudHeaderSx}>
            <Typography className="hud-code" sx={hudCodeSx}>MISSION</Typography>
            <Typography variant="h3">Project Operations Board</Typography>
            <Typography sx={hudCodeSx}>PX-02</Typography>
          </Box>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            這裡不是普通作品列表，而是任務面板。每個區塊都對應一種能力輸出：核心案例、優化方向、部署策略與延伸模組。
          </Typography>

          <Grid container spacing={{ xs: 2.5, md: 3.5 }}>
            <Grid size={{ xs: 12, xl: 7 }}>
              <Card className="page-enter-fast delay-1" sx={{ height: '100%', borderRadius: 1.25, ...frameSx }}>
                <Box className="hud-scan" />
                <Box className="hud-scanline" />
                <Box className="hud-corner hud-corner-tl" />
                <Box className="hud-corner hud-corner-br" />
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={2.5}>
                    <Box sx={hudHeaderSx}>
                      <Typography className="hud-code" sx={hudCodeSx}>CASE-01</Typography>
                      <Typography variant="h4">{featuredProject.title}</Typography>
                      <Typography sx={hudCodeSx}>PRIORITY</Typography>
                    </Box>

                    <Typography color="text.secondary" sx={{ fontSize: '1.04rem', lineHeight: 1.85 }}>
                      {featuredProject.summary}
                    </Typography>

                    <Grid container spacing={1.5}>
                      {featuredProject.stack.map((item) => (
                        <Grid key={item}>
                          <Chip
                            label={item}
                            sx={{
                              bgcolor: alpha('#7c3aed', 0.16),
                              color: '#d8b4fe',
                              borderColor: alpha('#7c3aed', 0.24),
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>

                    <Grid container spacing={2}>
                      {featuredProject.metrics.map((item, index) => (
                        <Grid key={item} size={{ xs: 12, md: 4 }}>
                          <Box sx={{ p: 2, borderRadius: 1, minHeight: '100%', ...linePanelSx }}>
                            <Typography className="hud-code" sx={hudCodeSx}>0{index + 1}</Typography>
                            <Typography variant="body2" color="primary.light" sx={{ mt: 1 }}>
                              {item}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, xl: 5 }}>
              <Stack spacing={2} sx={{ height: '100%' }}>
                {[
                  ['OPS', 'What I optimize', '架構清楚、互動順暢、資料密度高但不混亂，讓產品真的能被使用，而不只是能被展示。'],
                  ['MODE', 'Deployment strategy', '可以繼續把這裡接成真實案例、履歷下載、聯絡資訊，或串成多頁式作品網站。'],
                ].map(([code, title, text]) => (
                  <Card
                    className="page-enter-side delay-2"
                    key={code}
                    sx={{ flexGrow: 1, borderRadius: 1.25, ...frameSx }}
                  >
                    <Box className="hud-corner hud-corner-tl" />
                    <Box className="hud-corner hud-corner-br" />
                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={1.5}>
                        <Box sx={hudHeaderSx}>
                          <Typography className="hud-code" sx={hudCodeSx}>{code}</Typography>
                          <Typography variant="h5">{title}</Typography>
                          <Typography sx={hudCodeSx}>RUN</Typography>
                        </Box>
                        <Typography color="text.secondary">{text}</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={{ xs: 2.5, md: 3 }}>
        {projects.map((project, index) => (
          <Grid key={project.title} size={{ xs: 12, md: 6 }}>
            <Card
              className={`page-enter-fast delay-${index + 1}`}
              sx={{ height: '100%', borderRadius: 1.25, ...frameSx }}
            >
              <Box className="hud-corner hud-corner-tl" />
              <Box className="hud-corner hud-corner-br" />
              <CardContent sx={{ p: 3 }}>
                <Stack spacing={1.5}>
                  <Box sx={hudHeaderSx}>
                    <Typography className="hud-code" sx={hudCodeSx}>0{index + 2}</Typography>
                    <Typography variant="h5">{project.title}</Typography>
                    <Typography sx={hudCodeSx}>AUX</Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ minHeight: 88 }}>
                    {project.summary}
                  </Typography>
                  <Chip
                    icon={<MemoryIcon />}
                    label={project.stack}
                    sx={{
                      alignSelf: 'flex-start',
                      bgcolor: 'transparent',
                      color: '#d8b4fe',
                      borderColor: alpha('#7c3aed', 0.24),
                    }}
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
