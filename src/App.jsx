import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import MemoryIcon from '@mui/icons-material/Memory'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SensorsIcon from '@mui/icons-material/Sensors'
import TerminalIcon from '@mui/icons-material/Terminal'
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

const signals = [
  { label: 'Frontend Systems', value: 'React / MUI / UX Engine' },
  { label: 'Current Mode', value: 'Building polished product interfaces' },
  { label: 'Base Station', value: 'Taiwan / Remote-ready collaboration' },
]

const featuredProject = {
  title: 'Genesis Frontend',
  summary:
    '企業流程前端系統，整合儀表板、銷售、出勤與列印流程。核心重點不是堆功能，而是讓高密度操作在同一套視覺語言下仍然清晰、穩定、可維護。',
  stack: ['React 19', 'Vite', 'MUI 7', 'Chart.js'],
  metrics: ['Dashboard-first UX', 'Business workflow driven', 'Print-ready interfaces'],
}

const projects = [
  {
    title: 'Sci-Fi Personal Hub',
    summary:
      '個人首頁作為品牌入口，結合作品展示、身份敘事與高辨識度的科技視覺語言。',
    stack: 'React, MUI, Motion-driven layout',
  },
  {
    title: 'Interface Prototyping',
    summary:
      '快速將產品概念落地成可演示介面，重視資訊階層、互動節奏與視覺精準度。',
    stack: 'Design systems, component architecture',
  },
]

const capabilities = [
  '以 React 建構可維護的介面架構',
  '使用 MUI 自訂主題與設計語言',
  '為商務系統打造高密度但清楚的 UI',
  '從靜態頁面升級到可部署的產品前端',
]

export default function App() {
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
          maskImage:
            'radial-gradient(circle at center, black 35%, transparent 90%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', py: { xs: 3, md: 5 } }}>
        <Stack spacing={3}>
          <Box
            sx={{
              position: 'relative',
              px: { xs: 0.5, md: 1.5 },
              py: { xs: 2, md: 4 },
            }}
          >
            <Stack spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems={{ xs: 'flex-start', md: 'center' }}
                spacing={2}
              >
                <Chip
                  icon={<SensorsIcon />}
                  label="Personal Command Interface"
                  sx={{
                    bgcolor: alpha('#67e8f9', 0.08),
                    color: 'primary.light',
                    border: `1px solid ${alpha('#67e8f9', 0.18)}`,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  SIGNAL STATUS / ONLINE / PORTFOLIO NODE
                </Typography>
              </Stack>

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
                      我專注於把想法轉成可部署、可維護、可展示的前端產品。
                      這個首頁以 SCI-FI 科技感為主軸，將個人品牌、作品敘事與介面美學
                      收束成一個有辨識度的入口。
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <Button
                        variant="contained"
                        startIcon={<RocketLaunchIcon />}
                        href="#projects"
                        sx={{
                          alignSelf: 'flex-start',
                          color: '#02111f',
                          background:
                            'linear-gradient(135deg, #67e8f9 0%, #7dd3fc 42%, #818cf8 100%)',
                          boxShadow: `0 12px 40px ${alpha('#67e8f9', 0.24)}`,
                        }}
                      >
                        Explore Projects
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/LeaderJiang"
                        sx={{
                          alignSelf: 'flex-start',
                          borderColor: alpha('#9ed7ff', 0.2),
                          color: 'text.primary',
                          bgcolor: alpha('#091326', 0.18),
                        }}
                      >
                        Open GitHub
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Paper
                    sx={{
                      p: 3,
                      borderRadius: 1.25,
                      background: alpha('#081120', 0.28),
                      backdropFilter: 'blur(18px)',
                      border: `1px solid ${alpha('#67e8f9', 0.12)}`,
                      clipPath:
                        'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
                    }}
                  >
                    <Stack spacing={2}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">SYSTEM SIGNALS</Typography>
                        <Chip
                          size="small"
                          label="ACTIVE"
                          sx={{
                            bgcolor: alpha('#34d399', 0.12),
                            color: '#7cf6bf',
                          }}
                        />
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
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Stack>
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Card
                id="projects"
                sx={{
                  borderRadius: 1.5,
                  background: alpha('#091326', 0.14),
                }}
              >
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
                      <Card
                        sx={{
                          height: '100%',
                          borderRadius: 1.25,
                          background:
                            'linear-gradient(135deg, rgba(10,18,38,0.42) 0%, rgba(12,28,58,0.36) 45%, rgba(20,49,98,0.22) 100%)',
                        }}
                      >
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                          <Stack spacing={2.5}>
                            <Stack
                              direction={{ xs: 'column', sm: 'row' }}
                              justifyContent="space-between"
                              spacing={2}
                            >
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
                                  bgcolor: alpha('#67e8f9', 0.12),
                                  color: 'primary.light',
                                }}
                              />
                            </Stack>

                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: '1.04rem', lineHeight: 1.8, maxWidth: 680 }}
                            >
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
                                    }}
                                  />
                                </Grid>
                              ))}
                            </Grid>

                            <Grid container spacing={2}>
                              {featuredProject.metrics.map((item, index) => (
                                <Grid key={item} size={{ xs: 12, md: 4 }}>
                                  <Box
                                    sx={{
                                      p: 2,
                                      borderRadius: 1,
                                      bgcolor: alpha('#081120', 0.22),
                                      border: `1px solid ${alpha('#8ec5ff', 0.08)}`,
                                    }}
                                  >
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
                        <Card
                          sx={{
                            borderRadius: 1.25,
                            background: alpha('#0b152b', 0.18),
                          }}
                        >
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

                        <Card
                          sx={{
                            flexGrow: 1,
                            borderRadius: 1.25,
                            background: alpha('#081120', 0.16),
                            borderStyle: 'dashed',
                          }}
                        >
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
                        <Card
                          sx={{
                            height: '100%',
                            borderRadius: 1.25,
                            background: alpha('#0b152b', 0.16),
                          }}
                        >
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
                                  bgcolor: alpha('#7c3aed', 0.16),
                                  color: '#d8b4fe',
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
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={3}>
                <Card sx={{ borderRadius: 1.5, background: alpha('#091326', 0.14) }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={2}>
                      <Typography variant="overline" color="primary.light">
                        CAPABILITIES
                      </Typography>
                      <Typography variant="h4">Core Strengths</Typography>
                      {capabilities.map((item) => (
                        <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                          <TerminalIcon sx={{ mt: '2px', color: 'primary.main' }} />
                          <Typography color="text.secondary">{item}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                <Card sx={{ borderRadius: 1.5, background: alpha('#091326', 0.14) }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={2}>
                      <Typography variant="overline" color="primary.light">
                        CONTACT LINK
                      </Typography>
                      <Typography variant="h4">Open a Channel</Typography>
                      <Typography color="text.secondary">
                        之後可以替換成你的 email、LinkedIn、作品平台或履歷下載連結。
                      </Typography>
                      <Button
                        component={Link}
                        href="https://github.com/LeaderJiang"
                        target="_blank"
                        rel="noreferrer"
                        variant="contained"
                        endIcon={<LaunchIcon />}
                        sx={{
                          alignSelf: 'flex-start',
                          color: '#02111f',
                          background:
                            'linear-gradient(135deg, #9ae6ff 0%, #67e8f9 42%, #60a5fa 100%)',
                        }}
                      >
                        Visit Profile
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}
