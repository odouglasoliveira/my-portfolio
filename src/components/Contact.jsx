import { Element } from 'react-scroll';
import emailJs from '@emailjs/browser';
import Joi from 'joi';

const Contact = () => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(50).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }).required(),
        message: Joi.string().required().min(10),
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const message = e.target.elements.message.value;
        const templateParams = {
          from_name: name,
          message: message,
          email: email,
        }
        try {
            await schema.validateAsync({name, email, message})
            emailJs.send('service_yno3x09', 'template_uuwmnbe', templateParams, 'R-UO_aQY1P-l5ZiHR').then((response) => console.log('E-mail enviado:', response))
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
        }
    };

    return (
        <Element name="contact">
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl text-[#F5CB5C] mb-4">Contato 📞</h2>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="text-gray-400">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Digite seu nome"
                            className="p-2 rounded bg-[#333533] text-white focus:outline-none focus:ring-2 focus:ring-[#F5CB5C] focus:caret-[#F5CB5C]"
                            autoComplete='off'
                        />

                        <label htmlFor="email" className="text-gray-400">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="exemplo@email.com"
                            className="p-2 rounded bg-[#333533] text-white focus:outline-none focus:ring-2 focus:ring-[#F5CB5C] focus:caret-[#F5CB5C]"
                            autoComplete='off'
                        />

                        <label htmlFor="message" className="text-gray-400">Mensagem:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Digite sua mensagem aqui."
                            className="p-2 rounded bg-[#333533] text-white focus:outline-none focus:ring-2 focus:ring-[#F5CB5C] focus:caret-[#F5CB5C]"
                            autoComplete='off'
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-[#F2BD2C] hover:bg-[#F5CB5C] active:bg-[#D39E0D] text-[#242423] py-2 px-4 rounded transition"
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
