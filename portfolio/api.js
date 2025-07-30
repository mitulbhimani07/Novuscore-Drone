import axios from 'axios';

export const submitContactForm = async (formData) => {
    try {
        const response = await axios.post('https://novuscore-drone.vercel.app/api/contact', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error submitting contact form:", error);
        throw error;
    }
};
// http://localhost:3000/api/contact
// vercel https://novuscore-drone.vercel.app/api/contact