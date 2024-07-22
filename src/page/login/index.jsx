// import Input from "../../componen/componen-item/form/input"
// import LogoImg from "../../componen/componen-item/logo-img"
// import Background from '../../assets/img/Logo.png'
// import InputPswd from "../../componen/componen-item/form/input-pswd"
import LoginForm from "../../componen/componen-item/form/login-form"
import './login.css'
// let props1 = {
//     labelInput: "Ussername",
//     placeholder: "Masukkan ussername"
    
// }
// let props2 = {
//     labelInput: "Masukkan kata sandi",
//     placeholder2: "Masukkan kata sandi",

// }
const Login = () => {
    return (
        // <div className="bg-[#141414]  m-0 p-0 ">
        //     <img src={Background} alt="" className="w-full h-screen object-cover"/>
        //     <div className="bg-[#141414] max-w-[456px] p-20">
        //     <LogoImg />
        //     <div className="block">
        //     <Input props = {props1}/>
        //     <Input props = {props2}/>
        //     </div>
        // </div>
        // </div>
    //    <div style={{backgroundImage: {Background}}}>
    //        <LogoImg />
    //        <Input props = {props1}/>
    //        <InputPswd props = {props2}/>
    //    </div>
    <div>
        <div >
            <LoginForm />
        </div>
    </div>
    )
}    
export default Login