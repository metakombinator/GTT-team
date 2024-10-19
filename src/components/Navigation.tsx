import { useRouter } from 'next/router';

const Navigation: React.FC = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

 /*   const goForward = () => {
        window.history.forward();
    };*/

    return (
        <div>
            <button onClick={goBack}>Назад</button>
        </div>
    );
};

export default Navigation;

