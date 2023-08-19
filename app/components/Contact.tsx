"use client"
import Image from "next/image"
import TwitterIcon from "@/assets/twitter_icon.svg"
import GithubIcon from "@/assets/github_icon.svg"
import LinkedInIcon from "@/assets/linkedin_icon.svg"
import Container from "@/components/Container"
import {useForm, ValidationError} from "@formspree/react"

const Contact = () => {

    const [state, handleSubmit] = useForm(`${process.env.NEXT_PUBLIC_FORM}`)

    return (
        <section className="w-full py-12 bg-orange-50 dark:bg-slate-500">
            <Container>
            <div className=" w-full md:grid md:grid-cols-6 md:gap-x-20 w-full justify-between items-center" id="contact">
                <div className=" sm:w-full w-full sm:mt-8 md:mt-0 flex col-start-1 col-end-3 bg-contact bg-no-repeat bg-cover h-full rounded-lg"></div>
                <div className="w-full flex flex-col md:grid  md:grid-cols-1 md:gap-x-10 items-center justify-between mx-auto p-4 h-full col-start-3 col-end-7">
                    <div className="h-full py-8 flex flex-col justify-between">
                        <form className="grid grid-cols-1 gap-y-4" onSubmit={handleSubmit}>
                            <h4 className="text-4xl">Work With Me!</h4>
                            <p>Let&apos;s Connect and Discuss your Web Devloppment Project Today!</p>
                            <div className="grid grid-cols-3 w-1/2 ">
                                <a href="https://twitter.com/Francisco_Mambo"><Image className="w-8 mx-0" src={TwitterIcon} alt="social media icon for Twitter/X profile" /></a>
                                <a href="https://github.com/Ciscoo91"><Image  className="w-8" src={GithubIcon} alt="social media icon for Github profile" /></a>
                                <a href="https://www.linkedin.com/in/francisco-mambo/"><Image  className="w-8" src={LinkedInIcon} alt="social media icon for linkedin profile" /></a>
                            </div>
                            <div className="grid grid-cols-2 gap-6 grid-rows-auto">
                                {state.succeeded ? 'Your message has been submited':null}
                                <input type="text" name="lastname" id="lastname" placeholder="Lastname" className="p-4 text-slate-800 rounded-xl bg-white dark:bg-slate-200" />
                                <ValidationError prefix="lastname" field="lastname" errors={state.errors} />
                                <input type="text" name="firstname" id="firstname" placeholder="Firstname" className="p-4 text-slate-800 rounded-xl bg-white dark:bg-slate-200 " />
                                <ValidationError prefix="firstname" field="firstname" errors={state.errors}/>
                                <input type="email" name="email" id="email" placeholder="Email" className="p-4 text-slate-800 rounded-xl bg-white dark:bg-slate-200"/>
                                <ValidationError prefix="email" field="email" errors={state.errors}/>
                                <textarea name="message" id="message" cols={30} rows={10} className="p-4 text-slate-800 col-start-1 col-end-3 bg-white dark:bg-slate-200 rounded-xl" placeholder="Message"></textarea>
                                <ValidationError prefix="message" field="message" errors={state.errors}/>
                                <input type="submit" value="Send Message" className="bg-slate-800 text-white py-4 rounded-md col-start-1 col-end-3" disabled={state.submitting}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </Container>
        </section>
    );
}
 
export default Contact;