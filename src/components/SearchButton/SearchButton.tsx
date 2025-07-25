import SearchIcon from '@mui/icons-material/Search'
import Button from '../common/Button/Button'

interface Props {
    onClick: () => void
    label?: string
}

export default function SearchButton({ onClick, label = 'Explore' }: Props) {
    return (
        <Button
            onClick={onClick}
            startIcon={<SearchIcon />}
            sx={{
                backgroundColor: '#8ab4f8',
                color: '#202124',
                borderRadius: '24px',
                textTransform: 'none',
                fontWeight: 500,
                padding: '6px 16px',
                '&:hover': {
                    backgroundColor: '#a3c3f9',
                },
            }}
        >
            {label}
        </Button>
    )
}
