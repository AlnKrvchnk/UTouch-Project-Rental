import FacilityDetailBox from '@/components/atoms/FacilityDetailBox/FacilityDetailBox';
// eslint-disable-next-line max-len
import { StyledDeveloperInformSmallCard } from '@components/molecules/DeveloperInformSmallCard/StyledDeveloperInformSmallCard';
// eslint-disable-next-line max-len
import { StyledFacilityCardControls } from '@components/molecules/FacilityCardControls/StyledFacilityCardControls';
// eslint-disable-next-line max-len
import { Grid, List, ListItem } from '@mui/material';
// eslint-disable-next-line max-len
import { Skeleton } from '@mui/material';
const PseudoFacilityDetailContent = () => {
    return (
        <>
            <Skeleton variant="rectangular" width={'240px'} height={'32px'} />
            <Grid className="benefits" container>
                <div
                    style={{
                        display: 'flex',
                        marginRight: '53px',
                        alignItems: 'center',
                    }}
                >
                    <Skeleton
                        variant="circular"
                        width={'24px'}
                        height={'24px'}
                        sx={{ marginRight: '24px' }}
                    />
                    <Skeleton
                        variant="rectangular"
                        width={'70px'}
                        height={'18px'}
                    />
                </div>
            </Grid>
            <FacilityDetailBox
                className="general"
                elementContent={
                    <Grid container sx={{ justifyContent: 'space-between' }}>
                        <Grid item>
                            <Skeleton
                                variant="rectangular"
                                width={'100px'}
                                height={'18px'}
                                sx={{ marginBottom: '16px' }}
                            />
                            <List sx={{ margin: '0' }}>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item>
                            <Skeleton
                                variant="rectangular"
                                width={'73px'}
                                height={'18px'}
                                sx={{ marginBottom: '16px' }}
                            />
                            <List sx={{ margin: '0' }}>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item>
                            <Skeleton
                                variant="rectangular"
                                width={'180px'}
                                height={'18px'}
                                sx={{ marginBottom: '16px' }}
                            />
                            <List sx={{ margin: '0' }}>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{ marginBottom: '4px', padding: 0 }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'180px'}
                                        height={'14px'}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                }
            />
            <FacilityDetailBox
                className="owner"
                elementContent={
                    <StyledDeveloperInformSmallCard>
                        <div className={'imgContainer'}>
                            <Skeleton
                                variant="circular"
                                width={'100%'}
                                height={'100%'}
                            />
                        </div>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'18px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                    </StyledDeveloperInformSmallCard>
                }
            />
            <FacilityDetailBox
                className="description"
                title={
                    <Skeleton
                        variant="rectangular"
                        width={'60px'}
                        height={'18px'}
                        sx={{ marginBottom: '4px' }}
                    />
                }
                elementContent={
                    <>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'30%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                    </>
                }
            />
            <FacilityDetailBox
                className="controls"
                elementContent={
                    <StyledFacilityCardControls>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'36px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'36px'}
                            sx={{ marginBottom: '4px' }}
                        />
                    </StyledFacilityCardControls>
                }
            />
            <FacilityDetailBox
                className="sales"
                title={
                    <Skeleton
                        variant="rectangular"
                        width={'60px'}
                        height={'18px'}
                        sx={{ marginBottom: '4px' }}
                    />
                }
                elementContent={
                    <>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'30%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                    </>
                }
            />
            <FacilityDetailBox
                className="commissions"
                title={
                    <Skeleton
                        variant="rectangular"
                        width={'60px'}
                        height={'18px'}
                        sx={{ marginBottom: '4px' }}
                    />
                }
                elementContent={
                    <>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'30%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                    </>
                }
            />
            <FacilityDetailBox
                className="payment"
                title={
                    <Skeleton
                        variant="rectangular"
                        width={'60px'}
                        height={'18px'}
                        sx={{ marginBottom: '4px' }}
                    />
                }
                elementContent={
                    <>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'30%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                    </>
                }
            />
            <FacilityDetailBox
                className="documentation"
                title={
                    <Skeleton
                        variant="rectangular"
                        width={'60px'}
                        height={'18px'}
                        sx={{ marginBottom: '4px' }}
                    />
                }
                elementContent={
                    <>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'30%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                    </>
                }
            />
            <FacilityDetailBox
                className="layout"
                title={
                    <Skeleton
                        variant="rectangular"
                        width={'60px'}
                        height={'18px'}
                        sx={{ marginBottom: '4px' }}
                    />
                }
                elementContent={
                    <>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'30%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                    </>
                }
            />
            <FacilityDetailBox
                className="interiorFeatures"
                title={
                    <Skeleton
                        variant="rectangular"
                        width={'60px'}
                        height={'18px'}
                        sx={{ marginBottom: '4px' }}
                    />
                }
            />
            <FacilityDetailBox
                className="news"
                title={
                    <Skeleton
                        variant="rectangular"
                        width={'60px'}
                        height={'18px'}
                        sx={{ marginBottom: '4px' }}
                    />
                }
                elementContent={
                    <>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'30%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                    </>
                }
            />
            <FacilityDetailBox
                className="map"
                title={
                    <Skeleton
                        variant="rectangular"
                        width={'60px'}
                        height={'18px'}
                        sx={{ marginBottom: '4px' }}
                    />
                }
                elementContent={
                    <>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'30%'}
                            height={'14px'}
                            sx={{ marginBottom: '4px' }}
                        />
                    </>
                }
            />
        </>
    );
};
export default PseudoFacilityDetailContent;
