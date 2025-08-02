import { Box, Typography, Tooltip, IconButton } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

type TabButtonProps = {
  title: string
  subtitle?: string
  active: boolean
  tooltip?: string
  onClick: () => void
}

const TabButton = ({ title, subtitle, active, tooltip, onClick }: TabButtonProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        px: 3,
        py: 1.5,
        borderRadius: '999px',
        border: active ? '1px solid #8AB4F8' : '1px solid #3C4043',
        backgroundColor: active ? '#2F3236' : '#202124',
        color: active ? '#E8EAED' : '#BDC1C6',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          backgroundColor: '#3C4043',
        },
      }}
    >
      <Box>
        <Box display="flex" alignItems="center" gap={0.5}>
          <Typography fontWeight={500} fontSize={14}>
            {title}
          </Typography>
          {tooltip && (
            <Tooltip title={tooltip} arrow>
              <IconButton size="small" sx={{ p: 0, color: 'inherit' }}>
                <InfoOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        {subtitle && (
          <Typography fontSize={13} fontWeight={500} sx={{ color: active ? '#fff' : '#E8EAED' }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default TabButton
