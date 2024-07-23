import Input from "../input";
import InputPswd from "../input-pswd";
import LogoImg from "../../logo-img";
import Button from "../button";
import ButtonGoogle from "../button-google";

const ussername = {
    label: "Ussername",
    placeholder: "Masukkan ussername",
}

const props2 = {
    labelInput: "Kata Sandi",
    placeholder2: "Masukkan kata sandi",
}

const btn = {
    btn: "Masuk",
    link: "/home"
}

const btnGoogle = {
    btn: "Masuk dengan Google",
}

const LoginForm = () => {
    return (
        <div className=" bg-login w-screen h-full bg-fixed bg-cover bg-center bg-no-repeat no-scrollbar flex justify-center items-center py-40 text-[#9D9EA1] sm:p-6 ">
        <div className="flex flex-col gap-[37px] bg-[#181A1C] bg-opacity-80 rounded-2xl w-[529px] m-auto p-10 sm:p-6 sm:gap-5">
            <LogoImg  />
            <div className="text-white">
                <h3 className="text-[32px] p-0 text-center sm:text-lg">Masuk</h3>
                <p className="text-base text-center sm:text-[10px]">Selamat datang kembali!</p>
            </div>
            <Input props = {ussername}/>
            <div>
                <InputPswd props = {props2} />
                <div className="flex justify-between items-center text-base text-white pt-3 sm:text-[10px]">
                <p>Belum punya akun? <b><a href="/register">Daftar</a></b></p>
                <p><a href="">Lupa kata sandi?</a></p>
                </div>
            </div>
            <div >
            <Button props = {btn} />
            <p className="text-base text-[#9D9EA1] text-center py-2 sm:text-[10px]">Atau</p>
            <ButtonGoogle props = {btnGoogle} />
            </div>
            </div>
        </div>
    )
}

export default LoginForm