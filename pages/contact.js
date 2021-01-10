import React, {useState} from "react";
import PageLayout from "../components/PageLayout";
import {Button, MuiThemeProvider, TextField} from "@material-ui/core";
import Theme from "../styles/MuiTheme";
import emailjs from "emailjs-com";
import FormActive from "../components/Contact/FormActive";
import FormSubmitted from "../components/Contact/FormSubmitted";
import Loading from "../components/Contact/Loading";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm('service_367u4bt', 'portfolio_template', e.target, 'user_F7T9BEHez2nx9lTZG3Z71')
            .then((result) => {
                setFormSubmittedSuccessfully(true)
                setIsLoading(false);
            }, (error) => {
                console.log(error.text);
            });
    }

    return(
        <PageLayout title="Contact John">
            <MuiThemeProvider theme={Theme}>
            <div className="h-screen flex flex-col justify-center items-center px-12 space-y-4">
                <div className="w-fulltext-center rounded-lg border border-gray-200 p-8">
                    <div className="space-y-2">
                        <form onSubmit={handleSubmit}>
                            {isLoading ? <Loading/> : null}
                            {formSubmittedSuccessfully ? <FormSubmitted/> : <FormActive formData={formData} setFormData={setFormData}/>}
                        </form>
                    </div>
                </div>
            </div>
            </MuiThemeProvider>
        </PageLayout>
    )
}