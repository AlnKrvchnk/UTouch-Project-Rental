import { FileIcon } from '@components/atoms/Icons/Icons';
import { Link, Typography } from '@mui/material';
interface Props {
    path: string;
    fileName: string;
}
const DocumentsItem = ({ path, fileName }: Props) => {
    return (
        <Link
            href={path}
            underline="none"
            sx={{
                display: 'flex',
                alignItems: 'center',
                paddingBottom: '16px',
            }}
        >
            <Typography
                color={'primary'}
                sx={{ marginRight: '16px', fontSize: '40px', lineHeight: '0' }}
            >
                <FileIcon />
            </Typography>
            <Typography
                sx={{ fontWeight: '500', fontSize: '18px' }}
                color={'common.black'}
            >
                {fileName}
            </Typography>
        </Link>
    );
};
export default DocumentsItem;
