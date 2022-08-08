import TextField from '@Components/atoms/TextField/TextField';
import Typography from '@mui/material/Typography';
import StyledEnterBlock from './StyledEnterCode';

const EnterCode = () => {
    return (
        <div>
            <Typography variant="body1">Введите код подтверждения</Typography>
            <StyledEnterBlock>
                <TextField variant="outlined" placeholder={'0'} />
                <TextField variant="outlined" placeholder={'0'} />
                <TextField variant="outlined" placeholder={'0'} />
                <TextField variant="outlined" placeholder={'0'} />
            </StyledEnterBlock>
        </div>
    );
};

export default EnterCode;
