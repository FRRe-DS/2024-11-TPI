// AuthPage.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip } from 'swiper/modules';
import Login from "../components/Login.tsx";
import RegisterForm from "../components/RegisterForm.tsx";
import UserRoleIndicator from "../../../layout/Navbar/component/ui/UserRoleIndicator.tsx";

export default function AuthPage() {

    return (
        <div
            className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center"  // Añadido bg-cover y min-h-screen
            style={{
                backgroundImage:
                    "url('https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/03/Fondo-escultores-invitados.jpg')",
            }}
        >
            <UserRoleIndicator/>
            <div className="w-full flex justify-center p-7">
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    modules={[EffectFlip]}
                    className="w-full max-w-md"
                >
                    <SwiperSlide className="flex items-center justify-center">
                        <Login/>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <RegisterForm/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
