// GlowingLoader.tsx
import { Box, keyframes, styled } from '@mui/material'

const glowBorder = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const GlowBox = styled(Box)(() => ({
    position: 'relative',
    borderRadius: 12,
    padding: '16px 24px',
    backgroundColor: '#2b2b2b',
    color: '#fff',
    textAlign: 'center',
    overflow: 'hidden',
    zIndex: 1,

    '&::before': {
        content: '""',
        position: 'absolute',
        top: -2,
        left: -2,
        right: -2,
        bottom: -2,
        borderRadius: 14,
        background: 'linear-gradient(270deg, #00f6ff, #00ff9d, #ff00c8, #00f6ff)',
        backgroundSize: '600% 600%',
        animation: `${glowBorder} 4s linear infinite`,
        zIndex: 0,
    },

    '&::after': {
        content: '""',
        position: 'absolute',
        top: 2,
        left: 2,
        right: 2,
        bottom: 2,
        borderRadius: 10,
        backgroundColor: '#2b2b2b',
        zIndex: 1,
    },

    '& > span': {
        position: 'relative',
        zIndex: 2,
    },
}))
