import Typography from '@mui/material/Typography';

export interface Props {
    minutes: string;
    seconds: string;
}

const Timer = ({ minutes, seconds }: Props) => {
    return (
        <Typography variant="h6" color="grey.500">
            {minutes}:{seconds}
        </Typography>
    );
};
export default Timer;
