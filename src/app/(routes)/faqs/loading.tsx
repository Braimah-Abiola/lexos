import { Loader } from "lucide-react";

const LoadingAnimation = () => {
    return (
        <div className=" w-full h-screen flex items-center justify-center">
            <div className=" flex flex-col items-center gap-2">
                <Loader className=" animate-spin text-primary" />
            </div>
        </div>
    );
}

export default LoadingAnimation;