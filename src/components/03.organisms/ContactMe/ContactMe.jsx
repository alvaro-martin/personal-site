import { useTranslation } from "react-i18next";
import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { TiArrowRightOutline } from 'react-icons/ti';
import { useState, useCallback } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FIELD_STATE = {
    IDLE: 'idle',
    ERROR: 'error',
    SUCCESS: 'success',
};

const getFieldClasses = (state) => {
    const base = "input-field";
    switch (state) {
        case FIELD_STATE.ERROR:
            return `${base} border-error focus:border-error focus:shadow-[0_0_0_3px_rgba(220,53,69,0.15)]`;
        case FIELD_STATE.SUCCESS:
            return `${base} border-success focus:border-success focus:shadow-[0_0_0_3px_rgba(40,167,69,0.15)]`;
        default:
            return base;
    }
};

const ContactMe = () => {
    const [t] = useTranslation('global');
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fieldStates, setFieldStates] = useState({
        from_name: FIELD_STATE.IDLE,
        message: FIELD_STATE.IDLE,
        reply_to: FIELD_STATE.IDLE,
    });
    const [touched, setTouched] = useState({
        from_name: false,
        message: false,
        reply_to: false,
    });

    const validateField = useCallback((name, value) => {
        if (!value.trim()) return FIELD_STATE.ERROR;
        if (name === 'reply_to' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return FIELD_STATE.ERROR;
        return FIELD_STATE.SUCCESS;
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setToSend(prev => ({ ...prev, [name]: value }));
        if (touched[name]) {
            setFieldStates(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setFieldStates(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const sendEmailButton = () => {
        const newTouched = {
            from_name: true,
            message: true,
            reply_to: true,
        };
        setTouched(newTouched);

        const newStates = {
            from_name: validateField('from_name', toSend.from_name),
            message: validateField('message', toSend.message),
            reply_to: validateField('reply_to', toSend.reply_to),
        };
        setFieldStates(newStates);

        if (Object.values(newStates).some(s => s === FIELD_STATE.ERROR)) {
            return;
        }

        setIsSubmitting(true);
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            toSend,
            { publicKey: import.meta.env.VITE_EMAILJS_KEY }
        )
            .then(() => {
                toast(t("contactme.toastSuccess", "Email enviado correctamente!"));
                setToSend({ from_name: '', message: '', reply_to: '' });
                setFieldStates({ from_name: FIELD_STATE.IDLE, message: FIELD_STATE.IDLE, reply_to: FIELD_STATE.IDLE });
                setTouched({ from_name: false, message: false, reply_to: false });
            })
            .catch(() => {
                toast.error(t("contactme.toastError", "Error al enviar el email"));
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contactme" aria-labelledby="contact-heading" className="section-wrapper py-16">
            <h1 id="contact-heading" className="section-heading">
                {t("contactme.title")}
            </h1>
            <p className="section-subtitle">
                {t("contactme.subtitle")}
            </p>
            <div className="flex flex-row items-start justify-center gap-8 md:flex-col md:items-center px-6">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center justify-start my-2 text-text-accent">
                        <HiOutlineMail size={40} aria-hidden="true" />
                        <div className="flex flex-col justify-center my-2 ml-2">
                            <p className="text-text text-3xl font-bold text-center mb-1_5">
                                {t("contactme.email")}
                            </p>
                            <p className="text-text-muted text-base text-center">
                                {t("contactme.emaildata")}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start my-2 text-text-accent">
                        <GoLocation size={40} aria-hidden="true" />
                        <div className="flex flex-col justify-center my-2 ml-2">
                            <p className="text-text text-3xl font-bold text-center mb-1_5">
                                {t("contactme.location")}
                            </p>
                            <p className="text-text-muted text-base text-center">
                                {t("contactme.locationData")}
                            </p>
                        </div>
                    </div>
                </div>
                <form className="flex flex-col m-8 gap-2" onSubmit={onSubmit} noValidate>
                    <label htmlFor="contact-name" className="sr-only">
                        {t("contactme.name")}
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        name="from_name"
                        placeholder={t("contactme.name")}
                        value={toSend.from_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-invalid={fieldStates.from_name === FIELD_STATE.ERROR}
                        aria-describedby={fieldStates.from_name === FIELD_STATE.ERROR ? "name-error" : undefined}
                        className={getFieldClasses(fieldStates.from_name)}
                    />
                    {fieldStates.from_name === FIELD_STATE.ERROR && touched.from_name && (
                        <p id="name-error" className="text-error text-sm mt-1" role="alert">{t("contactme.name")} is required</p>
                    )}

                    <label htmlFor="contact-email" className="sr-only">
                        {t("contactme.email")}
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        name="reply_to"
                        placeholder={t("contactme.email")}
                        value={toSend.reply_to}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-invalid={fieldStates.reply_to === FIELD_STATE.ERROR}
                        aria-describedby={fieldStates.reply_to === FIELD_STATE.ERROR ? "email-error" : undefined}
                        className={getFieldClasses(fieldStates.reply_to)}
                    />
                    {fieldStates.reply_to === FIELD_STATE.ERROR && touched.reply_to && (
                        <p id="email-error" className="text-error text-sm mt-1" role="alert">Please enter a valid email</p>
                    )}

                    <label htmlFor="contact-message" className="sr-only">
                        {t("contactme.message")}
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        placeholder={t("contactme.message")}
                        rows="8"
                        value={toSend.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-invalid={fieldStates.message === FIELD_STATE.ERROR}
                        aria-describedby={fieldStates.message === FIELD_STATE.ERROR ? "message-error" : undefined}
                        className={`${getFieldClasses(fieldStates.message)} resize-y min-h-[12rem]`}
                    />
                    {fieldStates.message === FIELD_STATE.ERROR && touched.message && (
                        <p id="message-error" className="text-error text-sm mt-1" role="alert">{t("contactme.message")} is required</p>
                    )}

                    <button
                        type="submit"
                        onClick={sendEmailButton}
                        disabled={isSubmitting}
                        className="btn-primary w-full md:w-[19rem] my-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            <>
                                {t("contactme.button")}
                                <TiArrowRightOutline size="3rem" aria-hidden="true" />
                            </>
                        )}
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </section>
    );
};

export { ContactMe };
