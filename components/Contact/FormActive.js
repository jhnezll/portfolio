import React from "react";
import {Button, TextField} from "@material-ui/core";

export default function FormActive({formData, setFormData, isLoading, setIsLoading}) {
    return(
        <div>
            <h1 className="tracking-widest text-center text-gray-500">CONTACT FORUM</h1>
            <h1 className="text-4xl font-bold text-center">Let's get to work!</h1>
            <div className="space-y-4 pt-4">
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
            </div>
        </div>
    )
}