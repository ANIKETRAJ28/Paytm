import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Heading from "../../Components/Heading";
import Input from "../../Components/Input";
import Subheading from "../../Components/Subheading";
import Warning from "../../Components/Warning";

export default function SignIn() {
    const navigate = useNavigate();
    const onClick = () => navigate("/signup");
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading heading="Sign In"/>
                    <Subheading subheading="Enter your information to login an account"/>
                    <Input type="text" label="First Name" placeholder="John"/>
                    <Input type="text" label="Last Name" placeholder="Doe"/>
                    <Input type="email" label="Email" placeholder="johndoe@gmail.com"/>
                    <Input type="password" label="Password" placeholder="123456"/>
                    <div className="pt-4">
                        <Button lable="Sign In"/>
                    </div>
                    <Warning label="Don't have an account" text="Sign Up" to="/signup"/>
                </div>
            </div>
        </div>
    );
}