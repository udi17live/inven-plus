import LoginForm from "@/components/forms/authForms/LoginForm";

export default function LoginPage() {
    return (
        <>
            <h2 className="mb-6 text-2xl">Welcome Back, please login</h2>
            <div className="w-full">
                <LoginForm/>
            </div>
        </>
    )
}