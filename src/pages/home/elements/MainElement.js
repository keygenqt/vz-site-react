import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Button, Container, Fab, FormGroup, Grid, TextField, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import {LanguageContext, useWindowResize} from "../../../base";
import {Formik, useFormikContext} from "formik";
import * as Yup from 'yup';
import {MethodsRequest} from "../../../services/MethodsRequest";
import {AlertError, AlertSuccess} from "../../../components";

const BusinessLogic = () => {

    const {isLocEn} = useContext(LanguageContext)
    const {resetForm} = useFormikContext();

    useEffect(() => {
        resetForm()
    }, [resetForm, isLocEn]);

    return null;
};

function MainElement(prop) {

    const {t, i18n, isLocEn} = useContext(LanguageContext)
    const {height} = useWindowResize();

    return (
        <div style={{height: height}} className={"BlockMain AppTable"}>
            <div className={"AppTableCell"}>
                <Grid container columns={12} spacing={2.2}>
                    <Grid item sm={12}>
                        <Container maxWidth="lg">
                            <Grid container columns={12} spacing={1}>
                                <Grid item sm={12} xs={12}>
                                    <Typography align={"center"} variant="h1" className={"Title-" + i18n.language}>
                                        {t("pages.home.t_main_hello")}
                                    </Typography>
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <Typography align={"center"} variant="h2" className={"Subtitle-" + i18n.language}>
                                        {t("pages.home.t_main_subtitle")}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item sm={12}>
                        <Container maxWidth="sm">
                            <Grid container spacing={2}>
                                <Grid item sm={12}>

                                    <Formik
                                        initialValues={{
                                            email: '',
                                            submit: null
                                        }}
                                        validationSchema={Yup.object().shape({
                                            email: Yup.string().email(t('pages.home.t_validate_email')),
                                        })}
                                        onSubmit={async (values, {setErrors, setStatus, setSubmitting, resetForm}) => {

                                            setStatus({success: null});
                                            setErrors({});

                                            try {

                                                await new Promise(r => setTimeout(r, 1000));

                                                await MethodsRequest.connect({
                                                    email: values.email,
                                                    locale: isLocEn ? 'EN-en' : 'RU-ru',
                                                })

                                                resetForm({})
                                                setStatus({success: true});
                                                setSubmitting(false);

                                            } catch (error) {

                                                setErrors({
                                                    email: error.findError('email') === 'Must not be null and not blank'
                                                        ? t('pages.home.t_validate_required')
                                                        : error.findError('email'),
                                                    submit: error.message
                                                });

                                                setStatus({success: false});
                                                setSubmitting(false);
                                            }
                                        }}
                                    >
                                        {({
                                              status,
                                              errors,
                                              handleBlur,
                                              handleChange,
                                              handleSubmit,
                                              isSubmitting,
                                              touched,
                                              values,
                                              setErrors
                                          }) => (
                                            <form noValidate onSubmit={handleSubmit}>

                                                <BusinessLogic/>

                                                {errors.submit && !errors.email && (
                                                    <AlertError>
                                                        {t('pages.home.t_common_error')}
                                                    </AlertError>
                                                )}

                                                {errors.email && (
                                                    <AlertError>
                                                        {errors.email}
                                                    </AlertError>
                                                )}

                                                {status && status.success && (
                                                    <AlertSuccess>
                                                        {t('pages.home.t_main_success')}
                                                    </AlertSuccess>
                                                )}

                                                <FormGroup>
                                                    <Grid container spacing={2} wrap={"nowrap"}>
                                                        <Grid item sm={8}>
                                                            <TextField
                                                                disabled={isSubmitting}
                                                                type={'email'}
                                                                name={'email'}
                                                                value={values.email}
                                                                error={Boolean(touched.email && errors.email)}
                                                                onBlur={handleBlur}
                                                                onChange={(e) => {
                                                                    setErrors({});
                                                                    handleChange(e)
                                                                }}
                                                                variant="outlined"
                                                                autoComplete="email"
                                                                fullWidth
                                                                id="email"
                                                                label={t("pages.home.t_main_email_label")}
                                                            />
                                                        </Grid>
                                                        <Grid item sm={4}>
                                                            <Button
                                                                disabled={isSubmitting || Boolean(errors.email)}
                                                                type="submit"
                                                                style={{height: 55}}
                                                                fullWidth
                                                                size="large"
                                                                variant="outlined"
                                                            >
                                                                {t("pages.home.t_main_btn")}
                                                            </Button>
                                                        </Grid>
                                                    </Grid>

                                                </FormGroup>
                                            </form>
                                        )}
                                    </Formik>

                                </Grid>
                                <Grid item sm={12}>
                                    <Typography align={"left"} variant="subtitle1">
                                        {t("pages.home.t_main_info")}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>

                </Grid>

                <Fab
                    onClick={prop.onClick}
                    className={"BottomButton"}
                    variant="extended"
                    color="primary"
                    aria-label="add"
                >
                    <ExpandMore/>
                </Fab>

            </div>
        </div>
    );
}

export default MainElement;