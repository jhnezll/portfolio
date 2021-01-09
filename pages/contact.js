import React, {useState} from "react";
import PageLayout from "../components/PageLayout";
import {Button, MuiThemeProvider, TextField} from "@material-ui/core";
import Theme from "../styles/MuiTheme";
import emailjs from "emailjs-com";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_367u4bt', 'portfolio_template', e.target, 'user_F7T9BEHez2nx9lTZG3Z71')
            .then((result) => {
                console.log(result.text);
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
                        <h1 className="tracking-widest text-center text-gray-500">CONTACT FORUM</h1>
                        <h1 className="text-4xl font-bold text-center">Let's get to work!</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div className="w-full flex space-x-4">
                                {/*Name*/}
                                <TextField className="w-full" label="Name" id="name" name="name" variant="outlined" onChange={event => setFormData({
                                    ...formData,
                                    name: event.target.value
                                })} value={formData.name} required type="text"/>

                                {/*Email*/}
                                <TextField className="w-full" label="Email" id="email" name="email" variant="outlined" onChange={event => setFormData({
                                    ...formData,
                                    email: event.target.value
                                })} value={formData.email} required type="email"/>
                            </div>

                            {/*Subject*/}
                            <TextField className="w-full" label="Subject" id="subject" variant="outlined" name="subject" onChange={event => setFormData({
                                ...formData,
                                subject: event.target.value
                            })} value={formData.subject} required type="text"/>

                            {/*Message*/}
                            <TextField multiline rows={4} className="w-full" label="Message" id="subject" variant="outlined" name="message" onChange={event => setFormData({
                                ...formData,
                                message: event.target.value
                            })} value={formData.message} required type="text"/>

                            {/*Bottom of Forum*/}
                            <div className="flex justify-end space-x-2">
                                <Button type="submit" variant="contained" color="primary" disableElevation>Send</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </MuiThemeProvider>
        </PageLayout>
    )
}