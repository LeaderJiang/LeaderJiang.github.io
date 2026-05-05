import LaunchIcon from '@mui/icons-material/Launch'
import TerminalIcon from '@mui/icons-material/Terminal'
import { alpha, Box, Button, Card, CardContent, Grid, Link, Stack, Typography } from '@mui/material'
import { capabilities } from '../siteData'
import { frameSx, hudCodeSx, hudHeaderSx } from '../ui'

export default function AboutPage() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 7 }}>
        <Card sx={{ borderRadius: 1.5, ...frameSx }}>
          <Box className="hud-scan" />
          <Box className="hud-corner hud-corner-tl" />
          <Box className="hud-corner hud-corner-br" />
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={2}>
              <Box sx={hudHeaderSx}>
                <Typography sx={hudCodeSx}>ABOUT</Typography>
                <Typography variant="h3">Identity File</Typography>
                <Typography sx={hudCodeSx}>AB-01</Typography>
              </Box>
              <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                我偏好的工作方式，是把抽象需求拆成清楚的 UI 結構、資料流程與部署成果。這類型的站點可以再往下擴成真實作品介紹、服務說明、聯絡入口，或完整品牌官網。
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                如果你之後要把內容換成真實履歷、專案經歷、公司資訊或個人品牌敘事，這個結構已經足夠承接。
              </Typography>
              <Grid container spacing={1.5} sx={{ pt: 1 }}>
                {[
                  ['ROLE', 'Frontend system builder'],
                  ['FOCUS', 'Architecture, product UI, deployment'],
                  ['OUTPUT', 'Interfaces that can ship'],
                ].map(([label, text]) => (
                  <Grid key={label} size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{
                        p: 2,
                        border: `1px solid ${alpha('#8ec5ff', 0.11)}`,
                        background: alpha('#081120', 0.2),
                        minHeight: '100%',
                      }}
                    >
                      <Typography sx={hudCodeSx}>{label}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
        <Stack spacing={3}>
          <Card sx={{ borderRadius: 1.5, ...frameSx }}>
            <Box className="hud-scan" />
            <Box className="hud-corner hud-corner-tl" />
            <Box className="hud-corner hud-corner-br" />
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2}>
                <Box sx={hudHeaderSx}>
                  <Typography sx={hudCodeSx}>CAPS</Typography>
                  <Typography variant="h4">Core Strengths</Typography>
                  <Typography sx={hudCodeSx}>04</Typography>
                </Box>
                {capabilities.map((item) => (
                  <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                    <TerminalIcon sx={{ mt: '2px', color: 'primary.main' }} />
                    <Typography color="text.secondary">{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 1.5, ...frameSx }}>
            <Box className="hud-scan" />
            <Box className="hud-corner hud-corner-tl" />
            <Box className="hud-corner hud-corner-br" />
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2}>
                <Box sx={hudHeaderSx}>
                  <Typography sx={hudCodeSx}>LINK</Typography>
                  <Typography variant="h4">Open a Channel</Typography>
                  <Typography sx={hudCodeSx}>CT-01</Typography>
                </Box>
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
                    background: 'linear-gradient(135deg, #9ae6ff 0%, #67e8f9 42%, #60a5fa 100%)',
                    boxShadow: `0 12px 40px ${alpha('#67e8f9', 0.2)}`,
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
  )
}
