import { Element } from 'react-scroll';
import axios from 'axios';

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const message = e.target.elements.message.value;

        try {
            const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
                personalizations: [
                    {
                        to: [{ email: 'odouglasoliveira.dev@gmail.com' }],
                        subject: 'Mensagem do seu portfólio'
                    }
                ],
                from: { email: email },
                content: [
                    {
                        type: 'text/plain',
                        value: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
                    }
                ]
            }, {
                headers: {
                    // eslint-disable-next-line no-undef
                    'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`, // Substitua pelo sua chave de API do SendGrid
                    'Content-Type': 'application/json'
                }
            });

            console.log('E-mail enviado:', response);
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
        }
    };

    return (
        <Element name="contact">
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl text-purple-500 mb-4">Contato 📞</h2>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="text-gray-400">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:caret-purple-500"
                            required
                            autoComplete='off'
                        />

                        <label htmlFor="email" className="text-gray-400">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:caret-purple-500"
                            required
                            autoComplete='off'
                        />

                        <label htmlFor="message" className="text-gray-400">Mensagem:</label>
                        <textarea
                            id="message"
                            name="message"
                            className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:caret-purple-500"
                            required
                            autoComplete='off'
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded transition"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
        </Element>
    );
}

export default Contact;
