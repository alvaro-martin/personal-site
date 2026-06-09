import { useTranslation } from "react-i18next";
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
               console.log("Fallo expresion regular.")
           }
 
       }
   };

    return (
        <section id="contactme" className="flex flex-col items-center my-16 pt-[10rem]">
            <h1 className="text-[color:var(--color-fontColor1)] font-bold text-[3rem]">{t("contactme.title")}</h1>
            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] my-4">{t("contactme.subtitle")}</p>
            <div className="flex flex-row items-center justify-center max-[778px]:flex-col">
                <div className="flex flex-col mx-8">
                    <div className="flex flex-row items-center justify-start my-2 text-[color:var(--color-fontColor4)]">
                        <HiOutlineMail size={40} />
                        <div className="flex flex-col justify-center my-2 mx-2">
                            <p className="text-[color:var(--color-fontColor1)] font-bold text-[2.8rem] text-center mb-[0.6rem]">{t("contactme.email")}</p>
                            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] text-center">{t("contactme.emaildata")}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start my-2 text-[color:var(--color-fontColor4)]">
                        <GoLocation size={40} />
                        <div className="flex flex-col justify-center my-2 mx-2">
                            <p className="text-[color:var(--color-fontColor1)] font-bold text-[2.8rem] text-center mb-[0.6rem]">{t("contactme.location")}</p>
                            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] text-center">{t("contactme.locationData")}</p>
                        </div>
                    </div>
                </div>
                <form className="flex flex-col m-8" onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder={t("contactme.name")}
                        value={toSend.from_name}
                        onChange={handleChange}
                        required
                        className="bg-[color:var(--color-background3)] w-[500px] text-[color:var(--color-fontColor3)] text-[1.6rem] p-4 my-4 rounded-[1rem] border-none max-[560px]:w-[300px]"
                    />
                    <input
                        type='email'
                        name='reply_to'
                        placeholder={t("contactme.email")}
                        value={toSend.reply_to}
                        onChange={handleChange}
                        required
                        className="bg-[color:var(--color-background3)] w-[500px] text-[color:var(--color-fontColor3)] text-[1.6rem] p-4 my-4 rounded-[1rem] border-none max-[560px]:w-[300px]"
                    />
                    <textarea
                        type='text'
                        name='message'
                        placeholder={t("contactme.message")}
                        rows='8'
                        cols='30'
                        value={toSend.message}
                        onChange={handleChange}
                        required
                        className="bg-[color:var(--color-background3)] w-[500px] text-[color:var(--color-fontColor3)] text-[1.6rem] p-4 my-4 rounded-[1rem] border-none max-[560px]:w-[300px]"
                    />
                    <button
                        type='submit'
                        onClick={sendEmailButton}
                        className="bg-[color:var(--color-background2)] text-[color:var(--color-fontColor2)] font-bold text-[2rem] rounded-[0.5rem] border-none w-[19rem] h-[6rem] flex flex-row items-center justify-center no-underline cursor-pointer my-4"
                    >
                        {t("contactme.button")}
                        <TiArrowRightOutline size={'3rem'} />
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </section>
    );
};

export {ContactMe};