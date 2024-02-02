import InputBox from "../components/input.component";

const UserAuthForm = ({ type }) => {
    return (
        <section className="h-cover flex items-center justify-center">
            <form className="w-[80%] max-w-[400px]">
                <h1 className="text-4xl font-IBM font-bold text-center mb-24">
                    {type == "sign-in" ? "สวัสดีอีกครั้ง" : "เข้าร่วมวันนี้" }
                </h1>

                {
                    type != "sign-in" ?
                    <InputBox 
                        name="fullname"
                        type="text"
                        placeholder="Username"
                        icon="fi-rr-user"
                    />
                    : ""
                }

                    <InputBox 
                        name="email"
                        type="email"
                        placeholder="email"
                        icon="fi-rr-at"
                    />

                    <InputBox 
                        name="password"
                        type="password"
                        placeholder="password"
                        icon="fi-rr-key"
                    />

                    <button
                        className="btn-dark center mt-14"
                        type="submit"
                    >
                        { type.replace("-", " ") }
                    </button>


                    <div className="relative w-full flex items-center gap-2 my-10 opacity-10 text-black font-bold">
                        <hr className="w-1/2 border-black" />
                        <p>or</p>
                        <hr className="w-1/2 borderr-black" />
                    </div>
            </form>
        </section>
    )
}

export default UserAuthForm;