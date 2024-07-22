import Input from "../input";
import InputPswd from "../input-pswd";
import LogoImg from "../../logo-img";
import Button from "../button";
import ButtonGoogle from "../button-google";

const ussername = {
    label: "Ussername",
    placeholder: "Masukkan ussername"
}

const props2 = {
    labelInput: "Kata Sandi",
    placeholder2: "Masukkan kata sandi",
}

const props3 = {
    labelInput: "Konfirmasi Kata Sandi",
    placeholder2: "Masukkan kata sandi",
}

const btn = {
    btn: "Daftar",
    link: "/home"
}

const btnGoogle = {
    btn: "Daftar dengan Google",
}

const RegisterForm = () => {
    return (
        <div className="flex justify-center items-center bg-register h-full bg-fixed bg-cover bg-no-repeat pt-[123px] py-40 sm:p-6 ">
        <div className="flex flex-col gap-[37px] bg-[#141414] bg-opacity-80 rounded-2xl p-10 w-[529px] sm:p-6 sm:gap-5">
            <LogoImg  />
            <div className="text-white">
                <h3 className="text-[32px] p-0 text-center sm:text-lg">Daftar</h3>
                <p className="text-base text-center sm:text-[10px]">Selamat datang!</p>
            </div>
            <Input props = {ussername}/>
            <InputPswd props = {props2} />
            <div className="pt-3">
                <InputPswd props = {props3} />        
            <p className="text-base text-[#C1C2C4] py-2 sm:text-[10px]">Sudah punya akun? <b><a href="/login"> Masuk</a></b></p>
            </div>
            <div>
                <Button props = {btn} />
                <p className="text-base text-[#C1C2C4] text-center py-2 sm:text-[10px]">Atau</p>
                <ButtonGoogle props = {btnGoogle} />
            </div>
        </div>
        </div>
    )
}

export default RegisterForm


