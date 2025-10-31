import ForgotPasswordForm from "@/components/forms/authForms/ForgotPasswordForm";

export default function ForgotPasswordPage() {
    return (
        <>
            <h2 className="mb-6 text-2xl">Forgot Password? Enter your email</h2>
            <div className="w-full">
                <ForgotPasswordForm/>
            </div>
        </>
    )
}