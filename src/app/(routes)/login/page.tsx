import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import Image from "next/image";

const LoginPage = () => {
    return (
        <section className=" relative h-[92vh]">
            <Wrapper className="px-2 md:px-6 w-full h-full flex">
                <div className=" h-full w-full relative flex flex-col items-center px-4 md:px-0 justify-center">
                    <div className=" flex flex-col items-center w-full max-w-[400px] bg-white px-6 py-10 rounded-2xl">

                        <div className=" h-12 w-12 md:h-14 md:w-14 aspect-square relative">
                            <Image fill src="/assets/logo-icon.png" quality={100} alt="Logo" />
                        </div>
                        <h4 className=" font-manrope text-2xl font-semibold mt-4">Welcome Back</h4>
                        <p className=" text-foreground opacity-70 text-base md:text-lg text-center max-w-[32ch]">We are happy to see you again. You can continue where you left off by logging in.</p>
                        <div className="w-full flex flex-col gap-2 mt-4">
                            <Input type="email" placeholder="Email address" />
                            <PasswordInput type="password" placeholder="Password" />
                        </div>
                        <p className=" w-full mt-2 mb-6 text-end">Forgot Password?</p>
                        <Button className=" h-11 md:text-[17px] w-full">Sign In</Button>
                    </div>
                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" rounded-t-xl object-cover object-top z-[-1]" alt="Background" />
                </div>
            </Wrapper>
        </section>
    );
}

export default LoginPage;