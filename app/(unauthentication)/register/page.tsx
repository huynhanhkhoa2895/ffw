"use client";
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from 'next/navigation';


type Inputs = {
    name: string
    email: string
    password: string
}
const RegisterPage = () => {
    const { push } = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const rs = await fetch('/api/register',{
            method: 'POST',
            body: JSON.stringify(data)
        })
        if(rs.status === 200 || rs.status === 201) {
            push('/api/auth/signin')
        } else {
            alert('Error please try again')
        }

    }


    return (
        <div className={'h-screen w-screen flex items-center justify-center'}>
            <form className={'max-w-[350px] w-full mx-auto shadow-2xl bg-white p-10'} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={'text-3xl mb-3'}>Register</h1>
                <div className={'mb-2'}>
                    <input placeholder={"Name"} className={'p-2 border rounded-lg'} {...register("name", { required: true })} />
                </div>
                <div className={'mb-2'}>
                    <input placeholder={"Email"} type={'email'} className={'p-2 border rounded-lg'} {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} />
                </div>
                <div className={'mb-2'}>
                    <input placeholder={"Password"} className={'p-2 border rounded-lg'} type={'password'} {...register("password", { required: true })} />
                    {errors.email && <span>This field is required</span>}
                </div>

                <button className={'p-2 rounded bg-primary text-white'} type={"submit"}>Register</button>
            </form>
        </div>

    )

}
export default RegisterPage
