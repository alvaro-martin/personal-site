import { useTranslation } from "react-i18next";
import { ContactButton, ContactMeWrapper, ContactSubWrapper, EmailLocation, EmailLocationData, EmailLocationWrapper, FormWrapper, InputForm, MessageForm, PEmailLocation, PEmailLocationData, SectionSubtitle, SectionTitle } from "./ContactMe.styles";
import {HiOutlineMail} from 'react-icons/hi';
import {GoLocation} from 'react-icons/go';
import {TiArrowRightOutline} from 'react-icons/ti';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
    const [t] = useTranslation('global');
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: ''
    });
    
    const onSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    const sendEmailButton = () => {
       if (toSend.from_name !== '' && toSend.message !== '' && toSend.reply_to !== ''){
          
           //Comprobamos del lado del cliente que el correo sea válido
           const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
           
           if(expresionRegular.test(toSend.reply_to)){
               emailjs.send(
               import.meta.env.VITE_EMAILJS_SERVICE_ID,
               import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
               toSend,
               { publicKey: import.meta.env.VITE_EMAILJS_KEY }
               )
               .then((response) => {
                   console.log('SUCCESS!', response.status, response.text);
               })
               .catch((err) => {
                   console.log('FAILED...', err);
               });
 
               setToSend({
                   from_name: '',
                   message: '',
                   reply_to: ''
               });
 
               toast("Email enviado correctamente!");
           } else {
               console.log("Falló expresión regular.")
           }
 
       }
   };


    return (
        <ContactMeWrapper id="contactme">
            <SectionTitle>
                {t("contactme.title")}
            </SectionTitle>
            <SectionSubtitle>
                {t("contactme.subtitle")}
            </SectionSubtitle>
            <ContactSubWrapper>
                <EmailLocationWrapper>
                    <EmailLocation>
                        <HiOutlineMail size={40} />
                        <EmailLocationData>
                            <PEmailLocation>
                                {t("contactme.email")}
                            </PEmailLocation>
                            <PEmailLocationData>
                                {t("contactme.emaildata")}
                            </PEmailLocationData>
                        </EmailLocationData>
                    </EmailLocation>
                    <EmailLocation>
                        <GoLocation size={40} />
                        <EmailLocationData>
                            <PEmailLocation>
                                {t("contactme.location")}
                            </PEmailLocation>
                            <PEmailLocationData>
                                {t("contactme.locationData")}
                            </PEmailLocationData>
                        </EmailLocationData>
                    </EmailLocation>
 
                </EmailLocationWrapper>
                <FormWrapper onSubmit={onSubmit}>
                    <InputForm 
                        type='text'
                        name='from_name'
                        placeholder={t("contactme.name")}
                        value={toSend.from_name}
                        onChange={handleChange}
                        required
                    />
                    <InputForm 
                        type='email'
                        name='reply_to'
                        placeholder={t("contactme.email")}
                        value={toSend.reply_to}
                        onChange={handleChange}
                        required
                    />
                    <MessageForm 
                        type='text'
                        name='message'
                        placeholder={t("contactme.message")}
                        rows='8'
                        cols='30'
                        value={toSend.message}
                        onChange={handleChange}
                        required
                    />
                    <ContactButton
                        type='submit'
                        onClick={sendEmailButton}
                    >
                        {t("contactme.button")}
                        <TiArrowRightOutline size={'3rem'} />
                    </ContactButton>
                    <ToastContainer />
                </FormWrapper>
            </ContactSubWrapper>
        </ContactMeWrapper>
    );
};

export {ContactMe};