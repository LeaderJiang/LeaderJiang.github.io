import MemoryIcon from '@mui/icons-material/Memory'
import { alpha, Box, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material'
import { featuredProject, projects } from '../siteData'
import { frameSx, linePanelSx } from '../ui'

export default function ProjectsPage() {
  return (
    <Card sx={{ borderRadius: 1.5, ...frameSx }}>
      <Box className="hud-scan" />
      <Box className="hud-corner hud-corner-tl" />
      <Box className="hud-corner hud-corner-tr" />
      <Box className="hud-corner hud-corner-bl" />
      <Box className="hud-corner hud-corner-br" />
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Stack spacing={1.5} sx={{ mb: 3 }}>
          <Typography variant="overline" color="primary.light">
            PROJECT ARCHIVE
          </Typography>
          <Typography variant="h3">Selected Builds</Typography>
          <Typography color="text.secondary">
            這裡放的是你最值得被看見的建構能力，不只是作品列表，而是你如何定義問題與完成產品。
          </Typography>
        </Stack>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card sx={{ height: '100%', borderRadius: 1.25, ...frameSx }}>
              <Box className="hud-scan" />
              <Box className="hud-corner hud-corner-tl" />
              <Box className="hud-corner hud-corner-br" />
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack spacing={2.5}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2}>
                    <Box>
                      <Typography variant="body2" color="primary.light">
                        FEATURED CASE / 01
                      </Typography>
                      <Typography variant="h4" sx={{ mt: 1 }}>
                        {featuredProject.title}
                      </Typography>
                    </Box>
                    <Chip
                      icon={<MemoryIcon />}
                      label="Flagship Build"
                      sx={{
                        alignSelf: 'flex-start',
                        bgcolor: 'transparent',
                        color: 'primary.light',
                        borderColor: alpha('#67e8f9', 0.24),
                      }}
                    />
                  </Stack>

                  <Typography color="text.secondary" sx={{ fontSize: '1.04rem', lineHeight: 1.8, maxWidth: 680 }}>
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
                        <Box sx={{ p: 2, borderRadius: 1, ...linePanelSx }}>
                          <Typography variant="body2" color="primary.light">
                            0{index + 1}
                          </Typography>
                          <Typography sx={{ mt: 1 }}>{item}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={2.5} sx={{ height: '100%' }}>
              <Card sx={{ borderRadius: 1.25, ...frameSx }}>
                <Box className="hud-corner hud-corner-tl" />
                <Box className="hud-corner hud-corner-br" />
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={1.5}>
                    <Typography variant="body2" color="primary.light">
                      PROJECT SIGNAL
                    </Typography>
                    <Typography variant="h5">What I optimize</Typography>
                    <Typography color="text.secondary">
                      架構清楚、互動順暢、資料密度高但不混亂，讓產品真的能被使用，而不只是能被展示。
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>

              <Card sx={{ flexGrow: 1, borderRadius: 1.25, ...frameSx, borderStyle: 'dashed' }}>
                <Box className="hud-corner hud-corner-tl" />
                <Box className="hud-corner hud-corner-br" />
                <CardContent sx={{ p: 3, height: '100%' }}>
                  <Stack justifyContent="space-between" sx={{ height: '100%' }} spacing={3}>
                    <Box>
                      <Typography variant="body2" color="primary.light">
                        DEPLOYMENT MODE
                      </Typography>
                      <Typography variant="h5" sx={{ mt: 1 }}>
                        From concept to live interface
                      </Typography>
                    </Box>
                    <Typography color="text.secondary">
                      可以繼續把這裡接成真實案例、履歷下載、聯絡資訊，或串成多頁式作品網站。
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          {projects.map((project, index) => (
            <Grid key={project.title} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', borderRadius: 1.25, ...frameSx }}>
                <Box className="hud-corner hud-corner-tl" />
                <Box className="hud-corner hud-corner-br" />
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={1.5}>
                    <Typography variant="body2" color="primary.light">
                      0{index + 2}
                    </Typography>
                    <Typography variant="h5">{project.title}</Typography>
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
      </CardContent>
    </Card>
  )
}
