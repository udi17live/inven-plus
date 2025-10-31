interface LogoLightProps {
    className?: string
}

export default function LogoLight({className}: LogoLightProps) {
    return (
        <svg
            viewBox="0 0 42 42"
            className={className}
        >
            <rect width="42" height="42" fill="#F28C34" rx="5"></rect>
            <path
                fill="#000"
                d="M5 11.764V10h4.464v25.2H7.448V11.836zM23.843 22.888q0-1.224-.396-2.016-.396-.828-1.08-1.296a4.4 4.4 0 0 0-1.512-.72 6.7 6.7 0 0 0-1.692-.216q-.828 0-1.62.144-.756.144-1.476.432-.72.252-1.476.684v15.3h-2.052V17.164h2.052v1.224a8 8 0 0 1 1.476-.792 8.7 8.7 0 0 1 1.692-.54q.9-.216 1.8-.216 1.188 0 2.16.252a5.6 5.6 0 0 1 1.764.756q.756.504 1.26 1.224.54.72.792 1.656.288.9.288 2.052V35.2h-1.98zM30.96 7v5.28h5.24v2.2h-5.24v5.32h-2.2v-5.32H23.4v-2.2h5.36V7z"
            ></path>
        </svg>
    )
}