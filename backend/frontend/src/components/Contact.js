import { useFormik } from 'formik'
import * as yup from 'yup'
import { motion } from "framer-motion"

const validationSchema = yup.object().shape({
    firstName: yup.string().required("*First name required"),
    lastName: yup.string().required("*Last name required"),
    email: yup.string().email("*Please enter a valid e-mail address").required("*E-mail required"),
    telephone: yup.number().required("*Telephone required").positive().integer(),
    message: yup.string().required("*Message required")
    });

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          telephone:'',
          message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            fetch('https://andykirby.herokuapp.com:4000/', {
                type: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(values, null, 2)
            })
            resetForm();
          console.log(JSON.stringify(values, null, 2));
        },
        
      });

      return (
        <div className='contact-container'>
            <div className='contact-title'>LETS WORK TOGETHER...</div>
            <motion.div className='contact-card'
                initial={{ y: '-100vh' }}
                animate={{ y: '0' }}
                transition={{ duration: 2, type: 'spring' }}
                >
                <form onSubmit={formik.handleSubmit}>
                    <div className='contact-fields'>
                        <div className="first-last"> 
                            <div className='input-error'>
                                {formik.errors.firstName && formik.touched.firstName && <p className="error">{formik.errors.firstName}</p>}
                                <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder='First name:'
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                className={formik.errors.firstName && formik.touched.firstName ? "input-error" : ""}
                                />
                            </div>
                            <div className='input-error'>
                                {formik.errors.lastName && formik.touched.lastName && <p className="error">{formik.errors.lastName}</p>}
                                <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder='Last name:'
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                className={formik.errors.lastName && formik.touched.lastName ? "input-error" : ""}
                                />
                            </div>
                        </div>
                        <div className="email-phone">
                            <div className='input-error'>
                                {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email}</p>}
                                <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder='Email address:'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className={formik.errors.email && formik.touched.email ? "input-error" : ""}
                                />
                            </div>
                            <div className='input-error'>
                                {formik.errors.telephone && formik.touched.telephone && <p className="error">{formik.errors.telephone}</p>}
                                <input
                                id="telephone"
                                name="telephone"
                                type="number"
                                placeholder='Telephone:'
                                onChange={formik.handleChange}
                                value={formik.values.telephone}
                                className={formik.errors.telephone && formik.touched.telephone ? "input-error" : ""}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="message">
                        <div className='input-error'>
                            {formik.errors.message && formik.touched.message && <p className="error">{formik.errors.message}</p>}
                            </div> 
                            <textarea
                            rows="5"
                            id="message"
                            name="message"
                            type="textarea"
                            placeholder='Message:'
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            className={formik.errors.message && formik.touched.message ? "input-error" : ""}
                            />
                                 
                    </div>
                    <button className="submit" type="submit">Send</button>
                </form>
            </motion.div>
        </div>
        
      );
    };

export default ContactForm